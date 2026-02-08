"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { ElementSize } from "src/types.js";

interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: Faq[];
  size?: ElementSize;
}

const FaqSection = ({
  faqs,
  size = "md",
}: FaqSectionProps): React.ReactElement => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="nakas-faq-container">
      {faqs.map((faq, index) => (
        <div
          className="faq-item"
          key={index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className={clsx("nakas-form-field", `nakas-form-item-${size}`)}>
            <span className="faq-question">{faq.question}</span>
            <ChevronDown
              size={20}
              className={clsx(
                "faq-icon",
                openIndex === index && "faq-icon-open"
              )}
            />
          </div>

          <div
            className={clsx(
              "faq-answer",
              openIndex === index ? "faq-answer-open" : "faq-answer-closed"
            )}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;
