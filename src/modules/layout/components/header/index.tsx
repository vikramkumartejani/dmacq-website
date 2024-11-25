"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../../../../components/logo";
import ContactUs from "../../../../components/contact-us";
import MenuItems from "./MenuItems";
import MobileMenu from "./MobileMenu";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  // Set conditional background color
  const bgColor = pathname === "/ai" ? "bg-transparent" : "bg-white";
  const border = pathname === "/ai" ? "border-none" : "border";

  return (
    <div className={`h-[72px] py-[16px] ${bgColor} ${border} w-full border border-gray-light-10 lg:px-8 px-4 fixed z-50`}>
      <div className="w-full max-w-[1184px] mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-[48px]">
          <Logo />
          {/* Desktop Menu */}
          <div className="hidden lg:flex">
            <MenuItems />
          </div>
        </div>
        {/* Mobile Menu Toggle and ContactUs */}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
