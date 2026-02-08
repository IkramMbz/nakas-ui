import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { ElementSize } from "src/types.js";

import ErrorBlock from "../ui/error-block.js";

type SelectProps<T> = {
  label?: string;
  required?: boolean;
  size?: ElementSize;
  error?: string;
  value?: T;
  items: readonly T[];
  onChange?: (value: T) => void;
  getItemKey: (item: T) => string;
  getItemLabel: (item: T) => string;
  className?: string;
  dropdownClassName?: string;
  disabled?: boolean;
  placeholder?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Select = <T,>({
  label,
  required = false,
  size = "md",
  error,
  value,
  items,
  onChange,
  getItemKey,
  getItemLabel,
  className = "",
  dropdownClassName = "",
  disabled = false,
  placeholder = "Select...",
  ...props
}: SelectProps<T>): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedKey = value ? getItemKey(value) : null;

  const selectedLabel = useMemo((): string => {
    if (!value) return placeholder;
    return getItemLabel(value);
  }, [value, getItemLabel, placeholder]);

  useEffect((): void | (() => void) => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent): void => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleSelect = (item: T): void => {
    onChange?.(item);
    setOpen(false);
  };

  return (
    <div className="flex-col" ref={ref} {...props}>
      {label && (
        <label>
          {label}
          {required && <span className="nakas-required-indicator">*</span>}
        </label>
      )}

      <div className="cursor-pointer nakas-select-container">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setOpen((p) => !p)}
          className={clsx(
            "nakas-form-field",
            `nakas-form-item-${size}`,
            error && "error",
            className
          )}
        >
          <span className="select-value">{selectedLabel}</span>
          <ChevronDown
            size={16}
            className={clsx("select-icon", open && "select-icon-open")}
          />
        </button>

        {open && !disabled && (
          <div className={clsx("nakas-dropdown", dropdownClassName)}>
            {items.map((item, index) => {
              const key = getItemKey(item);
              const isSelected = key === selectedKey;

              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleSelect(item)}
                  className={clsx(
                    "select-item",
                    isSelected && "select-item-selected",
                    index === 0 && "select-item-first",
                    index === items.length - 1 && "select-item-last"
                  )}
                >
                  {getItemLabel(item)}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {error && <ErrorBlock error={error} showIcon={true} />}
    </div>
  );
};

export default Select;
