import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PenTool, FileText, Target, TrendingUp, Mail, MessageSquare, ArrowRight, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const Copywriting = () => {
  const services = [
    {
      icon: FileText,
      title: "Website Content",
      description: "Compelling website copy that engages visitors and drives conversions"
    },
    {
      icon: Target,
      title: "SEO Copywriting",
      description: "Keyword-optimized content that ranks well and reads naturally"
    },
    {
      icon: TrendingUp,
      title: "Sales Copy",
      description: "Persuasive copy that turns prospects into paying customers"
    },
    {
      icon: Mail,
      title: "Email Campaigns",
      description: "Engaging email content that builds relationships and drives sales"
    },
    {
      icon: MessageSquare,
      title: "Social Media Content",
      description: "Shareable posts that boost engagement and grow your following"
    },
    {
      icon: PenTool,
      title: "Blog Writing",
      description: "Informative articles that establish authority and attract organic traffic"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
              <PenTool className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Professional Copywriting Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Words that sell. Content that converts. Let us craft compelling copy that resonates with your audience and drives measurable results.
            </p>
            <Button size="lg" asChild className="rounded-full">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Copywriting Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From web content to email campaigns, we deliver copy that connects with your audience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="rounded-lg bg-primary/10 p-3 w-fit mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Our Copywriting Stands Out</h2>
            <div className="space-y-6 text-left">
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">Research-Driven Approach</h3>
                <p className="text-muted-foreground">
                  We dive deep into understanding your industry, audience, and competitors to create copy that truly resonates.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">Conversion-Focused</h3>
                <p className="text-muted-foreground">
                  Every word is crafted with your business goals in mind, designed to turn readers into customers.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">SEO Optimization</h3>
                <p className="text-muted-foreground">
                  Our copy is optimized for search engines without sacrificing readability or persuasiveness.
                </p>
              </div>
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
            className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <CreditCard className="w-3 h-3 mr-1" />
                Copywriting Pricing
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                View Our Content Packages
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                From individual blog posts to complete content marketing solutions.
              </p>
              <Button size="lg" variant="secondary" className="group" asChild>
                <Link to="/pricing/copywriting" className="flex items-center gap-2">
                  View Detailed Pricing
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Elevate Your Content?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create copy that captures attention, builds trust, and drives conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="rounded-full">
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-background text-foreground border-border hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 rounded-full" asChild>
              <Link to="/pricing/copywriting">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Copywriting;
