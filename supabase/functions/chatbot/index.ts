import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Input validation constants
const MAX_MESSAGES = 50;
const MAX_MESSAGE_LENGTH = 2000;

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 20; // 20 requests per minute per user

// In-memory rate limiting store (resets on cold start, which is acceptable for edge functions)
const rateLimitStore = new Map<string, { count: number; windowStart: number }>();

function checkRateLimit(userId: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const userLimit = rateLimitStore.get(userId);

  // Clean up expired entries periodically
  if (rateLimitStore.size > 1000) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (now - value.windowStart > RATE_LIMIT_WINDOW_MS) {
        rateLimitStore.delete(key);
      }
    }
  }

  if (!userLimit || now - userLimit.windowStart > RATE_LIMIT_WINDOW_MS) {
    // Start a new window
    rateLimitStore.set(userId, { count: 1, windowStart: now });
    return { allowed: true };
  }

  if (userLimit.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((RATE_LIMIT_WINDOW_MS - (now - userLimit.windowStart)) / 1000);
    return { allowed: false, retryAfter };
  }

  // Increment count
  userLimit.count++;
  rateLimitStore.set(userId, userLimit);
  return { allowed: true };
}

interface ChatMessage {
  role: string;
  content: string;
}

function validateMessages(messages: unknown): { valid: boolean; error?: string; messages?: ChatMessage[] } {
  if (!Array.isArray(messages)) {
    return { valid: false, error: "Messages must be an array" };
  }

  if (messages.length === 0 || messages.length > MAX_MESSAGES) {
    return { valid: false, error: `Messages array must contain 1-${MAX_MESSAGES} messages` };
  }

  const validatedMessages: ChatMessage[] = [];
  
  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];
    
    if (!msg || typeof msg !== 'object') {
      return { valid: false, error: `Message at index ${i} is invalid` };
    }
    
    if (!msg.role || typeof msg.role !== 'string') {
      return { valid: false, error: `Message at index ${i} missing valid role` };
    }
    
    if (!msg.content || typeof msg.content !== 'string') {
      return { valid: false, error: `Message at index ${i} missing valid content` };
    }
    
    if (msg.content.length > MAX_MESSAGE_LENGTH) {
      return { valid: false, error: `Message content must be ≤ ${MAX_MESSAGE_LENGTH} characters` };
    }
    
    if (!['user', 'assistant', 'system'].includes(msg.role)) {
      return { valid: false, error: `Invalid role "${msg.role}" at index ${i}` };
    }
    
    validatedMessages.push({
      role: msg.role,
      content: msg.content.trim()
    });
  }

  return { valid: true, messages: validatedMessages };
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Authentication check
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.log("Chatbot: Missing or invalid authorization header");
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Verify the JWT token
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } }
    );

    const token = authHeader.replace('Bearer ', '');
    const { data: claimsData, error: claimsError } = await supabaseClient.auth.getClaims(token);
    
    if (claimsError || !claimsData?.claims) {
      console.log("Chatbot: Invalid token -", claimsError?.message);
      return new Response(
        JSON.stringify({ error: "Invalid token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const userId = claimsData.claims.sub as string;
    console.log("Chatbot: Authenticated user:", userId);

    // Check rate limit
    const rateLimitResult = checkRateLimit(userId);
    if (!rateLimitResult.allowed) {
      console.log("Chatbot: Rate limit exceeded for user:", userId);
      return new Response(
        JSON.stringify({ 
          error: "Too many requests. Please wait before sending another message.",
          retryAfter: rateLimitResult.retryAfter 
        }),
        { 
          status: 429, 
          headers: { 
            ...corsHeaders, 
            "Content-Type": "application/json",
            "Retry-After": String(rateLimitResult.retryAfter)
          } 
        }
      );
    }

    // Parse and validate input
    let body;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON body" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { messages } = body;
    const validation = validateMessages(messages);
    
    if (!validation.valid) {
      console.log("Chatbot: Validation failed -", validation.error);
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const validatedMessages = validation.messages!;
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("Chatbot: LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content: `You are a friendly customer support assistant for Waks Digital Solutions, a web development company in Nairobi, Kenya.

CONTACT INFO (use exactly):
- Email: info@waksdigital.co.ke
- Phone (calls): +254 718 098 165
- WhatsApp: +254 750 509 252
- Location: Nairobi, Kenya

SERVICES: Web Development, WordPress, E-commerce, SEO, Maintenance, Copywriting

RESPONSE STYLE:
- Be warm, natural, and conversational - like chatting with a helpful friend
- Keep replies SHORT: 1-2 sentences max
- No bullet points or lists unless specifically asked
- Use casual language, contractions, and occasional emojis sparingly
- Get straight to the point
- Just respond naturally with plain text, no JSON or special formatting`
          },
          ...validatedMessages,
        ],
        stream: false,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    let rawContent = data.choices?.[0]?.message?.content || "I apologize, I couldn't process that request.";
    
    // Clean up any JSON formatting the model might have added
    if (rawContent.includes('"reply"') || rawContent.includes('"quickReplies"')) {
      try {
        // Remove markdown code blocks if present
        let cleanContent = rawContent.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const parsed = JSON.parse(cleanContent);
        rawContent = parsed.reply || rawContent;
      } catch {
        // If parsing fails, try to extract just the reply text
        const replyMatch = rawContent.match(/"reply"\s*:\s*"([^"]+)"/);
        if (replyMatch) {
          rawContent = replyMatch[1];
        }
      }
    }

    // Generate contextual quick replies based on the conversation
    const lastUserMessage = validatedMessages[validatedMessages.length - 1]?.content?.toLowerCase() || '';
    let quickReplies: string[] = [];
    
    if (lastUserMessage.includes('price') || lastUserMessage.includes('cost') || lastUserMessage.includes('pricing')) {
      quickReplies = ["Get a free quote", "See our packages", "Talk to someone"];
    } else if (lastUserMessage.includes('service') || lastUserMessage.includes('what do you')) {
      quickReplies = ["Web Development", "E-commerce", "SEO Services", "Get pricing"];
    } else if (lastUserMessage.includes('contact') || lastUserMessage.includes('call') || lastUserMessage.includes('email')) {
      quickReplies = ["Send an email", "WhatsApp us", "Request callback"];
    } else if (lastUserMessage.includes('website') || lastUserMessage.includes('web')) {
      quickReplies = ["See our portfolio", "How much does it cost?", "Start a project"];
    } else {
      quickReplies = ["Tell me about services", "Get pricing", "Contact the team"];
    }

    return new Response(
      JSON.stringify({ 
        content: rawContent,
        quickReplies: quickReplies
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Chatbot error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
