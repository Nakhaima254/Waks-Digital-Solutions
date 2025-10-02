import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Globe, 
  Search, 
  Smartphone, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Layers,
  Shield,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";
import servicesHeroImage from "@/assets/services-hero.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Unique, scalable websites built from scratch using modern HTML, CSS, and JavaScript technologies. Perfect for businesses that need a distinctive online presence.",
      benefits: [
        "100% unique design tailored to your brand",
        "Optimized for search engines (SEO)",
        "Fast loading speeds for better user experience",
        "Scalable architecture that grows with your business",
        "Mobile-responsive across all devices",
        "Clean, maintainable code structure"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
      startingPrice: "From KES 50,000",
      timeline: "2-6 weeks",
      ideal: "Businesses wanting unique branding and advanced functionality"
    },
    {
      icon: Palette,
      title: "WordPress Website Design",
      description: "Professional WordPress websites that are easy to manage and update. Ideal for small businesses who want to control their content without technical knowledge.",
      benefits: [
        "Easy content management system",
        "Professional themes customized for your brand",
        "SEO-optimized out of the box",
        "Regular security updates and backups",
        "Training provided for content management",
        "Plugin integration for added functionality"
      ],
      technologies: ["WordPress", "Custom Themes", "WooCommerce", "Elementor"],
      startingPrice: "From KES 25,000",
      timeline: "1-3 weeks",
      ideal: "Small businesses needing easy content management"
    },
    {
      icon: Globe,
      title: "E-commerce Solutions",
      description: "Complete online stores that help you sell products and services online. From simple product catalogs to complex multi-vendor marketplaces.",
      benefits: [
        "Secure payment gateway integration",
        "Inventory management system",
        "Customer account management",
        "Order tracking and notifications",
        "Mobile-optimized shopping experience",
        "Analytics and sales reporting"
      ],
      technologies: ["WooCommerce", "Shopify", "Custom Solutions", "Payment APIs"],
      startingPrice: "From KES 75,000",
      timeline: "3-8 weeks",
      ideal: "Businesses ready to sell products or services online"
    }
  ];

  const additionalServices = [
    {
      icon: Search,
      title: "SEO Services",
      description: "Improve your website's visibility on Google and other search engines to attract more customers.",
      features: ["Keyword Research", "On-page Optimization", "Local SEO", "Performance Tracking"]
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Ensure your website works perfectly on all mobile devices and tablets.",
      features: ["Responsive Design", "Touch-friendly Interface", "Fast Mobile Loading", "App-like Experience"]
    },
    {
      icon: Shield,
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and running smoothly with our maintenance packages.",
      features: ["Security Updates", "Regular Backups", "Performance Monitoring", "Content Updates"]
    },
    {
      icon: Zap,
      title: "Website Speed Optimization",
      description: "Make your website load faster to improve user experience and search engine rankings.",
      features: ["Performance Analysis", "Image Optimization", "Code Minification", "CDN Setup"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={servicesHeroImage} 
            alt="Web Development Services" 
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30">
              Professional Web Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Services That Grow
              <span className="block text-accent">Your Business</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From custom websites to e-commerce solutions, we provide comprehensive digital services 
              to help your Kenyan business succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect solution for your business needs
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <Card key={index} className="card-elevated overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-hover rounded-xl flex items-center justify-center">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                        <p className="text-muted-foreground">{service.ideal}</p>
                      </div>
                    </div>
                    
                    <p className="text-foreground leading-relaxed text-lg">{service.description}</p>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-accent" />
                        <span className="text-sm font-medium">{service.timeline}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{service.startingPrice}</Badge>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-4">What You Get:</h4>
                      <div className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="hero" size="lg" className="w-full" asChild>
                      <Link to="/contact">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Additional Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete your digital presence with our supporting services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="card-elevated p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-hover rounded-lg flex items-center justify-center mx-auto">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="text-xs text-foreground bg-muted px-2 py-1 rounded">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Let's discuss your project and find the perfect solution for your business. 
              We'll provide a detailed proposal with timeline and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="hero" asChild>
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button  variant="outline" size="hero" asChild>
                <Link   to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;