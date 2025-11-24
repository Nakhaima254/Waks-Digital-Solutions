import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit, Palette, Plug, Shield, Smartphone, Users } from "lucide-react";
import { Link } from "react-router-dom";
import wordpressImage from "@/assets/service-wordpress-design.jpg";

const WordPressDesign = () => {
  const benefits = [
    {
      icon: Edit,
      title: "Easy Content Management",
      description: "Update your website content anytime without technical knowledge"
    },
    {
      icon: Palette,
      title: "Custom Design",
      description: "Beautiful, branded designs that reflect your business personality"
    },
    {
      icon: Plug,
      title: "Powerful Plugins",
      description: "Extend functionality with thousands of available plugins and integrations"
    },
    {
      icon: Shield,
      title: "Secure & Updated",
      description: "Regular security updates and maintenance to keep your site safe"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Responsive designs that work perfectly on all devices"
    },
    {
      icon: Users,
      title: "User Training",
      description: "We'll teach you how to manage and update your WordPress site"
    }
  ];

  const features = [
    "Custom WordPress theme development",
    "Responsive mobile-first design",
    "SEO optimization setup",
    "Contact form integration",
    "Social media integration",
    "Google Analytics setup",
    "Basic plugin installation",
    "Content management training",
    "Security hardening",
    "Performance optimization"
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={wordpressImage} 
            alt="WordPress Design" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4">WordPress Design</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              WordPress Websites Made Simple
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Get a professional WordPress website that you can easily manage yourself. Perfect for businesses 
              that want the flexibility to update their content regularly without technical hassle.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Start Your WordPress Site</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose WordPress?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              WordPress powers over 40% of all websites worldwide. It's the perfect balance of ease-of-use and powerful functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Included */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Everything You Need Included
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our WordPress development service includes everything you need to get your business online and growing.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">WordPress Package</h3>
              <div className="text-4xl font-bold text-accent mb-2">KSH 40,000</div>
              <p className="text-muted-foreground mb-6">Complete WordPress website setup</p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Up to 10 pages</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Custom theme design</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Content management training</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">3 months free support</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Mobile responsive design</span>
                </li>
              </ul>
              
              <Button className="w-full" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our WordPress Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold mb-2">Planning</h3>
              <p className="text-muted-foreground text-sm">Define your content structure and site requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold mb-2">Design</h3>
              <p className="text-muted-foreground text-sm">Create custom WordPress theme design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-muted-foreground text-sm">Build and configure your WordPress site</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold mb-2">Training</h3>
              <p className="text-muted-foreground text-sm">Learn to manage your site independently</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your WordPress Website?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses who trust WordPress to power their online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Your WordPress Site</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-accent hover:text-white hover:border-accent transition-all duration-300" asChild>
              <Link to="/pricing" state={{ from: '/services/wordpress-design', serviceName: 'WordPress Design' }}>View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WordPressDesign;