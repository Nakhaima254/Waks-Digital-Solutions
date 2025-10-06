import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import typographyTrendsImage from "@/assets/blog-typography-trends.jpg";

const TypographyTrendsKenya = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={typographyTrendsImage} 
            alt="Typography Trends" 
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
            Typography Trends That Make Kenyan Websites Stand Out
          </h1>
          
          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>Isaac N.</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>January 18, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>9 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-background">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <div className="space-y-6 text-foreground">
            <p className="text-xl leading-relaxed">
              Typography is more than just picking pretty fonts – it's about communication, readability, and creating a memorable brand identity. In 2025, Kenyan websites that master typography stand out in an increasingly competitive digital landscape. Let's explore the trends and best practices that will make your website typography shine.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-8">Why Typography Matters</h2>
            <p>
              Good typography:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Enhances readability and user experience</li>
              <li>Reinforces your brand identity</li>
              <li>Guides users through your content hierarchy</li>
              <li>Creates emotional connections with visitors</li>
              <li>Improves accessibility for all users</li>
            </ul>
            <p className="mt-4">
              Poor typography, on the other hand, can make even the best content unreadable and unprofessional.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-8">Top Typography Trends for 2025</h2>

            <h3 className="text-2xl font-semibold text-primary mt-6">1. Bold, Oversized Headlines</h3>
            <p>
              Large, attention-grabbing headlines are dominating web design. They create immediate impact and work beautifully on both desktop and mobile devices. For Kenyan businesses, this trend is perfect for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hero sections making strong first impressions</li>
              <li>Service pages highlighting key offerings</li>
              <li>Landing pages driving specific actions</li>
            </ul>
            <p className="mt-4">
              <strong>Pro tip:</strong> Pair oversized headlines with plenty of white space to let them breathe and maintain readability.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-6">2. Variable Fonts</h3>
            <p>
              Variable fonts are a game-changer for web performance. Instead of loading multiple font files (regular, bold, italic, etc.), a single variable font file contains all variations. This means:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Faster loading times – crucial for Kenyan mobile users</li>
              <li>Smoother font weight transitions</li>
              <li>More creative design possibilities</li>
              <li>Better performance on slower connections</li>
            </ul>

            <h3 className="text-2xl font-semibold text-primary mt-6">3. Serif Fonts Making a Comeback</h3>
            <p>
              After years of sans-serif dominance, serif fonts are returning to web design. Modern serif typefaces like Fraunces, Source Serif Pro, and Lora bring elegance and sophistication. They're perfect for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Law firms and professional services</li>
              <li>High-end fashion and lifestyle brands</li>
              <li>Editorial and blog content</li>
              <li>Brands wanting to convey heritage and trust</li>
            </ul>

            <h3 className="text-2xl font-semibold text-primary mt-6">4. Kinetic Typography</h3>
            <p>
              Moving text creates visual interest and draws attention to key messages. When used sparingly, animated typography can:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Highlight important statistics or data</li>
              <li>Create engaging storytelling experiences</li>
              <li>Guide users through content sections</li>
              <li>Add personality to your brand</li>
            </ul>
            <p className="mt-4">
              <strong>Caution:</strong> Keep animations subtle and purposeful. Too much movement can be distracting and slow down your site.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-6">5. Mixed Typography Styles</h3>
            <p>
              Combining different font styles creates visual hierarchy and interest. The key is balance – typically pairing:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>A bold display font for headlines</li>
              <li>A clean, readable font for body text</li>
              <li>An accent font for highlights or quotes</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-8">Choosing Fonts for Kenyan Websites</h2>

            <h3 className="text-2xl font-semibold text-primary mt-6">Consider Your Audience</h3>
            <p>
              Different fonts communicate different messages:
            </p>
            <div className="bg-muted p-6 rounded-lg space-y-3">
              <p><strong>Corporate/Professional:</strong> Helvetica, Inter, Open Sans</p>
              <p><strong>Creative/Modern:</strong> Poppins, Montserrat, Raleway</p>
              <p><strong>Traditional/Elegant:</strong> Playfair Display, Lora, Crimson Text</p>
              <p><strong>Tech/Innovative:</strong> IBM Plex, Space Grotesk, DM Sans</p>
            </div>

            <h3 className="text-2xl font-semibold text-primary mt-6">Optimize for Mobile</h3>
            <p>
              With most Kenyans browsing on mobile devices, your typography must be mobile-friendly:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Minimum 16px font size for body text</li>
              <li>Larger line height for easier reading (1.5-1.8)</li>
              <li>Shorter line lengths (50-75 characters per line)</li>
              <li>Adequate spacing between paragraphs</li>
            </ul>

            <h3 className="text-2xl font-semibold text-primary mt-6">Performance Matters</h3>
            <p>
              Typography choices affect loading speed:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Limit font variations (regular, bold, italic maximum)</li>
              <li>Use system fonts when appropriate (fast and familiar)</li>
              <li>Preload critical fonts to avoid text flashing</li>
              <li>Consider font subsetting for non-English characters</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-8">Creating Typography Hierarchy</h2>
            <p>
              Good hierarchy guides users through your content naturally:
            </p>

            <div className="bg-muted p-6 rounded-lg space-y-3">
              <p><strong>H1 (Main Heading):</strong> 48-72px – One per page, clear and impactful</p>
              <p><strong>H2 (Section Headings):</strong> 32-48px – Major content divisions</p>
              <p><strong>H3 (Subsections):</strong> 24-32px – Supporting sections</p>
              <p><strong>Body Text:</strong> 16-18px – Comfortable reading size</p>
              <p><strong>Small Text:</strong> 14px – Captions, labels, footnotes</p>
            </div>

            <h2 className="text-3xl font-bold text-primary mt-8">Best Font Pairings for Kenyan Websites</h2>

            <h3 className="text-2xl font-semibold text-primary mt-6">Classic Combinations</h3>
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold">Professional Services</p>
                <p className="text-sm">Playfair Display (Headings) + Open Sans (Body)</p>
                <p className="text-sm mt-1 text-muted-foreground">Elegant yet approachable – perfect for law firms, consultancies</p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold">Tech Startups</p>
                <p className="text-sm">Poppins (Headings) + Inter (Body)</p>
                <p className="text-sm mt-1 text-muted-foreground">Modern and clean – ideal for SaaS, fintech, apps</p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold">Creative Agencies</p>
                <p className="text-sm">Montserrat (Headings) + Lato (Body)</p>
                <p className="text-sm mt-1 text-muted-foreground">Bold and friendly – perfect for design studios, marketing agencies</p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold">E-commerce</p>
                <p className="text-sm">Raleway (Headings) + Roboto (Body)</p>
                <p className="text-sm mt-1 text-muted-foreground">Clean and versatile – works for fashion, retail, marketplaces</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-primary mt-8">Typography Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Too many fonts:</strong> Stick to 2-3 fonts maximum</li>
              <li><strong>Poor contrast:</strong> Ensure text is readable against backgrounds</li>
              <li><strong>Tiny text:</strong> Don't make users squint on mobile</li>
              <li><strong>All caps overuse:</strong> USE SPARINGLY – IT'S HARD TO READ</li>
              <li><strong>Insufficient spacing:</strong> Give text room to breathe</li>
              <li><strong>Center-aligned body text:</strong> Keep paragraphs left-aligned for readability</li>
              <li><strong>Decorative fonts for body text:</strong> Save fancy fonts for headlines only</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-8">Free Font Resources</h2>
            <p>
              Access thousands of high-quality fonts for your Kenyan website:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Fonts:</strong> 1400+ free, optimized fonts</li>
              <li><strong>Font Squirrel:</strong> Hand-picked commercial-use fonts</li>
              <li><strong>Adobe Fonts:</strong> Premium fonts with Creative Cloud</li>
              <li><strong>DaFont:</strong> Wide variety of display fonts</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-8">Testing Your Typography</h2>
            <p>
              Before launching, test your typography choices:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Read actual content in your chosen fonts</li>
              <li>Test on multiple devices (desktop, tablet, phone)</li>
              <li>Check readability in different lighting conditions</li>
              <li>Get feedback from your target audience</li>
              <li>Verify accessibility standards are met</li>
            </ul>

            <h2 className="text-3xl font-bold text-primary mt-8">Conclusion</h2>
            <p>
              Typography is a powerful design tool that can elevate your Kenyan website from ordinary to extraordinary. By following current trends while maintaining readability and brand consistency, you'll create a professional, engaging online presence that keeps visitors reading and converts them into customers.
            </p>
            <p>
              Remember: the best typography is almost invisible – it enhances your message without calling attention to itself. Invest time in getting it right, and your website will stand out for all the right reasons.
            </p>

            <div className="bg-accent/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Ready to transform your website's typography?</h3>
              <p className="mb-4">
                At Waks Digital, we craft beautiful websites with typography that enhances your brand and engages your audience. Let's create something amazing together.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default TypographyTrendsKenya;
