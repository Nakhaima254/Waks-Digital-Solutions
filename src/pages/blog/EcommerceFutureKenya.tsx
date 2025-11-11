import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import ecommerceFutureHero from "@/assets/blog-ecommerce-future-hero.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const EcommerceFutureKenya = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 font-blog">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-5 w-5" /><span>Back to Blog</span>
          </Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Waks Digital Team</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>January 12, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>12 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">The Future of E-commerce in Kenya: 2025 and Beyond</h1>
            <p className="text-xl text-primary-foreground/80">Analyzing emerging trends, technologies, and opportunities shaping Kenya's digital commerce landscape.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={ecommerceFutureHero} alt="Future of E-commerce in Kenya" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-6">
                Kenya's e-commerce sector is experiencing unprecedented growth, driven by increased smartphone penetration, improved internet connectivity, and innovative payment solutions. Let's explore what the future holds for online retail in East Africa's digital hub.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Current State of E-commerce in Kenya</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                The Kenyan e-commerce market is projected to reach $4.5 billion by 2025, with double-digit annual growth rates. Mobile commerce accounts for over 70% of online transactions, making Kenya one of Africa's most mobile-first markets.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Key Trends Shaping the Future</h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Social Commerce Integration</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Platforms like WhatsApp, Instagram, and Facebook are becoming primary sales channels. Businesses are leveraging social media's reach with integrated payment solutions for seamless transactions.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">2. M-Pesa Revolution Continues</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Kenya's mobile money ecosystem continues to evolve, with M-Pesa introducing new features like Buy Goods Till Numbers, Paybill integrations, and international payment capabilities.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Quick Commerce (Q-Commerce)</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Same-day and even 2-hour delivery services are becoming the norm in urban areas. Startups are investing heavily in logistics infrastructure to meet consumer expectations.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Voice Commerce Emergence</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                With improving voice recognition technology for local languages, voice-based shopping is gaining traction, particularly for repeat purchases.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Technology Innovations Driving Growth</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>AI-Powered Personalization:</strong> Tailored product recommendations based on browsing and purchase history</li>
                <li><strong>Augmented Reality:</strong> Virtual try-ons for fashion and furniture</li>
                <li><strong>Blockchain:</strong> Enhanced supply chain transparency and authenticity verification</li>
                <li><strong>Progressive Web Apps:</strong> App-like experiences without download requirements</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Challenges and Opportunities</h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Infrastructure Challenges</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Last-mile delivery in rural areas and addressing urban traffic congestion remain significant hurdles. However, drone delivery trials and motorcycle courier networks offer promising solutions.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Trust and Security</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Building consumer trust through secure payment gateways, verified seller programs, and robust return policies is crucial for sustained growth.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Opportunities for Kenyan Businesses</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                The e-commerce boom presents massive opportunities:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Cross-border trade within East Africa</li>
                <li>Niche market specialization</li>
                <li>Subscription-based models</li>
                <li>Digital products and services</li>
                <li>B2B e-commerce platforms</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Predictions for 2025-2027</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>50% increase in online shoppers</li>
                <li>Rural e-commerce adoption accelerates</li>
                <li>Consolidation of major platforms</li>
                <li>Integration of cryptocurrency payments</li>
                <li>AI chatbots handling 60% of customer service</li>
              </ul>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Ready to Launch Your E-commerce Platform?</h3>
                <p className="text-foreground/80 mb-4">
                  Waks Digital Solutions specializes in building scalable, secure, and user-friendly e-commerce platforms tailored for the Kenyan market.
                </p>
                <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">
                  Start Your E-commerce Journey
                </Link>
              </div>
            </div>
          </article>

          <BlogSidebar currentCategory="Industry News" />
        </div>
      </div>
    </div>
  );
};

export default EcommerceFutureKenya;