import clsx from "clsx";
import { LoaderCircle } from "lucide-react";
import { ElementSize } from "src/types.js";

type ButtonVariant =
  | "default"
  | "negative"
  | "primary"
  | "secondary"
  | "outline";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ElementSize;
  className?: string;
  backgroundColor?: string | null;
  color?: string;
  loading?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = "default",
  size = "md",
  className = "",
  backgroundColor,
  color,
  loading = false,
  fullWidth = false,
  ...props
}: ButtonProps): React.ReactElement => {
  return (
    <button
      type="button"
      className={clsx(
        "nakas-button",
        `button-${size}`,
        `button-${variant}`,
        loading && "loading",
        className
      )}
      style={{
        ...(backgroundColor ? { backgroundColor } : {}),
        ...(color ? { color } : {}),
        ...(!fullWidth ? { width: "fit-content" } : { width: "100%" }),
      }}
      {...props}
    >
      {loading && <LoaderCircle size={20} className="spin" />}

      {children}
    </button>
  );
};

export default Button;
