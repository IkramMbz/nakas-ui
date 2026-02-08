import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect, ReactNode } from "react";
import { ElementSize } from "src/types.js";

type DropdownProps<T> = {
  label: ReactNode;
  items: T[];
  size?: ElementSize;
  selectedItemKey?: string;
  onItemClick?: (item: T) => void;
  renderItem?: (item: T, index: number, isSelected: boolean) => ReactNode;
  getItemKey: (item: T) => string;
  className?: string;
};

const Dropdown = <T,>({
  label,
  items,
  size = "md",
  selectedItemKey,
  onItemClick,
  renderItem,
  getItemKey,
  className = "",
}: DropdownProps<T>): React.ReactElement => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleOpen = (): void => setOpen((prev) => !prev);

  const renderDefaultItemLabel = (item: T): string => {
    if (typeof item === "string") return item;
    if (typeof item === "number") return String(item);
    if (typeof item === "object" && item !== null) {
      const record = item as Record<string, unknown>;
      if (typeof record.name === "string") return record.name;
      if (
        typeof record.info === "object" &&
        record.info !== null &&
        typeof (record.info as Record<string, unknown>).name === "string"
      ) {
        return (record.info as Record<string, unknown>).name as string;
      }
    }
    return String(item);
  };

  const handleItemClick = (item: T): void => {
    onItemClick?.(item);
    setOpen(false);
  };

  useEffect((): void | (() => void) => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex-col" ref={ref}>
      <button
        onClick={toggleOpen}
        className={clsx(
          "nakas-form-field",
          `nakas-form-item-${size}`,
          className
        )}
      >
        <span>{label}</span>
        <ChevronDown
          size={16}
          className={clsx("dropdown-icon", open && "dropdown-icon-open")}
        />
      </button>

      {open && (
        <div className="nakas-dropdown">
          {items.map((item, index) => {
            const key = getItemKey(item);
            const isSelected = selectedItemKey === key;

            if (renderItem) {
              return (
                <div
                  key={key}
                  onClick={() => handleItemClick(item)}
                  className="dropdown-item-wrapper"
                >
                  {renderItem(item, index, isSelected)}
                </div>
              );
            }

            return (
              <button
                key={key}
                className={clsx(
                  "dropdown-item",
                  isSelected && "dropdown-item-selected",
                  index === 0 && "dropdown-item-first",
                  index === items.length - 1 && "dropdown-item-last"
                )}
                onClick={() => handleItemClick(item)}
              >
                {renderDefaultItemLabel(item)}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
