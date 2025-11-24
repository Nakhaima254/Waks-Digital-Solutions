import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Code, ShoppingCart, Search, PenTool, Wrench, Mail, Phone, MapPin, FileText, Briefcase, HelpCircle, Shield, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import LogoLight from "@/assets/Waks Tech-03.svg";
import LogoDark from "/Waks Tech-04.png";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSupportOpen, setMobileSupportOpen] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
  ];

  const serviceItems = [
    {
      name: "Web Development",
      path: "/services/web-development",
      description: "Custom, scalable websites built from scratch",
      icon: Code
    },
    {
      name: "WordPress Design",
      path: "/services/wordpress-design",
      description: "Professional WordPress websites with easy management",
      icon: Code
    },
    {
      name: "E-commerce Solutions",
      path: "/services/ecommerce-solutions",
      description: "Complete online stores to sell your products",
      icon: ShoppingCart
    },
    {
      name: "SEO Services",
      path: "/services/seo-services",
      description: "Improve your search engine visibility",
      icon: Search
    },
    {
      name: "Copywriting Services",
      path: "/services/copywriting",
      description: "Engaging content that converts visitors to customers",
      icon: PenTool
    },
    {
      name: "Web Maintenance",
      path: "/services/web-maintenance",
      description: "Keep your website secure, updated and running smoothly",
      icon: Wrench
    },
  ];

  const supportItems = [
    {
      name: "Services",
      path: "/services",
      description: "Explore our Services",
      icon: Briefcase
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      description: "Explore our portfolio",
      icon: Briefcase
    },
    {
      name: "Frequently Asked Questions",
      path: "/faq",
      description: "Explore faqs",
      icon: HelpCircle
    },
    {
      name: "Terms and Conditions",
      path: "/terms",
      description: "View terms and Conditions",
      icon: FileText
    },
    {
      name: "Privacy Policy",
      path: "/privacy",
      description: "View Privacy Policy",
      icon: Lock
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={theme === "dark" ? LogoDark : LogoLight}
              alt="Waks Digital Partner Logo"
              className="h-20 w-auto"
              style={{ maxWidth: 350 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:text-accent hover:bg-accent/5"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Mega Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="animate-fade-in">
                    <div className="w-[900px] p-0">
                      <div className="grid md:grid-cols-[350px_1fr]">
                        {/* Featured Image Section */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-primary to-accent p-8 flex flex-col justify-center">
                          <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-white mb-4">Our Services</h3>
                            <p className="text-white/90 text-sm leading-relaxed mb-6">
                              Comprehensive digital solutions tailored to grow your business and establish your online presence.
                            </p>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-white/90 text-sm">
                                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                <span>Expert team of developers</span>
                              </div>
                              <div className="flex items-center gap-2 text-white/90 text-sm">
                                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                <span>Proven track record</span>
                              </div>
                              <div className="flex items-center gap-2 text-white/90 text-sm">
                                <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                                <span>Ongoing support</span>
                              </div>
                            </div>
                          </div>
                          {/* Decorative elements */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                        </div>

                        {/* Services Grid */}
                        <div className="p-6">
                          <div className="grid gap-3 md:grid-cols-2">
                            {serviceItems.map((service) => {
                              const IconComponent = service.icon;
                              
                              return (
                                <Link
                                  key={service.name}
                                  to={service.path}
                                  className={cn(
                                    "group block select-none space-y-2 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:shadow-md hover:scale-[1.02] hover:-translate-y-0.5",
                                    isActive(service.path) && "bg-accent/10"
                                  )}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="rounded-md bg-primary/10 p-2 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 mt-0.5">
                                      <IconComponent className="h-4 w-4 text-primary transition-transform duration-300 group-hover:rotate-3" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="text-sm font-semibold leading-none text-foreground mb-1">{service.name}</div>
                                      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                        {service.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Blog Link */}
            <Link
              to="/blog"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/blog")
                  ? "text-accent bg-accent/10"
                  : "text-foreground hover:text-accent hover:bg-accent/5"
              }`}
            >
              Blog
            </Link>

            {/* Support Mega Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Support
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="animate-fade-in">
                    <div className="w-[700px] p-0">
                      <div className="grid md:grid-cols-[300px_1fr]">
                        {/* Contact Info Section */}
                        <div className="bg-muted/50 p-6 border-r">
                          <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                          <div className="space-y-4">
                            <a href="https://wakstech.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">
                              <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                              <span className="break-all">www.wakstech.com</span>
                            </a>
                            <a href="mailto:info@wakstech.com" className="flex items-start gap-3 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">
                              <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                              <span>info@wakstech.com</span>
                            </a>
                            <a href="tel:+254798435087" className="flex items-start gap-3 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">
                              <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                              <span>+254 798 435 087</span>
                            </a>
                            <div className="flex items-start gap-3 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>Kanu Street, Langa Langa<br />Nakuru, Kenya</span>
                            </div>
                          </div>
                          <Button variant="default" size="sm" className="w-full mt-6" asChild>
                            <Link to="/contact">I Need More Info</Link>
                          </Button>
                        </div>

                        {/* Support Links */}
                        <div className="p-6">
                          <div className="grid gap-2">
                            {supportItems.map((item) => {
                              const IconComponent = item.icon;
                              
                              return (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  className={cn(
                                    "group flex items-start gap-3 rounded-lg p-3 transition-all duration-300 hover:bg-accent hover:shadow-sm hover:translate-x-1",
                                    isActive(item.path) && "bg-accent/10"
                                  )}
                                >
                                  <div className="rounded-md bg-primary/10 p-2 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                                    <IconComponent className="h-4 w-4 text-primary transition-transform duration-300 group-hover:rotate-12" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-sm font-semibold leading-none text-foreground mb-1">{item.name}</div>
                                    <p className="text-xs leading-snug text-muted-foreground">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <ThemeToggle />
            <Button variant="hero" size="sm" asChild className="ml-2">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.path)
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services Dropdown */}
              <div className="border-t pt-2">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-accent hover:bg-accent/5 flex items-center justify-between transition-colors"
                >
                  Services
                  <ChevronDown className={cn("h-4 w-4 transition-transform", mobileServicesOpen && "rotate-180")} />
                </button>
                {mobileServicesOpen && (
                  <div className="mt-2 space-y-1 pl-4">
                    {serviceItems.map((service) => {
                      const IconComponent = service.icon;
                      
                      return (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className={`block px-3 py-3 rounded-md transition-colors ${
                            isActive(service.path)
                              ? "text-accent bg-accent/10"
                              : "text-foreground hover:text-accent hover:bg-accent/5"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="rounded-md bg-primary/10 p-2">
                              <IconComponent className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">{service.name}</div>
                              <div className="text-xs text-muted-foreground mt-1">{service.description}</div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Mobile Support Dropdown */}
              <div className="border-t pt-2">
                <button
                  onClick={() => setMobileSupportOpen(!mobileSupportOpen)}
                  className="w-full px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-accent hover:bg-accent/5 flex items-center justify-between transition-colors"
                >
                  Support
                  <ChevronDown className={cn("h-4 w-4 transition-transform", mobileSupportOpen && "rotate-180")} />
                </button>
                {mobileSupportOpen && (
                  <div className="mt-2 space-y-3 pl-4">
                    {/* Contact Info */}
                    <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                      <h4 className="font-semibold text-sm">Contact Info</h4>
                      <a href="https://wakstech.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs hover:text-primary">
                        <Mail className="h-3 w-3" />
                        <span>www.wakstech.com</span>
                      </a>
                      <a href="mailto:info@wakstech.com" className="flex items-center gap-2 text-xs hover:text-primary">
                        <Mail className="h-3 w-3" />
                        <span>info@wakstech.com</span>
                      </a>
                      <a href="tel:+254798435087" className="flex items-center gap-2 text-xs hover:text-primary">
                        <Phone className="h-3 w-3" />
                        <span>+254 798 435 087</span>
                      </a>
                      <div className="flex items-start gap-2 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mt-0.5" />
                        <span>Kanu Street, Langa Langa, Nakuru, Kenya</span>
                      </div>
                    </div>
                    
                    {/* Support Links */}
                    {supportItems.map((item) => {
                      const IconComponent = item.icon;
                      
                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileSupportOpen(false);
                          }}
                          className={`block px-3 py-3 rounded-md transition-colors ${
                            isActive(item.path)
                              ? "text-accent bg-accent/10"
                              : "text-foreground hover:text-accent hover:bg-accent/5"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="rounded-md bg-primary/10 p-2">
                              <IconComponent className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <div className="font-medium text-sm">{item.name}</div>
                              <div className="text-xs text-muted-foreground mt-1">{item.description}</div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="px-3 py-2 space-y-2 border-t pt-2">
                <Button variant="hero" size="sm" className="w-full" asChild onClick={() => setIsOpen(false)}>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
