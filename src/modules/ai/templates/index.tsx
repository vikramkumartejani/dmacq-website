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
        <Hero />
        <Features />
        <AIPowered />
        <Footer />
      </div>
    </>
  );
};

export default AI;
