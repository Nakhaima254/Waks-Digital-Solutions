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
import projectSafariLodge from "@/assets/project-safari-lodge.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import projectEdtech from "@/assets/project-edtech.jpg";
import projectHealthcare from "@/assets/project-healthcare.jpg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Serengeti Safari Lodge",
      category: "Tourism & Hospitality",
      description: "Complete online booking system for a luxury safari lodge in the Maasai Mara. Features real-time availability, secure payments, and guest management.",
      fullDescription: "We developed a comprehensive booking platform for Serengeti Safari Lodge that streamlined their reservation process and increased direct bookings by 200%. The system includes automated email confirmations, payment processing through M-Pesa and international cards, and an admin dashboard for managing bookings and availability.",
      technologies: ["WordPress", "WooCommerce", "Custom Booking System", "M-Pesa Integration", "Responsive Design"],
      features: [
        "Real-time availability calendar",
        "Secure online payments (M-Pesa & Cards)",
        "Guest management system",
        "Automated email confirmations",
        "Mobile-responsive design",
        "Multi-language support (English/Swahili)"
      ],
      results: [
        "200% increase in direct bookings",
        "50% reduction in booking admin time",
        "95% customer satisfaction rate",
        "Mobile bookings increased by 300%"
      ],
      timeline: "6 weeks",
      year: "2024",
      client: "Serengeti Safari Lodge",
      website: "#",
      image: projectSafariLodge
    },
    {
      id: 2,
      title: "Mama's Kitchen Chain",
      category: "Food & Beverage",
      description: "Multi-location restaurant website with online ordering, delivery integration, and location-based menu management.",
      fullDescription: "Built a comprehensive restaurant chain website for Mama's Kitchen with locations across Nairobi. The platform allows customers to order from their nearest location, track deliveries, and manage loyalty points. Integrated with popular delivery services and included a custom admin panel for menu management.",
      technologies: ["React", "Custom Backend", "Location APIs", "Payment Gateway", "Delivery Integration"],
      features: [
        "Location-based ordering",
        "Real-time order tracking",
        "Loyalty points system",
        "Delivery integration (Uber Eats, Glovo)",
        "Menu management per location",
        "Customer reviews and ratings"
      ],
      results: [
        "40% increase in online orders",
        "Streamlined operations across 5 locations",
        "15% increase in customer retention",
        "Reduced order errors by 80%"
      ],
      timeline: "8 weeks",
      year: "2024",
      client: "Mama's Kitchen Ltd",
      website: "#",
      image: projectRestaurant
    },
    {
      id: 3,
      title: "TechPay Kenya",
      category: "Fintech Startup",
      description: "Modern SaaS landing page and dashboard for a Kenyan fintech startup offering digital payment solutions to small businesses.",
      fullDescription: "Designed and developed a modern landing page and user dashboard for TechPay Kenya, a fintech startup providing payment solutions for small businesses. The project included user onboarding, payment processing interfaces, and comprehensive analytics dashboards.",
      technologies: ["React", "TypeScript", "Modern UI/UX", "Payment APIs", "Analytics Dashboard"],
      features: [
        "Modern landing page with conversion optimization",
        "User dashboard with analytics",
        "Payment processing interface",
        "Subscription management",
        "Real-time transaction monitoring",
        "Mobile-first design"
      ],
      results: [
        "500+ business signups in first month",
        "85% user onboarding completion rate",
        "Featured in Kenyan tech publications",
        "Secured seed funding after launch"
      ],
      timeline: "10 weeks",
      year: "2023",
      client: "TechPay Kenya",
      website: "#",
      image: projectFintech
    },
    {
      id: 4,
      title: "Green Gardens Nursery",
      category: "Agriculture & Retail",
      description: "E-commerce website for a plant nursery with inventory management, care guides, and delivery scheduling.",
      fullDescription: "Created an e-commerce platform for Green Gardens Nursery that transformed their local business into an online success. The website features detailed plant care guides, inventory management, and a delivery scheduling system tailored for live plants.",
      technologies: ["WordPress", "WooCommerce", "Custom Features", "Inventory System", "SEO Optimization"],
      features: [
        "Plant catalog with care instructions",
        "Delivery scheduling for live plants",
        "Inventory management system",
        "Plant care blog and guides",
        "Customer plant care reminders",
        "Local SEO optimization"
      ],
      results: [
        "150% increase in sales within 6 months",
        "Expanded customer base beyond Nairobi",
        "Featured in gardening publications",
        "Won local business excellence award"
      ],
      timeline: "4 weeks",
      year: "2023",
      client: "Green Gardens Nursery",
      website: "#"
    },
    {
      id: 5,
      title: "Ochieng & Associates Law Firm",
      category: "Legal Services",
      description: "Professional law firm website with case study showcases, attorney profiles, and client portal for document sharing.",
      fullDescription: "Developed a professional website for Ochieng & Associates that enhanced their credibility and streamlined client communications. The site includes detailed attorney profiles, case studies, and a secure client portal for document sharing.",
      technologies: ["Custom Development", "Secure Client Portal", "Professional Design", "SEO", "Security Features"],
      features: [
        "Attorney profiles and credentials",
        "Case study showcases",
        "Secure client document portal",
        "Appointment scheduling system",
        "Legal blog and resources",
        "Contact forms with encryption"
      ],
      results: [
        "300% increase in online inquiries",
        "Improved professional credibility",
        "Streamlined client onboarding",
        "Higher-value client acquisition"
      ],
      timeline: "5 weeks",
      year: "2023",
      client: "Ochieng & Associates",
      website: "#"
    },
    {
      id: 6,
      title: "Mwangi Fashion House",
      category: "Fashion & E-commerce",
      description: "Beautiful e-commerce platform for a fashion designer with custom sizing, lookbook galleries, and international shipping.",
      fullDescription: "Built a stunning e-commerce platform for Mwangi Fashion House that showcases their unique African-inspired designs. The website features custom sizing options, beautiful lookbook galleries, and international shipping capabilities that helped them expand across East Africa.",
      technologies: ["E-commerce Platform", "Custom Design", "International Shipping", "Size Calculator", "Gallery System"],
      features: [
        "Custom sizing calculator",
        "Lookbook photo galleries",
        "International shipping integration",
        "Fabric and color customization",
        "Style consultation booking",
        "Social media integration"
      ],
      results: [
        "Sales across 3 East African countries",
        "Featured in fashion magazines",
        "400% increase in online revenue",
        "Celebrity customer acquisition"
      ],
      timeline: "7 weeks",
      year: "2024",
      client: "Mwangi Fashion House",
      website: "#"
    },
    {
      id: 7,
      title: "LearnHub Kenya",
      category: "EdTech & Learning",
      description: "Comprehensive e-learning platform for Kenyan students with course management, progress tracking, and interactive content delivery.",
      fullDescription: "Developed a modern e-learning platform for LearnHub Kenya that revolutionized online education delivery. The platform includes course management, student progress tracking, interactive quizzes, and mobile-responsive design optimized for various devices and internet speeds across Kenya.",
      technologies: ["React", "Learning Management System", "Video Streaming", "Progress Tracking", "Mobile Optimization"],
      features: [
        "Course management system",
        "Video streaming with adaptive quality",
        "Interactive quizzes and assignments",
        "Student progress analytics",
        "Mobile-responsive design",
        "Offline content download"
      ],
      results: [
        "2,000+ students enrolled in first 3 months",
        "95% course completion rate",
        "Featured by Kenya Education Ministry",
        "Expanded to 3 universities"
      ],
      timeline: "12 weeks",
      year: "2024",
      client: "LearnHub Kenya",
      website: "#",
      image: projectEdtech
    },
    {
      id: 8,
      title: "Nairobi Medical Center",
      category: "Healthcare & Medical",
      description: "Patient portal and appointment management system for a leading medical center with telemedicine integration and medical records.",
      fullDescription: "Built a comprehensive healthcare platform for Nairobi Medical Center that streamlined patient care and appointment management. The system includes telemedicine capabilities, secure patient records, and integrated billing that improved patient satisfaction and operational efficiency.",
      technologies: ["Healthcare Platform", "Telemedicine", "Secure Records", "Appointment System", "HIPAA Compliance"],
      features: [
        "Online appointment booking",
        "Telemedicine video consultations",
        "Secure patient record management",
        "Prescription management",
        "Insurance integration",
        "SMS appointment reminders"
      ],
      results: [
        "60% reduction in appointment no-shows",
        "40% increase in patient satisfaction",
        "Streamlined operations for 20+ doctors",
        "HIPAA compliant implementation"
      ],
      timeline: "14 weeks",
      year: "2023",
      client: "Nairobi Medical Center",
      website: "#",
      image: projectHealthcare
    }
  ];

  const categories = ["All", "Tourism & Hospitality", "Food & Beverage", "Fintech Startup", "Agriculture & Retail", "Legal Services", "Fashion & E-commerce", "EdTech & Learning", "Healthcare & Medical"];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">180%</div>
              <div className="text-sm text-muted-foreground">Average ROI Increase</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">6</div>
              <div className="text-sm text-muted-foreground">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Featured Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each project tells a story of transformation and growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="card-elevated overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="aspect-video relative overflow-hidden">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                      <Globe className="h-16 w-16 text-accent/40" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {project.category}
                    </Badge>
                  </div>
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
                    <Button variant="outline" size="sm" className="flex-1">
                      View Case Study
                    </Button>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-gradient">
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