import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import mobileAppHero from "@/assets/blog-mobile-app-hero.jpg";
import mobileAppDev from "@/assets/blog-mobile-app-development.jpg";
import mobileAppFeatures from "@/assets/blog-mobile-app-features.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const MobileAppEcommerce = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6" onClick={() => window.scrollTo(0, 0)}><ArrowLeft className="h-5 w-5" /><span>Back to Blog</span></Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Isaac N.</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>February 20, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>15 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Mobile Apps for E-commerce: Worth It for Kenyan Businesses?</h1>
            <p className="text-xl text-primary-foreground/80">Evaluate whether a mobile app makes sense for your Kenyan e-commerce store and learn best practices for implementation.</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
              <section><img src={mobileAppHero} alt="Mobile e-commerce app interface" className="w-full h-auto rounded-lg mb-6" /><p className="text-lg text-muted-foreground">Mobile apps can provide superior user experience and increase customer loyalty for Kenyan e-commerce businesses.</p></section>
              <section><img src={mobileAppDev} alt="Mobile app development process" className="w-full h-auto rounded-lg mb-6" /></section>
              <section><img src={mobileAppFeatures} alt="Mobile app features showcase" className="w-full h-auto rounded-lg mb-6" /></section>
            </div>
          </article>

          <BlogSidebar currentCategory="E-commerce" />
        </div>
      </div>
    </div>
  );
};

export default MobileAppEcommerce;