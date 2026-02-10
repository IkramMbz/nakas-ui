"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ElementSize } from "src/types.js";

type TextLinkProps = {
  children: React.ReactNode;
  href: string;
  size?: ElementSize;
  className?: string;
  external?: boolean;
  animated?: boolean;
};

const TextLink = ({
  children,
  href,
  size = "md",
  className = "",
  external = false,
  animated = false,
}: TextLinkProps): React.ReactElement => {
  if (external && animated) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx("nakas-text-link", className)}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.a>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx("nakas-text-link", `text-${size}`, className)}
      >
        {children}
      </a>
    );
  }

  if (animated) {
    return (
      <motion.a
        href={href}
        className={clsx("nakas-text-link", `text-${size}`, className)}
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <a
      href={href}
      className={clsx("nakas-text-link", `text-${size}`, className)}
    >
      {children}
    </a>
  );
};

export default TextLink;
