import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import OurProjects from './components/OurProjects'
import InvestmentOpportunities from './components/InvestmentOpportunities'
import Modal from './components/Modal'
import Partners from './components/Partners'
import Scroll from './components/Scroll'

function App() {
  // For Pop-up
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="min-h-screen">
     <Navbar />
     {/* for Scroll to top */}
     <Scroll/>
     <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />
     <Hero setIsOpen={setIsOpen}/>
     <Services />
     <AboutUs />
     <Partners/>
     <OurProjects />
     <InvestmentOpportunities />
     <Contact />
     <Footer />
     </div>
    </>
  )
}

export default App
