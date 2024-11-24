import Image from "next/image";
import React from "react";

const features = [
  {
    icon: "/assets/contactus/faster-workflows.svg",
    title: "Faster Workflows",
    description: "Proven expertise in legal process automation.",
  },
  {
    icon: "/assets/contactus/customized-solutions.svg",
    title: "Customized Solutions",
    description: "Tailored to meet your department's needs.",
  },
  {
    icon: "/assets/contactus/secure-compliant.svg",
    title: "Secure & Compliant",
    description: "Ensuring full data security and compliance.",
  },
];

const brands = [
  { src: "/assets/contactus/brand-one.svg", alt: "brand-one", width: 110, height: 21 },
  { src: "/assets/contactus/brand-two.svg", alt: "brand-two", width: 107, height: 18 },
  { src: "/assets/contactus/brand-three.svg", alt: "brand-three", width: 47, height: 31 },
  { src: "/assets/contactus/brand-four.svg", alt: "brand-four", width: 85.61, height: 25 },
];

const ContactContent: React.FC = () => {
  return (
    <div className="md:pt-9 lg:w-1/2 w-full">
      <h1 className="text-[#FFFFFFE5] text-[24px] md:text-[32px] leading-[28.8px] md:leading-[38px] font-black tracking-[-0.95px] lg:max-w-[485px]">
        Reduce document handling time by up to 50%.
      </h1>
      <div className="mt-12 lg:mt-14 mb-[49px] flex flex-col gap-10">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-6">
            <Image
              src={feature.icon}
              alt={feature.title}
              width={56}
              height={56}
            />
            <div>
              <h2 className="text-[#F1F5FA] text-[18px] md:text-[20px] leading-[28px] font-semibold pb-2">
                {feature.title}
              </h2>
              <h4 className="text-[#768EA7] text-[16px] leading-[21.79px] font-medium">
                {feature.description}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h3 className="text-[#6C849D] text-[14px] leading-[16.8px] font-medium">
          TRUSTED BY TOP BRANDS
        </h3>
        <div className="flex items-center justify-between md:gap-3 max-w-[567px] h-[48px] mt-8 overflow-auto gap-10">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand.src}
              alt={brand.alt}
              width={brand.width}
              height={brand.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactContent;

