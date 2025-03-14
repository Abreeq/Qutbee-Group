import React from 'react'
import { Briefcase, TrendingUp, Users, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {

    const services = [
        {
          icon: Briefcase,
          title: "Real Estate Investment & Growth",
          desc: "Strategic real estate investments for sustainable growth and high returns.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        },
        {
          icon: TrendingUp,
          title: "Cutting-Edge Tech Solutions",
          desc: "Innovative technology investments driving business transformation and scalability.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        },
        {
          icon: Users,
          title: "Expert Business Consulting",
          desc: "Tailored advisory services for strategic growth and competitive advantage.",
          image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        },
      ];
      

  return (
    <section id="services" className="section bg-white">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5, threshold: 0.5 }} // Ensures animation triggers in center
            className="text-center mb-20"
          >
            <span className="text-amber-600 font-semibold text-lg md:text-xl mb-4 block">Our Expertise</span>
            <h2 className="heading heading-gradient pb-3 mb-6">Comprehensive Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of sophisticated investment services tailored to meet your financial goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}  
                viewport={{ once: false, amount: 0.7, threshold: 0.8 }} // Ensures animation triggers in center
                transition={{ delay: index * 0.2 }}
                className="card group overflow-hidden shadow-md shadow-amber-200 hover:shadow-amber-300"
              >
                <div className="relative h-48 -mx-8 -mt-8 mb-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <service.icon className="absolute bottom-4 right-4 w-8 h-8 text-white z-20" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700">
                  Learn More <ChevronRight className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Services