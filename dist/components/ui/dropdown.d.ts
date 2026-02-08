import { ReactNode } from "react";
import { ElementSize } from "src/types.js";
interface DropdownProps<T> {
    label: ReactNode;
    items: T[];
    size?: ElementSize;
    selectedItemKey?: string;
    onItemClick?: (item: T) => void;
    renderItem?: (item: T, index: number, isSelected: boolean) => ReactNode;
    getItemKey: (item: T) => string;
    className?: string;
}
declare const Dropdown: <T>({ label, items, size, selectedItemKey, onItemClick, renderItem, getItemKey, className, }: DropdownProps<T>) => React.ReactElement;
export default Dropdown;
//# sourceMappingURL=dropdown.d.ts.map