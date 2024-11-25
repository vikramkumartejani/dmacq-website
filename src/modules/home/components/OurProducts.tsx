import Image from "next/image";
import React from "react";

const OurProducts = () => {
  return (
    <div className="py-[120px] bg-[#FFFFFF] w-full overflow-hidden">
      <div className="max-w-[1184px] w-full mx-auto">
        <div className="text-center flex flex-col gap-2 pb-[52px]">
          <h4 className="text-[#CD3609] text-[18px] leading-[21.6px] font-semibold uppercase tracking-[4px]">
            Our Products
          </h4>
          <h1 className="text-[#243547] text-[36px] leading-[43px] font-extrabold tracking-[-0.96px]">
            Elevate your business with our innovative offerings
          </h1>
        </div>

        <div className="mt-16">
          <div className="bg-[#F5F8FF] border border-[#305EFF2E] rounded-lg flex items-center justify-between">
            <div className="pl-10 max-w-[508px]">
              <div>
                <div className="flex items-center gap-1.5">
                  <Image
                    src="/assets/dms.svg"
                    alt="forms"
                    width={52}
                    height={52}
                  />
                  <div>
                    <h4 className="text-[#2F4256] text-[16px] font-normal leading-[18px]">
                      dMACQ
                    </h4>
                    <h1 className="text-[#192839] text-[32px] font-black leading-[30px] tracking-[-0.81px]">
                      DMS +
                    </h1>
                  </div>
                </div>
                <p className="mt-6 text-[#243547] text-[18px] leading-[28px] font-medium">
                  DMS+ simplifies document management, allowing you to securely
                  store files, organize for quick retrieval and collaborate
                  seamlessly with your team—reducing the risk of misplacing
                  crucial information.
                </p>
                <button className="mt-8 bg-[#2243B6] w-[117px] h-[40px] rounded-lg text-white text-[16px] leading-[21px] font-semibold">Contact Us</button>
              </div>
            </div>
            <Image
              src="/assets/product1.svg"
              alt="product1"
              width={655}
              height={500}
            />
          </div>

          <div className="mt-6 flex items-center justify-between gap-6">
            <div className="w-full bg-[#F7F4FF] h-[30px] border border-[#5D4AD42E] rounded-lg pt-10">
                <Image src='/assets/product2.svg' alt="product" width={560} height={500} />
            </div>
            <div className="w-full bg-[#F2FFFB] h-[40px] border border-[#167B592E] rounded-lg pt-10">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;