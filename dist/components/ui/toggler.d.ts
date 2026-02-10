type TogglerProps = {
    value: boolean;
    onChange: (next: boolean) => void;
    disabled?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    thumbClassName?: string;
    trackClassName?: string;
};
declare const Toggler: ({ value, onChange, disabled, leftIcon, rightIcon, thumbClassName, trackClassName, }: TogglerProps) => React.ReactElement;
export default Toggler;
//# sourceMappingURL=toggler.d.ts.map