import { ArrowLeft, Calendar, Clock, User, Search, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import keywordResearchImage from "@/assets/blog-keyword-research.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const KeywordResearchGuide = () => {
  const relatedPosts = [
    { id: "seo-guide-kenyan-businesses", title: "Complete SEO Guide for Kenyan Businesses in 2025" },
    { id: "content-strategy-seo", title: "Content Strategy for SEO Success in Kenya" },
    { id: "local-seo-kenya", title: "Local SEO Strategies for Kenyan Businesses" }
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
                <span>January 28, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>14 min read</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              The Ultimate Guide to Keyword Research for Kenyan Websites
            </h1>
            
            <p className="text-xl text-primary-foreground/80">
              Master keyword research to dominate search results and attract your target audience in Kenya.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
          
          <section>
            <img 
              src={keywordResearchImage} 
              alt="Keyword research tools and analytics dashboard" 
              className="w-full h-auto rounded-lg mb-6"
            />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Keyword research is the foundation of any successful SEO strategy. For Kenyan businesses, 
              finding the right keywords means connecting with customers who are actively searching for 
              your products or services. This comprehensive guide will teach you how to conduct effective 
              keyword research tailored to the Kenyan market.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Search className="h-6 w-6 text-primary" />
              <span>Why Keyword Research Matters</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Without proper keyword research, you're essentially guessing what your customers are searching for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>Understand your audience's search behavior and intent</li>
              <li>Identify high-value opportunities with low competition</li>
              <li>Create content that matches what people are actually searching for</li>
              <li>Improve your ROI by targeting keywords that convert</li>
              <li>Stay ahead of competitors in your niche</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <Target className="h-6 w-6 text-primary" />
              <span>Understanding Search Intent</span>
            </h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Four Types of Search Intent</h3>
            
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">1. Informational Intent</h4>
                <p className="text-sm text-muted-foreground mb-2">Users want to learn something.</p>
                <p className="text-sm"><strong>Examples:</strong> "how to start a business in Kenya", "what is SEO"</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">2. Navigational Intent</h4>
                <p className="text-sm text-muted-foreground mb-2">Users want to find a specific website or page.</p>
                <p className="text-sm"><strong>Examples:</strong> "KRA iTax login", "Safaricom M-Pesa"</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">3. Transactional Intent</h4>
                <p className="text-sm text-muted-foreground mb-2">Users are ready to make a purchase or take action.</p>
                <p className="text-sm"><strong>Examples:</strong> "buy laptop Nairobi", "web design services Kenya price"</p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">4. Commercial Investigation</h4>
                <p className="text-sm text-muted-foreground mb-2">Users are comparing options before buying.</p>
                <p className="text-sm"><strong>Examples:</strong> "best web hosting Kenya", "WordPress vs custom development"</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Step-by-Step Keyword Research Process</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">Step 1: Brainstorm Seed Keywords</h3>
            <p className="text-muted-foreground mb-4">
              Start with broad topics related to your business. If you run a web design agency in Nairobi:
            </p>
            <div className="bg-muted p-4 rounded-lg mb-6">
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>web design</li>
                <li>website development</li>
                <li>e-commerce solutions</li>
                <li>WordPress design</li>
                <li>SEO services</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Step 2: Expand with Keyword Tools</h3>
            <p className="text-muted-foreground mb-4">
              Use these free and paid tools to find more keyword opportunities:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li><strong>Google Keyword Planner:</strong> Free tool showing search volume and competition</li>
              <li><strong>Google Search Console:</strong> See what keywords already bring traffic to your site</li>
              <li><strong>Google Autocomplete:</strong> Type your seed keyword and see suggestions</li>
              <li><strong>People Also Ask:</strong> Find related questions people are searching</li>
              <li><strong>AnswerThePublic:</strong> Discover questions and phrases around your topic</li>
              <li><strong>Ubersuggest:</strong> Free keyword research tool with local data</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">Step 3: Add Local Modifiers</h3>
            <p className="text-muted-foreground mb-4">
              For Kenyan businesses, always consider adding location modifiers:
            </p>
            <div className="bg-muted p-4 rounded-lg mb-6">
              <p className="mb-2"><strong>Pattern: [Service] + [Location]</strong></p>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                <li>web design Nairobi</li>
                <li>SEO services Kenya</li>
                <li>WordPress developer Mombasa</li>
                <li>e-commerce website Kisumu</li>
                <li>digital marketing agency Westlands</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">Step 4: Analyze Keyword Metrics</h3>
            <p className="text-muted-foreground mb-4">
              Evaluate each keyword based on these factors:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li><strong>Search Volume:</strong> How many people search for this monthly?</li>
              <li><strong>Keyword Difficulty:</strong> How hard is it to rank for this keyword?</li>
              <li><strong>Cost Per Click (CPC):</strong> Higher CPC often indicates commercial intent</li>
              <li><strong>Search Trend:</strong> Is interest growing or declining?</li>
              <li><strong>Current Rankings:</strong> Where do competitors rank for this keyword?</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              <span>Long-Tail Keywords: The Hidden Opportunity</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Long-tail keywords are longer, more specific phrases with lower search volume but higher conversion rates:
            </p>
            <div className="bg-muted p-4 rounded-lg mb-4">
              <p className="mb-2"><strong>Short-tail (competitive):</strong> "web design"</p>
              <p className="mb-2"><strong>Mid-tail (better):</strong> "web design Kenya"</p>
              <p><strong>Long-tail (best for beginners):</strong> "affordable WordPress web design for small business Nairobi"</p>
            </div>
            <p className="text-muted-foreground">
              Long-tail keywords are easier to rank for and attract more qualified traffic ready to convert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Kenyan-Specific Keyword Strategies</h2>
            
            <h3 className="text-xl font-semibold text-foreground mb-3">1. Include Local Payment Terms</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>"M-Pesa integration"</li>
              <li>"pay via mobile money"</li>
              <li>"KES pricing"</li>
              <li>"Kenyan shillings payment"</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">2. Target Local Languages</h3>
            <p className="text-muted-foreground mb-4">
              Consider keywords in Swahili and Sheng for broader reach:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-6">
              <li>"biashara online" (online business)</li>
              <li>"pesa mtaani" (money locally)</li>
              <li>"nunua online" (buy online)</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mb-3">3. Focus on Mobile Keywords</h3>
            <p className="text-muted-foreground mb-4">
              With 90%+ mobile internet usage in Kenya:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>"near me" keywords</li>
              <li>"best mobile [service]"</li>
              <li>Voice search friendly phrases</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Organizing Your Keywords</h2>
            <p className="text-muted-foreground mb-4">
              Group keywords by topic and intent to create a content strategy:
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">Example for Web Design Agency:</p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold">Topic: Web Design Services</p>
                  <p className="text-muted-foreground">- web design Nairobi</p>
                  <p className="text-muted-foreground">- professional website design Kenya</p>
                  <p className="text-muted-foreground">- custom web design services</p>
                </div>
                <div>
                  <p className="font-semibold">Topic: WordPress Development</p>
                  <p className="text-muted-foreground">- WordPress developer Kenya</p>
                  <p className="text-muted-foreground">- WordPress website design</p>
                  <p className="text-muted-foreground">- WordPress theme customization</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-3">Need Help with Keyword Research?</h3>
            <p className="text-muted-foreground mb-4">
              Professional keyword research can uncover opportunities you might miss and save you months of trial and error.
            </p>
            <Link 
              to="/services/seo-services" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              onClick={() => window.scrollTo(0, 0)}
            >
              Get Expert SEO Help
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

          <BlogSidebar currentCategory="SEO" />
        </div>
      </div>
    </div>
  );
};

export default KeywordResearchGuide;