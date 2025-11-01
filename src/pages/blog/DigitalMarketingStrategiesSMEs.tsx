import { ArrowLeft, Calendar, Clock, User, Share2, Target, TrendingUp, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalMarketingStrategiesSMEs = () => {
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
                <span>December 20, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>11 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Digital Marketing Strategies That Work for Kenyan SMEs
            </h1>
            
            <p className="text-xl text-primary-foreground/80">
              Practical, budget-friendly digital marketing strategies that small and medium enterprises 
              in Kenya can implement immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          
          <section>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Small and Medium Enterprises (SMEs) form the backbone of Kenya's economy, contributing over 
              30% to the GDP and employing millions of people. However, many SMEs struggle with digital 
              marketing due to limited budgets, lack of expertise, and uncertainty about which strategies 
              actually work. This comprehensive guide provides practical, cost-effective digital marketing 
              strategies specifically tailored for Kenyan SMEs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Target className="h-6 w-6 text-primary" />
              <span>Understanding Your Kenyan Audience</span>
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Digital Behavior Patterns</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Social Media Preferences</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• WhatsApp: 95% usage rate</li>
                  <li>• Facebook: 80% active users</li>
                  <li>• Instagram: 65% (growing rapidly)</li>
                  <li>• TikTok: 45% (younger demographics)</li>
                  <li>• LinkedIn: 25% (professionals/B2B)</li>
                </ul>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Online Shopping Habits</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Research before purchasing: 85%</li>
                  <li>• Mobile commerce preference: 90%</li>
                  <li>• Trust local recommendations: 75%</li>
                  <li>• Price comparison shopping: 70%</li>
                  <li>• Reviews influence decisions: 80%</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Key Consumer Insights</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Trust is paramount - Kenyans prefer buying from businesses they know or that come recommended</li>
              <li>Price sensitivity is high - value for money is a major decision factor</li>
              <li>Community influence matters - word-of-mouth and social proof are powerful</li>
              <li>Mobile-first approach is essential - most interactions happen on smartphones</li>
              <li>Local language and cultural relevance increase engagement significantly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <DollarSign className="h-6 w-6 text-primary" />
              <span>Cost-Effective Social Media Marketing</span>
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">WhatsApp Business Strategy</h3>
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 mb-6">
              <p className="text-muted-foreground mb-3">
                <strong>Cost:</strong> Free to KSH 5,000/month | <strong>Reach:</strong> Direct customer communication
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Set up professional WhatsApp Business profile</li>
                <li>• Create broadcast lists for different customer segments</li>
                <li>• Use automated messages for common inquiries</li>
                <li>• Share product catalogs and price lists</li>
                <li>• Provide customer support and order updates</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Facebook Marketing on a Budget</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Organic Strategies (Free)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Post consistently (3-5 times per week)</li>
                  <li>• Share behind-the-scenes content</li>
                  <li>• Customer testimonials and success stories</li>
                  <li>• Join local business groups and communities</li>
                  <li>• Engage with followers through comments and messages</li>
                </ul>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Paid Ads (KSH 5,000-20,000/month)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Boost high-performing organic posts</li>
                  <li>• Target local audiences within 5-10km radius</li>
                  <li>• Use lookalike audiences based on existing customers</li>
                  <li>• A/B test different ad creatives and copy</li>
                  <li>• Focus on conversion-optimized campaigns</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Instagram Growth Tactics</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Use local hashtags (#Nairobi, #MadeinKenya, #KenyanBusiness)</li>
              <li>Create visually appealing product photography</li>
              <li>Partner with local micro-influencers (1K-10K followers)</li>
              <li>Share user-generated content and customer photos</li>
              <li>Use Instagram Stories for daily engagement</li>
              <li>Post at optimal times (7-9 AM, 12-2 PM, 5-7 PM)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Local SEO and Google Presence</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Google My Business Optimization</h3>
            <div className="bg-accent/5 p-4 rounded-lg border border-accent/20 mb-6">
              <p className="text-muted-foreground mb-3">
                <strong>Cost:</strong> Free | <strong>Impact:</strong> 70% of local searches lead to action within 24 hours
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Complete your business profile with accurate information</li>
                <li>• Add high-quality photos of your business and products</li>
                <li>• Encourage satisfied customers to leave reviews</li>
                <li>• Post regular updates about offers and events</li>
                <li>• Respond to all customer reviews promptly</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Local Keyword Strategy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Target Keywords Examples</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• "best [service] in [city]"</li>
                  <li>• "[product] shop near me"</li>
                  <li>• "[service] [area name] Kenya"</li>
                  <li>• "affordable [product] Nairobi"</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Implementation</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Include location in website title tags</li>
                  <li>• Create location-specific service pages</li>
                  <li>• Write blog posts about local topics</li>
                  <li>• Get listed in local directories</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span>Content Marketing That Converts</span>
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Blog Content Strategy</h3>
            <div className="space-y-4 mb-6">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">High-Impact Topics</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• How-to guides related to your products/services</li>
                  <li>• Local market insights and trends</li>
                  <li>• Customer success stories and case studies</li>
                  <li>• Industry news with local perspective</li>
                  <li>• Problem-solving content for common customer issues</li>
                </ul>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Content Distribution</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Repurpose blog posts into social media content</li>
                  <li>• Create infographics for visual appeal</li>
                  <li>• Record video explanations for complex topics</li>
                  <li>• Share content in relevant WhatsApp groups</li>
                  <li>• Email newsletter to existing customers</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Video Marketing on a Budget</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Use smartphone cameras for product demonstrations</li>
              <li>Create "day in the life" business content</li>
              <li>Interview satisfied customers (with permission)</li>
              <li>Share behind-the-scenes process videos</li>
              <li>Host live Q&A sessions on Facebook/Instagram</li>
              <li>Collaborate with local content creators</li>
            </ul>

            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Video Content Tips</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Keep videos under 2 minutes for better engagement</li>
                <li>• Add captions (many users watch without sound)</li>
                <li>• Use good lighting (natural light works best)</li>
                <li>• Include clear call-to-action at the end</li>
                <li>• Post consistently (2-3 videos per week)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Users className="h-6 w-6 text-primary" />
              <span>Community Building and Partnerships</span>
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Local Business Collaborations</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li><strong>Cross-promotion:</strong> Partner with complementary businesses for mutual marketing</li>
              <li><strong>Joint events:</strong> Co-host workshops, sales events, or community activities</li>
              <li><strong>Referral programs:</strong> Create incentives for businesses to refer customers</li>
              <li><strong>Bundle offerings:</strong> Combine services with partners for added value</li>
              <li><strong>Shared advertising:</strong> Split costs for larger marketing campaigns</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Community Engagement Strategies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Online Communities</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Join local Facebook groups</li>
                  <li>• Participate in industry forums</li>
                  <li>• Create customer WhatsApp groups</li>
                  <li>• Engage in Twitter conversations</li>
                  <li>• Share expertise in relevant groups</li>
                </ul>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Offline Integration</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Sponsor local events</li>
                  <li>• Participate in trade shows</li>
                  <li>• Host educational workshops</li>
                  <li>• Support community initiatives</li>
                  <li>• Network at business meetups</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Email Marketing for SMEs</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Building Your Email List</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Offer valuable freebies (guides, discounts, checklists)</li>
              <li>Collect emails at point of sale or service delivery</li>
              <li>Create newsletter signup incentives</li>
              <li>Use social media to promote email signup</li>
              <li>Add signup forms to your website</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Effective Email Campaigns</h3>
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Welcome Series (Automated)</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Email 1: Welcome and business introduction</li>
                  <li>• Email 2: Your story and values</li>
                  <li>• Email 3: Popular products/services</li>
                  <li>• Email 4: Customer testimonials</li>
                  <li>• Email 5: Special welcome offer</li>
                </ul>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Regular Newsletters</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Monthly business updates</li>
                  <li>• New product/service announcements</li>
                  <li>• Educational content and tips</li>
                  <li>• Customer spotlights</li>
                  <li>• Exclusive offers and promotions</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Measuring Success: KPIs for SMEs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h3 className="text-lg font-semibold text-foreground mb-3">Awareness Metrics</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Social media followers growth</li>
                  <li>• Website traffic increase</li>
                  <li>• Brand mention frequency</li>
                  <li>• Email list growth rate</li>
                  <li>• Local search ranking improvements</li>
                </ul>
              </div>
              
              <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                <h3 className="text-lg font-semibold text-foreground mb-3">Conversion Metrics</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Lead generation numbers</li>
                  <li>• Sales conversion rates</li>
                  <li>• Average order value</li>
                  <li>• Customer acquisition cost</li>
                  <li>• Return on marketing investment</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Monthly Review Process</h3>
              <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                <li>Analyze traffic and engagement data</li>
                <li>Review lead generation and conversion rates</li>
                <li>Calculate return on marketing investment</li>
                <li>Identify top-performing content and campaigns</li>
                <li>Adjust strategy based on performance insights</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Budget-Friendly Marketing Calendar</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-muted-foreground/20 rounded-lg">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-muted-foreground/20 p-3 text-left font-semibold">Marketing Activity</th>
                    <th className="border border-muted-foreground/20 p-3 text-left font-semibold">Frequency</th>
                    <th className="border border-muted-foreground/20 p-3 text-left font-semibold">Monthly Cost</th>
                    <th className="border border-muted-foreground/20 p-3 text-left font-semibold">Expected ROI</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-muted-foreground/20 p-3">Social Media Posts</td>
                    <td className="border border-muted-foreground/20 p-3 text-muted-foreground">Daily</td>
                    <td className="border border-muted-foreground/20 p-3 text-muted-foreground">Free - KSH 5,000</td>
                    <td className="border border-muted-foreground/20 p-3 text-muted-foreground">3-5x</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-muted-foreground/20 p-3">Google My Business</td>
                    <td className="border border-muted-foreground/20 p-3 text-muted-foreground">Weekly updates</td>
                    <td className="border border-muted-foreground/20 p-3 text-muted-foreground">Free</td>
                    <td className="border border-muted-foreground/20 p-3 text-muted-foreground">4-8x</td>
                  </tr>
                  <tr>
                    <td className="border border-muted-foreground/20 p-3">Email Marketing</td>
                    <td className="border border-muted-foreground/20 p-3 text-muted-foreground">Bi-weekly</td>
                    <td className="border border-muted-foreground/20 p-3 text-muted-foreground">KSH 2,000 - 8,000</td>
                    <td className="border border-muted-foreground/20 p-3 text-muted-foreground">5-10x</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-muted-foreground/20 p-3">Content Creation</td>
                    <td className="border border-muted-foreground/20 p-3 text-muted-foreground">2-3 times/week</td>
                    <td className="border border-muted-foreground/20 p-3 text-muted-foreground">KSH 5,000 - 15,000</td>
                    <td className="border border-muted-foreground/20 p-3 text-muted-foreground">2-4x</td>
                  </tr>
                  <tr>
                    <td className="border border-muted-foreground/20 p-3">Paid Advertising</td>
                    <td className="border border-muted-foreground/20 p-3 text-muted-foreground">Ongoing</td>
                    <td className="border border-muted-foreground/20 p-3 text-muted-foreground">KSH 10,000 - 30,000</td>
                    <td className="border border-muted-foreground/20 p-3 text-muted-foreground">2-6x</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">Ready to Transform Your Digital Marketing?</h3>
            <p className="text-muted-foreground mb-4">
              Implementing effective digital marketing doesn't have to be overwhelming or expensive. 
              At Waks Digital Solutions, we help Kenyan SMEs create and execute digital marketing 
              strategies that deliver real results within their budgets. From social media management 
              to comprehensive digital campaigns, we're your growth partner.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Start Your Digital Growth Journey
            </Link>
          </section>
        </div>
      </article>
    </div>
  );
};

export default DigitalMarketingStrategiesSMEs;