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
        <SuccessStories/>
        <Footer/>
    </div>
  )
}

export default UseCase