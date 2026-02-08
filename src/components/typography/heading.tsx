"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

import { ElementSize } from "../../types.js";

type HeadingType = "h1" | "h2" | "h3" | "h4";

const defaultSizeByType: Record<HeadingType, ElementSize> = {
  h1: "xl",
  h2: "lg",
  h3: "md",
  h4: "sm",
};

interface HeadingBaseProps {
  children: React.ReactNode;
  className?: string;
  type?: HeadingType;
  color?: string;
  animated?: boolean;
  fullWidth?: boolean;
  size?: ElementSize;
}

type HeadingProps =
  | (HeadingBaseProps &
      React.HTMLAttributes<HTMLHeadingElement> & { type?: "h1" })
  | (HeadingBaseProps &
      React.HTMLAttributes<HTMLHeadingElement> & { type: "h2" })
  | (HeadingBaseProps &
      React.HTMLAttributes<HTMLHeadingElement> & { type: "h3" })
  | (HeadingBaseProps &
      React.HTMLAttributes<HTMLHeadingElement> & { type: "h4" });

const Heading = ({
  children,
  className = "",
  type = "h1",
  color = "var(--color-primary-color)",
  animated = false,
  fullWidth = false,
  size,
  ...props
}: HeadingProps): React.ReactElement => {
  let Component: React.ElementType = type;

  if (animated) {
    if (type === "h1") Component = motion.h1;
    else if (type === "h2") Component = motion.h2;
    else if (type === "h3") Component = motion.h3;
    else Component = motion.h4;
  }

  const animationProps = animated
    ? {
        initial: { y: 120, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: {
          type: "spring" as const,
          stiffness: 280,
          damping: 70,
          mass: 1,
        },
      }
    : {};

  const finalSize: ElementSize = size || defaultSizeByType[type];

  return (
    <Component
      className={clsx(
        "nakas-heading",
        `heading-${finalSize}`,
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

export default Heading;
