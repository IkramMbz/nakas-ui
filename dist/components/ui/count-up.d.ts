interface CountUpProps {
    to: number;
    from?: number;
    direction?: "up" | "down";
    delay?: number;
    duration?: number;
    className?: string;
    startWhen?: boolean;
    separator?: string;
    onStart?: () => void;
    onEnd?: () => void;
}
declare const CountUp: ({ to, from, direction, delay, duration, className, startWhen, separator, onStart, onEnd, }: CountUpProps) => React.ReactElement;
export default CountUp;
//# sourceMappingURL=count-up.d.ts.map