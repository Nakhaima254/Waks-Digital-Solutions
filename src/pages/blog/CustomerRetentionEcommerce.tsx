import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import retentionImage from "@/assets/blog-customer-retention.jpg";

const CustomerRetentionEcommerce = () => {
  const relatedPosts = [
    { id: "conversion-rate-optimization", title: "Conversion Rate Optimization Guide" },
    { id: "digital-marketing-strategies-smes", title: "Digital Marketing for SMEs" },
    { id: "social-commerce-whatsapp", title: "WhatsApp for E-commerce" }
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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>February 9, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>11 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Customer Retention Strategies for E-commerce Success</h1>
            <p className="text-xl text-primary-foreground/80">Build lasting relationships and increase customer lifetime value with proven retention tactics for Kenyan e-commerce.</p>
          </div>
        </div>
      </div>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <img src={retentionImage} alt="Customer retention strategies" className="w-full h-auto rounded-lg mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">Acquiring a new customer costs 5-25x more than retaining an existing one. Focus on retention to build sustainable, profitable e-commerce business in Kenya.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Why Retention Matters More Than Acquisition</h2>
            <p className="text-muted-foreground leading-relaxed">The economics of e-commerce favor retention:</p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5%</div>
                  <p className="text-sm text-muted-foreground">Increase in retention can boost profits by 25-95%</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">65%</div>
                  <p className="text-sm text-muted-foreground">Of business comes from existing customers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3x</div>
                  <p className="text-sm text-muted-foreground">Returning customers spend more per order than first-timers</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Email Marketing for Retention</h2>
            <p className="text-muted-foreground leading-relaxed">Build an email list from day one and nurture relationships with strategic campaigns:</p>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Welcome Series (Days 1-7)</h3>
                <p className="text-muted-foreground mb-3">Introduce your brand, share your story, offer first-purchase discount</p>
                <p className="text-sm text-muted-foreground italic">Expected open rate: 40-50%, click rate: 15-20%</p>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Post-Purchase Follow-up (Day 3-5)</h3>
                <p className="text-muted-foreground mb-3">Request review, offer complementary products, provide usage tips</p>
                <p className="text-sm text-muted-foreground italic">Expected open rate: 35-45%, generates 5-10% repeat purchases</p>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Re-engagement Campaign (Day 30-60)</h3>
                <p className="text-muted-foreground mb-3">Remind inactive customers with special offers, new arrivals, or personalized recommendations</p>
                <p className="text-sm text-muted-foreground italic">Expected open rate: 20-30%, win-back rate: 3-8%</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Loyalty Programs That Work in Kenya</h2>
            <p className="text-muted-foreground leading-relaxed">Design simple, attractive programs that encourage repeat purchases:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-accent/10 p-5 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Points-Based System</h3>
                <p className="text-sm text-muted-foreground">Earn 1 point per KES 100 spent, redeem 100 points = KES 100 discount</p>
                <p className="text-xs text-muted-foreground mt-2">Best for: Fashion, beauty, consumer goods</p>
              </div>
              <div className="bg-accent/10 p-5 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Tiered Membership</h3>
                <p className="text-sm text-muted-foreground">Bronze (0-50K): 5% discount, Silver (50-150K): 10%, Gold (150K+): 15% + perks</p>
                <p className="text-xs text-muted-foreground mt-2">Best for: High-value products, repeat buyers</p>
              </div>
              <div className="bg-accent/10 p-5 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Referral Rewards</h3>
                <p className="text-sm text-muted-foreground">Give KES 500 to referrer and referee on first purchase over KES 2,000</p>
                <p className="text-xs text-muted-foreground mt-2">Best for: Growing customer base organically</p>
              </div>
              <div className="bg-accent/10 p-5 rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Birthday/Anniversary</h3>
                <p className="text-sm text-muted-foreground">Special discount or free gift during birthday month or purchase anniversary</p>
                <p className="text-xs text-muted-foreground mt-2">Best for: Building emotional connection</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Exceptional Customer Service</h2>
            <p className="text-muted-foreground leading-relaxed">Outstanding service turns one-time buyers into brand advocates:</p>
            <ul className="space-y-3 text-muted-foreground">
              <li><strong>Fast Response Times:</strong> Reply to WhatsApp, email, and social media inquiries within 2 hours during business hours</li>
              <li><strong>Easy Returns:</strong> Offer 7-14 day return policy with hassle-free process – builds trust and reduces purchase anxiety</li>
              <li><strong>Proactive Communication:</strong> Send order confirmation, shipping updates, and delivery notifications automatically</li>
              <li><strong>Personal Touch:</strong> Include handwritten thank-you notes or small freebies with orders</li>
              <li><strong>Problem Resolution:</strong> Empower team to solve issues immediately without escalation for orders under KES 5,000</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Personalization Strategies</h2>
            <p className="text-muted-foreground leading-relaxed">Use customer data to create relevant, personalized experiences:</p>
            <div className="bg-muted/50 p-6 rounded-lg space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Product Recommendations</h4>
                  <p className="text-sm text-muted-foreground">"Customers who bought X also liked Y" increases average order value by 10-30%</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Browse Abandonment Emails</h4>
                  <p className="text-sm text-muted-foreground">Send reminder emails featuring products customers viewed but didn't purchase</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Segmented Campaigns</h4>
                  <p className="text-sm text-muted-foreground">Create different email campaigns for first-time buyers, VIP customers, and inactive users</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Replenishment Reminders</h4>
                  <p className="text-sm text-muted-foreground">For consumable products, remind customers when it's time to reorder based on purchase history</p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Building Community Around Your Brand</h2>
            <p className="text-muted-foreground leading-relaxed">Create engagement beyond transactions:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Active WhatsApp broadcast list with exclusive offers and tips</li>
              <li>• User-generated content campaigns – encourage customers to share photos</li>
              <li>• Facebook group for customers to share experiences and tips</li>
              <li>• Educational content – how-to videos, styling guides, product care tips</li>
              <li>• Customer spotlight features on social media</li>
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

export default CustomerRetentionEcommerce;