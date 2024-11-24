import Image from "next/image";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();  
  const router = useRouter();  

  // Check if the current route is the Blog page
  const isBlogPage = pathname === "/blog" || pathname === "/single-blog";

  // Handle navigation when clicking the logo
  const handleNavigation = () => {
    router.push("/"); // Navigate to the homepage
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
