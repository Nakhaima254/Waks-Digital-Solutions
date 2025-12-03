import { Home, Users, Briefcase, DollarSign, BookOpen, Globe, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";

const menuItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "About", icon: Users, path: "/about" },
  { label: "Services", icon: Briefcase, path: "/services" },
  { label: "Pricing", icon: DollarSign, path: "/pricing" },
  { label: "Blog", icon: BookOpen, path: "/blog" },
];

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "sw", label: "Swahili", flag: "🇰🇪" },
  { code: "fr", label: "French", flag: "🇫🇷" },
];

const FloatingMenu = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if site is already favorited on mount
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(window.location.origin));
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode);
    const lang = languages.find(l => l.code === langCode);
    toast.success(`Language changed to ${lang?.label}`);
  };

  const handleAddToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const siteUrl = window.location.origin;
    
    if (isFavorite) {
      const newFavorites = favorites.filter((f: string) => f !== siteUrl);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      setIsFavorite(false);
      toast.success("Removed from favorites");
    } else {
      favorites.push(siteUrl);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
      toast.success("Added to favorites! Press Ctrl+D to bookmark in browser.");
    }
  };

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
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-4 sm:left-1/2 sm:-translate-x-1/2 z-50"
        >
        <motion.nav 
          className={cn(
            "flex items-center gap-0.5 sm:gap-1 border border-border rounded-full px-1.5 sm:px-2 py-1.5 sm:py-2 shadow-lg relative",
            isScrolling 
              ? "bg-background/40 backdrop-blur-2xl shadow-primary/3" 
              : "bg-background/80 backdrop-blur-xl shadow-primary/5"
          )}
          animate={{ opacity: isScrolling ? 0.7 : 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link key={item.path} to={item.path} className="relative">
                <div
                  className={cn(
                    "flex flex-col items-center gap-0.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full relative z-10 transition-transform duration-200",
                    "hover:scale-105 active:scale-95",
                    active ? "text-primary-foreground" : ""
                  )}
                >
                  {active && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-full shadow-lg shadow-primary/30"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 relative z-10" />
                  <span className="text-[9px] sm:text-[10px] font-medium relative z-10">{item.label}</span>
                </div>
              </Link>
            );
          })}

          {/* Divider */}
          <div className="h-6 sm:h-8 w-px bg-border/50 mx-0.5 sm:mx-1" />

          {/* Language Selector */}
          <Popover>
            <PopoverTrigger asChild>
              <button
                className="flex flex-col items-center gap-0.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full relative z-10 transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <Globe className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span className="text-[9px] sm:text-[10px] font-medium">
                  {languages.find(l => l.code === currentLang)?.flag}
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-36 p-1 bg-background border border-border" side="top" sideOffset={12}>
              <div className="flex flex-col gap-0.5">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors",
                      currentLang === lang.code
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    )}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>

          {/* Add to Favorites */}
          <button
            onClick={handleAddToFavorites}
            className="flex flex-col items-center gap-0.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full relative z-10 transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <Heart 
              className={cn(
                "h-3.5 w-3.5 sm:h-4 sm:w-4 transition-colors",
                isFavorite ? "fill-red-500 text-red-500" : ""
              )} 
            />
            <span className="text-[9px] sm:text-[10px] font-medium">
              {isFavorite ? "Saved" : "Save"}
            </span>
          </button>
        </motion.nav>
      </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingMenu;
