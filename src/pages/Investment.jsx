import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Headset } from 'lucide-react';
import background from '../assets/background.svg'

export default function Investment() {

  const investmentCards = [
    {
      image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=800&q=80",
      heading: "Qutbee Technologies",
      description: "We offer a comprehensive range of managed IT support packages for all sizes of business.",
      Link: "#1",
    },
    {
      heading: "Iqaraat",
      description: "We offer a comprehensive range of managed IT support packages for all sizes of business.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&q=80",
      Link: "#2",
    },
    {
      heading: "Biznis360",
      description: "We offer a comprehensive range of managed IT support packages for all sizes of business.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80", 
      Link: "#3",
    },
    {
      heading: "Qutbee Labs",
      description: "Strategic real estate investments for sustainable growth and high returns.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      Link: "#4",
    },
  ];

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
                Our Investments
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              >
                At Qutbee Group, we showcase successful investments that highlight our expertise in finance and consulting. Discover how our tailored solutions drive business growth.
              </motion.p>

            </div>
        </div>
    </section>
    
    <div className="relative">
        <div className="absolute inset-0 -z-10 overflow-hidden bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${background})`, opacity: 0.2 }}
        ></div>
        
        <div className="section py-16 px-4 sm:px-6 lg:px-8">
          <div className="container">
                <div className="columns-1 md:columns-2 gap-10 space-y-10">
          
                  {investmentCards.map((card,i)=>{
                    // Determine position within the row (0 or 1)
                    const positionInRow = i % 2;
                    // Determine the row number (0-based)
                    const rowNumber = Math.floor(i / 2);

                    const isTall =
                    (rowNumber % 2 === 0 && positionInRow === 0) || // even row & first image
                    (rowNumber % 2 === 1 && positionInRow === 1);  // odd row & second image

                    return (
                      <Link key={i} to={card.Link} className="group break-inside-avoid overflow-hidden">
                        <div  className={`w-full overflow-hidden ${
                              isTall ? 'h-80 md:h-[42rem]' : 'h-80 md:h-[32rem]'
                            }`}>
                          <img
                            src={card.image}
                            alt={card.heading}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="py-6">
                          <h3 className="text-2xl font-semibold mb-1 text-gray-700">{card.heading}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
                        </div>
                      </Link>
                      );
                    })}

                </div>

          </div>     
        </div>  

        <div className="container py-10">
            <div className="relative bg-gradient-to-b from-white/50 to-white/30 backdrop-blur-lg shadow-[0_8px_32px_rgba(210,172,71,0.5)] border border-[var(--gold-classic)]/60 rounded-md gap-6 sm:gap-10 flex flex-col lg:flex-row items-center justify-center px-4 py-18">
                  <h3 className='text-3xl md:text-5xl font-semibold mb-1 text-center md:text-left text-[var(--gold-classic)] max-w-xl'> 
                    We will Deliver you the best experience
                  </h3>
                  <a href='tel:+919149976788' className="px-6 md:px-8 py-4 md:py-5 bg-[var(--gold-classic)] font-semibold text-lg md:text-xl text-white rounded-lg shadow-md hover:bg-[var(--gold-deep)] transition duration-300">
                    +91 9149976788
                  </a>
                  {/* icon */}
                  <div className='absolute -top-8 left-1/2 transform md:left-8 -translate-x-1/2 md:translate-x-0 text-white bg-[var(--gold-classic)] rounded-full w-24 h-24 flex items-center justify-center'>
                    <Headset className='w-10 h-10'/>
                  </div>
            </div>
        </div>
    </div>
  </>
  )
}