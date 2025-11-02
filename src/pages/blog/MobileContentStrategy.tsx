import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import mobileContentHero from "@/assets/blog-mobile-content-hero.jpg";
import mobileContentFormatting from "@/assets/blog-mobile-content-formatting.jpg";
import mobileContentReading from "@/assets/blog-mobile-content-reading.jpg";

const MobileContentStrategy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 font-blog">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Isaac N.</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>March 1, 2024</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>9 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Mobile-Friendly Content Strategy for Maximum Engagement</h1>
            <p className="text-xl text-primary-foreground/80">Master the art of creating scannable, engaging mobile content that keeps Kenyan users reading and converting.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={mobileContentHero} alt="Mobile-friendly content on smartphone" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Writing for Mobile Readers</h2>
          <img src={mobileContentFormatting} alt="Mobile content formatting examples" className="w-full h-auto rounded-lg shadow-lg my-8" />
          <p className="text-foreground/80 leading-relaxed mb-4">Mobile users scan content quickly. Use short paragraphs, clear headings, and bullet points for maximum readability.</p>
          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Content Formatting Best Practices</h2>
          <img src={mobileContentReading} alt="Person reading mobile content comfortably" className="w-full h-auto rounded-lg shadow-lg my-8" />
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Use 16px minimum font size</li>
            <li>Keep paragraphs to 2-3 sentences</li>
            <li>Add whitespace between sections</li>
            <li>Front-load important information</li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default MobileContentStrategy;
