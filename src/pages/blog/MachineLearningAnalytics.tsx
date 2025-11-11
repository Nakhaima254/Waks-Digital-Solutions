import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import mlAnalyticsHero from "@/assets/blog-machine-learning-analytics.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const MachineLearningAnalytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 font-blog">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-5 w-5" /><span>Back to Blog</span>
          </Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Isaac N.</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>March 18, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>13 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Machine Learning in Business Analytics: A Kenyan Perspective</h1>
            <p className="text-xl text-primary-foreground/80">Unlock data-driven insights and predictive intelligence to make smarter business decisions.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={mlAnalyticsHero} alt="Machine learning analytics dashboard" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Understanding Machine Learning for Business</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Machine learning enables computers to learn from data and make predictions without explicit programming, transforming raw data into actionable insights.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Key ML Applications in Analytics</h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Customer Behavior Prediction</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Predict which customers are likely to churn, what products they'll buy next, and their lifetime value.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Sales Forecasting</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                ML models analyze historical data, seasonality, and market trends for accurate sales predictions.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Getting Started with ML Analytics</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Data Collection:</strong> Start gathering clean, structured data</li>
                <li><strong>Define Objectives:</strong> Identify specific business questions to answer</li>
                <li><strong>Choose Tools:</strong> Google Analytics, Power BI, or custom ML solutions</li>
                <li><strong>Start Simple:</strong> Begin with basic predictive models</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Real-World Impact</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Kenyan businesses using ML analytics report 25-40% improvements in forecast accuracy and 30% reduction in customer churn.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Ready to Leverage ML Analytics?</h3>
                <p className="text-foreground/80 mb-4">
                  Waks Digital Solutions can help you implement machine learning analytics.
                </p>
                <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">
                  Start Your ML Journey
                </Link>
              </div>
            </div>
          </article>

          <BlogSidebar currentCategory="AI News" />
        </div>
      </div>
    </div>
  );
};

export default MachineLearningAnalytics;