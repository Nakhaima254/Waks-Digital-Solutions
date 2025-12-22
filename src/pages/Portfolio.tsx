import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  ExternalLink, 
  ArrowRight,
  Calendar,
  Users,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";
import portfolioHeroImage from "@/assets/portfolio-hero.jpg";
import projectAimoTravel from "@/assets/project-aimo-travel.jpg";
import projectJavinnaSafaris from "@/assets/project-safari-lodge.jpg";
import projectRemicanSacco from "@/assets/project-remican-sacco.jpg";
import projectQuietWaters from "@/assets/project-quiet-waters.jpg";
import projectTruechoice from "@/assets/project-truechoice.jpg";
import { AnimatedElement, StaggerContainer, StaggerItem, HoverCard } from "@/components/AnimatedElement";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Aimo Travel Agency",
      category: "Travel & Tourism",
      description: "Professional travel agency website offering visa applications, flight ticketing, hotel bookings, and tour packages with seamless user experience.",
      fullDescription: "Developed a comprehensive travel services platform for Aimo Travel Agency that streamlined their visa application process and travel booking services. The website features detailed visa information for multiple countries, online appointment booking, and integrated payment solutions.",
      technologies: ["WordPress", "Booking System", "Payment Integration", "Custom Design", "SEO Optimization"],
      features: [
        "Visa application management (Business, Tourist, Student)",
        "Online appointment scheduling",
        "Flight and hotel booking integration",
        "Tour package showcase",
        "Country-specific travel information",
        "WhatsApp and social media integration"
      ],
      results: [
        "300% increase in online inquiries",
        "Streamlined visa application process",
        "Enhanced customer experience",
        "Expanded service reach across East Africa"
      ],
      timeline: "6 weeks",
      year: "2024",
      client: "Aimo Travel Agency",
      website: "https://aimotravelagency.com/",
      image: projectAimoTravel
    },
    {
      id: 2,
      title: "Javinna Safaris",
      category: "Safari & Adventure",
      description: "Premium safari tour operator website showcasing unique safari experiences across Kenya and Tanzania with online booking capabilities.",
      fullDescription: "Created a stunning visual platform for Javinna Safaris that captures the essence of African safari adventures. The website features interactive tour galleries, detailed itineraries, and a seamless booking experience for international and local tourists.",
      technologies: ["WordPress", "Gallery System", "Booking Integration", "Responsive Design", "SEO"],
      features: [
        "Interactive safari tour galleries",
        "Detailed itinerary presentations",
        "Online booking and inquiry system",
        "Wildlife photography showcase",
        "Customer testimonials",
        "Mobile-optimized experience"
      ],
      results: [
        "250% increase in safari bookings",
        "Featured on travel platforms",
        "Improved international client acquisition",
        "Enhanced brand visibility"
      ],
      timeline: "5 weeks",
      year: "2024",
      client: "Javinna Safaris",
      website: "https://javinnasafaris.com/",
      image: projectJavinnaSafaris
    },
    {
      id: 3,
      title: "Remican SACCO",
      category: "Financial Services",
      description: "Complete digital banking platform for a SACCO society with member portal, loan calculator, mobile app integration, and secure account management.",
      fullDescription: "Built a comprehensive financial services platform for Remican SACCO that modernized their operations and improved member experience. The system includes a member portal, loan calculators, payment integrations, and mobile app connectivity for seamless banking.",
      technologies: ["WordPress", "Member Portal", "Loan Calculator", "Mobile App Integration", "Secure Systems"],
      features: [
        "Member login and account management",
        "Loan calculator and application system",
        "Savings and loan product showcase",
        "Mobile app integration (Android)",
        "Multiple payment mode support",
        "Document downloads and resources"
      ],
      results: [
        "500+ new member registrations",
        "60% reduction in manual processing",
        "Improved transparency and trust",
        "Increased member engagement"
      ],
      timeline: "8 weeks",
      year: "2024",
      client: "Remican SACCO Society",
      website: "https://www.remicansacco.co.ke/",
      image: projectRemicanSacco
    },
    {
      id: 4,
      title: "Quiet Waters Oasis",
      category: "Counseling & Wellness",
      description: "Marriage counseling and relationship services platform with appointment booking, resource library, and online consultation capabilities.",
      fullDescription: "Designed a compassionate and professional platform for Quiet Waters Oasis, a marriage counseling organization with over 40 years of experience. The website provides marriage preparation resources, life enrichment tools, and easy appointment scheduling.",
      technologies: ["WordPress", "Appointment System", "Resource Portal", "Custom Design", "Responsive Layout"],
      features: [
        "Online appointment scheduling",
        "Marriage resources and tools",
        "Service categorization (Getting Married, Married Life, Help)",
        "Video content integration",
        "Contact and inquiry system",
        "Mobile-responsive design"
      ],
      results: [
        "200% increase in consultation bookings",
        "Enhanced accessibility to services",
        "Improved couple engagement",
        "Positive feedback from community"
      ],
      timeline: "4 weeks",
      year: "2023",
      client: "Quiet Waters Oasis",
      website: "https://quietwatersoasis.org/",
      image: projectQuietWaters
    },
    {
      id: 5,
      title: "Truechoice Merchants",
      category: "Logistics & Freight",
      description: "Professional freight forwarding and logistics company website with service showcase, quote system, and comprehensive cargo tracking information.",
      fullDescription: "Developed a professional corporate website for Truechoice Merchants Limited, showcasing their expertise in international logistics. The platform highlights their sea freight, air freight, and customs clearance services with a modern, trust-building design.",
      technologies: ["WordPress", "Corporate Design", "Service Portal", "SEO Optimization", "Contact Systems"],
      features: [
        "Comprehensive service showcase",
        "Online quote request system",
        "Company profile and credentials",
        "Contact and inquiry management",
        "Blog for industry insights",
        "Professional corporate design"
      ],
      results: [
        "400% increase in service inquiries",
        "Enhanced professional credibility",
        "Improved client acquisition",
        "Strengthened market position"
      ],
      timeline: "6 weeks",
      year: "2024",
      client: "Truechoice Merchants Limited",
      website: "https://truechoice.co.ke/",
      image: projectTruechoice
    }
  ];

  const categories = ["All", "Travel & Tourism", "Safari & Adventure", "Financial Services", "Counseling & Wellness", "Logistics & Freight"];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={portfolioHeroImage} 
            alt="Portfolio Projects" 
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30">
              Our Work
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Projects That
              <span className="block text-accent">Drive Results</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              See how we've helped Kenyan businesses transform their online presence and achieve measurable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" staggerDelay={0.15}>
            {[
              { value: "5+", label: "Projects Completed" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "300%", label: "Average Inquiry Increase" },
              { value: "5", label: "Industries Served" }
            ].map((stat, index) => (
              <StaggerItem key={index} animation="scale">
                <motion.div 
                  className="space-y-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedElement animation="fadeUp" className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Featured Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each project tells a story of transformation and growth
            </p>
          </AnimatedElement>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <HoverCard>
                  <Card className="card-elevated overflow-hidden group h-full">
                    <div className="aspect-video relative overflow-hidden">
                      {project.image ? (
                        <motion.img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.4 }}
                        />
                      ) : (
                        <div className="w-full h-full bg-accent/20 flex items-center justify-center">
                          <Globe className="h-16 w-16 text-accent/40" />
                        </div>
                      )}
                      <motion.div 
                        className="absolute inset-0 bg-primary/80 flex items-end p-4"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                          {project.category}
                        </Badge>
                      </motion.div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{project.year}</span>
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{project.timeline}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 3} more
                            </Badge>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-primary">Key Results:</h4>
                          <div className="space-y-1">
                            {project.results.slice(0, 2).map((result, idx) => (
                              <div key={idx} className="flex items-center space-x-2 text-xs">
                                <TrendingUp className="h-3 w-3 text-accent" />
                                <span className="text-foreground">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2 pt-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          asChild
                        >
                          <a href={project.website} target="_blank" rel="noopener noreferrer">
                            Website Preview
                          </a>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          asChild
                        >
                          <a href={project.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Ready to See What We Can Do for Your Business?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every successful project starts with a conversation. Let's discuss your goals 
              and create a digital solution that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="hero" asChild>
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="hero" asChild>
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;