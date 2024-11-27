"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "../../../../components/logo";
import ContactUs from "../../../../components/contact-us";
import MenuItems from "./MenuItems";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [isLgScreen, setIsLgScreen] = useState<boolean>(false); // State for screen size
  const pathname = usePathname();

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const bgColor = pathname === "/ai" ? "bg-[#050816]" : "bg-white";
  const border = pathname === "/ai" ? "border-b" : "border";

  useEffect(() => {
    setIsClient(true);

    // Handle screen resizing for lg breakpoint
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024); // Set to true for lg and above
    };

    // Handle scroll event
    const handleScroll = (): void => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false); // Hide header on scroll down
      } else {
        setShowHeader(true); // Show header on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initial check for screen size
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className={`h-[72px] py-[16px] z-50 ${bgColor} ${border} w-full border-b border-gray-light-10 lg:px-8 px-4 transition-all duration-500 ${
        isLgScreen
          ? showHeader
            ? "fixed top-0 opacity-100 transform-none"
            : "fixed top-[-72px] opacity-0 transform translate-y-[-100%]"
          : "fixed top-0 opacity-100 transform-none"
      }`}
      style={{
        zIndex: "100px",
      }}
    >
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
              <Image src="/assets/close-menu.svg" alt="close" width={40} height={40} />
            ) : (
              <Image src="/assets/menu.svg" alt="menu" width={40} height={40} />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed overflow-y-auto top-[72px] left-0 w-full bg-white h-[100vh] shadow-md lg:hidden z-50 px-4 pb-10">
          <div className="flex flex-col items-center ">
            <MobileMenu />
            {/* <ContactUs /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
