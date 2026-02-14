import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowLeft, Palette, FileText, Wrench, Zap, Code, ShoppingCart, Search, PenTool, Settings, ArrowRight, Layers } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import CryptoPaymentSection from "@/components/CryptoPaymentSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const [currency, setCurrency] = useState<string>("KSH");
  
  const location = useLocation();
  const state = location.state as { from?: string; serviceName?: string } | null;

  // Exchange rates (approximate as of 2024)
  const exchangeRates: Record<string, { rate: number; symbol: string }> = {
    KSH: { rate: 1, symbol: "KSH" },
    USD: { rate: 0.0077, symbol: "$" },
    EUR: { rate: 0.0071, symbol: "€" },
    GBP: { rate: 0.0061, symbol: "£" },
  };

  // Convert price from KSH to selected currency
  const convertPrice = (kshPrice: string): string => {
    // Extract numeric value from price string
    const numericValue = parseInt(kshPrice.replace(/[^0-9]/g, ''));
    
    if (isNaN(numericValue)) return kshPrice;
    
    const converted = numericValue * exchangeRates[currency].rate;
    const symbol = exchangeRates[currency].symbol;
    
    // Format based on currency
    if (currency === "KSH") {
      return `${symbol} ${numericValue.toLocaleString()}`;
    } else {
      return `${symbol}${Math.round(converted).toLocaleString()}`;
    }
  };

  const plans = [
    {
      name: "Starter",
      price: "KSH 25,000",
      description: "Perfect for small businesses getting started online",
      features: [
        "5-page responsive website",
        "Mobile-friendly design",
        "Basic SEO setup",
        "Contact form integration",
        "Social media links",
        "1 month free maintenance",
        "Basic hosting setup guidance"
      ],
      popular: false,
      deliveryTime: "1-2 weeks"
    },
    {
      name: "Professional",
      price: "KSH 50,000",
      description: "Ideal for growing businesses that need more features",
      features: [
        "10-page responsive website",
        "Custom design & branding",
        "Advanced SEO optimization",
        "Blog/News section",
        "Google Analytics setup",
        "Contact & inquiry forms",
        "3 months free maintenance",
        "WhatsApp integration",
        "Social media integration"
      ],
      popular: true,
      deliveryTime: "2-3 weeks"
    },
    {
      name: "Premium",
      price: "KSH 85,000",
      description: "Complete solution for established businesses",
      features: [
        "15+ pages responsive website",
        "Custom design & development",
        "E-commerce capabilities",
        "Advanced SEO & performance",
        "CMS for easy content updates",
        "Payment gateway integration",
        "6 months free maintenance",
        "Email marketing setup",
        "Advanced analytics & reporting",
        "Multi-language support"
      ],
      popular: false,
      deliveryTime: "3-4 weeks"
    },
    {
      name: "Custom System Design",
      price: "From KSH 100,000",
      description: "Enterprise solution for complex business systems",
      features: [
        "Custom business logic implementation",
        "Database architecture & design",
        "API development & integration",
        "Third-party service integration",
        "Automated workflows & processes",
        "Scalable system architecture",
        "12 months free maintenance",
        "Documentation & training",
        "Priority support & updates",
        "Performance optimization"
      ],
      popular: false,
      deliveryTime: "4-12 weeks"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Service Button */}
          {state?.from && state?.serviceName && (
            <div className="mb-8 animate-fade-in">
              <Button 
                variant="outline" 
                size="sm" 
                className="group hover:bg-accent hover:text-white hover:border-accent transition-all duration-300" 
                asChild
              >
                <Link to={state.from} className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to {state.serviceName}
                </Link>
              </Button>
            </div>
          )}

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the perfect website package for your business needs. All plans include responsive design, 
              professional development, and ongoing support to help your business grow online.
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
                  <SelectItem value="KSH">🇰🇪 KSH</SelectItem>
                  <SelectItem value="USD">🇺🇸 USD</SelectItem>
                  <SelectItem value="EUR">🇪🇺 EUR</SelectItem>
                  <SelectItem value="GBP">🇬🇧 GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              No hidden fees
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              Free revisions included
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-accent" />
              Nairobi-based support
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name} 
                className={`relative group hover:scale-105 transition-all duration-300 ${plan.popular ? 'border-accent shadow-elegant scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="bg-accent text-accent-foreground px-3 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-accent">{convertPrice(plan.price)}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                  <div className="mt-2">
                    <span className="text-sm font-medium text-primary">
                      Delivery: {plan.deliveryTime}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    asChild
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Compare Plans & Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what's included in each package at a glance
            </p>
          </div>

          {/* Desktop Table View - Hidden on Mobile */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full bg-card rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 font-semibold text-foreground">Features</th>
                  <th className="text-center p-4 font-semibold text-foreground">Starter</th>
                  <th className="text-center p-4 font-semibold text-foreground bg-accent/10">
                    <div className="flex items-center justify-center gap-2">
                      Professional
                      <Star className="w-4 h-4 text-accent fill-accent" />
                    </div>
                  </th>
                  <th className="text-center p-4 font-semibold text-foreground">Premium</th>
                  <th className="text-center p-4 font-semibold text-foreground">Custom System</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Number of Pages</td>
                  <td className="text-center p-4">5 pages</td>
                  <td className="text-center p-4 bg-accent/5">10 pages</td>
                  <td className="text-center p-4">15+ pages</td>
                  <td className="text-center p-4">Unlimited</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Responsive Design</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4 bg-accent/5"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Custom Design</td>
                  <td className="text-center p-4 text-muted-foreground">Basic</td>
                  <td className="text-center p-4 bg-accent/5"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">SEO Optimization</td>
                  <td className="text-center p-4 text-muted-foreground">Basic</td>
                  <td className="text-center p-4 bg-accent/5">Advanced</td>
                  <td className="text-center p-4">Advanced</td>
                  <td className="text-center p-4">Enterprise</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Content Management System</td>
                  <td className="text-center p-4">—</td>
                  <td className="text-center p-4 bg-accent/5"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">E-commerce Features</td>
                  <td className="text-center p-4">—</td>
                  <td className="text-center p-4 bg-accent/5">—</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Payment Gateway</td>
                  <td className="text-center p-4">—</td>
                  <td className="text-center p-4 bg-accent/5">—</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Blog/News Section</td>
                  <td className="text-center p-4">—</td>
                  <td className="text-center p-4 bg-accent/5"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Google Analytics</td>
                  <td className="text-center p-4">—</td>
                  <td className="text-center p-4 bg-accent/5"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4">Advanced</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">WhatsApp Integration</td>
                  <td className="text-center p-4">—</td>
                  <td className="text-center p-4 bg-accent/5"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Email Marketing Setup</td>
                  <td className="text-center p-4">—</td>
                  <td className="text-center p-4 bg-accent/5">—</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Multi-language Support</td>
                  <td className="text-center p-4">—</td>
                  <td className="text-center p-4 bg-accent/5">—</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">API Integration</td>
                  <td className="text-center p-4">—</td>
                  <td className="text-center p-4 bg-accent/5">—</td>
                  <td className="text-center p-4">—</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Custom Business Logic</td>
                  <td className="text-center p-4">—</td>
                  <td className="text-center p-4 bg-accent/5">—</td>
                  <td className="text-center p-4">—</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-accent mx-auto" /></td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Free Maintenance Period</td>
                  <td className="text-center p-4">1 month</td>
                  <td className="text-center p-4 bg-accent/5">3 months</td>
                  <td className="text-center p-4">6 months</td>
                  <td className="text-center p-4">12 months</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-medium">Training & Documentation</td>
                  <td className="text-center p-4">Basic</td>
                  <td className="text-center p-4 bg-accent/5">Standard</td>
                  <td className="text-center p-4">Comprehensive</td>
                  <td className="text-center p-4">Full</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors bg-muted/30">
                  <td className="p-4 font-bold">Starting Price</td>
                  <td className="text-center p-4 font-bold text-accent">{convertPrice("KSH 25,000")}</td>
                  <td className="text-center p-4 font-bold text-accent bg-accent/10">{convertPrice("KSH 50,000")}</td>
                  <td className="text-center p-4 font-bold text-accent">{convertPrice("KSH 85,000")}</td>
                  <td className="text-center p-4 font-bold text-accent">From {convertPrice("KSH 100,000")}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Accordion View - Hidden on Desktop */}
          <div className="lg:hidden space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {plans.map((plan, index) => (
                <AccordionItem 
                  key={plan.name} 
                  value={`plan-${index}`}
                  className={cn(
                    "card-elevated border-2 rounded-lg overflow-hidden",
                    plan.popular && "border-accent"
                  )}
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/20 transition-colors">
                    <div className="flex items-center justify-between w-full pr-4">
                      <div className="text-left">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-foreground">{plan.name}</span>
                          {plan.popular && <Star className="w-4 h-4 text-accent fill-accent" />}
                        </div>
                        <div className="text-2xl font-bold text-accent mt-1">{convertPrice(plan.price)}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-3 pt-2">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm font-medium">Number of Pages</span>
                        <span className="text-sm">{plan.name === "Starter" ? "5 pages" : plan.name === "Professional" ? "10 pages" : plan.name === "Premium" ? "15+ pages" : "Unlimited"}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm font-medium">Responsive Design</span>
                        <Check className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm font-medium">Custom Design</span>
                        {plan.name === "Starter" ? <span className="text-sm text-muted-foreground">Basic</span> : <Check className="w-5 h-5 text-accent" />}
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm font-medium">SEO Optimization</span>
                        <span className="text-sm">{plan.name === "Starter" ? "Basic" : plan.name === "Custom System Design" ? "Enterprise" : "Advanced"}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm font-medium">CMS</span>
                        {plan.name === "Starter" ? <span className="text-sm text-muted-foreground">—</span> : <Check className="w-5 h-5 text-accent" />}
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm font-medium">E-commerce</span>
                        {(plan.name === "Premium" || plan.name === "Custom System Design") ? <Check className="w-5 h-5 text-accent" /> : <span className="text-sm text-muted-foreground">—</span>}
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm font-medium">Payment Gateway</span>
                        {(plan.name === "Premium" || plan.name === "Custom System Design") ? <Check className="w-5 h-5 text-accent" /> : <span className="text-sm text-muted-foreground">—</span>}
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm font-medium">Blog/News Section</span>
                        {plan.name === "Starter" ? <span className="text-sm text-muted-foreground">—</span> : <Check className="w-5 h-5 text-accent" />}
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm font-medium">Google Analytics</span>
                        {plan.name === "Starter" ? <span className="text-sm text-muted-foreground">—</span> : plan.name === "Custom System Design" ? <span className="text-sm">Advanced</span> : <Check className="w-5 h-5 text-accent" />}
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm font-medium">WhatsApp Integration</span>
                        {plan.name === "Starter" ? <span className="text-sm text-muted-foreground">—</span> : <Check className="w-5 h-5 text-accent" />}
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm font-medium">Email Marketing</span>
                        {(plan.name === "Premium" || plan.name === "Custom System Design") ? <Check className="w-5 h-5 text-accent" /> : <span className="text-sm text-muted-foreground">—</span>}
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm font-medium">Multi-language</span>
                        {(plan.name === "Premium" || plan.name === "Custom System Design") ? <Check className="w-5 h-5 text-accent" /> : <span className="text-sm text-muted-foreground">—</span>}
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm font-medium">API Integration</span>
                        {plan.name === "Custom System Design" ? <Check className="w-5 h-5 text-accent" /> : <span className="text-sm text-muted-foreground">—</span>}
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm font-medium">Custom Business Logic</span>
                        {plan.name === "Custom System Design" ? <Check className="w-5 h-5 text-accent" /> : <span className="text-sm text-muted-foreground">—</span>}
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm font-medium">Free Maintenance</span>
                        <span className="text-sm">{plan.name === "Starter" ? "1 month" : plan.name === "Professional" ? "3 months" : plan.name === "Premium" ? "6 months" : "12 months"}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-sm font-medium">Training</span>
                        <span className="text-sm">{plan.name === "Starter" ? "Basic" : plan.name === "Professional" ? "Standard" : plan.name === "Premium" ? "Comprehensive" : "Full"}</span>
                      </div>
                      <div className="pt-4">
                        <Button 
                          className="w-full" 
                          variant={plan.popular ? "default" : "outline"}
                          size="lg"
                          asChild
                        >
                          <Link to="/contact">Get Started</Link>
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Not sure which plan is right for you?
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service-Specific Pricing Links */}
      <section className="py-16 bg-card border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4">Detailed Service Pricing</Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              View Pricing by Service
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore detailed pricing, features, and packages for each of our specialized services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Code, name: "Web Development", path: "/pricing/web-development", price: "From KSH 25,000" },
              { icon: Palette, name: "WordPress Design", path: "/pricing/wordpress", price: "From KSH 20,000" },
              { icon: ShoppingCart, name: "E-commerce Solutions", path: "/pricing/ecommerce", price: "From KSH 45,000" },
              { icon: Layers, name: "Custom Systems", path: "/pricing/custom-systems", price: "From KSH 150,000" },
              { icon: Search, name: "SEO Services", path: "/pricing/seo", price: "From KSH 15,000/mo" },
              { icon: PenTool, name: "Copywriting", path: "/pricing/copywriting", price: "From KSH 3,000" },
              { icon: Settings, name: "Web Maintenance", path: "/pricing/maintenance", price: "From KSH 5,000/mo" },
            ].map((service) => (
              <Link 
                key={service.name}
                to={service.path}
                className="group"
              >
                <Card className="p-4 hover:shadow-lg transition-all duration-300 border-2 hover:border-accent h-full">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.price}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Add-On Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enhance your website package with these additional services. All prices are available in multiple currencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 group hover:scale-105 hover:shadow-elegant transition-all duration-300 border-2 hover:border-accent">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Palette className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="font-semibold mb-2 text-lg group-hover:text-accent transition-colors duration-300">Logo Design</h3>
              <p className="text-muted-foreground text-sm mb-4">Professional logo design with multiple concepts and revisions</p>
              <p className="font-bold text-2xl text-accent">{convertPrice("KSH 8,000")}</p>
            </Card>
            
            <Card className="text-center p-6 group hover:scale-105 hover:shadow-elegant transition-all duration-300 border-2 hover:border-accent">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <FileText className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="font-semibold mb-2 text-lg group-hover:text-accent transition-colors duration-300">Extra Page</h3>
              <p className="text-muted-foreground text-sm mb-4">Additional custom page with full design and functionality</p>
              <p className="font-bold text-2xl text-accent">{convertPrice("KSH 3,000")}</p>
            </Card>
            
            <Card className="text-center p-6 group hover:scale-105 hover:shadow-elegant transition-all duration-300 border-2 hover:border-accent">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Wrench className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="font-semibold mb-2 text-lg group-hover:text-accent transition-colors duration-300">Monthly Maintenance</h3>
              <p className="text-muted-foreground text-sm mb-4">Ongoing updates, security, backups & technical support</p>
              <p className="font-bold text-2xl text-accent">{convertPrice("KSH 5,000")}<span className="text-sm font-normal text-muted-foreground">/month</span></p>
            </Card>
            
            <Card className="text-center p-6 group hover:scale-105 hover:shadow-elegant transition-all duration-300 border-2 hover:border-accent">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="font-semibold mb-2 text-lg group-hover:text-accent transition-colors duration-300">Custom Feature</h3>
              <p className="text-muted-foreground text-sm mb-4">Bespoke functionality tailored to your needs</p>
              <p className="font-bold text-lg text-accent">Quote on request</p>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Discuss Custom Requirements</Link>
            </Button>
          </div>
        </div>
      </section>

      <CryptoPaymentSection />

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3">What's included in the maintenance?</h3>
              <p className="text-muted-foreground text-sm">
                Security updates, content updates, bug fixes, and technical support during business hours.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Do you provide hosting?</h3>
              <p className="text-muted-foreground text-sm">
                We help you set up hosting with reliable providers. Hosting costs are separate and typically range from KSH 2,000-5,000 annually.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Can I update the website myself?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! Professional and Premium plans include a user-friendly CMS so you can easily update content.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">What if I need changes after launch?</h3>
              <p className="text-muted-foreground text-sm">
                Minor changes are covered during your maintenance period. Major changes are quoted separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-black dark:text-white border-white hover:bg-accent hover:text-white hover:border-accent" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;