import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import BlogSidebar from "@/components/BlogSidebar";
import BlogPostWrapper from "@/components/BlogPostWrapper";

const WebDesignTrends2025 = () => {
  return (
    <BlogPostWrapper>
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
                <span>January 8, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Top 10 Web Design Trends Dominating 2025
            </h1>
            
            <p className="text-xl text-primary-foreground/80">
              Discover the latest web design trends that are shaping the digital landscape in 2025, 
              from AI-powered interfaces to sustainable design practices.
            </p>
            
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" />
              <span>Share Article</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
            
            <section>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As we step into 2025, web design continues to evolve at breakneck speed. The digital landscape 
                is more competitive than ever, and staying ahead of design trends is crucial for businesses 
                looking to make a lasting impression. Let's explore the top 10 trends that are defining web 
                design this year.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. AI-Powered Personalization</h2>
              <p className="text-muted-foreground mb-4">
                Artificial Intelligence is revolutionizing how websites adapt to individual users. In 2025, 
                we're seeing websites that dynamically adjust content, layout, and even color schemes based 
                on user behavior and preferences.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Dynamic content recommendations</li>
                <li>Personalized user interfaces</li>
                <li>Smart chatbots with natural language processing</li>
                <li>Adaptive navigation based on user patterns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Sustainable Web Design</h2>
              <p className="text-muted-foreground mb-4">
                Environmental consciousness is driving a new wave of eco-friendly design practices. 
                Sustainable web design focuses on reducing digital carbon footprints through optimized 
                performance and energy-efficient coding practices.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Optimized images and compressed assets</li>
                <li>Minimal, clean code architecture</li>
                <li>Green hosting solutions</li>
                <li>Dark mode options to reduce screen energy consumption</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Immersive 3D Elements</h2>
              <p className="text-muted-foreground">
                Three-dimensional design elements are becoming more mainstream, thanks to improved browser 
                capabilities and faster internet speeds. These elements add depth and interactivity that 
                captivates users and creates memorable experiences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Micro-Interactions and Animations</h2>
              <p className="text-muted-foreground">
                Subtle animations and micro-interactions provide instant feedback and guide user actions. 
                These small details significantly enhance user experience and create a sense of responsiveness 
                and engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Bold Typography as a Design Element</h2>
              <p className="text-muted-foreground">
                Typography is taking center stage in 2025, with designers using oversized, custom fonts as 
                primary design elements. This trend emphasizes the importance of readable, accessible content 
                while making strong visual statements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Why These Trends Matter for Kenyan Businesses</h2>
              <p className="text-muted-foreground mb-4">
                For businesses in Kenya, adopting these trends can significantly impact your digital presence:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Competitive advantage:</strong> Stand out in the growing Kenyan digital market</li>
                <li><strong>User engagement:</strong> Keep visitors on your site longer with immersive experiences</li>
                <li><strong>Mobile optimization:</strong> Critical for Kenya's mobile-first internet users</li>
                <li><strong>Brand credibility:</strong> Modern design builds trust with potential customers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Getting Started with Modern Web Design</h2>
              <p className="text-muted-foreground mb-4">
                Ready to modernize your website? Here's how to begin:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                <li>Audit your current website for outdated elements</li>
                <li>Identify which trends align with your brand and audience</li>
                <li>Start with mobile-first responsive design</li>
                <li>Focus on performance and loading speed</li>
                <li>Work with experienced designers who understand current trends</li>
              </ol>
            </section>

            <section className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">Need Help Implementing These Trends?</h3>
              <p className="text-muted-foreground mb-4">
                At Waks Digital Solutions, we specialize in creating modern, trend-forward websites that 
                help Kenyan businesses thrive online. Our team stays up-to-date with the latest design 
                trends and technologies.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Get Your Modern Website Today
              </Link>
            </section>
              </div>
            </div>
          </article>
          
          <BlogSidebar currentCategory="Design" />
        </div>
      </div>
    </div>
    </BlogPostWrapper>
  );
};

export default WebDesignTrends2025;