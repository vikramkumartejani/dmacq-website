import React from "react";
import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  spacing?: string;
  bgImageSrc?: string;
  reverse?: boolean;
  heading?: boolean;
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  imageSrc,
  altText,
  spacing,
  bgImageSrc,
  reverse = false,
  heading = false,
}) => {
  return (
    <div className="lg:px-[32px] px-[16px] relative min-w-full">
      <img
        src={bgImageSrc}
        draggable="false"
        alt="background grid"
        className="absolute w-full h-full object-cover z-[2]"
      />
      <div className="max-w-[1184px] mx-auto">
        {heading && (
          <div className="text-center mb-[4px] pt-20 relative z-[3]">
            <h2 className="text-[#75A3FF] text-[18px] font-[600] tracking-[4px]">
              FEATURES
            </h2>
            <h3 className="text-white text-[32px] md:text-[36px] font-[800]">
              AI-Powered Features
            </h3>
          </div>
        )}

        <div
          className={`relative flex items-center justify-between xl:gap-[50px] md:gap-[20px] gap-[0px] ${
            reverse ? "lg:flex-row-reverse sm:flex-col" : "lg:flex-row"
          } ${spacing ? spacing : "lg:py-[120px] py-[64px]"} flex-col z-[3]`}
        >
          {/* Illustration */}
          <div className="lg:w-[42%]">
            <Image
              src={imageSrc}
              alt={altText}
              width={512}
              height={456}
              draggable="false"
              className="lg:w-auto w-[500px] h-[403px] lg:mx-0  mx-auto"
            />
          </div>

          {/* Content */}
          <div className="space-y-[10px] lg:w-[43%]">
            <h3 className="text-[#F8FAFC] text-[28px] md:text-[40px] font-[800] md:leading-[48px]">
              {title}
            </h3>
            <p className="text-[#B1C1D2] text-[18px] sm:text-[22px] leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
