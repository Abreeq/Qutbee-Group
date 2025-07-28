import React from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";

const opportunities = [
  {
    title: "Luxury Real Estate Investment for Long-Term Wealth Building",
    desc: "Investing in high-end properties across global hotspots, ensuring not just high returns but also stability and long-term appreciation. Our carefully selected properties in prime locations offer a blend of luxury and strong financial growth opportunities, making them a great addition to your investment portfolio.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
  },
  {
    title: "Tech Innovation: Funding the Next Generation of AI & Startups",
    desc: "The future belongs to technology-driven businesses. By investing in AI, machine learning, and automation startups, we provide a unique opportunity for high-risk, high-reward growth. Our portfolio includes cutting-edge companies that are redefining industries, pushing boundaries, and creating the next big thing.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
  },
  {
    title: "Renewable Energy: Powering the Future with Sustainable Solutions",
    desc: "Clean energy is the way forward. We focus on investments in solar, wind, and sustainable energy projects that not only offer strong financial returns but also contribute to a greener planet. With growing global demand, renewable energy investments are positioned for significant long-term value.",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } },
};

const FullScreenInvestment = () => {
  return (
    <section className="section relative w-full overflow-hidden">
       <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center"
        >
          <span className="text-amber-600 font-semibold text-lg md:text-xl mb-4 block">
            Our Investments
          </span>
          <h2 className="heading text-gray-800 mb-6">
           Smart <span className="text-amber-600">Investments</span> for Lasting Growth
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover our <span className="text-amber-600 font-semibold">portfolio</span> focused on sustainable value.
          </p>
        </motion.div>

        {opportunities.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInVariants}
            className={`relative flex flex-col lg:flex-row items-center gap-10 my-10 md:my-14 px-4 xl:px-10
            ${ index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse" }`}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full lg:w-1/2 h-[300px] lg:h-[460px] overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-2xl md:text-4xl font-bold text-amber-600 text-center md:text-left">
                {item.title}
              </h2>
              <p className="text-base md:text-lg text-gray-600 mt-4 md:mt-6 leading-relaxed text-justify md:text-left">
                {item.desc}
              </p>

              {/* Buttons */}
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-6 py-2 bg-amber-600 text-white text-lg rounded-lg shadow-md hover:bg-amber-700 transition duration-300 flex items-center justify-center gap-2">
                  Invest Now <ArrowRightCircle className="w-5 h-5" />
                </button>
                <button className="px-6 py-2 border-2 border-amber-600 text-amber-600 text-lg rounded-lg shadow-md hover:bg-amber-600 hover:text-white transition duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          </motion.div>
        ))}
        
    </section>
  );
};

export default FullScreenInvestment;