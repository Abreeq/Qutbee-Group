import React, { useEffect, useState } from 'react';
import { Menu as MenuIcon, X as XIcon, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from '../assets/Qutbeelogo.webp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#vision', label: 'Vision' },
    { href: '#business', label: 'Our Business' },
    { href: '#investment', label: 'Investment' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      {/* 🔹 Top Bar */}
      <div className="bg-gradient-to-r from-[var(--gold-deep)] via-[var(--gold-classic)] to-black/80 text-white py-3 hidden md:block">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            {/* <span>📞 +91 9876543210</span> */}
            <span>✉️ business@qutbee.com</span>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/company/alqutbeegroup/" target="_blank" className="hover:text-[var(--gold-deep)]"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[var(--gold-deep)]"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[var(--gold-deep)]"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[var(--gold-deep)]"><Instagram className="w-5 h-5"/></a>
          </div>
        </div>
      </div>

      {/* 🔹 Navbar */}
      <nav className={`fixed w-full z-50 transition[top left] duration-300 ${isScrolled ? 'top-0 left-0 py-2 bg-white/90 backdrop-blur-md shadow-lg' : 'py-2 bg-transparent'}`}>
        <div className="container">
          <div className="flex items-center justify-between">
            <a href="#" className="text-3xl font-bold heading-gradient">
              <img src={logo} alt="logo" className="h-20 w-auto object-contain"/>
            </a>

            <button
              className="lg:hidden text-[var(--gold-deep)] hover:bg-amber-50 p-2 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>

            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`nav-link ${activeSection === href.slice(1) ? 'active' : ''}`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl"
            >
              <div className="container py-6 space-y-4">
                {navLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className={`block py-2 text-lg ${activeSection === href.slice(1) ? 'text-[var(--gold-deep)]' : 'text-gray-600'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                {/* <a
                  href="#contact"
                  className="btn btn-primary w-full justify-center mt-6"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </a> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
