import Image from "next/image";
import React from "react";
import {
  RiArticleFill,
  RiQuestionAnswerFill,
  RiQuestionFill,
  RiCustomerService2Fill,
  RiArrowRightSLine,
} from "react-icons/ri";

interface ResourcesSectionProps {
  handleNavigation: (href: string) => void;
  pathname: string;
}

interface ResourceItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
  handleNavigation,
  pathname,
}) => {
  const resources: ResourceItem[] = [
    {
      label: "Blogs",
      href: "/resources/blogs",
      icon: <RiArticleFill className="w-5 h-5 text-[#FC5523]" />,
    },
    {
      label: "FAQs",
      href: "/resources/faqs",
      icon: <RiQuestionAnswerFill className="w-5 h-5 text-[#FC5523]" />,
    },
    {
      label: "Help",
      href: "/resources/help",
      icon: <RiQuestionFill className="w-5 h-5 text-[#FC5523]" />,
    },
    {
      label: "Customer Support",
      href: "/resources/support",
      icon: <RiCustomerService2Fill className="w-5 h-5 text-[#FC5523]" />,
    },
  ];

  return (
    <div className="">
      <ul className="">
        {resources.map((item) => (
          <li key={item.href}>
            <button
              onClick={() => handleNavigation(item.href)}
              className={`w-full flex items-center justify-between h-[56px] group ${
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
  );
};
