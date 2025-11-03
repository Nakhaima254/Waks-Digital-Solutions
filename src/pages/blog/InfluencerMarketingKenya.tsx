import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import influencerHero from "@/assets/blog-influencer-marketing-hero.jpg";
import influencerPartnership from "@/assets/blog-influencer-partnership.jpg";
import influencerAnalytics from "@/assets/blog-influencer-analytics.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const InfluencerMarketingKenya = () => {
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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>March 8, 2024</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>12 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Influencer Marketing in Kenya: Finding the Right Partners</h1>
            <p className="text-xl text-primary-foreground/80">Learn how to identify, partner with, and measure ROI from influencer collaborations in the Kenyan market.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={influencerHero} alt="Influencer creating content" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Understanding Influencer Marketing in Kenya</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Influencer marketing leverages trusted voices to reach engaged audiences. In Kenya, influencers span lifestyle, fashion, tech, finance, fitness, food, and more. The key is finding influencers whose audience aligns with your target market.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Types of Influencers</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Mega (1M+ followers):</strong> High reach but expensive and less targeted</li>
                <li><strong>Macro (100K-1M followers):</strong> Good reach with reasonable engagement</li>
                <li><strong>Micro (10K-100K followers):</strong> Highly engaged niche audiences</li>
                <li><strong>Nano (1K-10K followers):</strong> Authentic connections, affordable</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Finding the Right Influencers</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Don't just look at follower counts. Analyze engagement rates, audience demographics, content quality, brand alignment, and authenticity. Use tools like HypeAuditor or manually review their content and comments.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Red Flags to Avoid</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Sudden follower spikes (likely bought followers)</li>
                <li>Low engagement rate relative to follower count</li>
                <li>Generic, bot-like comments on posts</li>
                <li>Promotes too many competing brands</li>
                <li>Inconsistent posting schedule</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Structuring Influencer Partnerships</h2>
              <img src={influencerPartnership} alt="Brand and influencer partnership agreement" className="w-full h-auto rounded-lg shadow-lg my-8" />
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Campaign Types</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Sponsored Posts:</strong> Pay for dedicated content about your brand</li>
                <li><strong>Product Reviews:</strong> Send products for honest reviews</li>
                <li><strong>Giveaways:</strong> Increase reach and engagement</li>
                <li><strong>Affiliate Programs:</strong> Pay commission on sales</li>
                <li><strong>Brand Ambassadors:</strong> Long-term partnerships</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Negotiating Fair Compensation</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                In Kenya, micro-influencers typically charge KES 5,000-50,000 per post depending on reach and engagement. Macro influencers charge KES 50,000-500,000+. Consider offering product exchanges, affiliate commissions, or long-term contracts for better rates.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Measuring Influencer Campaign ROI</h2>
              <img src={influencerAnalytics} alt="Influencer campaign analytics dashboard" className="w-full h-auto rounded-lg shadow-lg my-8" />
              <p className="text-foreground/80 leading-relaxed mb-6">
                Track reach, impressions, engagement rate, website traffic, conversions, and sales. Use unique discount codes or UTM parameters to attribute results accurately. Calculate ROI by comparing campaign cost to revenue generated.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Success Metrics to Track</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Engagement rate (likes, comments, shares, saves)</li>
                <li>Reach and impressions</li>
                <li>Click-through rate to your website</li>
                <li>Conversions and sales attributed to campaign</li>
                <li>Cost per engagement/acquisition</li>
                <li>Sentiment analysis of comments</li>
              </ul>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Key Takeaways</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Focus on engagement rate, not just follower count</li>
                  <li>Micro and nano influencers often deliver better ROI</li>
                  <li>Vet influencers thoroughly to avoid fake followers</li>
                  <li>Create clear campaign briefs with deliverables</li>
                  <li>Use unique tracking codes to measure ROI accurately</li>
                  <li>Build long-term relationships with top performers</li>
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

export default InfluencerMarketingKenya;
