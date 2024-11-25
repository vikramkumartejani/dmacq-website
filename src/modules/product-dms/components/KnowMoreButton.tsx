import Image from "next/image";
import React from "react";

const KnowMoreButton = () => {
  return (
    <button className="w-full md:w-[169px] h-[40px] md:h-[48px] rounded-lg bg-white border border-[#305EFF52] text-[#2950DA] text-[16px] leading-[21.79px] font-semibold flex items-center justify-center gap-1">
      Know More
      <Image src="/assets/dmacq/arrow.svg" alt="arrow" width={24} height={24} />
    </button>
  );
};

export default KnowMoreButton;
