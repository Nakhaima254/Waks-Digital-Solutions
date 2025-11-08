import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import heroImage from "@/assets/blog-performance-hero.jpg";
import metricsImage from "@/assets/blog-performance-metrics.jpg";
import optimizationImage from "@/assets/blog-performance-optimization.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const WebPerformanceOptimization = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 font-blog">
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-5 w-5" /><span>Back to Blog</span>
          </Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Isaac N.</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>January 8, 2025</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Web Performance Optimization: Speed Matters</h1>
            <p className="text-xl text-primary-foreground/80">Learn how to optimize your website's performance for faster loading times, better user experiences, and improved search rankings with Core Web Vitals.</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={heroImage} alt="Website performance dashboard" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
              <h2>Why Performance Matters</h2>
              <p>
                Website performance directly impacts user experience, conversion rates, and search engine rankings. A one-second delay in page load time can result in a 7% reduction in conversions.
              </p>

              <h2>Understanding Core Web Vitals</h2>
              <img 
                src={metricsImage} 
                alt="Core Web Vitals metrics" 
                className="w-full rounded-lg my-6"
              />
              <p>
                Google's Core Web Vitals are essential metrics for measuring user experience. Focus on optimizing LCP (Largest Contentful Paint), FID (First Input Delay), and CLS (Cumulative Layout Shift).
              </p>
              <ul>
                <li>LCP should occur within 2.5 seconds</li>
                <li>FID should be less than 100 milliseconds</li>
                <li>CLS should be less than 0.1</li>
                <li>Monitor these metrics regularly</li>
              </ul>

              <h2>Image Optimization Strategies</h2>
              <img 
                src={optimizationImage} 
                alt="Image optimization techniques" 
                className="w-full rounded-lg my-6"
              />
              <p>
                Images often account for most of a page's weight. Optimize them through compression, modern formats like WebP, lazy loading, and responsive images.
              </p>
              <ul>
                <li>Use modern image formats (WebP, AVIF)</li>
                <li>Implement lazy loading for below-the-fold images</li>
                <li>Serve responsive images with srcset</li>
                <li>Compress images without sacrificing quality</li>
              </ul>

              <h2>Code Optimization</h2>
              <p>
                Minimize and bundle your JavaScript and CSS. Remove unused code, implement code splitting, and defer non-critical JavaScript to improve initial load times.
              </p>

              <h2>Caching Strategies</h2>
              <p>
                Leverage browser caching and CDNs to reduce server load and improve loading times for returning visitors. Set appropriate cache headers and use service workers for offline caching.
              </p>

              <h2>Monitoring and Testing</h2>
              <p>
                Regularly test your site's performance using tools like Google PageSpeed Insights, Lighthouse, and WebPageTest. Monitor real user metrics to understand actual performance in production.
              </p>

              <div className="bg-accent-light p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
                <ul className="space-y-2">
                  <li>✓ Performance directly affects conversions</li>
                  <li>✓ Optimize Core Web Vitals metrics</li>
                  <li>✓ Images are often the biggest opportunity</li>
                  <li>✓ Minimize and optimize code delivery</li>
                  <li>✓ Regular monitoring is essential</li>
                </ul>
              </div>
            </div>
          </article>

          <BlogSidebar currentCategory="Development" />
        </div>
      </div>
    </div>
  );
};

export default WebPerformanceOptimization;
