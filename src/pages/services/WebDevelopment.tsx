import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Monitor, Zap, Shield, Search, Users } from "lucide-react";
import { Link } from "react-router-dom";
import webDevImage from "@/assets/service-web-development.jpg";

const WebDevelopment = () => {
  const features = [
    {
      icon: Code2,
      title: "Custom Coding",
      description: "Hand-coded websites built from scratch using modern HTML5, CSS3, and JavaScript"
    },
    {
      icon: Monitor,
      title: "Responsive Design",
      description: "Websites that look perfect on all devices - desktop, tablet, and mobile"
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimized code for lightning-fast loading speeds and better user experience"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security best practices and reliable hosting recommendations"
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Search engine friendly structure to help your business get found online"
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "Designed with your customers in mind for maximum engagement and conversions"
    }
  ];

  const packages = [
    {
      name: "Basic Custom Site",
      price: "KSH 35,000",
      features: ["5-7 pages", "Custom design", "Mobile responsive", "Contact forms", "Basic SEO"]
    },
    {
      name: "Advanced Custom Site", 
      price: "KSH 65,000",
      features: ["10-15 pages", "Advanced animations", "Custom functionality", "CMS integration", "Advanced SEO"]
    },
    {
      name: "Enterprise Solution",
      price: "Quote on request",
      features: ["Unlimited pages", "Complex functionality", "Database integration", "API development", "Performance optimization"]
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={webDevImage} 
            alt="Custom Web Development" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4">Custom Web Development</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Build Your Unique Digital Presence
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stand out from the competition with a custom-built website designed specifically for your business. 
              No templates, no limitations - just pure creativity and functionality.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Start Your Custom Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose Custom Development?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Custom development gives you complete control over your website's functionality, design, and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
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
              Our Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold mb-2">Discovery</h3>
              <p className="text-muted-foreground text-sm">We understand your business goals and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-muted-foreground text-sm">Custom design mockups tailored to your brand</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-muted-foreground text-sm">Hand-coded website with modern technologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold mb-2">Launch</h3>
              <p className="text-muted-foreground text-sm">Testing, deployment, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Custom Development Packages
            </h2>
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
                    <Link to="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for a Custom Website?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something unique that perfectly represents your business and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-accent hover:text-white hover:border-accent transition-all duration-300" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebDevelopment;