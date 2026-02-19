import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Input validation constants
const MAX_MESSAGES = 50;
const MAX_MESSAGE_LENGTH = 2000;

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 20; // 20 requests per minute per identifier

// In-memory rate limiting store (resets on cold start, which is acceptable for edge functions)
const rateLimitStore = new Map<string, { count: number; windowStart: number }>();

function checkRateLimit(identifier: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const limit = rateLimitStore.get(identifier);

  // Clean up expired entries periodically
  if (rateLimitStore.size > 1000) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (now - value.windowStart > RATE_LIMIT_WINDOW_MS) {
        rateLimitStore.delete(key);
      }
    }
  }

  if (!limit || now - limit.windowStart > RATE_LIMIT_WINDOW_MS) {
    // Start a new window
    rateLimitStore.set(identifier, { count: 1, windowStart: now });
    return { allowed: true };
  }

  if (limit.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((RATE_LIMIT_WINDOW_MS - (now - limit.windowStart)) / 1000);
    return { allowed: false, retryAfter };
  }

  // Increment count
  limit.count++;
  rateLimitStore.set(identifier, limit);
  return { allowed: true };
}

// Get client identifier for rate limiting (IP-based for anonymous users)
function getClientIdentifier(req: Request): string {
  // Try various headers for real IP
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  const realIp = req.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }
  // Fallback to a hash of user-agent + some header combination
  const ua = req.headers.get('user-agent') || 'unknown';
  return `anon-${ua.slice(0, 50)}`;
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
    // Get client identifier for rate limiting (supports anonymous users)
    const clientId = getClientIdentifier(req);
    console.log("Chatbot: Request from client:", clientId.slice(0, 20) + "...");

    // Check rate limit
    const rateLimitResult = checkRateLimit(clientId);
    if (!rateLimitResult.allowed) {
      console.log("Chatbot: Rate limit exceeded for client:", clientId.slice(0, 20));
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
            content: `You are a friendly customer support assistant for Waks Digital Solutions, a web development company based in Nairobi, Kenya. The website is https://waksdigital.co.ke

CONTACT INFO (use exactly):
- Email: info@waksdigital.co.ke
- Phone (calls): +254 718 098 165
- WhatsApp: +254 750 509 252
- Location: Nairobi, Kenya

PAYMENT OPTIONS:
1. M-Pesa & Card payments (standard)
2. Cryptocurrency via BEP20 (BSC Smart Chain) network
   - Accepted coins: BTC, ETH, SOL, AVAX, ADA, DOGE, BNB, XRP, MATIC, USDT
   - Wallet address: 0x1ae2349ac387403fa068f34f9fdff71f580f0ee7
   - IMPORTANT: Only BEP20/BSC network is accepted — wrong network = funds lost
   - After sending, share your transaction hash (TxID) with us via email or contact page for confirmation
   - BSC confirms in 15–30 seconds; we verify within 1–2 business hours (Mon–Fri, 8AM–6PM EAT)
   - Exchange rates based on CoinGecko/CoinMarketCap at time of payment
   - Refunds processed in same crypto within 7 days of payment request
   - Full crypto payment details: https://waksdigital.co.ke/pricing (scroll to crypto section on any pricing page)

WEBSITE PAGES (use these exact URLs when directing clients):
- Home: https://waksdigital.co.ke/
- Services overview: https://waksdigital.co.ke/services
- Pricing overview: https://waksdigital.co.ke/pricing
- Portfolio / Our Work: https://waksdigital.co.ke/portfolio
- About Us: https://waksdigital.co.ke/about
- Contact Us: https://waksdigital.co.ke/contact
- Blog: https://waksdigital.co.ke/blog
- FAQ: https://waksdigital.co.ke/faq
- Support Ticket: https://waksdigital.co.ke/ticket

SERVICE PAGES (link clients directly when they ask about a specific service):
- Custom Web Development: https://waksdigital.co.ke/services/web-development
- WordPress Website Design: https://waksdigital.co.ke/services/wordpress-design
- E-commerce Solutions: https://waksdigital.co.ke/services/ecommerce-solutions
- SEO Services: https://waksdigital.co.ke/services/seo-services
- Copywriting: https://waksdigital.co.ke/services/copywriting
- Website Maintenance: https://waksdigital.co.ke/services/web-maintenance
- Custom System Design: https://waksdigital.co.ke/services/custom-systems

PRICING PAGES (link clients directly when they ask about pricing for a specific service):
- Web Development Pricing: https://waksdigital.co.ke/pricing/web-development
- WordPress Pricing: https://waksdigital.co.ke/pricing/wordpress
- E-commerce Pricing: https://waksdigital.co.ke/pricing/ecommerce
- SEO Pricing: https://waksdigital.co.ke/pricing/seo
- Copywriting Pricing: https://waksdigital.co.ke/pricing/copywriting
- Maintenance Pricing: https://waksdigital.co.ke/pricing/maintenance
- Custom Systems Pricing: https://waksdigital.co.ke/pricing/custom-systems

PRICING OVERVIEW (general ballpark, always direct to exact pricing page for details):
- WordPress Website: From KES 25,000 (1-3 weeks)
- Custom Web Development: From KES 50,000 (2-6 weeks)
- E-commerce Solutions: From KES 75,000 (3-8 weeks)
- Custom System Design: From KES 100,000 (4-12 weeks)
- Website Packages: Starter KES 25,000 | Professional KES 50,000 | Premium KES 85,000 | Custom from KES 100,000
- SEO, Maintenance, and Copywriting: see pricing page for current rates

SERVICES SUMMARY:
- Custom Web Development: Unique websites built with React, HTML5, CSS3, JavaScript, Node.js
- WordPress Design: Easy-to-manage sites using WordPress, WooCommerce, Elementor, custom themes
- E-commerce Solutions: Online stores with secure payments (M-Pesa, card), inventory management, WooCommerce/Shopify/custom
- SEO Services: Keyword research, on-page optimization, local SEO, performance tracking
- Website Maintenance: Security updates, backups, performance monitoring, content updates
- Copywriting: Professional website and marketing copy
- Custom System Design: Business software, APIs, databases, automated workflows, microservices

RESPONSE STYLE:
- Be warm, natural, and conversational - like chatting with a helpful friend
- Keep replies SHORT: 1-2 sentences max, then offer a link if relevant
- When mentioning a page or service, include the direct URL so the client can click straight to it
- No bullet points or lists unless specifically asked
- Use casual language, contractions, and occasional emojis sparingly
- Get straight to the point
- Respond in plain text only - no JSON, no markdown headers, no special formatting
- When a client asks about a service or pricing, always share the specific page link`
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
    
    if (lastUserMessage.includes('crypto') || lastUserMessage.includes('bitcoin') || lastUserMessage.includes('btc') || lastUserMessage.includes('usdt') || lastUserMessage.includes('ethereum') || lastUserMessage.includes('eth') || lastUserMessage.includes('bnb') || lastUserMessage.includes('bep20') || lastUserMessage.includes('bsc') || lastUserMessage.includes('wallet') || lastUserMessage.includes('blockchain') || lastUserMessage.includes('coin') || lastUserMessage.includes('token')) {
      quickReplies = ["See crypto payment details", "Pay with Crypto", "View all pricing", "Contact us"];
    } else if (lastUserMessage.includes('payment') || lastUserMessage.includes('pay') || lastUserMessage.includes('mpesa') || lastUserMessage.includes('m-pesa')) {
      quickReplies = ["Pay with Crypto", "Crypto payment info", "View pricing", "Contact us"];
    } else if (lastUserMessage.includes('price') || lastUserMessage.includes('cost') || lastUserMessage.includes('pricing') || lastUserMessage.includes('package')) {
      quickReplies = ["Web Development pricing", "E-commerce pricing", "Pay with Crypto", "Custom Systems pricing"];
    } else if (lastUserMessage.includes('ecommerce') || lastUserMessage.includes('e-commerce') || lastUserMessage.includes('shop') || lastUserMessage.includes('store')) {
      quickReplies = ["E-commerce pricing", "See e-commerce services", "Pay with Crypto", "Contact us"];
    } else if (lastUserMessage.includes('wordpress') || lastUserMessage.includes('wp')) {
      quickReplies = ["WordPress pricing", "See WordPress services", "Pay with Crypto", "Contact us"];
    } else if (lastUserMessage.includes('seo') || lastUserMessage.includes('search') || lastUserMessage.includes('google')) {
      quickReplies = ["SEO pricing", "See SEO services", "Get a free quote", "Contact us"];
    } else if (lastUserMessage.includes('maintenance') || lastUserMessage.includes('support') || lastUserMessage.includes('update')) {
      quickReplies = ["Maintenance pricing", "Submit a ticket", "Contact us", "See services"];
    } else if (lastUserMessage.includes('service') || lastUserMessage.includes('what do you')) {
      quickReplies = ["Web Development", "E-commerce", "SEO Services", "See all services"];
    } else if (lastUserMessage.includes('contact') || lastUserMessage.includes('call') || lastUserMessage.includes('email') || lastUserMessage.includes('whatsapp')) {
      quickReplies = ["Send an email", "WhatsApp us", "Submit a ticket", "FAQ"];
    } else if (lastUserMessage.includes('portfolio') || lastUserMessage.includes('work') || lastUserMessage.includes('example')) {
      quickReplies = ["View our portfolio", "Get a free quote", "Contact us", "See services"];
    } else if (lastUserMessage.includes('website') || lastUserMessage.includes('web')) {
      quickReplies = ["Web Development pricing", "See our portfolio", "Pay with Crypto", "Contact us"];
    } else {
      quickReplies = ["See our services", "View pricing", "Pay with Crypto", "Our portfolio"];
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
