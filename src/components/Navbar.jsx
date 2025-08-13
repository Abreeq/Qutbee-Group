import React, { useEffect, useState } from 'react';
import { Menu as MenuIcon, X as XIcon, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from '../assets/Qutbeelogo.webp';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

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

  const businessSubmenu = [
    { label: "Biznis360", url: "http://biznis360.com/" },
    { label: "Iqaraat", url: "https://iqaraat.com/" },
    { label: "QutbeeTechnologies", url: "https://qutbee.com/" },
  ];
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#vision', label: 'Vision' },
    { href: '/business', label: 'Our Business', submenu: businessSubmenu },
    { href: '/investment', label: 'Investment' },
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
            <a href="#" className="hover:text-[var(--gold-deep)]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
            <path d="M18.154 2H21.8L14.4 10.152L23.2 22H16.46L11.168 15.184L5.2 22H1.546L9.446 13.304L1 2H7.96L12.728 8.312L18.154 2ZM16.888 20H18.748L7.412 3.888H5.434L16.888 20Z" />
            </svg>
            </a>
            <a href="#" className="hover:text-[var(--gold-deep)]"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[var(--gold-deep)]"><Instagram className="w-5 h-5"/></a>
          </div>
        </div>
      </div>

      {/* 🔹 Navbar */}
      <nav className={`fixed w-full z-50 transition[top left] duration-300 ${isScrolled ? 'top-0 left-0 py-2 bg-white/90 backdrop-blur-md shadow-lg' : 'py-2 bg-transparent'}`}>
        <div className="container">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-3xl font-bold heading-gradient">
              <img src={logo} alt="logo" className="h-20 w-auto object-contain"/>
            </Link>

            <button
              className="lg:hidden text-[var(--gold-deep)] hover:bg-amber-50 p-2 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>

             <div className="hidden lg:flex items-center gap-12">
              {navLinks.map(({ href, label, submenu }) => (
                submenu ? (
                  <div className="relative group" key={label}>
                    <Link
                      to={href}
                      className={`nav-link flex items-center gap-2 ${activeSection === label.toLowerCase() ? 'active' : ''}`}
                    >
                      {label}
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    <div className="absolute left-0 z-20 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200">
                      {submenu.map(({ label: subLabel, url }) => (
                        <a
                          key={subLabel}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-[var(--gold-classic)] whitespace-nowrap"
                        >
                          {subLabel}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={href}
                    to={href}
                    className={`nav-link ${activeSection === href.slice(1) ? 'active' : ''}`}
                  >
                    {label}
                  </Link>
                )
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
              <div className="container py-6 space-y-3">
                {navLinks.map(({ href, label, submenu }) => (
                  submenu ? (
                    <div key={label} className="flex flex-col">
                      <div className="flex w-full items-center py-2">
                        <Link
                          to={href}
                          className="text-lg text-gray-600"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {label}
                        </Link>
                        <button
                          type="button"
                          className="p-2 ml-1.5"
                          onClick={() =>
                            setOpenSubmenu(openSubmenu === label ? null : label)
                          }
                          aria-label={`${openSubmenu === label ? "Hide" : "Show"} submenu`}
                        >
                          <svg
                            className={`w-5 h-5 transform transition ${openSubmenu === label ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                          </svg>
                        </button>
                      </div>
                      {openSubmenu === label && (
                        <div className="pl-6">
                          {submenu.map(({ label: subLabel, url }) => (
                            <a
                              key={subLabel}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block py-2 text-gray-600 hover:text-[var(--gold-deep)]"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subLabel}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={href}
                      to={href}
                      className={`block py-2 text-lg ${activeSection === href.slice(1) ? "text-[var(--gold-deep)]" : "text-gray-600"}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </>
  );
};

export default Navbar;
