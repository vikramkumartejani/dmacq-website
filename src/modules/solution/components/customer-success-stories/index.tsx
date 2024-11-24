"use client";
import Image from "next/image";
import React, { useState } from "react";

// Update Story type to accept either string or JSX.Element for title
type Story = {
  image: string;
  industry: string;
  title: string | JSX.Element; // Accept string or JSX.Element
  description: string;
  caseStudyLink: string;
};

const CustomerSuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const stories: Story[] = [
    {
      image: "/assets/solution/bajaj.svg",
      industry: "Automobile Industry",
      title: (
        <>
          Our approval processes became{" "}
          <span className="text-green-600">50% faster</span> after implementing
          DMS+
        </>
      ),
      description:
        "Dmacq’s DMS solution transformed the way we manage and access documents. We’ve saved countless hours and significantly improved data security.",
      caseStudyLink: "Read Bajaj Case Studies",
    },
    {
      image: "/assets/solution/bajaj.svg",
      industry: "Technology Industry",
      title: "We increased efficiency by 40% with DMS+",
      description:
        "Dmacq’s solutions helped streamline our operations, saving time and resources while enhancing security.",
      caseStudyLink: "Read Technology Case Studies",
    },
    {
      image: "/assets/solution/bajaj.svg",
      industry: "Healthcare Industry",
      title: "Document management became 30% more secure with DMS+",
      description:
        "We improved patient data management and security with DMS+.",
      caseStudyLink: "Read Healthcare Case Studies",
    },
    {
      image: "/assets/solution/bajaj.svg",
      industry: "Healthcare Industry",
      title: "Document management became 30% more secure with DMS+",
      description:
        "We improved patient data management and security with DMS+.",
      caseStudyLink: "Read Healthcare Case Studies",
    },
    {
      image: "/assets/solution/bajaj.svg",
      industry: "Healthcare Industry",
      title: "Document management became 30% more secure with DMS+",
      description:
        "We improved patient data management and security with DMS+.",
      caseStudyLink: "Read Healthcare Case Studies",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? stories.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full md:px-8 px-4 py-[64px] md:py-[96px] bg-white-500">
      <div className="w-full max-w-[1184px] mx-auto text-center">
        <h3 className="text-green-600 text-base md:text-lg leading-[19.2px] md:leading-[21.6px] font-bold tracking-[4px] uppercase">
          Customer Success Stories
        </h3>
        <h1 className="text-dark text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43.2px] font-extrabold tracking-[-0.96px] mt-2">
          Real Success, Real Impact
        </h1>

        <div className="mt-16 text-left">
          <div className="border border-primary-300 bg-white rounded-[16px] p-5 md:p-12 flex items-center flex-col lg:flex-row gap-4 md:gap-[72px]">
            <Image
              src={stories[currentSlide].image}
              alt="Customer Story"
              draggable="false"
              width={393}
              className="w-full lg:w-fit"
              height={345}
            />
            <div>
              <div className="lg:max-w-[623px] w-full mx-auto pb-6 border-b border-primary-400">
                <h5 className="text-primary-200 text-base font-semibold leading-[24px]">
                  {stories[currentSlide].industry}
                </h5>
                <h3 className="mt-4 text-[24px] md:text-[32px] leading-[28px] md:leading-[40px] font-extrabold text-secondary-100">
                  {stories[currentSlide].title}
                </h3>
                <p className="mt-2 md:mt-3 text-secondary text-base md:text-lg font-medium leading-[27.2px] md:leading-[30.6px]">
                  {stories[currentSlide].description}
                </p>
              </div>
              <h3 className="pt-4 md:pt-[30.5px] text-primary text-base font-semibold leading-[21.79px]">
                {stories[currentSlide].caseStudyLink}
              </h3>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center py-5">
            <div className="flex items-center gap-1.5">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`${
                    currentSlide === index
                      ? "bg-green-600 w-[23px] h-[8px] rounded-full"
                      : "bg-primary-300 w-[8px] h-[8px] rounded-full"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSuccessStories;
