"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Hero = () => {
  const pathname = usePathname();
  return (
    <div className="w-full bg-green-700 md:px-8 px-4 pt-[72px]">
      <div className="w-full max-w-[1184px] mx-auto pt-[64px] lg:pt-[89px] pb-[64px] lg:pb-[105px]">
        <div className="flex items-center justify-between flex-col lg:flex-row gap-12">
          <div className="lg:max-w-[628px]">
            <div className="bg-[#0F553E] w-fit py-[8px] flex items-center justify-between px-4 rounded-lg">
              <h3 className="text-white text-base font-semibold leading-[16px] tracking-[-0.005em]">
                Manufacturing
              </h3>
            </div>
            <h1 className="mt-6 text-white text-[32px] md:text-[40px] lg:text-[44px] leading-[35.2px] md:leading-[48px] lg:leading-[52.8px] tracking-[-0.95px] font-black">
              Enhance Production Efficiency with Automated Workflows
            </h1>
            <p className="mt-4 mb-10 text-lg text-white-200 font-medium">
              Optimize production planning, supply chain and logistics with
              workflows designed to enhance precision, reduce downtime and drive
              efficiency across every stage of production.
            </p>
            <button className="w-full md:w-[133px] h-[40px] md:h-[48px] bg-white text-green-700 font-semibold rounded-lg text-base">
              Contact Us
            </button>
          </div>

          <Image
            src="/assets/solution-hero.svg"
            alt="solution"
            draggable="false"
            width={391.41}
            height={426}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
