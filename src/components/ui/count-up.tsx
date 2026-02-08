import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
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
};

const CountUp = ({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps): React.ReactElement => {
  const ref = useRef<HTMLSpanElement>(null);

  const motionValue = useMotionValue(direction === "down" ? to : from);

  const springValue = useSpring(motionValue, {
    damping: 20 + 40 / duration,
    stiffness: 100 / duration,
  });

  const isInView = useInView(ref, { once: true });

  const getDecimals = (num: number): number =>
    num.toString().split(".")[1]?.length || 0;
  const maxDecimals = Math.max(getDecimals(from), getDecimals(to));

  const formatter = new Intl.NumberFormat("en-US", {
    useGrouping: !!separator,
    minimumFractionDigits: maxDecimals,
    maximumFractionDigits: maxDecimals,
  });

  const formatValue = (val: number): string =>
    separator
      ? formatter.format(val).replace(/,/g, separator)
      : formatter.format(val);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (val): void => {
      if (ref.current) ref.current.textContent = formatValue(val);
    });
    return (): void => unsubscribe();
  }, [springValue]);

  useEffect(() => {
    if (!isInView || !startWhen) return;

    onStart?.();

    const timeout = setTimeout((): void => {
      motionValue.set(direction === "down" ? from : to);
    }, delay * 1000);

    const endTimeout = setTimeout(
      (): void => {
        onEnd?.();
      },
      (delay + duration) * 1000
    );

    return (): void => {
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

  useEffect((): void => {
    if (ref.current)
      ref.current.textContent = formatValue(direction === "down" ? to : from);
  }, [from, to, direction]);

  return <span className={className} ref={ref} />;
};

export default CountUp;
