import React from 'react'
import { motion } from "framer-motion";

export default function OurVision() {
  return (
    <section id="about" className="section bg-gradient-to-b from-amber-50/50 relative">
     <div className="container relative">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-center mb-28"
            >
            <span className="text-[var(--gold-deep)] font-semibold text-lg md:text-xl mb-4 block">Our Vision</span>
            <h2 className="heading heading-gradient pb-3 mb-6">Shaping the Future of Intelligent Investment</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Qutbee, our vision is to revolutionize the investment landscape by embracing innovation and fostering sustainable growth for future generations.
            </p>
          </motion.div>

         <div className={`relative flex flex-col lg:flex-row items-center gap-10`}>
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed text-justify md:text-left">
                <span className='text-[var(--gold-classic)]'> Qutbee Group</span> is dedicated to accelerating business transformation across diverse industries, driven 
                by a clear mission to empower innovative concepts. Our strategic investments in technology,
                real estate, and business consulting actively support our vision, which is not merely aspirational. 
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed text-justify md:text-left">
                We provide comprehensive guidance to businesses, generating significant impact throughout the UAE and
                internationally. Our vision is to shape a future that is both advanced and inclusive, fostering resilience.
              </p>
            </motion.div>

             {/* Image */}
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: false, amount: 0.5 }}
               className="w-full lg:w-1/2 h-[300px] lg:h-[460px] rounded-xl relative"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--gold-deep)] to-[var(--gold-classic)] rounded-2xl rotate-6 blur-xl opacity-20" />  
              <div className="w-full h-full rounded-xl overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Modern office building"
                    className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
         </div>
      </div>
    </section>   
  )
}
