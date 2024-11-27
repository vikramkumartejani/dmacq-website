"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { ProductsSection } from "./ProductsSection";
import { SolutionsSection } from "./SolutionsSection";
import { ResourcesSection } from "./ResourcesSection";
import Link from "next/link";

export default function MobileMenu(): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();

  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(["Products"])
  );

  const toggleSection = (section: string): void => {
    setOpenSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  const handleNavigation = (href: string): void => {
    router.push(href);
  };

  const renderSectionToggle = (title: string) => (
    <button
      onClick={() => toggleSection(title)}
      className="flex justify-between items-center w-full h-[56px] text-left"
      aria-expanded={openSections.has(title)}
      aria-controls={`section-${title}`}
    >
      <span className="font-medium text-[#40566D] text-[16px] leading-[22px]">
        {title}
      </span>
      <span className="transform transition-transform duration-200 ease-in-out text-red-500">
        <Image
          src={
            openSections.has(title)
              ? "/assets/arrow-up.svg"
              : "/assets/arrow-down.svg"
          }
          alt={openSections.has(title) ? "Collapse section" : "Expand section"}
          width={24}
          height={24}
        />
      </span>
    </button>
  );

  return (
    <nav
      className="flex flex-col w-full bg-white pb-16 pt-2"
      aria-label="Mobile navigation menu"
    >
      <div>
        {renderSectionToggle("Products")}
        {openSections.has("Products") && (
          <div id="section-Products" className="">
            <ProductsSection
              handleNavigation={handleNavigation}
              pathname={pathname}
            />
          </div>
        )}
      </div>

      <div className="h-[56px] flex items-center">
        <Link
          href="/ai"
          className="text-[#40566D] text-[16px] font-medium leading-[22px] flex gap-1.5"
        >
          <Image src="/assets/star.svg" alt="star" width={24} height={24} />
          dMACQ AI
        </Link>
      </div>

      <div className="h-[56px] flex items-center">
        <Link
          href="/features"
          className="text-[#40566D] text-[16px] font-medium leading-[22px]"
        >
          Features
        </Link>
      </div>

      <div>
        {renderSectionToggle("Solutions")}
        {openSections.has("Solutions") && (
          <div id="section-Solutions" className="">
            <SolutionsSection
              handleNavigation={handleNavigation}
              pathname={pathname}
            />
          </div>
        )}
      </div>

      <div>
        {renderSectionToggle("Resources")}
        {openSections.has("Resources") && (
          <div id="section-Resources" className="">
            <ResourcesSection
              handleNavigation={handleNavigation}
              pathname={pathname}
            />
          </div>
        )}
      </div>

      <div className="h-[56px] flex items-center">
        <Link
          href="/pricing"
          className="text-[#40566D] text-[16px] font-medium leading-[22px]"
        >
          Pricing
        </Link>
      </div>

      <div className="flex flex-col mt-8">
        <button className="w-full bg-[#FC5523] text-white h-[40px] rounded-lg text-[16px] font-semibold leading-[21.79px]">
          Get Started for Free
        </button>
        <button className="mt-4 w-full border border-[#FC552352] text-[#FC5523] text-[16px] font-semibold leading-[21.79px] h-[40px] rounded-lg">
          Login
        </button>
      </div>
    </nav>
  );
}
