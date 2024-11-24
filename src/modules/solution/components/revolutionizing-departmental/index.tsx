import Image from "next/image";
import React from "react";

const RevolutionizingDepartmental = () => {
  return (
    <div className="w-full h-full">
      <div className="flex lg:flex-row flex-col items-center h-full bg-dark-100 lg:pr-10">
        <Image
          src="/assets/solution/revolutionizing-departmental.svg"
          draggable="false"
          alt="Revolutionizing Departmental"
          width={626}
          height={512}
          className="w-full"
        />
        <div className="bg-dark-100  text-white px-4 lg:ml-[32px] xl:ml-[128px] lg:max-w-[558px] pb-[48px] pt-[32px] md:py-[82px]">
          <h1 className="text-[28px] md:text-[36px] font-black leading-[32px] md:leading-[41.4px] tracking-[-0.8px]">
            Revolutionizing Departmental Collaboration with Effortless Document
            Flow
          </h1>
          <p className="text-white-700 text-[16px] md:text-[18px] leading-[28px] md:leading-[30.6px] font-medium md:font-normal mt-4">
            Empower your organization with seamless, secure document exchanges
            across departments. Enable effortless collaboration, breaking
            barriers and creating a unified, accessible workflow.
          </p>
          <button className="mt-[24px] md:mt-[48px] h-[48px] w-full flex items-center gap-2 text-white text-lg font-semibold leading-[24.52px]">
            Read Full Article 
            <Image
              src="/assets/solution/icons/white-arrow.svg"
              alt="arrow"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevolutionizingDepartmental;
