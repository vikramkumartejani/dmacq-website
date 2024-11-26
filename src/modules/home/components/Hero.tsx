import ContactUs from "@/components/contact-us";
import Image from "next/image";
import React from "react";
import Partner from "./Partner";

const products = [
  {
    icon: "/assets/dmacq-dms-logo.svg",
    name: "DMS +",
    description: "Most Innovative Document Management Software",
    width: "102px",
    height: "32px"
  },
  {
    icon: "/assets/dmacq-form-logo.svg",
    name: "FORMS +",
    description: "#1 Form Builder for Businesses",
  },
  {
    icon: "/assets/dmacq-flow.svg",
    name: "FLOW +",
    description: "Most Flexible yet Powerful Workflow Management",
  },
];

const Hero = () => {
  return (
    <div className="bg-[#FFF5F2] w-full lg:px-8 px-4">
      <div className="max-w-[1184px] mx-auto w-full pt-[64px] lg:pt-[72px]">
        <div>
          <div className="flex items-center justify-between gap-12 lg:gap-4 flex-col lg:flex-row pb-[64px]">
            <div className="lg:max-w-[639px] w-full">
              <h1 className="text-[32px] md:text-[48px] leading-[38px] md:leading-[57.6px] max-w-[639px] font-black tracking-[-0.95px]">
                Unlock Efficiency, Powered by{" "}
                <span className="text-[#FC5523]">Innovation</span>
              </h1>
              <p className="mb-10 text-[#2F4256] max-w-[639px] text-[16px] md:text-[18px] leading-[25px] md:leading-[28.8px] font-normal mt-4 md:mt-3">
                Transform your operations with a cutting-edge software suite
                designed to streamline your business. Built for scalability,
                trusted for its reliability and backed by a team committed to
                your success.{" "}
              </p>
              <div className="h-[40px] md:h-[48px] bg-[#FC5523] w-full md:w-[117px] flex items-center justify-center rounded-lg">
                <ContactUs />
              </div>
            </div>

            <div
              className="bg-white rounded-lg py-5 lg:py-3 lg:px-4 lg:w-[436px] w-full"
              style={{ boxShadow: "2px 4px 48.8px 0px #471F021A" }}
            >
              <h1 className="h-[32px] flex items-center px-4 text-[#58728D] text-[12px] font-bold leading-[16.34px]">
                Our Products
              </h1>
              <div className="flex flex-col">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className={`${
                      index !== products.length - 1
                        ? "border-b border-[#6C849D2E]"
                        : ""
                    } py-5 px-4 flex items-center gap-4 justify-between`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <Image
                          src={product.icon}
                          draggable='false'
                          alt={product.name.toLowerCase()}
                          width={102}
                          height={32}
                        />
                       
                      </div>
                      <p className="mt-3 text-[#2F4256] text-[12px] leading-[16.34px] font-normal line-clamp-1">
                        {product.description}
                      </p>
                    </div>
                    <button>
                      <Image
                        src="/assets/arrow.svg"
                        alt="arrow"
                        width={24}
                        draggable='false'
                        height={24}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Partner/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
