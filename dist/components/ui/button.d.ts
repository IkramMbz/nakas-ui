import { ElementSize } from "src/types.js";
type ButtonVariant = "default" | "negative" | "primary" | "secondary" | "outline";
export type ButtonProps = {
    children: React.ReactNode;
    variant?: ButtonVariant;
    size?: ElementSize;
    className?: string;
    backgroundColor?: string | null;
    color?: string;
    loading?: boolean;
    fullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const Button: ({ children, variant, size, className, backgroundColor, color, loading, fullWidth, ...props }: ButtonProps) => React.ReactElement;
export default Button;
//# sourceMappingURL=button.d.ts.map