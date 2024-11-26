'use client'
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); // Prevent the default form submission
    setIsLoading(true);

    // Simulate a delay for submission (e.g., API call)
    setTimeout(() => {
      setIsLoading(false);
      alert('Form submitted successfully!');
    }, 2000); // Simulating a 2-second delay
  };

  return (
    <form 
      className='bg-white rounded-[16px] md:py-10 md:px-8 p-6 lg:w-1/2 w-full' 
      onSubmit={handleSubmit}
    >
      <div className='mb-6 flex items-center md:flex-row flex-col gap-6'>
        <div className='w-full'>
          <label className='block text-[#243547] text-[16px] font-medium mb-2'>
            First Name<span className='text-[#E6334E]'>*</span>
          </label>
          <input 
            type='text' 
            className='w-full border border-[#B1C1D2] outline-none rounded-md h-[40px] px-4 text-[#243547] placeholder:text-[#90A5BB] text-[16px]' 
            placeholder='eg. Smith' 
          />
        </div>
        <div className='w-full'>
          <label className='block text-[#243547] text-[16px] font-medium mb-2'>
            Last Name<span className='text-[#E6334E]'>*</span>
          </label>
          <input 
            type='text' 
            className='w-full border border-[#B1C1D2] outline-none rounded-md h-[40px] px-4 text-[#243547] placeholder:text-[#90A5BB] text-[16px]' 
            placeholder='eg. Roy' 
          />
        </div>
      </div>
      <div className='w-full mb-6'>
        <label className='block text-[#243547] text-[16px] font-medium mb-2'>
          Work Email<span className='text-[#E6334E]'>*</span>
        </label>
        <input 
          type='email' 
          className='w-full border border-[#B1C1D2] outline-none rounded-md h-[40px] px-4 text-[#243547] placeholder:text-[#90A5BB] text-[16px]' 
          placeholder='name@company.com' 
        />
      </div>
      <div className='w-full mb-6'>
        <label className='block text-[#243547] text-[16px] font-medium mb-2'>
          Company Name<span className='text-[#E6334E]'>*</span>
        </label>
        <input 
          type='text' 
          className='w-full border border-[#B1C1D2] outline-none rounded-md h-[40px] px-4 text-[#243547] placeholder:text-[#90A5BB] text-[16px]' 
          placeholder='abc company' 
        />
      </div>
      <div className='w-full mb-6'>
        <label className='block text-[#243547] text-[16px] font-medium mb-2'>
          Departments<span className='text-[#E6334E]'>*</span>
        </label>
        <select 
          className='border border-[#B1C1D2] w-full text-[#243547] h-[40px] px-4 rounded-md outline-none appearance-none'
        >
          <option>HR</option>
          <option>Operations</option>
          <option>Finance</option>
          <option>Legal</option>
          <option>IT</option>
          <option>Management</option>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Product</option>
        </select>
      </div>
      <div className='w-full mb-6'>
        <label className='block text-[#243547] text-[16px] font-medium mb-2'>
          How can our team help you?
        </label>
        <textarea 
          className='w-full h-[96px] py-2 border border-[#B1C1D2] outline-none rounded-md px-4 text-[#243547] placeholder:text-[#90A5BB] resize-none text-[16px]' 
          placeholder="Tell us your needs, and we'll respond promptly" 
        />
      </div>
      <button 
        type='submit' 
        className={`w-full h-[48px] rounded-lg text-[16px] leading-[21.79px] font-semibold ${isLoading ? 'bg-gray-400' : 'bg-[#2950DA]'}`}
        disabled={isLoading}
      >
        {isLoading ? 'Submitting...' : 'Submit Your Request'}
      </button>
    </form>
  );
};

export default ContactForm;
