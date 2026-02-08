"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

type TextLinkProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  external?: boolean;
  animated?: boolean;
};

const TextLink = ({
  children,
  href,
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
        className={clsx("nakas-text-link", className)}
      >
        {children}
      </a>
    );
  }

  if (animated) {
    return (
      <motion.a
        href={href}
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

  return (
    <a href={href} className={clsx("nakas-text-link", className)}>
      {children}
    </a>
  );
};

export default TextLink;
