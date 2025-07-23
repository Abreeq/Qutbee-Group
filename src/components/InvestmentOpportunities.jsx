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
      
      {opportunities.map((item, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInVariants}
          className={`relative flex flex-col md:flex-row items-center h-screen w-full px-8 md:px-20 ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-1/2 h-[55%] md:h-[65%]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              <span className="text-amber-600">{item.title}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mt-6 leading-relaxed">
              {item.desc}
            </p>
            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="px-8 py-3 bg-amber-600 text-white text-lg rounded-lg shadow-md hover:bg-amber-700 transition duration-300 flex items-center gap-2">
                Invest Now <ArrowRightCircle className="w-5 h-5" />
              </button>
              <button className="px-8 py-3 border-2 border-amber-600 text-amber-600 text-lg rounded-lg shadow-md hover:bg-amber-600 hover:text-white transition duration-300">
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
