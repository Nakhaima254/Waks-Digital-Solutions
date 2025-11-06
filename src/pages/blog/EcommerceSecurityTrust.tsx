import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import securityImage from "@/assets/blog-ecommerce-security.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const EcommerceSecurityTrust = () => {
  const relatedPosts = [
    { id: "payment-gateways-kenya", title: "Payment Gateway Guide for Kenya" },
    { id: "ecommerce-success-kenya", title: "E-commerce Success Stories" },
    { id: "customer-retention-ecommerce", title: "Customer Retention Strategies" }
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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>February 8, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>10 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Building Trust: E-commerce Security for Kenyan Online Stores</h1>
            <p className="text-xl text-primary-foreground/80">Implement essential security measures and trust signals to convert skeptical visitors into confident customers.</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <img src={securityImage} alt="E-commerce security and trust" className="w-full h-auto rounded-lg mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">In Kenya's growing e-commerce market, trust is the biggest barrier to online purchases. 60% of potential customers abandon checkout due to security concerns. Build confidence with these proven strategies.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">SSL Certificate: The Foundation of Trust</h2>
            <p className="text-muted-foreground leading-relaxed">SSL (Secure Sockets Layer) encryption is non-negotiable for e-commerce. It protects customer data and shows "https://" with padlock icon in browser.</p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Why SSL Matters</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Encrypts sensitive data (passwords, payment info, addresses)</li>
                <li>✓ Google ranks HTTPS sites higher than HTTP</li>
                <li>✓ Browsers display "Not Secure" warning without SSL</li>
                <li>✓ Required by payment processors like Stripe and PayPal</li>
                <li>✓ Builds immediate visual trust with padlock icon</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4"><strong>Cost:</strong> Free with Let's Encrypt or included with most hosting providers</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Trust Badges and Security Seals</h2>
            <p className="text-muted-foreground leading-relaxed">Display trust signals prominently on homepage, product pages, and checkout to reduce anxiety:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Payment Security Badges</h3>
                <p className="text-sm text-muted-foreground">Display logos of accepted payment methods: M-Pesa, Visa, Mastercard, Pesapal, Flutterwave</p>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Secure Checkout Badges</h3>
                <p className="text-sm text-muted-foreground">"256-bit SSL Encryption", "Secure Checkout", "PCI DSS Compliant"</p>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Satisfaction Guarantees</h3>
                <p className="text-sm text-muted-foreground">"100% Money-Back Guarantee", "7-Day Returns", "Satisfaction Guaranteed"</p>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">Delivery Assurance</h3>
                <p className="text-sm text-muted-foreground">"Same-Day Delivery in Nairobi", "Track Your Order", "Reliable Shipping"</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Customer Reviews and Social Proof</h2>
            <p className="text-muted-foreground leading-relaxed">93% of consumers read reviews before purchasing. Make reviews prominent and authentic:</p>
            <ul className="space-y-3 text-muted-foreground">
              <li><strong>Product Reviews:</strong> Display star ratings and written reviews on every product page</li>
              <li><strong>Photo Reviews:</strong> Encourage customers to upload photos – increases trust by 200%</li>
              <li><strong>Google Reviews:</strong> Embed Google reviews widget on homepage</li>
              <li><strong>Testimonials:</strong> Feature detailed customer success stories with photos</li>
              <li><strong>Real-Time Social Proof:</strong> Show "John from Nairobi just purchased this" notifications</li>
              <li><strong>Trust Score:</strong> Display overall rating prominently (e.g., "4.8/5 stars from 2,347 reviews")</li>
            </ul>
            <div className="bg-accent/10 border-l-4 border-accent p-6 mt-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">Pro Tip</h3>
              <p className="text-muted-foreground">Send review request emails 7 days after delivery. Offer small discount (5-10%) on next purchase as incentive. Aim for 15-20% review rate.</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Transparent Policies</h2>
            <p className="text-muted-foreground leading-relaxed">Clear, accessible policies reduce purchase hesitation. Make these easily findable:</p>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Return & Refund Policy</h3>
                <p className="text-muted-foreground">Clearly state: timeframe (7-14 days), condition requirements, refund process, and exceptions. Be generous – liberal return policies increase conversion by 15-25%.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Shipping Policy</h3>
                <p className="text-muted-foreground">Specify: delivery areas, timeframes, costs, tracking availability, and packaging. Set realistic expectations.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Privacy Policy</h3>
                <p className="text-muted-foreground">Explain: data collection, usage, storage, and third-party sharing. Required by law and builds trust.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Contact Information and Support</h2>
            <p className="text-muted-foreground leading-relaxed">Make it easy for customers to reach you – accessibility builds confidence:</p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">Essential Contact Methods</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>WhatsApp Business:</strong> Primary support channel in Kenya – display number prominently with click-to-chat button</li>
                <li><strong>Phone Number:</strong> Kenyan number with business hours listed</li>
                <li><strong>Email:</strong> Professional email (support@yourdomain.com, not Gmail)</li>
                <li><strong>Physical Address:</strong> Even if you don't have a showroom, list business location for legitimacy</li>
                <li><strong>Social Media:</strong> Active Facebook, Instagram pages with quick response times</li>
                <li><strong>Live Chat:</strong> Optional but increases conversion by 12-18% for higher-value products</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Website Security Best Practices</h2>
            <p className="text-muted-foreground leading-relaxed">Protect your store and customer data with these technical measures:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Keep WordPress/platform and plugins updated to patch security vulnerabilities</li>
              <li>• Use strong passwords and two-factor authentication for admin accounts</li>
              <li>• Regular backups – daily for active stores, weekly minimum for smaller stores</li>
              <li>• Firewall and malware scanning – services like Cloudflare, Sucuri, or Wordfence</li>
              <li>• Limit login attempts to prevent brute force attacks</li>
              <li>• Never store credit card numbers – use tokenization through payment gateway</li>
              <li>• Regular security audits and penetration testing for high-value stores</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Building Brand Credibility</h2>
            <p className="text-muted-foreground leading-relaxed">Beyond technical security, establish your brand as trustworthy and professional:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Professional logo and consistent branding across all channels</li>
              <li>• Active, engaging social media presence with regular posts</li>
              <li>• "About Us" page with founder story and team photos</li>
              <li>• Blog with helpful content (not just promotional)</li>
              <li>• Media mentions or partnerships with established brands</li>
              <li>• Business registration details (visible but not overly prominent)</li>
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

          <BlogSidebar currentCategory="E-commerce" />
        </div>
      </div>
    </div>
  );
};

export default EcommerceSecurityTrust;