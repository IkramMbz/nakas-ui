import { ElementSize } from "src/types.js";
interface BodyTextBaseProps {
    children: React.ReactNode;
    className?: string;
    size?: ElementSize;
    type?: "p" | "span";
    color?: string;
    animated?: boolean;
    fullWidth?: boolean;
}
type BodyTextProps = (BodyTextBaseProps & React.HTMLAttributes<HTMLParagraphElement> & {
    type?: "p";
}) | (BodyTextBaseProps & React.HTMLAttributes<HTMLSpanElement> & {
    type: "span";
});
declare const BodyText: ({ children, className, size, type, color, animated, fullWidth, ...props }: BodyTextProps) => React.ReactElement;
export default BodyText;
//# sourceMappingURL=body-text.d.ts.map