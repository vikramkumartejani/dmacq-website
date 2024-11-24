import React from "react";
import GrowYourTeam from "./GrowYourTeam";
import Bottom from "./Bottom";
import MenuLinks from "./MenuLinks";
import DesktopMenuLinks from "./DesktopMenuLinks";

const Footer = () => {
  return (
    <div className="bg-dark-100 w-full text-white px-4 md:px-8">
      <div className="w-full max-w-[1184px] mx-auto">
        <GrowYourTeam />
        <div>
          <DesktopMenuLinks/>
          <MenuLinks />
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Footer;
