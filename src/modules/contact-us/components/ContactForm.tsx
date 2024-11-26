'use client'
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission (e.g., API call)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true); // Set form as submitted
    }, 2000); // 2-second simulated delay
  };

  // Handle "Get Another One" click
  const handleGetAnotherOne = () => {
    setIsSubmitted(false); // Reset to show form again
    setIsLoading(false); // Reset loading state
  };


  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  const handleBlur = (): void => {
    setIsOpen(false);
  };

  return (
    <form
      className="bg-white rounded-[16px] md:py-10 md:px-8 p-6 lg:w-1/2 w-full"
      onSubmit={handleSubmit}
    >
      <div className="mb-6 flex items-center md:flex-row flex-col gap-6">
        <div className="w-full">
          <label className="block text-[#243547] text-[16px] font-medium mb-2">
            First Name<span className="text-[#E6334E]">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-[#B1C1D2] outline-none rounded-md h-[40px] px-4 text-[#243547] placeholder:text-[#90A5BB] text-[16px]"
            placeholder="eg. Smith"
          />
        </div>
        <div className="w-full">
          <label className="block text-[#243547] text-[16px] font-medium mb-2">
            Last Name<span className="text-[#E6334E]">*</span>
          </label>
          <input
            type="text"
            className="w-full border border-[#B1C1D2] outline-none rounded-md h-[40px] px-4 text-[#243547] placeholder:text-[#90A5BB] text-[16px]"
            placeholder="eg. Roy"
          />
        </div>
      </div>
      <div className="w-full mb-6">
        <label className="block text-[#243547] text-[16px] font-medium mb-2">
          Work Email<span className="text-[#E6334E]">*</span>
        </label>
        <input
          type="email"
          className="w-full border border-[#B1C1D2] outline-none rounded-md h-[40px] px-4 text-[#243547] placeholder:text-[#90A5BB] text-[16px]"
          placeholder="name@company.com"
        />
      </div>
      <div className="w-full mb-6">
        <label className="block text-[#243547] text-[16px] font-medium mb-2">
          Company Name<span className="text-[#E6334E]">*</span>
        </label>
        <input
          type="text"
          className="w-full border border-[#B1C1D2] outline-none rounded-md h-[40px] px-4 text-[#243547] placeholder:text-[#90A5BB] text-[16px]"
          placeholder="abc company"
        />
      </div>

      <div className="w-full mb-6 relative">
        <label className="block text-[#243547] text-[16px] font-medium mb-2">
          Departments<span className="text-[#E6334E]">*</span>
        </label>
        <select
          className="border border-[#B1C1D2] w-full text-[#243547] h-[40px] px-4 rounded-md outline-none appearance-none pr-10"
          onClick={handleToggle}
          onBlur={handleBlur}
        >
          <option>HR</option>
          <option>Operations</option>
          <option>Finance</option>
          <option>Legal</option>
          <option>IT</option>
          <option>Management</option>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Product</option>
        </select>
        <span
          className={`absolute w-[14px] top-[52px] right-4 text-[#243547] transform -translate-y-1/2 pointer-events-none transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </div>

      <div className="w-full mb-6">
        <label className="block text-[#243547] text-[16px] font-medium mb-2">
          How can our team help you?
        </label>
        <textarea
          className="w-full h-[96px] py-2 border border-[#B1C1D2] outline-none rounded-md px-4 text-[#243547] placeholder:text-[#90A5BB] resize-none text-[16px]"
          placeholder="Tell us your needs, and we'll respond promptly"
        />
      </div>
      <button
        type="submit"
        className={`w-full h-[48px] rounded-lg text-[16px] leading-[21.79px] font-semibold flex items-center justify-center ${
          isLoading ? "bg-gray-400" : "bg-[#2950DA]"
        }`}
        disabled={isLoading || isSubmitted}
      >
        {isLoading ? (
          <div className="w-7 h-7 border-4 border-t-4 border-gray-300 border-t-[#2950DA] rounded-full animate-spin"></div>
        ) : isSubmitted ? (
          <span
            className="text-white cursor-pointer"
            onClick={handleGetAnotherOne}
          >
            Get Another One
          </span>
        ) : (
          "Submit Your Request"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
