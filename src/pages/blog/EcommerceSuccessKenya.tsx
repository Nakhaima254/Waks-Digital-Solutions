import { ArrowLeft, Calendar, Clock, User, Share2, ShoppingCart, Smartphone, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const EcommerceSuccessKenya = () => {
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
                <span>James Kiprotich</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>January 2, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>15 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Building a Successful E-commerce Business in Kenya
            </h1>
            
            <p className="text-xl text-primary-foreground/80">
              From M-Pesa integration to local logistics - everything you need to know about 
              starting an e-commerce business in Kenya.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          
          <section>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kenya's e-commerce market is experiencing unprecedented growth, with the sector valued at over 
              KSH 200 billion and growing at 25% annually. This comprehensive guide will walk you through 
              everything you need to know about building a successful e-commerce business in Kenya, from 
              market insights to practical implementation strategies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6 text-primary" />
              <span>Understanding the Kenyan E-commerce Landscape</span>
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Market Statistics</h3>
            <div className="bg-muted p-4 rounded-lg mb-6">
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Market size:</strong> KSH 200+ billion (2024)</li>
                <li>• <strong>Growth rate:</strong> 25% annually</li>
                <li>• <strong>Internet penetration:</strong> 85% of the population</li>
                <li>• <strong>Mobile commerce:</strong> 90% of transactions</li>
                <li>• <strong>Payment preference:</strong> M-Pesa dominates with 70% market share</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Key Market Drivers</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Widespread mobile money adoption (M-Pesa, Airtel Money)</li>
              <li>Increasing smartphone penetration</li>
              <li>Growing middle class with disposable income</li>
              <li>COVID-19 accelerated digital adoption</li>
              <li>Improved internet infrastructure and 4G coverage</li>
              <li>Government support for digital initiatives</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <CreditCard className="h-6 w-6 text-primary" />
              <span>Payment Solutions for Kenyan E-commerce</span>
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">M-Pesa Integration</h3>
            <p className="text-muted-foreground mb-4">
              M-Pesa is essential for any Kenyan e-commerce business. Here's what you need to know:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li><strong>Safaricom M-Pesa API:</strong> Direct integration for real-time payments</li>
              <li><strong>Paybill numbers:</strong> Easy customer payment method</li>
              <li><strong>Buy Goods and Services:</strong> For merchant payments</li>
              <li><strong>Lipa Na M-Pesa Online:</strong> Seamless checkout experience</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Other Payment Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Mobile Money</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Airtel Money</li>
                  <li>• T-Kash</li>
                  <li>• Equitel</li>
                </ul>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Traditional Methods</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Bank transfers</li>
                  <li>• Credit/Debit cards</li>
                  <li>• Cash on delivery</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Logistics and Fulfillment</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Last-Mile Delivery Solutions</h3>
            <p className="text-muted-foreground mb-4">
              Efficient delivery is crucial for customer satisfaction in Kenya:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Major Delivery Partners</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li><strong>Sendy:</strong> On-demand delivery across major cities</li>
                  <li><strong>Glovo:</strong> Fast delivery for food and essentials</li>
                  <li><strong>Jumia:</strong> Established logistics network</li>
                  <li><strong>G4S:</strong> Secure delivery for high-value items</li>
                  <li><strong>Posta Kenya:</strong> Nationwide postal service</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Setting Up Your Own Delivery</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Partner with motorcycle (boda boda) riders for city delivery</li>
              <li>Establish pickup points in strategic locations</li>
              <li>Use GPS tracking for delivery transparency</li>
              <li>Implement delivery time slots for customer convenience</li>
              <li>Consider same-day delivery for competitive advantage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Smartphone className="h-6 w-6 text-primary" />
              <span>Mobile-First Approach</span>
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Why Mobile-First Matters</h3>
            <div className="bg-primary/5 p-4 rounded-lg border border-primary/20 mb-6">
              <p className="text-muted-foreground">
                <strong>90% of Kenyan e-commerce transactions happen on mobile devices.</strong> 
                Your website must be optimized for mobile from the ground up.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Mobile Optimization Essentials</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Responsive design that works on all screen sizes</li>
              <li>Fast loading times (under 3 seconds)</li>
              <li>Simple, thumb-friendly navigation</li>
              <li>One-click checkout process</li>
              <li>Mobile payment integration (M-Pesa Express)</li>
              <li>Progressive Web App (PWA) capabilities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Legal and Regulatory Considerations</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Business Registration</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Register your business with the Registrar of Companies</li>
              <li>Obtain necessary licenses (Single Business Permit)</li>
              <li>Register for VAT if turnover exceeds KSH 5 million</li>
              <li>Comply with Kenya Bureau of Standards (KEBS) requirements</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Data Protection</h3>
            <p className="text-muted-foreground mb-4">
              Comply with Kenya's Data Protection Act (2019):
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Implement proper data collection consent mechanisms</li>
              <li>Secure customer data with encryption</li>
              <li>Have clear privacy policies</li>
              <li>Register with the Data Protection Commissioner</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Marketing Your E-commerce Business</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Digital Marketing Channels</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Social Media Marketing</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Facebook and Instagram ads</li>
                  <li>• WhatsApp Business integration</li>
                  <li>• TikTok for younger demographics</li>
                  <li>• LinkedIn for B2B products</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Search Marketing</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Google Ads and Shopping campaigns</li>
                  <li>• Local SEO optimization</li>
                  <li>• Content marketing and blogging</li>
                  <li>• Influencer partnerships</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Local Marketing Strategies</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Partner with local influencers and content creators</li>
              <li>Sponsor local events and community activities</li>
              <li>Use local languages in marketing materials</li>
              <li>Leverage word-of-mouth marketing</li>
              <li>Implement referral and loyalty programs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Success Metrics and KPIs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Financial Metrics</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Monthly Recurring Revenue (MRR)</li>
                  <li>• Average Order Value (AOV)</li>
                  <li>• Customer Lifetime Value (CLV)</li>
                  <li>• Gross margin per product</li>
                  <li>• Return on ad spend (ROAS)</li>
                </ul>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Operational Metrics</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Conversion rate</li>
                  <li>• Cart abandonment rate</li>
                  <li>• Delivery success rate</li>
                  <li>• Customer satisfaction scores</li>
                  <li>• Website loading speed</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">Ready to Launch Your E-commerce Business?</h3>
            <p className="text-muted-foreground mb-4">
              Building a successful e-commerce platform requires technical expertise, local market knowledge, 
              and strategic planning. At Waks Digital Solutions, we specialize in creating custom e-commerce 
              solutions tailored for the Kenyan market, including M-Pesa integration, mobile optimization, 
              and local delivery partnerships.
            </p>
            <Link 
              to="/services/ecommerce-solutions" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Start Your E-commerce Journey
            </Link>
          </section>
        </div>
      </article>
    </div>
  );
};

export default EcommerceSuccessKenya;