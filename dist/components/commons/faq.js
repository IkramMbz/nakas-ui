"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
const FaqSection = ({ faqs, size = "md", }) => {
    const [openIndex, setOpenIndex] = useState(null);
    return (_jsx("div", { className: "nakas-faq-container", children: faqs.map((faq, index) => (_jsxs("div", { className: "faq-item", onClick: () => setOpenIndex(openIndex === index ? null : index), children: [_jsxs("div", { className: clsx("nakas-form-field", `nakas-form-item-${size}`), children: [_jsx("span", { className: "faq-question", children: faq.question }), _jsx(ChevronDown, { size: 20, className: clsx("faq-icon", openIndex === index && "faq-icon-open") })] }), _jsx("div", { className: clsx("faq-answer", openIndex === index ? "faq-answer-open" : "faq-answer-closed"), children: faq.answer })] }, index))) }));
};
export default FaqSection;
//# sourceMappingURL=faq.js.map