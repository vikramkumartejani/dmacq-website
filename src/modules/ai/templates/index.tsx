import React from "react";
import Header from "@/modules/layout/components/header";
import Footer from "@/modules/layout/components/footer";
import Hero from "../components/hero";
import Features from "../components/features";
import AIPowered from "../components/ai-powered";

const AI = () => {
  return (
    <>
      <Header />
      <div className="pt-[72px] bg-[#060918]">
        <div className="pt-[64px]">
          <div className="lg:px-8 px-4">
            <div className="max-w-[1184px] mx-auto">
              <Hero />
              <Features />
              <AIPowered />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AI;
