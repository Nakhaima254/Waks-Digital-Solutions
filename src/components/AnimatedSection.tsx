import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade" | "slide" | "depth" | "scale";
  delay?: number;
  parallax?: boolean;
}

const AnimatedSection = ({ 
  children, 
  className, 
  animation = "depth",
  delay = 0,
  parallax = false
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!parallax) return;

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrolled = window.scrollY;
        const elementTop = rect.top + scrolled;
        const windowHeight = window.innerHeight;
        
        // Calculate parallax offset (slower than scroll)
        const scrollProgress = (scrolled - elementTop + windowHeight) / (windowHeight + rect.height);
        const parallaxOffset = scrollProgress * 50 - 25; // Range: -25 to 25
        
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallax]);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";
    
    switch (animation) {
      case "fade":
        return "animate-fade-in";
      case "slide":
        return "animate-page-enter";
      case "depth":
        return "animate-depth-fade-in";
      case "scale":
        return "animate-scale-fade-in";
      default:
        return "animate-depth-fade-in";
    }
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        "transition-all duration-700",
        getAnimationClass(),
        className
      )}
      style={{
        animationDelay: `${delay}ms`,
        transform: parallax ? `translateY(${offset}px)` : undefined,
        transition: parallax ? "transform 0.1s linear" : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;