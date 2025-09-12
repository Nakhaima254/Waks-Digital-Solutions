import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Users, 
  Award,
  Heart,
  Target,
  Lightbulb,
  ArrowRight,
  MapPin,
  Calendar,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import aboutTeamImage from "@/assets/about-team.jpg";

const About = () => {
  const skills = [
    { name: "Web Development", level: 95, icon: Code },
    { name: "UI/UX Design", level: 90, icon: Palette },
    { name: "WordPress", level: 92, icon: Code },
    { name: "E-commerce", level: 88, icon: Code },
    { name: "SEO Optimization", level: 85, icon: Target },
    { name: "Graphic Design", level: 87, icon: Palette }
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-Centered Approach",
      description: "Your success is our priority. We listen, understand, and deliver solutions that truly meet your business needs."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every website we build is designed to achieve your business goals, whether that's more sales, leads, or brand awareness."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Quality",
      description: "We stay current with the latest web technologies and design trends to give you a competitive edge."
    },
    {
      icon: Users,
      title: "Partnership Mentality",
      description: "We're not just a service provider - we're your digital growth partner, invested in your long-term success."
    }
  ];

  const timeline = [
    {
      year: "2021",
      title: "Founded Waks Digital Solutions",
      description: "Started with a vision to help Kenyan SMEs succeed online with professional web solutions."
    },
    {
      year: "2022",
      title: "Expanded Service Offerings",
      description: "Added e-commerce solutions and SEO services to help clients grow their online presence."
    },
    {
      year: "2023",
      title: "50+ Projects Milestone",
      description: "Completed 50+ successful projects across various industries in Kenya."
    },
    {
      year: "2024",
      title: "Team Growth & Recognition",
      description: "Expanded team and received recognition as a leading web development agency in Nairobi."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 section-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutTeamImage} 
            alt="Our Team" 
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-foreground space-y-6">
              <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30">
                About Waks Digital Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                Building Digital
                <span className="block text-accent">Success Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're a Nairobi-based web development and design agency passionate about helping 
                small to medium businesses thrive in the digital world. Every project we take on 
                is an opportunity to create something meaningful.
              </p>
            </div>
            
            <div className="relative">
              <Card className="card-elevated p-8 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-hover rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">Client-First Philosophy</h3>
                      <p className="text-white/80">Your success drives everything we do</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">50+</div>
                      <div className="text-sm text-white/80">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">3+</div>
                      <div className="text-sm text-white/80">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">100%</div>
                      <div className="text-sm text-white/80">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Meet the Founder</h2>
                <p className="text-xl text-muted-foreground">
                  Building bridges between traditional Kenyan businesses and the digital world
                </p>
              </div>
              
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  Hello! I'm the founder of Waks Digital Solutions, and I'm passionate about helping 
                  Kenyan businesses succeed online. With over 3 years of experience in web development 
                  and graphic design, I've had the privilege of working with amazing businesses across 
                  various industries.
                </p>
                <p>
                  What started as a freelance graphic design service has evolved into a full-service 
                  digital agency. I realized that many Kenyan SMEs needed more than just beautiful 
                  designs - they needed complete digital solutions that could drive real business growth.
                </p>
                <p>
                  Today, I'm proud to lead a team that shares my vision of making professional web 
                  development accessible to businesses of all sizes. Every project we take on is an 
                  opportunity to make a meaningful impact on someone's business and livelihood.
                </p>
              </div>

              <div className="flex items-center space-x-4 pt-4">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-foreground">Based in Nairobi, Kenya</span>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="card-elevated p-6">
                <h3 className="text-xl font-semibold text-primary mb-6">Skills & Expertise</h3>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <skill.icon className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-accent to-accent-hover h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Mission & Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              What drives us and guides every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <Card key={index} className="card-elevated p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-hover rounded-xl flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="card-elevated p-8 text-center">
            <div className="space-y-6">
              <Award className="h-16 w-16 text-accent mx-auto" />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
                  To empower Kenyan small and medium businesses with professional, 
                  results-driven digital solutions that fuel growth, increase visibility, 
                  and create lasting success in the digital economy.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              How we've grown and evolved to better serve our clients
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent-hover rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
                <Card className="card-elevated p-6 flex-1">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Badge variant="outline">{item.year}</Badge>
                      <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you're a startup with big dreams or an established business ready to grow online, 
              we're here to help you succeed. Let's start building your digital success story today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="hero" asChild>
                <Link to="/contact">
                  Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="hero" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;