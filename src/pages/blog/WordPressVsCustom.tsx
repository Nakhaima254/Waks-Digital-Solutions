import { ArrowLeft, Calendar, Clock, User, Share2, Code, Zap, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const WordPressVsCustom = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
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
                <span>December 28, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>10 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              WordPress vs Custom Development: Which is Right for Your Business?
            </h1>
            
            <p className="text-xl text-primary-foreground/80">
              Compare the pros and cons of WordPress and custom development to make the best choice 
              for your business needs and budget.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          
          <section>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When planning a new website, one of the most important decisions you'll make is choosing 
              between WordPress and custom development. Both approaches have their merits, and the right 
              choice depends on your specific business needs, budget, timeline, and long-term goals. 
              Let's break down the key differences to help you make an informed decision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Code className="h-6 w-6 text-primary" />
              <span>WordPress Development</span>
            </h2>
            
            <p className="text-muted-foreground mb-6">
              WordPress powers over 40% of all websites globally, making it the most popular content 
              management system (CMS) in the world. It's particularly popular among small to medium 
              businesses due to its accessibility and extensive ecosystem.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">WordPress Advantages</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• Quick development and launch</li>
                  <li>• Lower initial costs</li>
                  <li>• Extensive theme and plugin library</li>
                  <li>• User-friendly content management</li>
                  <li>• Large community support</li>
                  <li>• SEO-friendly out of the box</li>
                  <li>• Regular updates and security patches</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-3">WordPress Limitations</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• Limited customization without coding</li>
                  <li>• Potential security vulnerabilities</li>
                  <li>• Plugin compatibility issues</li>
                  <li>• Performance can suffer with many plugins</li>
                  <li>• Ongoing maintenance requirements</li>
                  <li>• May look similar to other WordPress sites</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Best For WordPress</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Small to medium businesses with standard requirements</li>
              <li>Blogs and content-heavy websites</li>
              <li>E-commerce stores (with WooCommerce)</li>
              <li>Businesses with tight budgets and quick timelines</li>
              <li>Organizations that need easy content management</li>
              <li>Websites requiring frequent content updates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Zap className="h-6 w-6 text-primary" />
              <span>Custom Development</span>
            </h2>
            
            <p className="text-muted-foreground mb-6">
              Custom development involves building your website from scratch using programming languages 
              like HTML, CSS, JavaScript, and backend technologies. This approach offers maximum flexibility 
              and control over every aspect of your website.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Custom Development Advantages</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Complete design and functionality control</li>
                  <li>• Optimized performance and speed</li>
                  <li>• Unique, brand-specific design</li>
                  <li>• Enhanced security</li>
                  <li>• Scalable architecture</li>
                  <li>• No third-party dependencies</li>
                  <li>• Better integration capabilities</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Custom Development Challenges</h3>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>• Higher initial development costs</li>
                  <li>• Longer development timeline</li>
                  <li>• Requires technical expertise</li>
                  <li>• More complex content management</li>
                  <li>• Higher maintenance costs</li>
                  <li>• Developer dependency for changes</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Best For Custom Development</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Large enterprises with complex requirements</li>
              <li>Businesses needing unique functionality</li>
              <li>High-traffic websites requiring optimal performance</li>
              <li>Applications with specific security requirements</li>
              <li>Brands wanting completely unique designs</li>
              <li>Businesses with long-term growth plans</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <DollarSign className="h-6 w-6 text-primary" />
              <span>Cost Comparison</span>
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-muted-foreground/20 rounded-lg">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-muted-foreground/20 p-4 text-left font-semibold">Aspect</th>
                    <th className="border border-muted-foreground/20 p-4 text-left font-semibold">WordPress</th>
                    <th className="border border-muted-foreground/20 p-4 text-left font-semibold">Custom Development</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-muted-foreground/20 p-4 font-medium">Initial Development</td>
                    <td className="border border-muted-foreground/20 p-4 text-muted-foreground">KSH 25,000 - 85,000</td>
                    <td className="border border-muted-foreground/20 p-4 text-muted-foreground">KSH 150,000 - 500,000+</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-muted-foreground/20 p-4 font-medium">Timeline</td>
                    <td className="border border-muted-foreground/20 p-4 text-muted-foreground">2-6 weeks</td>
                    <td className="border border-muted-foreground/20 p-4 text-muted-foreground">2-6 months</td>
                  </tr>
                  <tr>
                    <td className="border border-muted-foreground/20 p-4 font-medium">Monthly Maintenance</td>
                    <td className="border border-muted-foreground/20 p-4 text-muted-foreground">KSH 5,000 - 15,000</td>
                    <td className="border border-muted-foreground/20 p-4 text-muted-foreground">KSH 10,000 - 30,000</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-muted-foreground/20 p-4 font-medium">Hosting</td>
                    <td className="border border-muted-foreground/20 p-4 text-muted-foreground">KSH 2,000 - 8,000/month</td>
                    <td className="border border-muted-foreground/20 p-4 text-muted-foreground">KSH 5,000 - 20,000/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Decision Framework</h2>
            
            <div className="space-y-6">
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-3">Choose WordPress if you:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Have a limited budget (under KSH 100,000)</li>
                  <li>Need to launch quickly (within 1-2 months)</li>
                  <li>Plan to manage content yourself</li>
                  <li>Have standard business requirements</li>
                  <li>Don't need highly custom functionality</li>
                  <li>Want access to extensive plugins and themes</li>
                </ul>
              </div>

              <div className="bg-accent/5 p-6 rounded-lg border border-accent/20">
                <h3 className="text-lg font-semibold text-foreground mb-3">Choose Custom Development if you:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Have a substantial budget (KSH 150,000+)</li>
                  <li>Need unique, complex functionality</li>
                  <li>Require maximum performance and security</li>
                  <li>Want a completely unique design</li>
                  <li>Plan for significant growth and scaling</li>
                  <li>Need specific integrations with other systems</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Hybrid Approach: Custom WordPress Development</h2>
            <p className="text-muted-foreground mb-4">
              For many Kenyan businesses, a hybrid approach offers the best of both worlds:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li><strong>Custom WordPress Themes:</strong> Unique design built on WordPress</li>
              <li><strong>Custom Plugin Development:</strong> Specific functionality tailored to your needs</li>
              <li><strong>Headless WordPress:</strong> WordPress backend with custom frontend</li>
              <li><strong>WordPress Multisite:</strong> Multiple sites managed from one installation</li>
            </ul>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-muted-foreground">
                <strong>Cost Range:</strong> KSH 85,000 - 250,000 | 
                <strong> Timeline:</strong> 1-3 months | 
                <strong> Best For:</strong> Growing businesses needing custom features with content management flexibility
              </p>
            </div>
          </section>

          <section className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">Need Help Choosing the Right Approach?</h3>
            <p className="text-muted-foreground mb-4">
              At Waks Digital Solutions, we specialize in both WordPress and custom development. 
              We'll help you choose the right approach based on your specific needs, budget, and goals. 
              Our team has delivered hundreds of successful projects across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/services/wordpress-design" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Explore WordPress Solutions
              </Link>
              <Link 
                to="/services/web-development" 
                className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
              >
                Learn About Custom Development
              </Link>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default WordPressVsCustom;