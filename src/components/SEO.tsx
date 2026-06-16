import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.waksdigital.co.ke";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
const SITE_NAME = "Waks Digital Solutions";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  /** Absolute or root-relative canonical URL. Defaults to current path. */
  canonical?: string;
  /** JSON-LD structured data object (optional). */
  jsonLd?: Record<string, unknown>;
}

const toAbsolute = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

const SEO = ({ title, description, image, type = "website", canonical, jsonLd }: SEOProps) => {
  const { pathname } = useLocation();
  const url = canonical ? toAbsolute(canonical) : `${SITE_URL}${pathname}`;
  const imageUrl = toAbsolute(image || DEFAULT_IMAGE);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;