import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface DomainCheckRequest {
  domain: string;
}

type DomainCheckStatus = "available" | "taken" | "unsupported" | "error";

interface DomainCheckResult {
  ext: string;
  fqdn: string;
  status: DomainCheckStatus;
  available: boolean | null;
  price?: number;
  currency?: string;
  note?: string;
}

const jsonParseSafe = (text: string): any | null => {
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
};

const isAuthFailure = (status: number, parsed: any, raw: string) => {
  return (
    status === 401 ||
    status === 403 ||
    parsed?.code === "UNABLE_TO_AUTHENTICATE" ||
    raw.includes("UNABLE_TO_AUTHENTICATE")
  );
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { domain }: DomainCheckRequest = await req.json();

    if (!domain || typeof domain !== "string") {
      return new Response(
        JSON.stringify({ error: "Domain name is required" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const cleanDomain = domain.toLowerCase().trim().replace(/\s+/g, "");
    const baseDomain = cleanDomain.split(".")[0];

    // Basic domain label validation
    const domainRegex = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/;
    if (!domainRegex.test(baseDomain) || baseDomain.length < 1 || baseDomain.length > 63) {
      return new Response(
        JSON.stringify({ error: "Invalid domain name format" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const apiKey = (Deno.env.get("GODADDY_API_KEY") ?? "").trim();
    const apiSecret = (Deno.env.get("GODADDY_API_SECRET") ?? "").trim();

    if (!apiKey || !apiSecret) {
      return new Response(
        JSON.stringify({ error: "Domain service not configured" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // GoDaddy has separate environments:
    // - Production: https://api.godaddy.com
    // - OTE (test): https://api.ote-godaddy.com
    const apiCandidates = ["https://api.godaddy.com", "https://api.ote-godaddy.com"] as const;

    const extensions = [".co.ke", ".com", ".ke", ".org", ".net", ".africa"] as const;

    const checkOne = async (apiBaseUrl: string, fqdn: string) => {
      const response = await fetch(
        `${apiBaseUrl}/v1/domains/available?domain=${encodeURIComponent(fqdn)}`,
        {
          method: "GET",
          headers: {
            Authorization: `sso-key ${apiKey}:${apiSecret}`,
            Accept: "application/json",
          },
        }
      );

      const raw = await response.text();
      const parsed = jsonParseSafe(raw);

      if (response.ok) {
        return {
          ok: true as const,
          available: parsed?.available === true,
          price: typeof parsed?.price === "number" ? parsed.price / 1_000_000 : undefined,
          currency: typeof parsed?.currency === "string" ? parsed.currency : undefined,
        };
      }

      if (isAuthFailure(response.status, parsed, raw)) {
        return { ok: false as const, kind: "auth" as const, message: parsed?.message ?? raw };
      }

      // Other errors typically mean the TLD/domain isn't supported by GoDaddy's availability endpoint.
      const message = typeof parsed?.message === "string" ? parsed.message : raw;
      return { ok: false as const, kind: "unsupported" as const, message };
    };

    // Detect whether the provided keys are Production or OTE by trying a single request.
    let chosenApiBase: string | null = null;
    const probeDomain = `${baseDomain}.com`;

    for (const apiBase of apiCandidates) {
      const probe = await checkOne(apiBase, probeDomain);
      if (probe.ok) {
        chosenApiBase = apiBase;
        break;
      }
      if (probe.kind !== "auth") {
        // If it's not an auth error, still assume the environment is fine.
        chosenApiBase = apiBase;
        break;
      }
    }

    if (!chosenApiBase) {
      return new Response(
        JSON.stringify({
          error:
            "GoDaddy API authentication failed. Please ensure your key/secret are valid and match the environment (Production vs OTE).",
          authError: true,
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const results: DomainCheckResult[] = [];

    for (const ext of extensions) {
      const fqdn = `${baseDomain}${ext}`;
      const res = await checkOne(chosenApiBase, fqdn);

      if (res.ok) {
        results.push({
          ext,
          fqdn,
          status: res.available ? "available" : "taken",
          available: res.available,
          price: res.price,
          currency: res.currency,
        });
        continue;
      }

      if (res.kind === "auth") {
        // If auth suddenly fails mid-run, surface a clear message.
        results.push({
          ext,
          fqdn,
          status: "error",
          available: null,
          note: "Authentication failed while checking. Please retry.",
        });
        continue;
      }

      results.push({
        ext,
        fqdn,
        status: "unsupported",
        available: null,
        note: "Not supported by GoDaddy availability check",
      });
    }

    return new Response(
      JSON.stringify({
        domain: baseDomain,
        apiEnvironment: chosenApiBase.includes("ote") ? "ote" : "production",
        results,
        hasAvailable: results.some((r) => r.status === "available"),
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in check-domain function:", error);
    return new Response(
      JSON.stringify({ error: error?.message || "An error occurred" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);
