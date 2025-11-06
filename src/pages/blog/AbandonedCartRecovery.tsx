import { ArrowLeft, Calendar, Clock, User, ShoppingCart, Mail, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import abandonedCartHero from "@/assets/blog-abandoned-cart-hero.jpg";
import abandonedCartEmail from "@/assets/blog-abandoned-cart-email.jpg";
import abandonedCartOffers from "@/assets/blog-abandoned-cart-offers.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const AbandonedCartRecovery = () => {
  const relatedPosts = [
    { id: "conversion-rate-optimization", title: "Conversion Rate Optimization Techniques" },
    { id: "customer-retention-ecommerce", title: "Customer Retention Strategies for E-commerce" },
    { id: "ecommerce-success-kenya", title: "Building a Successful E-commerce Business in Kenya" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 font-blog">
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
                <span>February 10, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>14 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Abandoned Cart Recovery Strategies for Kenyan E-commerce Stores
            </h1>
            
            <p className="text-xl text-primary-foreground/80">
              Recover lost sales and boost revenue with proven cart abandonment recovery strategies tailored for the Kenyan market.
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
              src={abandonedCartHero} 
              alt="E-commerce abandoned cart recovery dashboard with metrics" 
              className="w-full h-auto rounded-lg mb-6"
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cart abandonment is one of the biggest challenges facing Kenyan e-commerce stores. Studies show that nearly 70% of online shopping carts are abandoned before purchase. That's thousands of shillings in lost revenue! But here's the good news: with the right recovery strategies, you can win back many of these customers and dramatically increase your sales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6 text-primary" />
              <span>Why Kenyan Customers Abandon Carts</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Understanding why customers leave is the first step to recovery:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Unexpected costs:</strong> High delivery fees or hidden charges at checkout</li>
              <li><strong>Payment concerns:</strong> Lack of M-Pesa or preferred payment options</li>
              <li><strong>Delivery concerns:</strong> Long delivery times or unclear shipping information</li>
              <li><strong>Just browsing:</strong> Customers use carts as wishlists or to calculate total costs</li>
              <li><strong>Complicated checkout:</strong> Too many steps or forms to fill</li>
              <li><strong>Security concerns:</strong> Worries about payment safety and data privacy</li>
              <li><strong>Price comparison:</strong> Checking prices on Jumia or other platforms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Mail className="h-6 w-6 text-primary" />
              <span>Abandoned Cart Email Strategy</span>
            </h2>
            <img 
              src={abandonedCartEmail} 
              alt="Abandoned cart recovery email on mobile and desktop" 
              className="w-full h-auto rounded-lg mb-6"
            />
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Email Sequence Timing</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Email 1: Within 1 hour</p>
                <p className="text-sm text-muted-foreground">
                  <strong>Purpose:</strong> Gentle reminder while still top of mind<br/>
                  <strong>Subject:</strong> "Forgot something? Your items are waiting"<br/>
                  <strong>Content:</strong> Simple reminder with product images and direct link back to cart
                </p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Email 2: After 24 hours</p>
                <p className="text-sm text-muted-foreground">
                  <strong>Purpose:</strong> Address concerns and build urgency<br/>
                  <strong>Subject:</strong> "Still interested? Here's 10% off to complete your order"<br/>
                  <strong>Content:</strong> Small discount, customer reviews, free delivery option
                </p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Email 3: After 72 hours</p>
                <p className="text-sm text-muted-foreground">
                  <strong>Purpose:</strong> Final push with strong incentive<br/>
                  <strong>Subject:</strong> "Last chance! Your cart expires soon + exclusive offer"<br/>
                  <strong>Content:</strong> Bigger discount or free shipping, scarcity message, customer support offer
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Email Best Practices for Kenya</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Use customer's name for personalization</li>
              <li>Show product images clearly - important for mobile users</li>
              <li>Highlight M-Pesa payment option prominently</li>
              <li>Include WhatsApp support link for quick questions</li>
              <li>Make the "Return to Cart" button large and visible</li>
              <li>Show estimated delivery date to Nairobi/Mombasa</li>
              <li>Keep mobile-friendly - most Kenyans check email on phones</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Tag className="h-6 w-6 text-primary" />
              <span>Incentive Strategies</span>
            </h2>
            <img 
              src={abandonedCartOffers} 
              alt="Discount coupons and promotional offers on mobile" 
              className="w-full h-auto rounded-lg mb-6"
            />
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Smart Discount Strategies</h3>
            <p className="text-muted-foreground mb-4">
              Not every abandoned cart needs a discount. Use tiered incentives:
            </p>
            <div className="space-y-3 mb-6">
              <div className="bg-accent/10 border-l-4 border-accent p-4">
                <p className="font-semibold mb-1">High-Value Carts (KES 10,000+)</p>
                <p className="text-sm text-muted-foreground">Offer free delivery instead of discount - protects your margins</p>
              </div>
              
              <div className="bg-accent/10 border-l-4 border-accent p-4">
                <p className="font-semibold mb-1">Medium Carts (KES 3,000-10,000)</p>
                <p className="text-sm text-muted-foreground">5-10% discount or gift with purchase</p>
              </div>
              
              <div className="bg-accent/10 border-l-4 border-accent p-4">
                <p className="font-semibold mb-1">Low-Value Carts (Under KES 3,000)</p>
                <p className="text-sm text-muted-foreground">Bundle deals or minimum order for free delivery</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Non-Discount Incentives</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Free delivery:</strong> "Complete your order today for free delivery to Nairobi"</li>
              <li><strong>Extended warranty:</strong> "Get 6 months extra warranty when you buy today"</li>
              <li><strong>Gift with purchase:</strong> "Free phone case with every smartphone purchase"</li>
              <li><strong>Priority delivery:</strong> "Order now and get next-day delivery"</li>
              <li><strong>Loyalty points:</strong> "Earn 500 bonus points on this order"</li>
              <li><strong>Payment flexibility:</strong> "Pay in installments via Lipa Pole Pole"</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">SMS Recovery Campaigns</h2>
            <p className="text-muted-foreground mb-4">
              SMS works incredibly well in Kenya due to high mobile penetration:
            </p>
            <div className="bg-muted p-4 rounded-lg mb-6">
              <p className="text-sm mb-3"><strong>Example SMS Messages:</strong></p>
              <div className="space-y-3">
                <div className="bg-card p-3 rounded">
                  <p className="text-sm"><strong>Message 1 (No discount):</strong><br/>
                  "Hi [Name], you left items in your cart at [Store]. Complete your order now: [link]. M-Pesa available!"</p>
                </div>
                <div className="bg-card p-3 rounded">
                  <p className="text-sm"><strong>Message 2 (With incentive):</strong><br/>
                  "Complete your order today and get FREE delivery to Nairobi! Your cart: [link]. Valid 24hrs."</p>
                </div>
              </div>
            </div>
            <div className="bg-accent/10 border-l-4 border-accent p-4">
              <p className="text-sm"><strong>Tip:</strong> Send SMS 2-4 hours after cart abandonment - faster than email and catches customers when they still remember your store.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">WhatsApp Recovery Strategy</h2>
            <p className="text-muted-foreground mb-4">
              WhatsApp is hugely popular in Kenya - use it for personalized recovery:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li><strong>Personal touch:</strong> "Hi [Name], I noticed you were interested in [Product]. Can I help answer any questions?"</li>
              <li><strong>Visual proof:</strong> Send product photos, unboxing videos, or customer reviews</li>
              <li><strong>Instant support:</strong> Answer questions about M-Pesa, delivery, warranty immediately</li>
              <li><strong>Voice notes:</strong> More personal than text, especially for high-value carts</li>
              <li><strong>Payment link:</strong> Send direct M-Pesa payment request for faster checkout</li>
            </ul>
            <div className="bg-accent/10 border-l-4 border-accent p-4">
              <p className="text-sm"><strong>Best Practice:</strong> Only use WhatsApp for customers who have opted in or previously contacted you via WhatsApp to avoid spam complaints.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">On-Site Cart Recovery</h2>
            <p className="text-muted-foreground mb-4">
              Catch customers before they leave your site:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li><strong>Exit-intent popups:</strong> "Wait! Get 5% off if you complete your order now"</li>
              <li><strong>Chat proactive message:</strong> "Need help with checkout? I'm here to assist!"</li>
              <li><strong>Trust badges:</strong> Display secure payment icons and delivery guarantees</li>
              <li><strong>Cart save reminder:</strong> "Your cart is saved for 7 days" message</li>
              <li><strong>Progress indicators:</strong> Show "Only 2 steps left to complete order"</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Retargeting Ads for Abandoned Carts</h2>
            <p className="text-muted-foreground mb-4">
              Follow customers around the web with targeted ads:
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Facebook/Instagram Retargeting</p>
                <p className="text-sm text-muted-foreground">
                  Show dynamic product ads featuring the exact items they abandoned. Include "Free Delivery" or discount in ad copy.
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2">Google Display Ads</p>
                <p className="text-sm text-muted-foreground">
                  Reach customers as they browse other Kenyan websites. Highlight M-Pesa payment option.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Measuring Recovery Success</h2>
            <p className="text-muted-foreground mb-4">
              Track these key metrics to optimize your strategy:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Cart abandonment rate:</strong> (Abandoned carts ÷ Total carts) × 100</li>
              <li><strong>Email open rate:</strong> Aim for 40-50%</li>
              <li><strong>Email click-through rate:</strong> Target 20-30%</li>
              <li><strong>Recovery rate:</strong> (Recovered sales ÷ Total abandoned carts) × 100</li>
              <li><strong>Revenue recovered:</strong> Total KES recovered per month</li>
              <li><strong>ROI:</strong> Revenue recovered vs. cost of recovery campaigns</li>
            </ul>
          </section>

          <section className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">Need Help Reducing Cart Abandonment?</h3>
            <p className="text-muted-foreground mb-4">
              We can help you set up automated cart recovery systems, optimize your checkout process, and implement proven strategies to recover lost sales for your Kenyan e-commerce store.
            </p>
            <Link 
              to="/services/ecommerce-solutions" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              onClick={() => window.scrollTo(0, 0)}
            >
              Get E-commerce Solutions
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

export default AbandonedCartRecovery;