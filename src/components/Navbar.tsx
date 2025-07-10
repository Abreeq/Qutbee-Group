import { motion , AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'

const Navbar = () => {

      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [activeSection, setActiveSection] = useState('home');
      const [isScrolled, setIsScrolled] = useState(false);


    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#services', label: 'Services' },
        { href: '#about', label: 'About' },
        { href: '#contact', label: 'Contact' }
      ];

  return (
          <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/90 backdrop-blur-md shadow-lg' : 'py-6 bg-transparent'}`}>
          <div className="container">
            <div className="flex items-center justify-between">
              <a href="#" className="text-3xl font-bold heading-gradient">
                Qutbee
              </a>
              
              <button 
                className="lg:hidden text-amber-600 hover:bg-amber-50 p-2 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                <a href="#contact" className="btn btn-primary">
                  Get Started
                </a>
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
                      className={`block py-2 text-lg ${activeSection === href.slice(1) ? 'text-amber-600' : 'text-gray-600'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    className="btn btn-primary w-full justify-center mt-6"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
  
  )
}

export default Navbar