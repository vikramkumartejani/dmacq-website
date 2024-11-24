"use client";
import { useState } from "react";
import { ArticleCard } from "./ArticaleCard";

const articles = [
  {
    title:
      "Robotic Process Automation (RPA) for GST Input Credit Claims: dMACQ Introduces GST...",
    author: "Kunal Deshpande",
    date: "Jun 27, 2024",
    readTime: "8 min",
    image: "/assets/blogs/article1.jpg",
    categories: ["Product Update", "WorkFlows"],
    href: "#",
  },
  {
    title: "Our Experiences with VAPT at dMACQ Software",
    author: "Kunal Deshpande",
    date: "Jun 27, 2024",
    readTime: "8 min",
    image: "/assets/blogs/article2.png",
    categories: ["Product Update", "WorkFlows"],
    href: "#",
  },
  {
    title:
      "Automation is reshaping industries by reducing manual tasks & boosting productivity",
    author: "Kunal Deshpande",
    date: "Jun 27, 2024",
    readTime: "8 min",
    image: "/assets/blogs/article3.png",
    categories: ["Product Update", "WorkFlows"],
    href: "#",
  },
  {
    title: "Digital Transformation: Preparing Your Business for the Future",
    author: "Kunal Deshpande",
    date: "Jun 27, 2024",
    readTime: "8 min",
    image: "/assets/blogs/article4.png",
    categories: ["Product Update", "WorkFlows"],
    href: "#",
  },
  {
    title:
      "Automation is reshaping industries by reducing manual tasks & boosting productivity",
    author: "Kunal Deshpande",
    date: "Jun 27, 2024",
    readTime: "8 min",
    image: "/assets/blogs/article5.png",
    categories: ["Product Update", "WorkFlows"],
    href: "#",
  },
  {
    title:
      "The Power of AI/ML in Business Process Automation and Role of Document Management",
    author: "Kunal Deshpande",
    date: "Jun 27, 2024",
    readTime: "8 min",
    image: "/assets/blogs/article6.png",
    categories: ["Product Update", "WorkFlows"],
    href: "#",
  },
];

export default function Articles() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <div className="min-h-screen bg-[#F1F5FA] py-12 px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
        <div className="flex items-center justify-center gap-1">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`rounded-lg px-3 py-2 text-sm font-medium ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
