import { ElementSize } from "../../types.js";
type HeadingType = "h1" | "h2" | "h3" | "h4";
type HeadingBaseProps = {
    children: React.ReactNode;
    className?: string;
    type?: HeadingType;
    color?: string;
    animated?: boolean;
    fullWidth?: boolean;
    size?: ElementSize;
};
type HeadingProps = (HeadingBaseProps & React.HTMLAttributes<HTMLHeadingElement> & {
    type?: "h1";
}) | (HeadingBaseProps & React.HTMLAttributes<HTMLHeadingElement> & {
    type: "h2";
}) | (HeadingBaseProps & React.HTMLAttributes<HTMLHeadingElement> & {
    type: "h3";
}) | (HeadingBaseProps & React.HTMLAttributes<HTMLHeadingElement> & {
    type: "h4";
});
declare const Heading: ({ children, className, type, color, animated, fullWidth, size, ...props }: HeadingProps) => React.ReactElement;
export default Heading;
//# sourceMappingURL=heading.d.ts.map