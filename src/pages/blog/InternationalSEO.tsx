import { ArrowLeft, Calendar, Clock, User, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import internationalSeoImage from "@/assets/blog-international-seo.jpg";

const InternationalSEO = () => {
  const relatedPosts = [
    { id: "local-seo-kenya", title: "Local SEO Strategies for Kenyan Businesses" },
    { id: "seo-guide-kenyan-businesses", title: "Complete SEO Guide for Kenyan Businesses" },
    { id: "technical-seo-fundamentals", title: "Technical SEO Fundamentals" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6" onClick={() => window.scrollTo(0, 0)}>
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Isaac N.</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>February 8, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>10 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">International SEO Guide for Kenyan Businesses Going Global</h1>
            <p className="text-xl text-primary-foreground/80">Learn how to optimize your website for multiple countries and languages while maintaining your Kenyan presence.</p>
          </div>
        </div>
      </div>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <img src={internationalSeoImage} alt="International SEO strategy" className="w-full h-auto rounded-lg mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">Expanding beyond Kenya? International SEO helps you reach customers across East Africa and globally while maintaining strong local presence.</p>
          </section>
          <section className="border-t pt-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Related Articles</h3>
            <div className="grid gap-4">
              {relatedPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`} onClick={() => window.scrollTo(0, 0)} className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors group">
                  <span className="text-foreground group-hover:text-primary transition-colors">{post.title}</span>
                  <ArrowLeft className="h-5 w-5 text-muted-foreground rotate-180 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default InternationalSEO;