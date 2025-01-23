import { useState } from "react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open

  const faqs = [
    {
      question: "What services does Digital360 offer?",
      answer:
        "We provide SEO optimization, PPC advertising, content marketing, and social media marketing to help your business grow.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO is a long-term strategy, and you can typically expect to see results within 3 to 6 months, depending on the competition and industry.",
    },
    {
      question:
        "What makes Digital360 different from other marketing agencies?",
      answer:
        "We focus on data-driven strategies, personalized solutions, and complete transparency to deliver measurable results.",
    },
    {
      question: "Do you provide 24/7 customer support?",
      answer:
        "Yes, our team is available 24/7 to assist you with any queries or issues.",
    },
    {
      question: "How can I get started with your services?",
      answer:
        "You can contact us via email at info@digital360india.com or call us at +91 83030 22306. We'll schedule a consultation to understand your requirements.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the open state
  };

  return (
    <div className="py-16 bg-gray-100" id="faq">
      <div className="container mx-auto px-8 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-4 font-semibold text-gray-800 flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span className="text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600 border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
