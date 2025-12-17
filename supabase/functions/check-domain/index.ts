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
  error?: string;
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

    // Use production API endpoint
    // For OTE/testing, use: https://api.ote-godaddy.com
    const apiBaseUrl = "https://api.godaddy.com";

    // Extensions to check - focus on most common ones that GoDaddy supports well
    const extensions = [".com", ".org", ".net", ".co", ".io", ".info"];
    const results: DomainAvailability[] = [];
    let authError = false;

    console.log(`Checking domain availability for: ${baseDomain}`);
    console.log(`Using API key starting with: ${apiKey.substring(0, 8)}...`);

    // Check availability for each extension
    for (const ext of extensions) {
      const fullDomain = `${baseDomain}${ext}`;
      
      try {
        // GoDaddy API endpoint for domain availability
        const response = await fetch(
          `${apiBaseUrl}/v1/domains/available?domain=${encodeURIComponent(fullDomain)}`,
          {
            method: "GET",
            headers: {
              "Authorization": `sso-key ${apiKey}:${apiSecret}`,
              "Accept": "application/json",
            },
          }
        );

        const responseText = await response.text();
        console.log(`GoDaddy response for ${fullDomain}: ${response.status} - ${responseText}`);

        if (response.ok) {
          const data = JSON.parse(responseText);
          
          results.push({
            domain: fullDomain,
            available: data.available === true,
            price: data.price ? data.price / 1000000 : undefined,
            currency: data.currency || "USD",
          });
        } else if (response.status === 401 || response.status === 403 || responseText.includes("UNABLE_TO_AUTHENTICATE")) {
          authError = true;
          console.error(`Authentication failed for GoDaddy API`);
          break;
        } else {
          // Domain might not be supported by GoDaddy
          results.push({
            domain: fullDomain,
            available: false,
            error: "Unable to check",
          });
        }
      } catch (error) {
        console.error(`Error checking ${fullDomain}:`, error);
        results.push({
          domain: fullDomain,
          available: false,
          error: "Check failed",
        });
      }
    }

    // If authentication failed, return specific error
    if (authError) {
      return new Response(
        JSON.stringify({ 
          error: "API authentication failed. Please verify your GoDaddy API credentials are for production (not OTE/sandbox) and have the correct format: API_KEY:API_SECRET",
          authError: true
        }),
        {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
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
