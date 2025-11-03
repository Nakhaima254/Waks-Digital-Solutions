import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import socialMediaHero from "@/assets/blog-social-media-marketing.jpg";
import socialMediaContent from "@/assets/blog-social-media-content.jpg";
import socialMediaEngagement from "@/assets/blog-social-media-engagement.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const SocialMediaMarketingGuide = () => {
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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>March 20, 2024</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>15 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Social Media Marketing Strategies for Kenyan Businesses</h1>
            <p className="text-xl text-primary-foreground/80">Master social media marketing with proven strategies that drive engagement and growth for Kenyan brands.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={socialMediaHero} alt="Social media marketing dashboard" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Understanding Your Social Media Audience</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Success on social media starts with understanding your Kenyan audience. Know their preferences, active hours, and the platforms they frequent most—whether it's Facebook, Instagram, Twitter, or TikTok.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Content Strategy That Works</h2>
              <img src={socialMediaContent} alt="Social media content planning" className="w-full h-auto rounded-lg shadow-lg my-8" />
              <p className="text-foreground/80 leading-relaxed mb-6">
                Create a content calendar that balances promotional content with valuable, engaging posts. Mix educational content, behind-the-scenes glimpses, user-generated content, and interactive posts to keep your audience engaged.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Platform-Specific Strategies</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Facebook:</strong> Focus on community building and longer-form content</li>
                <li><strong>Instagram:</strong> Leverage visual storytelling and Reels</li>
                <li><strong>Twitter:</strong> Engage in real-time conversations and trends</li>
                <li><strong>TikTok:</strong> Create entertaining, authentic short-form videos</li>
                <li><strong>WhatsApp:</strong> Build personal connections through Business API</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Maximizing Engagement</h2>
              <img src={socialMediaEngagement} alt="Social media engagement metrics" className="w-full h-auto rounded-lg shadow-lg my-8" />
              <p className="text-foreground/80 leading-relaxed mb-6">
                Engagement is the currency of social media. Respond promptly to comments and messages, ask questions, run polls, and create shareable content that resonates with your Kenyan audience's values and interests.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Best Posting Times for Kenya</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Facebook & Instagram: 7-9 AM and 12-2 PM (lunch break) and 7-9 PM</li>
                <li>Twitter: 8-10 AM and 5-7 PM (commute times)</li>
                <li>LinkedIn: 7-8 AM and 5-6 PM (before/after work)</li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Measuring Social Media Success</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Track key metrics including reach, engagement rate, follower growth, click-through rates, and conversions. Use platform analytics and tools like Meta Business Suite to understand what content performs best and optimize your strategy accordingly.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Key Takeaways</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Understand your Kenyan audience demographics and preferences</li>
                  <li>Create a consistent content calendar with diverse post types</li>
                  <li>Tailor your strategy to each social platform's strengths</li>
                  <li>Post during peak engagement times for Kenyan audiences</li>
                  <li>Engage authentically with your community</li>
                  <li>Track metrics and continuously optimize your approach</li>
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

export default SocialMediaMarketingGuide;
