import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import accessibilityDesignImage from "@/assets/blog-accessibility-design.jpg";

const AccessibilityDesignGuide = () => {
  return (
    <div className="min-h-screen pt-16 font-blog">
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0">
          <img src={accessibilityDesignImage} alt="Accessibility Design" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog"><Button variant="ghost" className="mb-6"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog</Button></Link>
          <Badge variant="secondary" className="mb-4">Design</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Web Accessibility: Designing for Everyone in Kenya</h1>
          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center"><User className="h-4 w-4 mr-2" /><span>Isaac N.</span></div>
            <div className="flex items-center"><Calendar className="h-4 w-4 mr-2" /><span>January 22, 2025</span></div>
            <div className="flex items-center"><Clock className="h-4 w-4 mr-2" /><span>13 min read</span></div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-background">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <div className="space-y-6 text-foreground">
            <p className="text-xl">Web accessibility ensures everyone can use your website, regardless of disabilities. In Kenya, this means reaching more customers and complying with emerging regulations.</p>
            <h2 className="text-3xl font-bold text-primary mt-8">Why Accessibility Matters</h2>
            <p>Over 15% of Kenyans have some form of disability. Accessible design benefits everyone through better usability, improved SEO, and wider audience reach.</p>
            <div className="bg-accent/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Ready to make your website accessible?</h3>
              <Button variant="hero" size="lg" asChild><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default AccessibilityDesignGuide;
