import { ArrowLeft, Calendar, Clock, User, Share2, Search, MapPin, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import seoHeroImage from "@/assets/blog-seo-hero.jpg";
import googleMyBusinessImage from "@/assets/blog-google-my-business.jpg";
import technicalSeoImage from "@/assets/blog-technical-seo-image.jpg";

const SEOGuideKenyanBusinesses = () => {
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
                <span>Isaac N.</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>January 5, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>12 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Complete SEO Guide for Kenyan Businesses in 2025
            </h1>
            
            <p className="text-xl text-primary-foreground/80">
              Learn how to optimize your website for local search and dominate Google results in Kenya 
              with our comprehensive SEO strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          
          <section>
            <img 
              src={seoHeroImage} 
              alt="SEO strategy and Google search optimization for Kenyan businesses" 
              className="w-full h-auto rounded-lg mb-6"
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Search Engine Optimization (SEO) is crucial for Kenyan businesses looking to grow their 
              online presence. With over 22 million internet users in Kenya, the digital marketplace 
              is booming. This comprehensive guide will help you navigate the SEO landscape specifically 
              tailored for the Kenyan market.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Search className="h-6 w-6 text-primary" />
              <span>Understanding SEO in the Kenyan Context</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Kenya's digital landscape has unique characteristics that affect SEO strategy:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Mobile-first internet usage (over 90% of users access via mobile)</li>
              <li>Growing e-commerce market worth over KSH 200 billion</li>
              <li>Increasing adoption of digital payment systems like M-Pesa</li>
              <li>Rising importance of local search queries</li>
              <li>Growing competition in major cities like Nairobi and Mombasa</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <MapPin className="h-6 w-6 text-primary" />
              <span>Local SEO for Kenyan Businesses</span>
            </h2>
            
            <img 
              src={googleMyBusinessImage} 
              alt="Google My Business dashboard with local listings and reviews" 
              className="w-full h-auto rounded-lg mb-6"
            />
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Google My Business Optimization</h3>
            <p className="text-muted-foreground mb-4">
              Your Google My Business listing is crucial for local visibility:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Complete your profile with accurate business information</li>
              <li>Add high-quality photos of your business and products</li>
              <li>Encourage and respond to customer reviews</li>
              <li>Post regular updates about your services and offers</li>
              <li>Use relevant local keywords in your description</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Local Keywords Strategy</h3>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="text-muted-foreground mb-2"><strong>Examples of effective local keywords:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>"web design company Nairobi"</li>
                <li>"best restaurant Westlands"</li>
                <li>"car repair services Mombasa"</li>
                <li>"mobile money integration Kenya"</li>
                <li>"digital marketing agency Kisumu"</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span>Technical SEO Fundamentals</span>
            </h2>
            
            <img 
              src={technicalSeoImage} 
              alt="Technical SEO metrics showing website speed and mobile optimization" 
              className="w-full h-auto rounded-lg mb-6"
            />
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Mobile Optimization</h3>
            <p className="text-muted-foreground mb-4">
              Given Kenya's mobile-first internet usage, mobile optimization is non-negotiable:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Implement responsive design for all screen sizes</li>
              <li>Optimize page loading speed (aim for under 3 seconds)</li>
              <li>Use mobile-friendly navigation and button sizes</li>
              <li>Optimize images for mobile devices</li>
              <li>Test your site on various mobile devices</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Site Speed Optimization</h3>
            <p className="text-muted-foreground mb-4">
              Fast loading times are crucial in Kenya where internet speeds can vary:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Compress and optimize images</li>
              <li>Minimize HTTP requests</li>
              <li>Use content delivery networks (CDNs)</li>
              <li>Enable browser caching</li>
              <li>Minimize code (CSS, JavaScript, HTML)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Content Strategy for Kenyan Audiences</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Creating Locally Relevant Content</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Write about local events and community topics</li>
              <li>Address specific challenges faced by Kenyan businesses</li>
              <li>Include local case studies and success stories</li>
              <li>Use Kenyan English expressions and local terminology</li>
              <li>Cover topics relevant to local industries and markets</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Multilingual SEO</h3>
            <p className="text-muted-foreground mb-4">
              Consider optimizing for local languages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Create content in Swahili for broader reach</li>
              <li>Use local language keywords where appropriate</li>
              <li>Implement hreflang tags for multilingual content</li>
              <li>Consider regional dialects and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Link Building Strategies</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Local Link Building</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Partner with local businesses for cross-promotion</li>
              <li>Sponsor local events and community initiatives</li>
              <li>Get listed in local business directories</li>
              <li>Collaborate with Kenyan bloggers and influencers</li>
              <li>Participate in local industry associations</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Quality Over Quantity</h3>
            <p className="text-muted-foreground">
              Focus on earning high-quality backlinks from reputable Kenyan websites, local news outlets, 
              and industry publications rather than pursuing low-quality links.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Measuring SEO Success</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Key Metrics to Track</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>Local search rankings for target keywords</li>
              <li>Google My Business insights and engagement</li>
              <li>Organic traffic growth from Kenyan users</li>
              <li>Mobile search performance</li>
              <li>Local conversion rates and leads generated</li>
              <li>Online reviews and reputation metrics</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Tools for SEO Monitoring</h3>
            <div className="bg-muted p-4 rounded-lg">
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>Google Analytics for traffic analysis</li>
                <li>Google Search Console for search performance</li>
                <li>Google My Business insights for local performance</li>
                <li>SEMrush or Ahrefs for keyword research</li>
                <li>PageSpeed Insights for performance monitoring</li>
              </ul>
            </div>
          </section>

          <section className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">Ready to Dominate Local Search?</h3>
            <p className="text-muted-foreground mb-4">
              Implementing effective SEO strategies requires expertise and consistent effort. At Waks Digital Solutions, 
              we specialize in helping Kenyan businesses achieve top search rankings and drive meaningful organic traffic.
            </p>
            <Link 
              to="/services/seo-services" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Get Professional SEO Help
            </Link>
          </section>
        </div>
      </article>
    </div>
  );
};

export default SEOGuideKenyanBusinesses;