import React from "react";
import Articles from "../components/articles";
import Tabs from "../components/tabs";
import BlogSlider from "../components/blog-slider";

const Blogs = () => {
  return (
    <div className="pt-[72px]">
      <div className="bg-[#F1F5FA] px-4">
        <div className="max-w-[1280px] mx-auto">
          {/* Header Section */}
          <header className="px-4 py-8 md:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Dmacq® Blogs
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Explore expert insights, industry trends, and success stories to
              drive your business forward with Dmacq's cutting-edge solutions.
            </p>
          </header>

          {/* Tabs */}
          <Tabs />

          {/* Main Content */}
          <main className="px-4 py-8 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <BlogSlider />
            </div>
          </main>
        </div>
      </div>
      <Articles />
    </div>
  );
};

export default Blogs;
