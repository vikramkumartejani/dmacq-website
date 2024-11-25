import Image from "next/image";
import React from "react";

const Awards = () => {
  return (
    <div className="bg-[#0C1927] w-full py-16 lg:py-24">
      <div className="w-full max-w-[1184px] mx-auto">
        <h4 className="text-center text-[#FFFFFFB2] text-[18px] font-semibold leading-[21.6px] tracking-[4px] uppercase">
          Awards
        </h4>
        <h1 className="text-[#FFFFFFE5] text-[28px] md:text-[36px] leading-[48px] font-bold text-center">
          Testament to our Excellence
        </h1>
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-5 items-center justify-items-center gap-0 md:gap-5 flex-wrap lg:flex-nowrap overflow-x-auto">
          <Image
            src="/assets/award1.svg"
            alt="award"
            width={173}
            height={184}
          />
          <Image
            src="/assets/award2.svg"
            alt="award"
            width={180}
            height={196}
          />
          <Image
            src="/assets/award3.svg"
            alt="award"
            width={350}
            height={172}
            className="lg:block hidden"
          />
          <Image
            src="/assets/award4.svg"
            alt="award"
            width={214}
            height={205}
          />
          <Image
            src="/assets/award5.svg"
            alt="award"
            width={182}
            height={184}
          />
        </div>
        <div className="w-full max-w-full mx-auto flex items-center justify-center">
          <Image
            src="/assets/award3.svg"
            alt="award"
            width={350}
            height={172}
            className="lg:hidden block"
          />
        </div>
      </div>
    </div>
  );
};

export default Awards;
