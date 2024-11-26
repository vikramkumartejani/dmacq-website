"use client";
import Image from "next/image";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer?: string;
}

const FAQ: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const faqItems: FAQItem[] = [
    {
      question: "What is a Document Management System (DMS)?",
      answer:
        "A Document Management System (DMS) is software designed to store, manage, and track digital documents, making it easier to organize, access, and secure your files.",
    },
    {
      question: "How does DMS improve document organization?",
      answer:
        "DMS improves document organization by categorizing, tagging, and enabling advanced search capabilities.",
    },
    {
      question: "Is my data secure in the DMS?",
      answer:
        "Yes, DMS systems employ encryption and role-based access controls to ensure data security.",
    },
    {
      question: "Can I access DMS from any device?",
      answer:
        "Yes, most modern DMS solutions are cloud-based and can be accessed from any device with an internet connection.",
    },
    {
      question: "What file types are supported by DMS?",
      answer:
        "DMS supports various file types, including PDFs, Word documents, Excel spreadsheets, images, and more.",
    },
    {
      question: "Does DMS have search functionality?",
      answer:
        "Yes, DMS includes advanced search functionality to quickly locate documents based on metadata, tags, or content.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prevState) =>
      prevState.includes(index)
        ? prevState.filter((item) => item !== index)
        : [...prevState, index]
    );
  };

  return (
    <div className="w-full lg:py-[120px] lg:px-8 px-4 py-16">
      <div className="max-w-[1184px] w-full mx-auto">
        <h3 className="text-center text-[#2243B6] text-[16px] leading-[19.2px] tracking-[4px] font-bold uppercase mb-2">
          FAQS
        </h3>
        <h1 className="text-center text-[#243547] text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43px] tracking-[-0.96px] font-extrabold">
          Frequently Asked Questions
        </h1>

        {/* FAQ Section */}
        <div className="mt-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="px-2 py-6 md:p-8 border-b border-[#6C849D2E] transition-all duration-500 ease-in-out"
            >
              <div
                className="flex justify-between items-start cursor-pointer gap-2"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-[#192839] text-[16px] md:text-[18px] leading-[20px] md:leading-[28px] font-bold">
                  {item.question}
                </h2>
                <Image
                  src={`/assets/dmacq/${
                    openIndexes.includes(index) ? "close" : "open"
                  }.svg`}
                  alt={openIndexes.includes(index) ? "close" : "open"}
                  width={24}
                  height={24}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-out transform ${
                  openIndexes.includes(index)
                    ? "max-h-[500px] opacity-100 translate-y-0"
                    : "max-h-0 opacity-0 translate-y-4"
                }`}
              >
                {item.answer && (
                  <p className="mt-2 text-[#40566D] text-[16px] leading-[24px] font-medium max-w-[1072px]">
                    {item.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
