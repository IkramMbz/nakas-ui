"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

import BodyText from "../typography/body-text.js";
import TextLink from "../typography/text-link.js";

export interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  description?: string;
  label?: string;
  flexRow?: boolean;
  buttonLabel?: string;
  buttonHref?: string;
  appIcon?: React.ReactNode;
}

const SectionTitle = ({
  children,
  description,
  flexRow = false,
  className = "",
  buttonLabel,
  buttonHref,
  label,
  appIcon,
}: SectionTitleProps): React.ReactElement => {
  return (
    <div
      className={clsx(
        !flexRow ? "section-flex-col" : "section-flex-row",
        className
      )}
    >
      {label && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
          className="flex-row"
        >
          <BodyText size="sm">{label}</BodyText>

          {appIcon && <span>{appIcon}</span>}
        </motion.div>
      )}

      {children}

      {description && (
        <BodyText className="section-title-description">{description}</BodyText>
      )}

      {buttonLabel && buttonHref && (
        <TextLink href={buttonHref} className="section-title-button">
          {buttonLabel}
        </TextLink>
      )}
    </div>
  );
};

export default SectionTitle;
