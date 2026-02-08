"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ElementSize } from "src/types.js";

interface BodyTextBaseProps {
  children: React.ReactNode;
  className?: string;
  size?: ElementSize;
  type?: "p" | "span";
  color?: string;
  animated?: boolean;
  fullWidth?: boolean;
}

type BodyTextProps =
  | (BodyTextBaseProps &
      React.HTMLAttributes<HTMLParagraphElement> & { type?: "p" })
  | (BodyTextBaseProps &
      React.HTMLAttributes<HTMLSpanElement> & { type: "span" });

const BodyText = ({
  children,
  className = "",
  size = "lg",
  type = "p",
  color = "var(--color-primary-color)",
  animated = false,
  fullWidth = false,
  ...props
}: BodyTextProps): React.ReactElement => {
  let Component: React.ElementType = type;

  if (animated) {
    Component = type === "p" ? motion.p : motion.span;
  }

  const animationProps = animated
    ? {
        initial: { y: 120, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: {
          type: "spring" as const,
          stiffness: 320,
          damping: 70,
          mass: 1,
        },
      }
    : {};

  return (
    <Component
      className={clsx(
        "nakas-text",
        `text-${size}`,
        fullWidth && "w-full",
        className
      )}
      {...animationProps}
      style={{ color }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default BodyText;
