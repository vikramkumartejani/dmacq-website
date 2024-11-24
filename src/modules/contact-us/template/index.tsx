import Footer from '@/modules/layout/components/footer'
import Header from '@/modules/layout/components/header'
import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactContent from '../components/ContactContent'

const ContactUS = () => {
  return (
    <div className='w-full'>
        <Header/>
        <div className='w-full bg-[#0C1927] lg:px-8 px-4 pt-[64px] lg:pt-[72px] text-white border-b border-[#6C849D2E]'>
            <div className='flex items-center justify-between lg:flex-row flex-col max-w-[1184px] mx-auto pt-[64px] pb-[64px] md:pb-[96px] gap-[64px]'>
                <ContactContent/>
                <ContactForm/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUS