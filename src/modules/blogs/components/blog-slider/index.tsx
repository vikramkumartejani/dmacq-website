"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { LuDot } from "react-icons/lu";

type Slides = {
  tags: string[];
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
};

const CustomerSuccessSlides = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: Slides[] = [
    {
      tags: ["Product Update", "WorkFlows"],
      title:
        "1 Robotic Process Automation (RPA) for GST Input Credit Claims: ",
      subtitle:
        "Streamlining Tax Compliance and Maximizing Efficiency with Automated Solutions for Faster, Accurate, and Hassle-Free GST Input Credit Claims",
      author: "Kunal Deshpande",
      date: "Jun 27, 2024",
      readTime: "8 min",
      image: "/assets/blogs/article1.jpg",
    },
    {
      tags: ["Product Update", "WorkFlows"],
      title:
        "2 Robotic Process Automation (RPA) for GST Input Credit Claims: dMACQ Introduces GST Analytics Package",
      subtitle:
        "Streamlining Tax Compliance and Maximizing Efficiency with Automated Solutions for Faster, Accurate, and Hassle-Free GST Input Credit Claims",
      author: "Kunal Deshpande",
      date: "Jun 27, 2024",
      readTime: "8 min",
      image: "/assets/blogs/article2.png",
    },
    {
      tags: ["Product Update", "WorkFlows"],
      title:
        "3 Robotic Process Automation (RPA) for GST Input Credit Claims:  ",
      subtitle:
        "Streamlining Tax Compliance and Maximizing Efficiency with Automated Solutions for Faster, Accurate, and Hassle-Free GST Input Credit Claims",
      author: "Kunal Deshpande",
      date: "Jun 27, 2024",
      readTime: "8 min",
      image: "/assets/blogs/article3.png",
    },
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto slide functionality: Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // 5000 ms = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="w-full mt-10 lg:block hidden">
      <div className="w-full max-w-[1184px] mx-auto text-center">
        <div className="text-left">
          <div className="border border-primary-300 bg-white rounded-[16px] p-5 md:p-12 flex items-start flex-col lg:flex-row gap-4 md:gap-[72px]">
            <div>
              <div className="lg:max-w-[623px] w-full mx-auto pb-6 border-b border-primary-400">
                <div className="flex items-center gap-2">
                  {slides[currentSlide].tags.map((tag, index) => (
                    <h5
                      key={index}
                      className="text-[#58728D] text-[14px] font-[500] px-[16px] py-[8px] rounded-[8px] bg-[#E3EAF3]"
                    >
                      {tag}
                    </h5>
                  ))}
                </div>
                <h3 className="mt-4 text-[24px] md:text-[32px] leading-[28px] md:leading-[40px] font-extrabold text-secondary-100">
                  {slides[currentSlide].title}
                </h3>
                <p className="mt-2 md:mt-3 text-secondary text-base md:text-lg font-medium leading-[27.2px] md:leading-[30.6px]">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="flex items-center mt-2 md:mt-3">
                  <p className="text-secondary text-base md:text-lg font-medium leading-[27.2px] md:leading-[30.6px]">
                    {slides[currentSlide].author}
                  </p>
                  <LuDot size={28} />
                  <p className="text-secondary text-base md:text-lg font-medium leading-[27.2px] md:leading-[30.6px]">
                    {slides[currentSlide].date}
                  </p>
                  <LuDot size={28} />
                  <p className="text-secondary text-base md:text-lg font-medium leading-[27.2px] md:leading-[30.6px]">
                    {slides[currentSlide].readTime}
                  </p>
                </div>
              </div>
              <h3 className="pt-4 md:pt-[30.5px] text-[#2243B6] text-base font-semibold leading-[21.79px]">
                Read More
              </h3>
            </div>
            <Image
              src={slides[currentSlide].image}
              alt="Customer Story"
              draggable="false"
              width={393}
              className="w-[393px] h-[345px] rounded-[16px]"
              height={345}
            />
          </div>

          {/* Dots Navigation */}
          <div className="mt-4 flex items-center justify-center py-5">
            <div className="flex items-center gap-1.5">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`${
                    currentSlide === index
                      ? "bg-[#2243B6] w-[23px] h-[8px] rounded-full"
                      : "bg-[#305EFF3D] w-[8px] h-[8px] rounded-full"
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

export default CustomerSuccessSlides;
