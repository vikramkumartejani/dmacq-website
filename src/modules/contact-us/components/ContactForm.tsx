import React from 'react'

const ContactForm = () => {
  return (
    <form className='bg-white rounded-[16px] md:py-10 md:px-8 p-6 lg:w-1/2 w-full'>
        <div className='mb-6 flex items-center md:flex-row flex-col gap-6'>
            <div className='w-full'>
                <label className='block text-[#243547] text-[16px] font-medium mb-2'>First Name<span className='text-[#E6334E]'>*</span></label>
                <input type='text' className='w-full border border-[#B1C1D2] outline-none rounded-md h-[40px] px-4 text-[#243547] placeholder:text-[#90A5BB] text-[16px]' placeholder='eg. Smith' />
            </div>
            <div className='w-full'>
                <label className='block text-[#243547] text-[16px] font-medium mb-2'>Last Name<span className='text-[#E6334E]'>*</span></label>
                <input type='text' className='w-full border border-[#B1C1D2] outline-none rounded-md h-[40px] px-4 text-[#243547] placeholder:text-[#90A5BB] text-[16px]' placeholder='eg. Roy' />
            </div>
        </div>
        <div className='w-full mb-6'>
            <label className='block text-[#243547] text-[16px] font-medium mb-2'>Work Email<span className='text-[#E6334E]'>*</span></label>
            <input type='text' className='w-full border border-[#B1C1D2] outline-none rounded-md h-[40px] px-4 text-[#243547] placeholder:text-[#90A5BB] text-[16px]' placeholder='name@company.com' />
        </div>
        <div className='w-full mb-6'>
            <label className='block text-[#243547] text-[16px] font-medium mb-2'>Company Name<span className='text-[#E6334E]'>*</span></label>
            <input type='text' className='w-full border border-[#B1C1D2] outline-none rounded-md h-[40px] px-4 text-[#243547] placeholder:text-[#90A5BB] text-[16px]' placeholder='abc company' />
        </div>

        <div className='w-full mb-6'>
            <label className='block text-[#243547] text-[16px] font-medium mb-2'>How can our team help you?</label>
            <textarea className='w-full h-[96px] py-2 border border-[#B1C1D2] outline-none rounded-md px-4 text-[#243547] placeholder:text-[#90A5BB] resize-none text-[16px]' placeholder="Tell us your needs, and well respond promptly"/>
        </div>

        <button className='bg-[#2950DA] w-full h-[48px] rounded-lg text-[16px] leading-[21.79px] font-semibold'>Submit Your Request</button>
    </form>
  )
}

export default ContactForm