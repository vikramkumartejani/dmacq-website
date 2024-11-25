import Footer from "@/modules/layout/components/footer";
import Header from "@/modules/layout/components/header";
import React from "react";
import Hero from "../components/Hero";
import DocumentManagement from "../components/DocumentManagement";
import SuccessStories from "@/modules/use-case/components/SuccessStories";
import FAQ from "../components/FAQ";
import StarterPlan from "../components/StarterPlan";
import VersatileApplications from "../components/VersatileApplications";
import Testimonials from "@/modules/home/components/Testimonials";
import InnovativeFeatures from "../components/InnovativeFeatures";

const ProductDMS = () => {
  return (
    <div>
      <Header />
      <Hero />
      <InnovativeFeatures/>
      <DocumentManagement />
      <VersatileApplications />
      <SuccessStories
        customTitle="A Year of Impactful Change with DMS+"
        bgColor="#0C1927"
        mainTitleColor="#4D7FFF"
        textColor="#FFFFFFE5"
      />
      <Testimonials
        titleColor="#305EFF"
        headingColor="#243547"
        bgColor="#D8E4FD"
        titleText="Testimonials"
        headingText="Hear What Our Clients Have to Say"
      />
      <StarterPlan />
      <FAQ />
      <Footer />
    </div>
  );
};

export default ProductDMS;
