import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

interface MenuLink {
  href: string
  label: string
}

interface MenuData {
  title: string
  links: MenuLink[]
}

const socialLinks = [
  { href: '/', src: '/assets/linkedin.svg', alt: 'LinkedIn' },
  { href: '/', src: '/assets/instagram.svg', alt: 'Instagram' },
  { href: '/', src: '/assets/facebook.svg', alt: 'Facebook' },
  { href: '/', src: '/assets/twitter.svg', alt: 'Twitter' },
];

const menuData: MenuData[] = [
  {
    title: 'Company',
    links: [
      { href: '/', label: 'DMS+' },
      { href: '/', label: 'FORM+' },
      { href: '/', label: 'FLOW+' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/', label: 'Help' },
      { href: '/', label: 'FAQs' },
      { href: '/', label: 'Blog' },
      { href: '/', label: 'Site Map' },
      { href: '/', label: 'Customer Support' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { href: '/', label: 'Terms of Service' },
      { href: '/', label: 'Privacy Policy' },
      { href: '/', label: 'Google App Privacy Policy' },
      { href: '/', label: 'iOS App Privacy Policy' },
    ],
  },
];

type ColorMapping = Record<string, string>;

const colorMapping: ColorMapping = {
  '/': 'text-[#FC5523]',   
  '/solution': 'text-[#7ABFA8]',  
  '/blog': 'text-[#75A3FF]',  
  '/product-dms': 'text-[#75A3FF]',  
  '/ai': 'text-[#75A3FF]', 
  '/contact-us': 'text-[#75A3FF]', 
  '/usecase': 'text-[#75A3FF]', 
};

const DesktopMenuLinks: React.FC = () => {
  const pathname = usePathname(); 

  const titleColor = colorMapping[pathname] || 'text-primary-300';  

  return (
    <div className="pb-[64px] hidden lg:flex gap-[48px] lg:gap-[120px] items-start">
      <div className="min-w-full lg:min-w-[254px] text-center lg:text-left">
        <Image src="/assets/footer-logo.svg" alt="footer-logo" width={152} height={36} className="mx-auto lg:mx-0" />
        <p className="text-white-600 text-[14px] font-normal leading-[22px] pt-5 max-w-[254px] mx-auto lg:mx-0">
          Regd. & Corp. Office: C 208, Neelkanth Business Park, Nathani Road, Vidyavihar West, Mumbai, Maharashtra 400086, India.
        </p>
        <div className="mt-9 flex justify-center lg:justify-start items-center gap-3">
          {socialLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <Image src={link.src} alt={link.alt} width={28.68} height={28} />
            </Link>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex items-start justify-between gap-5 w-full">
        {menuData.map((menu, index) => (
          <div key={index} className="flex flex-col gap-1 text-center lg:text-left">
            <h2
              className={`${titleColor} text-base font-medium leading-[22px] mb-[11px]`} 
            >
              {menu.title}
            </h2>
            {menu.links.map((link, linkIndex) => (
              <Link
                key={linkIndex}
                href={link.href}
                className="py-2 text-white-700 text-[16px] leading-[24px] font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopMenuLinks;
