import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/blog-pwa-hero.jpg";
import featuresImage from "@/assets/blog-pwa-features.jpg";
import benefitsImage from "@/assets/blog-pwa-benefits.jpg";

const ProgressiveWebApps = () => {
  return (
    <div className="min-h-screen flex flex-col font-blog">
      <Navigation />
      
      <article className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={heroImage}
            alt="Progressive Web App installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 -mt-32 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center text-accent hover:text-accent-hover mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <div className="bg-card rounded-xl shadow-lg p-8 mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Building Progressive Web Apps: The Future of Web Development
              </h1>
              
              <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>January 12, 2025</span>
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>Isaac N.</span>
                </div>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover how Progressive Web Apps combine the best of web and mobile apps to deliver exceptional user experiences with offline capabilities and native-like features.
              </p>
            </div>

            {/* Article Body */}
            <div className="bg-card rounded-xl shadow-lg p-8 prose prose-lg max-w-none">
              <h2>What Are Progressive Web Apps?</h2>
              <p>
                Progressive Web Apps (PWAs) are web applications that use modern web capabilities to deliver app-like experiences to users. They work offline, can be installed on devices, and provide fast, reliable experiences.
              </p>

              <h2>Core PWA Features</h2>
              <img 
                src={featuresImage} 
                alt="PWA service worker architecture" 
                className="w-full rounded-lg my-6"
              />
              <p>
                PWAs leverage service workers, web app manifests, and modern APIs to provide features traditionally associated with native apps.
              </p>
              <ul>
                <li>Offline functionality with service workers</li>
                <li>Push notifications for engagement</li>
                <li>Home screen installation</li>
                <li>Fast loading with intelligent caching</li>
              </ul>

              <h2>Benefits for Businesses</h2>
              <img 
                src={benefitsImage} 
                alt="PWA benefits and features" 
                className="w-full rounded-lg my-6"
              />
              <p>
                PWAs offer significant advantages over traditional websites and native apps. They're easier to develop, maintain, and distribute while providing superior user experiences.
              </p>
              <ul>
                <li>Lower development costs than native apps</li>
                <li>No app store approval required</li>
                <li>Automatic updates for all users</li>
                <li>Improved engagement and conversion rates</li>
              </ul>

              <h2>Service Workers: The Heart of PWAs</h2>
              <p>
                Service workers are JavaScript files that run separately from web pages, enabling offline functionality, background sync, and push notifications. They're essential for creating truly progressive experiences.
              </p>

              <h2>Caching Strategies</h2>
              <p>
                Implement smart caching strategies to ensure fast loading times and offline functionality. Choose between cache-first, network-first, or hybrid approaches based on your content needs.
              </p>

              <h2>Web App Manifest</h2>
              <p>
                The web app manifest is a JSON file that tells browsers how your PWA should behave when installed. Configure icons, theme colors, display modes, and more to create a native-like experience.
              </p>

              <div className="bg-accent-light p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
                <ul className="space-y-2">
                  <li>✓ PWAs bridge the gap between web and native apps</li>
                  <li>✓ Service workers enable offline functionality</li>
                  <li>✓ Lower costs than developing native apps</li>
                  <li>✓ Improved user engagement and retention</li>
                  <li>✓ Easy updates without app store approval</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ProgressiveWebApps;
