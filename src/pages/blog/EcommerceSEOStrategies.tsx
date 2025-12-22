import { ArrowLeft, Calendar, Clock, User, ShoppingCart, TrendingUp, Star, XCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ecommerceSeoImage from "@/assets/blog-ecommerce-seo.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const EcommerceSEOStrategies = () => {
  const relatedPosts = [
    { id: "ecommerce-success-kenya", title: "Building a Successful E-commerce Business in Kenya" },
    { id: "product-photography-ecommerce", title: "Product Photography Tips for E-commerce Success" },
    { id: "meta-tags-schema-markup", title: "Meta Tags & Schema Markup Guide" }
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
                <span>February 2, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>15 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              E-commerce SEO Strategies for Kenyan Online Stores
            </h1>
            
            <p className="text-xl text-primary-foreground/80">
              Master e-commerce SEO to increase organic traffic and sales for your Kenyan online store.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          
          <section>
            <img 
              src={ecommerceSeoImage} 
              alt="E-commerce SEO optimization with product pages and ratings" 
              className="w-full h-auto rounded-lg mb-6"
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              E-commerce SEO is different from regular website SEO. With hundreds or thousands of product pages, 
              category pages, and filters, Kenyan online stores need a strategic approach to rank well and drive sales. 
              This guide covers everything you need to know about e-commerce SEO in the Kenyan market.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6 text-primary" />
              <span>E-commerce SEO Fundamentals</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              E-commerce sites face unique SEO challenges:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Large number of similar product pages</li>
              <li>Duplicate content from manufacturer descriptions</li>
              <li>Complex site structure with categories and filters</li>
              <li>Seasonal product availability</li>
              <li>Competition from marketplaces like Jumia and Kilimall</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Optimizing Product Pages</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">1. Product Titles</h3>
            <div className="bg-muted p-4 rounded-lg mb-6">
              <p className="mb-2 flex items-center gap-2"><XCircle className="h-4 w-4 text-destructive" /><strong>Bad:</strong> "Laptop"</p>
              <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><strong>Good:</strong> "HP Pavilion 15 Laptop - Intel Core i5, 8GB RAM, 256GB SSD - Nairobi Kenya"</p>
              <div className="mt-4 text-sm text-muted-foreground">
                <p><strong>Include:</strong></p>
                <ul className="list-disc list-inside mt-2">
                  <li>Brand name</li>
                  <li>Model number</li>
                  <li>Key specifications</li>
                  <li>Location (for local searches)</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">2. Product Descriptions</h3>
            <p className="text-muted-foreground mb-4">
              Never copy manufacturer descriptions. Write unique content that includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Detailed product features and specifications</li>
              <li>Benefits and use cases relevant to Kenyan customers</li>
              <li>Natural keyword integration (avoid stuffing)</li>
              <li>How the product solves specific problems</li>
              <li>Comparison with similar products</li>
              <li>Shipping and payment information (M-Pesa, delivery to Kenya)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">3. Product Images</h3>
            <p className="text-muted-foreground mb-4">
              Optimize images for both user experience and SEO:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Use high-quality, multiple-angle photos</li>
              <li>Compress images for fast mobile loading</li>
              <li>Add descriptive alt text with keywords</li>
              <li>Use descriptive file names (hp-pavilion-15-laptop.jpg)</li>
              <li>Implement lazy loading for better performance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Star className="h-6 w-6 text-primary" />
              <span>Product Schema Markup</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Product schema helps you get rich snippets with stars, prices, and availability in search results.
            </p>
            <div className="bg-muted p-4 rounded-lg mb-4 overflow-x-auto">
              <pre className="text-xs">
{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "HP Pavilion 15 Laptop",
  "image": [
    "https://yourstore.com/hp-pavilion-1.jpg",
    "https://yourstore.com/hp-pavilion-2.jpg"
  ],
  "description": "Powerful laptop for work and entertainment",
  "brand": {
    "@type": "Brand",
    "name": "HP"
  },
  "offers": {
    "@type": "Offer",
    "price": "75000",
    "priceCurrency": "KES",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Your Store Name"
    }
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "18"
  }
}
</script>`}
              </pre>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Category Page Optimization</h2>
            <p className="text-muted-foreground mb-4">
              Category pages are powerful for ranking broad keywords:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li><strong>Unique content:</strong> Add 300-500 words of original content at the top</li>
              <li><strong>Clear hierarchy:</strong> Home → Category → Subcategory → Product</li>
              <li><strong>Breadcrumbs:</strong> Help users and search engines understand structure</li>
              <li><strong>Filter optimization:</strong> Use canonical tags to avoid duplicate content</li>
              <li><strong>Internal linking:</strong> Link to related categories and top products</li>
            </ul>

            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">Example Category Page Structure:</p>
              <p className="text-sm mb-2"><strong>URL:</strong> yourstore.com/laptops</p>
              <p className="text-sm mb-2"><strong>H1:</strong> Buy Laptops in Kenya - Fast Delivery Nairobi</p>
              <p className="text-sm"><strong>Content:</strong> Overview of laptop selection, buying guide, why buy from you, payment options, shipping information</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span>Technical E-commerce SEO</span>
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Site Speed Optimization</h3>
            <p className="text-muted-foreground mb-4">
              Critical for Kenyan users on mobile connections:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Use CDN for faster image loading</li>
              <li>Implement lazy loading for product images</li>
              <li>Minimize JavaScript and CSS</li>
              <li>Enable browser caching</li>
              <li>Optimize for 3G connections (common in Kenya)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Mobile Optimization</h3>
            <p className="text-muted-foreground mb-4">
              90%+ of Kenyan shoppers use mobile devices:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Mobile-first responsive design</li>
              <li>Easy-to-tap buttons and links</li>
              <li>Simplified checkout process</li>
              <li>M-Pesa integration for mobile payments</li>
              <li>WhatsApp support button</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">URL Structure</h3>
            <div className="bg-muted p-4 rounded-lg">
              <p className="mb-2 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-green-500" /><strong>Good URL Structure:</strong></p>
              <p className="text-sm text-muted-foreground mb-4">yourstore.com/electronics/laptops/hp-pavilion-15</p>
              <p className="mb-2 flex items-center gap-2"><XCircle className="h-4 w-4 text-destructive" /><strong>Bad URL Structure:</strong></p>
              <p className="text-sm text-muted-foreground">yourstore.com/product?id=12345</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">User-Generated Content</h2>
            <p className="text-muted-foreground mb-4">
              Reviews and Q&A add fresh, unique content while building trust:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Enable product reviews and ratings</li>
              <li>Implement Q&A sections on product pages</li>
              <li>Respond to all reviews (good and bad)</li>
              <li>Use review schema markup to show stars in search</li>
              <li>Encourage customers to leave reviews via email/SMS</li>
            </ul>
            <div className="bg-accent/10 border-l-4 border-accent p-4">
              <p className="text-sm"><strong>Tip:</strong> Kenyan customers trust reviews more than product descriptions. Aim for at least 5-10 reviews per product.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Internal Linking Strategy</h2>
            <p className="text-muted-foreground mb-4">
              Strategic internal linking helps both users and SEO:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>"Related Products" sections on product pages</li>
              <li>"You May Also Like" recommendations</li>
              <li>"Frequently Bought Together" bundles</li>
              <li>Link from blog content to relevant products</li>
              <li>Footer links to main categories</li>
              <li>Breadcrumb navigation on all pages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Content Marketing for E-commerce</h2>
            <p className="text-muted-foreground mb-4">
              Create content that drives traffic and builds authority:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Buying guides:</strong> "How to Choose the Best Laptop in Kenya 2025"</li>
              <li><strong>Comparison articles:</strong> "iPhone vs Samsung: Which is Better for Kenya?"</li>
              <li><strong>How-to content:</strong> "How to Set Up M-Pesa on Your New Phone"</li>
              <li><strong>Gift guides:</strong> "Top 10 Tech Gifts for Valentine's Day Kenya"</li>
              <li><strong>Product tutorials:</strong> "Getting Started with Your New Laptop"</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Local E-commerce SEO</h2>
            <p className="text-muted-foreground mb-4">
              Optimize for Kenyan customers searching locally:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Include "Kenya", "Nairobi", "Mombasa" in titles and descriptions</li>
              <li>Mention Kenyan payment methods (M-Pesa, Airtel Money)</li>
              <li>Highlight local delivery ("Free delivery in Nairobi")</li>
              <li>Show prices in Kenyan Shillings (KES)</li>
              <li>Address local concerns (warranty, after-sales support)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Tracking E-commerce SEO Performance</h2>
            <p className="text-muted-foreground mb-4">
              Monitor these key metrics:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Organic traffic to category and product pages</li>
              <li>Conversion rate from organic search</li>
              <li>Average order value from organic visitors</li>
              <li>Product page rankings for target keywords</li>
              <li>Click-through rate from search results</li>
              <li>Pages per session and bounce rate</li>
            </ul>
          </section>

          <section className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">Need E-commerce SEO Help?</h3>
            <p className="text-muted-foreground mb-4">
              E-commerce SEO requires ongoing optimization and technical expertise. Let us help you increase organic traffic and sales for your Kenyan online store.
            </p>
            <Link 
              to="/services/seo-services" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              onClick={() => window.scrollTo(0, 0)}
            >
              Get E-commerce SEO Services
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

          <BlogSidebar currentCategory="E-commerce" />
        </div>
      </div>
    </div>
  );
};

export default EcommerceSEOStrategies;