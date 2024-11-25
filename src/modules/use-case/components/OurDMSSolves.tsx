import React from 'react'

const OurDMSSolves = () => {
  return (
    <div className='py-[64px] lg:py-[120px] w-full lg:px-8 px-4'>
        <div className='max-w-[1184px] mx-auto w-full'>
            <div className='flex items-center justify-between lg:flex-row flex-col gap-12 md:gap-10'>
                <div className='lg:max-w-[446px] w-full lg:block flex items-center justify-center flex-col'>
                    <div className="bg-[#F5F8FF] border border-[#305EFF3D] w-[99px] h-[36px] rounded-[57px] flex items-center justify-center ">
                        <h3 className="text-[#2950DA] text-[16px] leading-[36px] font-bold tracking-[-0.96px]">Solutions</h3>
                    </div>
                    <h2 className='mt-2 md:mt-6 text-[#243547] text-[28px] md:text-[40px] leading-[33.6px] md:leading-[48px] font-bold tracking-[-0.96px] lg:text-left text-center'>How Our DMS Solves These Challenges</h2>
                </div>
                <div className='lg:max-w-[631px]'>
                    <p className='text-[#40566D] text-[16px] md:text-[18px] font-medium leading-[27px] md:leading-[30.6px]'>By adopting dMACQ, companies transformed their data room management, ensuring secure, streamlined access to sensitive documents, enhancing collaboration and reducing compliance risks during high-stakes transactions</p>
                    <button className='mt-8 bg-[#2243B6] rounded-lg w-full lg:w-[124px] h-[40px] text-[#FFFFFF] text-[16px] font-medium tracking-[0.46px]'>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurDMSSolves