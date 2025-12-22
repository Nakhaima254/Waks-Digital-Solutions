import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowLeft, Search, Zap, TrendingUp, Clock, BarChart3, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const SEOPricing = () => {
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
      name: "SEO Audit",
      price: 15000,
      priceType: "one-time",
      description: "Comprehensive analysis of your website's SEO health",
      features: [
        "Complete website audit",
        "Keyword analysis",
        "Competitor analysis",
        "Technical SEO review",
        "Content gap analysis",
        "Backlink profile review",
        "Detailed report",
        "Actionable recommendations"
      ],
      notIncluded: [
        "Ongoing optimization",
        "Content creation",
        "Link building"
      ],
      deliveryTime: "3-5 days",
      popular: false,
      icon: Search
    },
    {
      name: "Local SEO",
      price: 20000,
      priceType: "per month",
      description: "Dominate local search results in your area",
      features: [
        "Google My Business optimization",
        "Local keyword targeting",
        "NAP consistency audit",
        "Local directory submissions",
        "Review management strategy",
        "Local content optimization",
        "Monthly reporting",
        "Local link building"
      ],
      notIncluded: [
        "National/international SEO",
        "Advanced content marketing"
      ],
      deliveryTime: "Ongoing",
      popular: false,
      icon: Target
    },
    {
      name: "Growth SEO",
      price: 35000,
      priceType: "per month",
      description: "Complete SEO package for growing businesses",
      features: [
        "Everything in Local SEO",
        "On-page optimization",
        "Technical SEO fixes",
        "Content optimization",
        "2 blog posts per month",
        "Quality link building",
        "Schema markup",
        "Core Web Vitals optimization",
        "Bi-weekly reporting",
        "Competitor monitoring"
      ],
      notIncluded: [
        "Enterprise-level campaigns"
      ],
      deliveryTime: "Ongoing",
      popular: true,
      icon: TrendingUp
    },
    {
      name: "Enterprise SEO",
      price: 75000,
      priceType: "per month",
      description: "Advanced SEO for large-scale operations",
      features: [
        "Everything in Growth SEO",
        "Advanced keyword strategy",
        "4 blog posts per month",
        "Premium link building",
        "Technical SEO overhaul",
        "International SEO support",
        "E-commerce SEO",
        "Weekly reporting",
        "Dedicated SEO manager",
        "Custom analytics dashboard",
        "Quarterly strategy reviews"
      ],
      notIncluded: [],
      deliveryTime: "Ongoing",
      popular: false,
      icon: BarChart3
    }
  ];

  const addons = [
    { name: "Additional Blog Posts", price: 5000, unit: "per post" },
    { name: "Guest Post Outreach", price: 15000, unit: "per post" },
    { name: "Speed Optimization", price: 20000, unit: "one-time" },
    { name: "Content Refresh", price: 3000, unit: "per page" },
    { name: "Backlink Audit & Cleanup", price: 25000, unit: "one-time" },
    { name: "SEO Training Session", price: 10000, unit: "2 hours" }
  ];

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy. You'll typically start seeing improvements in 3-6 months, with more significant results in 6-12 months. Local SEO can show faster results, often within 1-3 months."
    },
    {
      question: "What's included in your link building?",
      answer: "We focus on quality over quantity. Our link building includes guest posting on relevant sites, local directory submissions, industry-specific directories, and relationship-based outreach. We never use spammy tactics."
    },
    {
      question: "Do you guarantee first page rankings?",
      answer: "No ethical SEO company can guarantee rankings, as Google's algorithms are constantly changing. We focus on best practices and have a strong track record of improving rankings and organic traffic."
    },
    {
      question: "How do you report on progress?",
      answer: "You'll receive detailed monthly reports showing keyword rankings, organic traffic, backlinks acquired, and other key metrics. Enterprise clients get weekly reports and access to a custom dashboard."
    },
    {
      question: "Can you help with Google penalties?",
      answer: "Yes, we offer penalty recovery services. We'll audit your site, identify the cause of the penalty, create a recovery plan, and submit reconsideration requests to Google."
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="outline" size="sm" asChild>
              <Link to="/services/seo-services" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to SEO Services
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-orange-500/10 text-orange-600 border-orange-500/20">
              <Search className="w-3 h-3 mr-1" />
              SEO Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              SEO Pricing Plans
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Improve your search engine rankings and drive organic traffic.
              Results-driven SEO strategies tailored for Kenyan businesses.
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
                <TrendingUp className="w-4 h-4 text-accent" />
                Proven Results
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BarChart3 className="w-4 h-4 text-accent" />
                Transparent Reporting
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Target className="w-4 h-4 text-accent" />
                Local Expertise
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
            <h2 className="text-3xl font-bold text-foreground mb-4">SEO Add-ons</h2>
            <p className="text-muted-foreground">Boost your SEO with additional services</p>
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
            <p className="text-muted-foreground">Common questions about our SEO services</p>
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
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Boost Your Rankings?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get a free SEO audit and discover your growth potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Free Audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
              <Link to="/blog">SEO Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SEOPricing;
