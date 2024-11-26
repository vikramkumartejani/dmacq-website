import Link from "next/link";
import Image from "next/image";

type ResourceMenuItem = {
  icon: string;
  label: string;
  href: string;
};

const resources: ResourceMenuItem[] = [
  {
    icon: "/assets/blogs-icon.svg",
    label: "Blogs",
    href: "/resources/blogs",
  },
  {
    icon: "/assets/help-icon.svg",
    label: "FAQ",
    href: "/resources/faq",
  },
  {
    icon: "/assets/help-icon.svg",
    label: "Help",
    href: "/resources/help",
  },
  {
    icon: "/assets/customer-support-icon.svg",
    label: "Customer Support",
    href: "/resources/support",
  },
];

export default function ResourcesMenuOpen() {
  return (
    <div
      className="absolute left-0 top-[56px] px-6 py-4 z-50 w-[280px] bg-white rounded-b-lg"
      style={{ boxShadow: "0px 10px 13.3px 0px #3C3C3C1F" }}
    >
      <div className="flex flex-col">
        {resources.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-4 py-4"
          >
            <Image src={item.icon} alt="logo" width={24} height={24} />
            <span className="text-[16px] leading-[21.79px] font-semibold text-[#2F4256]">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
