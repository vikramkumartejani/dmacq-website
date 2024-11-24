import ContactUs from '@/modules/layout/components/header/contact-us'
import Image from 'next/image'
import React from 'react'

const DMDSolves = () => {
  return (
    <div className='w-full md:px-8 px-4'>
        <div className='w-full mx-auto max-w-[1184px] pt-[64px] pb-[48px] md:py-[120px]'>
            <div className='flex lg:items-end flex-col lg:flex-row justify-between gap-[48px]'>
                <div className='lg:min-w-[486px] flex lg:items-start items-center flex-col'>
                    <div className='bg-mint-cream border border-primary-200 rounded-[57px] w-[99px] h-[36px] flex items-center justify-center'>
                        <h3 className='text-green-600 text-base leading-[36px] font-bold tracking-[-0.95px]'>Solutions</h3>
                    </div>
                    <h2 className='text-center lg:text-left mt-2 lg:mt-6 text-dark text-[28px] md:text-[40px] font-bold leading-[33.6px] md:leading-[48px] tracking-[-0.95px] lg:pb-[29.5px]'>How Our DMS Solves These Challenges</h2>
                </div>
                <div className='lg:max-w-[631px] flex lg:items-start items-center flex-col '>
                    <p className='mb-10 lg:mb-8 text-primary font-medium text-base md:text-lg leading-[27px] md:leading-[30.6px]'>dMACQ Flow+ helps optimize operations by automating and standardizing key tasks, reducing human error and ensuring that each stage of production runs smoothly. By defining clear steps and automating approvals, material handling and quality checks.</p>
                    <ContactUs/>
                </div>
            </div>

            <div className='mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='border border-primary-200 bg-mint-cream rounded-xl p-8'>
                    <Image src='/assets/solution/secure-access-control.svg' draggable="false" alt='Secure Access Control' width={56} height={56} />
                    <h2 className='mt-4 md:mt-6 text-secondary text-[20px] md:text-[24px] leading-[27.6px] font-bold md:font-extrabold tracking-[-0.23px]'>Secure Access Control</h2>
                    <p className='text-primary-100 text-base font-normal md:font-medium mt-2 md:mt-4'>Manage all case-related documents securely in one platform, ensuring easy access and collaboration.</p>
                </div>
                <div className='border border-primary-200 bg-mint-cream rounded-xl p-8'>
                    <Image src='/assets/solution/seamless-collaboration.svg' draggable="false" alt='Seamless Collaboration' width={56} height={56} />
                    <h2 className='mt-4 md:mt-6 text-secondary text-[20px] md:text-[24px] leading-[27.6px] font-bold md:font-extrabold tracking-[-0.23px]'>Seamless Collaboration</h2>
                    <p className='text-primary-100 text-base font-normal md:font-medium mt-2 md:mt-4'>Securely manage all case documents in one platform for easy access, sharing, and collaboration.</p>
                </div>
                <div className='border border-primary-200 bg-mint-cream rounded-xl p-8'>
                    <Image src='/assets/solution/smart-documentation.svg' draggable="false" alt='Smart Documentation' width={56} height={56} />
                    <h2 className='mt-4 md:mt-6 text-secondary text-[20px] md:text-[24px] leading-[27.6px] font-bold md:font-extrabold tracking-[-0.23px]'>Smart Documentation</h2>
                    <p className='text-primary-100 text-base font-normal md:font-medium mt-2 md:mt-4'>Manage all case-related documents securely, ensuring easy access, sharing, and organization.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DMDSolves