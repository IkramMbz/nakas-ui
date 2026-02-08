import { ElementSize } from "src/types.js";
type InputProps = Omit<React.ComponentProps<"input">, "size" | "onChange"> & {
    label?: string;
    size?: ElementSize;
    error?: string;
    required?: boolean;
    onChange?: (value: string) => void;
};
declare const Input: ({ className, type, label, size, error, required, onChange, ...props }: InputProps) => React.ReactElement;
export default Input;
//# sourceMappingURL=input.d.ts.map