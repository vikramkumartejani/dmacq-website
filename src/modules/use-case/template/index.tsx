import Footer from '@/modules/layout/components/footer'
import Header from '@/modules/layout/components/header'
import React from 'react'
import Hero from '../components/Hero'
import OurDMSSolves from '../components/OurDMSSolves'
import SuccessStories from '../components/SuccessStories'
import InnovativeFeatures from '../components/InnovativeFeatures'

const UseCase = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <OurDMSSolves/>
        <InnovativeFeatures/>
        <SuccessStories
            customTitle="After 12 months, DMS + customers see"
            bgColor="#D8E4FD"
            mainTitleColor="#2950DA"
            textColor="#0C1927"
        />
        <Footer/>
    </div>
  )
}

export default UseCase