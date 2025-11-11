import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import computerVisionHero from "@/assets/blog-computer-vision-kenya.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const ComputerVisionKenya = () => {
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
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>March 14, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>16 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Computer Vision Applications in Kenya: From Agriculture to Retail</h1>
            <p className="text-xl text-primary-foreground/80">Explore how image recognition and computer vision AI are solving real-world problems across Kenyan industries.</p>
            <button className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors">
              <Share2 className="h-5 w-5" /><span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-12">
        <img src={computerVisionHero} alt="Computer vision technology demonstration" className="w-full h-auto rounded-lg shadow-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">What is Computer Vision?</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Computer vision enables machines to interpret and understand visual information, identify objects, recognize patterns, and make decisions based on image data.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Applications in Kenyan Industries</h2>
              
              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Agriculture</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Mobile apps analyze photos of plants to identify diseases and pests early. Drone imagery predicts harvest quantities for better planning.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Retail and E-commerce</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Visual search allows customers to search for products by uploading images. Automated inventory management tracks stock levels.
              </p>

              <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">Security and Surveillance</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Facial recognition for access control, automated intrusion detection, and vehicle recognition for parking management.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Success Stories from Kenya</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                <strong>PlantVillage Nuru:</strong> Free app helping Kenyan farmers detect crop diseases using smartphone cameras.
              </p>

              <h2 className="text-3xl font-bold text-primary mt-12 mb-6">Getting Started</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                <li>Identify a specific business problem to solve</li>
                <li>Collect and label training data</li>
                <li>Start with pre-trained models</li>
                <li>Pilot test before full deployment</li>
              </ul>

              <div className="bg-muted/50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold text-primary mb-4">Interested in Computer Vision?</h3>
                <p className="text-foreground/80 mb-4">
                  Waks Digital Solutions can help you explore computer vision applications.
                </p>
                <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">
                  Explore Computer Vision
                </Link>
              </div>
            </div>
          </article>

          <BlogSidebar currentCategory="AI News" />
        </div>
      </div>
    </div>
  );
};

export default ComputerVisionKenya;