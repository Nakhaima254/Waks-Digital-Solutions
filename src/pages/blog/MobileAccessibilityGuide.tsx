import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import mobileAccessibilityHero from "@/assets/blog-mobile-accessibility-hero.jpg";
import mobileAccessibilityTools from "@/assets/blog-mobile-accessibility-tools.jpg";
import mobileAccessibilityUser from "@/assets/blog-mobile-accessibility-user.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const MobileAccessibilityGuide = () => {
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
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>10 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Mobile Accessibility: Building Inclusive Websites</h1>
            <p className="text-xl text-primary-foreground/80">Create mobile websites accessible to all users, including those with disabilities, following WCAG guidelines.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={mobileAccessibilityHero} alt="Mobile accessibility features" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Accessibility Testing Tools</h2>
              <img src={mobileAccessibilityTools} alt="Accessibility testing tools" className="w-full h-auto rounded-lg shadow-lg my-8" />
              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Inclusive Design Practices</h2>
              <img src={mobileAccessibilityUser} alt="User with accessibility features" className="w-full h-auto rounded-lg shadow-lg my-8" />
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Proper color contrast ratios</li>
                <li>Screen reader compatibility</li>
                <li>Keyboard navigation support</li>
                <li>Alt text for images</li>
              </ul>
            </div>
          </article>

          <BlogSidebar currentCategory="Mobile" />
        </div>
      </div>
    </div>
  );
};

export default MobileAccessibilityGuide;
