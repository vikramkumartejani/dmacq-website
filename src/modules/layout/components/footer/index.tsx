'use client'
import React from "react";
import { usePathname } from "next/navigation";
import GrowYourTeam from "./GrowYourTeam";
import Bottom from "./Bottom";
import MenuLinks from "./MenuLinks";
import DesktopMenuLinks from "./DesktopMenuLinks";
import SubscribeOurBlogs from "./SubscribeOurBlogs";

const Footer = () => {
  const pathname = usePathname();  

  const isSolutionPage = pathname === "/solution";  
  const isBlogPage = pathname === "/blog" || pathname === "/single-blog";

  return (
    <div className="bg-dark-100 w-full text-white px-4 md:px-8">
      <div className="w-full max-w-[1184px] mx-auto">
        <div className="md:py-[120px] pt-[64px] pb-[48px]">
          {isSolutionPage && <GrowYourTeam />}
          {isBlogPage && <SubscribeOurBlogs />}
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
