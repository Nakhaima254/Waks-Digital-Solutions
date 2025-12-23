import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, PenTool, Zap, FileText, Clock, BookOpen, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";

const CopywritingPricing = () => {
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
      name: "Website Copy",
      price: 3000,
      priceType: "per page",
      description: "Compelling website content that converts visitors",
      features: [
        "SEO-optimized content",
        "Clear call-to-actions",
        "Brand voice consistency",
        "Headline optimization",
        "2 revision rounds",
        "Meta descriptions",
        "48-hour delivery"
      ],
      notIncluded: [
        "Blog posts",
        "Email sequences",
        "Social media content"
      ],
      deliveryTime: "2-3 days",
      popular: false,
      icon: FileText
    },
    {
      name: "Blog Content",
      price: 5000,
      priceType: "per post",
      description: "SEO-focused blog posts that drive traffic",
      features: [
        "1000-1500 word articles",
        "Keyword research included",
        "SEO optimization",
        "Internal linking strategy",
        "Featured image suggestions",
        "Social media snippets",
        "2 revision rounds",
        "5-day delivery"
      ],
      notIncluded: [
        "Website copy",
        "Email marketing"
      ],
      deliveryTime: "3-5 days",
      popular: true,
      icon: BookOpen
    },
    {
      name: "Content Package",
      price: 25000,
      priceType: "per month",
      description: "Complete content solution for consistent publishing",
      features: [
        "4 blog posts per month",
        "8 social media posts",
        "1 email newsletter",
        "Content calendar",
        "Keyword strategy",
        "Performance tracking",
        "Unlimited revisions",
        "Dedicated writer"
      ],
      notIncluded: [
        "Video scripts",
        "Whitepapers"
      ],
      deliveryTime: "Ongoing",
      popular: false,
      icon: Zap
    },
    {
      name: "Enterprise Content",
      price: 50000,
      priceType: "per month",
      description: "Full-service content marketing solution",
      features: [
        "8 blog posts per month",
        "Daily social media content",
        "4 email campaigns",
        "Content strategy",
        "Competitor analysis",
        "Video scripts",
        "Case studies",
        "Press releases",
        "Whitepapers/eBooks",
        "Dedicated team"
      ],
      notIncluded: [],
      deliveryTime: "Ongoing",
      popular: false,
      icon: Megaphone
    }
  ];

  const addons = [
    { name: "Long-form Blog Post (2000+ words)", price: 8000, unit: "per post" },
    { name: "Email Sequence (5 emails)", price: 12000, unit: "per sequence" },
    { name: "Product Descriptions", price: 1500, unit: "per product" },
    { name: "Case Study", price: 15000, unit: "per study" },
    { name: "Whitepaper/eBook", price: 30000, unit: "per document" },
    { name: "Video Script", price: 5000, unit: "per script" }
  ];

  const faqs = [
    {
      question: "What industries do you write for?",
      answer: "We write for various industries including technology, healthcare, finance, e-commerce, real estate, and more. We research your industry thoroughly to ensure accurate, authoritative content."
    },
    {
      question: "How do you ensure content quality?",
      answer: "All content goes through our quality process: research, writing, editing, and proofreading. We use plagiarism checkers and ensure SEO best practices are followed."
    },
    {
      question: "Can you match our brand voice?",
      answer: "Absolutely! We start with a brand voice analysis and create a style guide for your content. We'll study your existing content and competitors to capture your unique voice."
    },
    {
      question: "Do you provide content strategy?",
      answer: "Yes, our Content Package and Enterprise plans include content strategy. This covers topic ideation, keyword research, content calendar planning, and performance analysis."
    },
    {
      question: "What's your revision policy?",
      answer: "All plans include revision rounds as specified. We want you to be 100% satisfied with the content. Enterprise plans include unlimited revisions."
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", path: "/services" },
              { label: "Copywriting", path: "/services/copywriting" },
              { label: "Pricing" }
            ]}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-pink-500/10 text-pink-600 border-pink-500/20">
              <PenTool className="w-3 h-3 mr-1" />
              Copywriting Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Copywriting Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Compelling, SEO-optimized content that engages your audience 
              and drives conversions for your business.
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
                <FileText className="w-4 h-4 text-accent" />
                SEO Optimized
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-accent" />
                Fast Delivery
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 text-accent" />
                Quality Guaranteed
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Content Add-ons</h2>
            <p className="text-muted-foreground">Additional content services to enhance your marketing</p>
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
            <p className="text-muted-foreground">Common questions about our copywriting services</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
            Ready to Transform Your Content?
          </h2>
          <p className="text-accent-foreground/90 text-lg mb-8">
            Get compelling copy that converts visitors into customers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-accent-foreground border-accent-foreground hover:bg-accent-foreground/10" asChild>
              <Link to="/blog">Read Our Blog</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CopywritingPricing;
