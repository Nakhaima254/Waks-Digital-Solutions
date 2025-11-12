import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import marketingHero from "@/assets/blog-ai-marketing-automation.jpg";
import BlogSidebar from "@/components/BlogSidebar";
import RelatedPosts from "@/components/RelatedPosts";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";

const AIMarketingAutomation = () => {
  const tocItems = [
    { id: "revolution", title: "The Marketing Automation Revolution" },
    { id: "applications", title: "Key Applications" },
    { id: "getting-started", title: "Getting Started" }
  ];

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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>March 24, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>15 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">AI-Driven Marketing Automation for Kenyan Businesses</h1>
            <p className="text-xl text-primary-foreground/80">Leverage AI to automate and optimize your marketing campaigns, personalize customer experiences, and maximize ROI in Kenya's competitive market.</p>
            <div className="mt-4">
              <ShareButtons 
                title="AI-Driven Marketing Automation for Kenyan Businesses"
                description="Leverage AI to automate and optimize your marketing campaigns, personalize customer experiences, and maximize ROI in Kenya's competitive market."
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={marketingHero} alt="AI marketing automation dashboards" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <TableOfContents items={tocItems} />
          </aside>
          
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 id="revolution" className="text-3xl font-bold text-primary mt-12 mb-6">The Marketing Automation Revolution</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                AI-powered marketing automation enables Kenyan businesses to deliver personalized experiences at scale, optimize campaigns in real-time, and achieve better results with limited resources.
              </p>

              <h2 id="applications" className="text-3xl font-bold text-primary mt-12 mb-6">Key Applications</h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Email Campaign Optimization</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                AI determines the best send times, subject lines, and content for each subscriber, dramatically improving open and conversion rates.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Customer Segmentation</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                ML algorithms identify micro-segments within your audience based on behavior, enabling hyper-targeted messaging.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Predictive Lead Scoring</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                AI predicts which leads are most likely to convert, allowing sales teams to prioritize their efforts effectively.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Content Personalization</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Dynamically adjust website content, product recommendations, and offers based on individual user behavior and preferences.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Ad Campaign Optimization</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                AI automatically adjusts ad targeting, bidding, and creative elements to maximize ROAS across Google, Facebook, and other platforms.
              </p>

              <h2 id="getting-started" className="text-3xl font-bold text-primary mt-12 mb-6">Getting Started</h2>
              <ol className="list-decimal pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Audit current marketing processes for automation opportunities</li>
                <li>Choose AI marketing tools aligned with your tech stack</li>
                <li>Start with email automation and gradually expand</li>
                <li>Measure impact on key metrics and iterate</li>
              </ol>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Ready to Automate Your Marketing?</h3>
                <p className="text-foreground/80 mb-4">
                  Waks Digital Solutions can help implement AI marketing automation.
                </p>
                <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">
                  Get Started Today
                </Link>
              </div>

              <RelatedPosts currentSlug="ai-marketing-automation" category="AI News" />
            </div>
          </article>

          <aside className="lg:col-span-1">
            <BlogSidebar currentCategory="AI News" />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AIMarketingAutomation;