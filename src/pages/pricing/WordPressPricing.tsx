import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowLeft, Paintbrush, Zap, Shield, Clock, Users, Settings, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";

const WordPressPricing = () => {
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
      name: "WordPress Basic",
      price: 20000,
      description: "Simple WordPress website for personal or small business use",
      features: [
        "5-page WordPress website",
        "Premium theme customization",
        "Mobile responsive design",
        "Basic SEO setup",
        "Contact form plugin",
        "Social media integration",
        "1 month free support",
        "WordPress training session"
      ],
      notIncluded: [
        "WooCommerce setup",
        "Custom plugin development",
        "Multilingual setup"
      ],
      deliveryTime: "5-7 days",
      popular: false,
      icon: Paintbrush
    },
    {
      name: "WordPress Professional",
      price: 40000,
      description: "Full-featured WordPress site for growing businesses",
      features: [
        "10-page WordPress website",
        "Custom theme design",
        "Advanced SEO with Yoast",
        "Blog with categories",
        "Image gallery & sliders",
        "Newsletter integration",
        "3 months free support",
        "Security plugins setup",
        "Performance optimization",
        "Backup system setup"
      ],
      notIncluded: [
        "E-commerce functionality",
        "Custom plugin development"
      ],
      deliveryTime: "1-2 weeks",
      popular: true,
      icon: Zap
    },
    {
      name: "WordPress Business",
      price: 65000,
      description: "Advanced WordPress solution with custom features",
      features: [
        "15+ pages WordPress website",
        "Premium custom design",
        "Full SEO optimization",
        "Advanced blog system",
        "Booking/Appointment system",
        "Multi-author support",
        "Membership area (basic)",
        "6 months free support",
        "CDN integration",
        "Advanced caching",
        "Security hardening"
      ],
      notIncluded: [
        "Full e-commerce store"
      ],
      deliveryTime: "2-3 weeks",
      popular: false,
      icon: Settings
    },
    {
      name: "WordPress Enterprise",
      price: 100000,
      description: "Enterprise-grade WordPress with custom development",
      features: [
        "Unlimited pages",
        "Custom theme development",
        "Custom plugin development",
        "Multisite network setup",
        "Advanced membership system",
        "LMS integration",
        "API integrations",
        "12 months free support",
        "Dedicated server setup",
        "White-label admin",
        "Advanced security audit"
      ],
      notIncluded: [],
      deliveryTime: "4-8 weeks",
      popular: false,
      icon: Shield
    }
  ];

  const addons = [
    { name: "WooCommerce Setup", price: 15000, unit: "basic store" },
    { name: "Custom Plugin", price: 20000, unit: "per plugin" },
    { name: "Multilingual (WPML)", price: 12000, unit: "per language" },
    { name: "Page Builder Pro", price: 5000, unit: "one-time" },
    { name: "Premium Theme License", price: 8000, unit: "one-time" },
    { name: "Monthly Maintenance", price: 5000, unit: "per month" }
  ];

  const faqs = [
    {
      question: "Why should I choose WordPress?",
      answer: "WordPress powers over 40% of all websites. It's user-friendly, SEO-friendly, highly customizable, and has thousands of plugins and themes. It's perfect for businesses that want to manage their own content."
    },
    {
      question: "Can I update the website myself after it's built?",
      answer: "Absolutely! WordPress is designed for easy content management. We provide training and documentation so you can update text, images, and even add new pages yourself."
    },
    {
      question: "Do you provide hosting for WordPress sites?",
      answer: "We can set up hosting on recommended WordPress-optimized hosts like SiteGround, Kinsta, or WP Engine. Hosting costs are separate and typically range from KSH 3,000-15,000/year."
    },
    {
      question: "What about security and updates?",
      answer: "We set up security plugins, SSL certificates, and configure automatic updates. Our maintenance plans include regular security monitoring and updates to keep your site safe."
    },
    {
      question: "Can you migrate my existing WordPress site?",
      answer: "Yes! We offer WordPress migration services. We'll move your site safely, including all content, plugins, and settings, with zero downtime."
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Services", path: "/services" },
            { label: "WordPress Design", path: "/services/wordpress-design" },
            { label: "Pricing" }
          ]} />
          <div className="mb-8">
            <Button variant="outline" size="sm" asChild>
              <Link to="/services/wordpress-design" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to WordPress Design
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-blue-500/10 text-blue-600 border-blue-500/20">
              <Paintbrush className="w-3 h-3 mr-1" />
              WordPress Design
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              WordPress Design Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Professional WordPress websites with easy content management.
              Perfect for businesses that want control over their content.
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
                Quick Setup
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-accent" />
                Easy Management
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

      {/* Add-ons Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">WordPress Add-ons</h2>
            <p className="text-muted-foreground">Extend your WordPress site with additional features</p>
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
            <p className="text-muted-foreground">Common questions about WordPress development</p>
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
            Ready for Your WordPress Site?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get a free consultation and see how WordPress can work for your business
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

export default WordPressPricing;
