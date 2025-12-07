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
  Search,
  Network
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import heroImage from "@/assets/hero-image.jpg";
import projectAimoTravel from "@/assets/project-aimo-travel.jpg";
import projectRemicanSacco from "@/assets/project-remican-sacco.jpg";
import projectTruechoice from "@/assets/project-truechoice.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import FloatingElements from "@/components/FloatingElements";
import { AnimatedElement, StaggerContainer, StaggerItem, HoverCard } from "@/components/AnimatedElement";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  phone: z.string().min(10, "Please enter a valid phone number").max(20),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

const Home = () => {
  const { toast } = useToast();
  const { displayedText } = useTypingEffect({ 
    text: "Grow Your Business", 
    speed: 100, 
    delay: 500 
  });
  
  const servicesReveal = useScrollReveal();
  const portfolioReveal = useScrollReveal();
  const testimonialsReveal = useScrollReveal();
  const statsReveal = useScrollReveal({ threshold: 0.5 });
  
  const projectsCount = useCountUp({ end: 5, duration: 2000, isActive: statsReveal.isVisible });
  const satisfactionCount = useCountUp({ end: 100, duration: 2000, isActive: statsReveal.isVisible });
  const experienceCount = useCountUp({ end: 3, duration: 2000, isActive: statsReveal.isVisible });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const email = "info@waksdigital.co.ke";
    const subject = `New Contact from ${values.name}`;
    const body = `Name: ${values.name}%0D%0AEmail: ${values.email}%0D%0APhone: ${values.phone}%0D%0A%0D%0AMessage:%0D%0A${values.message}`;
    
    toast({
      title: "✓ Message Ready to Send!",
      description: "Your email client will open with your message pre-filled. We'll respond within 24 hours.",
      duration: 5000,
    });
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    form.reset();
  };
  
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
    },
    {
      icon: Network,
      title: "Custom System Design",
      description: "Scalable system architecture and design solutions that streamline your business operations and workflows.",
      features: ["API Development", "Database Design", "Process Automation"]
    }
  ];

  const portfolioProjects = [
    {
      title: "Aimo Travel Agency",
      category: "Travel & Tourism",
      description: "Professional travel agency website offering visa applications, flight ticketing, and tour packages with seamless booking experience.",
      image: projectAimoTravel,
      technologies: ["WordPress", "Booking System", "Payment Integration"],
      url: "https://aimotravelagency.com/"
    },
    {
      title: "Remican SACCO",
      category: "Financial Services",  
      description: "Complete digital banking platform with member portal, loan calculator, and mobile app integration for secure account management.",
      image: projectRemicanSacco,
      technologies: ["Member Portal", "Loan Calculator", "Mobile App"],
      url: "https://remicansacco.co.ke"
    },
    {
      title: "Truechoice Merchants",
      category: "Logistics & Freight",
      description: "Professional freight forwarding website showcasing international logistics services with comprehensive cargo tracking.",
      image: projectTruechoice,
      technologies: ["Corporate Design", "Service Portal", "SEO"],
      url: "https://truechoice.co.ke/"
    }
  ];

  const testimonials = [
    {
      name: "Aimo Travel",
      role: "Director, Aimo Travel Agency",
      content: "Waks Digital transformed our travel agency's online presence. Our website now handles visa applications, bookings, and inquiries seamlessly. Online inquiries increased by 300%!",
      rating: 5
    },
    {
      name: "Remican SACCO",
      role: "Management, Remican SACCO Society",
      content: "Professional, reliable, and delivered exactly what we needed. Our members now enjoy seamless online banking and loan applications. Highly recommended!",
      rating: 5
    },
    {
      name: "Truechoice Merchants",
      role: "CEO, Truechoice Merchants Limited",
      content: "The corporate website they built for us perfectly represents our logistics expertise. We've seen a 400% increase in service inquiries since launch!",
      rating: 5
    },
    {
      name: "Baya Cleaning Services",
      role: "Owner, Baya Cleaning Services",
      content: "Our cleaning business has grown tremendously since launching our website with Waks Digital. The online booking system makes it easy for clients to schedule services, and we've seen a 250% increase in bookings!",
      rating: 5
    },
    {
      name: "Royal Digital School LMS",
      role: "Director, Royal Digital School",
      content: "The learning management system they developed for us is outstanding! Our teachers and students love how easy it is to use. Course enrollment has doubled, and parent satisfaction has never been higher.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingElements density="high" color="primary" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent dark:from-black/95 dark:via-black/80 dark:to-transparent"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-8">
              <div className="space-y-4 animate-fade-in">
                <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30 animate-float">
                  Your Digital Growth Partner
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  We Build Websites That 
                  <span className="block gradient-text">
                    {displayedText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                  Professional web development and design services for small to medium businesses in Nairobi. 
                  Let's bring your business online with a website that converts visitors into customers.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Button variant="hero" size="lg" className="h-10 px-4 py-2 text-sm sm:h-14 sm:px-8 sm:py-4 sm:text-lg hover-scale" asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button variant="hero-outline" size="lg" className="h-10 px-4 py-2 text-sm sm:h-14 sm:px-8 sm:py-4 sm:text-lg hover-scale" asChild>
                  <Link to="/portfolio">View Our Work</Link>
                </Button>
              </div>

              <div 
                ref={statsReveal.ref}
                className="flex items-center space-x-8 pt-4 animate-fade-in" 
                style={{ animationDelay: '0.4s' }}
              >
                <div className="text-center hover-scale">
                  <div className="text-2xl font-bold text-accent">
                    {projectsCount}+
                  </div>
                  <div className="text-sm text-white/80">Projects Completed</div>
                </div>
                <div className="text-center hover-scale">
                  <div className="text-2xl font-bold text-accent">
                    {satisfactionCount}%
                  </div>
                  <div className="text-sm text-white/80">Client Satisfaction</div>
                </div>
                <div className="text-center hover-scale">
                  <div className="text-2xl font-bold text-accent">
                    {experienceCount}+
                  </div>
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
          <AnimatedElement animation="fadeUp" className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business succeed online
            </p>
          </AnimatedElement>

          <StaggerContainer 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            staggerDelay={0.1}
          >
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <HoverCard>
                  <Card className="card-elevated p-8 h-full group">
                    <div className="space-y-6">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-accent to-accent-hover dark:from-foreground dark:to-foreground rounded-xl flex items-center justify-center shadow-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <service.icon className="h-8 w-8 text-white dark:text-background" />
                      </motion.div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle2 className="h-4 w-4 text-accent dark:text-foreground" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedElement animation="fadeUp" delay={0.4} className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedElement>
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

          <div 
            ref={portfolioReveal.ref}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioProjects.map((project, index) => (
              <a 
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card 
                  className={`card-elevated overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer ${
                    portfolioReveal.isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Globe className="h-4 w-4 text-accent" />
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">{project.title}</h3>
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
              </a>
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

          <div ref={testimonialsReveal.ref}>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card 
                      className={`card-elevated p-6 hover:scale-105 transition-all duration-300 h-full ${
                        testimonialsReveal.isVisible ? 'animate-fade-in' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="space-y-4">
                        <div className="flex space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-accent text-accent dark:fill-foreground dark:text-foreground" />
                          ))}
                        </div>
                        <p className="text-foreground leading-relaxed italic">"{testimonial.content}"</p>
                        <div className="space-y-1">
                          <div className="font-semibold text-primary">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+254 700 123 456" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project, timeline, and budget..."
                          rows={5}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;