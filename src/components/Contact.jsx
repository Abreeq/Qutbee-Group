import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Check, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className='absolute inset-0 opacity-10'   
      style={{
      backgroundImage: "url('/dotted2.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
      }}
      ></div>

      <div className="max-w-7xl mx-auto px-1 sm:px-6 lg:px-8; relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-[var(--gold-deep)] font-medium mb-4 block">Contact Us</span>
          <h2 className="heading heading-gradient mb-6">Let's Start Your Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your investment strategy? Our team is here to help you achieve your financial goals.
          </p>
        </motion.div>

        <div className='relative flex flex-col lg:flex-row gap-7'>
          <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              className='w-full lg:w-1/2 space-y-6'
            >
              <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--gold-classic)] flex items-center gap-3'>
                Reach Out 
                <ArrowUpRight className='w-8 h-8 md:w-10 md:h-10' strokeWidth={3}/>
              </h2>
              <div className='my-5 text-gray-600'>
                <p>Have a question or need assistance?</p>
                <p>Reach out to our dedicated support team.</p>
                <p>We are here to help with any inquiries you may have.</p>
              </div>
          
              {/* points */}
              <div className='space-y-3 text-gray-800'>
                <p className='text-sm flex items-center gap-3'>
                  <span className='border border-[var(--gold-classic)] flex items-center justify-center rounded-full p-0.5'>
                    <Check className='w-4 h-4 text-[var(--gold-deep)]'/>
                  </span>
                  Personalized Assistance
                </p>
                <p className='text-sm flex items-center gap-3'>
                  <span className='border border-[var(--gold-classic)] flex items-center justify-center rounded-full p-0.5'>
                    <Check className='w-4 h-4 text-[var(--gold-deep)]'/>
                  </span>
                  Timely Response 
                </p>
                <p className='text-sm flex items-center gap-3'>
                  <span className='border border-[var(--gold-classic)] flex items-center justify-center rounded-full p-0.5'>
                    <Check className='w-4 h-4 text-[var(--gold-deep)]'/>
                  </span>
                  Comprehensive Support
                </p>
              </div>
              
                
              {/* social icons */}
              <div className='flex items-center mt-10 space-x-4 flex-wrap space-y-3 sm:space-y-0'>
                <a href='#' target='_blank' className="border border-[var(--gold-classic)]/40 flex items-center justify-center rounded-xl p-3 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md shadow-[0_4px_16px_rgba(210,172,71,0.12)] hover:shadow-[0_6px_20px_rgba(210,172,71,0.2)] hover:border-[var(--gold-classic)]/60 transition-all duration-200">
                  <Twitter className="w-6 h-6 text-[var(--gold-deep)]" />
                </a>
                <a href='#' target='_blank' className="border border-[var(--gold-classic)]/40 flex items-center justify-center rounded-xl p-3 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md shadow-[0_4px_16px_rgba(210,172,71,0.12)] hover:shadow-[0_6px_20px_rgba(210,172,71,0.2)] hover:border-[var(--gold-classic)]/60 transition-all duration-200">
                  <Facebook className="w-6 h-6 text-[var(--gold-deep)]" />
                </a>
                <a href='#' target='_blank' className="border border-[var(--gold-classic)]/40 flex items-center justify-center rounded-xl p-3 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md shadow-[0_4px_16px_rgba(210,172,71,0.12)] hover:shadow-[0_6px_20px_rgba(210,172,71,0.2)] hover:border-[var(--gold-classic)]/60 transition-all duration-200">
                  <Instagram className="w-6 h-6 text-[var(--gold-deep)]" />
                </a>
                <a href='https://www.linkedin.com/company/alqutbeegroup/' target='_blank' className="border border-[var(--gold-classic)]/40 flex items-center justify-center rounded-xl p-3 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md shadow-[0_4px_16px_rgba(210,172,71,0.12)] hover:shadow-[0_6px_20px_rgba(210,172,71,0.2)] hover:border-[var(--gold-classic)]/60 transition-all duration-200">
                  <Linkedin className="w-6 h-6 text-[var(--gold-deep)]" />
                </a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              className='w-full lg:w-1/2 card space-y-5 p-3 sm:p-6 rounded-2xl border border-[var(--gold-classic)]/30 bg-gradient-to-br from-white/30 to-white/20 backdrop-blur-sm shadow-[0_8px_32px_rgba(210,172,71,0.1)]'
            >
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 sm:py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-[var(--gold-soft)] focus:ring-2 focus:ring-amber-100 focus:bg-white outline-none transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 sm:py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-[var(--gold-soft)] focus:ring-2 focus:ring-amber-100 focus:bg-white outline-none transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 sm:py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-[var(--gold-soft)] focus:ring-2 focus:ring-amber-100 focus:bg-white outline-none transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">Investment Interest</label>
                <select className="w-full px-4 py-2 sm:py-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm focus:border-[var(--gold-soft)] focus:ring-2 focus:ring-amber-100 focus:bg-white outline-none transition-all duration-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <option>Portfolio Management</option>
                  <option>Wealth Planning</option>
                  <option>Private Equity</option>
                </select>
              </div>
              
              <button type="submit" className="btn btn-primary w-full mt-3 sm:mt-6">
                Send Message
              </button>
            </motion.form>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12">
            {/* Mail */}
            <div className="flex flex-col items-center rounded-2xl border border-[var(--gold-classic)]/60 bg-gradient-to-b from-white/60 to-white/40 backdrop-blur-lg p-3 sm:p-5 shadow-[0_8px_32px_rgba(210,172,71,0.08)] hover:shadow-[0_12px_40px_rgba(210,172,71,0.15)] transition-all duration-300">
              <span className="border border-[var(--gold-classic)]/40 flex items-center justify-center rounded-xl p-2 mb-3 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md shadow-[0_4px_16px_rgba(210,172,71,0.12)]">
                <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-[var(--gold-deep)]" />
              </span>
              <h3 className="text-lg sm:text-xl font-bold my-2 text-[var(--gold-deep)]">Email Us</h3>
              <p className="text-gray-600">info@qutbee.com</p>
              <p className="text-gray-600">support@qutbee.com</p>
            </div>

            {/* Call */}
            <div className="flex flex-col items-center rounded-2xl border border-[var(--gold-classic)]/60 bg-gradient-to-b from-white/60 to-white/40 backdrop-blur-lg p-3 sm:p-5 shadow-[0_8px_32px_rgba(210,172,71,0.08)] hover:shadow-[0_12px_40px_rgba(210,172,71,0.15)] transition-all duration-300">
              <span className="border border-[var(--gold-classic)]/40 flex items-center justify-center rounded-xl p-2 mb-3 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md shadow-[0_4px_16px_rgba(210,172,71,0.12)]">
                <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-[var(--gold-deep)]" />
              </span>
              <h3 className="text-lg sm:text-xl font-bold my-2 text-[var(--gold-deep)]">Call Us</h3>
              <p className="text-gray-600">+971 509853664</p>
              <p className="text-gray-600">+91 9149976788</p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center rounded-2xl border border-[var(--gold-classic)]/60 bg-gradient-to-b from-white/60 to-white/40 backdrop-blur-lg p-3 sm:p-5 shadow-[0_8px_32px_rgba(210,172,71,0.08)] hover:shadow-[0_12px_40px_rgba(210,172,71,0.15)] transition-all duration-300">
              <span className="border border-[var(--gold-classic)]/40 flex items-center justify-center rounded-xl p-3 mb-2 bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md shadow-[0_4px_16px_rgba(210,172,71,0.12)]">
                <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-[var(--gold-deep)]" />
              </span>
              <h3 className="text-lg sm:text-xl font-bold my-2 text-[var(--gold-deep)]">Visit Us</h3>
              <p className="text-gray-600">Abu Dhabi</p>
              <p className="text-gray-600">United Arab Emirates</p>
            </div>
          </div>

      </div>  
    </section>
  );
};

export default Contact;
