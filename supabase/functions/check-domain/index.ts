import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface DomainCheckRequest {
  domain: string;
}

interface DomainAvailability {
  domain: string;
  available: boolean;
  price?: number;
  currency?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { domain }: DomainCheckRequest = await req.json();

    // Input validation
    if (!domain || typeof domain !== "string") {
      return new Response(
        JSON.stringify({ error: "Domain name is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Clean domain name - remove whitespace and get base name
    const cleanDomain = domain.toLowerCase().trim().replace(/\s+/g, "");
    
    // Validate domain format (alphanumeric and hyphens only)
    const domainRegex = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/;
    const baseDomain = cleanDomain.split(".")[0];
    
    if (!domainRegex.test(baseDomain) || baseDomain.length < 1 || baseDomain.length > 63) {
      return new Response(
        JSON.stringify({ error: "Invalid domain name format" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const apiKey = Deno.env.get("GODADDY_API_KEY");
    const apiSecret = Deno.env.get("GODADDY_API_SECRET");

    if (!apiKey || !apiSecret) {
      console.error("GoDaddy API credentials not configured");
      return new Response(
        JSON.stringify({ error: "Domain service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Extensions to check
    const extensions = [".co.ke", ".com", ".ke", ".org", ".net", ".africa"];
    const results: DomainAvailability[] = [];

    console.log(`Checking domain availability for: ${baseDomain}`);

    // Check availability for each extension
    for (const ext of extensions) {
      const fullDomain = `${baseDomain}${ext}`;
      
      try {
        // GoDaddy API endpoint for domain availability
        const response = await fetch(
          `https://api.godaddy.com/v1/domains/available?domain=${encodeURIComponent(fullDomain)}`,
          {
            method: "GET",
            headers: {
              "Authorization": `sso-key ${apiKey}:${apiSecret}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(`GoDaddy response for ${fullDomain}:`, JSON.stringify(data));
          
          results.push({
            domain: fullDomain,
            available: data.available === true,
            price: data.price ? data.price / 1000000 : undefined, // GoDaddy returns price in micro-units
            currency: data.currency || "USD",
          });
        } else {
          const errorText = await response.text();
          console.error(`GoDaddy API error for ${fullDomain}:`, response.status, errorText);
          
          // Add as unavailable if we can't check
          results.push({
            domain: fullDomain,
            available: false,
          });
        }
      } catch (error) {
        console.error(`Error checking ${fullDomain}:`, error);
        results.push({
          domain: fullDomain,
          available: false,
        });
      }
    }

    console.log(`Domain check complete. Results:`, JSON.stringify(results));

    return new Response(
      JSON.stringify({ 
        domain: baseDomain, 
        results,
        hasAvailable: results.some(r => r.available)
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in check-domain function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "An error occurred" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
