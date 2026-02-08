"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  gap?: string;
  padding?: string;
  animated?: boolean;
  backgroundColor?: string;
  color?: string;
  loading?: boolean;
  flexDirection?: "row" | "column";
};

const Card = ({
  children,
  className = "",
  gap = "1rem",
  padding = "1rem",
  animated = false,
  backgroundColor = "var(--color-nega-bold-color)",
  color = "var(--color-primary-color)",
  loading = false,
  flexDirection = "column",
  ...props
}: CardProps &
  Omit<
    React.HTMLAttributes<HTMLDivElement>,
    keyof CardProps
  >): React.ReactElement => {
  const styles = {
    ...(flexDirection === "column" ? { flexDirection: "column" as const } : {}),
    ...(backgroundColor ? { backgroundColor } : {}),
    ...(color ? { color } : {}),
    ...(padding ? { padding } : {}),
    ...(gap ? { gap } : {}),
  };

  const baseClassName = clsx(
    "nakas-card",
    loading && "loading pulse",
    className
  );

  if (animated) {
    return (
      <motion.div
        className={baseClassName}
        style={styles}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 320,
          damping: 70,
          mass: 1,
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={baseClassName} style={styles} {...props}>
      {children}
    </div>
  );
};

export default Card;
