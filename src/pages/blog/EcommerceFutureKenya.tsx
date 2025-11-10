import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogSidebar from "@/components/BlogSidebar";
import ecommerceFutureHero from "@/assets/blog-ecommerce-future-hero.jpg";

const EcommerceFutureKenya = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <article className="py-12">
        <div className="container mx-auto px-4">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <header className="mb-8">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      January 12, 2025
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      12 min read
                    </span>
                    <span className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Waks Digital Team
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    The Future of E-commerce in Kenya: 2025 and Beyond
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    Analyzing emerging trends, technologies, and opportunities shaping Kenya's digital commerce landscape
                  </p>
                </header>

                <img
                  src={ecommerceFutureHero}
                  alt="Future of E-commerce in Kenya"
                  className="w-full h-[400px] object-cover rounded-lg mb-8"
                />

                <div className="prose prose-lg max-w-none">
                  <p className="lead text-xl mb-6">
                    Kenya's e-commerce sector is experiencing unprecedented growth, driven by increased smartphone 
                    penetration, improved internet connectivity, and innovative payment solutions. Let's explore 
                    what the future holds for online retail in East Africa's digital hub.
                  </p>

                  <h2>Current State of E-commerce in Kenya</h2>
                  <p>
                    The Kenyan e-commerce market is projected to reach $4.5 billion by 2025, with double-digit 
                    annual growth rates. Mobile commerce accounts for over 70% of online transactions, making 
                    Kenya one of Africa's most mobile-first markets.
                  </p>

                  <h2>Key Trends Shaping the Future</h2>
                  
                  <h3>1. Social Commerce Integration</h3>
                  <p>
                    Platforms like WhatsApp, Instagram, and Facebook are becoming primary sales channels. 
                    Businesses are leveraging social media's reach with integrated payment solutions for 
                    seamless transactions.
                  </p>

                  <h3>2. M-Pesa Revolution Continues</h3>
                  <p>
                    Kenya's mobile money ecosystem continues to evolve, with M-Pesa introducing new features 
                    like Buy Goods Till Numbers, Paybill integrations, and international payment capabilities.
                  </p>

                  <h3>3. Quick Commerce (Q-Commerce)</h3>
                  <p>
                    Same-day and even 2-hour delivery services are becoming the norm in urban areas. Startups 
                    are investing heavily in logistics infrastructure to meet consumer expectations.
                  </p>

                  <h3>4. Voice Commerce Emergence</h3>
                  <p>
                    With improving voice recognition technology for local languages, voice-based shopping is 
                    gaining traction, particularly for repeat purchases.
                  </p>

                  <h2>Technology Innovations Driving Growth</h2>
                  <ul>
                    <li><strong>AI-Powered Personalization:</strong> Tailored product recommendations based on browsing and purchase history</li>
                    <li><strong>Augmented Reality:</strong> Virtual try-ons for fashion and furniture</li>
                    <li><strong>Blockchain:</strong> Enhanced supply chain transparency and authenticity verification</li>
                    <li><strong>Progressive Web Apps:</strong> App-like experiences without download requirements</li>
                  </ul>

                  <h2>Challenges and Opportunities</h2>
                  
                  <h3>Infrastructure Challenges</h3>
                  <p>
                    Last-mile delivery in rural areas and addressing urban traffic congestion remain significant 
                    hurdles. However, drone delivery trials and motorcycle courier networks offer promising solutions.
                  </p>

                  <h3>Trust and Security</h3>
                  <p>
                    Building consumer trust through secure payment gateways, verified seller programs, and 
                    robust return policies is crucial for sustained growth.
                  </p>

                  <h2>Opportunities for Kenyan Businesses</h2>
                  <p>
                    The e-commerce boom presents massive opportunities:
                  </p>
                  <ul>
                    <li>Cross-border trade within East Africa</li>
                    <li>Niche market specialization</li>
                    <li>Subscription-based models</li>
                    <li>Digital products and services</li>
                    <li>B2B e-commerce platforms</li>
                  </ul>

                  <h2>Predictions for 2025-2027</h2>
                  <ul>
                    <li>50% increase in online shoppers</li>
                    <li>Rural e-commerce adoption accelerates</li>
                    <li>Consolidation of major platforms</li>
                    <li>Integration of cryptocurrency payments</li>
                    <li>AI chatbots handling 60% of customer service</li>
                  </ul>

                  <div className="bg-muted p-6 rounded-lg my-8">
                    <h3 className="mt-0">Ready to Launch Your E-commerce Platform?</h3>
                    <p className="mb-4">
                      Waks Digital Solutions specializes in building scalable, secure, and user-friendly 
                      e-commerce platforms tailored for the Kenyan market.
                    </p>
                    <Link to="/contact">
                      <Button>Start Your E-commerce Journey</Button>
                    </Link>
                  </div>
                </div>
              </div>

              <BlogSidebar currentCategory="Industry News" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default EcommerceFutureKenya;