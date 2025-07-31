import React, { useState } from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import Partners from '../components/Partners'
import OurProjects from '../components/OurProjects'
import InvestmentOpportunities from '../components/InvestmentOpportunities'
import Contact from '../components/Contact'
import Modal from '../components/Modal'
import Scroll from '../components/Scroll'

export default function Homepage() {
   // For Pop-up
   const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Hero setIsOpen={setIsOpen}/>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
      <Scroll/>
      <Services/>
      <AboutUs/>
      <Partners/>
      <OurProjects/>
      <InvestmentOpportunities/>
      <Contact/>
    </>
  )
}
