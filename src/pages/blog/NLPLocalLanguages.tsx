import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import nlpHero from "@/assets/blog-nlp-local-languages.jpg";
import BlogSidebar from "@/components/BlogSidebar";
import RelatedPosts from "@/components/RelatedPosts";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";

const NLPLocalLanguages = () => {
  const tocItems = [
    { id: "challenge", title: "The Language Challenge in Kenya" },
    { id: "applications", title: "NLP Applications" }
  ];

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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>March 12, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>14 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Natural Language Processing for Swahili and Kenyan Languages</h1>
            <p className="text-xl text-primary-foreground/80">Learn how NLP is breaking language barriers and enabling businesses to serve customers in their preferred languages.</p>
            <div className="mt-4">
              <ShareButtons 
                title="Natural Language Processing for Swahili and Kenyan Languages"
                description="Learn how NLP is breaking language barriers and enabling businesses to serve customers in their preferred languages."
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={nlpHero} alt="NLP processing multiple languages" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <TableOfContents items={tocItems} />
          </aside>
          
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 id="challenge" className="text-3xl font-bold text-primary mt-12 mb-6">The Language Challenge in Kenya</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Kenya is multilingual with English, Swahili, Sheng, and over 60 ethnic languages. NLP helps businesses communicate effectively across all languages.
              </p>

              <h2 id="applications" className="text-3xl font-bold text-primary mt-12 mb-6">NLP Applications</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Multilingual chatbots and customer support</li>
                <li>Translation services for websites and apps</li>
                <li>Sentiment analysis in local languages</li>
                <li>Voice assistants in Swahili</li>
              </ul>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Need Multilingual Solutions?</h3>
                <p className="text-foreground/80 mb-4">Contact Waks Digital Solutions for NLP implementation.</p>
                <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">Get Started</Link>
              </div>

              <RelatedPosts currentSlug="nlp-local-languages" category="AI News" />
            </div>
          </article>
          
          <aside className="lg:col-span-1">
            <BlogSidebar currentCategory="AI News" />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default NLPLocalLanguages;