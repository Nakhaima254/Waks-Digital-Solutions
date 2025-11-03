import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import videoHero from "@/assets/blog-video-marketing-hero.jpg";
import videoEditing from "@/assets/blog-video-editing.jpg";
import videoAnalytics from "@/assets/blog-video-analytics.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const VideoMarketingGuide = () => {
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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>March 5, 2024</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>14 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Video Marketing Guide: Creating Content That Converts in Kenya</h1>
            <p className="text-xl text-primary-foreground/80">Master video marketing to captivate audiences, boost engagement, and drive conversions for your Kenyan business.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={videoHero} alt="Video production setup" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Why Video Marketing Works</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Video content generates 1200% more shares than text and images combined. Viewers retain 95% of a message when watched versus 10% when read. For Kenyan businesses, video is the most effective medium to tell your story, demonstrate products, and build trust.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Types of Marketing Videos</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Explainer Videos:</strong> Introduce your product or service</li>
                <li><strong>Product Demos:</strong> Show how your product works</li>
                <li><strong>Customer Testimonials:</strong> Build trust with social proof</li>
                <li><strong>Behind-the-Scenes:</strong> Humanize your brand</li>
                <li><strong>How-To Tutorials:</strong> Provide value and establish expertise</li>
                <li><strong>Short-Form Content:</strong> Reels, TikToks, YouTube Shorts</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Creating Professional Videos on a Budget</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                You don't need expensive equipment to create effective videos. A modern smartphone, good natural lighting, a simple microphone (KES 3,000-10,000), and free editing software can produce professional results.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Essential Equipment</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Camera:</strong> iPhone/Samsung flagship or entry DSLR (KES 50,000+)</li>
                <li><strong>Microphone:</strong> Lavalier mic (KES 3,000+) or shotgun mic (KES 8,000+)</li>
                <li><strong>Lighting:</strong> Ring light (KES 5,000+) or softbox kit (KES 15,000+)</li>
                <li><strong>Tripod:</strong> Stable smartphone/camera tripod (KES 2,000-10,000)</li>
                <li><strong>Backdrop:</strong> Simple colored background or branded backdrop</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Video Editing Best Practices</h2>
              <img src={videoEditing} alt="Video editing software interface" className="w-full h-auto rounded-lg shadow-lg my-8" />
              <p className="text-foreground/80 leading-relaxed mb-6">
                Edit your videos to be concise and engaging. Cut dead air, add captions (80% watch videos without sound), include your branding, and always end with a clear call-to-action. Popular editing tools include CapCut (free), Adobe Premiere Pro, or Final Cut Pro.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Editing Tips for Kenyan Market</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Keep videos short (30-60 seconds for social, 2-3 minutes for YouTube)</li>
                <li>Hook viewers in first 3 seconds</li>
                <li>Add subtitles in English and Swahili if relevant</li>
                <li>Optimize file size for mobile data constraints</li>
                <li>Include your logo and website throughout</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Video Distribution Strategy</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Where you post matters as much as what you post. Optimize videos for each platform—vertical for TikTok/Reels, landscape for YouTube, square for Instagram Feed. Post at peak times when your Kenyan audience is most active.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Platform-Specific Strategies</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>YouTube:</strong> SEO optimize titles, descriptions, tags; create playlists</li>
                <li><strong>Instagram Reels:</strong> Trending audio, vertical 9:16, 15-90 seconds</li>
                <li><strong>TikTok:</strong> Authentic, entertaining, trending challenges</li>
                <li><strong>Facebook:</strong> Native uploads perform better than YouTube links</li>
                <li><strong>LinkedIn:</strong> Professional, educational content</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Measuring Video Marketing Success</h2>
              <img src={videoAnalytics} alt="Video analytics dashboard" className="w-full h-auto rounded-lg shadow-lg my-8" />
              <p className="text-foreground/80 leading-relaxed mb-6">
                Track views, watch time, engagement rate, click-through rate, and conversions. Use each platform's analytics plus Google Analytics to understand which videos drive website traffic and sales. A/B test thumbnails, titles, and CTAs to optimize performance.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Key Takeaways</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Start with smartphone and basic equipment—quality matters more</li>
                  <li>Hook viewers in the first 3 seconds</li>
                  <li>Always add captions for silent viewers</li>
                  <li>Optimize videos for each platform's format and audience</li>
                  <li>Include clear calls-to-action in every video</li>
                  <li>Analyze performance and iterate based on data</li>
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

export default VideoMarketingGuide;
