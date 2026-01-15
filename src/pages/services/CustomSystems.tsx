import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingCart, Building2, LayoutGrid, GraduationCap, Heart, Package, 
  UserCog, Plane, Landmark, ArrowRight, Check, Clock, Users, Shield,
  Database, Cpu, BarChart3, Lock, Zap, CreditCard
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "@/components/Breadcrumbs";
import FloatingElements from "@/components/FloatingElements";

const CustomSystems = () => {
  const systems = [
    {
      id: "ecommerce",
      icon: ShoppingCart,
      name: "E-commerce Platform",
      tagline: "Complete online shopping solutions",
      description: "Build powerful online stores with product catalogs, shopping carts, secure payments, and order management.",
      startPrice: "80,000",
      timeline: "4-8 weeks",
      caseStudy: {
        client: "Fashion Boutique Nairobi",
        challenge: "Manual order processing and inventory tracking across multiple locations was causing delays and stock issues.",
        solution: "Built a unified e-commerce platform with real-time inventory sync, M-Pesa integration, and automated order notifications.",
        results: ["300% increase in online sales", "50% reduction in order processing time", "Zero stock discrepancies"],
        features: ["Product catalog with variants", "M-Pesa & card payments", "Inventory management", "Order tracking", "Customer accounts", "Admin dashboard"]
      }
    },
    {
      id: "pos",
      icon: Building2,
      name: "POS System",
      tagline: "Retail & hospitality management",
      description: "Point of sale systems for retail stores, restaurants, and hotels with sales tracking, inventory, and staff management.",
      startPrice: "120,000",
      timeline: "6-10 weeks",
      caseStudy: {
        client: "Multi-branch Restaurant Chain",
        challenge: "No centralized system to track sales across 5 locations. Manual reporting was time-consuming and error-prone.",
        solution: "Deployed a cloud-based POS with real-time sales sync, kitchen display system, and centralized reporting.",
        results: ["Real-time sales visibility", "40% faster order processing", "Automated daily reports"],
        features: ["Touch-screen interface", "Table management", "Kitchen display system", "Split bills & discounts", "Staff performance tracking", "Multi-branch sync"]
      }
    },
    {
      id: "project-management",
      icon: LayoutGrid,
      name: "Project Management System",
      tagline: "Team collaboration & task tracking",
      description: "Custom project management tools with task boards, team collaboration, time tracking, and progress reporting.",
      startPrice: "150,000",
      timeline: "8-12 weeks",
      caseStudy: {
        client: "Construction Company",
        challenge: "Managing multiple construction projects with different teams, timelines, and budgets was chaotic using spreadsheets.",
        solution: "Created a custom project management system with Gantt charts, resource allocation, and budget tracking.",
        results: ["25% improvement in project delivery", "Better resource utilization", "Clear project visibility"],
        features: ["Kanban & Gantt views", "Task dependencies", "Time tracking", "File sharing", "Team chat", "Progress reports"]
      }
    },
    {
      id: "school",
      icon: GraduationCap,
      name: "School Management System",
      tagline: "Complete education administration",
      description: "Comprehensive systems for student records, grades, attendance, timetables, fees, and parent communication.",
      startPrice: "180,000",
      timeline: "10-14 weeks",
      caseStudy: {
        client: "Private Secondary School",
        challenge: "Paper-based records, manual fee tracking, and no efficient way to communicate with 800+ parents.",
        solution: "Implemented a full school management system with online fee payment, SMS notifications, and parent portal.",
        results: ["90% reduction in admin time", "On-time fee collection improved 60%", "Parent satisfaction up 85%"],
        features: ["Student information system", "Grade management", "Attendance tracking", "Fee management & M-Pesa", "Parent portal", "SMS/Email notifications"]
      }
    },
    {
      id: "hospital",
      icon: Heart,
      name: "Hospital Management System",
      tagline: "Healthcare operations & patient care",
      description: "Patient records, appointment scheduling, billing, pharmacy management, and lab integration for healthcare facilities.",
      startPrice: "250,000",
      timeline: "12-20 weeks",
      caseStudy: {
        client: "Private Medical Clinic",
        challenge: "Patient files were paper-based, appointment scheduling was manual, and billing was disconnected from services.",
        solution: "Built an integrated HMS with electronic health records, appointment booking, and automated billing.",
        results: ["Patient wait time reduced 45%", "Billing accuracy improved 99%", "Paperless operations"],
        features: ["Electronic health records", "Appointment scheduling", "Pharmacy management", "Lab integration", "Billing & insurance", "Doctor dashboards"]
      }
    },
    {
      id: "inventory",
      icon: Package,
      name: "Inventory Management System",
      tagline: "Stock & supply chain control",
      description: "Track stock levels, manage suppliers, automate reordering, and get real-time visibility across warehouses.",
      startPrice: "140,000",
      timeline: "6-10 weeks",
      caseStudy: {
        client: "Wholesale Distributor",
        challenge: "Manual stock counts led to overstocking some items and stockouts on others. No visibility into slow-moving inventory.",
        solution: "Deployed an inventory system with barcode scanning, automated reorder points, and analytics dashboard.",
        results: ["Stockouts reduced by 75%", "Carrying costs down 30%", "Real-time stock visibility"],
        features: ["Barcode/QR scanning", "Multi-warehouse support", "Automated reordering", "Supplier management", "Stock reports", "Expiry tracking"]
      }
    },
    {
      id: "hr",
      icon: UserCog,
      name: "HR Management System",
      tagline: "People operations & payroll",
      description: "Employee data management, payroll processing, leave management, performance reviews, and recruitment tracking.",
      startPrice: "160,000",
      timeline: "8-12 weeks",
      caseStudy: {
        client: "Manufacturing Company",
        challenge: "HR team spent 3 days per month on manual payroll. Leave tracking was via email, causing conflicts and errors.",
        solution: "Implemented HRMS with automated payroll calculation, self-service leave requests, and employee portal.",
        results: ["Payroll processing: 3 days → 2 hours", "Zero payroll errors", "Employee self-service adoption 95%"],
        features: ["Employee database", "Payroll & NSSF/NHIF", "Leave management", "Recruitment pipeline", "Performance reviews", "Employee portal"]
      }
    },
    {
      id: "flight",
      icon: Plane,
      name: "Flight Booking System",
      tagline: "Travel & reservation platform",
      description: "Airline and travel booking platforms with flight search, seat selection, payment processing, and booking management.",
      startPrice: "200,000",
      timeline: "10-16 weeks",
      caseStudy: {
        client: "Travel Agency",
        challenge: "Booking process was manual - calling airlines, writing tickets by hand. Customers expected online booking.",
        solution: "Built a flight booking platform with GDS integration, real-time availability, and online payments.",
        results: ["Booking volume up 200%", "24/7 booking availability", "Commission tracking automated"],
        features: ["Flight search & compare", "Seat selection", "Multi-payment options", "E-ticket generation", "Booking management", "Agent commission tracking"]
      }
    },
    {
      id: "banking",
      icon: Landmark,
      name: "Online Banking System",
      tagline: "Digital financial services",
      description: "Secure user accounts, fund transfers, transaction history, and comprehensive financial management platforms.",
      startPrice: "300,000",
      timeline: "16-24 weeks",
      caseStudy: {
        client: "SACCO",
        challenge: "Members had to visit the office for any transaction. No visibility into their savings or loan status.",
        solution: "Developed a member portal with account access, loan applications, and M-Pesa deposits.",
        results: ["Member satisfaction up 90%", "Office visits reduced 70%", "Loan application time: days → minutes"],
        features: ["Member accounts & login", "Balance & statements", "Fund transfers", "Loan applications", "M-Pesa integration", "Admin controls"]
      }
    }
  ];

  const commonFeatures = [
    { icon: Database, title: "Custom Database", description: "Tailored data architecture for your specific needs" },
    { icon: Lock, title: "Role-Based Access", description: "Secure user roles and permission management" },
    { icon: BarChart3, title: "Analytics Dashboard", description: "Real-time insights and reporting tools" },
    { icon: Cpu, title: "API Integration", description: "Connect with third-party services and tools" },
    { icon: Zap, title: "Automated Workflows", description: "Streamline repetitive processes" },
    { icon: Shield, title: "Security First", description: "Enterprise-grade security measures" }
  ];

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-muted overflow-hidden">
        <FloatingElements density="medium" color="accent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <Breadcrumbs items={[
            { label: "Services", path: "/services" },
            { label: "Custom Systems" }
          ]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge className="mb-4">Enterprise Solutions</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Custom Business Systems
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We design and build comprehensive systems tailored to your specific business domain. 
              From e-commerce to healthcare, our solutions transform how you operate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Discuss Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing/web-development" className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  View Pricing
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Features */}
      <section className="py-16 bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Every System Includes</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {commonFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems with Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Case Studies</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Business Domain Systems
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our specialized solutions with real-world case studies showing measurable results
            </p>
          </div>

          <div className="space-y-16">
            {systems.map((system, index) => {
              const IconComponent = system.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={system.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="scroll-mt-20"
                  id={system.id}
                >
                  <Card className="overflow-hidden border-2 hover:border-accent/50 transition-colors">
                    <div className={`grid lg:grid-cols-2 ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                      {/* System Info */}
                      <div className={`p-8 ${isEven ? '' : 'lg:col-start-2'}`}>
                        <div className="flex items-start gap-4 mb-6">
                          <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-7 h-7 text-accent" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground">{system.name}</h3>
                            <p className="text-accent font-medium">{system.tagline}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-6">{system.description}</p>
                        
                        <div className="flex flex-wrap gap-4 mb-6">
                          <div className="flex items-center gap-2 text-sm">
                            <CreditCard className="w-4 h-4 text-accent" />
                            <span>From KSH {system.startPrice}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-accent" />
                            <span>{system.timeline}</span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {system.caseStudy.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Button asChild>
                          <Link to="/contact" className="flex items-center gap-2">
                            Get Quote <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>

                      {/* Case Study */}
                      <div className={`bg-muted/50 p-8 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                        <Badge variant="outline" className="mb-4">Case Study</Badge>
                        <h4 className="text-lg font-bold mb-2">{system.caseStudy.client}</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <h5 className="text-sm font-semibold text-accent mb-1">Challenge</h5>
                            <p className="text-sm text-muted-foreground">{system.caseStudy.challenge}</p>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-semibold text-accent mb-1">Solution</h5>
                            <p className="text-sm text-muted-foreground">{system.caseStudy.solution}</p>
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-semibold text-accent mb-2">Results</h5>
                            <ul className="space-y-1">
                              {system.caseStudy.results.map((result, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                                  <span className="font-medium">{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to ongoing support, we follow a proven process to deliver successful systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Discovery", description: "We analyze your business processes, pain points, and goals to design the perfect solution." },
              { step: 2, title: "Design", description: "Create detailed wireframes, database schema, and technical specifications for approval." },
              { step: 3, title: "Development", description: "Build your system with regular demos and feedback sessions throughout the process." },
              { step: 4, title: "Launch & Support", description: "Deploy, train your team, and provide ongoing maintenance and support." }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {phase.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{phase.title}</h3>
                <p className="text-muted-foreground text-sm">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your requirements and create a custom solution that drives results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10" asChild>
              <Link to="/pricing/web-development">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CustomSystems;