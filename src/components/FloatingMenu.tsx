import { Home, Users, Briefcase, DollarSign } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "About", icon: Users, path: "/about" },
  { label: "Services", icon: Briefcase, path: "/services" },
  { label: "Pricing", icon: DollarSign, path: "/pricing" },
];

const FloatingMenu = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      
      // Hide when within 200px of bottom
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 200;
      setIsVisible(!isNearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      )}
    >
      <nav className="flex items-center gap-1 bg-background/80 backdrop-blur-xl border border-border rounded-full px-2 py-2 shadow-lg shadow-primary/5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full transition-all duration-300",
                "hover:bg-primary/10 hover:scale-105",
                active && "bg-primary text-primary-foreground scale-105"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default FloatingMenu;
