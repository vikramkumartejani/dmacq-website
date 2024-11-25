import ContactUs from "@/components/contact-us";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="pt-[64px] lg:pt-[72px] bg-[#F1F5FA] lg:px-8 px-4">
        <div className="max-w-[1184px] w-full mx-auto">
            <div className="py-[79.04px] flex items-center lg:flex-row flex-col justify-between gap-[50px] md:gap-5">
                <div className="lg:max-w-[628px]">
                    <div className="bg-[#D8E4FD] w-[200px] h-[32px] rounded-lg flex items-center justify-center ">
                        <h3 className="text-[#2243B6] text-[16px] leading-[16px] font-bold tracking-[-0.5%]">Admission Processes</h3>
                    </div>
                    <h1 className="mt-4 md:mt-6 text-[#192839] text-[32px] md:text-[44px] leading-[36px] md:leading-[52.8px] tracking-[-1px] md:tracking-[-0.96px] font-black">Streamline Your Admission Process with DMS+</h1>
                    <p className="mt-4 text-[#40566D] text-[18px] leading-[30.6px] font-medium">Effortlessly manage your institution’s admissions with our digital solution. Our DMS ensures a smoother, more organized process from application submission to final enrollment.</p>
                    <div className="mt-10 w-full md:w-[117px] h-[40px] md:h-[48px] rounded-lg bg-[#2243B6] flex items-center justify-center">
                        <ContactUs/>
                    </div>
                </div>
                <Image src='/assets/usecase/usecase-hero.svg' alt="usecase-hero" width={473} height={445} />
            </div>
        </div>
    </div>
  );
};

export default Hero;
