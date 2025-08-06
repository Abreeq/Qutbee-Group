import { ChevronRight } from "lucide-react";
import React from "react";
import bgblack from '../assets/bgblack.svg'

const cards = [
  {
    heading: "Qutbee Technologies",
    description: "We offer a comprehensive range of managed IT support packages for all sizes of business.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    buttonText: "Learn More",
    buttonLink: "#1",
  },
  {
    heading: "Iqaraat",
    description: "We offer a comprehensive range of managed IT support packages for all sizes of business.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    buttonText: "Learn More",
    buttonLink: "#2",
  },
  {
    heading: "Biznis360",
    description: "We offer a comprehensive range of managed IT support packages for all sizes of business.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    buttonText: "Learn More",
    buttonLink: "#3",
  },
  {
    heading: "Qutbee Labs",
    description: "Strategic real estate investments for sustainable growth and high returns.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    buttonText: "Learn More",
    buttonLink: "#4",
  },
  {
    heading: "Expert Business Consulting",
    description: "Innovative technology investments driving business transformation and scalability.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    buttonText: "Learn More",
    buttonLink: "#5",
  },
  {
    heading: "Qutbee Technologies",
    description: "Tailored advisory services for strategic growth and competitive advantage.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    buttonText: "Learn More",
    buttonLink: "#6",
  },
];

export default function BusinessCards() {
  return (
    // <div className="section bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="section relative py-16 px-4 sm:px-6 lg:px-8">

          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url(${bgblack})` }}
          ></div>

       <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {cards.map((card, id) => {
                const isSixAndWide = cards.length === 6 && (id === 4 || id === 5);
                return (
                    <div key={id}
                        className={`group bg-white rounded-lg shadow-md shadow-[rgba(210,172,71,0.2)] p-5 flex flex-col items-center text-center border border-[var(--gold-classic)]/30 transition hover:shadow-2xl hover:-translate-y-1 ${
                            isSixAndWide ? "lg:col-span-2" : ""
                        }`}
                    >
                        <h3 className="text-2xl font-semibold mb-3 text-[var(--gold-classic)]">{card.heading}</h3>
                        <p className="flex-1 leading-relaxed text-gray-600 mb-8">{card.description}</p>
                         <div className="relative flex items-center justify-center mb-4">
                            <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-4 w-16 z-0 rounded-full blur-sm bg-[rgba(210,172,71,0.4)]" />
                            <img
                            src={card.image}
                            alt={card.heading}
                            className="w-20 h-20 object-cover rounded-full transition-transform duration-300 group-hover:-translate-y-3 group-hover:rotate-10 z-10 shadow"
                            />
                        </div>
                        
                        <a href={card.buttonLink} className="inline-flex items-center justify-center text-[var(--gold-classic)] p-1 font-medium
                            rounded-md hover:bg-[var(--gold-classic)] hover:text-white transition duration-300 ">
                           {card.buttonText} <ChevronRight className="ml-1" />
                        </a>
                    </div>
                );
                })}
            </div>
       </div>
    </div>
  );
}
