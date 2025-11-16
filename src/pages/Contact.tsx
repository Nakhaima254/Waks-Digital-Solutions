import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Calendar,
  Globe,
  Star,
  CheckCircle2
} from "lucide-react";
import contactHeroImage from "@/assets/contact-hero.jpg";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get a response within 24 hours",
      contact: "info@waksdigital.co.ke",
      action: "mailto:info@waksdigital.co.ke"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with us directly",
      contact: "+254 718 098 165",
      action: "tel:+254718098165"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick questions and updates",
      contact: "+254 746 388 308",
      action: "https://wa.me/254746388308"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Most websites take 2-6 weeks depending on complexity. Simple WordPress sites can be ready in 1-2 weeks, while custom e-commerce solutions may take 6-8 weeks."
    },
    {
      question: "Do you provide website maintenance?",
      answer: "Yes! We offer ongoing maintenance packages that include security updates, backups, content updates, and performance monitoring to keep your site running smoothly."
    },
    {
      question: "Can you help improve my existing website?",
      answer: "Absolutely! We can redesign, optimize, add new features, or completely rebuild your existing website to improve performance and user experience."
    },
    {
      question: "Do you work with businesses outside Nairobi?",
      answer: "Yes, we work with clients across Kenya and East Africa. Most of our communication is done online, and we can arrange in-person meetings when necessary."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      description: "We discuss your business goals, requirements, and timeline"
    },
    {
      step: "2", 
      title: "Proposal & Planning",
      description: "Detailed project proposal with timeline, pricing, and mockups"
    },
    {
      step: "3",
      title: "Development",
      description: "We build your website with regular updates and feedback sessions"
    },
    {
      step: "4",
      title: "Launch & Support",
      description: "Go live and receive training plus ongoing support"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 section-hero overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={contactHeroImage} 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30">
              Let's Start Building
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-black/90 dark:text-white leading-tight">
              Ready to Grow
              <span className="block gradient-text">Your Business Online?</span>
            </h1>
            <p className="text-xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
              Get in touch today for a free consultation. We'll discuss your goals, answer your questions, 
              and create a custom proposal for your digital success.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Choose the best way to reach us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-elevated p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-hover rounded-xl flex items-center justify-center mx-auto">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-primary">{method.title}</h3>
                    <p className="text-muted-foreground text-sm">{method.description}</p>
                    <a 
                      href={method.action}
                      className="text-accent hover:text-accent-hover font-medium transition-colors block"
                    >
                      {method.contact}
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-elevated p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-primary">Send Us a Message</h3>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name *</label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name *</label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input id="phone" placeholder="+254 700 123 456" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-foreground">Company/Business Name</label>
                    <Input id="company" placeholder="Your business name" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="projectType" className="text-sm font-medium text-foreground">Project Type</label>
                    <select 
                      id="projectType"
                      className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select project type</option>
                      <option value="new-website">New Website</option>
                      <option value="website-redesign">Website Redesign</option>
                      <option value="ecommerce">E-commerce Store</option>
                      <option value="maintenance">Website Maintenance</option>
                      <option value="seo">SEO Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium text-foreground">Budget Range</label>
                    <select 
                      id="budget"
                      className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select budget range</option>
                      <option value="25k-50k">KES 25,000 - 50,000</option>
                      <option value="50k-100k">KES 50,000 - 100,000</option>
                      <option value="100k-200k">KES 100,000 - 200,000</option>
                      <option value="200k+">KES 200,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Project Details *</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button variant="hero" size="lg" className="w-full">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </Card>

            {/* Business Info & Process */}
            <div className="space-y-8">
              {/* Business Info */}
              <Card className="card-elevated p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary">Our Office</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground">Location</div>
                        <div className="text-muted-foreground">Nairobi, Kenya</div>
                        <div className="text-sm text-muted-foreground">Serving clients across East Africa</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground">Business Hours</div>
                        <div className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</div>
                        <div className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</div>
                        <div className="text-sm text-muted-foreground">EAT (UTC+3)</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Globe className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-medium text-foreground">Response Time</div>
                        <div className="text-muted-foreground">Within 24 hours</div>
                        <div className="text-sm text-muted-foreground">Usually much faster!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Process */}
              <Card className="card-elevated p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-primary">Our Process</h3>
                  
                  <div className="space-y-4">
                    {process.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-accent to-accent-hover rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">{step.step}</span>
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{step.title}</div>
                          <div className="text-muted-foreground text-sm">{step.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="card-elevated p-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Have a different question? We're here to help.
            </p>
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Ask Your Question
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;