import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Headset } from 'lucide-react';
import bgPattern from '../assets/bg-pattern.png'

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
            style={{ backgroundImage: `url(${bgPattern})`, opacity: 0.7 }}
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
            <div className="relative bg-[var(--gold-classic)] rounded-md gap-6 sm:gap-10 flex flex-col lg:flex-row items-center justify-center px-4 py-20">
                  <h3 className='text-3xl md:text-5xl font-semibold mb-1 text-center md:text-left text-white max-w-xl'> 
                    We will Deliver you the best experience
                  </h3>
                  <a href='tel:+919149976788' className="px-6 md:px-8 py-4 md:py-5 bg-black font-semibold text-lg md:text-xl text-white rounded-lg shadow-md hover:bg-[var(--gold-deep)] transition duration-300">
                    +91 9149976788
                  </a>
                  {/* icon */}
                  <div className='absolute -top-8 left-1/2 transform md:left-8 -translate-x-1/2 md:translate-x-0 text-white bg-black/90 rounded-full w-24 h-24 flex items-center justify-center'>
                    <Headset className='w-10 h-10'/>
                  </div>
            </div>
        </div>
    </div>
  </>
  )
}



// import React from 'react';
// const Investments = () => {
//   return (
// <section>
//      <div className="relative isolate min-h-screen flex items-center justify-center px-6 lg:px-10">
//         Hero Section
//         <div className="relative isolate h-[620px] px-6 pt-14 lg:px-10">
//               <div
//               className="absolute inset-0 -z-10 overflow-hidden bg-no-repeat bg-center bg-cover"
//               style={{ backgroundImage: url(${vector}), opacity: 0.5 }}
//             >
//               </div>
      

//           Main Content
//           <div className="mx-auto max-w-2xl py-20 sm:py-32 lg:py-27">

//             <div className="text-center">
//               <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
//                 Our Investments
//               </h1>
//               <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
//                 Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
//               </p>

//             </div>
//           </div>
//         </div>
//      </div>

      
//       <div className="grid grid-cols-2 grid-rows-2 gap-4 max-w-4xl py-8 mx-auto">
//             Top-left (Large)
//           <div className="w-[539px] h-[560px] ml-35">
//             <img
//               src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=800&q=80"
//               alt="Large Top Left"
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <p className="mt-2 text-center text-lg font-semibold">ABC</p>
//           </div>


//           Top-right (Small)
//           <div className="w-[559px] h-[423px] ml-65 ">
//             <img
//               src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=400&q=80"
//               alt="Small Top Right"
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <p className="mt-2 text-center text-lg font-semibold">ABC</p>
//           </div>


//           Bottom-left (Small)
//           <div className="w-[539px] h-[423px] ml-35 mt-25">
//             <img
//               src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=400&q=80"
//               alt="Small Bottom Left"
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <p className="mt-2 text-center text-lg font-semibold">ABC</p>
//           </div> 

//           Bottom-right (Large)
//           <div className="w-[539px] h-[560px]  ml-65  -mt-[38px]">
//             <img
//               src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=800&q=80"
//               alt="Large Bottom Right"
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <p className="mt-2 text-center text-lg font-semibold">ABC</p>
//           </div> 
//       </div>


//       <div className="relative py-24 sm:py-19 bg-white">
//           <div
//           className="absolute inset-0 -z-10 overflow-hidden bg-no-repeat bg-center bg-cover"
//           style={{ backgroundImage: url(${vector}), opacity: 0.5 }}
//         >
//           </div>
//         <div className="mx-auto max-w-6xl px-10 pl-30 pr-10 py-5 bg-gray-700 rounded-md relative w-full h-[200px]">
//           <dl className="text-left">
//             <div className="flex flex-col gap-y-4"> 
//               <div>
//       <div className="absolute top-[-45px] left-9 w-24 h-24 bg-[#0a1534] rounded-full shadow-lg flex items-center justify-center">
//                 <img
//                   src={talk}
//                   alt="Support Icon"
//                   className="w-16 h-16 object-contain"
//                 />
//               </div>

              
//               </div>
//               <dd
//                 className=" text-left order-first text-3xl font-semibold tracking-tight sm:text-5xl my-10 mx-12"
//                 style={{ color: '#ae8625' }}
//               >
//                 We will Deliver you the<br/> best experience
//               </dd>
//                 <div className="mt-10 flex items-center justify-center gap-x-6">


//               <a
//                   href="#"
//                   className="absolute top-15 right-30 rounded-md bg-indigo-600 px-8 py-5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-2 "
//                   >
//                       +91 9149976788
//                   </a>
//                   </div>
//             </div>
//           </dl>
//         </div>
//       </div>


// </section>
      
//   );
// };

// export default Investments;