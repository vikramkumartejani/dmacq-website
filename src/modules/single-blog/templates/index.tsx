import React from "react";
import BlogHeader from "../components/BlogHeader";
import Header from "@/modules/layout/components/header";
import Footer from "@/modules/layout/components/footer";
import BlogDetails from "../components/BlogDetails";
import RelatedBlogs from "../components/RelatedBlogs";

const SingleBlog = () => {
  return (
    <div>
      <Header />
      <BlogHeader />
      <BlogDetails/>
      <RelatedBlogs/>
      <Footer />
    </div>
  );
};

export default SingleBlog;
