"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

interface SocialLink {
  href: string;
  src: string;
  alt: string;
}

interface MenuLink {
  href: string;
  label: string;
}

interface MenuData {
  title: string;
  links: MenuLink[];
}

const socialLinks: SocialLink[] = [
  { href: "/", src: "/assets/linkedin.svg", alt: "LinkedIn" },
  { href: "/", src: "/assets/instagram.svg", alt: "Instagram" },
  { href: "/", src: "/assets/facebook.svg", alt: "Facebook" },
  { href: "/", src: "/assets/twitter.svg", alt: "Twitter" },
];

const socialLinks1: SocialLink[] = [
  { href: "/", src: "/assets/dmacq/linkedin.svg", alt: "LinkedIn" },
  { href: "/", src: "/assets/dmacq/instagram.svg", alt: "Instagram" },
  { href: "/", src: "/assets/dmacq/facebook.svg", alt: "Facebook" },
  { href: "/", src: "/assets/dmacq/twitter.svg", alt: "Twitter" },
];

const menuData: MenuData[] = [
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

type ColorMapping = Record<string, string>;

const colorMapping: ColorMapping = {
  "/": "text-[#FC5523]",
  "/solution": "text-[#7ABFA8]",
  "/blog": "text-[#75A3FF]",
  "/product-dms": "text-[#75A3FF]",
  "/ai": "text-[#75A3FF]",
  "/contact-us": "text-[#75A3FF]",
  "/usecase": "text-[#75A3FF]",
};

const MenuLinks: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const pathname = usePathname();

  const titleColor = colorMapping[pathname] || "text-primary-400";

  // Determine which social links to show
  const activeSocialLinks = pathname === "/" ? socialLinks1 : socialLinks;

  const toggleMenu = (index: number) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  return (
    <div className="pb-[48px] md:pb-[64px] lg:hidden flex flex-col gap-[48px] items-start">
      {/* Logo and Address */}
      <div className="w-full">
        <Image
          src="/assets/footer-logo.svg"
          alt="footer-logo"
          width={152}
          height={36}
        />
        <p className="text-white-600 text-[14px] font-normal leading-[22px] pt-5 lg:max-w-[254px]">
          Regd. & Corp. Office: C 208, Neelkanth Business Park, Nathani Road,
          Vidyavihar West, Mumbai, Maharashtra 400086, India.
        </p>
        <div className="mt-9 flex gap-4">
          {activeSocialLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <Image src={link.src} alt={link.alt} width={40} height={40} />
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full">
        {menuData.map((menu, index) => (
          <div key={index} className="mb-3">
            <button
              onClick={() => toggleMenu(index)}
              className={`flex py-1.5 justify-between mb-3 items-center w-full text-lg font-semibold ${titleColor} transition-colors`}
            >
              {menu.title}
              <span
                className={`transform transition-transform duration-300 ${
                  openIndices.includes(index) ? "rotate-180" : ""
                }`}
              >
                <IoIosArrowDown />
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
