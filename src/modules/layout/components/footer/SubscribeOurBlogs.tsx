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
        <h1 className="text-[36px] leading-[48px] font-bold text-white pb-3 lg:block hidden">
          Subscribe our Blogs
        </h1>
        <h1 className="text-[24px] leading-[28px] font-bold text-[#FFFFFFE5] pb-3 lg:hidden block">
        Know About our all Products
        </h1>
        <p className="lg:block hidden max-w-[716px] mx-auto  text-white text-[18px] leading-[30.6px]">
          Be the first to access actionable reports, guides, tips, videos,
          podcasts from experts in Customer Engagement, retention and more!
        </p>
        <p className="lg:hidden block max-w-[716px] mx-auto text-[#FFFFFFB2] text-[16px] leading-[27.2px]">
        Discover How Our Innovative Products DMS, Form Automation, Workflow Solutions, and Digitization, Can Streamline Your Business Operations and Enhance Efficiency.
        </p>
        <div className="mt-8 max-w-[583px] mx-auto lg:block hidden">
          <h2 className="mb-2 text-white-900 text-[16px] font-normal leading-[25.6px] text-left">
            Email
          </h2>
          <div className="flex items-center gap-6">
            <input
              type="email"
              placeholder="eg. Johndeo@company.com"
              className="h-[48px] w-full border border-white-700 rounded-md bg-white-100 text-[#F8FAFC] outline-none placeholder:text-[#F8FAFC] px-4 text-base font-normal leading-[25.6px]"
            />
            <button className="h-[48px] min-w-[124px]  rounded-lg bg-white text-blue text-[16px] font-semibold leading-[21.79px]">
              Subscribe
            </button>
          </div>
        </div>
        <button className="mt-12 h-[48px] w-full block lg:hidden rounded-lg bg-white text-blue text-[16px] font-semibold leading-[21.79px]">
        Contact Us
        </button>
      </div>
    </div>
  );
};

export default SubscribeOurBlogs;
