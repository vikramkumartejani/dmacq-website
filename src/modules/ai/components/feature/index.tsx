import React from "react";
import Image from "next/image";

interface FeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  altText: string;
  spacing?: string;
  reverse?: boolean;
}

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  imageSrc,
  altText,
  spacing,
  reverse = false,
}) => {
  return (
    <div
      className={`flex items-center justify-between gap-12 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } ${spacing ? spacing : "py-[120px]"} flex-col`}
    >
      {/* Illustration */}
      <div className="lg:w-[42%]">
        <Image src={imageSrc} alt={altText} width={512} height={456} />
      </div>

      {/* Content */}
      <div className="space-y-[16px] lg:w-[43%]">
        <h3 className="text-white text-[30px] md:text-[40px] font-[800] md:leading-[48px]">
          {title}
        </h3>
        <p className="text-[#B1C1D2] text-[18px] md:text-[22px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Feature;
