import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
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
  const location = useLocation();
  const { theme } = useTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const serviceItems = [
    {
      name: "Web Development",
      path: "/services/web-development",
      description: "Custom, scalable websites built from scratch"
    },
    {
      name: "WordPress Design",
      path: "/services/wordpress-design",
      description: "Professional WordPress websites with easy management"
    },
    {
      name: "E-commerce Solutions",
      path: "/services/ecommerce-solutions",
      description: "Complete online stores to sell your products"
    },
    {
      name: "SEO Services",
      path: "/services/seo-services",
      description: "Improve your search engine visibility"
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
                  <NavigationMenuContent>
                    <div className="grid w-[600px] gap-3 p-6 md:grid-cols-2">
                      {serviceItems.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                            isActive(service.path) && "bg-accent/10"
                          )}
                        >
                          <div className="text-sm font-medium leading-none">{service.name}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {service.description}
                          </p>
                        </Link>
                      ))}
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
                    {serviceItems.map((service) => (
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
                        <div className="font-medium text-sm">{service.name}</div>
                        <div className="text-xs text-muted-foreground mt-1">{service.description}</div>
                      </Link>
                    ))}
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
