import { ElementSize } from "src/types.js";
type TextLinkProps = {
    children: React.ReactNode;
    href: string;
    size?: ElementSize;
    className?: string;
    external?: boolean;
    animated?: boolean;
};
declare const TextLink: ({ children, href, size, className, external, animated, }: TextLinkProps) => React.ReactElement;
export default TextLink;
//# sourceMappingURL=text-link.d.ts.map