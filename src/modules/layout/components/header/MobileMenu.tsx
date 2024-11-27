"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

interface MenuItem {
  label: string;
  href: string;
  icon?: string;
}

interface SubSection {
  title?: string;
  items: MenuItem[];
}

interface Section {
  title: string;
  subsections: SubSection[];
}

const sections: Section[] = [
  {
    title: "Products",
    subsections: [
      {
        items: [
          { label: "DMS+", href: "/products/dms-plus" },
          { label: "FORM+", href: "/products/form-plus" },
          { label: "FLOW+", href: "/products/flow-plus" },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    subsections: [
      {
        title: "By Industry",
        items: [
          { label: "Finance Services", href: "/solutions/finance-services" },
          { label: "Manufacturing", href: "/solutions/manufacturing" },
        ],
      },
      {
        title: "By Department",
        items: [
          { label: "Human Resources", href: "/solutions/human-resources" },
          { label: "Legal & Compliance", href: "/solutions/legal-compliance" },
        ],
      },
      {
        title: "Use cases",
        items: [
          {
            label: "Employee Onboarding",
            href: "/solutions/employee-onboarding",
          },
          { label: "Vendor Onboarding", href: "/solutions/vendor-onboarding" },
        ],
      },
    ],
  },
  {
    title: "Resources",
    subsections: [
      {
        items: [
          { label: "Blogs", href: "/resources/blogs" },
          { label: "FAQs", href: "/resources/faqs" },
          { label: "Help", href: "/resources/help" },
          { label: "Customer Support", href: "/resources/support" },
        ],
      },
    ],
  },
];

export default function MobileMenu(): JSX.Element {
  const router = useRouter();
  const pathname = usePathname();

  // Initialize with only the first section ("Products") open
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(["Products"]));

  const toggleSection = (section: string): void => {
    setOpenSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section); // Close the section if it's already open
      } else {
        newSet.add(section); // Open the section if it's closed
      }
      return newSet;
    });
  };

  const handleNavigation = (href: string): void => {
    router.push(href);
  };

  const renderMenuItem = (item: MenuItem): JSX.Element => (
    <button
      key={item.href}
      onClick={() => handleNavigation(item.href)}
      className={`w-full text-left py-2 text-sm ${
        pathname === item.href
          ? "text-green-600 font-semibold"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {item.label}
    </button>
  );

  const renderSubSection = (
    subsection: SubSection,
    sectionTitle: string
  ): JSX.Element => (
    <div key={subsection.title || sectionTitle} className="">
      {subsection.title && (
        <div className="text-sm font-medium text-red-500 py-2">
          {subsection.title}
        </div>
      )}
      <div className="space-y-1">{subsection.items.map(renderMenuItem)}</div>
    </div>
  );

  const renderSection = (section: Section): JSX.Element => (
    <div className="" key={section.title}>
      <button
        onClick={() => toggleSection(section.title)}
        className="flex justify-between items-center w-full py-4 text-left text-red-500"
        aria-expanded={openSections.has(section.title)}
        aria-controls={`section-${section.title}`}
      >
        <span className="font-medium text-[#40566D] text-[16px] leading-[22px]">{section.title}</span>
        <span className="transform transition-transform duration-200 ease-in-out text-red-500">
          {openSections.has(section.title) ? (
            <Image
              src="/assets/arrow-up.svg"
              alt="arrow"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src="/assets/arrow-down.svg"
              alt="arrow"
              width={24}
              height={24}
            />
          )}
        </span>
      </button>
      {openSections.has(section.title) && (
        <div id={`section-${section.title}`} className="pb-2">
          {section.subsections.map((subsection) =>
            renderSubSection(subsection, section.title)
          )}
        </div>
      )}
    </div>
  );

  return (
    <div className="flex flex-col w-full bg-white">
      {sections.map(renderSection)}
      <div className="flex flex-col mt-8">
        <button className="w-full bg-[#FC5523] text-white h-[40px] rounded-lg text-[16px] font-semibold leading-[21.79px]">
          Get Started for Free
        </button>
        <button className="mt-4 w-full border border-[#FC552352] text-[#FC5523] text-[16px] font-semibold leading-[21.79px] h-[40px] rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
}
