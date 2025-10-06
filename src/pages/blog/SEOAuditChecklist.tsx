import { ArrowLeft, Calendar, Clock, User, CheckCircle, AlertTriangle, Search } from "lucide-react";
import { Link } from "react-router-dom";
import seoAuditImage from "@/assets/blog-seo-audit.jpg";

const SEOAuditChecklist = () => {
  const relatedPosts = [
    { id: "technical-seo-fundamentals", title: "Technical SEO Fundamentals for Kenyan Websites" },
    { id: "seo-analytics-measurement", title: "SEO Analytics & Performance Measurement" },
    { id: "meta-tags-schema-markup", title: "Meta Tags & Schema Markup Guide" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6"
            onClick={() => window.scrollTo(0, 0)}
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
                <span>February 4, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>13 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Complete SEO Audit Checklist for Kenyan Websites
            </h1>
            
            <p className="text-xl text-primary-foreground/80">
              Identify and fix SEO issues holding your Kenyan website back with this comprehensive audit checklist.
            </p>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          
          <section>
            <img 
              src={seoAuditImage} 
              alt="SEO audit dashboard showing crawl errors and site issues" 
              className="w-full h-auto rounded-lg mb-6"
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              An SEO audit helps you identify technical issues, content problems, and missed opportunities 
              on your website. This comprehensive checklist will help Kenyan website owners conduct a 
              thorough SEO audit to improve their search rankings and visibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Search className="h-6 w-6 text-primary" />
              <span>Pre-Audit Preparation</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Set up Google Search Console</p>
                  <p className="text-sm text-muted-foreground">Verify your website and check for manual penalties</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Install Google Analytics</p>
                  <p className="text-sm text-muted-foreground">Track traffic sources and user behavior</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Choose an SEO audit tool</p>
                  <p className="text-sm text-muted-foreground">Options: Screaming Frog (free), SEMrush, Ahrefs</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-primary" />
              <span>Technical SEO Audit</span>
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Crawlability & Indexability</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Check robots.txt file for blocking important pages</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Verify XML sitemap exists and is submitted to Google</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Check for noindex tags on important pages</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Ensure all important pages are indexed in Google</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Fix crawl errors in Search Console</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Site Speed & Performance</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Test page speed with PageSpeed Insights (aim for 90+ mobile score)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Optimize images (compress and use modern formats)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Enable browser caching and GZIP compression</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Minimize CSS and JavaScript files</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Test on 3G connection (common in Kenya)</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Mobile Optimization</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Test mobile-friendliness with Google's Mobile-Friendly Test</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Ensure responsive design works on all screen sizes</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Check tap targets are properly sized (minimum 48x48px)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Test forms and buttons on mobile devices</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">HTTPS & Security</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Verify SSL certificate is valid and up to date</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Ensure all pages load over HTTPS</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Check for mixed content warnings</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Set up 301 redirects from HTTP to HTTPS</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">URL Structure</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">URLs are descriptive and keyword-rich</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">No dynamic parameters or session IDs in URLs</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Check for broken links (404 errors)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Verify 301 redirects are working properly</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">On-Page SEO Audit</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Title Tags</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">All pages have unique title tags</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Titles are 50-60 characters long</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Primary keyword appears at the beginning</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Brand name included where appropriate</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Meta Descriptions</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">All important pages have meta descriptions</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Descriptions are 150-160 characters</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Include target keywords naturally</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Compelling and actionable copy</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Heading Structure</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">One H1 tag per page with primary keyword</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Logical heading hierarchy (H1 → H2 → H3)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Headings include relevant keywords</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Content Quality</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Content is unique and original (no duplicate content)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Sufficient content length (minimum 300 words)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Keywords used naturally (no keyword stuffing)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Content is relevant to Kenyan audience</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Images</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">All images have descriptive alt text</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Image file names are descriptive</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Images are compressed and optimized</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Local SEO Audit (Kenya-Specific)</h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Google My Business profile is complete and verified</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">NAP (Name, Address, Phone) is consistent across the web</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Local keywords included in content (Nairobi, Kenya, etc.)</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Location pages for different Kenyan cities</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">Customer reviews and ratings present</p>
              </div>
            </div>
          </section>

          <section className="bg-accent/10 border-l-4 border-accent p-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">Pro Tip: Conduct Regular Audits</h3>
            <p className="text-muted-foreground">
              Perform a comprehensive SEO audit every 3-6 months and quick monthly checks. SEO is ongoing 
              work - Google's algorithm changes, competitors improve, and new issues arise. Stay proactive 
              to maintain your rankings.
            </p>
          </section>

          <section className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">Need Professional SEO Audit?</h3>
            <p className="text-muted-foreground mb-4">
              A professional SEO audit can uncover issues you might miss and provide a detailed action plan 
              to improve your Kenyan website's performance.
            </p>
            <Link 
              to="/services/seo-services" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              onClick={() => window.scrollTo(0, 0)}
            >
              Get Professional SEO Audit
            </Link>
          </section>

          <section className="border-t pt-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Related Articles</h3>
            <div className="grid gap-4">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
                >
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </span>
                  <ArrowLeft className="h-5 w-5 text-muted-foreground rotate-180 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
};

export default SEOAuditChecklist;