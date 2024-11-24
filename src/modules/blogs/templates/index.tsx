import React from "react";
import Articles from "../components/articles";
import Tabs from "../components/tabs";
import BlogSlider from "../components/blog-slider";
import Header from "@/modules/layout/components/header";
import Footer from "@/modules/layout/components/footer";

const Blogs = () => {
  return (
    <>
      <Header />
      <div className="pt-[72px]">
        <div className="bg-[#F1F5FA] pt-[64px]">
          <div className="lg:px-8 px-4">
            <div className="max-w-[1184px] mx-auto">
              <header className="pb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-secondary-100 tracking-[-3%]">
                  Dmacq® Blogs
                </h1>
                <p className="mt-3 text-lg leading-[24px] tracking-[-0.005em] text-gray-900">
                  Explore expert insights, industry trends, and success stories
                  to drive your business forward with Dmacq's cutting-edge
                  solutions.
                </p>
              </header>

              <Tabs />

              <main className="px-4 py-8 md:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                  <BlogSlider />
                </div>
              </main>
            </div>
          </div>
          <Articles />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blogs;
