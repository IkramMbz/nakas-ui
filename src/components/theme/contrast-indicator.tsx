import { ColorContrastAuditResult } from "../../types.js";
import { auditResultExplanation } from "../../lib/colors-functions.js";
import BodyText from "../typography/body-text.js";

const ContrastIndicator = ({
  title,
  contrast,
}: {
  title: string;
  contrast: ColorContrastAuditResult;
}): React.ReactElement => {
  const info = auditResultExplanation(contrast);

  return (
    <div>
      <BodyText size="sm" className="key">
        {title}
      </BodyText>
      <BodyText size="sm">
        {info.icon} <strong>{info.level}</strong> : {info.message}.<br />
        {info.detail}.
      </BodyText>
    </div>
  );
};

export default ContrastIndicator;
