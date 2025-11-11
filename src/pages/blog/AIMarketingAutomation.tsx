import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogSidebar from "@/components/BlogSidebar";
import marketingHero from "@/assets/blog-ai-marketing-automation.jpg";

const AIMarketingAutomation = () => {
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
                      March 24, 2025
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      15 min read
                    </span>
                    <span className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Isaac N.
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    AI-Driven Marketing Automation for Kenyan Businesses
                  </h1>

                  <img
                    src={marketingHero}
                    alt="AI marketing automation dashboards"
                    className="w-full h-[400px] object-cover rounded-lg mb-6"
                  />
                </header>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-muted-foreground mb-6">
                    Leverage AI to automate and optimize your marketing campaigns, personalize 
                    customer experiences, and maximize ROI in Kenya's competitive market.
                  </p>

                  <h2>The Marketing Automation Revolution</h2>
                  <p>
                    AI-powered marketing automation enables Kenyan businesses to deliver 
                    personalized experiences at scale, optimize campaigns in real-time, and 
                    achieve better results with limited resources.
                  </p>

                  <h2>Key Applications</h2>
                  
                  <h3>Email Campaign Optimization</h3>
                  <p>
                    AI determines the best send times, subject lines, and content for each 
                    subscriber, dramatically improving open and conversion rates.
                  </p>

                  <h3>Customer Segmentation</h3>
                  <p>
                    ML algorithms identify micro-segments within your audience based on 
                    behavior, enabling hyper-targeted messaging.
                  </p>

                  <h3>Predictive Lead Scoring</h3>
                  <p>
                    AI predicts which leads are most likely to convert, allowing sales teams 
                    to prioritize their efforts effectively.
                  </p>

                  <h3>Content Personalization</h3>
                  <p>
                    Dynamically adjust website content, product recommendations, and offers 
                    based on individual user behavior and preferences.
                  </p>

                  <h3>Ad Campaign Optimization</h3>
                  <p>
                    AI automatically adjusts ad targeting, bidding, and creative elements to 
                    maximize ROAS across Google, Facebook, and other platforms.
                  </p>

                  <h2>Getting Started</h2>
                  <ol>
                    <li>Audit current marketing processes for automation opportunities</li>
                    <li>Choose AI marketing tools aligned with your tech stack</li>
                    <li>Start with email automation and gradually expand</li>
                    <li>Measure impact on key metrics and iterate</li>
                  </ol>
                </div>
              </div>

              <BlogSidebar currentCategory="AI News" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AIMarketingAutomation;
