import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import predictiveHero from "@/assets/blog-predictive-analytics-ecommerce.jpg";
import BlogSidebar from "@/components/BlogSidebar";
import RelatedPosts from "@/components/RelatedPosts";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";

const PredictiveAnalyticsEcommerce = () => {
  const tocItems = [
    { id: "applications", title: "Key Applications" },
    { id: "benefits", title: "Benefits for Kenyan E-commerce" }
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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>March 6, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>14 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Predictive Analytics for E-commerce Success in Kenya</h1>
            <p className="text-xl text-primary-foreground/80">Use AI-powered predictive analytics to forecast demand, prevent churn, and make data-driven decisions.</p>
            <div className="mt-4">
              <ShareButtons 
                title="Predictive Analytics for E-commerce Success in Kenya"
                description="Use AI-powered predictive analytics to forecast demand, prevent churn, and make data-driven decisions."
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={predictiveHero} alt="Predictive analytics for e-commerce" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <TableOfContents items={tocItems} />
          </aside>
          
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 id="applications" className="text-3xl font-bold text-primary mt-12 mb-6">Key Applications</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Demand forecasting and inventory optimization</li>
                <li>Customer churn prediction</li>
                <li>Dynamic pricing strategies</li>
                <li>Personalized recommendations</li>
              </ul>

              <h2 id="benefits" className="text-3xl font-bold text-primary mt-12 mb-6">Benefits for Kenyan E-commerce</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Reduce stockouts by 40%, increase customer retention by 30%, and optimize pricing for maximum revenue.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Ready for Predictive Analytics?</h3>
                <p className="text-foreground/80 mb-4">Waks Digital Solutions implements advanced analytics solutions.</p>
                <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">Get Started</Link>
              </div>

              <RelatedPosts currentSlug="predictive-analytics-ecommerce" category="AI News" />
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

export default PredictiveAnalyticsEcommerce;