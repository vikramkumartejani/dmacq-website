import Image from "next/image";
import React from "react";
import {
  RiBankFill,
  RiAnchorFill,
  RiTeamFill,
  RiScales3Fill,
  RiFileList3Fill,
  RiBuilding2Fill,
} from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

interface SolutionsSectionProps {
  handleNavigation: (href: string) => void;
  pathname: string;
}

interface SolutionItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface SolutionSection {
  title: string;
  items: SolutionItem[];
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  handleNavigation,
  pathname,
}) => {
  const solutions: SolutionSection[] = [
    {
      title: "By Industry",
      items: [
        {
          label: "Finance Services",
          href: "/solutions/finance-services",
          icon: <RiBankFill className="w-5 h-5 text-[#FC5523]" />,
        },
        {
          label: "Manufacturing",
          href: "/solutions/manufacturing",
          icon: <RiAnchorFill className="w-5 h-5 text-[#FC5523]" />,
        },
      ],
    },
    {
      title: "By Department",
      items: [
        {
          label: "Human Resources",
          href: "/solutions/human-resources",
          icon: <RiTeamFill className="w-5 h-5 text-[#FC5523]" />,
        },
        {
          label: "Legal & Compliance",
          href: "/solutions/legal-compliance",
          icon: <RiScales3Fill className="w-5 h-5 text-[#FC5523]" />,
        },
      ],
    },
    {
      title: "Usecases",
      items: [
        {
          label: "Employee Onboarding",
          href: "/solutions/employee-onboarding",
          icon: <RiFileList3Fill className="w-5 h-5 text-[#FC5523]" />,
        },
        {
          label: "Vendor Onboarding",
          href: "/solutions/vendor-onboarding",
          icon: <RiBuilding2Fill className="w-5 h-5 text-[#FC5523]" />,
        },
      ],
    },
  ];

  return (
    <div className="">
      {solutions.map((section) => (
        <div key={section.title} className="">
          <h3 className="text-[12px] font-medium leading-[24px] text-[#6C849D]">
            {section.title}
          </h3>
          <ul className="">
            {section.items.map((item) => (
              <li key={item.href} className="h-[56px] flex items-center">
                <button
                  onClick={() => handleNavigation(item.href)}
                  className={`w-full flex items-center justify-between group ${
                    pathname === item.href
                      ? "text-[#FC5523] font-medium"
                      : "text-[#40566D] hover:text-[#FC5523]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-[16px] text-[#40566D] font-medium leading-[22px]">
                      {item.label}
                    </span>
                  </div>
                  <Image
                    src="/assets/arrow-up.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                    className="rotate-90"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
