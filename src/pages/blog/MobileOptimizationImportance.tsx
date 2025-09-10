import { ArrowLeft, Calendar, Clock, User, Share2, Smartphone, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const MobileOptimizationImportance = () => {
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
                <span>Grace Wanjiku</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>December 25, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>7 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Why Mobile Optimization is Critical for Kenyan Businesses
            </h1>
            
            <p className="text-xl text-primary-foreground/80">
              With over 90% of Kenyans accessing the internet via mobile, learn why mobile optimization 
              can make or break your online success.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          
          <section>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In Kenya's rapidly evolving digital landscape, mobile devices have become the primary gateway 
              to the internet for the vast majority of users. With smartphone adoption rates soaring and 
              mobile internet becoming more affordable, businesses that fail to prioritize mobile optimization 
              risk losing significant market share. This article explores why mobile optimization is not just 
              important but absolutely critical for Kenyan businesses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Smartphone className="h-6 w-6 text-primary" />
              <span>The Mobile Reality in Kenya</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 text-center">
                <div className="text-3xl font-bold text-primary mb-2">22M+</div>
                <div className="text-sm text-muted-foreground">Internet users in Kenya</div>
              </div>
              <div className="bg-accent/5 p-6 rounded-lg border border-accent/20 text-center">
                <div className="text-3xl font-bold text-accent mb-2">90%+</div>
                <div className="text-sm text-muted-foreground">Access internet via mobile</div>
              </div>
              <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/20 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">Internet penetration rate</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Key Mobile Usage Trends</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Smartphone ownership increased by 40% between 2020-2024</li>
              <li>Mobile data consumption grew by 150% in the last 3 years</li>
              <li>Social media usage is 95% mobile-driven</li>
              <li>E-commerce transactions are 90% mobile-initiated</li>
              <li>Mobile payments (M-Pesa) dominate digital transactions</li>
            </ul>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-muted-foreground">
                <strong>Reality Check:</strong> If your website isn't optimized for mobile, you're essentially 
                invisible to 9 out of 10 potential customers in Kenya.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span>Business Impact of Mobile Optimization</span>
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Revenue Impact</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Conversion Rate Increase</h4>
                  <p className="text-muted-foreground text-sm">Mobile-optimized sites see 67% higher conversion rates than non-optimized ones.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Customer Retention</h4>
                  <p className="text-muted-foreground text-sm">Users are 5x more likely to return to mobile-friendly websites.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Search Rankings</h4>
                  <p className="text-muted-foreground text-sm">Google prioritizes mobile-friendly sites, affecting 70% of organic traffic.</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Cost of Poor Mobile Experience</h3>
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <ul className="space-y-2 text-sm text-red-700">
                <li>• 57% of users won't recommend businesses with poor mobile sites</li>
                <li>• 40% will switch to competitors after bad mobile experience</li>
                <li>• 3-second loading delay can reduce conversions by 32%</li>
                <li>• Non-mobile sites lose 61% of potential customers immediately</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Kenya-Specific Mobile Challenges</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Network Connectivity Issues</h3>
            <p className="text-muted-foreground mb-4">
              While Kenya has good 4G coverage in urban areas, rural areas and even some city locations 
              still experience slower connections. Your mobile site must perform well on:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>3G networks (still prevalent in rural areas)</li>
              <li>Intermittent connections during travel</li>
              <li>Peak hour network congestion</li>
              <li>Data-conscious users with limited bundles</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Device Diversity</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Popular Device Categories</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Budget Android phones (40%)</li>
                  <li>• Mid-range smartphones (35%)</li>
                  <li>• Premium devices (15%)</li>
                  <li>• Feature phones with basic internet (10%)</li>
                </ul>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Screen Size Variations</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Small screens: 4-5 inches</li>
                  <li>• Standard: 5-6 inches</li>
                  <li>• Large: 6-7 inches</li>
                  <li>• Various resolutions and aspect ratios</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Data Cost Consciousness</h3>
            <p className="text-muted-foreground mb-4">
              Many Kenyan users are highly conscious of data usage due to cost considerations. 
              This affects how they interact with websites:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Prefer lightweight pages that load quickly</li>
              <li>Avoid image-heavy or video-rich content</li>
              <li>Abandon sites that consume too much data</li>
              <li>Use data compression browsers and apps</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Essential Mobile Optimization Strategies</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">1. Responsive Design</h3>
            <p className="text-muted-foreground mb-4">
              Ensure your website adapts seamlessly to all screen sizes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Fluid grid layouts that scale proportionally</li>
              <li>Flexible images that resize appropriately</li>
              <li>Touch-friendly navigation and buttons</li>
              <li>Readable text without zooming</li>
              <li>Optimal spacing for touch interactions</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">2. Speed Optimization</h3>
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 mb-6">
              <p className="text-muted-foreground mb-3">
                <strong>Target:</strong> Load time under 3 seconds on 3G connection
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Compress and optimize all images</li>
                <li>• Minimize HTTP requests</li>
                <li>• Use content delivery networks (CDNs)</li>
                <li>• Enable browser caching</li>
                <li>• Minimize code (CSS, JavaScript, HTML)</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">3. Mobile-First Content Strategy</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Prioritize essential content above the fold</li>
              <li>Use concise, scannable text formats</li>
              <li>Implement progressive image loading</li>
              <li>Offer offline functionality where possible</li>
              <li>Integrate mobile payment options (M-Pesa)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">4. User Experience Optimization</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Simple, intuitive navigation menus</li>
              <li>Large, easily tappable buttons and links</li>
              <li>Streamlined forms with minimal fields</li>
              <li>Clear calls-to-action</li>
              <li>Fast, secure checkout processes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Users className="h-6 w-6 text-primary" />
              <span>Mobile SEO for Local Success</span>
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Local Mobile Search Optimization</h3>
            <p className="text-muted-foreground mb-4">
              Mobile searches are 3x more likely to be local. Optimize for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>"Near me" search queries</li>
              <li>Google My Business optimization</li>
              <li>Local keywords with city/area names</li>
              <li>Click-to-call functionality</li>
              <li>Location-based content and services</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Voice Search Optimization</h3>
            <p className="text-muted-foreground mb-4">
              With increasing smartphone usage, voice search is growing in Kenya:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Optimize for conversational queries</li>
              <li>Include long-tail keywords</li>
              <li>Create FAQ-style content</li>
              <li>Use natural language in content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Testing and Monitoring</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Essential Testing Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Free Tools</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Google Mobile-Friendly Test</li>
                  <li>• PageSpeed Insights</li>
                  <li>• Google Search Console</li>
                  <li>• Chrome DevTools</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Key Metrics</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Page load speed</li>
                  <li>• Mobile usability score</li>
                  <li>• Bounce rate by device</li>
                  <li>• Conversion rate comparison</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Regular Testing Schedule</h4>
              <p className="text-sm text-muted-foreground">
                Test your mobile site monthly on different devices and network conditions. 
                Monitor performance during peak usage times and after any website updates.
              </p>
            </div>
          </section>

          <section className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">Ready to Optimize for Mobile Success?</h3>
            <p className="text-muted-foreground mb-4">
              Don't let poor mobile experience cost you customers. At Waks Digital Solutions, we specialize 
              in creating mobile-optimized websites that perform exceptionally well in Kenya's unique digital 
              environment. Our mobile-first approach ensures your business reaches and converts mobile users effectively.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Get Mobile-Optimized Today
            </Link>
          </section>
        </div>
      </article>
    </div>
  );
};

export default MobileOptimizationImportance;