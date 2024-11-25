import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import WhyChooseUs from '../components/WhyChooseUs'
import UnlockingEfficiency from '../components/UnlockingEfficiency'
import OurProducts from '../components/OurProducts'
import Awards from '../components/Awards'
import CustomerSuccessStories from '../components/CustomerSuccessStories'
import Testimonials from '../components/Testimonials'

const HomePage = () => {
  return (
    <div className='pt-[72px]'>
        <Hero/>
        <AboutUs/>
        <WhyChooseUs/>
        <UnlockingEfficiency/>
        <OurProducts/>
        <Awards/>
        <CustomerSuccessStories />
        <Testimonials/>
    </div>
  )
}

export default HomePage