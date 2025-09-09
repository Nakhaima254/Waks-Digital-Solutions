import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Image, FileText, Package, Shirt, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const GraphicDesign = () => {
  const services = [
    {
      icon: Palette,
      title: "Logo Design",
      description: "Professional logos that represent your brand identity and values"
    },
    {
      icon: FileText,
      title: "Brand Identity",
      description: "Complete branding packages including colors, fonts, and style guides"
    },
    {
      icon: Image,
      title: "Marketing Materials",
      description: "Flyers, brochures, business cards, and digital marketing graphics"
    },
    {
      icon: Package,
      title: "Packaging Design",
      description: "Eye-catching product packaging that sells your products"
    },
    {
      icon: Shirt,
      title: "Merchandise Design",
      description: "T-shirts, uniforms, and promotional merchandise designs"
    },
    {
      icon: Camera,
      title: "Social Media Graphics",
      description: "Engaging visuals for Facebook, Instagram, Twitter, and LinkedIn"
    }
  ];

  const portfolioCategories = [
    {
      name: "Logo Design",
      description: "Modern, memorable logos for Kenyan businesses",
      projects: "50+ logos created"
    },
    {
      name: "Print Design",
      description: "Brochures, flyers, and business cards",
      projects: "100+ print materials"
    },
    {
      name: "Digital Graphics",
      description: "Social media and web graphics",
      projects: "200+ digital designs"
    },
    {
      name: "Brand Identity",
      description: "Complete branding solutions",
      projects: "25+ brand identities"
    }
  ];

  const packages = [
    {
      name: "Logo Package",
      price: "KSH 8,000",
      features: [
        "3 logo concepts",
        "2 rounds of revisions",
        "High-resolution files",
        "Black & white versions",
        "Basic brand guidelines",
        "Commercial usage rights"
      ]
    },
    {
      name: "Brand Identity",
      price: "KSH 25,000",
      features: [
        "Logo design process",
        "Color palette selection",
        "Typography guidelines",
        "Business card design",
        "Letterhead design",
        "Brand style guide",
        "Social media templates"
      ]
    },
    {
      name: "Marketing Suite",
      price: "KSH 15,000",
      features: [
        "Flyer design",
        "Brochure design",
        "Business card design",
        "Social media graphics (5)",
        "Email signature design",
        "Print-ready files"
      ]
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4">Graphic Design</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Creative Design That Sells
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Professional graphic design services to make your Kenyan business stand out. 
              From logos to marketing materials, we create visuals that connect with your customers.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Start Your Design Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Complete Design Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we handle all your graphic design needs with creativity and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Design Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See examples of our creative work across different design categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioCategories.map((category, index) => (
              <Card key={index} className="p-6 text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <p className="text-sm font-medium text-accent">{category.projects}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Design Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect design package for your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-accent mt-2">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/contact">Order Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Design Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold mb-2">Brief</h3>
              <p className="text-muted-foreground text-sm">Understand your vision and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold mb-2">Research</h3>
              <p className="text-muted-foreground text-sm">Study your industry and target audience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold mb-2">Concept</h3>
              <p className="text-muted-foreground text-sm">Create initial design concepts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold mb-2">Refine</h3>
              <p className="text-muted-foreground text-sm">Revise based on your feedback</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                5
              </div>
              <h3 className="font-semibold mb-2">Deliver</h3>
              <p className="text-muted-foreground text-sm">Final files in all required formats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Our Design Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                🎨
              </div>
              <h3 className="font-semibold mb-2">Creative Excellence</h3>
              <p className="text-muted-foreground text-sm">Award-winning designs that make your brand memorable</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                ⚡
              </div>
              <h3 className="font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-muted-foreground text-sm">Most projects completed within 3-7 business days</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                🇰🇪
              </div>
              <h3 className="font-semibold mb-2">Local Understanding</h3>
              <p className="text-muted-foreground text-sm">Deep knowledge of Kenyan market and culture</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create stunning visuals that help your business stand out and attract more customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start Design Project</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GraphicDesign;