import Image from "next/image";
import React from "react";
import KnowMoreButton from "./KnowMoreButton";

const VersatileApplications = () => {
  return (
    <div className="w-full py-16 md:py-[120px] lg:px-8 px-4">
      <div className="w-full max-w-[1184px] mx-auto">
        <h3 className="text-center text-[#2243B6] text-[16px] leading-[19.2px] tracking-[4px] font-bold uppercase mb-2">
          solutions
        </h3>
        <h1 className="text-center text-[#243547] text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43px] tracking-[-0.96px] font-extrabold">
          Versatile Applications for Diverse Needs
        </h1>

        <div className="mt-16">
          <div className="bg-[#F1F5FA] rounded-lg pt-6 lg:pt-[72px] flex items-end lg:flex-row flex-col justify-between mb-6">
            <div className="pb-[48px] lg:pb-[72px] px-6 lg:px-10 w-full lg:w-[504px]">
              <h1 className="text-[#243547] text-[24px] md:text-[40px] leading-[28px] md:leading-[48px] tracking-[-0.96px] font-extrabold">Digitize your HR Documentation Processes</h1>
              <p className="mb-8 md:mb-10 mt-4 text-[#2F4256] text-[16px] md:text-[18px] leading-[27px] md:leading-[30.6px] tracking-[-0.4px] font-normal">Transform your HR operations by implementing a document management system to digitize onboarding to exit processes, resulting in improved efficiency, accuracy, and accessibility.</p>
              <KnowMoreButton/>
            </div>
            <div className="pl-5">
            <Image src='/assets/dmacq/digitize.svg' alt="digitize" width={600} height={519} />
            </div>
          </div>
          <div className="flex items-center justify-between lg:flex-row flex-col gap-6">

            <div className="bg-[#F1F5FA] lg:max-w-[464px] w-full rounded-lg">
              <div className="pt-6 lg:pt-10 px-6 lg:px-10 mb-12">
                <h1 className="text-[#243547] text-[24px] md:text-[28px] leading-[28px] tracking-[-0.96px] font-extrabold">Ensure Accurate Reporting and Regulatory Compliance</h1>
                <p className="mt-4 mb-8 md:mb-10 text-[#2F4256] text-[16px] md:text-[18px] leading-[27.2px] md:leading-[30.6px] font-normal tracking-[-0.4px]">Streamline access to financial records, ensuring timely updates and compliance with SEBI, RBI, and other regulatory frameworks</p>
                <KnowMoreButton/>
              </div>
              <img src="/assets/dmacq/confidence.svg" alt="confidence" />
            </div>


            <div className="bg-[#F1F5FA] lg:max-w-[696px] w-full rounded-lg pt-[24px] lg:pt-[46.34px] pl-6 lg:pl-10  flex lg:flex-col flex-col-reverse">
              <div className="flex items-end justify-end">
                <img src='/assets/dmacq/regulatory-compliance.svg' alt="regulatory-compliance" className="lg:block hidden"/>
                <img src='/assets/dmacq/mobile.svg' alt="regulatory-compliance" className="lg:hidden block"/>
              </div>
              <div className="md:mt-10 pb-12 lg:pb-10 pr-6 lg:pr-10">
                <h1 className="text-[#243547] text-[24px] md:text-[28px] leading-[28px] tracking-[-0.96px] font-extrabold">Ensure Accurate Reporting and Regulatory Compliance</h1>
                <p className="mt-4 mb-8 md:mb-10 text-[#2F4256] text-[16px] md:text-[18px] leading-[27.2px] md:leading-[30.6px] font-normal tracking-[-0.4px]">Enhance accuracy and compliance with our DMS that reduces manual errors, accelerates approval processes and ensures your financial data is always secure and easily accessible.</p>
                <KnowMoreButton/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersatileApplications;
