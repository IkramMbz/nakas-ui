import { ElementSize } from "src/types.js";
type Faq = {
    question: string;
    answer: string;
};
type FaqSectionProps = {
    faqs: Faq[];
    size?: ElementSize;
};
declare const FaqSection: ({ faqs, size, }: FaqSectionProps) => React.ReactElement;
export default FaqSection;
//# sourceMappingURL=faq.d.ts.map