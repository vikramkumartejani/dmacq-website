import Image from 'next/image'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <div className='pt-[120px] bg-[#FFF5F2] w-full overflow-hidden'>
        <div className='max-w-[1184px] w-full mx-auto'>
            <div className='text-center flex flex-col gap-2 pb-[52px]'>
                <h4 className='text-[#CD3609] text-[18px] leading-[21.6px] font-semibold uppercase tracking-[4px]'>Why Choose Us</h4>
                <h1 className='text-[#243547] text-[36px] leading-[43px] font-extrabold tracking-[-0.96px]'>Unleash the Full Power of Your Business</h1>
                <p className='text-[#2F4256] text-[20px] leading-[34px] font-normal tracking-[-0.4px]'>Harnessing dMACQ's products, enterprises achieve:</p>
            </div>

            <div className='py-6 grid grid-cols-4 text-center'>
                <div className='flex items-center gap-6 flex-col py-[10.5px]'>
                    <h2 className='text-[#FC5523] text-[56px] leading-[58px] tracking-[-0.96px] font-black'>2-3X</h2>
                    <p className='text-[#192839] text-[18px] font-medium leading-[20.7px] tracking-[-0.24px]'>Boost in Employee Productivity</p>
                </div>
                <div className='flex items-center gap-6 flex-col py-[10.5px]'>
                    <h2 className='text-[#FC5523] text-[56px] leading-[58px] tracking-[-0.96px] font-black'>4%</h2>
                    <p className='text-[#192839] text-[18px] font-medium leading-[20.7px] tracking-[-0.24px]'>Risk Mitigation</p>
                </div>
                <div className='flex items-center gap-6 flex-col py-[10.5px]'>
                    <h2 className='text-[#FC5523] text-[56px] leading-[58px] tracking-[-0.96px] font-black'>70%</h2>
                    <p className='text-[#192839] text-[18px] font-medium leading-[20.7px] tracking-[-0.24px]'>Reduction in Physical Infrastructure Cost</p>
                </div>
                <div className='flex items-center gap-6 flex-col py-[10.5px]'>
                    <h2 className='text-[#FC5523] text-[56px] leading-[58px] tracking-[-0.96px] font-black'>80%</h2>
                    <p className='text-[#192839] text-[18px] font-medium leading-[20.7px] tracking-[-0.24px]'>Better Control Over Sensitive Information</p>
                </div>
            </div>

            <div className='mt-[24px] relative overflow-hidden -mb-4'>
                <div className='h-[85px] absolute bottom-0 w-full z-40 overflow-hidden' style={{background: "linear-gradient(211.23deg, rgba(255, 245, 242, 0) 19.87%, rgba(255, 245, 242, 0.56) 67.35%)"}}></div>
                <Image src='/assets/chart.svg' alt='chart' width={1184} height={400} className='overflow-hidden' />
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs