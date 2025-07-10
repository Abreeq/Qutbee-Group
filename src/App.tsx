import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation, Briefcase, TrendingUp, Users, Mail, Phone, MapPin, ChevronRight, Menu, X, ArrowRight, Globe, Shield, Award, Linkedin, Twitter } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar */}
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

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-32 pb-20 relative overflow-hidden hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 to-white pointer-events-none" />
        <div className="absolute inset-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }} />
        
        <div className="container relative">
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            className="mb-20"
          >
            <SwiperSlide>
              <div className="text-center max-w-5xl mx-auto">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="inline-block text-amber-600 font-medium mb-6"
                >
                  Welcome to the Future of Investment
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="heading heading-gradient mb-8"
                >
                  Transforming Wealth Through Strategic Innovation
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
                >
                  Experience unparalleled investment management with our data-driven approach and personalized strategies designed for your success.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center"
                >
                  <a href="#contact" className="btn btn-primary">
                    Start Investing <ArrowRight className="ml-2" />
                  </a>
                  <a href="#about" className="btn bg-white text-amber-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Learn More
                  </a>
                </motion.div>
              </div>
            </SwiperSlide>
          </Swiper>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Globe, title: "Global Reach", value: "20+ Countries" },
              { icon: Shield, title: "Assets Protected", value: "$10B+" },
              { icon: Award, title: "Industry Awards", value: "50+" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.title}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white pointer-events-none" />
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-white">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-amber-600 font-medium mb-4 block">Our Expertise</span>
            <h2 className="heading heading-gradient mb-6">Comprehensive Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of sophisticated investment services tailored to meet your financial goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Briefcase, 
                title: "Portfolio Management",
                desc: "Expert management of diversified investment portfolios tailored to your risk profile and goals",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              { 
                icon: TrendingUp, 
                title: "Wealth Planning",
                desc: "Comprehensive financial planning and strategy development for long-term wealth creation",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              },
              { 
                icon: Users, 
                title: "Private Equity",
                desc: "Exclusive access to high-potential private equity opportunities and venture capital investments",
                image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card group overflow-hidden"
              >
                <div className="relative h-48 -mx-8 -mt-8 mb-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <service.icon className="absolute bottom-4 right-4 w-8 h-8 text-white z-20" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <a href="#contact" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700">
                  Learn More <ChevronRight className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-gradient-to-b from-amber-50/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-600 font-medium mb-4 block">About Us</span>
              <h2 className="heading heading-gradient mb-8">Legacy of Excellence in Investment Management</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over two decades of experience, Qutbee Group has established itself as a leader in providing sophisticated investment solutions to discerning clients worldwide. Our approach combines innovative technology with traditional investment wisdom.
              </p>
              <ul className="space-y-6">
                {[
                  "Industry-leading research and analysis",
                  "Personalized investment strategies",
                  "Global market access and opportunities",
                  "Dedicated wealth management teams"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-4" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl rotate-6 blur-xl opacity-20" />
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Modern office building"
                className="rounded-2xl relative shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-amber-600 font-medium mb-4 block">Contact Us</span>
            <h2 className="heading heading-gradient mb-6">Let's Start Your Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your investment strategy? Our team is here to help you achieve your financial goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="card group">
                <div className="flex items-start">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-100 rounded-full scale-150 opacity-0 group-hover:opacity-20 transition-all duration-700" />
                    <Mail className="w-8 h-8 text-amber-600 mr-6 relative" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email Us</h3>
                    <p className="text-gray-600">support@qutbee.com</p>
                    <p className="text-gray-600">info@qutbee.com</p>
                  </div>
                </div>
              </div>
              <div className="card group">
                <div className="flex items-start">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-100 rounded-full scale-150 opacity-0 group-hover:opacity-20 transition-all duration-700" />
                    <Phone className="w-8 h-8 text-amber-600 mr-6 relative" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Call Us</h3>
                    <p className="text-gray-600">+971 509853664</p>
                    <p className="text-gray-600">+91 9149976788</p>
                  </div>
                </div>
              </div>
              <div className="card group">
                <div className="flex items-start">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-100 rounded-full scale-150 opacity-0 group-hover:opacity-20 transition-all duration-700" />
                    <MapPin className="w-8 h-8 text-amber-600 mr-6 relative" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                    <p className="text-gray-600">Abu Dhabi</p>
                    <p className="text-gray-600">United Arab Emirates</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Investment Interest</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all">
                  <option>Portfolio Management</option>
                  <option>Wealth Planning</option>
                  <option>Private Equity</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] opacity-5" />
        <div className="relative pt-24 pb-12">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-2xl font-bold text-white mb-6">Qutbee</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  Your trusted partner in investment management and wealth creation, delivering excellence since 2000.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
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
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="footer-link">Portfolio Management</a></li>
                  <li><a href="#" className="footer-link">Wealth Planning</a></li>
                  <li><a href="#" className="footer-link">Private Equity</a></li>
                  <li><a href="#" className="footer-link">Investment Advisory</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Legal</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="footer-link">Privacy Policy</a></li>
                  <li><a href="#" className="footer-link">Terms of Service</a></li>
                  <li><a href="#" className="footer-link">Cookie Policy</a></li>
                  <li><a href="#" className="footer-link">Disclaimer</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 mt-16 pt-8 text-center">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} Qutbee Group. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;