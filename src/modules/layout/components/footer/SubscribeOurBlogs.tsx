import Image from "next/image";
import React from "react";

const SubscribeOurBlogs = () => {
  return (
    <div className="bg-blue rounded-[24px] relative p-8 md:py-[72px] md:px-[164px]">
      <Image
        src="/assets/blogs/circle-one-shape.svg"
        alt="shape"
        width={80}
        height={229}
        className=" absolute top-0 left-0 lg:block hidden"
      />
      <Image
        src="/assets/blogs/circle-two-shape.svg"
        alt="shape"
        width={80}
        height={229}
        className=" absolute bottom-0 right-0 lg:block hidden"
      />
      <div className="text-center">
        <h1 className="text-[24px] leading-[28px] md:text-[36px] md:leading-[48px] font-bold text-white pb-3 ">
          Subscribe our Blogs
        </h1>
  
        <p className="max-w-[716px] mx-auto  text-white text-[16px] md:text-[18px] leading-[27.2px] md:leading-[30.6px]">
          Be the first to access actionable reports, guides, tips, videos,
          podcasts from experts in Customer Engagement, retention and more!
        </p>

        <div className="mt-8 max-w-[583px] mx-auto">
          <h2 className="mb-2 text-white-900 text-[16px] font-normal leading-[25.6px] text-left">
            Email
          </h2>
          <div className="flex items-center md:flex-row flex-col gap-3 md:gap-6">
            <input
              type="email"
              placeholder="eg. Johndeo@company.com"
              className="md:h-[48px] h-[40px] w-full border border-white-700 rounded-md bg-white-100 text-[#F8FAFC] outline-none placeholder:text-[#F8FAFC] px-4 text-[13px] md:text-base font-normal leading-[25.6px]"
            />
            <button className=" h-[40px] md:h-[48px] w-full md:min-w-[124px]  rounded-lg bg-white text-blue text-[16px] font-semibold leading-[21.79px]">
              Subscribe
            </button>
          </div>
        </div>
{/* 
        <button className="mt-12 h-[48px] w-full block lg:hidden rounded-lg bg-white text-blue text-[16px] font-semibold leading-[21.79px]">
          Contact Us
        </button> */}
      </div>
    </div>
  );
};

export default SubscribeOurBlogs;
