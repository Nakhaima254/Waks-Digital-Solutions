import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Code, 
  Palette, 
  Zap, 
  Star, 
  ArrowRight, 
  CheckCircle2,
  Globe,
  Smartphone,
  Search
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Unique, scalable websites built with HTML, CSS, and JavaScript tailored to your business needs.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized"]
    },
    {
      icon: Palette,
      title: "WordPress Design",
      description: "User-friendly WordPress websites perfect for small businesses who want easy content management.",
      features: ["Easy to Update", "Professional Design", "Mobile Friendly"]
    },
    {
      icon: Globe,
      title: "E-commerce Solutions",
      description: "Complete online stores that help you sell your products and services to customers worldwide.",
      features: ["Secure Payments", "Inventory Management", "Customer Analytics"]
    }
  ];

  const portfolioProjects = [
    {
      title: "Safari Lodge Booking",
      category: "Tourism",
      description: "Complete booking system for a Kenyan safari lodge with online payments and availability calendar.",
      image: "/api/placeholder/400/300",
      technologies: ["WordPress", "WooCommerce", "Custom Design"]
    },
    {
      title: "Local Restaurant Chain",
      category: "Food & Beverage",  
      description: "Multi-location restaurant website with online ordering and delivery integration.",
      image: "/api/placeholder/400/300",
      technologies: ["Custom Development", "Online Ordering", "Location Finder"]
    },
    {
      title: "Tech Startup",
      category: "Technology",
      description: "Modern SaaS landing page with subscription management and user dashboards.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Modern Design", "Payment Integration"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Kimani",
      role: "Founder, Green Gardens Nursery",
      content: "Waks Digital transformed our online presence. Our website now attracts customers from all over Nairobi, and our sales have increased by 150%.",
      rating: 5
    },
    {
      name: "David Ochieng",
      role: "Director, Ochieng & Associates",
      content: "Professional, reliable, and delivered exactly what we needed. Our law firm's website now properly represents our expertise.",
      rating: 5
    },
    {
      name: "Grace Mwangi",
      role: "Owner, Mwangi Fashion House",
      content: "The e-commerce site they built for us is beautiful and so easy to manage. We're now selling across East Africa!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30">
                  Your Digital Growth Partner
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  We Build Websites That 
                  <span className="block gradient-text">Grow Your Business</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                  Professional web development and design services for small to medium businesses in Nairobi. 
                  Let's bring your business online with a website that converts visitors into customers.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="hero" asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button variant="hero-outline" size="hero" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-sm text-white/80">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-sm text-white/80">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">3+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business succeed online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-elevated p-8 hover:scale-105 transition-all duration-300">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-hover rounded-xl flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-accent" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Recent Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've helped businesses like yours succeed online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Card key={index} className="card-elevated overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <Globe className="h-16 w-16 text-accent/40" />
                </div>
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/portfolio">
                View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses we've helped grow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elevated p-6 hover:scale-105 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="space-y-1">
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Ready to Grow Your Business?</h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your project and create a website that drives results
            </p>
          </div>

          <Card className="card-elevated p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                <Input id="phone" placeholder="+254 700 123 456" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Project Details</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project, timeline, and budget..."
                  rows={5}
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;