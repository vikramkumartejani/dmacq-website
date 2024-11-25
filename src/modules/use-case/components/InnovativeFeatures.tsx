import Image from "next/image";
import React from "react";

const features = [
  {
    id: 1,
    title: "Advanced Analytics",
    description:
      "OCR Search converts printed or handwritten text in images, scanned documents, and PDFs into machine-readable text.",
    image: "/assets/usecase/advanced-analytics.svg",
    points: [
      "OCR Search converts printed or handwritten.",
      "Track document revisions with automatic version.",
      "Search through file content, metadata, and.",
    ],
    reverse: false,
  },
  {
    id: 2,
    title: "Real-Time Collaboration",
    description:
      "Collaborate in real-time with team members using integrated tools and version control.",
    image: "/assets/usecase/real-time-collaboration.svg",
    points: [
      "OCR Search converts printed or handwritten.",
      "Track document revisions with automatic version.",
      "Search through file content, metadata, and.",
    ],
    reverse: true,
  },
  {
    id: 3,
    title: "Automated Workflows",
    description:
      "Streamline processes with automation to improve efficiency and reduce manual tasks.",
    image: "/assets/usecase/real-time-collaboration.svg",
    points: [
      "OCR Search converts printed or handwritten.",
      "Track document revisions with automatic version.",
      "Search through file content, metadata, and.",
    ],
    reverse: false,
  },
];

const InnovativeFeatures = () => {
  return (
    <div className="w-full lg:px-8 px-4">
      <div className="w-full py-[64px] lg:pt-0 lg:pb-[120px] max-w-[1184px] mx-auto">
        <h4 className="mb-2 text-[#2243B6] text-[16px] leading-[19.2px] tracking-[4px] font-semibold text-center uppercase">
          Innovative Features
        </h4>
        <h1 className="text-center text-[#243547] text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43px] tracking-[-0.96px] font-extrabold">
          Empower Your Team with Our Full Range of Features
        </h1>
        <div className="mt-16 flex flex-col gap-16 lg:gap-[120px]">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`flex items-center justify-between lg:flex-row flex-col gap-6 ${
                feature.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="bg-[#F1F5FA] rounded-lg px-10 md:px-[71px] py-[28px] md:py-[47.5px] w-full lg:max-w-[544px] flex items-center justify-center">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={402}
                  height={380}
                />
              </div>
              <div className="lg:max-w-[544px]">
                <h1 className="text-[#243547] text-[24px] md:text-[40px] leading-[28.8px] md:leading-[48px] tracking-[-0.96px] font-extrabold mb-4">
                  {feature.title}
                </h1>
                <p className="text-[#40566D] text-[16px] md:text-[22px] leading-[27.2px] md:leading-[37.4px] font-normal tracking-[-0.4px]">
                  {feature.description}
                </p>
                <div className="mt-4 md:mt-6 flex flex-col gap-4">
                  {feature.points.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Image
                        src="/assets/usecase/checkbox.svg"
                        alt="checkbox"
                        width={23}
                        height={23}
                      />
                      <h3 className="text-[#2F4256] leading-[27.2px] md:leading-[37.4px] font-medium text-[16px] md:text-[22px] tracking-[-0.4px]">
                        {point}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InnovativeFeatures;
