"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

export interface TogglerProps {
  value: boolean;
  onChange: (next: boolean) => void;
  backgroundColor?: string;
  color?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  thumbClassName?: string;
  trackClassName?: string;
}

const Toggler = ({
  value,
  onChange,
  backgroundColor = "var(--color-nega-background)",
  color = "var(--color-nega-bold-color)",
  disabled = false,
  leftIcon,
  rightIcon,
  thumbClassName = "",
  trackClassName = "",
}: TogglerProps): React.ReactElement => {
  const [internalValue, setInternalValue] = useState(value);

  useEffect((): void => {
    setInternalValue(value);
  }, [value]);

  const toggle = (): void => {
    if (!disabled) {
      const next = !internalValue;
      setInternalValue(next);
      onChange(next);
    }
  };

  return (
    <button
      role="switch"
      aria-checked={internalValue}
      tabIndex={disabled ? -1 : 0}
      onClick={toggle}
      className={clsx(
        "nakas-toggler",
        disabled && "toggler-disabled",
        trackClassName
      )}
      style={{ backgroundColor: backgroundColor }}
    >
      <span
        className={clsx(
          "toggler-thumb",
          internalValue && "toggler-thumb-active",
          thumbClassName
        )}
        style={{
          color: color,
        }}
      >
        {internalValue ? rightIcon : leftIcon}
      </span>
    </button>
  );
};

export default Toggler;
