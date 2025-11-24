import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Shield, Zap, RefreshCw, Database, Lock } from "lucide-react";

const WebMaintenance = () => {
  const services = [
    {
      icon: RefreshCw,
      title: "Regular Updates",
      description: "Keep your website up-to-date with the latest software, plugins, and security patches"
    },
    {
      icon: Shield,
      title: "Security Monitoring",
      description: "24/7 monitoring and protection against threats, malware, and vulnerabilities"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Continuous optimization to ensure fast loading times and smooth performance"
    },
    {
      icon: Database,
      title: "Backup & Recovery",
      description: "Automated daily backups with quick recovery options for peace of mind"
    },
    {
      icon: Lock,
      title: "Uptime Monitoring",
      description: "Real-time monitoring to ensure your website is always accessible"
    },
    {
      icon: Wrench,
      title: "Technical Support",
      description: "Priority support for any technical issues or questions"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
              <Wrench className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Website Maintenance Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Keep your website secure, updated, and performing at its best. Focus on your business while we handle the technical details.
            </p>
            <Button size="lg" asChild className="rounded-full">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive maintenance services to keep your website running smoothly
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

      {/* Benefits */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Regular Maintenance Matters</h2>
            <div className="space-y-6 text-left">
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">Prevent Security Breaches</h3>
                <p className="text-muted-foreground">
                  Regular updates and security patches protect your website from vulnerabilities and cyber threats.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">Maintain Peak Performance</h3>
                <p className="text-muted-foreground">
                  Optimization ensures your website loads quickly and provides the best user experience.
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-2">Save Time and Money</h3>
                <p className="text-muted-foreground">
                  Proactive maintenance prevents costly emergencies and downtime, saving you money in the long run.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Maintenance Plans</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose a plan that fits your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <CardDescription>Essential maintenance for small sites</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Monthly updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Weekly backups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Security monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle>Professional</CardTitle>
                <CardDescription>Comprehensive care for growing businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Weekly updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Daily backups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>24/7 monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Performance optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>Premium support for mission-critical sites</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Daily updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Real-time backups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Advanced security</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let Us Handle Your Website Maintenance
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Focus on growing your business while we keep your website secure and performing at its best.
          </p>
          <Button size="lg" asChild className="rounded-full">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WebMaintenance;
