import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, CreditCard, Package, BarChart3, Shield, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import ecommerceImage from "@/assets/service-ecommerce-solutions.jpg";

const EcommerceSolutions = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: "Online Store Setup",
      description: "Complete e-commerce platform with product catalogs and shopping cart functionality"
    },
    {
      icon: CreditCard,
      title: "Payment Integration",
      description: "Secure payment gateways including M-Pesa, Visa, Mastercard, and PayPal"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Track stock levels, manage variants, and automate low-stock alerts"
    },
    {
      icon: BarChart3,
      title: "Sales Analytics",
      description: "Detailed reports on sales performance, customer behavior, and popular products"
    },
    {
      icon: Shield,
      title: "Secure Checkout",
      description: "SSL certificates and PCI compliance for safe customer transactions"
    },
    {
      icon: Smartphone,
      title: "Mobile Commerce",
      description: "Optimized mobile shopping experience for customers on the go"
    }
  ];

  const packages = [
    {
      name: "Starter Store",
      price: "KSH 75,000",
      features: [
        "Up to 50 products",
        "Basic payment integration",
        "Order management system",
        "Customer accounts",
        "Basic analytics",
        "Mobile responsive design",
        "3 months support"
      ]
    },
    {
      name: "Business Store",
      price: "KSH 120,000",
      features: [
        "Up to 500 products",
        "Advanced payment options",
        "Inventory management",
        "Customer reviews system",
        "Email marketing integration",
        "SEO optimization",
        "6 months support",
        "Custom shipping options"
      ]
    },
    {
      name: "Enterprise Store",
      price: "Quote on request",
      features: [
        "Unlimited products",
        "Multi-vendor marketplace",
        "Advanced analytics",
        "Custom integrations",
        "Multi-currency support",
        "Wholesale pricing",
        "12 months support",
        "Performance optimization"
      ]
    }
  ];

  const platforms = [
    {
      name: "WooCommerce",
      description: "WordPress-based solution, perfect for content-rich stores",
      bestFor: "Businesses with existing WordPress sites or blog-focused stores"
    },
    {
      name: "Shopify",
      description: "All-in-one hosted solution with powerful built-in features",
      bestFor: "Businesses wanting a complete managed e-commerce platform"
    },
    {
      name: "Custom Solution",
      description: "Tailored e-commerce platform built specifically for your needs",
      bestFor: "Large businesses with unique requirements and complex workflows"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={ecommerceImage} 
            alt="E-commerce Solutions" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4">E-commerce Solutions</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sell Online & Grow Your Business
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Launch your online store and reach customers across Kenya and beyond. 
              Our e-commerce solutions are designed for Kenyan businesses with local payment methods and shipping options.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Start Selling Online</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Complete E-commerce Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a successful online business in Kenya and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Choose Your E-commerce Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with the best e-commerce platforms to find the perfect solution for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{platform.name}</CardTitle>
                  <p className="text-muted-foreground">{platform.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="text-sm font-medium mb-1">Best For:</p>
                    <p className="text-sm text-muted-foreground">{platform.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              E-commerce Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your online store needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-accent mt-2">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kenya-Specific Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built for Kenyan Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                M
              </div>
              <h3 className="font-semibold mb-2">M-Pesa Integration</h3>
              <p className="text-muted-foreground text-sm">Accept M-Pesa payments directly on your store</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                KSH
              </div>
              <h3 className="font-semibold mb-2">Local Currency</h3>
              <p className="text-muted-foreground text-sm">Prices displayed in Kenyan Shillings</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                🚚
              </div>
              <h3 className="font-semibold mb-2">Local Shipping</h3>
              <p className="text-muted-foreground text-sm">Integration with Kenyan courier services</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                📱
              </div>
              <h3 className="font-semibold mb-2">Mobile First</h3>
              <p className="text-muted-foreground text-sm">Optimized for mobile shopping habits</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Selling Online?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of Kenyan businesses already selling online and growing their revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Launch Your Store</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-accent hover:text-white hover:border-accent transition-all duration-300" asChild>
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EcommerceSolutions;