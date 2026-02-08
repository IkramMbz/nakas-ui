"use client";

import { ArrowBigUp } from "lucide-react";
import { useEffect, useState, ReactNode } from "react";
import { ElementSize } from "src/types.js";

const SCROLL_TOP_OFFSET = 256;

interface ScrollToTopProps {
  children?: ReactNode;
  className?: string;
  size?: ElementSize;
}

const ScrollToTop = ({
  children,
  className = "",
  size = "md",
}: ScrollToTopProps): React.ReactElement | null => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      setVisible(window.scrollY > SCROLL_TOP_OFFSET);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();

    return (): void => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`button-default nakas-scroll-to-top-button nakas-stt-button-${size} ${className}`}
      aria-label="Scroll to top"
    >
      {!children ? <ArrowBigUp size={20} /> : children}
    </button>
  );
};

export default ScrollToTop;
