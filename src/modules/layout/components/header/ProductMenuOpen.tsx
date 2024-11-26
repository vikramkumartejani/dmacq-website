import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Product = {
  imgSrc: string;
  description: string;
  href: string;
  width: number;
  height: number;
};

const ProductMenuOpen = ({ products }: { products: Product[] }) => {
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <div className="fixed left-0 right-0 top-[72px] z-50">
      <div
        className="w-full bg-white overflow-hidden py-8 lg:px-8"
        style={{ boxShadow: "0px 10px 13.3px 0px #3C3C3C1F" }}
      >
        <div className="grid grid-cols-3 gap-4 py-5 max-w-[1184px] mx-auto">
          {products.map((product) => (
            <div
              key={product.href}
              className="border border-[#6C849D2E] rounded-lg bg-white p-5 cursor-pointer"
              onClick={() => handleNavigation(product.href)}
            >
              <div className="flex items-start gap-4">
                <div>
                  <Image
                    src={product.imgSrc}
                    alt="logo"
                    width={product.width}
                    height={product.height}
                  />
                  <p className="text-[#2F4256] text-[12px] leading-[16.34px] font-normal line-clamp-2 mt-3">
                    {product.description}
                  </p>
                </div>
                <Image
                  src="/assets/menu-arrow.svg"
                  alt="menu-arrow"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductMenuOpen;
