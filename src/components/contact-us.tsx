"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const ContactUs = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isBlogPage = pathname === "/blog";

  const bgColor = isBlogPage ? "bg-[#2243B6]" : "bg-green-600";
  const textColor = isBlogPage ? "text-[#FFFFFF]" : "text-white";

  const handleNavigation = () => {
    router.push("/blog");
  };

  return (
    <div className="w-full">
      <button
        onClick={handleNavigation}
        className={`w-full md:w-[117px] h-[40px] ${bgColor} ${textColor} rounded-lg text-base font-medium md:font-semibold`}
      >
        Contact Us
      </button>
    </div>
  );
};

export default ContactUs;
