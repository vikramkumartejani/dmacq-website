import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();  
  const router = useRouter();  

  const isBlogPage = pathname === "/blog" || pathname === "/single-blog" || pathname === "/contact-us";
  const isHomePage = pathname === "/";

  const handleNavigation = () => {
    router.push("/");  
  };

  return (
    <div className="cursor-pointer" onClick={handleNavigation}>
      {isBlogPage ? (
        <Image
          src="/assets/blogs/blog-logo.svg"
          alt="Blog Logo"
          width={103}
          height={32}
        />
      ) : isHomePage ? (
        <Image
          src="/assets/home-logo.svg"
          alt="Home Logo"
          width={142.29}
          height={36}
        />
      ) : (
        <Image
          src="/assets/logo.svg"
          alt="Solution Logo"
          width={142.29}
          height={36}
        />
      )}
    </div>
  );
};

export default Logo;