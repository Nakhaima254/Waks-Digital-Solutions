import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import navigationDesignImage from "@/assets/blog-navigation-design.jpg";
import navigationExamplesImage from "@/assets/blog-navigation-examples.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const NavigationDesignBestPractices = () => {
  return (
    <div className="min-h-screen pt-16 font-blog">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={navigationDesignImage} 
            alt="Navigation Design Best Practices" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>
          
          <Badge variant="secondary" className="mb-4">Design</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Creating User-Friendly Navigation: Best Practices for 2025
          </h1>
          
          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>Isaac N.</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>12 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 prose prose-lg">
              <div className="space-y-6 text-foreground">
                <p className="text-xl leading-relaxed">
                  Your website's navigation is like a roadmap – it guides visitors to where they want to go. Poor navigation is one of the main reasons users abandon websites. In this comprehensive guide, we'll explore the best practices for creating intuitive, user-friendly navigation that keeps Kenyan website visitors engaged.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-8">Why Navigation Matters</h2>
                <p>
                  Good navigation design directly impacts:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>User Experience:</strong> Helps visitors find what they need quickly</li>
                  <li><strong>Conversion Rates:</strong> Clear paths to action increase sales</li>
                  <li><strong>SEO:</strong> Search engines favor well-structured sites</li>
                  <li><strong>Bounce Rates:</strong> Easy navigation keeps people on your site longer</li>
                  <li><strong>Brand Perception:</strong> Professional navigation builds trust</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-8">The 3-Second Rule</h2>
                <p>
                  Users should be able to understand your site's structure and find what they're looking for within 3 seconds. If navigation is confusing, they'll leave. This is especially important for Kenyan mobile users who may have limited data and patience for complex websites.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-8">Essential Navigation Best Practices</h2>

                <img 
                  src={navigationExamplesImage} 
                  alt="Examples of user-friendly website navigation on desktop and mobile devices" 
                  className="w-full h-auto rounded-lg my-6"
                />

                <h3 className="text-2xl font-semibold text-primary mt-6">1. Keep It Simple and Clear</h3>
                <p>
                  Less is more when it comes to navigation menus. Limit your main navigation to 5-7 items maximum. For example:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-mono">Home | Services | Portfolio | About | Blog | Contact</p>
                </div>
                <p className="mt-4">
                  Each label should be clear and descriptive. Avoid creative labels that confuse users. Instead of "Our Story," use "About Us." Instead of "Solutions," use "Services."
                </p>

                <h3 className="text-2xl font-semibold text-primary mt-6">2. Use Descriptive Labels</h3>
                <p>
                  Navigation labels should clearly communicate what users will find. For Kenyan businesses:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Good:</strong> "Web Development Services"</li>
                  <li><strong>Bad:</strong> "What We Do"</li>
                  <li><strong>Good:</strong> "M-Pesa Payment Options"</li>
                  <li><strong>Bad:</strong> "Pay Here"</li>
                </ul>

                <h3 className="text-2xl font-semibold text-primary mt-6">3. Implement a Logical Hierarchy</h3>
                <p>
                  Organize content from general to specific using dropdown menus when needed:
                </p>
                <div className="bg-muted p-4 rounded-lg space-y-2">
                  <p className="font-semibold">Services</p>
                  <p className="pl-4">• Web Development</p>
                  <p className="pl-4">• WordPress Design</p>
                  <p className="pl-4">• E-commerce Solutions</p>
                  <p className="pl-4">• SEO Services</p>
                </div>

                <h3 className="text-2xl font-semibold text-primary mt-6">4. Make Your Logo Clickable</h3>
                <p>
                  Users expect your logo to link back to the homepage. This is a web convention that shouldn't be broken. Every page should offer an easy way back home.
                </p>

                <h3 className="text-2xl font-semibold text-primary mt-6">5. Highlight the Current Page</h3>
                <p>
                  Show users where they are by highlighting the active navigation item. This can be done through:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Different color or background</li>
                  <li>Underline or border</li>
                  <li>Bold text</li>
                  <li>Icon or indicator</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-8">Mobile Navigation Design</h2>
                <p>
                  With over 85% of Kenyans accessing the internet via mobile devices, mobile navigation is critical:
                </p>

                <h3 className="text-2xl font-semibold text-primary mt-6">The Hamburger Menu</h3>
                <p>
                  The three-line "hamburger" icon (☰) is universally recognized on mobile. When clicked, it should reveal:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full navigation menu</li>
                  <li>Large, tappable links (minimum 44x44 pixels)</li>
                  <li>Clear close button (X)</li>
                  <li>Search functionality if relevant</li>
                </ul>

                <h3 className="text-2xl font-semibold text-primary mt-6">Mobile-Specific Considerations</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Thumb-friendly:</strong> Place important links in easy-to-reach areas</li>
                  <li><strong>Fast loading:</strong> Optimize for slower connections common in Kenya</li>
                  <li><strong>Sticky navigation:</strong> Keep navigation accessible as users scroll</li>
                  <li><strong>Click-to-call:</strong> Make phone numbers tappable</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-8">Advanced Navigation Features</h2>

                <h3 className="text-2xl font-semibold text-primary mt-6">1. Mega Menus</h3>
                <p>
                  For websites with many pages (like e-commerce sites), mega menus display multiple levels of navigation at once. Perfect for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Online stores with many product categories</li>
                  <li>Educational institutions</li>
                  <li>Large service providers</li>
                </ul>

                <h3 className="text-2xl font-semibold text-primary mt-6">2. Breadcrumbs</h3>
                <p>
                  Breadcrumbs show the path to the current page:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-mono text-sm">Home &gt; Services &gt; Web Development</p>
                </div>
                <p className="mt-4">
                  They help users understand site structure and navigate back easily. Essential for e-commerce and content-heavy sites.
                </p>

                <h3 className="text-2xl font-semibold text-primary mt-6">3. Search Functionality</h3>
                <p>
                  For sites with lots of content, include a search bar in your navigation. Make it:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Visible and easy to find</li>
                  <li>Large enough to type comfortably</li>
                  <li>Offering autocomplete suggestions</li>
                  <li>Providing relevant results quickly</li>
                </ul>

                <h3 className="text-2xl font-semibold text-primary mt-6">4. Call-to-Action Buttons</h3>
                <p>
                  Include prominent CTA buttons in your navigation:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>"Get a Quote"</li>
                  <li>"Contact Us"</li>
                  <li>"Sign Up"</li>
                  <li>"Buy Now"</li>
                </ul>
                <p className="mt-4">
                  These should stand out visually from regular navigation items using contrasting colors or button styling.
                </p>

                <h2 className="text-3xl font-bold text-primary mt-8">Navigation Patterns to Avoid</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Hidden navigation:</strong> Don't hide important links</li>
                  <li><strong>Too many dropdowns:</strong> Limit dropdown levels to 2 maximum</li>
                  <li><strong>Unclear labels:</strong> Avoid jargon and creative labeling</li>
                  <li><strong>Inconsistent placement:</strong> Keep navigation in the same place on all pages</li>
                  <li><strong>Auto-playing videos:</strong> Don't distract users from navigation</li>
                  <li><strong>Tiny touch targets:</strong> Make mobile links large enough to tap</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-8">Testing Your Navigation</h2>
                <p>
                  Before launching your website, test the navigation thoroughly:
                </p>

                <h3 className="text-2xl font-semibold text-primary mt-6">1. The 5-Second Test</h3>
                <p>
                  Show your site to someone for 5 seconds and ask them to find a specific page. Can they do it?
                </p>

                <h3 className="text-2xl font-semibold text-primary mt-6">2. User Testing</h3>
                <p>
                  Watch real users navigate your site. Where do they struggle? What confuses them?
                </p>

                <h3 className="text-2xl font-semibold text-primary mt-6">3. Analytics Review</h3>
                <p>
                  Use Google Analytics to identify:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Which pages have high bounce rates</li>
                  <li>Where users exit your site</li>
                  <li>Popular vs. ignored navigation items</li>
                </ul>

                <h2 className="text-3xl font-bold text-primary mt-8">Examples of Great Navigation</h2>
                
                <div className="bg-muted p-6 rounded-lg space-y-4">
                  <div>
                    <p className="font-semibold">E-commerce: Simple Categories</p>
                    <p className="text-sm mt-2">Men | Women | Kids | Sale | New Arrivals</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">Corporate: Professional Structure</p>
                    <p className="text-sm mt-2">About | Services | Industries | Case Studies | Blog | Contact</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">Restaurant: Essential Info First</p>
                    <p className="text-sm mt-2">Menu | Order Online | Reservations | Locations | About</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-primary mt-8">Conclusion</h2>
                <p>
                  Great navigation design is invisible – users shouldn't have to think about how to find what they need. By following these best practices, your Kenyan business website will provide an intuitive, frustration-free experience that keeps visitors engaged and drives conversions.
                </p>
                <p>
                  Remember: navigation isn't just about aesthetics. It's about creating a seamless journey from landing page to conversion. Invest time in getting it right, and your users will thank you with their business.
                </p>

                <div className="bg-accent/10 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold text-primary mb-3">Need help designing intuitive navigation for your website?</h3>
                  <p className="mb-4">
                    At Waks Digital, we create user-friendly websites with navigation that guides visitors exactly where they need to go. Let's discuss your project.
                  </p>
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/contact">Get Started Today</Link>
                  </Button>
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

export default NavigationDesignBestPractices;
