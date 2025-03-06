import React from 'react';
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section id="about" className="section bg-gradient-to-b from-amber-50/50">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-amber-600 font-medium mb-4 block">About Us</span>
          <h2 className="heading heading-gradient mb-8">Legacy of Excellence in Investment Management</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            With over two decades of experience, Qutbee Group has established itself as a leader in providing sophisticated investment solutions to discerning clients worldwide. Our approach combines innovative technology with traditional investment wisdom.
          </p>
          <ul className="space-y-6">
            {[
              "Industry-leading research and analysis",
              "Personalized investment strategies",
              "Global market access and opportunities",
              "Dedicated wealth management teams"
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center text-gray-700"
              >
                <div className="w-2 h-2 bg-amber-600 rounded-full mr-4" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
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
  )
}

export default AboutUs