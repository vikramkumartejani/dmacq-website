import Image from "next/image";
import React from "react";

const InnovativeFeatures = () => {
  return (
    <div className="w-full pt-[120px]">
      <div className="lg:px-8 px-4">
        <h3 className="text-center text-[#2243B6] text-[16px] leading-[19.2px] tracking-[4px] font-bold uppercase mb-2">
          Innovative Features
        </h3>
        <h1 className="text-center text-[#243547] text-[36px] leading-[43px] tracking-[-0.96px] font-extrabold">
          Empower Your Team with Our Full Range of Features
        </h1>
      </div>
      <div className="max-w-[1184px] mx-auto w-full py-[96px] flex items-center justify-between gap-5">
        <Image
          src="/assets/dmacq/organize-smarter.svg"
          alt="organize-smarter"
          width={566}
          height={396}
        />
        <div className="max-w-[532px]">
          <h1 className="text-[#243547] text-[40px] leading-[48px] font-extrabold tracking-[-0.96px] mb-4">Organize Smarter</h1>
          <p className="text-[#2F4256] text-[22px] leading-[37.4px] tracking-[-0.4px] font-medium">With our intelligent tagging, your documents are organized and easily retrievable. Features like easy Upload, Linked Folders, Auto-Actions, and Bulk Uploading streamline management, enhancing efficiency and saving time</p>
          <button className="mt-10 border border-[#2243B6] rounded-lg w-[117px] h-[40px] text-[#2243B6] text-[16px] leading-[21px] font-semibold">Contact Us</button>
        </div>
      </div>

      <div className="bg-[#F8FAFC] w-full">
        <div className="max-w-[1184px] mx-auto w-full py-[96px] flex items-center justify-between gap-5">
          <div className="max-w-[532px]">
            <h1 className="text-[#243547] text-[40px] leading-[48px] font-extrabold tracking-[-0.96px] mb-4">Store Information Securely</h1>
            <p className="text-[#2F4256] text-[22px] leading-[37.4px] tracking-[-0.4px] font-medium">In today’s digital landscape, safeguarding your data is crucial. dMACQ DMS+ utilizes cutting-edge encryption, granular access controls, and robust scalability to protect sensitive information and adapt to your evolving security needs</p>
            <button className="mt-10 border border-[#2243B6] rounded-lg w-[117px] h-[40px] text-[#2243B6] text-[16px] leading-[21px] font-semibold">Contact Us</button>
          </div>
          <Image
            src="/assets/dmacq/organize-smarter.svg"
            alt="organize-smarter"
            width={566}
            height={396}
          />
        </div>
      </div>

      <div className="max-w-[1184px] mx-auto w-full py-[96px] flex items-center justify-between gap-5">
        <Image
          src="/assets/dmacq/organize-smarter.svg"
          alt="organize-smarter"
          width={566}
          height={396}
        />
        <div className="max-w-[532px]">
          <h1 className="text-[#243547] text-[40px] leading-[48px] font-extrabold tracking-[-0.96px] mb-4">Effortless Retrieval</h1>
          <p className="text-[#2F4256] text-[22px] leading-[37.4px] tracking-[-0.4px] font-medium">With our Quick Search, Content Search and Advanced Search features, retrieving documents is effortless. Quickly locate files with keywords or utilize advanced filters for precise results, enhancing efficiency and saving valuable time</p>
          <button className="mt-10 border border-[#2243B6] rounded-lg w-[117px] h-[40px] text-[#2243B6] text-[16px] leading-[21px] font-semibold">Contact Us</button>
        </div>
      </div>

      <div className="bg-[#F8FAFC] w-full">
        <div className="max-w-[1184px] mx-auto w-full py-[96px] flex items-center justify-between gap-5">
          <div className="max-w-[532px]">
            <h1 className="text-[#243547] text-[40px] leading-[48px] font-extrabold tracking-[-0.96px] mb-4">Customize Your Experience </h1>
            <p className="text-[#2F4256] text-[22px] leading-[37.4px] tracking-[-0.4px] font-medium">Every organization is unique, and so are its document management needs. dMACQ DMS+ offers flexible configurations, allowing you to customize the system to meet your specific requirements</p>
            <button className="mt-10 border border-[#2243B6] rounded-lg w-[117px] h-[40px] text-[#2243B6] text-[16px] leading-[21px] font-semibold">Contact Us</button>
          </div>
          <Image
            src="/assets/dmacq/organize-smarter.svg"
            alt="organize-smarter"
            width={566}
            height={396}
          />
        </div>
      </div>
    </div>
  );
};

export default InnovativeFeatures;
