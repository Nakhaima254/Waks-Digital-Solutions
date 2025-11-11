import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import greenWebHero from "@/assets/blog-green-web-hero.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const GreenWebDevelopment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 font-blog">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6">
            <ArrowLeft className="h-5 w-5" /><span>Back to Blog</span>
          </Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Waks Digital Team</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>January 3, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>10 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Green Web Development: Building Sustainable Digital Solutions</h1>
            <p className="text-xl text-primary-foreground/80">How to create eco-friendly websites that reduce carbon footprint and improve performance.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={greenWebHero} alt="Green Web Development" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-6">
                As climate change becomes an urgent global concern, the tech industry is recognizing its environmental impact. Green web development focuses on creating energy-efficient, sustainable websites that minimize carbon emissions while delivering excellent user experiences.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">The Environmental Cost of the Internet</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                The internet accounts for approximately 3.7% of global carbon emissions—equivalent to the airline industry. Every website visit, video stream, and email sent consumes energy from data centers, network infrastructure, and user devices.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Principles of Green Web Development</h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Optimize Performance</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Faster websites consume less energy. Optimize images, minimize JavaScript, use efficient code, and leverage caching.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Choose Green Hosting</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Select hosting providers powered by renewable energy or those that purchase carbon offsets.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Efficient Design</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Minimalist design reduces data transfer. Every element should serve a purpose.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Practical Steps</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Compress and optimize all images</li>
                <li>Use modern image formats (WebP, AVIF)</li>
                <li>Implement lazy loading</li>
                <li>Minimize HTTP requests</li>
                <li>Use system fonts when possible</li>
                <li>Enable browser caching</li>
                <li>Choose green web hosting</li>
              </ul>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Build Sustainable Websites</h3>
                <p className="text-foreground/80 mb-4">
                  Waks Digital Solutions creates high-performance, eco-friendly websites.
                </p>
                <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">
                  Go Green Today
                </Link>
              </div>
            </div>
          </article>

          <BlogSidebar currentCategory="Industry News" />
        </div>
      </div>
    </div>
  );
};

export default GreenWebDevelopment;