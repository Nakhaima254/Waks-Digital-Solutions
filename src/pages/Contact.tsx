import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  CheckCircle2,
  ArrowRight,
  ArrowLeft
} from "lucide-react";
import contactHeroImage from "@/assets/contact-hero.jpg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedElement, StaggerContainer, StaggerItem, HoverCard } from "@/components/AnimatedElement";
import { motion } from "framer-motion";

const formSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100, "First name must be less than 100 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(100, "Last name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone number must be less than 20 characters").optional(),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      budget: "",
      message: "",
    },
    mode: "onChange", // Enable real-time validation
  });

  const validateStep1 = async () => {
    const fieldsToValidate = ['firstName', 'lastName', 'email'] as const;
    const result = await form.trigger(fieldsToValidate);
    return result;
  };

  const handleNext = async () => {
    const isValid = await validateStep1();
    if (isValid) {
      setCurrentStep(2);
    }
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = (data: FormData) => {
    const email = 'info@waksdigital.co.ke';
    const subject = `New Contact Form: ${data.projectType}`;
    const body = `
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
Company: ${data.company || 'N/A'}
Project Type: ${data.projectType}
Budget: ${data.budget || 'Not specified'}

Message:
${data.message}
    `.trim();
    
    toast({
      title: "✓ Message Ready to Send!",
      description: "Your email client will open with your message pre-filled. We'll respond within 24 hours.",
      duration: 5000,
    });
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    form.reset();
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
      contact: "+254 750 509 252",
      action: "tel:+254750509252"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick questions and updates",
      contact: "+254 750 509 252",
      action: "https://wa.me/254750509252"
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
          <AnimatedElement animation="fadeUp" className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">
              Choose the best way to reach us
            </p>
          </AnimatedElement>

          <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-16" staggerDelay={0.15}>
            {contactMethods.map((method, index) => (
              <StaggerItem key={index}>
                <HoverCard>
                  <Card className="card-elevated p-6 text-center h-full">
                    <div className="space-y-4">
                      <motion.div 
                        className="w-16 h-16 bg-gradient-to-r from-accent to-accent-hover rounded-xl flex items-center justify-center mx-auto"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <method.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-primary">{method.title}</h3>
                        <p className="text-muted-foreground text-sm">{method.description}</p>
                        <motion.a 
                          href={method.action}
                          className="text-accent hover:text-accent-hover font-medium transition-colors block"
                          whileHover={{ scale: 1.05 }}
                        >
                          {method.contact}
                        </motion.a>
                      </div>
                    </div>
                  </Card>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

            {/* Contact Form & Info */}
            <div className="grid lg:grid-cols-2 gap-12" id="contact-form">
              {/* Contact Form */}
              <Card className="card-elevated p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">Send Us a Message</h3>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className={cn("font-medium", currentStep === 1 ? "text-accent" : "text-muted-foreground")}>
                        Step 1: Personal Info
                      </span>
                      <span className={cn("font-medium", currentStep === 2 ? "text-accent" : "text-muted-foreground")}>
                        Step 2: Project Details
                      </span>
                    </div>
                    <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent to-accent-hover transition-all duration-500 ease-in-out rounded-full"
                        style={{ width: `${(currentStep / 2) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{currentStep === 1 ? "Let's get to know you" : "Almost done!"}</span>
                      <span>{currentStep}/2</span>
                    </div>
                  </div>

                  <Form {...form}>
                    <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
                      {/* Step 1: Personal Information */}
                      {currentStep === 1 && (
                        <div className="space-y-6 animate-fade-in">
                          <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="firstName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>First Name *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="lastName"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Last Name *</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Doe" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
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
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company/Business Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Your business name" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button 
                            type="button" 
                            variant="hero" 
                            size="lg" 
                            className="w-full"
                            onClick={handleNext}
                          >
                            Continue to Project Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      )}

                      {/* Step 2: Project Details */}
                      {currentStep === 2 && (
                        <div className="space-y-6 animate-fade-in">
                          <FormField
                            control={form.control}
                            name="projectType"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Project Type *</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select project type" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="new-website">New Website</SelectItem>
                                    <SelectItem value="website-redesign">Website Redesign</SelectItem>
                                    <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                                    <SelectItem value="maintenance">Website Maintenance</SelectItem>
                                    <SelectItem value="seo">SEO Services</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Budget Range</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select budget range" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="25k-50k">KES 25,000 - 50,000</SelectItem>
                                    <SelectItem value="50k-100k">KES 50,000 - 100,000</SelectItem>
                                    <SelectItem value="100k-200k">KES 100,000 - 200,000</SelectItem>
                                    <SelectItem value="200k+">KES 200,000+</SelectItem>
                                    <SelectItem value="discuss">Let's discuss</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Project Details *</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                                    rows={6}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <div className="flex gap-4">
                            <Button 
                              type="button" 
                              variant="outline" 
                              size="lg" 
                              className="flex-1"
                              onClick={handleBack}
                            >
                              <ArrowLeft className="mr-2 h-4 w-4" />
                              Back
                            </Button>
                            <Button 
                              type="submit" 
                              variant="hero" 
                              size="lg" 
                              className="flex-1"
                            >
                              Send Message
                              <Send className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </form>
                  </Form>
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

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="card-elevated border-0 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5 transition-colors">
                  <span className="text-lg font-semibold text-primary text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Have a different question? We're here to help.
            </p>
            <Button variant="outline" size="lg" onClick={scrollToForm}>
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