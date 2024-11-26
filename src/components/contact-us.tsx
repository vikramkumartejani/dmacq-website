"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const ContactUs = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isBlogPage = pathname === "/blog" || pathname === "/single-blog" || pathname === "/contact-us" || pathname === "/usecase" || pathname === "/product-dms";
  const isHomePage = pathname === "/";

  const bgColor = isBlogPage ? "bg-[#2243B6]" : isHomePage ? "bg-[#FC5523]" : "bg-green-600" ;
  const textColor = "text-white";

  

  return (
    <div className="w-full">
      <button
        className={`w-full md:w-[117px] h-[40px] ${bgColor} ${textColor} rounded-lg text-base font-medium md:font-semibold`}
      >
        Contact Us
      </button>
    </div>
  );
};

export default ContactUs;