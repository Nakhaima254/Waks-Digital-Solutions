import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import visualHierarchyImage from "@/assets/blog-visual-hierarchy.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const VisualHierarchyPrinciples = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0">
          <img src={visualHierarchyImage} alt="Visual Hierarchy" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog"><Button variant="ghost" className="mb-6"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Button></Link>
          <Badge variant="secondary" className="mb-4">Design</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Mastering Visual Hierarchy in Web Design</h1>
          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center"><User className="h-4 w-4 mr-2" /><span>Isaac N.</span></div>
            <div className="flex items-center"><Calendar className="h-4 w-4 mr-2" /><span>January 25, 2025</span></div>
            <div className="flex items-center"><Clock className="h-4 w-4 mr-2" /><span>10 min read</span></div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 prose prose-lg">
              <div className="space-y-6 text-foreground">
                <p className="text-xl">Visual hierarchy guides users through your content naturally, highlighting what matters most and creating smooth user journeys.</p>
                <h2 className="text-3xl font-bold text-primary mt-8">Principles of Visual Hierarchy</h2>
                <p>Use size, color, contrast, spacing, and positioning to create clear content priorities that drive user actions.</p>
                <div className="bg-accent/10 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">Need help with your website design?</h3>
                  <Button variant="hero" size="lg" asChild><Link to="/contact">Get Started</Link></Button>
                </div>
              </div>
            </article>

            <BlogSidebar currentCategory="Design" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisualHierarchyPrinciples;
