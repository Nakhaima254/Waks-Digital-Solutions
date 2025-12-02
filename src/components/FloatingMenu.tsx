import { Home, Users, Briefcase, DollarSign } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "About", icon: Users, path: "/about" },
  { label: "Services", icon: Briefcase, path: "/services" },
  { label: "Pricing", icon: DollarSign, path: "/pricing" },
];

const FloatingMenu = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
      <nav className="flex items-center gap-2 bg-background/80 backdrop-blur-xl border border-border rounded-full px-4 py-3 shadow-lg shadow-primary/5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 rounded-full transition-all duration-300",
                "hover:bg-primary/10 hover:scale-105",
                active && "bg-primary text-primary-foreground scale-105"
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default FloatingMenu;
