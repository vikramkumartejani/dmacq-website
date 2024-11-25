import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import WhyChooseUs from '../components/WhyChooseUs'
import UnlockingEfficiency from '../components/UnlockingEfficiency'
import OurProducts from '../components/OurProducts'

const HomePage = () => {
  return (
    <div className='pt-[72px]'>
        <Hero/>
        <AboutUs/>
        <WhyChooseUs/>
        <UnlockingEfficiency/>
        <OurProducts/>
    </div>
  )
}

export default HomePage