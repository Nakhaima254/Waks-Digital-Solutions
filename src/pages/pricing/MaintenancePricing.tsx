import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowLeft, Wrench, Zap, Shield, Clock, RefreshCw, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const MaintenancePricing = () => {
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
      name: "Basic Care",
      price: 5000,
      priceType: "per month",
      description: "Essential maintenance for small websites",
      features: [
        "Security updates",
        "Plugin/software updates",
        "Weekly backups",
        "Uptime monitoring",
        "Basic security scanning",
        "Email support",
        "Monthly health report"
      ],
      notIncluded: [
        "Content updates",
        "Design changes",
        "Priority support"
      ],
      responseTime: "48 hours",
      popular: false,
      icon: Wrench
    },
    {
      name: "Professional Care",
      price: 10000,
      priceType: "per month",
      description: "Comprehensive care for business websites",
      features: [
        "Everything in Basic Care",
        "Daily backups",
        "2 hours content updates",
        "Performance optimization",
        "Advanced security monitoring",
        "Malware scanning & removal",
        "Phone & email support",
        "Bi-weekly reports"
      ],
      notIncluded: [
        "Major design changes",
        "New feature development"
      ],
      responseTime: "24 hours",
      popular: true,
      icon: Zap
    },
    {
      name: "Business Care",
      price: 20000,
      priceType: "per month",
      description: "Premium maintenance for critical websites",
      features: [
        "Everything in Professional Care",
        "Real-time backups",
        "4 hours content updates",
        "Minor design changes",
        "Speed optimization",
        "CDN management",
        "SSL management",
        "Priority support",
        "Weekly reports",
        "Analytics monitoring"
      ],
      notIncluded: [
        "Major redesigns"
      ],
      responseTime: "4 hours",
      popular: false,
      icon: Shield
    },
    {
      name: "Enterprise Care",
      price: 40000,
      priceType: "per month",
      description: "White-glove service for mission-critical sites",
      features: [
        "Everything in Business Care",
        "Unlimited content updates",
        "Design modifications",
        "Feature enhancements",
        "Load testing",
        "Disaster recovery plan",
        "Dedicated account manager",
        "24/7 emergency support",
        "Custom reporting",
        "SLA guarantee"
      ],
      notIncluded: [],
      responseTime: "1 hour",
      popular: false,
      icon: Headphones
    }
  ];

  const addons = [
    { name: "Emergency Support", price: 5000, unit: "per incident" },
    { name: "Extra Content Hours", price: 2000, unit: "per hour" },
    { name: "Website Migration", price: 15000, unit: "one-time" },
    { name: "Performance Audit", price: 10000, unit: "one-time" },
    { name: "Security Hardening", price: 15000, unit: "one-time" },
    { name: "Custom Development", price: 3000, unit: "per hour" }
  ];

  const faqs = [
    {
      question: "What happens if my site goes down?",
      answer: "We monitor your site 24/7. If there's an issue, we're alerted immediately and work to restore your site. Enterprise clients get guaranteed response times and 24/7 emergency support."
    },
    {
      question: "Are backups stored securely?",
      answer: "Yes, backups are stored in multiple secure locations separate from your hosting. We use encrypted, redundant storage to ensure your data is always safe and recoverable."
    },
    {
      question: "What counts as a 'content update'?",
      answer: "Content updates include text changes, image replacements, adding new pages, updating product information, and similar tasks. Major structural changes or new features are considered development work."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle."
    },
    {
      question: "Do you support e-commerce sites?",
      answer: "Absolutely! We maintain WooCommerce, Shopify, and custom e-commerce sites. E-commerce sites on Business Care or higher include order monitoring and payment gateway checks."
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-500/10 via-background to-teal-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="outline" size="sm" asChild>
              <Link to="/services/web-maintenance" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Web Maintenance
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-cyan-500/10 text-cyan-600 border-cyan-500/20">
              <Wrench className="w-3 h-3 mr-1" />
              Web Maintenance
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Maintenance Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Keep your website secure, fast, and up-to-date with our
              comprehensive maintenance plans.
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
                <Shield className="w-4 h-4 text-accent" />
                Security First
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <RefreshCw className="w-4 h-4 text-accent" />
                Regular Updates
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Headphones className="w-4 h-4 text-accent" />
                Expert Support
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
                        <span className="text-sm text-muted-foreground">/{plan.priceType}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                      <Badge variant="outline" className="mt-2">
                        <Clock className="w-3 h-3 mr-1" />
                        Response: {plan.responseTime}
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
                                  <span className="w-4 h-4 flex items-center justify-center">—</span>
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

      {/* Add-ons Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Maintenance Add-ons</h2>
            <p className="text-muted-foreground">Additional services when you need them</p>
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
            <p className="text-muted-foreground">Common questions about our maintenance services</p>
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
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Keep Your Website Running Smoothly
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join businesses that trust us to maintain their online presence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
              <Link to="/services">All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MaintenancePricing;
