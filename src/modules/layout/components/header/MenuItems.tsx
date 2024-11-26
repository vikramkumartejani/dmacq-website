"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa"; // Importing the down arrow icon
import ProductMenuOpen from "./ProductMenuOpen";
import ResourcesMenuOpen from "./ResourcesMenuOpen";
import SolutionsMenuOpen from "./SolutionsMenuOpen";

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

const MenuItems = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const [isResourcesMenuOpen, setIsResourcesMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);

  const resourcesMenuRef = useRef<HTMLDivElement>(null);
  const productMenuRef = useRef<HTMLDivElement>(null);
  const solutionsMenuRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    { label: "Home", href: "/" },
    { label: "dMACQ AI", href: "/dmacq-ai" },
  ];

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

  return (
    <div className="flex items-center gap-4">
      {menuItems.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(item.href + "/");

        return (
          <div key={item.href} className="px-[11px] h-[40px] flex items-center">
            <button
              onClick={() => handleNavigation(item.href)}
              className={`text-base leading-[21.79px] ${
                isActive
                  ? "text-green-600 font-black"
                  : "text-gray-900 font-normal hover:text-green-600"
              }`}
            >
              {item.label}
            </button>
          </div>
        );
      })}

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
            pathname.startsWith("/product")
              ? "text-[#F2400A] font-black"
              : "text-gray-900 font-normal hover:text-[#F2400A]"
          }`}
        >
          Product
          <FaChevronDown
            className={`transition-transform duration-200   mt-1 ${
              isProductMenuOpen ? "rotate-180 " : " "
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
            pathname.startsWith("/solution")
              ? "text-[#F2400A] font-black"
              : "text-gray-900 font-normal hover:text-[#F2400A]"
          }`}
        >
          Solutions
          <FaChevronDown
            className={`transition-transform duration-200   mt-1${
              isSolutionsMenuOpen ? "rotate-180 " : ""
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
            pathname.startsWith("/resources")
              ? "text-[#F2400A] font-black"
              : "text-gray-900 font-normal hover:text-[#F2400A]"
          }`}
        >
          Resources
          <FaChevronDown
            className={`transition-transform duration-200   mt-1 ${
              isResourcesMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {isResourcesMenuOpen && <ResourcesMenuOpen />}
      </div>

      {/* Product Menu */}
    </div>
  );
};

export default MenuItems;
