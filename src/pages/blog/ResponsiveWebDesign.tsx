import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import heroImage from "@/assets/blog-responsive-design.jpg";
import testingImage from "@/assets/blog-responsive-testing.jpg";
import frameworksImage from "@/assets/blog-responsive-frameworks.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const ResponsiveWebDesign = () => {
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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>January 15, 2025</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Responsive Web Design Best Practices for 2025</h1>
            <p className="text-xl text-primary-foreground/80">Learn how to create websites that look perfect on every device. Master the art of responsive design with modern techniques and best practices.</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={heroImage} alt="Responsive web design on multiple devices" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-lg p-8 prose prose-lg max-w-none">
              <h2>Why Responsive Design Matters</h2>
              <p>
                In today's mobile-first world, responsive web design isn't optional—it's essential. With over 60% of web traffic coming from mobile devices, your website must provide an excellent experience across all screen sizes.
              </p>

              <h2>Mobile-First Approach</h2>
              <img 
                src={testingImage} 
                alt="Mobile and tablet responsive testing" 
                className="w-full rounded-lg my-6"
              />
              <p>
                Start designing for mobile screens first, then progressively enhance for larger displays. This approach ensures your core content and functionality work everywhere.
              </p>
              <ul>
                <li>Design for the smallest screen first</li>
                <li>Use progressive enhancement</li>
                <li>Test on real devices</li>
                <li>Consider touch targets and gestures</li>
              </ul>

              <h2>Modern Layout Techniques</h2>
              <img 
                src={frameworksImage} 
                alt="CSS Grid and Flexbox layouts" 
                className="w-full rounded-lg my-6"
              />
              <p>
                CSS Grid and Flexbox have revolutionized responsive design. These layout systems make it easier than ever to create flexible, maintainable layouts.
              </p>
              <ul>
                <li>Use CSS Grid for two-dimensional layouts</li>
                <li>Flexbox excels at one-dimensional arrangements</li>
                <li>Combine both for optimal results</li>
                <li>Leverage modern CSS features like container queries</li>
              </ul>

              <h2>Breakpoint Strategy</h2>
              <p>
                Don't just target specific devices—design for content. Let your design dictate where breakpoints should occur rather than following device-specific widths.
              </p>

              <h2>Performance Considerations</h2>
              <p>
                Responsive design isn't just about layout—it's also about performance. Serve appropriately sized images, lazy load content, and minimize unnecessary code.
              </p>

              <h2>Testing Across Devices</h2>
              <p>
                Browser DevTools are helpful, but nothing beats testing on real devices. Maintain a testing suite that includes various phones, tablets, and desktop browsers.
              </p>

              <div className="bg-accent-light p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
                <ul className="space-y-2">
                  <li>✓ Mobile-first design is non-negotiable</li>
                  <li>✓ Use modern CSS layout techniques</li>
                  <li>✓ Design for content, not devices</li>
                  <li>✓ Prioritize performance on all devices</li>
                  <li>✓ Test extensively on real hardware</li>
                </ul>
              </div>
            </div>
          </article>

          <BlogSidebar currentCategory="Design" />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveWebDesign;
