import { ElementSize } from "src/types.js";
type ButtonVariant = "default" | "negative" | "primary" | "secondary" | "outline";
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
declare const Button: ({ children, variant, size, className, backgroundColor, color, loading, fullWidth, ...props }: ButtonProps) => React.ReactElement;
export default Button;
//# sourceMappingURL=button.d.ts.map