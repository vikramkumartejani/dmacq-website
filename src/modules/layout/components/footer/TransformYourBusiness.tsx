import ContactUs from "@/components/contact-us";
import Image from "next/image";
import React from "react";

const TransformYourBusiness = () => {
  return (
    <div className="bg-[#FFDED4] rounded-[24px] relative p-8 md:py-[72px] md:px-[164px]">
      <Image
        src="/assets/line-left.svg"
        alt="shape"
        width={80}
        height={229}
        className=" absolute top-0 left-0 lg:block hidden"
      />
      <Image
        src="/assets/line-right.svg"
        alt="shape"
        width={80}
        height={229}
        className=" absolute bottom-0 right-0 lg:block hidden"
      />
      <div className="text-center">
        <h1 className="text-[36px] leading-[48px] font-bold text-[#5F1904] pb-3">
          Ready to Transform Your Business?
        </h1>
        <p className=" max-w-[798px] mx-auto text-[#5F1904] text-[18px] font-normal leading-[30.6px]">
          Sign up now to experience the transformative power of dMACQ’s
          innovative solutions and elevate your organization to new heights.
        </p>
        <div className="mt-12 flex items-center justify-center">
          <div className="h-[48px] w-[117px] rounded-lg bg-[#FC5523] flex items-center justify-center">
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformYourBusiness;
