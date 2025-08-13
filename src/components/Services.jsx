import React from 'react';
import { HousePlus, School, TrendingUp, Users, Volleyball, } from "lucide-react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../style.css';

const Services = () => {
  const services = [
    {
      icon: HousePlus,
      title: "Real Estate",
      desc: "Strategic Real Estate Investments in UAE for Sustainable Growth & High Returns",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: TrendingUp,
      title: "Technology",
      desc: "Innovative Technology Funding Driving Business Transformation & Scalability",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Users,
      title: "Business Consulting",
      desc: "Expert Business Consulting Services in UAE for Growth & Market Advantage",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: School,
      title: "Education",
      desc: "Innovative Education Solutions for Skills, Growth & Global Competitiveness",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Volleyball,
      title: "Sports",
      desc: "Strategic Sports Investments & Advisory for Growth and Global Reach",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section id="services" className="bg-white py-16 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading heading-gradient pb-3 mb-6">Our Industries</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our range of sophisticated investment services tailored to meet your financial goals.
          </p>
        </motion.div>

          {/* slider */}
          <Swiper
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            spaceBetween={24}
            autoplay={{ delay: 2500, disableOnInteraction: false,  pauseOnMouseEnter: true, }}
            modules={[Navigation, Pagination, Autoplay]}
            className="pb-12"
          >
            {services.map((service, id) => (
              <SwiperSlide key={id} className="!opacity-100 !scale-100 h-auto mb-7">
                <div className="h-full min-h-[400px] flex flex-col group bg-white rounded-lg border border-[rgba(210,172,71,0.4)] overflow-hidden shadow-lg shadow-[rgba(210,172,71,0.4)] hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-56 md:h-48 lg:h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <service.icon className="absolute bottom-4 right-4 w-9 h-9 text-white z-20" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center px-6 py-8 text-center">
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </SwiperSlide>

            ))}
          </Swiper>
      </div>
    </section>
  );
}

export default Services;
