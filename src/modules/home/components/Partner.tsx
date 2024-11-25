import Image from "next/image";
import React from "react";

const Partner = () => {
  return (
    <div className="py-12">
      <h3 className="mb-10 text-center text-[#243547] text-[20px] leading-[27px] font-semibold tracking-[-0.40px]">
        300+ customers in over 10+ countries grow their businesses with dMACQ’s
      </h3>
      <div className="h-[60px] w-full flex items-center gap-[50px] overflow-x-auto scrollbar-none justify-between">
        <Image src='/assets/partner/partner-one.svg' alt="partner-one" width={180} height={34} />
        <Image src='/assets/partner/partner-two.svg' alt="partner-one" width={134} height={23} />
        <Image src='/assets/partner/partner-three.svg' alt="partner-one" width={59} height={40} />
        <Image src='/assets/partner/partner-four.svg' alt="partner-one" width={107} height={32} />
        <Image src='/assets/partner/partner-five.svg' alt="partner-one" width={138} height={26} />
        <Image src='/assets/partner/partner-six.svg' alt="partner-one" width={97.25} height={34} />
        <Image src='/assets/partner/partner-seven.svg' alt="partner-one" width={104} height={41} />
      </div>
    </div>
  );
};

export default Partner;
