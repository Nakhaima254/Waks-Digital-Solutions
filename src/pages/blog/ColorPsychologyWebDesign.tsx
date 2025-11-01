import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import colorPsychologyImage from "@/assets/blog-color-psychology.jpg";
import colorTheoryImage from "@/assets/blog-color-theory.jpg";

const ColorPsychologyWebDesign = () => {
  return (
    <div className="min-h-screen pt-16 font-blog">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={colorPsychologyImage} 
            alt="Color Psychology in Web Design" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>
          
          <Badge variant="secondary" className="mb-4">Design</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Psychology of Color in Web Design: A Guide for Kenyan Brands
          </h1>
          
          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>Isaac N.</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>January 12, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>10 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-background">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <div className="space-y-6 text-foreground">
            <p className="text-xl leading-relaxed">
              Color is one of the most powerful tools in a web designer's arsenal. It can evoke emotions, influence decisions, and create lasting impressions. For Kenyan brands looking to establish a strong online presence, understanding color psychology is essential.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-8">Why Color Matters in Web Design</h2>
            <p>
              Studies show that color increases brand recognition by up to 80%. When visitors land on your website, they form an opinion within 50 milliseconds – and color plays a crucial role in that first impression. For Kenyan businesses competing in a crowded digital marketplace, choosing the right colors can be the difference between a bounce and a conversion.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-8">Understanding Color Psychology</h2>
            
            <img 
              src={colorTheoryImage} 
              alt="Color psychology wheel showing emotional associations with different colors" 
              className="w-full h-auto rounded-lg my-6"
            />
            
            <h3 className="text-2xl font-semibold text-primary mt-6">Red: Energy and Passion</h3>
            <p>
              Red is bold, exciting, and attention-grabbing. It's perfect for brands that want to convey passion, energy, or urgency. Kenyan brands like Safaricom use red effectively to create excitement and drive action. However, use it sparingly as too much red can be overwhelming.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-6">Blue: Trust and Professionalism</h3>
            <p>
              Blue is the most universally liked color and represents trust, security, and professionalism. It's no surprise that financial institutions and tech companies favor blue. For Kenyan SACCOs, banks, and B2B services, blue builds credibility and confidence.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-6">Green: Growth and Nature</h3>
            <p>
              Green symbolizes growth, freshness, and environmental consciousness. It's ideal for agricultural businesses, eco-friendly brands, and health-related services. Kenya's rich natural heritage makes green a particularly powerful choice for tourism and conservation brands.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-6">Yellow: Optimism and Warmth</h3>
            <p>
              Yellow radiates optimism, warmth, and happiness. It's attention-grabbing and can stimulate mental activity. However, use it carefully as large amounts can cause eye strain. It works well as an accent color for calls-to-action.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-6">Orange: Creativity and Enthusiasm</h3>
            <p>
              Orange combines the energy of red with the friendliness of yellow. It's associated with creativity, adventure, and enthusiasm. Perfect for youth-oriented brands and creative agencies in Nairobi.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-8">Cultural Considerations in Kenya</h2>
            <p>
              While universal color psychology applies, it's important to consider cultural context. In Kenya:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Red, Black, and Green:</strong> These colors hold special significance as they represent the Kenyan flag and evoke national pride.</li>
              <li><strong>Gold and Yellow:</strong> Often associated with the sun, warmth, and abundance in African culture.</li>
              <li><strong>Earth Tones:</strong> Browns and oranges connect with Kenya's beautiful landscapes and wildlife.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-8">Practical Color Strategies for Kenyan Websites</h2>
            
            <h3 className="text-2xl font-semibold text-primary mt-6">1. Choose a Primary Brand Color</h3>
            <p>
              Select one dominant color that represents your brand values. This should be used consistently across your website, social media, and marketing materials.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-6">2. Create a Color Palette</h3>
            <p>
              Develop a cohesive palette with 3-5 colors:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Primary color (main brand color)</li>
              <li>Secondary color (complementary)</li>
              <li>Accent color (for CTAs and highlights)</li>
              <li>Neutral colors (grays, whites for backgrounds)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-primary mt-6">3. Consider Contrast and Accessibility</h3>
            <p>
              Ensure sufficient contrast between text and background colors. This isn't just about aesthetics – it's about making your website accessible to everyone, including those with visual impairments. Aim for a contrast ratio of at least 4.5:1 for normal text.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-6">4. Test Your Colors</h3>
            <p>
              Before finalizing your color scheme, test it with your target audience. What works for a law firm in Westlands might not work for a fashion boutique in Kilimani.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-8">Industry-Specific Color Recommendations</h2>
            
            <div className="bg-muted p-6 rounded-lg">
              <p className="font-semibold mb-3">Healthcare & Wellness:</p>
              <p>Blue and green for trust and healing</p>
              
              <p className="font-semibold mb-3 mt-4">Finance & Banking:</p>
              <p>Blue, gray, and dark green for security and stability</p>
              
              <p className="font-semibold mb-3 mt-4">Food & Restaurants:</p>
              <p>Red, orange, and warm tones to stimulate appetite</p>
              
              <p className="font-semibold mb-3 mt-4">Technology & Innovation:</p>
              <p>Blue, purple, and modern gradients for innovation</p>
              
              <p className="font-semibold mb-3 mt-4">Tourism & Travel:</p>
              <p>Earth tones, greens, and vibrant colors reflecting Kenya's landscapes</p>
            </div>

            <h2 className="text-3xl font-bold text-primary mt-8">Common Color Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Using too many colors:</strong> Stick to your palette – more isn't better.</li>
              <li><strong>Ignoring color blindness:</strong> About 8% of men are color blind. Test your site accordingly.</li>
              <li><strong>Following trends blindly:</strong> Choose colors that align with your brand, not just what's trendy.</li>
              <li><strong>Poor contrast:</strong> Light gray text on white backgrounds frustrates users.</li>
              <li><strong>Clashing colors:</strong> Use a color wheel to ensure harmony.</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-8">Tools for Choosing Colors</h2>
            <p>
              Here are some free tools to help you create the perfect color palette:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Adobe Color:</strong> Create and explore color schemes</li>
              <li><strong>Coolors:</strong> Generate beautiful color palettes quickly</li>
              <li><strong>Color Hunt:</strong> Discover trendy color palettes</li>
              <li><strong>WebAIM Contrast Checker:</strong> Ensure your colors meet accessibility standards</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-8">Conclusion</h2>
            <p>
              Color psychology in web design is both an art and a science. For Kenyan brands, understanding how colors influence emotions and behavior can significantly impact your online success. Whether you're launching a new website or redesigning an existing one, investing time in choosing the right colors will pay dividends in brand recognition, user engagement, and conversions.
            </p>
            <p>
              Remember: your color choices should reflect your brand identity, resonate with your target audience, and create a cohesive, professional online presence. When done right, color becomes one of your most powerful marketing tools.
            </p>

            <div className="bg-accent/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Need help choosing the perfect colors for your brand?</h3>
              <p className="mb-4">
                At Waks Digital, we specialize in creating beautiful, strategic web designs for Kenyan businesses. Let's discuss your brand colors and create a website that truly represents your business.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default ColorPsychologyWebDesign;
