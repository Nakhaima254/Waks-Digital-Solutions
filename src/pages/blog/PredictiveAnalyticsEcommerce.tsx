import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogSidebar from "@/components/BlogSidebar";
import predictiveHero from "@/assets/blog-predictive-analytics-ecommerce.jpg";

const PredictiveAnalyticsEcommerce = () => {
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
                      March 22, 2025
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      14 min read
                    </span>
                    <span className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Isaac N.
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Predictive Analytics for E-commerce Success in Kenya
                  </h1>

                  <img
                    src={predictiveHero}
                    alt="Predictive analytics for e-commerce"
                    className="w-full h-[400px] object-cover rounded-lg mb-6"
                  />
                </header>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-muted-foreground mb-6">
                    Use AI-powered predictive analytics to forecast demand, prevent churn, 
                    optimize inventory, and make data-driven decisions for your Kenyan e-commerce 
                    business.
                  </p>

                  <h2>The Power of Prediction</h2>
                  <p>
                    Predictive analytics uses historical data and machine learning to forecast 
                    future outcomes, enabling proactive decision-making rather than reactive 
                    responses.
                  </p>

                  <h2>Key Applications for E-commerce</h2>
                  
                  <h3>Demand Forecasting</h3>
                  <p>
                    Predict product demand weeks or months in advance, optimizing inventory 
                    levels to avoid stockouts and overstocking.
                  </p>

                  <h3>Customer Churn Prediction</h3>
                  <p>
                    Identify customers at risk of leaving before they churn, enabling targeted 
                    retention campaigns with personalized offers.
                  </p>

                  <h3>Lifetime Value Prediction</h3>
                  <p>
                    Calculate predicted customer lifetime value to focus acquisition and retention 
                    efforts on high-value segments.
                  </p>

                  <h3>Dynamic Pricing</h3>
                  <p>
                    AI adjusts prices in real-time based on demand, competition, inventory levels, 
                    and customer segments to maximize revenue.
                  </p>

                  <h3>Recommendation Engines</h3>
                  <p>
                    Predict which products customers are most likely to buy next, increasing 
                    cross-sell and upsell opportunities.
                  </p>

                  <h2>Implementation Guide</h2>
                  <ol>
                    <li>Start collecting transactional and behavioral data now</li>
                    <li>Choose one high-impact use case to pilot</li>
                    <li>Use cloud-based ML tools for faster deployment</li>
                    <li>Measure accuracy and business impact regularly</li>
                    <li>Scale successful models across other areas</li>
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

export default PredictiveAnalyticsEcommerce;
