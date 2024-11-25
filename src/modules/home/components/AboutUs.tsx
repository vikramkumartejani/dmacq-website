import ContactUs from '@/components/contact-us'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='w-full py-12 lg:py-[120px] lg:px-8 px-4'>
        <div className='w-full max-w-[1184px] mx-auto flex items-center justify-between lg:flex-row flex-col-reverse gap-12'>
            <div>
              <Image src='/assets/about-us.svg' alt='about-us' width={584} height={396} />
            </div>
            <div className='w-full lg:w-[504px] text-left'>
                <h2 className='text-[#243547] text-[28px] leading-[33.6px] md:text-[40px] md:leading-[48px] font-extrabold tracking-[-0.959px] mb-5'>About us</h2>
                <p className='text-[#2F4256] text-[18px] md:text-[20px] leading-[30.6px] md:leading-[34px] font-normal tracking-[-0.40px]'>At dMACQ, we are pioneers in crafting innovative software solutions that enhance productivity for both enterprises and SMEs. Our products simplify complex processes, help organizations manage their data and operations more effectively. dMACQ enhances productivity and flexibility, helping organizations accelerate digital initiatives, reduce costs, and drive sustainable growth, on-site or remotely.</p>
                <div className='mt-10 h-[40px] lg:h-[48px] bg-[#FC5523] w-full lg:w-[117px] rounded-lg flex items-center justify-center'>
                    <ContactUs/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs