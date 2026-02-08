import clsx from "clsx";
import { LucideIcon } from "lucide-react";

export interface CustomIconProps {
  icon: LucideIcon;
  backgroundColor?: string;
  color?: string;
  direction?: "left" | "right";
}

const CustomIcon = ({
  icon: Icon,
  backgroundColor = "var(--color-accent)",
  color = "var(--color-nega-bold-color)",
  direction = "left",
}: CustomIconProps): React.ReactElement => {
  return (
    <div
      className={clsx(
        "nakas-custom-icon",
        direction === "left" ? "icon-rotate-left" : "icon-rotate-right"
      )}
      style={{ backgroundColor, color }}
    >
      <Icon size={24} />
    </div>
  );
};

export default CustomIcon;
