"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";

type TogglerProps = {
  value: boolean;
  onChange: (next: boolean) => void;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  thumbClassName?: string;
  trackClassName?: string;
};

const Toggler = ({
  value,
  onChange,
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
        internalValue && "nakas-toggler-active",
        disabled && "toggler-disabled",
        trackClassName
      )}
    >
      <span
        className={clsx(
          "toggler-thumb",
          internalValue && "toggler-thumb-active",
          thumbClassName
        )}
      >
        {internalValue ? rightIcon : leftIcon}
      </span>
    </button>
  );
};

export default Toggler;
