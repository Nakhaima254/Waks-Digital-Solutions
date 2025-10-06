import { ArrowLeft, Calendar, Clock, User, Code, Tag, Star } from "lucide-react";
import { Link } from "react-router-dom";
import metaTagsImage from "@/assets/blog-meta-tags-seo.jpg";

const MetaTagsSchemaMarkup = () => {
  const relatedPosts = [
    { id: "technical-seo-fundamentals", title: "Technical SEO Fundamentals for Kenyan Websites" },
    { id: "seo-guide-kenyan-businesses", title: "Complete SEO Guide for Kenyan Businesses in 2025" },
    { id: "keyword-research-guide", title: "The Ultimate Guide to Keyword Research" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6"
            onClick={() => window.scrollTo(0, 0)}
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>Isaac N.</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>January 30, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>12 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Meta Tags & Schema Markup: Complete Guide for Kenyan Websites
            </h1>
            
            <p className="text-xl text-primary-foreground/80">
              Learn how to optimize meta tags and implement schema markup to boost your search visibility in Kenya.
            </p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          
          <section>
            <img 
              src={metaTagsImage} 
              alt="HTML meta tags and schema markup code" 
              className="w-full h-auto rounded-lg mb-6"
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meta tags and schema markup are invisible to visitors but crucial for search engines. 
              They help Google understand your content and display it attractively in search results. 
              This guide will show Kenyan website owners how to implement these elements correctly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Tag className="h-6 w-6 text-primary" />
              <span>Essential Meta Tags for SEO</span>
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">1. Title Tag</h3>
            <p className="text-muted-foreground mb-4">
              The most important meta tag for SEO. It appears as the clickable headline in search results.
            </p>
            <div className="bg-muted p-4 rounded-lg mb-6">
              <code className="text-sm">
                &lt;title&gt;Web Design Services in Nairobi | Waks Digital Solutions&lt;/title&gt;
              </code>
              <div className="mt-4 text-sm text-muted-foreground">
                <p><strong>Best Practices:</strong></p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Keep it under 60 characters</li>
                  <li>Include your primary keyword at the beginning</li>
                  <li>Add your brand name at the end</li>
                  <li>Make it compelling and click-worthy</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">2. Meta Description</h3>
            <p className="text-muted-foreground mb-4">
              The snippet that appears under your title in search results. While not a direct ranking factor, it affects click-through rates.
            </p>
            <div className="bg-muted p-4 rounded-lg mb-6">
              <code className="text-sm break-all">
                &lt;meta name="description" content="Professional web design services in Nairobi. We create responsive, SEO-optimized websites for Kenyan businesses. M-Pesa integration available. Get a free quote today!"&gt;
              </code>
              <div className="mt-4 text-sm text-muted-foreground">
                <p><strong>Best Practices:</strong></p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Keep it between 150-160 characters</li>
                  <li>Include your target keyword naturally</li>
                  <li>Write compelling copy that encourages clicks</li>
                  <li>Include a call-to-action when appropriate</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">3. Viewport Meta Tag (Mobile)</h3>
            <p className="text-muted-foreground mb-4">
              Essential for mobile responsiveness - critical in Kenya where 90%+ users are on mobile.
            </p>
            <div className="bg-muted p-4 rounded-lg mb-6">
              <code className="text-sm">
                &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
              </code>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">4. Robots Meta Tag</h3>
            <p className="text-muted-foreground mb-4">
              Controls how search engines crawl and index your page.
            </p>
            <div className="bg-muted p-4 rounded-lg mb-6">
              <code className="text-sm">
                &lt;meta name="robots" content="index, follow"&gt;
              </code>
              <div className="mt-4 text-sm text-muted-foreground">
                <p><strong>Common values:</strong></p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><strong>index, follow:</strong> Allow indexing and follow links (default)</li>
                  <li><strong>noindex, nofollow:</strong> Don't index page or follow links</li>
                  <li><strong>noindex, follow:</strong> Don't index but follow links</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Star className="h-6 w-6 text-primary" />
              <span>Open Graph Tags for Social Media</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Control how your content appears when shared on Facebook, WhatsApp, and other platforms.
            </p>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <code className="text-sm">
                &lt;meta property="og:title" content="Your Page Title"&gt;<br/>
                &lt;meta property="og:description" content="Your description"&gt;<br/>
                &lt;meta property="og:image" content="https://yoursite.com/image.jpg"&gt;<br/>
                &lt;meta property="og:url" content="https://yoursite.com/page"&gt;<br/>
                &lt;meta property="og:type" content="website"&gt;
              </code>
            </div>
            <p className="text-muted-foreground">
              These tags are crucial for Kenyan businesses sharing content on WhatsApp and Facebook.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Code className="h-6 w-6 text-primary" />
              <span>Schema Markup: Rich Snippets</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Schema markup helps search engines understand your content and display rich results with stars, prices, and other enhanced features.
            </p>

            <h3 className="text-xl font-semibold text-foreground mb-3">Local Business Schema</h3>
            <p className="text-muted-foreground mb-4">
              Perfect for Kenyan businesses with physical locations.
            </p>
            <div className="bg-muted p-4 rounded-lg mb-6 overflow-x-auto">
              <pre className="text-xs">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Waks Digital Solutions",
  "image": "https://yoursite.com/logo.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Westlands Avenue",
    "addressLocality": "Nairobi",
    "addressRegion": "Nairobi County",
    "addressCountry": "KE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -1.2921,
    "longitude": 36.8219
  },
  "telephone": "+254712345678",
  "priceRange": "KES 50,000 - 500,000"
}
</script>`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Product Schema (E-commerce)</h3>
            <p className="text-muted-foreground mb-4">
              Shows product ratings, prices, and availability in search results.
            </p>
            <div className="bg-muted p-4 rounded-lg mb-6 overflow-x-auto">
              <pre className="text-xs">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Professional Website Package",
  "image": "https://yoursite.com/product.jpg",
  "description": "Complete website with M-Pesa integration",
  "offers": {
    "@type": "Offer",
    "price": "150000",
    "priceCurrency": "KES",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "24"
  }
}
</script>`}
              </pre>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Article Schema (Blog Posts)</h3>
            <p className="text-muted-foreground mb-4">
              Helps Google understand your blog content.
            </p>
            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <pre className="text-xs">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SEO Guide for Kenyan Businesses",
  "author": {
    "@type": "Person",
    "name": "Isaac N."
  },
  "datePublished": "2025-01-30",
  "dateModified": "2025-01-30",
  "image": "https://yoursite.com/article-image.jpg",
  "publisher": {
    "@type": "Organization",
    "name": "Waks Digital Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://yoursite.com/logo.jpg"
    }
  }
}
</script>`}
              </pre>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Testing Your Implementation</h2>
            <p className="text-muted-foreground mb-4">
              Use these free tools to verify your meta tags and schema markup:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Google Rich Results Test:</strong> Check if your schema markup is valid</li>
              <li><strong>Facebook Sharing Debugger:</strong> Test how your pages appear on Facebook</li>
              <li><strong>WhatsApp Link Preview:</strong> Send yourself a test link</li>
              <li><strong>Google Search Console:</strong> Monitor how your pages appear in search</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Common Mistakes to Avoid</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Duplicate title tags across multiple pages</li>
              <li>Missing or auto-generated meta descriptions</li>
              <li>Title tags that are too long (over 60 characters)</li>
              <li>Not including location keywords for local businesses</li>
              <li>Forgetting to add Open Graph tags for social sharing</li>
              <li>Invalid schema markup syntax</li>
              <li>Not updating meta tags when content changes</li>
            </ul>
          </section>

          <section className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">Need Help with Technical SEO?</h3>
            <p className="text-muted-foreground mb-4">
              Proper implementation of meta tags and schema markup requires technical expertise. Let us optimize your website for maximum search visibility.
            </p>
            <Link 
              to="/services/seo-services" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              onClick={() => window.scrollTo(0, 0)}
            >
              Get Professional SEO Help
            </Link>
          </section>

          <section className="border-t pt-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Related Articles</h3>
            <div className="grid gap-4">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
                >
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </span>
                  <ArrowLeft className="h-5 w-5 text-muted-foreground rotate-180 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default MetaTagsSchemaMarkup;