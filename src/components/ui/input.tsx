import clsx from "clsx";
import { ElementSize } from "src/types.js";

import ErrorBlock from "../ui/error-block.js";

type InputProps = Omit<React.ComponentProps<"input">, "size" | "onChange"> & {
  label?: string;
  size?: ElementSize;
  error?: string;
  required?: boolean;
  onChange?: (value: string) => void;
};

const Input = ({
  className = "",
  type = "text",
  label,
  size = "sm",
  error,
  required = false,
  onChange,
  ...props
}: InputProps): React.ReactElement => {
  return (
    <div className="flex-col">
      {label && (
        <label>
          {label}
          {required && <span className="nakas-required-indicator">*</span>}
        </label>
      )}

      <input
        type={type}
        onChange={(e) => onChange?.(e.target.value)}
        className={clsx(
          "nakas-form-field",
          `nakas-form-item-${size}`,
          `text-${size}`,
          error && "error",
          className
        )}
        {...props}
      />

      {error && <ErrorBlock error={error} showIcon={true} />}
    </div>
  );
};

export default Input;
