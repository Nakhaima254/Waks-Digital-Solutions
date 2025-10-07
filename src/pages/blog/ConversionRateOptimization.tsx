import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import conversionImage from "@/assets/blog-conversion-optimization.jpg";

const ConversionRateOptimization = () => {
  const relatedPosts = [
    { id: "ecommerce-success-kenya", title: "E-commerce Success Stories in Kenya" },
    { id: "customer-retention-ecommerce", title: "Customer Retention Strategies" },
    { id: "payment-gateways-kenya", title: "Payment Gateway Guide for Kenya" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6" onClick={() => window.scrollTo(0, 0)}>
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Isaac N.</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>February 10, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>14 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Conversion Rate Optimization: Turn Visitors into Customers</h1>
            <p className="text-xl text-primary-foreground/80">Data-driven strategies to optimize your e-commerce funnel and increase sales without spending more on traffic.</p>
          </div>
        </div>
      </div>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <img src={conversionImage} alt="Conversion rate optimization analytics" className="w-full h-auto rounded-lg mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">The average e-commerce conversion rate in Kenya is 1.5-2%. With CRO best practices, you can double or triple conversions from existing traffic, dramatically improving ROI.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Understanding the E-commerce Funnel</h2>
            <p className="text-muted-foreground leading-relaxed">Map your customer journey to identify drop-off points and optimization opportunities.</p>
            <div className="bg-muted/50 p-6 rounded-lg space-y-3">
              <div className="flex items-center justify-between p-3 bg-background rounded">
                <span className="font-semibold">Homepage Visit</span>
                <span className="text-muted-foreground">100% visitors</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded">
                <span className="font-semibold">Product Page View</span>
                <span className="text-muted-foreground">40-60% (optimize product discovery)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded">
                <span className="font-semibold">Add to Cart</span>
                <span className="text-muted-foreground">15-25% (optimize product pages)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded">
                <span className="font-semibold">Checkout Initiated</span>
                <span className="text-muted-foreground">8-12% (reduce cart abandonment)</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-background rounded">
                <span className="font-semibold">Purchase Complete</span>
                <span className="text-muted-foreground">1.5-2% (optimize checkout flow)</span>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Homepage Optimization Strategies</h2>
            <p className="text-muted-foreground leading-relaxed">Your homepage is the gateway to conversions. Optimize these critical elements:</p>
            <ul className="space-y-3 text-muted-foreground">
              <li><strong>Clear Value Proposition:</strong> Communicate what you sell and why customers should buy from you within 3 seconds</li>
              <li><strong>Trust Signals:</strong> Display security badges, customer reviews, and payment options prominently</li>
              <li><strong>Featured Categories:</strong> Help visitors find products quickly with clear category navigation</li>
              <li><strong>Best Sellers:</strong> Showcase popular products to reduce decision paralysis</li>
              <li><strong>Mobile-First Design:</strong> 85%+ of Kenyan traffic is mobile – ensure fast load times and easy navigation</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Product Page Conversion Tactics</h2>
            <p className="text-muted-foreground leading-relaxed">Product pages are where buying decisions happen. Implement these proven tactics:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">High-Quality Images</h3>
                <p className="text-sm text-muted-foreground">5-7 images from multiple angles, including zoom capability and lifestyle shots</p>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Detailed Descriptions</h3>
                <p className="text-sm text-muted-foreground">Answer common questions, list specifications, and highlight unique features</p>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Social Proof</h3>
                <p className="text-sm text-muted-foreground">Display customer reviews, ratings, and number of purchases</p>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Urgency & Scarcity</h3>
                <p className="text-sm text-muted-foreground">"Only 3 left in stock" or "15 people viewing this now" increases urgency</p>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Clear CTA</h3>
                <p className="text-sm text-muted-foreground">Prominent "Add to Cart" button using contrasting color, above the fold</p>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Shipping Info</h3>
                <p className="text-sm text-muted-foreground">Display delivery time and costs upfront to reduce cart abandonment</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Reducing Cart Abandonment</h2>
            <p className="text-muted-foreground leading-relaxed">70% of carts are abandoned before purchase. Implement these strategies to recover lost sales:</p>
            <div className="bg-accent/10 border-l-4 border-accent p-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Critical Fixes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Show total cost (including shipping) early in checkout process</li>
                <li>✓ Allow guest checkout – don't force account creation</li>
                <li>✓ Offer multiple payment methods (M-Pesa, cards, bank transfer)</li>
                <li>✓ Display security badges and SSL certificate</li>
                <li>✓ Enable auto-fill for addresses and payment details</li>
                <li>✓ Send abandoned cart emails within 1 hour, then 24 hours, then 3 days</li>
                <li>✓ Show progress indicator in multi-step checkout</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">A/B Testing for Continuous Improvement</h2>
            <p className="text-muted-foreground leading-relaxed">Test systematically to identify what works for your audience. Start with high-impact elements:</p>
            <div className="space-y-3">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-foreground">Test 1: CTA Button Color & Text</h3>
                <p className="text-sm text-muted-foreground">Try "Buy Now" vs "Add to Cart" vs "Get Yours Today" in different colors</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-foreground">Test 2: Product Image Types</h3>
                <p className="text-sm text-muted-foreground">Compare white background vs lifestyle images as primary product photo</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold text-foreground">Test 3: Free Shipping Threshold</h3>
                <p className="text-sm text-muted-foreground">Test different minimum order values for free shipping (KES 2,000 vs 3,000 vs 5,000)</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Mobile Optimization for Kenya</h2>
            <p className="text-muted-foreground leading-relaxed">With mobile-first traffic, optimize specifically for small screens and slower connections:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Large, thumb-friendly buttons (minimum 44x44 pixels)</li>
              <li>• Simplified navigation with hamburger menu</li>
              <li>• Compress images for fast loading on 3G/4G networks</li>
              <li>• One-page checkout on mobile to reduce friction</li>
              <li>• M-Pesa prioritized as first payment option</li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Related Articles</h3>
            <div className="grid gap-4">
              {relatedPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} onClick={() => window.scrollTo(0, 0)} className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors group">
                  <span className="text-foreground group-hover:text-primary transition-colors">{post.title}</span>
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

export default ConversionRateOptimization;