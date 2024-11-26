"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import ProductMenuOpen from "./ProductMenuOpen";
import ResourcesMenuOpen from "./ResourcesMenuOpen";

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

  const menuItems: MenuItem[] = [
    { label: "Home", href: "/" },
    { label: "dMACQ AI", href: "/dmacq-ai" },
    { label: "Solutions", href: "/solution" },
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
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
        onMouseEnter={() => setIsResourcesMenuOpen(true)}
        onMouseLeave={() => setIsResourcesMenuOpen(false)}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsResourcesMenuOpen(!isResourcesMenuOpen);
          }}
          className={`text-base leading-[21.79px] ${
            pathname.startsWith("/resources")
              ? "text-[#F2400A] font-black"
              : "text-gray-900 font-normal hover:text-[#F2400A]"
          }`}
        >
          Resources
        </button>
        {isResourcesMenuOpen && <ResourcesMenuOpen />}
      </div>

      <div
        className="relative px-[11px] h-[40px] flex items-center"
        onMouseEnter={() => setIsProductMenuOpen(true)}
        onMouseLeave={() => setIsProductMenuOpen(false)}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsProductMenuOpen(!isProductMenuOpen);
          }}
          className={`text-base leading-[21.79px] ${
            pathname.startsWith("/product")
              ? "text-[#F2400A] font-black"
              : "text-gray-900 font-normal hover:text-[#F2400A]"
          }`}
        >
          Product
        </button>
        {isProductMenuOpen && <ProductMenuOpen products={products} />}
      </div>
    </div>
  );
};

export default MenuItems;
