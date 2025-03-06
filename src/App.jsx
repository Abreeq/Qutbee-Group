import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="min-h-screen">
     <Navbar />
     <Hero />
     <Services />
     <AboutUs />
     <Contact />
     <Footer />
     </div>


    </>
  )
}

export default App
