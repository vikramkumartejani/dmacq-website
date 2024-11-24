import React from 'react'
import Hero from '../components/main'
import DMDSolves from '../components/dms-solves'
import DMACQLegalDMS from '../components/dmacq-legal-dms'
import RevolutionizingDepartmental from '../components/revolutionizing-departmental'
import CustomerSuccessStories from '../components/customer-success-stories'
import Header from '@/modules/layout/components/header'
import Footer from '@/modules/layout/components/footer'

const Solution = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <DMDSolves/>
      <DMACQLegalDMS/>
      <RevolutionizingDepartmental/>
      <CustomerSuccessStories/>
      <Footer/>
    </div>
  )
}

export default Solution