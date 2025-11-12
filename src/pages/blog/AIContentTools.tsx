import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import aiContentHero from "@/assets/blog-ai-content-tools.jpg";
import BlogSidebar from "@/components/BlogSidebar";
import RelatedPosts from "@/components/RelatedPosts";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";

const AIContentTools = () => {
  const tocItems = [
    { id: "challenge", title: "The Content Creation Challenge" },
    { id: "tools", title: "Top AI Content Tools for 2025" },
    { id: "effective-use", title: "Using AI Content Tools Effectively" },
    { id: "roi", title: "ROI of AI Content Tools" }
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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>March 16, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>15 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">AI Content Creation Tools: Revolutionizing Kenyan Marketing</h1>
            <p className="text-xl text-primary-foreground/80">Discover how AI writing assistants are transforming content creation for businesses across Kenya.</p>
            <div className="mt-4">
              <ShareButtons 
                title="AI Content Creation Tools: Revolutionizing Kenyan Marketing"
                description="Discover how AI writing assistants are transforming content creation for businesses across Kenya."
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={aiContentHero} alt="AI content creation tools interface" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <TableOfContents items={tocItems} />
          </aside>
          
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 id="challenge" className="text-3xl font-bold text-primary mt-12 mb-6">The Content Creation Challenge</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Quality content is essential for digital marketing, but creating it consistently is time-consuming. AI content tools solve this by accelerating creation while maintaining quality.
              </p>

              <h2 id="tools" className="text-3xl font-bold text-primary mt-12 mb-6">Top AI Content Tools for 2025</h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">ChatGPT & GPT-4</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                The most versatile AI writing tool for blog posts, social media content, emails, and more.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Jasper AI</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Specialized for marketing content with templates for ads, landing pages, and sales copy.
              </p>

              <h2 id="effective-use" className="text-3xl font-bold text-primary mt-12 mb-6">Using AI Content Tools Effectively</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Provide clear, detailed prompts for best results</li>
                <li>Always review and edit AI-generated content</li>
                <li>Add local context and Kenyan references manually</li>
                <li>Maintain your unique brand voice</li>
              </ul>

              <h2 id="roi" className="text-3xl font-bold text-primary mt-12 mb-6">ROI of AI Content Tools</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Most Kenyan businesses report 3-5x faster content creation and 60% cost savings compared to hiring writers.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Need Help with Content Strategy?</h3>
                <p className="text-foreground/80 mb-4">
                  Waks Digital Solutions can help you integrate AI content tools effectively.
                </p>
                <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">
                  Boost Your Content Game
                </Link>
              </div>

              <RelatedPosts currentSlug="ai-content-tools" category="AI News" />
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

export default AIContentTools;