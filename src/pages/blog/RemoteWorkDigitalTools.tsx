import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import remoteWorkHero from "@/assets/blog-remote-work-hero.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const RemoteWorkDigitalTools = () => {
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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>January 5, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>11 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Essential Digital Tools for Remote Work Success in 2025</h1>
            <p className="text-xl text-primary-foreground/80">Maximize productivity and collaboration with the latest remote work technologies.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={remoteWorkHero} alt="Remote Work Digital Tools" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed mb-6">
                Remote and hybrid work models are here to stay. As businesses across Kenya embrace flexible work arrangements, having the right digital tools is crucial for maintaining productivity, collaboration, and team cohesion.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Communication and Collaboration Tools</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Zoom:</strong> Industry standard with breakout rooms and recording features</li>
                <li><strong>Microsoft Teams:</strong> Integrated with Office 365 ecosystem</li>
                <li><strong>Slack:</strong> Real-time messaging and channel-based communication</li>
                <li><strong>Google Meet:</strong> Simple, reliable video conferencing</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Project Management</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Asana:</strong> Task tracking and workflow management</li>
                <li><strong>Trello:</strong> Visual kanban-style project boards</li>
                <li><strong>Monday.com:</strong> Customizable work management platform</li>
                <li><strong>ClickUp:</strong> All-in-one productivity platform</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Cloud Storage and File Sharing</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li><strong>Google Drive:</strong> 15GB free storage with real-time collaboration</li>
                <li><strong>Dropbox:</strong> Reliable file sync and sharing</li>
                <li><strong>OneDrive:</strong> Integrated with Microsoft Office</li>
              </ul>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Need Help Setting Up Remote Work Tools?</h3>
                <p className="text-foreground/80 mb-4">
                  Waks Digital Solutions can help you choose and implement the right tools for your team.
                </p>
                <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">
                  Get Started
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

export default RemoteWorkDigitalTools;