import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
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
                <p className="text-gray-600">contact@qutbeegroup.com</p>
                <p className="text-gray-600">support@qutbeegroup.com</p>
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
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-gray-600">+1 (555) 987-6543</p>
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
                <p className="text-gray-600">123 Financial District</p>
                <p className="text-gray-600">New York, NY 10004</p>
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
  )
}

export default Contact