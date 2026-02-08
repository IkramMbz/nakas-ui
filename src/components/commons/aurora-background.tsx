import clsx from "clsx";

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  lowOpacity?: boolean;
  className?: string;
  flexDirection?: "row" | "column";
  showRadialGradient?: boolean;
}

const AuroraBackground = ({
  children,
  lowOpacity = false,
  className = "",
  showRadialGradient = false,
  flexDirection = "column",
  ...props
}: AuroraBackgroundProps): React.ReactElement => {
  return (
    <div className={clsx("nakas-aurora-container", className)} {...props}>
      <div
        className="nakas-aurora-overlay"
        style={{ opacity: !lowOpacity ? 0.9 : 0.3 }}
      />

      <div
        className="nakas-aurora"
        style={{
          ...(showRadialGradient && {
            maskImage:
              "radial-gradient(ellipse at 100% 0%, #000 10%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 100% 0%, #000 10%, transparent 70%)", // pour Safari
          }),
        }}
      />

      {children && (
        <div className={clsx(flexDirection === "column" ? "flex-col" : "")}>
          {children}
        </div>
      )}
    </div>
  );
};

export default AuroraBackground;
