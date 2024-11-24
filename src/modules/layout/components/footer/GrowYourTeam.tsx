import Image from 'next/image'
import React from 'react'

const GrowYourTeam = () => {
  return (
    <div className='md:py-[120px] pt-[64px] pb-[48px]'>
        <div className='w-full bg-green-700 rounded-lg md:rounded-[32px] p-8 md:p-12 xl:p-[72px] flex items-center gap-5 justify-between'>
            <div className='lg:max-w-[484px]'>
                <h2 className='text-white font-bold md:font-extrabold text-[24px] md:text-[40px] leading-[28px] md:leading-[40px] mb-3'>Grow Your Team, Grow Your Business</h2>
                <p className='text-white text-[16px] leading-[27.2px] font-normal'>Discover How Our Innovative Products DMS, Form Automation, Workflow Solutions, and Digitization, Can Streamline Your Business Operations and </p>
                <button className='mt-12 w-full md:w-[133px] h-[40px] bg-white text-green-700 rounded-lg text-base font-semibold'>Contact Us</button>
            </div>

            <div className='lg:block hidden'>
                <Image src='/assets/footer.svg' alt='footer' width={460.92} height={272.42} draggable="false" className='' />
            </div>
        </div>
    </div>
  )
}

export default GrowYourTeam