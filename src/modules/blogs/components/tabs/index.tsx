'use client'
import { useState } from "react";
import Link from "next/link";

type TabItem = {
  name: string;
  href: string;
  active?: boolean;
};

const initialTabsItems: TabItem[] = [
  { name: "Document Management", href: "#", active: true },  
  { name: "Workflows", href: "#" },
  { name: "Forms", href: "#" },
  { name: "Digitalization", href: "#" },
  { name: "Product Update", href: "#" },
  { name: "Research Updates", href: "#" },
  { name: "Industry Trends", href: "#" },
];

export default function Tabs(): JSX.Element {
  const [tabsItems, setTabsItems] = useState<TabItem[]>(initialTabsItems);

  const handleTabClick = (clickedTab: string) => {
    setTabsItems((prevTabs) =>
      prevTabs.map((tab) =>
        tab.name === clickedTab
          ? { ...tab, active: true }
          : { ...tab, active: false }
      )
    );
  };

  return (
    <nav className="border-b border-[#6C849D2E]">
      <div>
        <ul className="flex overflow-x-auto">
          {tabsItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => handleTabClick(item.name)}
                className={`font-bold h-[42px] flex items-center px-4 whitespace-nowrap border-b-2 text-sm ${
                  item.active
                    ? "border-[#2243B6] text-[#2243B6]"
                    : "border-transparent text-[#40566D] font-medium"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
