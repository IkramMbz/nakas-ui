import { ElementSize } from "src/types.js";
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
declare const Select: <T>({ label, required, size, error, value, items, onChange, getItemKey, getItemLabel, className, dropdownClassName, disabled, placeholder, ...props }: SelectProps<T>) => React.ReactElement;
export default Select;
//# sourceMappingURL=select.d.ts.map