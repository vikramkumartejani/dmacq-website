"use client";
import { IoBulb, IoCheckmarkCircle } from "react-icons/io5";
import { MdSpeed } from "react-icons/md";

export default function AIPowered() {
  return (
    <div className="lg:px-[32px] px-[16px] relative overflow-x-hidden">
      <img
        src="/assets/ai/grid-6.png"
        alt="background grid"
        className="absolute w-full h-full object-cover z-[2]"
      />
      <div className="max-w-[1184px] mx-auto flex flex-col items-center justify-center relative z-[3] py-[120px]">
        {/* Hero Title */}
        <h1 className="text-[28px] md:text-[40px] font-[800] md:text-center text-left w-full">
          <span className="text-[#305EFF]">AI-Powered</span>{" "}
          <span className="text-[#FFFFFFE5]">Form Automation</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-[#B1C1D2] md:text-[18px] font-[500] md:text-center text-left max-w-[822px] md:mb-[64px] mb-[32px]">
          Enhance your form processing with intelligent automation, saving time
          and reducing errors, Enjoy our Form+ Product free for 14 days trail
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[8px] w-full">
          {/* Card 1 */}
          <div className="bg-[#1A1F2E] rounded-[8px] lg:p-[32px] p-[24px] hover:bg-[#1E2436] transition-colors">
            <div className="bg-[#2A2F3E] rounded-full w-[56px] h-[56px] flex items-center justify-center mb-[20px]">
              <IoCheckmarkCircle className="text-[#F8FAFC] text-[28px]" />
            </div>
            <h3 className="text-[#F8FAFC] text-[18px] md:text-[20px] font-[500] mb-[8px]">
              AI-Powered Form Validation
            </h3>
            <p className="text-[#B1C1D2] font-[500]">
              Let AI validate form entries in real-time, detecting and
              correcting errors instantly for seamless data submission.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1A1F2E] rounded-[8px] lg:p-[32px] p-[24px] hover:bg-[#1E2436] transition-colors">
            <div className="bg-[#2A2F3E] rounded-full w-[56px] h-[56px] flex items-center justify-center mb-[20px]">
              <MdSpeed className="text-[#F8FAFC] text-[26px]" />
            </div>
            <h3 className="text-[#F8FAFC] text-[18px] md:text-[20px] font-[500] mb-[8px]">
              Predictive Input Suggestions
            </h3>
            <p className="text-[#B1C1D2] font-[500]">
              Speed up form completion with AI-generated suggestions, making the
              experience smoother for users.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1A1F2E] rounded-[8px] lg:p-[32px] p-[24px] hover:bg-[#1E2436] transition-colors">
            <div className="bg-[#2A2F3E] rounded-full w-[56px] h-[56px] flex items-center justify-center mb-[20px]">
              <IoBulb className="text-[#F8FAFC] text-[26px]" />
            </div>
            <h3 className="text-[#F8FAFC] text-[18px] md:text-[20px] font-[500] mb-[8px]">
              Smart Data Capture
            </h3>
            <p className="text-[#B1C1D2] font-[500]">
              Automatically extract and process form data with AI, ensuring
              accuracy and reducing manual entry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
