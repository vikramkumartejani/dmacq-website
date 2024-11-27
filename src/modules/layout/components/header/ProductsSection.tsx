import React from "react";
import Image from "next/image";

interface ProductsSectionProps {
  handleNavigation: (href: string) => void;
  pathname: string;
}

interface Product {
  image: string;
  href: string;
  alt: string;
  width: number;
  height: number;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  handleNavigation,
  pathname,
}) => {
  const products: Product[] = [
    {
      image: "/assets/dms-mobile.svg",
      href: "/products/dms-plus",
      alt: "DMS Plus",
      width: 77.85,
      height: 24,
    },
    {
      image: "/assets/form-mobile.svg",
      href: "/products/form-plus",
      alt: "Form Plus",
      width: 88.68,
      height: 24,
    },
    {
      image: "/assets/flow-mobile.svg",
      href: "/products/flow-plus",
      alt: "Flow Plus",
      width: 88,
      height: 24,
    },
  ];

  return (
    <div className="w-full flex items-start flex-col">
      {products.map((product) => (
        <button
          key={product.href}
          onClick={() => handleNavigation(product.href)}
          className={`flex w-full justify-between items-center h-[56px]  ${
            pathname === product.href ? "bg-gray-100" : "hover:bg-gray-50"
          }`}
        >
          <Image
            src={product.image}
            alt={product.alt}
            width={product.width}
            height={product.height}
          />
          <Image
            src="/assets/arrow-up.svg"
            alt="arrow"
            width={24}
            height={24}
            className=" rotate-90"
          />
        </button>
      ))}
    </div>
  );
};
