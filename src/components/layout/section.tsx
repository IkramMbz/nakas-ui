"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

type SectionProps = {
  children: React.ReactNode;
  fullwidth?: boolean;
  className?: string;
  displayGrid?: boolean;
  firstSection?: boolean;
  flexDirection?: "row" | "column";
  animated?: boolean;
};

const Section = ({
  children,
  fullwidth = false,
  displayGrid = false,
  firstSection = false,
  flexDirection = "column",
  className = "",
  animated = false,
  ...props
}: SectionProps &
  Omit<
    React.HTMLAttributes<HTMLElement>,
    keyof SectionProps
  >): React.ReactElement => {
  const baseClassName = clsx(
    "nakas-section",
    firstSection && "section-first",
    !displayGrid
      ? flexDirection === "column"
        ? "section-flex-col"
        : "flex"
      : "section-grid",
    fullwidth && "section-fullwidth",
    className
  );

  if (animated) {
    return (
      <motion.section
        className={baseClassName}
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 70,
          mass: 1,
        }}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <section className={baseClassName} {...props}>
      {children}
    </section>
  );
};

export default Section;
