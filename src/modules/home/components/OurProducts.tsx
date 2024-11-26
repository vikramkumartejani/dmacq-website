import Image from "next/image";
import React from "react";

const OurProducts = () => {
  return (
    <div className="py-24 lg:py-[120px] bg-[#FFFFFF] w-full overflow-hidden lg:px-8 px-4">
      <div className="max-w-[1184px] w-full mx-auto">
        <div className="text-center flex flex-col gap-2 lg:pb-[52px]">
          <h4 className="text-[#CD3609] text-[16px] md:text-[18px] leading-[21.6px] font-semibold uppercase tracking-[4px]">
            Our Products
          </h4>
          <h1 className="text-[#243547] text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43px] font-extrabold tracking-[-0.96px]">
            Elevate your business with our innovative offerings
          </h1>
        </div>

        <div className="mt-12 lg:mt-16">
          <div className="bg-[#F5F8FF] border border-[#305EFF2E] rounded-lg flex items-end lg:items-center lg:flex-row flex-col justify-between">
            <div className="pl-6 lg:pl-10 lg:pt-0 pt-6 pr-6 lg:pr-0 lg:max-w-[508px]">
              <div>
                <div className="flex items-center gap-1.5">
                  <Image
                    src="/assets/dms.svg"
                    alt="forms"
                    width={52}
                    draggable='false'
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
                <p className="mt-6 text-[#243547] text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-medium">
                  DMS+ simplifies document management, allowing you to securely
                  store files, organize for quick retrieval and collaborate
                  seamlessly with your team—reducing the risk of misplacing
                  crucial information.
                </p>
                <button className="mt-8 bg-[#2243B6] w-full md:w-[117px] h-[40px] rounded-lg text-white text-[16px] leading-[21px] font-semibold">
                  Contact Us
                </button>
              </div>
            </div>

            <Image
              src="/assets/product1.svg"
              alt="product1"
              width={660}
              draggable='false'
              className="flex items-end justify-center"
              height={500}
            />
          </div>

          <div className="mt-4 lg:mt-6 flex items-center justify-between lg:flex-row flex-col gap-4 lg:gap-6">
            <div className="w-full bg-[#F7F4FF] border border-[#5D4AD42E] rounded-lg pt-6 lg:pt-10">
              <div className="px-6 lg:px-10">
                <div className="flex items-center gap-1.5">
                  <Image
                    src="/assets/forms.svg"
                    alt="forms"
                    draggable='false'
                    width={52}
                    height={52}
                  />
                  <div>
                    <h4 className="text-[#2F4256] text-[16px] font-normal leading-[18px]">
                      dMACQ
                    </h4>
                    <h1 className="text-[#192839] text-[32px] font-black leading-[30px] tracking-[-0.81px]">
                      FORMS +
                    </h1>
                  </div>
                </div>
                <p className="mt-4 text-[#2F4256] text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-medium">
                  Forms+ streamlines data collection, minimizes errors, and
                  automates complex processes to significantly enhance overall
                  efficiency.
                </p>
                <button className="mt-6 bg-[#5D4AD4] w-full md:w-[117px] h-[40px] rounded-lg text-white text-[16px] leading-[21px] font-semibold">
                  Contact Us
                </button>
              </div>

              <div className="w-full flex justify-end">
                <Image
                  src="/assets/product2.svg"
                  alt="product"
                  draggable='false'
                  width={590}
                  height={500}
                  className="lg:block hidden"
                />
                <Image
                  src="/assets/mobile2.svg"
                  alt="product"
                  width={590}
                  draggable='false'
                  height={500}
                  className="block lg:hidden"
                />
              </div>
            </div>

            <div className="w-full bg-[#F2FFFB] border border-[#167B592E] rounded-lg pt-6 lg:pt-10">
              <div className="px-6 lg:px-10">
                <div className="flex items-center gap-1.5">
                  <Image
                    src="/assets/flow.svg"
                    alt="forms"
                    draggable='false'
                    width={52}
                    height={52}
                  />
                  <div>
                    <h4 className="text-[#2F4256] text-[16px] font-normal leading-[18px]">
                      dMACQ
                    </h4>
                    <h1 className="text-[#192839] text-[32px] font-black leading-[30px] tracking-[-0.81px]">
                      FORMS +
                    </h1>
                  </div>
                </div>
                <p className="mt-4 text-[#2F4256] text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] font-medium">
                  Forms+ streamlines data collection, minimizes errors, and
                  automates complex processes to significantly enhance overall
                  efficiency.
                </p>
                <button className="mt-6 bg-[#167B59] w-full md:w-[117px] h-[40px] rounded-lg text-white text-[16px] leading-[21px] font-semibold">
                  Contact Us
                </button>
              </div>

              <div className="w-full flex justify-end">
                <Image
                  src="/assets/product3.svg"
                  alt="product"
                  width={590}
                  height={500}
                  draggable='false'
                  className="lg:block hidden"
                />
                <Image
                  src="/assets/mobile3.svg"
                  alt="product"
                  width={590}
                  draggable='false'
                  height={500}
                  className="block lg:hidden"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
