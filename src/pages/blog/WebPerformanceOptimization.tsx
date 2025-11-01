import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/blog-performance-hero.jpg";
import metricsImage from "@/assets/blog-performance-metrics.jpg";
import optimizationImage from "@/assets/blog-performance-optimization.jpg";

const WebPerformanceOptimization = () => {
  return (
    <div className="min-h-screen flex flex-col font-blog">
      <Navigation />
      
      <article className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={heroImage}
            alt="Website performance dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center text-accent hover:text-accent-hover mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <div className="bg-card rounded-xl shadow-lg p-8 mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Web Performance Optimization: Speed Matters
              </h1>
              
              <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>January 8, 2025</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>Isaac N.</span>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Learn how to optimize your website's performance for faster loading times, better user experiences, and improved search rankings with Core Web Vitals.
              </p>
            </div>

            {/* Article Body */}
            <div className="bg-card rounded-xl shadow-lg p-8 prose prose-lg max-w-none">
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
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default WebPerformanceOptimization;
