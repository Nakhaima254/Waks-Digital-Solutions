import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import contentHero from "@/assets/blog-content-marketing-hero.jpg";
import contentCreation from "@/assets/blog-content-creation.jpg";
import contentAnalytics from "@/assets/blog-content-analytics.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const ContentMarketingStrategy = () => {
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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>March 15, 2024</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>16 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Content Marketing Strategy That Drives Business Growth in Kenya</h1>
            <p className="text-xl text-primary-foreground/80">Build a content marketing engine that attracts, engages, and converts your target audience into loyal customers.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={contentHero} alt="Content marketing strategy session" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Understanding Content Marketing ROI</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Content marketing delivers 3x more leads than traditional marketing at 62% lower cost. For Kenyan businesses, it's an affordable way to build authority, attract organic traffic, and nurture customer relationships over time.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Creating Your Content Strategy</h2>
              <img src={contentCreation} alt="Content creation workflow" className="w-full h-auto rounded-lg shadow-lg my-8" />
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Step 1: Define Your Audience</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Create detailed buyer personas for your Kenyan audience. Understand their pain points, goals, preferred content formats, and where they consume content online.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Step 2: Choose Content Formats</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Blog Posts:</strong> Build SEO authority and provide in-depth information</li>
                <li><strong>Videos:</strong> Highly engaging, perfect for social media</li>
                <li><strong>Infographics:</strong> Simplify complex information visually</li>
                <li><strong>Podcasts:</strong> Reach commuters and multitaskers</li>
                <li><strong>Case Studies:</strong> Prove your value with real results</li>
                <li><strong>E-books & Guides:</strong> Generate leads with valuable resources</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Step 3: Content Calendar Planning</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Plan content 3-6 months in advance. Balance evergreen content (timeless topics) with trending topics relevant to Kenya. Use tools like Notion, Trello, or Google Sheets to organize your calendar.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Content Distribution Strategy</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Creating great content is only half the battle. You need a distribution plan:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Owned Channels:</strong> Your website, blog, email list</li>
                <li><strong>Earned Channels:</strong> PR, guest posts, backlinks, shares</li>
                <li><strong>Paid Channels:</strong> Social ads, sponsored content, influencer partnerships</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Measuring Content Performance</h2>
              <img src={contentAnalytics} alt="Content marketing analytics" className="w-full h-auto rounded-lg shadow-lg my-8" />
              <p className="text-foreground/80 leading-relaxed mb-6">
                Track metrics that matter: organic traffic, time on page, social shares, lead generation, and conversion rates. Use Google Analytics, social media insights, and CRM data to understand what content drives business results.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Content Optimization Tips</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Update old content to keep it relevant and improve rankings</li>
                <li>Repurpose top-performing content into different formats</li>
                <li>Optimize for featured snippets and voice search</li>
                <li>Include local Kenyan keywords and references</li>
                <li>Add compelling visuals and infographics</li>
              </ul>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Key Takeaways</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Define clear audience personas before creating content</li>
                  <li>Diversify content formats to reach different audience segments</li>
                  <li>Plan content strategically with a 3-6 month calendar</li>
                  <li>Distribute content across owned, earned, and paid channels</li>
                  <li>Measure ROI and continuously optimize based on data</li>
                  <li>Repurpose and update content for maximum value</li>
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

export default ContentMarketingStrategy;
