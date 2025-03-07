import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Award } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Globe, title: "Global Reach", value: "20+ Countries" },
    { icon: Shield, title: "Assets Protected", value: "$10B+" },
    { icon: Award, title: "Industry Awards", value: "50+" },
  ];

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 relative overflow-hidden hero-pattern">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 to-white pointer-events-none pt-7" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
        }}
      />

      {/* Decorative elements */}
      <div className="decorative-dots top-40 left-8"></div>
      <div className="decorative-dots bottom-20 right-8"></div>
      <svg className="curved-line absolute top-0 left-0 w-101" viewBox="0 0 100 100">
        <path
          d="M0,50 Q25,0 50,50 T100,50"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeDasharray="100"
          strokeDashoffset="100"
        />
      </svg>
      <svg className="curved-line absolute bottom-0 right-0 w-96 rotate-180" viewBox="0 0 100 100">
        <path
          d="M0,50 Q25,25 50,50 T100,50"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          strokeDasharray="100"
          strokeDashoffset="100"
        />
      </svg>

      <div className="container relative">
        <div className="decorative-circle top-20 left-0"></div>
        <div className="decorative-circle bottom-10 right-0"></div>

        <Swiper spaceBetween={30} pagination={{ clickable: true }} className="mb-20">
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
                className="heading heading-gradient mb-8 pb-3 px-10"
              >
                Invest in Your Future with Qutbee Group
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              >
                Experience diverse investment opportunities with a data-driven approach across multiple sectors in the MENA region.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 justify-center pb-7"
              >
                <a href="#contact" className="btn btn-primary flex items-center">
                  Start Investing <span><ArrowRight className="ml-2" /></span>
                </a>
                <a href="#about" className="btn bg-white text-amber-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Learn More
                </a>
              </motion.div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Stats Section */}
        <div className="relative mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-10"
          >
          {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }} // Fade-in effect
                    whileInView={{ opacity: 1, y: 0 }} // Appear when in view
                    viewport={{ once: false, amount: 0.5 }}
                    whileHover={{ y: -8, boxShadow: "0px 10px 20px rgba(251,191,36,0.3)" }} // Moves up slightly
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl cursor-pointer"
                >
                    <stat.icon className="w-12 h-12 text-amber-600 mx-auto mb-4 transition-all duration-300" />
                    <h3 className="font-bold text-2xl mb-2 text-gray-800">{stat.value}</h3>
                    <p className="text-gray-600 text-lg">{stat.title}</p>
                </motion.div>
                ))}


          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white pointer-events-none" />
    </section>
  );
};

export default Hero;
