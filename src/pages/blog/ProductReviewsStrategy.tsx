import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import reviewsHero from "@/assets/blog-product-reviews-hero.jpg";
import reviewsSocial from "@/assets/blog-product-reviews-social-proof.jpg";
import reviewsTestimonials from "@/assets/blog-product-reviews-testimonials.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const ProductReviewsStrategy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6" onClick={() => window.scrollTo(0, 0)}><ArrowLeft className="h-5 w-5" /><span>Back to Blog</span></Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Isaac N.</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>February 18, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>11 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Product Reviews Strategy for Kenyan E-commerce Success</h1>
            <p className="text-xl text-primary-foreground/80">Build trust and increase conversions with authentic product reviews and customer testimonials.</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
              <section><img src={reviewsHero} alt="Product reviews interface" className="w-full h-auto rounded-lg mb-6" /><p className="text-lg text-muted-foreground">Product reviews are essential for building trust in the Kenyan e-commerce market.</p></section>
              <section><img src={reviewsSocial} alt="Social proof badges" className="w-full h-auto rounded-lg mb-6" /></section>
              <section><img src={reviewsTestimonials} alt="Customer testimonials" className="w-full h-auto rounded-lg mb-6" /></section>
            </div>
          </article>

          <BlogSidebar currentCategory="E-commerce" />
        </div>
      </div>
    </div>
  );
};

export default ProductReviewsStrategy;