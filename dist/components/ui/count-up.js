import { jsx as _jsx } from "react/jsx-runtime";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
const CountUp = ({ to, from = 0, direction = "up", delay = 0, duration = 2, className = "", startWhen = true, separator = "", onStart, onEnd, }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(direction === "down" ? to : from);
    const springValue = useSpring(motionValue, {
        damping: 20 + 40 / duration,
        stiffness: 100 / duration,
    });
    const isInView = useInView(ref, { once: true });
    const getDecimals = (num) => num.toString().split(".")[1]?.length || 0;
    const maxDecimals = Math.max(getDecimals(from), getDecimals(to));
    const formatter = new Intl.NumberFormat("en-US", {
        useGrouping: !!separator,
        minimumFractionDigits: maxDecimals,
        maximumFractionDigits: maxDecimals,
    });
    const formatValue = (val) => separator
        ? formatter.format(val).replace(/,/g, separator)
        : formatter.format(val);
    useEffect(() => {
        const unsubscribe = springValue.on("change", (val) => {
            if (ref.current)
                ref.current.textContent = formatValue(val);
        });
        return () => unsubscribe();
    }, [springValue]);
    useEffect(() => {
        if (!isInView || !startWhen)
            return;
        onStart?.();
        const timeout = setTimeout(() => {
            motionValue.set(direction === "down" ? from : to);
        }, delay * 1000);
        const endTimeout = setTimeout(() => {
            onEnd?.();
        }, (delay + duration) * 1000);
        return () => {
            clearTimeout(timeout);
            clearTimeout(endTimeout);
        };
    }, [
        isInView,
        startWhen,
        motionValue,
        direction,
        from,
        to,
        delay,
        duration,
        onStart,
        onEnd,
    ]);
    useEffect(() => {
        if (ref.current)
            ref.current.textContent = formatValue(direction === "down" ? to : from);
    }, [from, to, direction]);
    return _jsx("span", { className: className, ref: ref });
};
export default CountUp;
//# sourceMappingURL=count-up.js.map