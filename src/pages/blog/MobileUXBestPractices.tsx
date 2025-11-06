import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import mobileUxHero from "@/assets/blog-mobile-ux-hero.jpg";
import mobileUxWireframes from "@/assets/blog-mobile-ux-wireframes.jpg";
import mobileUxTesting from "@/assets/blog-mobile-ux-testing.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const MobileUXBestPractices = () => {
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
                <span>February 15, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>10 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Mobile UX Design Best Practices for Kenyan Websites
            </h1>
            
            <p className="text-xl text-primary-foreground/80">
              Learn essential mobile UX design principles to create intuitive, user-friendly mobile experiences that engage Kenyan users and drive conversions.
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
          src={mobileUxHero} 
          alt="Modern mobile UX design interfaces on smartphones" 
          className="w-full h-auto rounded-lg shadow-2xl"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            In Kenya's mobile-first market, exceptional user experience isn't optional—it's essential. With over 90% of internet users accessing websites through mobile devices, creating intuitive and engaging mobile experiences directly impacts your business success.
          </p>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Understanding Mobile UX Fundamentals
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Mobile UX design differs significantly from desktop design. Users interact with smaller screens using touch gestures, often in varying lighting conditions and while multitasking. Your mobile design must accommodate these unique contexts while delivering seamless functionality.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            In Kenya's mobile market, where data costs matter, fast-loading, efficient interfaces aren't just nice to have—they're crucial for user retention. Every second of load time and every extra tap can mean the difference between conversion and abandonment.
          </p>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Touch-Friendly Interface Design
          </h2>
          
          <img 
            src={mobileUxWireframes} 
            alt="Mobile UX wireframes showing gesture controls and interface patterns" 
            className="w-full h-auto rounded-lg shadow-lg my-8"
          />

          <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
            Optimal Touch Target Sizes
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Ensure all interactive elements are at least 44x44 pixels (iOS) or 48x48 pixels (Android) to prevent mis-taps. Space buttons adequately to avoid accidental clicks, especially for critical actions like payments or form submissions.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Primary action buttons: 48-56px height minimum</li>
            <li>Secondary buttons: 44-48px height minimum</li>
            <li>Spacing between tappable elements: 8-12px minimum</li>
            <li>Form inputs: 44-56px height for easy interaction</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
            Thumb-Friendly Navigation
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Design for one-handed use by placing important navigation elements within the "thumb zone"—the natural reach area of the thumb. Position primary actions at the bottom of the screen where they're easily accessible.
          </p>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Simplifying Mobile Navigation
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Mobile screens offer limited space, so navigation must be concise and intuitive. Use hamburger menus judiciously—while they save space, they can hide important content. Consider:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Bottom navigation bars for primary sections (3-5 items max)</li>
            <li>Sticky headers for constant access to key functions</li>
            <li>Clear visual hierarchy with readable fonts (16px minimum)</li>
            <li>Breadcrumbs for complex site structures</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Optimizing Mobile Forms
          </h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Forms are critical for conversions but challenging on mobile. Reduce friction by:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Asking only for essential information</li>
            <li>Using appropriate input types (number, email, tel)</li>
            <li>Enabling autofill and autocomplete</li>
            <li>Providing clear error messages inline</li>
            <li>Using one-column layouts for easier completion</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
            Testing and Validation
          </h2>
          
          <img 
            src={mobileUxTesting} 
            alt="Mobile user testing session showing engagement with mobile interface" 
            className="w-full h-auto rounded-lg shadow-lg my-8"
          />

          <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
            User Testing Methods
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Test your mobile UX with real Kenyan users to identify pain points:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Remote usability testing for quick feedback</li>
            <li>A/B testing different design approaches</li>
            <li>Heat mapping to understand interaction patterns</li>
            <li>Analytics review for drop-off points</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
            Device and Network Testing
          </h3>
          <p className="text-foreground/80 leading-relaxed mb-4">
            Kenya's mobile landscape includes various devices and network conditions. Test on:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Entry-level Android devices (most common in Kenya)</li>
            <li>3G and 4G network speeds</li>
            <li>Different screen sizes (4.5" to 6.5")</li>
            <li>Various Android and iOS versions</li>
          </ul>

          <div className="mt-12 p-8 bg-accent/10 rounded-lg border border-accent/20">
            <h3 className="text-2xl font-semibold text-primary mb-4">Need Expert Mobile UX Design?</h3>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Our team specializes in creating mobile-first experiences optimized for Kenyan users. Let's build something exceptional together.
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

export default MobileUXBestPractices;
