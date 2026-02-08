export interface TogglerProps {
    value: boolean;
    onChange: (next: boolean) => void;
    backgroundColor?: string;
    color?: string;
    disabled?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    thumbClassName?: string;
    trackClassName?: string;
}
declare const Toggler: ({ value, onChange, backgroundColor, color, disabled, leftIcon, rightIcon, thumbClassName, trackClassName, }: TogglerProps) => React.ReactElement;
export default Toggler;
//# sourceMappingURL=toggler.d.ts.map