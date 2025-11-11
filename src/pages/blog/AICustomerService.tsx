import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import aiServiceHero from "@/assets/blog-ai-customer-service.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const AICustomerService = () => {
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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>March 20, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>14 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">AI-Powered Customer Service Solutions for Kenya</h1>
            <p className="text-xl text-primary-foreground/80">Transform customer experience with intelligent automation that scales support while reducing costs.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={aiServiceHero} alt="AI-powered customer service dashboard" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">The Customer Service Revolution</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                AI is transforming customer service from a cost center into a competitive advantage. Kenyan businesses can now provide world-class support experiences without massive team expansions.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">AI Technologies Powering Customer Service</h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Intelligent Chatbots</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Modern AI chatbots understand context, learn from interactions, and handle complex queries 24/7.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Sentiment Analysis</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                AI detects customer emotions in real-time, flagging frustrated customers for priority handling.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Implementation Best Practices</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Start with FAQ automation before complex interactions</li>
                <li>Always provide easy escalation to human agents</li>
                <li>Maintain your brand voice in AI responses</li>
                <li>Continuously train AI on real conversations</li>
                <li>Monitor customer satisfaction metrics closely</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">ROI and Cost Savings</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Most Kenyan businesses see ROI within 3-6 months. AI can handle 60-80% of routine inquiries, reducing support costs by 40%.
              </p>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Ready to Transform Your Customer Service?</h3>
                <p className="text-foreground/80 mb-4">
                  Waks Digital Solutions specializes in implementing AI customer service solutions.
                </p>
                <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">
                  Get Started Today
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

export default AICustomerService;