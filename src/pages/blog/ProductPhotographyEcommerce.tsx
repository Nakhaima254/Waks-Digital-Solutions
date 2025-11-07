import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import productPhotoImage from "@/assets/blog-product-photography.jpg";
import BlogSidebar from "@/components/BlogSidebar";

const ProductPhotographyEcommerce = () => {
  const relatedPosts = [
    { id: "ecommerce-success-kenya", title: "E-commerce Success Stories in Kenya" },
    { id: "conversion-rate-optimization", title: "Conversion Rate Optimization Guide" },
    { id: "visual-hierarchy-principles", title: "Visual Hierarchy in Web Design" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-primary-foreground/80 hover:text-accent transition-colors mb-6" onClick={() => window.scrollTo(0, 0)}>
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Blog</span>
          </Link>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <div className="flex items-center space-x-1"><User className="h-4 w-4" /><span>Isaac N.</span></div>
              <div className="flex items-center space-x-1"><Calendar className="h-4 w-4" /><span>February 11, 2025</span></div>
              <div className="flex items-center space-x-1"><Clock className="h-4 w-4" /><span>12 min read</span></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Product Photography Guide for E-commerce Success in Kenya</h1>
            <p className="text-xl text-primary-foreground/80">Learn professional techniques to capture stunning product images that drive sales, even with limited budget and equipment.</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="bg-card rounded-lg shadow-lg p-8 space-y-8">
              <section>
                <img src={productPhotoImage} alt="Professional product photography setup" className="w-full h-auto rounded-lg mb-6" />
                <p className="text-lg text-muted-foreground leading-relaxed">Quality product photography can increase conversions by up to 30%. You don't need expensive equipment – a smartphone, good lighting, and proper technique can produce professional results.</p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Essential Equipment for Product Photography</h2>
                <p className="text-muted-foreground leading-relaxed">Start with basics and upgrade as your business grows. A modern smartphone camera (12MP+) is sufficient for most e-commerce products.</p>
                <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Budget Setup (KES 5,000 - 15,000)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Smartphone with quality camera (12MP or higher)</li>
                    <li>• White poster board or fabric for background</li>
                    <li>• Natural window light or affordable LED panel (KES 3,000-5,000)</li>
                    <li>• Simple tripod or phone mount (KES 1,500-3,000)</li>
                    <li>• Free editing apps: Snapseed, VSCO, or Lightroom Mobile</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-6 rounded-lg space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Professional Setup (KES 50,000+)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• DSLR or mirrorless camera (Canon, Sony, or Nikon)</li>
                    <li>• 50mm prime lens for product detail</li>
                    <li>• Softbox lighting kit with 2-3 lights</li>
                    <li>• Professional backdrop and sweep</li>
                    <li>• Adobe Lightroom and Photoshop for editing</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Lighting Techniques for Product Photos</h2>
                <p className="text-muted-foreground leading-relaxed">Lighting makes or breaks product photography. Master these fundamental setups:</p>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Natural Window Light</h3>
                    <p className="text-muted-foreground">Position product near a large window during morning or late afternoon. Use white reflector on opposite side to fill shadows. Best for fashion, food, and lifestyle products.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Three-Point Lighting</h3>
                    <p className="text-muted-foreground">Key light at 45° angle, fill light opposite to reduce shadows, and back light to separate product from background. Professional standard for all products.</p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">Overhead Flat Lay</h3>
                    <p className="text-muted-foreground">Mount camera directly above product on white surface. Use diffused overhead lighting. Perfect for small items, jewelry, and lifestyle compositions.</p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Composition and Styling Best Practices</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li><strong>Multiple Angles:</strong> Capture 5-7 images per product – front, back, sides, detail shots, and lifestyle context</li>
                  <li><strong>Clean Backgrounds:</strong> Pure white (RGB 255,255,255) for marketplaces, lifestyle backgrounds for social media</li>
                  <li><strong>Show Scale:</strong> Include size reference or model to help customers visualize dimensions</li>
                  <li><strong>Highlight Details:</strong> Close-up shots of textures, materials, and unique features</li>
                  <li><strong>Lifestyle Context:</strong> Show products in use to help customers imagine ownership</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Photo Editing for E-commerce</h2>
                <p className="text-muted-foreground leading-relaxed">Consistent editing creates professional brand image across your product catalog.</p>
                <div className="bg-accent/10 border-l-4 border-accent p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Essential Edits</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>1. Adjust exposure and white balance for accurate colors</li>
                    <li>2. Remove background distractions or replace with pure white</li>
                    <li>3. Sharpen details without over-processing</li>
                    <li>4. Crop to consistent aspect ratio (square for social media, 4:5 for product pages)</li>
                    <li>5. Compress for web without losing quality (save as JPEG 80-90% quality)</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">Image Optimization for Web Performance</h2>
                <p className="text-muted-foreground leading-relaxed">Large image files slow down your website and hurt SEO. Optimize images to load fast while maintaining quality:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Maximum 200KB per image for gallery thumbnails</li>
                  <li>• 500KB-800KB for full-size product images</li>
                  <li>• Use WebP format for 25-35% smaller file sizes</li>
                  <li>• Implement lazy loading for images below fold</li>
                  <li>• Include descriptive alt text for SEO and accessibility</li>
                </ul>
              </section>

              <section className="border-t pt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Related Articles</h3>
                <div className="grid gap-4">
                  {relatedPosts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.id}`} onClick={() => window.scrollTo(0, 0)} className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors group">
                      <span className="text-foreground group-hover:text-primary transition-colors">{post.title}</span>
                      <ArrowLeft className="h-5 w-5 text-muted-foreground rotate-180 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </article>

          <BlogSidebar currentCategory="E-commerce" />
        </div>
      </div>
    </div>
  );
};

export default ProductPhotographyEcommerce;