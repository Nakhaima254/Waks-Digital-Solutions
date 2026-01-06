import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
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
          ...messages,
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
    const lastUserMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';
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
