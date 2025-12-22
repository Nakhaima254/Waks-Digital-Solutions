import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, TrendingUp, Target, FileText, Link2, BarChart, Building2, Smartphone, ArrowRight, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import seoImage from "@/assets/service-seo-services.jpg";
import FloatingElements from "@/components/FloatingElements";
import { motion } from "framer-motion";

const SEOServices = () => {
  const services = [
    {
      icon: Search,
      title: "Keyword Research",
      description: "Find the right keywords your Kenyan customers are searching for online"
    },
    {
      icon: FileText,
      title: "On-Page SEO",
      description: "Optimize your website content, titles, and structure for search engines"
    },
    {
      icon: Link2,
      title: "Link Building",
      description: "Build quality backlinks from reputable Kenyan and international websites"
    },
    {
      icon: Target,
      title: "Local SEO",
      description: "Dominate local search results for customers in Nairobi and across Kenya"
    },
    {
      icon: BarChart,
      title: "SEO Analytics",
      description: "Track rankings, traffic, and conversions with detailed monthly reports"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      description: "Improve site speed and user experience for better search rankings"
    }
  ];

  const packages = [
    {
      name: "Local SEO",
      price: "KSH 15,000/month",
      duration: "3-month minimum",
      features: [
        "Google My Business optimization",
        "Local keyword targeting",
        "Citation building",
        "Local directory submissions",
        "Monthly performance reports",
        "Competitor analysis"
      ],
      bestFor: "Local businesses serving Kenyan customers"
    },
    {
      name: "National SEO", 
      price: "KSH 25,000/month",
      duration: "6-month minimum",
      features: [
        "Comprehensive keyword research",
        "On-page optimization",
        "Content strategy development",
        "Technical SEO audit",
        "Link building campaign",
        "Monthly progress reports",
        "Competitor monitoring"
      ],
      bestFor: "Businesses targeting customers across Kenya"
    },
    {
      name: "E-commerce SEO",
      price: "KSH 35,000/month", 
      duration: "6-month minimum",
      features: [
        "Product page optimization",
        "Category page SEO",
        "Schema markup implementation",
        "Shopping feed optimization",
        "Conversion rate optimization", 
        "Advanced analytics setup",
        "International SEO strategy"
      ],
      bestFor: "Online stores and e-commerce businesses"
    }
  ];

  const results = [
    { metric: "Average Traffic Increase", value: "180%" },
    { metric: "Keyword Rankings Improved", value: "85%" },
    { metric: "Local Visibility Boost", value: "200%" },
    { metric: "Conversion Rate Increase", value: "45%" }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted overflow-hidden">
        <FloatingElements density="medium" color="mixed" />
        <div className="absolute inset-0">
          <img 
            src={seoImage} 
            alt="SEO Services" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <Badge className="mb-4">SEO Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get Found on Google in Kenya
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Increase your website visibility and attract more customers with our proven SEO strategies 
              designed specifically for Kenyan businesses and search patterns.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Boost My Rankings</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Proven Results for Kenyan Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-accent mb-2">{result.value}</div>
                <p className="text-muted-foreground font-medium">{result.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Complete SEO Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to rank higher in Google and attract more customers to your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              SEO Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the SEO package that matches your business goals and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="p-6 relative">
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-accent mt-2">{pkg.price}</div>
                  <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-accent/10 p-3 rounded-lg mb-4 text-center">
                    <p className="text-sm font-medium">{pkg.bestFor}</p>
                  </div>
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

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our SEO Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="font-semibold mb-2">SEO Audit</h3>
              <p className="text-muted-foreground text-sm">Comprehensive analysis of your current website performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="font-semibold mb-2">Strategy</h3>
              <p className="text-muted-foreground text-sm">Develop targeted SEO strategy for your industry</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="font-semibold mb-2">Implementation</h3>
              <p className="text-muted-foreground text-sm">Execute on-page and off-page optimization</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="font-semibold mb-2">Monitor & Report</h3>
              <p className="text-muted-foreground text-sm">Track progress and adjust strategy as needed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Kenya-Focused SEO Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                KE
              </div>
              <h3 className="font-semibold mb-2">Local Market Knowledge</h3>
              <p className="text-muted-foreground text-sm">Deep understanding of Kenyan search behavior and preferences</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">City-Specific Targeting</h3>
              <p className="text-muted-foreground text-sm">Optimize for Nairobi, Mombasa, Kisumu and other major cities</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Mobile-First Approach</h3>
              <p className="text-muted-foreground text-sm">Optimized for mobile users who make up majority of Kenyan internet users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-accent rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <CreditCard className="w-3 h-3 mr-1" />
                SEO Pricing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                View Our SEO Packages
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                From one-time audits to ongoing enterprise SEO campaigns. Results-driven strategies.
              </p>
              <Button size="lg" variant="secondary" className="group" asChild>
                <Link to="/pricing/seo" className="flex items-center gap-2">
                  View Detailed Pricing
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Dominate Google in Kenya?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's get your business found by more customers searching online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start SEO Campaign</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-primary border-white hover:bg-accent hover:text-white hover:border-accent transition-all duration-300" asChild>
              <Link to="/pricing/seo">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SEOServices;