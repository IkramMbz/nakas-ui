type CardProps = {
    children: React.ReactNode;
    className?: string;
    gap?: string;
    padding?: string;
    animated?: boolean;
    backgroundColor?: string;
    color?: string;
    loading?: boolean;
    flexDirection?: "row" | "column";
};
declare const Card: ({ children, className, gap, padding, animated, backgroundColor, color, loading, flexDirection, ...props }: CardProps & Omit<React.HTMLAttributes<HTMLDivElement>, keyof CardProps>) => React.ReactElement;
export default Card;
//# sourceMappingURL=card.d.ts.map