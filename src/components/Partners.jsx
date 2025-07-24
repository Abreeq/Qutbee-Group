import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../style.css'

const slider = [
  {
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    title: "Innovative Solutions",
    description: "Transforming ideas into impactful technology.",
  },
  {
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    title: "Global Reach",
    description: "Connecting businesses worldwide with digital excellence.",
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    title: "Sustainable Growth",
    description: "Building lasting value across industries.",
  },
  {
    image: "https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
    title: "Trusted Partnerships",
    description: "Empowering clients through collaboration and trust.",
  },
];


export default function CustomSlider2() {
  const progressBarRef = useRef(null);
  
  const onAutoplayTimeLeft = (swiper, time, progress) => {
    if (progressBarRef.current) {
      progressBarRef.current.style.transform = `scaleX(${1-progress})`;
    }
  };
  
  return (
    <section id="partners" className="section bg-white py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-center mb-16"
      >
        <span className="text-amber-600 font-semibold text-lg md:text-xl mb-4 block">Top Opportunities</span>
        <h2 className="heading heading-gradient pb-3 mb-6">Top investment opportunities with us </h2>
        {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover our range of sophisticated investment services tailored to meet your financial goals.
        </p> */}
      </motion.div>

      {/* slider */}
        <div className="w-full relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            centeredSlides={true}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false,  pauseOnMouseEnter: true, }}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            modules={[Navigation, Pagination, Autoplay]}
            className="rounded-xl bg-gray-50 shadow-lg"
          >
            {slider.map((slide, id) => (
              <SwiperSlide key={id}>
                <div className="relative w-full h-[35vh] sm:h-[45vh] md:h-[60vh] rounded-xl overflow-hidden">
                  <img
                    src={slide.image}
                    alt={`Slider image ${id + 1}`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {/* Text overlay */}
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-gradient-to-b from-black/35 to-transparent rounded-md p-3 max-w-xs">
                    <h3 className="text-amber-500 text-2xl font-semibold mb-3">{slide.title}</h3>
                    <p className="text-white leading-relaxed">{slide.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 rounded-b-xl overflow-hidden z-50">
            <div
              className="h-1 bg-amber-500 transition-all duration-75 linear progress-fill"
              ref={progressBarRef}
            />
          </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

