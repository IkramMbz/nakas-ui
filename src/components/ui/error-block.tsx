import clsx from "clsx";
import { AlertCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ErrorBlockProps = {
  error: string;
  duration?: number;
  className?: string;
  infiniteDuration?: boolean;
  showIcon?: boolean;
};

const ErrorBlock = ({
  error,
  duration = 5000,
  infiniteDuration = true,
  className,
  showIcon = true,
}: ErrorBlockProps): React.ReactElement | null => {
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect((): void | (() => void) => {
    setVisible(true);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (infiniteDuration) return;

    timerRef.current = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [error, duration, infiniteDuration]);

  if (!visible) return null;

  return (
    <div className={clsx("nakas-error-block", className)}>
      {showIcon && <AlertCircle size={20} />}
      <span>{error}</span>
    </div>
  );
};

export default ErrorBlock;
