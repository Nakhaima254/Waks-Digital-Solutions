import { ArrowLeft, Calendar, Clock, User, Package, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import crossSellingHero from "@/assets/blog-cross-selling-hero.jpg";
import crossSellingUpsell from "@/assets/blog-cross-selling-upsell.jpg";
import crossSellingBundles from "@/assets/blog-cross-selling-bundles.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const CrossSellingUpselling = () => {
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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>February 14, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>13 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Cross-Selling and Upselling Strategies for Kenyan E-commerce</h1>
            <p className="text-xl text-primary-foreground/80">Increase average order value and revenue with proven cross-selling and upselling techniques for the Kenyan market.</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <img src={crossSellingHero} alt="E-commerce product recommendations" className="w-full h-auto rounded-lg mb-6" />
            <p className="text-lg text-muted-foreground leading-relaxed">Cross-selling and upselling are powerful strategies to increase revenue without spending more on customer acquisition. Learn how to implement these techniques effectively for your Kenyan e-commerce store.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4"><Package className="h-6 w-6 text-primary inline mr-2" />Product Recommendations</h2>
            <img src={crossSellingUpsell} alt="Upsell offers in shopping cart" className="w-full h-auto rounded-lg mb-6" />
            <p className="text-muted-foreground mb-4">Strategic product recommendations can increase AOV by 20-30%.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4"><TrendingUp className="h-6 w-6 text-primary inline mr-2" />Bundle Strategies</h2>
            <img src={crossSellingBundles} alt="Product bundles with discounts" className="w-full h-auto rounded-lg mb-6" />
            <p className="text-muted-foreground">Create compelling product bundles that provide value to customers while increasing your average order value.</p>
          </section>
        </div>
          </article>
          
          <BlogSidebar currentCategory="E-commerce" />
        </div>
      </div>
    </div>
  );
};

export default CrossSellingUpselling;