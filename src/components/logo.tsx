import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

interface LogoData {
  path: string;   
  logoSrc: string;  
  alt: string;      
  width: number;   
  height: number;   
}

const logoData: LogoData[] = [
  {
    path: "/blog",
    logoSrc: "/assets/blogs/blog-logo.svg",
    alt: "Blog Logo",
    width: 103,
    height: 32,
  },
  {
    path: "/usecase",
    logoSrc: "/assets/dms-logo.svg",
    alt: "Blog Logo",
    width: 103,
    height: 32,
  },
  {
    path: "/single-blog",
    logoSrc: "/assets/blogs/blog-logo.svg",
    alt: "Blog Logo",
    width: 103,
    height: 32,
  },
  {
    path: "/contact-us",
    logoSrc: "/assets/blogs/blog-logo.svg",
    alt: "Blog Logo",
    width: 103,
    height: 32,
  },
  {
    path: "/ai",
    logoSrc: "/assets/ai-logo.svg",
    alt: "AI Logo",
    width: 102.22,
    height: 32,
  },
  {
    path: "/product-dms",
    logoSrc: "/assets/dms-logo.svg",
    alt: "AI Logo",
    width: 115,
    height: 36,
  },
  {
    path: "/",
    logoSrc: "/assets/home-logo.svg",
    alt: "Home Logo",
    width: 142.29,
    height: 36,
  },
  {
    path: "default",
    logoSrc: "/assets/logo.svg",
    alt: "Default Logo",
    width: 142.29,
    height: 36,
  },
];

const Logo: React.FC = () => {
  const pathname = usePathname(); 
  const router = useRouter(); 

  const logo = logoData.find(
    (item) => item.path === pathname || item.path === "default"
  );

  const handleNavigation = () => {
    router.push("/"); 
  };

  return (
    <div className="cursor-pointer" onClick={handleNavigation}>
      {logo && (
        <Image
          src={logo.logoSrc}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          draggable='false'
        />
      )}
    </div>
  );
};

export default Logo;
