import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Code, ShoppingCart, Search, PenTool, Wrench, Mail, Phone, MapPin, FileText, Briefcase, HelpCircle, Shield, Lock, Sparkles, ArrowRight, Star, Zap, Gift, ChevronLeft, ChevronRight } from "lucide-react";
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
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileSupportOpen, setMobileSupportOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { theme } = useTheme();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setMobileServicesOpen(false);
      setMobileSupportOpen(false);
    }, 300); // Match animation duration
  };

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

  const featuredItems = [
    {
      title: "New Year Special",
      description: "Get 20% off all web development packages",
      icon: Gift,
      color: "from-orange-500 to-red-500",
      link: "/pricing"
    },
    {
      title: "Free SEO Audit",
      description: "Discover your website's potential",
      icon: Search,
      color: "from-blue-500 to-cyan-500",
      link: "/services/seo-services"
    },
    {
      title: "Startup Package",
      description: "Complete digital presence for new businesses",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      link: "/services/web-development"
    },
    {
      title: "E-commerce Boost",
      description: "Transform your online store performance",
      icon: ShoppingCart,
      color: "from-green-500 to-emerald-500",
      link: "/services/ecommerce-solutions"
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

  // Featured scroll state
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollFeatured = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(updateScrollButtons, 300);
    }
  };

  // Offers banner state
  const [showBanner, setShowBanner] = useState(true);
  const [currentOffer, setCurrentOffer] = useState(0);

  const offers = [
    { text: "🎄 Holiday Special: 25% off all services until Dec 31st!", link: "/pricing" },
    { text: "⚡ Free website audit - Discover your growth potential", link: "/contact" },
    { text: "🚀 Launch your business online in just 7 days", link: "/services/web-development" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [offers.length]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Offers Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-accent via-primary to-accent overflow-hidden"
          >
            <div className="relative py-2 px-4">
              <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentOffer}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-2"
                  >
                    <Sparkles className="h-4 w-4 text-white animate-pulse" />
                    <Link
                      to={offers[currentOffer].link}
                      className="text-white text-sm font-medium hover:underline"
                    >
                      {offers[currentOffer].text}
                    </Link>
                    <ArrowRight className="h-4 w-4 text-white" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors"
                aria-label="Close banner"
              >
                <X className="h-4 w-4" />
              </button>
              {/* Offer dots indicator */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex gap-1.5">
                {offers.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentOffer(idx)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      idx === currentOffer ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70"
                    )}
                    aria-label={`Go to offer ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className={cn(
        "fixed left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300",
        showBanner ? "top-10" : "top-0",
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
                      <div className="w-[850px] max-w-[90vw] p-0">
                        {/* Featured Scroll Section */}
                        <div className="border-b border-border bg-muted/30 py-3 px-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-accent" />
                              <span className="text-xs font-semibold text-foreground">Featured Offers</span>
                            </div>
                            <div className="flex gap-1">
                              <button
                                onClick={() => scrollFeatured('left')}
                                disabled={!canScrollLeft}
                                className={cn(
                                  "p-1 rounded-full transition-all",
                                  canScrollLeft ? "hover:bg-muted text-foreground" : "text-muted-foreground/40 cursor-not-allowed"
                                )}
                                aria-label="Scroll left"
                              >
                                <ChevronLeft className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => scrollFeatured('right')}
                                disabled={!canScrollRight}
                                className={cn(
                                  "p-1 rounded-full transition-all",
                                  canScrollRight ? "hover:bg-muted text-foreground" : "text-muted-foreground/40 cursor-not-allowed"
                                )}
                                aria-label="Scroll right"
                              >
                                <ChevronRight className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <div
                            ref={scrollContainerRef}
                            onScroll={updateScrollButtons}
                            className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-1"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                          >
                            {featuredItems.map((item, idx) => {
                              const IconComponent = item.icon;
                              return (
                                <Link
                                  key={idx}
                                  to={item.link}
                                  className={cn(
                                    "flex-shrink-0 group relative overflow-hidden rounded-lg p-3 w-[180px]",
                                    "bg-gradient-to-br",
                                    item.color,
                                    "hover:scale-[1.02] transition-all duration-300 hover:shadow-lg"
                                  )}
                                >
                                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                  <div className="relative z-10">
                                    <IconComponent className="h-5 w-5 text-white mb-2" />
                                    <h4 className="text-xs font-bold text-white mb-1">{item.title}</h4>
                                    <p className="text-[10px] text-white/80 leading-tight">{item.description}</p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

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
                                <a href="tel:+254750509252" className="flex items-start gap-3 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">
                                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                                  <span>+254 750 509 252</span>
                                </a>
                                <a href="https://wa.me/254750509252" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm hover:text-primary transition-all duration-300 hover:translate-x-1">
                                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 transition-transform duration-300 hover:scale-110" />
                                  <span>+254 750 509 252 (WhatsApp)</span>
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
                onClick={() => isOpen ? handleClose() : setIsOpen(true)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - OUTSIDE nav container */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div 
            className={cn(
              "absolute inset-0",
              isClosing ? "animate-backdrop-blur-out" : "animate-backdrop-blur-in"
            )}
            onClick={handleClose}
          />
          
          {/* Menu Panel */}
          <div className={cn(
            "absolute inset-0 bg-background flex flex-col",
            isClosing ? "animate-slide-out-right" : "animate-slide-in-right"
          )}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-border">
              <Link to="/" onClick={handleClose}>
                <img
                  src={theme === "dark" ? LogoDark : LogoLight}
                  alt="Waks Digital Partner Logo"
                  className="h-10 w-auto"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            {/* Scrollable Menu Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {/* Nav Links */}
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={handleClose}
                  className={cn(
                    "block px-4 py-3 text-lg font-medium rounded-lg opacity-0",
                    !isClosing && "animate-scale-fade-in",
                    isActive(item.path)
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:bg-muted"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div 
                className={cn(
                  "border border-border rounded-lg overflow-hidden opacity-0",
                  !isClosing && "animate-scale-fade-in"
                )}
                style={{ animationDelay: `${navItems.length * 50}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={cn(
                    "w-full px-4 py-3 text-lg font-medium flex items-center justify-between",
                    mobileServicesOpen ? "bg-accent/10 text-accent" : "text-foreground"
                  )}
                >
                  Services
                  <ChevronDown className={cn(
                    "h-5 w-5 transition-transform",
                    mobileServicesOpen && "rotate-180"
                  )} />
                </button>
                {mobileServicesOpen && (
                  <div className="bg-muted/50 p-2 space-y-1">
                    {serviceItems.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={handleClose}
                          className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-background"
                        >
                          <IconComponent className="h-5 w-5 text-primary" />
                          <span className="text-base">{service.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Pricing */}
              <Link
                to="/pricing"
                onClick={handleClose}
                className={cn(
                  "block px-4 py-3 text-lg font-medium rounded-lg opacity-0",
                  !isClosing && "animate-scale-fade-in",
                  isActive("/pricing")
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:bg-muted"
                )}
                style={{ animationDelay: `${(navItems.length + 1) * 50}ms` }}
              >
                Pricing
              </Link>

              {/* Blog */}
              <Link
                to="/blog"
                onClick={handleClose}
                className={cn(
                  "block px-4 py-3 text-lg font-medium rounded-lg opacity-0",
                  !isClosing && "animate-scale-fade-in",
                  isActive("/blog")
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:bg-muted"
                )}
                style={{ animationDelay: `${(navItems.length + 2) * 50}ms` }}
              >
                Blog
              </Link>

              {/* Support Dropdown */}
              <div 
                className={cn(
                  "border border-border rounded-lg overflow-hidden opacity-0",
                  !isClosing && "animate-scale-fade-in"
                )}
                style={{ animationDelay: `${(navItems.length + 3) * 50}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setMobileSupportOpen(!mobileSupportOpen)}
                  className={cn(
                    "w-full px-4 py-3 text-lg font-medium flex items-center justify-between",
                    mobileSupportOpen ? "bg-accent/10 text-accent" : "text-foreground"
                  )}
                >
                  Support
                  <ChevronDown className={cn(
                    "h-5 w-5 transition-transform",
                    mobileSupportOpen && "rotate-180"
                  )} />
                </button>
                {mobileSupportOpen && (
                  <div className="bg-muted/50 p-2 space-y-1">
                    {supportItems.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.name}
                          to={item.path}
                          onClick={handleClose}
                          className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-background"
                        >
                          <IconComponent className="h-5 w-5 text-primary" />
                          <span className="text-base">{item.name}</span>
                        </Link>
                      );
                    })}
                    {/* Contact Info */}
                    <div className="mt-2 p-3 bg-background rounded-lg space-y-2">
                      <p className="text-sm font-semibold">Contact Us</p>
                      <a href="tel:+254718098165" className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        +254 718 098 165
                      </a>
                      <a href="mailto:info@waksdigital.co.ke" className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        info@waksdigital.co.ke
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Bottom CTA */}
            <div className="p-4 border-t border-border">
              <Button variant="hero" size="lg" className="w-full" asChild>
                <Link to="/contact" onClick={handleClose}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
