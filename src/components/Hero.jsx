import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import Swiper pagination styles (if using pagination)npm run dev

import { motion } from "framer-motion"; // Import framer-motion
import { ArrowRight, Globe, Shield, Award } from "lucide-react"; // Import icons (if using lucide-react)


const Hero = () => {
    const stats = [
        { icon: Globe, title: "Global Reach", value: "20+ Countries" },
        { icon: Shield, title: "Assets Protected", value: "$10B+" },
        { icon: Award, title: "Industry Awards", value: "50+" },
      ];
      
  return (
    
    <section id="home" className="min-h-screen pt-32 pb-20 relative overflow-hidden hero-pattern">
    <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 to-white pointer-events-none pt-7" />
    <div className="absolute inset-0" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.1
    }} />
    
    <div className="container relative">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        className="mb-20"
      >
        <SwiperSlide>
          <div className="text-center max-w-5xl mx-auto">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block text-amber-600 font-medium mb-6"
            >
              Welcome to the Future of Investment
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="heading heading-gradient mb-8 pb-3"
            >
              Transforming Wealth Through Strategic Innovation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Experience unparalleled investment management with our data-driven approach and personalized strategies designed for your success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center pb-7"
            >
              <a href="#contact" className="btn btn-primary">
                Start Investing <ArrowRight className="ml-2" />
              </a>
              <a href="#about" className="btn bg-white text-amber-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Learn More
              </a>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
      >
        {stats.map((stat, index) => (
          <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">{stat.value}</h3>
            <p className="text-gray-600">{stat.title}</p>
          </div>
        ))}
      </motion.div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white pointer-events-none" />
  </section>
  )
}

export default Hero