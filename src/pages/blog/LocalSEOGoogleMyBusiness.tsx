import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import gmbHero from "@/assets/blog-google-my-business.jpg";
import localReviews from "@/assets/blog-local-reviews.jpg";
import localSeoMap from "@/assets/blog-local-seo-map.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const LocalSEOGoogleMyBusiness = () => {
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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>March 12, 2024</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>13 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Local SEO & Google My Business: Dominate Local Search in Kenya</h1>
            <p className="text-xl text-primary-foreground/80">Master local SEO and Google My Business optimization to attract nearby customers actively searching for your services.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={gmbHero} alt="Google My Business profile optimization" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Why Local SEO Matters in Kenya</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                46% of all Google searches are local. For Kenyan businesses serving specific areas—restaurants, salons, hardware stores, medical clinics—local SEO is critical. When someone searches "best coffee shop near me" or "plumber in Westlands," you want to appear in those results.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Setting Up Google My Business</h2>
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Complete Your Profile 100%</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Claim and verify your business listing</li>
                <li>Choose the most accurate business category</li>
                <li>Add complete business information (hours, phone, website, address)</li>
                <li>Upload high-quality photos (exterior, interior, products, team)</li>
                <li>Write a compelling business description with local keywords</li>
                <li>Add attributes (wheelchair accessible, free WiFi, etc.)</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Managing Customer Reviews</h2>
              <img src={localReviews} alt="Customer reviews on business listing" className="w-full h-auto rounded-lg shadow-lg my-8" />
              <p className="text-foreground/80 leading-relaxed mb-6">
                Reviews are the backbone of local SEO. Businesses with positive reviews rank higher and convert better. Actively request reviews from satisfied customers, respond to all reviews (positive and negative), and address concerns professionally.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">How to Get More Reviews</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Ask customers in person after a positive experience</li>
                <li>Send follow-up emails or SMS with review links</li>
                <li>Make it easy with direct review links</li>
                <li>Offer incentives (discount on next purchase) for honest reviews</li>
                <li>Train staff to naturally ask for reviews</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Local SEO Best Practices</h2>
              <img src={localSeoMap} alt="Local SEO map with business locations" className="w-full h-auto rounded-lg shadow-lg my-8" />
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">NAP Consistency</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Ensure your Name, Address, and Phone number (NAP) are identical across all online platforms: your website, GMB, social media, directories, and citations. Inconsistencies confuse Google and hurt your rankings.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Local Citations</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Get listed on Kenyan business directories like Hoteli Africa, EatOut Kenya, Brightermonday (for recruitment agencies), and industry-specific directories. These citations build authority and help you rank better.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Optimize for "Near Me" Searches</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Include location keywords on your website pages</li>
                <li>Create location-specific landing pages if you serve multiple areas</li>
                <li>Add a Google Map embed to your contact page</li>
                <li>Use schema markup for local business information</li>
              </ul>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Key Takeaways</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                  <li>Complete your Google My Business profile 100%</li>
                  <li>Upload high-quality photos regularly</li>
                  <li>Actively request and respond to customer reviews</li>
                  <li>Maintain NAP consistency across all platforms</li>
                  <li>Build local citations on relevant directories</li>
                  <li>Optimize website content for local keywords</li>
                </ul>
              </div>
            </div>
          </article>

          <BlogSidebar currentCategory="Marketing" />
        </div>
      </div>
    </div>
  );
};

export default LocalSEOGoogleMyBusiness;
