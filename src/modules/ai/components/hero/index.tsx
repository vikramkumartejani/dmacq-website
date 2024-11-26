import { BsDiamondFill } from "react-icons/bs";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-white pb-[100px] relative">
      {/* Hero Section */}
      <img
        src="/assets/ai/grid-1.png"
        alt="background grid"
        className="absolute w-full h-full object-cover z-[1]"
      />
      <div className="lg:px-[32px] px-[16px] relative z-[2] pt-[64px]">
        <div className="max-w-[1184px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between xl:gap-[30px] lg:gap-0 gap-[20px]">
            {/* Left Content */}
            <div className="lg:w-[55%] flex flex-col gap-[20px]">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/ai/stars.png"
                    draggable='false'
                    alt="hero img"
                    width={40}
                    height={40}
                  />
                  <span className="text-[24px] md:text-[32px] text-[#F8FAFC] font-[700]">
                    DMS+ AI
                  </span>
                </div>
              </div>
              <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-[900] lg:leading-[56px] text-[#F1F5FA]">
                <span className="text-[#768EA7]">Revolutionize</span> Document
                <br />
                Management <span className="text-[#58728D]">with</span> AI
              </h1>
              <p className="text-[#B1C1D2] md:text-[18px]">
                Unlock the power of AI to streamline, organize, and secure your
                documents like never before. Boosts efficiency, and ensures you
                stay ahead in a fast-paced world.
              </p>
              <button className="bg-[#F8FAFC] text-[#060919] px-[24px] py-[10px] rounded-[8px] font-[600] hover:bg-white transition-colors mt-[20px] md:w-fit w-full">
                Contact Us
              </button>
            </div>

            {/* Right Content - Illustration */}
            <div className="lg:w-[45%] w-full">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                  src="/assets/ai/ai-hero.png"
                  draggable='false'
                  alt="AI Document Management Illustration"
                  width={700}
                  height={500}
                  className="object-contain lg:mx-0 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
