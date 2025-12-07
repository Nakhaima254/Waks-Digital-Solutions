import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scale" | "slideUp" | "bounceIn" | "flipIn" | "rotateIn";
  once?: boolean;
}

const animations: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  },
  flipIn: {
    hidden: { opacity: 0, rotateX: -90 },
    visible: { opacity: 1, rotateX: 0 }
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1 }
  }
};

export const AnimatedElement = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  animation = "fadeUp",
  once = true
}: AnimatedElementProps) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({
  children,
  className = "",
  animation = "fadeUp"
}: {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scale";
}) => {
  return (
    <motion.div
      className={className}
      variants={animations[animation]}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export const HoverCard = ({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

export const FloatingIcon = ({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export const CountUpNumber = ({
  end,
  suffix = "",
  prefix = "",
  className = ""
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) => {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {prefix}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {end}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {suffix}
      </motion.span>
    </motion.span>
  );
};
