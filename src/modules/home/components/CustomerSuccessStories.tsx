"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Story = {
  image: string;
  industry: string;
  title: string | JSX.Element;
  description: string;
  caseStudyLink: string;
};

const CustomerSuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const swiperRef = useRef<any>(null);

  const stories: Story[] = [
    {
      image: "/assets/solution/bajaj.svg",
      industry: "Automobile Industry",
      title: (
        <>
          Our approval processes became{" "}
          <span className="text-[#FC5523]">50% faster</span> after implementing
          DMS+
        </>
      ),
      description:
        "Dmacq’s DMS solution transformed the way we manage and access documents. We’ve saved countless hours and significantly improved data security.",
      caseStudyLink: "Read Bajaj Case Studies",
    },
    {
      image: "/assets/solution/bajaj.svg",
      industry: "Automobile Industry",
      title: (
        <>
          Our approval processes became{" "}
          <span className="text-[#FC5523]">50% faster</span> after implementing
          DMS+
        </>
      ),
      description:
        "Dmacq’s DMS solution transformed the way we manage and access documents. We’ve saved countless hours and significantly improved data security.",
      caseStudyLink: "Read Bajaj Case Studies",
    },
    {
      image: "/assets/solution/bajaj.svg",
      industry: "Automobile Industry",
      title: (
        <>
          Our approval processes became{" "}
          <span className="text-[#FC5523]">50% faster</span> after implementing
          DMS+
        </>
      ),
      description:
        "Dmacq’s DMS solution transformed the way we manage and access documents. We’ve saved countless hours and significantly improved data security.",
      caseStudyLink: "Read Bajaj Case Studies",
    },
    {
      image: "/assets/solution/bajaj.svg",
      industry: "Automobile Industry",
      title: (
        <>
          Our approval processes became{" "}
          <span className="text-[#FC5523]">50% faster</span> after implementing
          DMS+
        </>
      ),
      description:
        "Dmacq’s DMS solution transformed the way we manage and access documents. We’ve saved countless hours and significantly improved data security.",
      caseStudyLink: "Read Bajaj Case Studies",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % stories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [stories.length]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(currentSlide);
    }
  }, [currentSlide]);

  return (
    <div className="w-full md:px-8 px-4 py-[64px] md:py-[96px] bg-[#FFF5F2]">
      <div className="w-full max-w-[1184px] mx-auto text-center">
        <h3 className="text-[#CD3609] text-base md:text-lg leading-[19.2px] md:leading-[21.6px] font-bold tracking-[4px] uppercase">
          Customer Success Stories
        </h3>
        <h1 className="text-dark text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43.2px] font-extrabold tracking-[-0.96px] mt-2">
          Real Success, Real Impact
        </h1>

        <div className="mt-16 text-left">
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className="success-stories-swiper"
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          >
            {stories.map((story, index) => (
              <SwiperSlide key={index}>
                <div className="border border-primary-300 bg-white rounded-[16px] p-5 md:p-12 flex items-center flex-col lg:flex-row gap-4 md:gap-[72px]">
                  <Image
                    src={story.image}
                    alt="Customer Story"
                    draggable="false"
                    width={393}
                    className="w-full lg:w-fit"
                    height={345}
                  />
                  <div>
                    <div className="lg:max-w-[623px] w-full mx-auto pb-6 border-b border-primary-400">
                      <h5 className="text-[#CD3609] text-base font-semibold leading-[24px]">
                        {story.industry}
                      </h5>
                      <h3 className="mt-4 text-[24px] md:text-[32px] leading-[28px] md:leading-[40px] font-extrabold text-secondary-100">
                        {story.title}
                      </h3>
                      <p className="mt-2 md:mt-3 text-secondary text-base md:text-lg font-medium leading-[27.2px] md:leading-[30.6px]">
                        {story.description}
                      </p>
                    </div>
                    <h3 className="pt-4 md:pt-[30.5px] text-primary text-base font-semibold leading-[21.79px]">
                      {story.caseStudyLink}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-4 flex items-center justify-center py-5">
            <div className="flex items-center gap-1.5">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`${
                    currentSlide === index
                      ? "bg-[#FC5523] w-[23px] h-[8px] rounded-full"
                      : "bg-[#FC55232E] w-[8px] h-[8px] rounded-full"
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
