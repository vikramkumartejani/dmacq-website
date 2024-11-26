'use client'
import React from "react";
import { usePathname } from "next/navigation";
import GrowYourTeam from "./GrowYourTeam";
import Bottom from "./Bottom";
import MenuLinks from "./MenuLinks";
import DesktopMenuLinks from "./DesktopMenuLinks";
import SubscribeOurBlogs from "./SubscribeOurBlogs";
import ContactUs from "./ContactUs";
import TransformYourBusiness from "./TransformYourBusiness";

const Footer = () => {
  const pathname = usePathname();

  const bgColor = pathname === "/ai" 
  ? "bg-[#050816]" 
  : pathname === "/" 
  ? "bg-[#240A02]" 
  : "bg-dark-100";

  

  const isSolutionPage = pathname === "/solution";
  const isContactUsPage = pathname === "/contact-us" || pathname === "/ai" || pathname === "/usecase";
  const isHomePage = pathname === "/";
  const isBlogPage = pathname === "/blog" || pathname === "/single-blog";

  return (
    <div className={`${bgColor} w-full text-white px-4 md:px-8`}>
      <div className="w-full max-w-[1184px] mx-auto">
        <div className="md:py-[120px] pt-[64px] pb-[48px]">
          {isSolutionPage && <GrowYourTeam />}
          {isContactUsPage && <ContactUs />}
          {isBlogPage && <SubscribeOurBlogs />}
          {isHomePage && <TransformYourBusiness />}
        </div>
        <div>
          <DesktopMenuLinks />
          <MenuLinks />
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Footer;
