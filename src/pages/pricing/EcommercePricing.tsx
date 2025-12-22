import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowLeft, ShoppingCart, Zap, Shield, Clock, CreditCard, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const EcommercePricing = () => {
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
      name: "Starter Store",
      price: 45000,
      description: "Perfect for small businesses starting to sell online",
      features: [
        "Up to 50 products",
        "WooCommerce setup",
        "Mobile responsive design",
        "M-Pesa integration",
        "Basic product categories",
        "Order management system",
        "Customer accounts",
        "Email notifications",
        "1 month free support"
      ],
      notIncluded: [
        "Inventory management",
        "Multiple payment gateways",
        "Multi-vendor support"
      ],
      deliveryTime: "1-2 weeks",
      popular: false,
      icon: ShoppingCart
    },
    {
      name: "Business Store",
      price: 80000,
      description: "Complete e-commerce solution for growing businesses",
      features: [
        "Up to 500 products",
        "Custom store design",
        "M-Pesa + Card payments",
        "Inventory management",
        "Discount & coupon system",
        "Shipping calculator",
        "Product reviews",
        "Wishlist functionality",
        "3 months free support",
        "SEO optimization",
        "Google Analytics"
      ],
      notIncluded: [
        "Multi-vendor marketplace",
        "Subscription products"
      ],
      deliveryTime: "2-3 weeks",
      popular: true,
      icon: Zap
    },
    {
      name: "Advanced Store",
      price: 120000,
      description: "Feature-rich store for established businesses",
      features: [
        "Unlimited products",
        "Premium custom design",
        "Multiple payment gateways",
        "Advanced inventory",
        "Product variations",
        "Automated tax calculation",
        "Multi-currency support",
        "Advanced shipping rules",
        "6 months free support",
        "Email marketing integration",
        "Abandoned cart recovery",
        "Advanced analytics"
      ],
      notIncluded: [
        "Multi-vendor marketplace"
      ],
      deliveryTime: "3-4 weeks",
      popular: false,
      icon: Package
    },
    {
      name: "Enterprise Marketplace",
      price: 200000,
      description: "Multi-vendor marketplace with advanced features",
      features: [
        "Multi-vendor support",
        "Vendor dashboard",
        "Commission management",
        "Split payments",
        "Advanced reporting",
        "Product approval workflow",
        "Vendor subscriptions",
        "API integrations",
        "12 months free support",
        "White-label solution",
        "Dedicated support",
        "Custom development"
      ],
      notIncluded: [],
      deliveryTime: "6-10 weeks",
      popular: false,
      icon: Shield
    }
  ];

  const addons = [
    { name: "Additional Payment Gateway", price: 10000, unit: "per gateway" },
    { name: "Product Import Service", price: 5000, unit: "up to 100 products" },
    { name: "Subscription Products", price: 15000, unit: "one-time" },
    { name: "POS Integration", price: 25000, unit: "one-time" },
    { name: "Custom Shipping Rules", price: 8000, unit: "one-time" },
    { name: "Monthly Maintenance", price: 8000, unit: "per month" }
  ];

  const faqs = [
    {
      question: "Which payment gateways do you integrate?",
      answer: "We integrate M-Pesa, Pesapal, Flutterwave, PayPal, Stripe, and card payments via various gateways. M-Pesa is included in all plans for the Kenyan market."
    },
    {
      question: "Can I sell both physical and digital products?",
      answer: "Yes! Our e-commerce solutions support physical products with shipping, digital downloads, services, and subscription-based products."
    },
    {
      question: "How do I manage my inventory?",
      answer: "Business Store and above include inventory management. You'll get low stock alerts, automatic stock updates, and the ability to track inventory across multiple locations."
    },
    {
      question: "Can I integrate with my accounting software?",
      answer: "Yes, we can integrate with popular accounting software like QuickBooks, Xero, and local Kenyan accounting systems. This may require additional customization."
    },
    {
      question: "What about shipping and delivery?",
      answer: "We set up shipping zones, rates, and can integrate with courier services. For Kenyan businesses, we can integrate with local delivery partners."
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-500/10 via-background to-emerald-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="outline" size="sm" asChild>
              <Link to="/services/ecommerce-solutions" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to E-commerce Solutions
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge className="mb-4 bg-green-500/10 text-green-600 border-green-500/20">
              <ShoppingCart className="w-3 h-3 mr-1" />
              E-commerce Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              E-commerce Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Complete online stores with M-Pesa integration, inventory management,
              and everything you need to sell online in Kenya and beyond.
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
                <CreditCard className="w-4 h-4 text-accent" />
                M-Pesa Ready
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Package className="w-4 h-4 text-accent" />
                Inventory Management
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-accent" />
                Secure Payments
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
            <h2 className="text-3xl font-bold text-foreground mb-4">E-commerce Add-ons</h2>
            <p className="text-muted-foreground">Enhance your online store with additional features</p>
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
            <p className="text-muted-foreground">Common questions about e-commerce development</p>
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Selling Online?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get a free consultation and custom quote for your online store
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
              <Link to="/portfolio">View Our Stores</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EcommercePricing;
