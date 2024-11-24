"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const socialLinks = [
  { href: "/", src: "/assets/linkedin.svg", alt: "LinkedIn" },
  { href: "/", src: "/assets/instagram.svg", alt: "Instagram" },
  { href: "/", src: "/assets/facebook.svg", alt: "Facebook" },
  { href: "/", src: "/assets/twitter.svg", alt: "Twitter" },
];

const menuData = [
  {
    title: "Products",
    links: [
      { href: "/", label: "DMS+" },
      { href: "/", label: "FORM+" },
      { href: "/", label: "FLOW+" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/", label: "Help" },
      { href: "/", label: "FAQs" },
      { href: "/", label: "Blog" },
      { href: "/", label: "Site Map" },
      { href: "/", label: "Customer Support" },
    ],
  },
  {
    title: "Policies",
    links: [
      { href: "/", label: "Terms of Service" },
      { href: "/", label: "Privacy Policy" },
      { href: "/", label: "Google App Privacy Policy" },
      { href: "/", label: "iOS App Privacy Policy" },
    ],
  },
];

const MenuLinks = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleMenu = (index: number) => {
    setOpenIndices(
      (prevIndices) =>
        prevIndices.includes(index)
          ? prevIndices.filter((i) => i !== index)  
          : [...prevIndices, index] 
    );
  };

  return (
    <div className="pb-[48px] md:pb-[64px] lg:hidden flex flex-col gap-[48px] items-start">
      {/* Logo and Address */}
      <div className=" w-full">
        <Image
          src="/assets/footer-logo.svg"
          alt="footer-logo"
          width={152}
          height={36}
          className=""
        />
        <p className="text-white-600 text-[14px] font-normal leading-[22px] pt-5 lg:max-w-[254px]">
          Regd. & Corp. Office: C 208, Neelkanth Business Park, Nathani Road,
          Vidyavihar West, Mumbai, Maharashtra 400086, India.
        </p>
        <div className="mt-9 flex gap-4">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <Image src={link.src} alt={link.alt} width={24} height={24} />
            </Link>
          ))}
        </div>
      </div>

      {/* Accordion Menu */}
      <div className="w-full">
        {menuData.map((menu, index) => (
          <div key={index} className="mb-3">
            <button
              onClick={() => toggleMenu(index)}
              className="flex py-1.5 justify-between mb-3 items-center w-full text-lg font-semibold text-primary-400 hover:text-primary-400 transition-colors"
            >
              {menu.title}
              <span
                className={`transform transition-transform duration-300 ${
                  openIndices.includes(index) ? "rotate-180" : ""
                }`}
              >
                <Image
                  src="/assets/icons/down.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </span>
            </button>
            {openIndices.includes(index) && (
              <div className="mb-3">
                {menu.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="block py-2 mb-3 text-white-700 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuLinks;
