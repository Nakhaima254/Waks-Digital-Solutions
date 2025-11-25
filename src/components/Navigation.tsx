import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300",
      isScrolled && "shadow-md"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex justify-between items-center transition-all duration-300",
          isScrolled ? "h-14" : "h-16"
        )}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={theme === "dark" ? LogoDark : LogoLight}
              alt="Waks Digital Partner Logo"
              className={cn(
                "w-auto transition-all duration-300",
                isScrolled ? "h-16" : "h-20"
              )}
              style={{ maxWidth: isScrolled ? 280 : 350 }}
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
                    <div className="w-[800px] max-w-[90vw] p-0">
                      <div className="grid md:grid-cols-[280px_1fr]">
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
                                    "group block select-none space-y-2 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-muted/50 hover:shadow-md hover:scale-[1.02] hover:-translate-y-0.5",
                                    isActive(service.path) && "bg-muted"
                                  )}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="rounded-md bg-primary/10 p-2 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110 mt-0.5">
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
              to="/pricing"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive("/pricing")
                  ? "text-accent bg-accent/10"
                  : "text-foreground hover:text-accent hover:bg-accent/5"
              }`}
            >
              Pricing
            </Link>

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
                    <div className="w-[600px] max-w-[90vw] p-0">
                      <div className="grid md:grid-cols-[250px_1fr]">
                        {/* Contact Info Section */}
                          <div className="bg-muted/50 p-6 border-r">
                            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                            <div className="space-y-4">
                              <a href="mailto:info@waksdigital.co.ke" className="flex items-start gap-3 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">
                                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                                <span>info@waksdigital.co.ke</span>
                              </a>
                              <a href="tel:+254718098165" className="flex items-start gap-3 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">
                                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                                <span>+254 718 098 165</span>
                              </a>
                              <a href="https://wa.me/254746388308" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">
                                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                                <span>+254 746 388 308 (WhatsApp)</span>
                              </a>
                              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                <span>Nairobi, Kenya</span>
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
                                    "group flex items-start gap-3 rounded-lg p-3 transition-all duration-300 hover:bg-muted/50 hover:shadow-sm hover:translate-x-1",
                                    isActive(item.path) && "bg-muted"
                                  )}
                                >
                                  <div className="rounded-md bg-primary/10 p-2 transition-all duration-300 group-hover:bg-primary/15 group-hover:scale-110">
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
          <>
            {/* Backdrop overlay */}
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden animate-fade-in"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile menu - Full screen */}
            <div className="md:hidden fixed inset-0 bg-background z-[70] animate-slide-in-right overflow-hidden flex flex-col">
              {/* Header with close button */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-border bg-background">
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
                  <img
                    src={theme === "dark" ? LogoDark : LogoLight}
                    alt="Waks Digital Partner Logo"
                    className="h-12 w-auto"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-10 w-10 rounded-full hover:bg-accent/10"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              
              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center px-4 py-4 text-base font-medium rounded-xl transition-all duration-200",
                      isActive(item.path)
                        ? "text-accent bg-accent/10 border border-accent/20"
                        : "text-foreground hover:text-accent hover:bg-muted/50"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Services Dropdown */}
                <div className="rounded-xl border border-border overflow-hidden">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={cn(
                      "w-full px-4 py-4 text-base font-medium flex items-center justify-between transition-all duration-200",
                      mobileServicesOpen ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted/50"
                    )}
                  >
                    <span>Services</span>
                    <ChevronDown className={cn(
                      "h-5 w-5 transition-transform duration-300",
                      mobileServicesOpen && "rotate-180"
                    )} />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    mobileServicesOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="p-3 space-y-2 bg-muted/30">
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
                            className={cn(
                              "flex items-start gap-4 p-4 rounded-lg transition-all duration-200",
                              isActive(service.path)
                                ? "bg-accent/15 border border-accent/30"
                                : "bg-background hover:bg-accent/5 border border-transparent"
                            )}
                          >
                            <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                              <IconComponent className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-base text-foreground">{service.name}</div>
                              <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{service.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Mobile Pricing Link */}
                <Link
                  to="/pricing"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-4 text-base font-medium rounded-xl transition-all duration-200",
                    isActive("/pricing")
                      ? "text-accent bg-accent/10 border border-accent/20"
                      : "text-foreground hover:text-accent hover:bg-muted/50"
                  )}
                >
                  Pricing
                </Link>

                {/* Mobile Blog Link */}
                <Link
                  to="/blog"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center px-4 py-4 text-base font-medium rounded-xl transition-all duration-200",
                    isActive("/blog")
                      ? "text-accent bg-accent/10 border border-accent/20"
                      : "text-foreground hover:text-accent hover:bg-muted/50"
                  )}
                >
                  Blog
                </Link>

                {/* Mobile Support Dropdown */}
                <div className="rounded-xl border border-border overflow-hidden">
                  <button
                    onClick={() => setMobileSupportOpen(!mobileSupportOpen)}
                    className={cn(
                      "w-full px-4 py-4 text-base font-medium flex items-center justify-between transition-all duration-200",
                      mobileSupportOpen ? "bg-accent/10 text-accent" : "text-foreground hover:bg-muted/50"
                    )}
                  >
                    <span>Support</span>
                    <ChevronDown className={cn(
                      "h-5 w-5 transition-transform duration-300",
                      mobileSupportOpen && "rotate-180"
                    )} />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    mobileSupportOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="p-3 space-y-3 bg-muted/30">
                      {/* Contact Info Card */}
                      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-5 space-y-4 border border-primary/20">
                        <h4 className="font-bold text-base text-foreground">Contact Info</h4>
                        <div className="space-y-3">
                          <a href="mailto:info@waksdigital.co.ke" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                            <div className="rounded-lg bg-primary/10 p-2">
                              <Mail className="h-4 w-4 text-primary" />
                            </div>
                            <span>info@waksdigital.co.ke</span>
                          </a>
                          <a href="tel:+254718098165" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                            <div className="rounded-lg bg-primary/10 p-2">
                              <Phone className="h-4 w-4 text-primary" />
                            </div>
                            <span>+254 718 098 165</span>
                          </a>
                          <a href="https://wa.me/254746388308" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                            <div className="rounded-lg bg-primary/10 p-2">
                              <Phone className="h-4 w-4 text-primary" />
                            </div>
                            <span>+254 746 388 308 (WhatsApp)</span>
                          </a>
                          <div className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="rounded-lg bg-muted p-2">
                              <MapPin className="h-4 w-4" />
                            </div>
                            <span>Nairobi, Kenya</span>
                          </div>
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
                            className={cn(
                              "flex items-start gap-4 p-4 rounded-lg transition-all duration-200",
                              isActive(item.path)
                                ? "bg-accent/15 border border-accent/30"
                                : "bg-background hover:bg-accent/5 border border-transparent"
                            )}
                          >
                            <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                              <IconComponent className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-base text-foreground">{item.name}</div>
                              <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Fixed bottom CTA */}
              <div className="px-4 py-4 border-t border-border bg-background">
                <Button variant="hero" size="lg" className="w-full text-base py-6" asChild onClick={() => setIsOpen(false)}>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
