import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import siteArchitectureHero from "@/assets/blog-site-architecture-hero.jpg";
import siteArchitectureNav from "@/assets/blog-site-architecture-navigation.jpg";
import siteArchitectureUrls from "@/assets/blog-site-architecture-urls.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const SiteArchitectureSEO = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6" onClick={() => window.scrollTo(0, 0)}><ArrowLeft className="h-5 w-5" /><span>Back to Blog</span></Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Isaac N.</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>February 16, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>12 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">E-commerce Site Architecture and SEO for Kenyan Stores</h1>
            <p className="text-xl text-primary-foreground/80">Build a scalable site structure that improves SEO and user experience for your Kenyan online store.</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
              <section><img src={siteArchitectureHero} alt="Website sitemap architecture" className="w-full h-auto rounded-lg mb-6" /><p className="text-lg text-muted-foreground">Proper site architecture is crucial for SEO and user experience in e-commerce.</p></section>
              <section><img src={siteArchitectureNav} alt="Navigation menu structure" className="w-full h-auto rounded-lg mb-6" /></section>
              <section><img src={siteArchitectureUrls} alt="URL structure examples" className="w-full h-auto rounded-lg mb-6" /></section>
            </div>
          </article>

          <BlogSidebar currentCategory="SEO" />
        </div>
      </div>
    </div>
  );
};

export default SiteArchitectureSEO;