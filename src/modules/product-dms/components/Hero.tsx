import Image from "next/image";
import React from "react";

const Hero = () => {
  const features = [
    {
      title: "Innovative Approach",
      description:
        "We have created cutting-edge features like Master Metadata capabilities, DocTypes & DocProperties, setting new standards for efficiency and user experience",
      image: "/assets/dmacq/innovative-approach.svg",
    },
    {
      title: "Innovative Approach",
      description:
        "We have created cutting-edge features like Master Metadata capabilities, DocTypes & DocProperties, setting new standards for efficiency and user experience",
      image: "/assets/dmacq/innovative-approach.svg",
    },
    {
      title: "Innovative Approach",
      description:
        "We have created cutting-edge features like Master Metadata capabilities, DocTypes & DocProperties, setting new standards for efficiency and user experience",
      image: "/assets/dmacq/innovative-approach.svg",
    },
  ];

  const logos = [
    {
      src: "/assets/dmacq/logo1.svg",
      width: 138,
      height: 27,
    },
    {
      src: "/assets/dmacq/logo2.svg",
      width: 134,
      height: 27,
    },
    {
      src: "/assets/dmacq/logo3.svg",
      width: 59,
      height: 27,
    },
    {
      src: "/assets/dmacq/logo4.svg",
      width: 107,
      height: 27,
    },
    {
      src: "/assets/dmacq/logo7.svg",
      width: 97,
      height: 34,
    },
    {
      src: "/assets/dmacq/logo5.svg",
      width: 122,
      height: 36,
    },
    {
      src: "/assets/dmacq/logo6.svg",
      width: 104,
      height: 41,
    },
  ];

  return (
    <>
      <div className="pt-[72px] bg-[#F8FAFC] w-full lg:px-8 px-4">
        <div className="w-full max-w-[1184px] mx-auto pt-16 md:pt-[84px] pb-[64px] lg:pb-[220px]">
          <div className="flex items-center justify-between gap-10 lg:gap-5 lg:flex-row flex-col">
            <div className="lg:max-w-[625px]">
              <h2 className="text-[#243547] text-[32px] md:text-[40px] xl:text-[48px] leading-[36px] md:leading-[56px] tracking-[-1px] font-black">
                Easily <span className="text-[#2950DA]">Organize, Store</span>{" "}
                and <span className="text-[#2950DA]"> Retrieve</span> Your
                Documents
              </h2>
              <div className="mt-[22px] mb-3.5 bg-[#FFEEB6] rounded-md py-2 md:py-0.5 px-3 w-fit ">
                <h2 className="text-[#7E5F08] text-[16px] xl:text-[20px] leading-[20px] md:leading-[34px] font-bold">
                  World’s Most Innovative Document Management Software
                </h2>
              </div>
              <p className="text-[#40566D] text-[18px] font-medium leading-[30.6px]">
                Gain control over your high-volume content with a platform
                designed to secure, organize and ensure the quality of your
                critical data assets. Empowering you to manage your information
                effortlessly and confidently.
              </p>
              <button className="mt-10 bg-[#2243B6] rounded-lg h-[40px] md:h-[48px] w-full md:w-[133px] text-[#FFFFFF] text-[16px] font-semibold leading-[21.79px]">
                Contact Us
              </button>
            </div>
            <Image
              src="/assets/dmacq/product-hero.svg"
              alt="product-hero"
              width={453}
              height={428}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#2243B6] w-full pb-16 lg:px-8 px-4 lg:pt-[48px]">
        <div className="max-w-[1184px] mx-auto w-full">
          <div className="lg:grid hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 -mt-[220px]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg p-7 bg-white"
                style={{ boxShadow: "0px 4px 14.2px 0px #09258521" }}
              >
                <Image src={feature.image} alt="logo" width={60} height={60} />
                <h1 className="mt-6 text-[#192839] text-[20px] leading-[27.24px] font-bold tracking-[-0.4px]">
                  {feature.title}
                </h1>
                <p className="mt-2 text-[#40566D] text-[16px] font-normal leading-[25.6px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <h3 className="pt-12 lg:pt-[70px] text-white text-center text-[16px] leading-[21px] font-semibold">
            300+ customers in over 10+ countries grow their businesses with
            dMACQ’s
          </h3>
          <div className="mt-10 mb-10 lg:mb-0 flex items-center justify-between overflow-x-auto scrollbar-none gap-10 h-[60px]">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={`logo${index + 1}`}
                width={logo.width}
                height={logo.height}
              />
            ))}
          </div>
          <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-lg p-7 bg-white"
                style={{ boxShadow: "0px 4px 14.2px 0px #09258521" }}
              >
                <Image src={feature.image} alt="logo" width={60} height={60} />
                <h1 className="mt-4 lg:mt-6 text-[#192839] text-[20px] leading-[27.24px] font-bold tracking-[-0.4px]">
                  {feature.title}
                </h1>
                <p className="mt-2 text-[#40566D] text-[16px] font-normal leading-[25.6px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
