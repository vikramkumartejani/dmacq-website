import Image from 'next/image';
import React from 'react';

interface Feature {
  id: number;
  text: string;
}

const StarterPlan: React.FC = () => {
  const planFeatures: Feature[] = [
    { id: 1, text: 'Maximum 10 users' },
    { id: 2, text: '25 GB storage per paid user' },
    { id: 3, text: '5 Viewer Licenses Included' },
    { id: 4, text: 'Role-Based Access Control' },
    { id: 5, text: 'Max File Size 50 MB allowed' },
    { id: 6, text: 'No Credit Card Required' },
  ];

  return (
    <div className="bg-[#F1F5FA] w-full lg:px-8 px-4">
      <div className="w-full max-w-[1184px] mx-auto py-16 xl:py-24">
        <div className="flex items-center justify-between lg:flex-row flex-col gap-[46px] md:gap-10">
          {/* Plan Description */}
          <div>
            <div className="border border-[#305EFF3D] bg-[#F5F8FF] rounded-[56px] w-[118px] flex items-center justify-center">
              <h3 className="text-[#2243B6] text-[16px] leading-[36px] tracking-[-0.96px] font-bold">
                Starter Plan
              </h3>
            </div>
            <h1 className="text-[#243547] text-[32px] xl:text-[40px] leading-[42px] tracking-[-2px] font-black mt-4">
              Elevate Your Business with DMS+
            </h1>
            <p className="text-[#58728D] text-[16px] xl:text-[18px] font-medium leading-[28px] mt-4 max-w-[611px]">
              Unlock the industry’s top features with a 14-day free trial and see why we’re the best choice for your business!
            </p>
            <div className="mt-8 max-w-[712px] grid grid-cols-1 sm:grid-cols-2 gap-5">
              {planFeatures.map((feature) => (
                <div key={feature.id} className="flex items-center gap-3">
                  <Image src="/assets/usecase/checkbox.svg" alt="checkbox" width={20} height={20} />
                  <h3 className="text-[#243547] text-[16px] leading-[24px] font-medium">{feature.text}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Box */}
          <div className=' '>
          <div
            className="  relative bg-[#2243B6] px-[36.64px] md:px-16 pt-[36.64px] md:pt-16 pb-[36.64px] md:pb-12 rounded-tl-[48px] rounded-tr-[4px] rounded-bl-[48px] rounded-br-[32px]"
            style={{ boxShadow: '-12px 12px 0px 0px #14286D' }}
          >
            <div className="w-[77px] sm:w-[85px] bg-[#1F936C] border-l-2 border-r-2 border-b-2 border-white absolute z-20 top-0 right-5 sm:right-10 flex items-center justify-center py-[23.5px] rounded-b-lg">
              <h2 className="text-white text-[13px] font-bold leading-[17.71px]">
                Annual <br /> 20% off
              </h2>
            </div>
            <h3 className="text-[#FFFFFFB2] text-[14.66px] md:text-[20px] xl:text-[24px] leading-[27.24px] xl:leading-[32px] font-semibold">Get DMS+ for Just</h3>
            <h1 className="mt-3 text-white leading-[91.6px] text-[58.63px] md:text-[72px] xl:text-[86px] tracking-[-0.96px] font-extrabold">
              ₹999<span className="text-[#FFFFFFB2] text-[21.98px] md:text-[24px] xl:text-[32px] font-bold">/ Month</span>
            </h1>
            <button className="md:mt-8 text-[#FFFFFF] text-[16px] font-semibold leading-[21.79px] bg-[#FFFFFF33] border border-[#FFFFFF1A] rounded-lg w-full sm:w-[317px] h-[36.64px] md:h-[48px]">
              Contact Us
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarterPlan;
