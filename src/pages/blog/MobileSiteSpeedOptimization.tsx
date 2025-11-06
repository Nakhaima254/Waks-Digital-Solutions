import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import mobileSpeedHero from "@/assets/blog-mobile-speed-hero.jpg";
import mobileSpeedMetrics from "@/assets/blog-mobile-speed-metrics.jpg";
import mobileSpeedCompression from "@/assets/blog-mobile-speed-compression.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const MobileSiteSpeedOptimization = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 font-blog">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>Isaac N.</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>February 25, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>11 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Mobile Site Speed Optimization: Essential Guide for Kenya
            </h1>
            
            <p className="text-xl text-primary-foreground/80">
              Learn proven techniques to accelerate your mobile website loading times and improve user experience in Kenya's variable network conditions.
            </p>
            
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" />
              <span>Share Article</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img 
          src={mobileSpeedHero} 
          alt="Mobile speed optimization performance metrics on smartphone" 
          className="w-full h-auto rounded-lg shadow-2xl"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            In Kenya's mobile-first market, site speed directly impacts user engagement, conversion rates, and search rankings. With variable network conditions across 3G and 4G connections, optimizing mobile performance isn't optional—it's critical for business success.
          </p>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Why Mobile Speed Matters in Kenya
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Research shows that 53% of mobile users abandon sites that take longer than 3 seconds to load. In Kenya, where data costs remain significant and network speeds vary, every millisecond counts. Faster sites mean:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Higher conversion rates (every 100ms improvement increases conversions by 1%)</li>
            <li>Better SEO rankings (Google uses mobile speed as a ranking factor)</li>
            <li>Reduced data consumption (users on limited data plans)</li>
            <li>Improved user satisfaction and retention</li>
            <li>Lower bounce rates across all pages</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Measuring Mobile Performance
          </h2>
          
          <img 
            src={mobileSpeedMetrics} 
            alt="Mobile performance dashboard showing Core Web Vitals and page speed metrics" 
            className="w-full h-auto rounded-lg shadow-lg my-8"
          />

          <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
            Core Web Vitals
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Google's Core Web Vitals provide essential performance metrics:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li><strong>Largest Contentful Paint (LCP):</strong> Target under 2.5 seconds</li>
            <li><strong>First Input Delay (FID):</strong> Target under 100 milliseconds</li>
            <li><strong>Cumulative Layout Shift (CLS):</strong> Target under 0.1</li>
            <li><strong>First Contentful Paint (FCP):</strong> Target under 1.8 seconds</li>
            <li><strong>Time to Interactive (TTI):</strong> Target under 3.8 seconds</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
            Testing Tools
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Use these tools to measure and monitor mobile performance:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Google PageSpeed Insights (simulates 3G/4G conditions)</li>
            <li>WebPageTest (test from Kenyan locations)</li>
            <li>Lighthouse in Chrome DevTools</li>
            <li>GTmetrix for detailed performance reports</li>
            <li>Real User Monitoring (RUM) for actual user data</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Image Optimization Strategies
          </h2>
          
          <img 
            src={mobileSpeedCompression} 
            alt="Image optimization comparison showing compressed vs uncompressed file sizes" 
            className="w-full h-auto rounded-lg shadow-lg my-8"
          />

          <p className="text-foreground/80 leading-relaxed mb-4">
            Images typically account for 50-70% of page weight. Optimize them effectively:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Use modern formats (WebP, AVIF) with JPEG/PNG fallbacks</li>
            <li>Implement responsive images with srcset and sizes attributes</li>
            <li>Enable lazy loading for below-the-fold images</li>
            <li>Compress images without visible quality loss (80-85% quality)</li>
            <li>Use appropriate dimensions (don't serve desktop images to mobile)</li>
            <li>Consider using CDN with automatic image optimization</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Code Optimization Techniques
          </h2>

          <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
            JavaScript Optimization
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Reduce JavaScript impact on mobile performance:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Minimize and bundle JavaScript files</li>
            <li>Defer non-critical JavaScript loading</li>
            <li>Use code splitting for large applications</li>
            <li>Remove unused JavaScript (tree shaking)</li>
            <li>Optimize third-party scripts and analytics</li>
            <li>Use modern JavaScript features (requires less code)</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
            CSS Optimization
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Streamline CSS for faster rendering:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Inline critical CSS for above-the-fold content</li>
            <li>Defer non-critical CSS loading</li>
            <li>Remove unused CSS rules</li>
            <li>Use CSS containment for layout optimization</li>
            <li>Minimize CSS file size through compression</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Caching and CDN Implementation
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Leverage caching to reduce server load and improve response times:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Implement browser caching with appropriate cache headers</li>
            <li>Use service workers for offline functionality</li>
            <li>Deploy CDN to serve static assets from locations closer to users</li>
            <li>Enable HTTP/2 or HTTP/3 for multiplexing</li>
            <li>Configure server-side caching (Redis, Memcached)</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Reducing HTTP Requests
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Each HTTP request adds latency, especially on slower connections:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Combine CSS and JavaScript files when appropriate</li>
            <li>Use CSS sprites for small icons</li>
            <li>Inline small critical assets (SVGs, small images)</li>
            <li>Reduce social media widget and tracking script count</li>
            <li>Implement resource hints (preload, prefetch, preconnect)</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Server and Hosting Optimization
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Backend optimization significantly impacts mobile speed:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Enable GZIP or Brotli compression</li>
            <li>Optimize database queries and indexes</li>
            <li>Use appropriate hosting tier for traffic levels</li>
            <li>Implement server-side rendering for faster initial loads</li>
            <li>Consider Kenya-based or regional hosting for lower latency</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Mobile-Specific Optimizations
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Techniques specifically beneficial for mobile devices:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Use AMP (Accelerated Mobile Pages) for content-heavy sites</li>
            <li>Implement progressive web app features</li>
            <li>Optimize font loading (font-display: swap)</li>
            <li>Reduce animation complexity on lower-end devices</li>
            <li>Implement adaptive loading based on connection quality</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Monitoring and Continuous Improvement
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Mobile performance optimization is ongoing. Implement continuous monitoring:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Set up performance budgets and alerts</li>
            <li>Monitor real user metrics (RUM)</li>
            <li>Regularly audit performance with automated tools</li>
            <li>Track performance impact of new features</li>
            <li>A/B test optimization strategies</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Conclusion
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Mobile site speed optimization requires a comprehensive approach addressing images, code, caching, and server configuration. By implementing these strategies and continuously monitoring performance, you'll create fast, engaging mobile experiences that convert visitors into customers—even on Kenya's variable network conditions.
          </p>

          <div className="mt-12 p-8 bg-accent/10 rounded-lg border border-accent/20">
            <h3 className="text-2xl font-semibold text-primary mb-4">Need Help Optimizing Mobile Speed?</h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Our team specializes in mobile performance optimization for Kenyan businesses. Let's accelerate your mobile site together.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
            >
              Get Started Today
            </Link>
          </div>
            </div>
          </article>

          <BlogSidebar currentCategory="Mobile" />
        </div>
      </div>
    </div>
  );
};

export default MobileSiteSpeedOptimization;
