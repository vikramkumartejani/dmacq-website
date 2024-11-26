"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa"; // Importing the down arrow icon
import ProductMenuOpen from "./ProductMenuOpen";
import ResourcesMenuOpen from "./ResourcesMenuOpen";
import SolutionsMenuOpen from "./SolutionsMenuOpen";
import Link from "next/link";
import Image from "next/image";

type MenuItem = {
  label: string;
  href: string;
};

type Product = {
  imgSrc: string;
  description: string;
  href: string;
  width: number;
  height: number;
};

const products: Product[] = [
  {
    imgSrc: "/assets/dmacq-dms-logo.svg",
    description:
      "Effortlessly organize, store, and retrieve your documents with our secure and efficient DMS.",
    href: "/product/dms",
    width: 102,
    height: 32,
  },
  {
    imgSrc: "/assets/dmacq-form-logo.svg",
    description:
      "Effortlessly organize, store, and retrieve your documents with our secure and efficient DMS.",
    href: "/product/forms",
    width: 123,
    height: 32,
  },
  {
    imgSrc: "/assets/dmacq-flow.svg",
    width: 115,
    height: 32,
    description:
      "Effortlessly organize, store, and retrieve your documents with our secure and efficient DMS.",
    href: "/product/flow",
  },
];

const routeColors: {
  [key: string]: { active: string; inactive: string; hover: string };
} = {
  "/": {
    active: "text-[#F2400A]",
    inactive: "text-gray-900",
    hover: "hover:text-[#F2400A]",
  },
  "/product-dms": {
    active: "text-[#2243B6]",
    inactive: "text-gray-900",
    hover: "hover:text-[#2243B6]",
  },
  "/solution": {
    active: "text-green-600",
    inactive: "text-gray-900",
    hover: "hover:text-green-600",
  },
  "/ai": {
    active: "text-[#75A3FF]",
    inactive: "text-white",
    hover: "hover:text-[#75A3FF]",
  },
  "/single-blog": {
    active: "text-[#2243B6]",
    inactive: "text-gray-900",
    hover: "hover:text-[#75A3FF]",
  },
  "/blog": {
    active: "text-[#2243B6]",
    inactive: "text-gray-900",
    hover: "hover:text-[#75A3FF]",
  },
  "/contact-us": {
    active: "text-[#2243B6]",
    inactive: "text-gray-900",
    hover: "hover:text-[#2243B6]",
  },
  "/usecase": {
    active: "text-[#2243B6]",
    inactive: "text-gray-900",
    hover: "hover:text-[#2243B6]",
  },
};

const MenuItems: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);

  const resourcesMenuRef = useRef<HTMLDivElement>(null);
  const productMenuRef = useRef<HTMLDivElement>(null);
  const solutionsMenuRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [{ label: "Home", href: "/" }];

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      resourcesMenuRef.current &&
      !resourcesMenuRef.current.contains(event.target as Node)
    ) {
      setIsResourcesMenuOpen(false);
    }
    if (
      productMenuRef.current &&
      !productMenuRef.current.contains(event.target as Node)
    ) {
      setIsProductMenuOpen(false);
    }
    if (
      solutionsMenuRef.current &&
      !solutionsMenuRef.current.contains(event.target as Node)
    ) {
      setIsSolutionsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Get the colors for the current route
  const currentColors = routeColors[pathname] || {
    active: "text-gray-900",
    inactive: "text-gray-900",
    hover: "hover:text-[#F2400A]",
  };

  return (
    <div className="flex items-center gap-4">
      {menuItems.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(item.href + "/");

        return (
          <div key={item.href} className="px-[11px] h-[40px] flex items-center">
            <button
              onClick={() => handleNavigation(item.href)}
              className={`text-[16px] leading-[21.79px] ${
                isActive
                  ? `${currentColors.active} font-semibold`
                  : `${currentColors.inactive} font-medium ${currentColors.hover}`
              }`}
            >
              {item.label}
            </button>
          </div>
        );
      })}
      <div className="relative px-[11px] h-[40px] flex items-center">
        <Link
          href="/ai"
          className={`text-[16px] leading-[21.79px] flex items-center font-medium gap-2 ${
            pathname === "/ai" || pathname.startsWith("/ai")
              ? `${currentColors.active} font-semibold`
              : `${currentColors.inactive} font-medium ${currentColors.hover}`
          }`}
        >
          <Image src="/assets/star.svg" alt="star" width={24} height={24} />
          dMACQ AI
        </Link>
      </div>

      {/* Product Menu */}
      <div
        className="relative px-[11px] h-[40px] flex items-center"
        ref={productMenuRef}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsProductMenuOpen(!isProductMenuOpen);
          }}
          className={`text-base leading-[21.79px] flex items-center gap-2 ${
            pathname.startsWith("/product") || isProductMenuOpen
              ? `${currentColors.active} font-semibold`
              : `${currentColors.inactive} font-medium ${currentColors.hover}`
          }`}
        >
          Product
          <FaChevronDown
            className={`transition-transform duration-200 text-[16px] mt-1 ${
              isProductMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isProductMenuOpen && <ProductMenuOpen products={products} />}
      </div>

      {/* Solutions Menu */}
      <div
        className="relative px-[11px] h-[40px] flex items-center"
        ref={solutionsMenuRef}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsSolutionsMenuOpen(!isSolutionsMenuOpen);
          }}
          className={`text-base leading-[21.79px] flex items-center gap-2 ${
            pathname.startsWith("/solution") || isSolutionsMenuOpen
              ? `${currentColors.active} font-semibold`
              : `${currentColors.inactive} font-medium ${currentColors.hover}`
          }`}
        >
          Solutions
          <FaChevronDown
            className={`transition-transform duration-200 text-[16px] mt-1 ${
              isSolutionsMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isSolutionsMenuOpen && (
          <SolutionsMenuOpen closeMenu={() => setIsSolutionsMenuOpen(false)} />
        )}
      </div>

      {/* Resources Menu */}
      <div
        className="relative px-[11px] h-[40px] flex items-center"
        ref={resourcesMenuRef}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsResourcesMenuOpen(!isResourcesMenuOpen);
          }}
          className={`text-base leading-[21.79px] flex items-center gap-2 ${
            pathname.startsWith("/resources") || isResourcesMenuOpen
              ? `${currentColors.active} font-semibold`
              : `${currentColors.inactive} font-medium ${currentColors.hover}`
          }`}
        >
          Resources
          <FaChevronDown
            className={`transition-transform duration-200 text-[16px] mt-1 ${
              isResourcesMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isResourcesMenuOpen && <ResourcesMenuOpen />}
      </div>
    </div>
  );
};

export default MenuItems;
