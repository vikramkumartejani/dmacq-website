"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Stat {
  percentage: string;
  description: string;
}

interface Story {
  id: number;
  company: string;
  logo: string;
  testimonial: string;
  name: string;
  designation: string;
  stats: Stat[];
  // storyLink: string;
}

interface SuccessStoriesProps {
  customTitle: string;
  bgColor: string;
  textColor: string;
  mainTitleColor: string;
}

const successStories: Story[] = [
  {
    id: 1,
    company: "Bajaj Auto",
    logo: "/assets/usecase/bajaj.svg",
    testimonial:
      "Routable's API has saved our team countless hours by automating thousands of outgoing payments every year. Our partners couldn't be happier with the quality of service we're now able to provide.",
    name: "Rajesh Sharma",
    designation: "Operation Manager",
    stats: [
      { percentage: "98%", description: "Annual Client Retention" },
      { percentage: "25%", description: "Increase Productivity" },
      { percentage: "9%", description: "Conversion Rate Increase" },
    ],
    // storyLink: "Read Bajaj Story",
  },
  {
    id: 2,
    company: "Hero MotoCorp",
    logo: "/assets/usecase/bajaj.svg",
    testimonial:
      "Hero MotoCorp successfully integrated Routable's API to streamline payment processes, enabling faster turnaround times and enhanced customer satisfaction.",
    name: "Amit Kumar",
    designation: "Finance Head",
    stats: [
      { percentage: "95%", description: "Client Satisfaction Rate" },
      { percentage: "20%", description: "Reduction in Processing Time" },
      { percentage: "12%", description: "Revenue Growth" },
    ],
    // storyLink: "Read Hero Story",
  },
  {
    id: 3,
    company: "Mahindra",
    logo: "/assets/usecase/bajaj.svg",
    testimonial:
      "With Routable's tools, Mahindra has optimized its payment workflow, drastically reducing errors and improving vendor relationships.",
    name: "Vikram Singh",
    designation: "Chief Operations Officer",
    stats: [
      { percentage: "90%", description: "Operational Efficiency" },
      { percentage: "30%", description: "Error Reduction" },
      { percentage: "15%", description: "Improved Vendor Retention" },
    ],
    // storyLink: "Read Mahindra Story",
  },
];

const SuccessStories: React.FC<SuccessStoriesProps> = ({
  customTitle,
  bgColor,
  textColor,
  mainTitleColor,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + successStories.length) % successStories.length
    );
  };

  const currentStory = successStories[currentIndex];

  return (
    <div
      className={`w-full py-16 md:py-[120px] h-full lg:px-8 px-4`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full max-w-[1184px] mx-auto">
        <div>
          <h4
            style={{ color: mainTitleColor }}
            className="mb-2 text-[16px] leading-[19.2px] tracking-[4px] font-semibold text-center uppercase"
          >
            Success Stories
          </h4>
          <h1
            style={{ color: textColor }}
            className="text-center text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43px] tracking-[-0.96px] font-extrabold"
          >
            {customTitle}
          </h1>

          <div className="mt-16 bg-white rounded-lg flex justify-between min-h-full">
            <div className="px-5 py-6 lg:p-10 h-full">
              <Image
                src={currentStory.logo}
                alt={currentStory.company}
                width={200.17}
                height={94}
                className="w-[140px] md:w-[200px]"
              />
              <p className="my-9 text-[#2F4256] text-[20px] md:text-[28px] lg:text-[32px] leading-[27.24px] md:leading-[38.14px] lg:leading-[43px] tracking-[-0.96px] font-semibold max-w-[719px]">
                {currentStory.testimonial}
              </p>

              <div className="flex items-start md:items-center md:justify-between lg:max-w-[633px] md:flex-row flex-col gap-[28px]">
                <div>
                  <h3 className="text-[#2F4256] text-[18px] leading-[21.6px] font-semibold">
                    {currentStory.name}
                  </h3>
                  <h3 className="text-[#58728D] text-[16px] leading-[19.2px] font-normal mt-1">
                    {currentStory.designation} • {currentStory.company}
                  </h3>
                </div>
                {/* <button className="text-[#2243B6] text-[16px] leading-[21.79px] font-semibold">
                  {currentStory.storyLink}
                </button> */}
              </div>
            </div>
            <div className="bg-[#F5F8FF] border-l border-[#305EFF3D] w-[385px] min-h-full md:block hidden rounded-r-lg">
              <div className="p-5 lg:p-10">
                {currentStory.stats.map((stat, index) => (
                  <div key={index} className="py-3">
                    <h3 className="text-[#243547] text-[40px] leading-[54.48px] tracking-[-0.96px] font-extrabold mb-1">
                      {stat.percentage}
                    </h3>
                    <p className="text-[#243547] text-[16px] leading-[18.4px] tracking-[-0.24px] font-medium">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#305EFF3D] flex items-start justify-start py-10 gap-4 pl-10">
                <button onClick={handlePrevious}>
                  <Image
                    src="assets/usecase/arrow-left.svg"
                    alt="arrow-left"
                    width={48}
                    height={48}
                  />
                </button>
                <button onClick={handleNext}>
                  <Image
                    src="assets/usecase/arrow-right.svg"
                    alt="arrow-right"
                    width={48}
                    height={48}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
