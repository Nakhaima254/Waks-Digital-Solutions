import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import emailHero from "@/assets/blog-email-marketing-hero.jpg";
import emailTemplates from "@/assets/blog-email-templates.jpg";
import emailAnalytics from "@/assets/blog-email-analytics.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const EmailMarketingMastery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 font-blog">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-5 w-5" /><span>Back to Blog</span>
          </Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Isaac N.</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>March 18, 2024</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>14 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Email Marketing Mastery: Building Profitable Campaigns in Kenya</h1>
            <p className="text-xl text-primary-foreground/80">Learn how to create email campaigns that convert, retain customers, and drive sustainable revenue for your Kenyan business.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={emailHero} alt="Email marketing campaign design" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Building Your Email List</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Your email list is your most valuable marketing asset. Use lead magnets like free guides, discount codes, or exclusive content to encourage signups. Always comply with data protection regulations and get explicit consent.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Effective Lead Magnet Ideas for Kenya</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Free downloadable guides or e-books relevant to your industry</li>
                <li>Exclusive discounts or early access to sales</li>
                <li>Free webinars or training sessions</li>
                <li>Templates, checklists, or tools</li>
                <li>Weekly tips or industry insights newsletter</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Crafting Compelling Email Templates</h2>
              <img src={emailTemplates} alt="Email marketing templates" className="w-full h-auto rounded-lg shadow-lg my-8" />
              <p className="text-foreground/80 leading-relaxed mb-6">
                Design mobile-responsive email templates that reflect your brand identity. Use clear subject lines, personalization, compelling copy, strong calls-to-action, and ensure your emails look great on smartphones—where most Kenyans read their emails.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Email Campaign Types</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Welcome Series:</strong> Introduce new subscribers to your brand</li>
                <li><strong>Promotional:</strong> Announce sales, new products, or special offers</li>
                <li><strong>Educational:</strong> Share tips, guides, and valuable content</li>
                <li><strong>Re-engagement:</strong> Win back inactive subscribers</li>
                <li><strong>Transactional:</strong> Order confirmations and shipping updates</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Measuring Email Performance</h2>
              <img src={emailAnalytics} alt="Email marketing analytics" className="w-full h-auto rounded-lg shadow-lg my-8" />
              <p className="text-foreground/80 leading-relaxed mb-6">
                Track open rates, click-through rates, conversion rates, and unsubscribe rates. A/B test subject lines, send times, and content to continuously improve performance. For Kenyan audiences, test sending times between 7-9 AM or 6-8 PM for best results.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Benchmark Metrics</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Open Rate: Aim for 20-25% (good), 25%+ (excellent)</li>
                <li>Click-Through Rate: 2-3% (good), 3%+ (excellent)</li>
                <li>Conversion Rate: 1-2% (good), 2%+ (excellent)</li>
                <li>Unsubscribe Rate: Keep below 0.5%</li>
              </ul>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Key Takeaways</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Build your email list organically with valuable lead magnets</li>
                  <li>Design mobile-first, branded email templates</li>
                  <li>Segment your audience for personalized messaging</li>
                  <li>Test different subject lines and sending times</li>
                  <li>Automate welcome series and follow-up campaigns</li>
                  <li>Continuously analyze and optimize based on metrics</li>
                </ul>
              </div>
            </div>
          </article>

          <BlogSidebar currentCategory="Marketing" />
        </div>
      </div>
    </div>
  );
};

export default EmailMarketingMastery;
