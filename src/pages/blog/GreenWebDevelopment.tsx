import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlogSidebar from "@/components/BlogSidebar";
import greenWebHero from "@/assets/blog-green-web-hero.jpg";

const GreenWebDevelopment = () => {
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
                      January 3, 2025
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-2 h-4 w-4" />
                      10 min read
                    </span>
                    <span className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Waks Digital Team
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Green Web Development: Building Sustainable Digital Solutions
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    How to create eco-friendly websites that reduce carbon footprint and improve performance
                  </p>
                </header>

                <img
                  src={greenWebHero}
                  alt="Green Web Development"
                  className="w-full h-[400px] object-cover rounded-lg mb-8"
                />

                <div className="prose prose-lg max-w-none">
                  <p className="lead text-xl mb-6">
                    As climate change becomes an urgent global concern, the tech industry is recognizing its 
                    environmental impact. Green web development focuses on creating energy-efficient, sustainable 
                    websites that minimize carbon emissions while delivering excellent user experiences.
                  </p>

                  <h2>The Environmental Cost of the Internet</h2>
                  <p>
                    The internet accounts for approximately 3.7% of global carbon emissions—equivalent to the 
                    airline industry. Every website visit, video stream, and email sent consumes energy from 
                    data centers, network infrastructure, and user devices.
                  </p>

                  <h3>Key Contributors to Web Carbon Footprint</h3>
                  <ul>
                    <li>Data center energy consumption</li>
                    <li>Network data transfer</li>
                    <li>End-user device power usage</li>
                    <li>Manufacturing and hardware lifecycle</li>
                  </ul>

                  <h2>Principles of Green Web Development</h2>
                  
                  <h3>1. Optimize Performance</h3>
                  <p>
                    Faster websites consume less energy. Performance optimization isn't just good UX—it's 
                    environmental responsibility.
                  </p>
                  <ul>
                    <li><strong>Image Optimization:</strong> Use WebP, AVIF formats and lazy loading</li>
                    <li><strong>Code Efficiency:</strong> Minimize JavaScript and CSS</li>
                    <li><strong>Caching Strategies:</strong> Reduce server requests</li>
                    <li><strong>CDN Usage:</strong> Deliver content from nearest servers</li>
                  </ul>

                  <h3>2. Choose Green Hosting</h3>
                  <p>
                    Select hosting providers powered by renewable energy:
                  </p>
                  <ul>
                    <li><strong>GreenGeeks:</strong> 300% renewable energy match</li>
                    <li><strong>Kualo:</strong> Carbon-neutral hosting</li>
                    <li><strong>A2 Hosting:</strong> Carbon offset programs</li>
                    <li><strong>DreamHost:</strong> Certified carbon-neutral</li>
                  </ul>

                  <h3>3. Reduce Data Transfer</h3>
                  <p>
                    Every byte transferred consumes energy:
                  </p>
                  <ul>
                    <li>Compress text files (Gzip, Brotli)</li>
                    <li>Optimize images and videos</li>
                    <li>Remove unused code and libraries</li>
                    <li>Implement efficient caching</li>
                    <li>Use system fonts when possible</li>
                  </ul>

                  <h2>Practical Green Development Techniques</h2>
                  
                  <h3>Efficient Frontend Development</h3>
                  <ul>
                    <li><strong>Static Site Generators:</strong> Pre-render pages for minimal server load</li>
                    <li><strong>Progressive Enhancement:</strong> Start with minimal baseline, add features progressively</li>
                    <li><strong>Lazy Loading:</strong> Load content only when needed</li>
                    <li><strong>Dark Mode:</strong> Reduces energy on OLED screens</li>
                  </ul>

                  <h3>Backend Optimization</h3>
                  <ul>
                    <li><strong>Database Optimization:</strong> Efficient queries and indexes</li>
                    <li><strong>API Efficiency:</strong> Return only necessary data</li>
                    <li><strong>Serverless Architecture:</strong> Pay only for actual usage</li>
                    <li><strong>Edge Computing:</strong> Process data closer to users</li>
                  </ul>

                  <h3>Media Management</h3>
                  <ul>
                    <li>Use appropriate image dimensions</li>
                    <li>Implement responsive images with srcset</li>
                    <li>Consider video alternatives (animated GIFs to video)</li>
                    <li>Optimize video streaming quality based on connection</li>
                  </ul>

                  <h2>Measuring Your Website's Carbon Footprint</h2>
                  
                  <h3>Tools for Carbon Assessment</h3>
                  <ul>
                    <li><strong>Website Carbon Calculator:</strong> Estimates CO2 per page view</li>
                    <li><strong>Ecograder:</strong> Comprehensive sustainability score</li>
                    <li><strong>Green Web Check:</strong> Verify if host uses renewable energy</li>
                    <li><strong>Lighthouse:</strong> Performance metrics correlate with energy usage</li>
                  </ul>

                  <h2>Green Web Best Practices Checklist</h2>
                  <ul>
                    <li>✅ Choose renewable energy hosting</li>
                    <li>✅ Optimize all images and media</li>
                    <li>✅ Minimize JavaScript and CSS</li>
                    <li>✅ Implement efficient caching</li>
                    <li>✅ Use CDN for static assets</li>
                    <li>✅ Enable text compression</li>
                    <li>✅ Remove unused code and dependencies</li>
                    <li>✅ Optimize database queries</li>
                    <li>✅ Monitor and measure performance regularly</li>
                    <li>✅ Consider carbon offset programs</li>
                  </ul>

                  <h2>Business Benefits of Green Web Development</h2>
                  
                  <h3>Beyond Environmental Impact</h3>
                  <ul>
                    <li><strong>Cost Savings:</strong> Lower hosting and bandwidth costs</li>
                    <li><strong>Better Performance:</strong> Faster loading equals better UX</li>
                    <li><strong>SEO Benefits:</strong> Google favors fast, efficient sites</li>
                    <li><strong>Brand Reputation:</strong> Appeal to eco-conscious consumers</li>
                    <li><strong>Compliance:</strong> Meet emerging environmental regulations</li>
                  </ul>

                  <h2>The Future of Sustainable Web</h2>
                  <p>
                    As awareness grows, green web development will transition from optional to essential. 
                    Emerging trends include:
                  </p>
                  <ul>
                    <li>Carbon budgets for websites</li>
                    <li>Environmental impact reporting standards</li>
                    <li>Eco-labels for websites</li>
                    <li>Green web development certifications</li>
                    <li>AI-optimized resource usage</li>
                  </ul>

                  <h2>Taking Action in Kenya</h2>
                  <p>
                    Kenyan businesses can lead in sustainable digital practices by:
                  </p>
                  <ul>
                    <li>Choosing local green hosting providers</li>
                    <li>Educating clients about sustainable web practices</li>
                    <li>Incorporating sustainability in project requirements</li>
                    <li>Measuring and reporting environmental impact</li>
                    <li>Contributing to open-source green web tools</li>
                  </ul>

                  <div className="bg-muted p-6 rounded-lg my-8">
                    <h3 className="mt-0">Build a Sustainable Digital Presence</h3>
                    <p className="mb-4">
                      At Waks Digital Solutions, we integrate green development practices into every project, 
                      creating fast, efficient, and environmentally responsible websites.
                    </p>
                    <Link to="/contact">
                      <Button>Start Your Green Web Project</Button>
                    </Link>
                  </div>
                </div>
              </div>

              <BlogSidebar currentCategory="Industry News" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default GreenWebDevelopment;