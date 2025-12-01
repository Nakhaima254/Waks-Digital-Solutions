import { useParallax } from "@/hooks/useParallax";
import { cn } from "@/lib/utils";

interface FloatingElementsProps {
  density?: "low" | "medium" | "high";
  color?: "primary" | "accent" | "mixed";
}

const FloatingElements = ({ density = "medium", color = "mixed" }: FloatingElementsProps) => {
  const offset1 = useParallax({ speed: 0.3, direction: "up" });
  const offset2 = useParallax({ speed: 0.5, direction: "down" });
  const offset3 = useParallax({ speed: 0.2, direction: "up" });

  const elementCount = density === "low" ? 3 : density === "high" ? 8 : 5;
  
  const getColorClasses = (index: number) => {
    if (color === "primary") return "bg-primary/10 border-primary/20";
    if (color === "accent") return "bg-accent/10 border-accent/20";
    
    // Mixed colors
    return index % 2 === 0 
      ? "bg-primary/10 border-primary/20" 
      : "bg-accent/10 border-accent/20";
  };

  const elements = [
    // Large circle - top right
    {
      size: "w-64 h-64 md:w-96 md:h-96",
      position: "top-10 -right-20 md:-right-32",
      offset: offset1,
      delay: "0s",
      blur: "blur-3xl"
    },
    // Medium circle - bottom left
    {
      size: "w-48 h-48 md:w-72 md:h-72",
      position: "bottom-20 -left-16 md:-left-24",
      offset: offset2,
      delay: "1s",
      blur: "blur-2xl"
    },
    // Small circle - top left
    {
      size: "w-32 h-32 md:w-48 md:h-48",
      position: "top-32 left-10 md:left-20",
      offset: offset3,
      delay: "2s",
      blur: "blur-2xl"
    },
    // Medium circle - middle right
    {
      size: "w-40 h-40 md:w-56 md:h-56",
      position: "top-1/2 -right-12 md:-right-20",
      offset: offset1 * 0.7,
      delay: "1.5s",
      blur: "blur-3xl"
    },
    // Small accent - bottom right
    {
      size: "w-24 h-24 md:w-32 md:h-32",
      position: "bottom-32 right-16 md:right-32",
      offset: offset2 * 0.8,
      delay: "0.5s",
      blur: "blur-xl"
    },
    // Extra element for high density
    {
      size: "w-20 h-20 md:w-28 md:h-28",
      position: "top-1/3 left-1/4",
      offset: offset3 * 1.2,
      delay: "2.5s",
      blur: "blur-2xl"
    },
    // Extra element for high density
    {
      size: "w-36 h-36 md:w-44 md:h-44",
      position: "bottom-1/3 right-1/4",
      offset: offset1 * 0.9,
      delay: "3s",
      blur: "blur-3xl"
    },
    // Extra element for high density
    {
      size: "w-28 h-28 md:w-40 md:h-40",
      position: "top-2/3 left-1/3",
      offset: offset2 * 1.1,
      delay: "3.5s",
      blur: "blur-2xl"
    }
  ].slice(0, elementCount);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <div
          key={index}
          className={cn(
            "absolute rounded-full border opacity-40",
            "animate-parallax-float",
            element.size,
            element.position,
            element.blur,
            getColorClasses(index)
          )}
          style={{
            transform: `translateY(${element.offset}px)`,
            animationDelay: element.delay,
            transition: "transform 0.1s linear"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
