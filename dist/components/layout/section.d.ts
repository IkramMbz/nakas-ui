type SectionProps = {
    children: React.ReactNode;
    fullwidth?: boolean;
    className?: string;
    displayGrid?: boolean;
    firstSection?: boolean;
    flexDirection?: "row" | "column";
    animated?: boolean;
};
declare const Section: ({ children, fullwidth, displayGrid, firstSection, flexDirection, className, animated, ...props }: SectionProps & Omit<React.HTMLAttributes<HTMLElement>, keyof SectionProps>) => React.ReactElement;
export default Section;
//# sourceMappingURL=section.d.ts.map