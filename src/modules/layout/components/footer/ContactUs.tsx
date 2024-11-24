import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="w-full bg-[#2243B6] rounded-lg md:rounded-[32px] p-8 md:p-12 xl:p-[72px] flex items-center gap-5 justify-between">
        <div className="lg:max-w-[507px]">
          <h2 className="text-white font-bold md:font-extrabold text-[24px] md:text-[40px] leading-[28px] md:leading-[40px] mb-3">
          Unlock the Future of Document Management
          </h2>
          <p className="text-white text-[16px] leading-[27.2px] font-normal">
          Discover a new era of efficiency, where powerful features and intuitive design work together to elevate your file management experience
          </p>
          <button className="mt-12 w-full md:w-[133px] h-[40px] bg-[#FFFFFF33] lg:bg-white lg:text-[#2243B6] text-white rounded-lg text-base font-semibold">
            Contact Us
          </button>
          <button className="lg:hidden block mt-4 w-full md:w-[133px] h-[40px] bg-white text-[#2243B6] rounded-lg text-base font-semibold">
          Get Started for Free
          </button>
        </div>

        <div className="lg:block hidden">
          <Image
            src="/assets/footer.svg"
            alt="footer"
            width={460.92}
            height={272.42}
            draggable="false"
          />
        </div>
      </div>
    </>
  );
};

export default ContactUs