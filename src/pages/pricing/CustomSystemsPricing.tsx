import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft, Clock, Users, Shield, Layers, ShoppingCart, Building2, LayoutGrid, GraduationCap, Heart, Package, UserCog, Plane, Landmark, Zap, Database, Code, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";

const CustomSystemsPricing = () => {
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

  const customSystems = [
    { 
      icon: ShoppingCart, 
      name: "E-commerce Platform", 
      description: "Complete online shopping systems with product catalogs, shopping carts, secure payment processing, and order management",
      startPrice: 80000,
      features: ["Product catalog management", "Shopping cart & checkout", "Payment gateway integration", "Order tracking", "Inventory sync", "Customer accounts"],
      timeline: "4-8 weeks"
    },
    { 
      icon: Building2, 
      name: "POS System", 
      description: "Point of sale systems for retail, restaurant, or hotel management with real-time inventory and sales tracking",
      startPrice: 120000,
      features: ["Sales processing", "Inventory management", "Employee management", "Receipt printing", "Daily reports", "Multi-location support"],
      timeline: "6-10 weeks"
    },
    { 
      icon: LayoutGrid, 
      name: "Project Management", 
      description: "Task tracking and team collaboration tools with timelines, resource allocation, and progress monitoring",
      startPrice: 150000,
      features: ["Task management", "Team collaboration", "Gantt charts", "Time tracking", "Resource allocation", "Progress reports"],
      timeline: "8-12 weeks"
    },
    { 
      icon: GraduationCap, 
      name: "School Management", 
      description: "Comprehensive student information systems including grades, attendance, learning portals, and parent communication",
      startPrice: 180000,
      features: ["Student records", "Grade management", "Attendance tracking", "Timetable management", "Parent portal", "Fee management"],
      timeline: "10-14 weeks"
    },
    { 
      icon: Heart, 
      name: "Hospital Management", 
      description: "Patient record management, appointment scheduling, billing systems, and medical inventory tracking",
      startPrice: 250000,
      features: ["Patient records (EMR)", "Appointment scheduling", "Billing & invoicing", "Pharmacy management", "Lab integration", "Insurance processing"],
      timeline: "12-16 weeks"
    },
    { 
      icon: Package, 
      name: "Inventory Management", 
      description: "Stock tracking, supply chain logistics, automated reordering, and warehouse management solutions",
      startPrice: 140000,
      features: ["Stock tracking", "Barcode scanning", "Supplier management", "Purchase orders", "Stock alerts", "Multi-warehouse"],
      timeline: "6-10 weeks"
    },
    { 
      icon: UserCog, 
      name: "HR Management", 
      description: "Complete HR solutions including payroll processing, benefits administration, and performance tracking",
      startPrice: 160000,
      features: ["Employee database", "Payroll processing", "Leave management", "Performance reviews", "Recruitment", "Training tracking"],
      timeline: "8-12 weeks"
    },
    { 
      icon: Plane, 
      name: "Flight Booking System", 
      description: "Travel reservation platforms with flight search, seat selection, and secure payment processing",
      startPrice: 200000,
      features: ["Flight search", "Seat selection", "Booking management", "Payment processing", "E-tickets", "Cancellation handling"],
      timeline: "10-14 weeks"
    },
    { 
      icon: Landmark, 
      name: "Online Banking System", 
      description: "Secure financial platforms for account management, transactions, and comprehensive financial reporting",
      startPrice: 300000,
      features: ["Account management", "Fund transfers", "Transaction history", "Bill payments", "Security features", "Financial reports"],
      timeline: "14-20 weeks"
    },
  ];

  const includedFeatures = [
    { icon: Database, title: "Custom Database Design", description: "Optimized schema tailored to your business logic" },
    { icon: Shield, title: "User Authentication", description: "Secure login with role-based access control" },
    { icon: Code, title: "API Development", description: "RESTful APIs for integrations and mobile apps" },
    { icon: Settings, title: "Admin Dashboard", description: "Full control panel for system management" },
    { icon: Zap, title: "Performance Optimized", description: "Fast, scalable architecture for growth" },
    { icon: Users, title: "Training & Support", description: "User training and ongoing technical support" },
  ];

  const faqs = [
    {
      question: "How do you determine the final price for a custom system?",
      answer: "The starting prices are baseline estimates. Final pricing depends on specific features, complexity, integrations required, and customization level. We provide detailed quotes after understanding your requirements."
    },
    {
      question: "What technologies do you use for custom systems?",
      answer: "We use modern, scalable technologies including React, Next.js, Node.js, PostgreSQL, and cloud services. Technology choice is based on your specific needs and scalability requirements."
    },
    {
      question: "Do you provide ongoing support after deployment?",
      answer: "Yes! All custom systems include 3-6 months of free support depending on the package. We also offer extended maintenance plans for long-term support and updates."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Absolutely. We specialize in building systems that integrate with your existing software, third-party APIs, and legacy systems. Integration requirements are assessed during consultation."
    },
    {
      question: "How long does it take to build a custom system?",
      answer: "Timelines vary by complexity. Simple systems take 4-8 weeks, while complex enterprise solutions can take 14-20 weeks. We provide detailed timelines during the proposal phase."
    },
    {
      question: "Do you offer payment plans for larger projects?",
      answer: "Yes, we offer flexible payment plans for projects above KES 100,000. Typically 40% upfront, 30% at midpoint, and 30% on completion. Custom arrangements can be discussed."
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", path: "/services" },
            { label: "Custom Systems", path: "/services/custom-systems" },
            { label: "Pricing" }
          ]} />

          <div className="mb-8">
            <Button variant="outline" size="sm" asChild>
              <Link to="/services/custom-systems" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Custom Systems
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
              <Layers className="w-3 h-3 mr-1" />
              Custom Systems
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Custom Systems Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Tailored business solutions built for your specific needs. 
              From e-commerce platforms to enterprise management systems.
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
                Custom Timelines
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-accent" />
                Dedicated Team
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-accent" />
                Enterprise Security
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Systems Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customSystems.map((system, index) => {
              const IconComponent = system.icon;
              return (
                <motion.div
                  key={system.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="h-full flex flex-col hover:shadow-xl transition-all duration-300 group border-2 hover:border-accent">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <IconComponent className="w-7 h-7 text-accent" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {system.timeline}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{system.name}</CardTitle>
                      <div className="mt-2">
                        <span className="text-sm text-muted-foreground">Starting from</span>
                        <div className="text-2xl font-bold text-accent">{convertPrice(system.startPrice)}</div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-muted-foreground text-sm mb-4">{system.description}</p>
                      
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-foreground mb-2">Key Features:</p>
                        <ul className="space-y-1.5 mb-4">
                          {system.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="w-full mt-4" asChild>
                        <Link to="/contact">Request Quote</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
              <Check className="w-3 h-3 mr-1" />
              Included in All Systems
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">What's Included</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every custom system we build includes these essential components to ensure 
              a complete, secure, and scalable solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Need Different System */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-accent/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                    <Layers className="w-3 h-3 mr-1" />
                    Custom Solutions
                  </Badge>
                  <h3 className="text-2xl font-bold mb-3">Need a Different System?</h3>
                  <p className="text-muted-foreground mb-4">
                    Don't see your industry or specific requirements listed? We can build any 
                    custom business system you need. Tell us about your requirements and we'll 
                    provide a detailed proposal.
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
                      Scalable cloud deployment
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <Button size="lg" className="w-full" asChild>
                    <Link to="/contact">Discuss Your Project</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <Link to="/services/custom-systems">View Case Studies</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Common questions about our custom system development services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Build Your Custom System?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your requirements and create a solution tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CustomSystemsPricing;
