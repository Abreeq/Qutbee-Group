import React, { useState } from 'react'
import { motion } from "framer-motion";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import BusinessCards from '../components/BusinessCards';
import Modal from '../components/Modal';

export default function Businesspage() {

 // For Pop-up
 const [isOpen, setIsOpen] = useState(false);

  return (
   <>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 to-white pointer-events-none pt-7" />
      <div className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />

        <div className="container pt-32 pb-20 relative">
            <div className="text-center max-w-5xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="heading hero-heading-gradient mb-8 pb-3 px-10"
              >
                Our Businesses
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              >
                Join a trusted network of industry partners and discover tailored solutions for your business growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 justify-center pb-7"
              >
                <button onClick={() => setIsOpen(true)} className="btn btn-primary flex items-center cursor-pointer">
                      Start Investing <span><ArrowRight className="ml-2" /></span>  
                </button>
               
                <a href="#about" className="btn bg-white text-[var(--gold-deep)] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Schedule your Live Demo
                </a>
              </motion.div>
            </div>
        </div>
    </section>

    {/* Business cards */}
    <BusinessCards/>

    {/* CTA section */}
    <div className="relative overflow-hidden">
        <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="py-20">
                    <p className="text-[var(--gold-deep)] font-medium mb-5 block">Let’s get started</p>
                    <h2 className="heading-gradient text-xl lg:text-4xl font-bold mb-7">We will help you overcome your technology challenges</h2>
                    <p className="text-lg text-gray-600">Call us on (0712) 819 79 555 or (0712) 819 79 999 email us at contact@example.com or fill out the following form to start the conversation.</p>
                    <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                      <button className="px-6 py-2 bg-[var(--gold-classic)] text-white text-lg rounded-lg shadow-md hover:bg-[var(--gold-deep)] transition duration-300 flex items-center cursor-pointer justify-center gap-2">
                        Invest Now <ArrowRightCircle className="w-5 h-5" />
                      </button>
                      <button className="px-6 py-2 border-2 border-[var(--gold-classic)] text-[var(--gold-classic)] text-lg cursor-pointer rounded-lg shadow-md hover:bg-[var(--gold-classic)] hover:text-white transition duration-300">
                        Find your Solutions
                      </button>
                    </div>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Product screenshot" 
                       className='w-full h-full object-cover' /> 
                </div>
            </div>
        </div>
    </div>

    {/* Modal for Popup */}
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}></Modal>
   </>
  )
}
