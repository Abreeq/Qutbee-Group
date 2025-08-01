import React from 'react';
import { Briefcase, TrendingUp, Users, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Real Estate Investment & Growth",
      desc: "Strategic real estate investments for sustainable growth and high returns.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "https://qutbee.com/",
    },
    {
      icon: TrendingUp,
      title: "Cutting-Edge Tech Solutions",
      desc: "Innovative technology investments driving business transformation and scalability.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "https://iqaraat.com/",
    },
    {
      icon: Users,
      title: "Expert Business Consulting",
      desc: "Tailored advisory services for strategic growth and competitive advantage.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "https://labs.qutbee.com/"
    },
    {
      icon: Briefcase,
      title: "Expert Business Consulting",
      desc: "Tailored advisory services for strategic growth and competitive advantage.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      link: "https://qutbee.com/"
    },
  ];

  return (
    <section id="services" className="section bg-white py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[var(--gold-deep)] font-semibold text-lg md:text-xl mb-4 block">Our Industries</span>
          <h2 className="heading heading-gradient pb-3 mb-6">Comprehensive Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our range of sophisticated investment services tailored to meet your financial goals.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-14 grid-cols-1 md:grid-cols-2 lg:px-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.7 }}
              transition={{ delay: index * 0.2 }}
              className="group bg-white rounded-lg overflow-hidden shadow-md shadow-[rgba(210,172,71,0.4)] hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-3"
            >
              <div className="relative h-56 sm:h-64 md:h-48 lg:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <service.icon className="absolute bottom-4 right-4 w-8 h-8 text-white z-20" />
              </div>
              <div className="px-6 py-10 text-center">
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                <a href={service.link} target='_blank' className="inline-flex items-center text-[var(--gold-classic)] py-1 pl-2
                 font-medium  rounded-md hover:bg-[var(--gold-classic)] hover:text-white transition duration-300">
                  Learn More <ChevronRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
