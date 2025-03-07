import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
    {
      title: "Luxury Real Estate",
      desc: "Exclusive high-end properties offering exceptional investment opportunities.",
      image:
        "https://images.unsplash.com/photo-1489516408517-0c0a15662682?q=80&w=1974&auto=format&fit=crop&dpr=1&ixlib=rb-1.2.1",
    },
    {
      title: "Tech Innovation Hub",
      desc: "Pioneering the next generation of technology and AI-driven solutions.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Business Consulting",
      desc: "Expert guidance and strategic solutions to accelerate business growth.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];
  

const OurProjects = () => {
  return (
    <section
      id="projects"
      className="section relative py-16"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 bg-white/60" /> {/* Low-opacity overlay */}

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-amber-600 font-semibold text-lg md:text-xl mb-4 block">
            Our Projects
          </span>
          <h2 className="heading text-gray-800 mb-6">
            Transforming <span className="text-amber-600">Visions</span> into
            Reality
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our <span className="text-amber-600 font-semibold">
              flagship projects
            </span>{" "}
            designed for growth and sustainability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.7 }}
              transition={{ delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-xl shadow-md shadow-amber-200 bg-white hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-100/50 transition-all duration-700"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-60 transition-all duration-500" /> {/* Card Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-2xl text-white font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-200 mb-6">{project.desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center bg-amber-500 text-white px-5 py-2 rounded-full shadow-lg hover:bg-amber-600 transition-all"
                >
                  Learn More <ArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white pointer-events-none" />
    </section>
  );
};

export default OurProjects;
