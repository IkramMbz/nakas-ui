import { ElementSize } from "src/types.js";

import BodyText from "../typography/body-text.js";
import Heading from "../typography/heading.js";

type PageTitleProps = {
  title: string;
  subtitle?: string;
  size?: ElementSize;
};

const PageTitle = ({
  title,
  subtitle,
  size = "lg",
}: PageTitleProps): React.ReactElement => {
  return (
    <div className="flex-col">
      <Heading size={size}>{title}</Heading>
      {subtitle && <BodyText size={size}>{subtitle}</BodyText>}
    </div>
  );
};

export default PageTitle;
