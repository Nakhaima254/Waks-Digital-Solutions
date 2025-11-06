import { ArrowLeft, Calendar, Clock, User, BarChart3, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";
import analyticsHero from "@/assets/blog-ecommerce-analytics-hero.jpg";
import analyticsGoogle from "@/assets/blog-ecommerce-analytics-google.jpg";
import analyticsFunnel from "@/assets/blog-ecommerce-analytics-funnel.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const EcommerceAnalytics = () => {
  const relatedPosts = [
    { id: "conversion-rate-optimization", title: "Conversion Rate Optimization Techniques" },
    { id: "ecommerce-seo-strategies", title: "E-commerce SEO Strategies" },
    { id: "abandoned-cart-recovery", title: "Abandoned Cart Recovery Strategies" }
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
                <span>February 12, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>16 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              E-commerce Analytics Guide for Kenyan Online Stores
            </h1>
            
            <p className="text-xl text-primary-foreground/80">
              Master e-commerce analytics to make data-driven decisions and grow your Kenyan online business profitably.
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
              src={analyticsHero} 
              alt="E-commerce analytics dashboard with graphs and metrics" 
              className="w-full h-auto rounded-lg mb-6"
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Running an e-commerce business without analytics is like driving with your eyes closed. You might be moving, but you don't know where you're going or if you're heading in the right direction. This comprehensive guide will show you exactly what metrics to track and how to use data to grow your Kenyan online store.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              <span>Essential E-commerce Metrics</span>
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">1. Revenue Metrics</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Total Revenue</p>
                <p className="text-sm text-muted-foreground mb-2">Total sales in KES over a specific period</p>
                <p className="text-sm"><strong>Why it matters:</strong> Primary indicator of business health</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Average Order Value (AOV)</p>
                <p className="text-sm text-muted-foreground mb-2">Formula: Total Revenue ÷ Number of Orders</p>
                <p className="text-sm"><strong>Why it matters:</strong> Shows if customers are buying more per transaction. Kenyan average: KES 2,000-5,000</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Customer Lifetime Value (CLV)</p>
                <p className="text-sm text-muted-foreground mb-2">Formula: (AOV × Purchase Frequency) × Average Customer Lifespan</p>
                <p className="text-sm"><strong>Why it matters:</strong> Tells you how much to spend acquiring customers</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">2. Conversion Metrics</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Conversion Rate</p>
                <p className="text-sm text-muted-foreground mb-2">Formula: (Orders ÷ Total Visitors) × 100</p>
                <p className="text-sm"><strong>Kenyan benchmark:</strong> 1-3% is typical, 3-5% is good, 5%+ is excellent</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Add-to-Cart Rate</p>
                <p className="text-sm text-muted-foreground mb-2">Formula: (Products Added to Cart ÷ Product Page Views) × 100</p>
                <p className="text-sm"><strong>Target:</strong> 5-10% or higher</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Cart Abandonment Rate</p>
                <p className="text-sm text-muted-foreground mb-2">Formula: (Abandoned Carts ÷ Total Carts) × 100</p>
                <p className="text-sm"><strong>Kenyan average:</strong> 60-70%. Lower is better!</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">3. Customer Acquisition Metrics</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Customer Acquisition Cost (CAC)</p>
                <p className="text-sm text-muted-foreground mb-2">Formula: Total Marketing Spend ÷ New Customers</p>
                <p className="text-sm"><strong>Rule of thumb:</strong> CAC should be less than 1/3 of CLV</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Return on Ad Spend (ROAS)</p>
                <p className="text-sm text-muted-foreground mb-2">Formula: Revenue from Ads ÷ Ad Spend</p>
                <p className="text-sm"><strong>Target:</strong> 4:1 or higher (KES 4 revenue for every KES 1 spent)</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Target className="h-6 w-6 text-primary" />
              <span>Setting Up Google Analytics for E-commerce</span>
            </h2>
            <img 
              src={analyticsGoogle} 
              alt="Google Analytics e-commerce tracking dashboard" 
              className="w-full h-auto rounded-lg mb-6"
            />
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Essential E-commerce Tracking Setup</h3>
            <p className="text-muted-foreground mb-4">
              Set up these crucial tracking elements:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li><strong>Enhanced E-commerce:</strong> Track product impressions, clicks, add-to-cart, checkout steps</li>
              <li><strong>Transaction tracking:</strong> Capture order value, products purchased, payment method</li>
              <li><strong>Goal tracking:</strong> Set goals for newsletter signups, account creation, wishlists</li>
              <li><strong>Event tracking:</strong> Track button clicks, video views, PDF downloads</li>
              <li><strong>M-Pesa conversion tracking:</strong> Specifically track M-Pesa vs card payments</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Key Reports to Monitor Weekly</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>E-commerce Overview:</strong> Revenue, transactions, AOV at a glance</li>
              <li><strong>Product Performance:</strong> Best-selling products and revenue by product</li>
              <li><strong>Shopping Behavior:</strong> Where customers drop off in the funnel</li>
              <li><strong>Checkout Behavior:</strong> Which checkout step loses most customers</li>
              <li><strong>Traffic Sources:</strong> Which channels drive sales (Facebook, Google, Direct)</li>
              <li><strong>Location Report:</strong> Sales by Kenyan cities (Nairobi, Mombasa, Kisumu)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span>Understanding Your Sales Funnel</span>
            </h2>
            <img 
              src={analyticsFunnel} 
              alt="E-commerce sales funnel with conversion metrics" 
              className="w-full h-auto rounded-lg mb-6"
            />
            
            <h3 className="text-xl font-semibold text-foreground mb-3">The 5-Stage E-commerce Funnel</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Stage 1: Awareness (Traffic)</p>
                <p className="text-sm text-muted-foreground mb-2">Visitors land on your site from ads, social media, search, etc.</p>
                <p className="text-sm"><strong>Key metric:</strong> Total sessions, traffic sources</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Stage 2: Interest (Product Views)</p>
                <p className="text-sm text-muted-foreground mb-2">Visitors browse products and categories</p>
                <p className="text-sm"><strong>Key metric:</strong> Product page views, time on site</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Stage 3: Desire (Add to Cart)</p>
                <p className="text-sm text-muted-foreground mb-2">Visitors add products to cart</p>
                <p className="text-sm"><strong>Key metric:</strong> Add-to-cart rate, cart value</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Stage 4: Intent (Checkout)</p>
                <p className="text-sm text-muted-foreground mb-2">Customers begin checkout process</p>
                <p className="text-sm"><strong>Key metric:</strong> Checkout initiation rate, drop-off points</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Stage 5: Action (Purchase)</p>
                <p className="text-sm text-muted-foreground mb-2">Customer completes payment</p>
                <p className="text-sm"><strong>Key metric:</strong> Conversion rate, revenue</p>
              </div>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-4">
              <p className="text-sm"><strong>Pro Tip:</strong> Calculate conversion rate between each stage. The biggest drop-off points are your biggest opportunities for improvement!</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Traffic Source Analysis</h2>
            <p className="text-muted-foreground mb-4">
              Not all traffic is equal. Analyze which sources drive actual sales:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Organic Search (Google)</p>
                <p className="text-sm text-muted-foreground">Highest intent, best conversion rates. Focus on SEO for long-term growth.</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Facebook/Instagram Ads</p>
                <p className="text-sm text-muted-foreground">Works well in Kenya. Track ROAS carefully. Retargeting often performs best.</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Direct Traffic</p>
                <p className="text-sm text-muted-foreground">Returning customers or brand searches. High conversion rate. Sign of strong brand.</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">WhatsApp/Social Media</p>
                <p className="text-sm text-muted-foreground">Very important in Kenya. Track using UTM parameters.</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Using UTM Parameters</h3>
            <p className="text-muted-foreground mb-4">
              Track exactly where sales come from with UTM tags:
            </p>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="text-sm font-mono mb-2">
                yourstore.com/product?utm_source=facebook&utm_medium=social&utm_campaign=valentines
              </p>
              <p className="text-sm text-muted-foreground">
                This tells you the sale came from Facebook, during your Valentine's campaign
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Product Performance Analysis</h2>
            <p className="text-muted-foreground mb-4">
              Understand which products drive your business:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li><strong>Best sellers:</strong> Products with most sales volume</li>
              <li><strong>Revenue drivers:</strong> Products generating most total revenue</li>
              <li><strong>High-margin products:</strong> Products with best profit margins</li>
              <li><strong>Slow movers:</strong> Products with low views or sales (consider discounting or removing)</li>
              <li><strong>Abandoned cart leaders:</strong> Products frequently added but not purchased (price issue?)</li>
            </ul>

            <div className="bg-accent/10 border-l-4 border-accent p-4">
              <p className="text-sm"><strong>Action Item:</strong> Focus your marketing on your top 20% products that generate 80% of revenue (Pareto Principle).</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Customer Behavior Insights</h2>
            <p className="text-muted-foreground mb-4">
              Dig deeper into how Kenyan customers shop:
            </p>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Shopping Patterns</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li><strong>Peak shopping times:</strong> When do most sales happen? (Often evenings in Kenya)</li>
              <li><strong>Device breakdown:</strong> Mobile vs desktop (usually 80%+ mobile in Kenya)</li>
              <li><strong>Purchase frequency:</strong> How often do customers return to buy?</li>
              <li><strong>Average pages per session:</strong> Are customers exploring or leaving quickly?</li>
              <li><strong>Time to purchase:</strong> Do customers buy immediately or research first?</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">New vs Returning Customers</h3>
            <p className="text-muted-foreground mb-4">
              Monitor the health of your customer base:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>New customer rate:</strong> Are you still attracting new shoppers?</li>
              <li><strong>Repeat purchase rate:</strong> (Returning customers ÷ Total customers) × 100</li>
              <li><strong>Target:</strong> 20-30% repeat rate is healthy for Kenya e-commerce</li>
              <li><strong>If low:</strong> Focus on email marketing, loyalty programs, customer service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Creating Your Analytics Dashboard</h2>
            <p className="text-muted-foreground mb-4">
              Build a simple dashboard to monitor daily:
            </p>
            
            <div className="bg-muted p-4 rounded-lg mb-6">
              <p className="font-semibold mb-3">Daily Dashboard Metrics</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Total revenue (today vs yesterday)</li>
                <li>✓ Number of orders</li>
                <li>✓ Average order value</li>
                <li>✓ Conversion rate</li>
                <li>✓ Traffic sources breakdown</li>
                <li>✓ Cart abandonment rate</li>
                <li>✓ Top-selling products today</li>
                <li>✓ Customer acquisition cost (if running ads)</li>
              </ul>
            </div>

            <p className="text-muted-foreground mb-4">
              <strong>Tools for dashboards:</strong> Google Data Studio (free), Shopify Analytics, WooCommerce Reports
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Taking Action on Your Data</h2>
            <p className="text-muted-foreground mb-4">
              Analytics means nothing without action. Here's how to use data:
            </p>
            
            <div className="space-y-3">
              <div className="bg-accent/10 border-l-4 border-accent p-4">
                <p className="font-semibold mb-1">If cart abandonment is high (70%+):</p>
                <p className="text-sm text-muted-foreground">→ Set up abandoned cart emails, simplify checkout, add more payment options</p>
              </div>
              
              <div className="bg-accent/10 border-l-4 border-accent p-4">
                <p className="font-semibold mb-1">If mobile conversion is low:</p>
                <p className="text-sm text-muted-foreground">→ Improve mobile checkout, test mobile page speed, optimize for slow connections</p>
              </div>
              
              <div className="bg-accent/10 border-l-4 border-accent p-4">
                <p className="font-semibold mb-1">If AOV is low:</p>
                <p className="text-sm text-muted-foreground">→ Add product bundles, implement upsells, offer free shipping threshold</p>
              </div>
              
              <div className="bg-accent/10 border-l-4 border-accent p-4">
                <p className="font-semibold mb-1">If repeat purchase rate is low:</p>
                <p className="text-sm text-muted-foreground">→ Launch email marketing, create loyalty program, improve customer service</p>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">Need Help Setting Up Analytics?</h3>
            <p className="text-muted-foreground mb-4">
              We can help you set up comprehensive e-commerce analytics, create custom dashboards, and provide monthly reports to help you make data-driven decisions for your Kenyan online store.
            </p>
            <Link 
              to="/services/ecommerce-solutions" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              onClick={() => window.scrollTo(0, 0)}
            >
              Get E-commerce Analytics Setup
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

export default EcommerceAnalytics;