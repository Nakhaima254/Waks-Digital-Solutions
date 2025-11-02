import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import mobileTestingHero from "@/assets/blog-mobile-testing-hero.jpg";
import mobileTestingDevices from "@/assets/blog-mobile-testing-devices.jpg";
import mobileTestingDebugging from "@/assets/blog-mobile-testing-debugging.jpg";

const MobileTestingGuide = () => {
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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>March 10, 2024</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>11 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Comprehensive Mobile Website Testing Guide</h1>
            <p className="text-xl text-primary-foreground/80">Learn effective mobile testing strategies to ensure flawless performance across devices and network conditions.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={mobileTestingHero} alt="Mobile testing with multiple devices" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Device Testing Strategy</h2>
          <img src={mobileTestingDevices} alt="Mobile testing lab setup" className="w-full h-auto rounded-lg shadow-lg my-8" />
          <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Debugging Tools</h2>
          <img src={mobileTestingDebugging} alt="Mobile debugging tools" className="w-full h-auto rounded-lg shadow-lg my-8" />
          <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
            <li>Chrome DevTools mobile emulation</li>
            <li>BrowserStack for real devices</li>
            <li>Network throttling tests</li>
            <li>Cross-browser compatibility</li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default MobileTestingGuide;
