import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowLeft, Code, Zap, Shield, Clock, Users, Rocket, X, ShoppingCart, Building2, LayoutGrid, GraduationCap, Heart, Package, UserCog, Plane, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";

const WebDevelopmentPricing = () => {
  const [currency, setCurrency] = useState<string>("KSH");

  const exchangeRates: Record<string, { rate: number; symbol: string }> = {
    KSH: { rate: 1, symbol: "KSH" },
    USD: { rate: 0.0077, symbol: "$" },
    EUR: { rate: 0.0071, symbol: "€" },
    GBP: { rate: 0.0061, symbol: "£" },
  };

  const convertPrice = (kshPrice: number): string => {
    const converted = kshPrice * exchangeRates[currency].rate;
    const symbol = exchangeRates[currency].symbol;
    if (currency === "KSH") {
      return `${symbol} ${kshPrice.toLocaleString()}`;
    }
    return `${symbol}${Math.round(converted).toLocaleString()}`;
  };

  const plans = [
    {
      name: "Starter Website",
      price: 25000,
      description: "Perfect for small businesses and startups getting online",
      features: [
        "5-page responsive website",
        "Mobile-first design",
        "Basic SEO setup",
        "Contact form with email notifications",
        "Social media integration",
        "1 month free maintenance",
        "SSL certificate setup",
        "Google Maps integration"
      ],
      notIncluded: [
        "E-commerce functionality",
        "Custom animations",
        "Database integration",
        "User authentication"
      ],
      deliveryTime: "1-2 weeks",
      popular: false,
      icon: Code
    },
    {
      name: "Business Website",
      price: 50000,
      description: "Comprehensive solution for growing businesses",
      features: [
        "10-page responsive website",
        "Custom UI/UX design",
        "Advanced SEO optimization",
        "Blog/News section with CMS",
        "Google Analytics integration",
        "WhatsApp chat integration",
        "3 months free maintenance",
        "Performance optimization",
        "Custom contact forms",
        "Newsletter signup integration"
      ],
      notIncluded: [
        "E-commerce functionality",
        "Custom API development",
        "User authentication system"
      ],
      deliveryTime: "2-3 weeks",
      popular: true,
      icon: Zap
    },
    {
      name: "Advanced Website",
      price: 85000,
      description: "Feature-rich website for established businesses",
      features: [
        "15+ pages responsive website",
        "Premium custom design",
        "Full SEO package",
        "Content Management System",
        "Advanced animations & interactions",
        "Multi-language support",
        "6 months free maintenance",
        "Priority support",
        "Advanced analytics dashboard",
        "Email marketing integration",
        "Custom forms & workflows"
      ],
      notIncluded: [
        "Full e-commerce store",
        "Custom API development"
      ],
      deliveryTime: "3-4 weeks",
      popular: false,
      icon: Rocket
    },
    {
      name: "Enterprise Solution",
      price: 150000,
      description: "Custom web applications for complex requirements",
      features: [
        "Unlimited pages",
        "Custom web application development",
        "Database design & integration",
        "User authentication & roles",
        "Custom API development",
        "Third-party integrations",
        "Automated workflows",
        "12 months free maintenance",
        "Dedicated project manager",
        "Performance monitoring",
        "Security audits",
        "Technical documentation"
      ],
      notIncluded: [],
      deliveryTime: "6-12 weeks",
      popular: false,
      icon: Shield
    }
  ];

  const customSystems = [
    { icon: ShoppingCart, name: "E-commerce Platform", description: "Online shopping systems with carts & payments", startPrice: 80000 },
    { icon: Building2, name: "POS System", description: "Retail, restaurant, or hotel management", startPrice: 120000 },
    { icon: LayoutGrid, name: "Project Management", description: "Task tracking & team collaboration tools", startPrice: 150000 },
    { icon: GraduationCap, name: "School Management", description: "Student info, grades & learning portals", startPrice: 180000 },
    { icon: Heart, name: "Hospital Management", description: "Patient records, appointments & billing", startPrice: 250000 },
    { icon: Package, name: "Inventory Management", description: "Stock tracking & supply chain logistics", startPrice: 140000 },
    { icon: UserCog, name: "HR Management", description: "Payroll, benefits & performance tracking", startPrice: 160000 },
    { icon: Plane, name: "Flight Booking System", description: "Travel reservations & payment processing", startPrice: 200000 },
    { icon: Landmark, name: "Online Banking System", description: "Accounts, transactions & financial mgmt", startPrice: 300000 },
  ];

  const addons = [
    { name: "Additional Pages", price: 3000, unit: "per page" },
    { name: "Custom Illustrations", price: 8000, unit: "set of 5" },
    { name: "Video Integration", price: 5000, unit: "per video" },
    { name: "Live Chat Integration", price: 7000, unit: "one-time" },
    { name: "Advanced Analytics", price: 10000, unit: "one-time" },
    { name: "Speed Optimization", price: 12000, unit: "one-time" }
  ];

  const faqs = [
    {
      question: "What technologies do you use for web development?",
      answer: "We use modern technologies including React, Next.js, TypeScript, Node.js, and various CMS platforms like WordPress. Our choice depends on your specific needs and requirements."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Project timelines vary based on complexity. A starter website takes 1-2 weeks, while enterprise solutions can take 6-12 weeks. We provide detailed timelines during consultation."
    },
    {
      question: "Do you provide website hosting?",
      answer: "We provide hosting setup and recommendations. We can set up your website on reliable hosting platforms like Vercel, Netlify, or traditional hosting providers based on your needs."
    },
    {
      question: "What is included in the maintenance package?",
      answer: "Maintenance includes security updates, bug fixes, content updates (limited), performance monitoring, and regular backups. Extended maintenance can be purchased separately."
    },
    {
      question: "Can I update the website content myself?",
      answer: "Yes! All our Business and higher plans include a Content Management System (CMS) that allows you to easily update text, images, and content without technical knowledge."
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", path: "/services" },
            { label: "Web Development", path: "/services/web-development" },
            { label: "Pricing" }
          ]} />

          <div className="mb-8">
            <Button variant="outline" size="sm" asChild>
              <Link to="/services/web-development" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Web Development
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Code className="w-3 h-3 mr-1" />
              Web Development
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Web Development Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Custom, scalable websites built with modern technologies. 
              From simple landing pages to complex web applications.
            </p>

            {/* Currency Selector */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-md">
                <span className="text-sm font-medium text-foreground">View prices in:</span>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="KSH">KSH</SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="GBP">GBP</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-accent" />
                Fast Delivery
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-accent" />
                Dedicated Support
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-accent" />
                Secure & Reliable
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={`relative h-full flex flex-col hover:shadow-xl transition-all duration-300 ${plan.popular ? 'border-accent shadow-lg ring-2 ring-accent/20' : ''}`}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-accent text-accent-foreground">
                          <Star className="w-3 h-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center pb-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-3xl font-bold text-accent">{convertPrice(plan.price)}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                      <Badge variant="outline" className="mt-2">
                        <Clock className="w-3 h-3 mr-1" />
                        {plan.deliveryTime}
                      </Badge>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground mb-3">What's included:</p>
                        <ul className="space-y-2 mb-4">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {plan.notIncluded.length > 0 && (
                          <>
                            <p className="text-sm font-semibold text-muted-foreground mb-2">Not included:</p>
                            <ul className="space-y-1 mb-4">
                              {plan.notIncluded.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <X className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>

                      <Button 
                        className="w-full mt-4" 
                        variant={plan.popular ? "default" : "outline"}
                        asChild
                      >
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom System Design Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Shield className="w-3 h-3 mr-1" />
              Enterprise Solutions
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">Custom System Design</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We build comprehensive business systems tailored to your specific domain. Each system includes full database design, 
              user management, reporting, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {customSystems.map((system, index) => {
              const IconComponent = system.icon;
              return (
                <motion.div
                  key={system.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group border-2 hover:border-accent">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          From {convertPrice(system.startPrice)}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg mt-3">{system.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">{system.description}</p>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-card rounded-2xl p-8 border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold mb-3">Need a Different System?</h3>
                <p className="text-muted-foreground mb-4">
                  We can build any custom business system you need. Tell us about your requirements 
                  and we'll provide a detailed proposal with timeline and pricing.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    Custom database architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    API development & integrations
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    User roles & permissions
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent" />
                    Reports & analytics dashboards
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Starting from</p>
                <p className="text-4xl font-bold text-accent mb-4">{convertPrice(100000)}</p>
                <Button size="lg" asChild>
                  <Link to="/contact">Request Custom Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Optional Add-ons</h2>
            <p className="text-muted-foreground">Enhance your website with these additional features</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-foreground">{addon.name}</h3>
                      <p className="text-sm text-muted-foreground">{addon.unit}</p>
                    </div>
                    <span className="text-lg font-bold text-accent">{convertPrice(addon.price)}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Common questions about our web development services</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-card rounded-lg border px-4">
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get a free consultation and custom quote for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebDevelopmentPricing;
