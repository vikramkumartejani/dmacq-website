import Image from "next/image";
import React from "react";

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Awards: React.FC = () => {
  const logos: Logo[] = [
    { src: "/assets/award1.svg", alt: "award 1", width: 173, height: 184 },
    { src: "/assets/award2.svg", alt: "award 2", width: 180, height: 196 },
    { src: "/assets/award3.svg", alt: "award 3", width: 350, height: 172 },
    { src: "/assets/award4.svg", alt: "award 4", width: 214, height: 205 },
    { src: "/assets/award5.svg", alt: "award 5", width: 182, height: 184 },
    { src: "/assets/award1.svg", alt: "award 1", width: 173, height: 184 },
    { src: "/assets/award2.svg", alt: "award 2", width: 180, height: 196 },
    { src: "/assets/award3.svg", alt: "award 3", width: 350, height: 172 },
    { src: "/assets/award4.svg", alt: "award 4", width: 214, height: 205 },
    { src: "/assets/award5.svg", alt: "award 5", width: 182, height: 184 },
  ];

  return (
    <div className="bg-[#0C1927] w-full py-16 lg:py-24">
      <div className="w-full max-w-[1184px] mx-auto">
        <h4 className="text-center text-[#FFFFFFB2] text-[18px] font-semibold leading-[21.6px] tracking-[4px] uppercase">
          Awards
        </h4>
        <h1 className="text-[#FFFFFFE5] text-[28px] md:text-[36px] leading-[48px] font-bold text-center">
          Testament to our Excellence
        </h1>

        <div className="mt-6 award-marquee-wrapper overflow-hidden">
          <div className="award-marquee">
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                draggable="false"
                width={logo.width}
                height={logo.height}
              />
            ))}
            {logos.map((logo, index) => (
              <Image
                key={`duplicate-${index}`}
                src={logo.src}
                alt={logo.alt}
                draggable="false"
                width={logo.width}
                height={logo.height}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
