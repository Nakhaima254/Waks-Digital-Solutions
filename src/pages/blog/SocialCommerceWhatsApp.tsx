import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import socialCommerceImage from "@/assets/blog-social-commerce.jpg";

const SocialCommerceWhatsApp = () => {
  const relatedPosts = [
    { id: "customer-retention-ecommerce", title: "Customer Retention Strategies" },
    { id: "digital-marketing-strategies-smes", title: "Digital Marketing for SMEs" },
    { id: "ecommerce-success-kenya", title: "E-commerce Success Stories" }
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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>February 7, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>13 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Social Commerce: Selling on WhatsApp, Instagram & Facebook in Kenya</h1>
            <p className="text-xl text-primary-foreground/80">Master social selling platforms to reach customers where they already spend time, building profitable commerce channels beyond your website.</p>
          </div>
        </div>
      </div>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <img src={socialCommerceImage} alt="Social commerce and WhatsApp selling" className="w-full h-auto rounded-lg mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">Social commerce is exploding in Kenya. With 10.1M Facebook users and 15M WhatsApp users, social platforms offer direct access to engaged customers. Many successful Kenyan businesses generate 40-60% of revenue through social channels.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">WhatsApp Business: Your Mobile Storefront</h2>
            <p className="text-muted-foreground leading-relaxed">WhatsApp is Kenya's #1 messaging app. WhatsApp Business turns it into a powerful sales channel.</p>
            <div className="bg-muted/50 p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Essential WhatsApp Business Features</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Business Profile</h4>
                    <p className="text-sm text-muted-foreground">Display business name, description, address, hours, and website link</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Catalog</h4>
                    <p className="text-sm text-muted-foreground">Upload up to 500 products with images, prices, and descriptions. Customers can browse without leaving WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Quick Replies</h4>
                    <p className="text-sm text-muted-foreground">Save responses to common questions. Saves time and ensures consistency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Auto-Reply Messages</h4>
                    <p className="text-sm text-muted-foreground">Greet new customers automatically and set away messages for after-hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Labels</h4>
                    <p className="text-sm text-muted-foreground">Organize customers by status: New Customer, Order Placed, Payment Pending, Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">WhatsApp Selling Strategy</h2>
            <p className="text-muted-foreground leading-relaxed">Turn conversations into sales with these proven tactics:</p>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">1. Drive Traffic to WhatsApp</h3>
                <p className="text-muted-foreground mb-3">Add "Message us on WhatsApp" buttons everywhere:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Click-to-chat link on website (wa.me/254XXXXXXXXX)</li>
                  <li>• QR codes on physical marketing materials</li>
                  <li>• "DM to order" on Instagram/Facebook posts</li>
                  <li>• WhatsApp Business API for automated messaging (larger businesses)</li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">2. Build a Broadcast List</h3>
                <p className="text-muted-foreground mb-3">Send promotions to multiple customers (limit 256 per broadcast):</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Announce new arrivals, restocks, and flash sales</li>
                  <li>• Share exclusive discounts for WhatsApp customers</li>
                  <li>• Keep frequency to 2-3 times per week to avoid opt-outs</li>
                  <li>• Personalize messages: "Hi [Name]" performs 30% better</li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-2">3. Perfect Your Response Process</h3>
                <p className="text-muted-foreground mb-3">Speed and professionalism win sales:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Respond within 15 minutes during business hours (shows green checkmark)</li>
                  <li>• Always greet professionally: "Hi! Thank you for reaching out..."</li>
                  <li>• Send product images with prices, sizes, and availability</li>
                  <li>• Confirm order details before requesting payment</li>
                  <li>• Send payment instructions with M-Pesa paybill/till number</li>
                  <li>• Request payment screenshot for confirmation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Instagram Shopping</h2>
            <p className="text-muted-foreground leading-relaxed">Visual products thrive on Instagram. With 3.5M users in Kenya, it's essential for fashion, beauty, home decor, and lifestyle brands.</p>
            <div className="bg-accent/10 p-6 rounded-lg space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Instagram Shopping Setup</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><strong>1. Switch to Business Account:</strong> Access to insights, ads, and shopping features</li>
                <li><strong>2. Connect Facebook Catalog:</strong> Upload products to Facebook Shop (syncs with Instagram)</li>
                <li><strong>3. Enable Shopping:</strong> Tag products in posts and stories (may take 1-3 days approval)</li>
                <li><strong>4. Create Shoppable Posts:</strong> Tag up to 5 products per image, 20 per carousel</li>
                <li><strong>5. Use Shopping Stickers in Stories:</strong> Direct customers to product pages with one tap</li>
              </ul>
            </div>
            <div className="mt-4 space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Content Strategy for Sales</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Post 4-7 times per week for consistent visibility</li>
                <li>• Mix product posts (40%), lifestyle/inspiration (40%), and behind-the-scenes (20%)</li>
                <li>• Use all 30 allowed hashtags: mix popular (#KenyanFashion) and niche tags</li>
                <li>• Post Instagram Stories daily – 70% of users watch stories</li>
                <li>• Go Live to showcase products and answer questions in real-time</li>
                <li>• Repost customer photos (with permission) – builds trust and community</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Facebook Shops and Marketplace</h2>
            <p className="text-muted-foreground leading-relaxed">Facebook offers two powerful selling channels in Kenya:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-3">Facebook Shop</h3>
                <p className="text-sm text-muted-foreground mb-3">Free storefront on your Facebook Page</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Upload unlimited products</li>
                  <li>• Customers checkout via WhatsApp or website</li>
                  <li>• Professional appearance builds credibility</li>
                  <li>• Syncs with Instagram Shopping</li>
                </ul>
              </div>
              <div className="border border-border rounded-lg p-5">
                <h3 className="font-semibold text-foreground mb-3">Facebook Marketplace</h3>
                <p className="text-sm text-muted-foreground mb-3">Community marketplace with high traffic</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Free listings (individual items only)</li>
                  <li>• Local buyers in your area</li>
                  <li>• Great for clearing inventory</li>
                  <li>• Respond quickly – competition is high</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Social Commerce Best Practices</h2>
            <p className="text-muted-foreground leading-relaxed">Succeed across all social platforms with these universal principles:</p>
            <div className="space-y-3">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Build Trust First</h3>
                <p className="text-muted-foreground">Share customer reviews, delivery photos, and behind-the-scenes content. New accounts need 3-6 months of consistent activity to build credibility.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Make Payment Easy</h3>
                <p className="text-muted-foreground">Accept M-Pesa (essential), bank transfer, and cash on delivery. Display payment options clearly in your bio and posts.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Provide Excellent Service</h3>
                <p className="text-muted-foreground">Fast responses, accurate product information, and reliable delivery. Social commerce relies on word-of-mouth – one bad experience can cost you dozens of referrals.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Track and Optimize</h3>
                <p className="text-muted-foreground">Monitor which posts drive sales, what times get most engagement, and which products customers ask about. Double down on what works.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Integrating Social Commerce with Your Website</h2>
            <p className="text-muted-foreground leading-relaxed">Social channels and website should work together:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Link to website in all social bios for customers who prefer formal checkout</li>
              <li>• Add social proof from Instagram/Facebook to website (embed feeds, testimonials)</li>
              <li>• Use retargeting ads to show website visitors ads on social platforms</li>
              <li>• Create consistent branding across all channels</li>
              <li>• Track which channel drives more sales to allocate resources effectively</li>
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

export default SocialCommerceWhatsApp;