import { BsDiamondFill } from "react-icons/bs";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-white pb-[100px]">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="lg:w-[55%] flex flex-col gap-[20px]">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/ai/stars.png"
                alt="hero img"
                width={40}
                height={40}
              />
              <span className="text-[32px] text-[#F8FAFC] font-[700]">
                DMS+ AI
              </span>
            </div>
          </div>
          <h1 className="text-[30px] md:text-[40px] lg:text-[48px] font-[900] lg:leading-[56px]">
            <span className="text-gray-400">Revolutionize</span> Document
            <br />
            Management <span className="text-gray-400">with</span> AI
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl">
            Unlock the power of AI to streamline, organize, and secure your
            documents like never before. Boosts efficiency, and ensures you stay
            ahead in a fast-paced world.
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors mt-[20px] w-fit">
            Contact Us
          </button>
        </div>

        {/* Right Content - Illustration */}
        <div className="lg:w-[45%] w-full">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/assets/ai/ai-hero.png"
              alt="AI Document Management Illustration"
              width={700}
              height={500}
              className="object-contain lg:mx-0 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
