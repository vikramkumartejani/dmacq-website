import Image from "next/image";
import React from "react";

const Bottom = () => {
  return (
    <div className="border-t border-primary-400 ">
      <div className="flex md:items-center justify-between py-8 max-w-[1184px] w-full mx-auto gap-4 md:flex-row flex-col">
        <h2 className=" text-white-700 text-[14px] leading-[22px] font-medium">
          © Copyright 2024, All Rights Reserved{" "}
        </h2>
        <div className="flex items-center gap-1">
          <h2 className="text-white-700 text-[14px] leading-[22px] font-medium">
            Designed with
          </h2>
          <Image
            src="/assets/solution/icons/heart.svg"
            alt="Heart"
            width={16}
            height={16}
          />
          <h2 className="text-white-700 text-[14px] leading-[22px] font-medium">
            by dMACQ Solutions
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
