import { ElementSize } from "src/types.js";
interface Faq {
    question: string;
    answer: string;
}
interface FaqSectionProps {
    faqs: Faq[];
    size?: ElementSize;
}
declare const FaqSection: ({ faqs, size, }: FaqSectionProps) => React.ReactElement;
export default FaqSection;
//# sourceMappingURL=faq.d.ts.map