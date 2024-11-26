"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../../../../components/logo";
import ContactUs from "../../../../components/contact-us";
import MenuItems from "./MenuItems";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();  

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const bgColor = pathname === "/ai" ? "bg-transparent" : "bg-white";
  const border = pathname === "/ai" ? "border-none" : "border";

  return (
    <div className={`h-[72px] py-[16px] ${bgColor} ${border} w-full border border-gray-light-10 lg:px-8 px-4 fixed z-50`} style={{zIndex:"100px"}}>
      <div className="w-full max-w-[1184px] mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-[48px]">
          <Logo />

          <div className="hidden lg:flex">
            <MenuItems />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="lg:block hidden">
            <ContactUs />
          </div>
          <button
            className="lg:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <Image src='/assets/menu.svg' alt="menu" width={40} height={40} />
            ) : (
              <Image src='/assets/menu.svg' alt="menu" width={40} height={40} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed top-[72px] left-0 w-full bg-white h-[100vh] shadow-md lg:hidden z-50 px-5">
          <div className="flex flex-col items-center space-y-6 py-8">
            <MobileMenu />
            <ContactUs />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
