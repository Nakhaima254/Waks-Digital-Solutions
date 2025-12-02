import { Home, Users, Briefcase, DollarSign } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "About", icon: Users, path: "/about" },
  { label: "Services", icon: Briefcase, path: "/services" },
  { label: "Pricing", icon: DollarSign, path: "/pricing" },
];

const FloatingMenu = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      
      // Hide when within 200px of bottom
      const isNearBottom = scrollTop + clientHeight >= scrollHeight - 200;
      setIsVisible(!isNearBottom);
      
      // Set scrolling state
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
        <motion.nav 
          className={cn(
            "flex items-center gap-1 border border-border rounded-full px-2 py-2 shadow-lg relative",
            isScrolling 
              ? "bg-background/40 backdrop-blur-2xl shadow-primary/3" 
              : "bg-background/80 backdrop-blur-xl shadow-primary/5"
          )}
          animate={{ opacity: isScrolling ? 0.7 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link key={item.path} to={item.path} className="relative">
                <motion.div
                  className={cn(
                    "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full relative z-10",
                    active ? "text-primary-foreground" : ""
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {active && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="h-4 w-4 relative z-10" />
                  <span className="text-[10px] font-medium relative z-10">{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </motion.nav>
      </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingMenu;
