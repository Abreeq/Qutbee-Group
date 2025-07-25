import React from 'react';
import { motion } from "framer-motion";

const OurVision = () => {
  return (
    <section id="about" className="section bg-gradient-to-b from-amber-50/50 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-50/50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.05),transparent_50%)]"></div>
      <div className="decorative-dots bottom-20 left-8 rotate-12"></div>
      <svg className="curved-line absolute top-0 left-0 w-96 h-96" viewBox="0 0 100 100">
        <path d="M20,0 Q60,40 40,80 T80,100" strokeDasharray="100%" />
      </svg>
      <svg className="curved-line absolute bottom-0 right-0 w-96 h-96 opacity-10" viewBox="0 0 100 100">
        <path d="M10,90 Q30,40 50,60 T90,10" strokeDasharray="100%" />
      </svg>
      <div className="container relative">
      <span className="text-amber-600 text-center font-semibold text-xl md:text-2xl lg:text-3xl mb-4 block">Our Vision</span>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }} // Trigger animation when element is 50% in view
          >
            {/* <span className="text-amber-600 text-center font-semibold text-xl md:text-2xl lg:text-3xl mb-4 block">About Us</span> */}
            <h2 className="heading heading-gradient pb-3 mb-8">Shaping a future where innovation meets purpose and progress empowers all.</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Qutbee Group is dedicated to accelerating business transformation across diverse industries, driven by a clear mission to empower innovative concepts. Our strategic investments in technology, real estate, and business consulting actively support our vision, which is not merely aspirational. We provide comprehensive guidance to businesses, generating significant impact throughout the UAE and internationally.

                We prioritize investments in people, purpose, and progress. Our vision is to shape a future that is both advanced and inclusive, fostering resilience. We are committed to cultivating environments where businesses prosper, communities thrive, and innovation drives enduring change. 
            </p>

          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }} // Triggers animation when div is in the middle of the screen
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl rotate-6 blur-xl opacity-20" />
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Modern office building"
              className="rounded-2xl relative shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OurVision;
