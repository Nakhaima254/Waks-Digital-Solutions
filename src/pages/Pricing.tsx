import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Pricing = () => {
  const [currency, setCurrency] = useState<string>("KSH");

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Need something specific? We offer additional services to complement your website package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 group hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors duration-300">Logo Design</h3>
              <p className="text-muted-foreground text-sm mb-3">Professional logo design</p>
              <p className="font-bold text-accent">{convertPrice("KSH 8,000")}</p>
            </Card>
            <Card className="text-center p-6 group hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors duration-300">Extra Page</h3>
              <p className="text-muted-foreground text-sm mb-3">Additional custom page</p>
              <p className="font-bold text-accent">{convertPrice("KSH 3,000")}</p>
            </Card>
            <Card className="text-center p-6 group hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors duration-300">Monthly Maintenance</h3>
              <p className="text-muted-foreground text-sm mb-3">Ongoing updates & support</p>
              <p className="font-bold text-accent">{convertPrice("KSH 5,000")}</p>
            </Card>
            <Card className="text-center p-6 group hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors duration-300">Custom Feature</h3>
              <p className="text-muted-foreground text-sm mb-3">Bespoke functionality</p>
              <p className="font-bold text-accent">Quote on request</p>
            </Card>
          </div>
        </div>
      </section>

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