import Link from "next/link";

const tabsItems = [
  { name: "Document Managemnt", href: "#", active: true },
  { name: "Workflows", href: "#" },
  { name: "Forms", href: "#" },
  { name: "Digitalization", href: "#" },
  { name: "Product Update", href: "#" },
  { name: "Research Updates", href: "#" },
  { name: "Industry Trends", href: "#" },
];

export default function Tabs() {
  return (
    <nav className="border-b border-gray-200">
      <div className="px-4 md:px-6 lg:px-8">
        <ul className="flex space-x-8 overflow-x-auto">
          {tabsItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`inline-flex whitespace-nowrap px-1 py-[9px] border-b-2 text-sm font-medium ${
                  item.active
                    ? "border-[#2243B6] text-[#2243B6]"
                    : "border-transparent text-[#40566D] hover:text-gray-700 hover:border-gray-300"
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
