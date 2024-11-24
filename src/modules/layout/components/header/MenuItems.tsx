"use client";  

import React from "react";
import { useRouter, usePathname } from "next/navigation";

type MenuItem = {
  label: string;
  href: string;
};

const MenuItems = () => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Solutions", href: "/solution" },
    { label: "Resources", href: "/resources" },
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <div className="flex items-center gap-4">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <div key={item.href} className="px-[11px] h-[40px] flex items-center">
            <button
              onClick={() => handleNavigation(item.href)}
              className={`${
                isActive
                  ? "text-green-600 font-black"
                  : "text-grey-900 font-normal"
              } text-base leading-[21.79px]`}
            >
              {item.label}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
