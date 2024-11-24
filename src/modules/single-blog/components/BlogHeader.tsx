import Image from "next/image";
import React from "react";

const BlogHeader = () => {
  return (
    <div className="bg-[#F1F5FA] w-full pt-[72px] md:px-8 px-4">
      <div className="max-w-[1184px] mx-auto w-full pt-[64px] md:py-[37px] xl:py-[72px]">
        <div className="flex items-center lg:flex-row flex-col justify-between gap-6 md:gap-10">
          <div className="lg:max-w-[770px]">
            <div className="flex items-center gap-2">
              <div className="bg-[#E3EAF3] rounded-lg px-4 py-2">
                <h3 className="text-[#58728D] font-medium text-sm leading-[16px]">
                  Product Update
                </h3>
              </div>
              <div className="bg-[#E3EAF3] rounded-lg px-4 py-2">
                <h3 className="text-[#58728D] font-medium text-sm leading-[16px]">
                  WorkFlows
                </h3>
              </div>
            </div>
            <h1 className="mt-6 md:mt-8 text-[#192839] text-[24px] md:text-[30px] xl:text-[32px] leading-[32px] md:leading-[40px] font-extrabold">
              Digital Transformation in HR: Top Use Cases for an Effective HR
              Document Management System (HRDMS)
            </h1>
            <p className="mt-2 text-[#40566D] text-[16px] md:text-[18px] font-medium leading-[27px] md:leading-[30px]">
              Exploring Practical Applications and Benefits of Implementing an
              Effective Human Resources Document Management System (HRDMS) for
              Streamlined Processes and Enhanced Compliance
            </p>
            <h3 className="mt-6 md:mt-8 text-[#40566D] text-[16px] md:text-[18px] leading-[20px] font-medium tracking-[-0.005em]">
              Kunal Deshpande • Jun 27, 2024 • 8 min{" "}
            </h3>
          </div>
          <Image
            src="/assets/blogs/single-blog.svg"
            alt="single-blog"
            width={366}
            height={361}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
