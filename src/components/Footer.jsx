import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"; // Ensure you have 'lucide-react' installed

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

const Footer = () => {
  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5" />
      
      <div className="relative pt-24 pb-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-6">Qutbee</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Your trusted partner in investment management and wealth creation, delivering excellence since 2000.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/alqutbeegroup/" target="_blank" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="w-5 h-5 text-white hover:text-[var(--gold-soft)]" />
                </a>
                
                {/* twitter logo */}
                <a
                  href="#"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-white hover:text-[var(--gold-soft)]"
                  >
                    <path d="M18.154 2H21.8L14.4 10.152L23.2 22H16.46L11.168 15.184L5.2 22H1.546L9.446 13.304L1 2H7.96L12.728 8.312L18.154 2ZM16.888 20H18.748L7.412 3.888H5.434L16.888 20Z" />
                  </svg>
                </a>

                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Facebook className="w-5 h-5 text-white hover:text-[var(--gold-soft)]" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Instagram className="w-5 h-5 text-white hover:text-[var(--gold-soft)]" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className="footer-link">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-4">
                {["Portfolio Management", "Wealth Planning", "Private Equity", "Investment Advisory"].map(
                  (service, index) => (
                    <li key={index}>
                      <a href="#" className="footer-link">
                        {service}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
              <ul className="space-y-4">
                {["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"].map((legal, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">
                      {legal}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-16 pt-8 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Qutbee Group. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
