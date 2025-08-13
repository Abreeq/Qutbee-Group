import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose}) {
    const handleBackdropClick = (e) => {
      // If the clicked element is the backdrop itself, close the modal
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

      return (
        <AnimatePresence>
          {isOpen && (
            <div onClick={handleBackdropClick} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeIn" }}
                className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md md:max-w-lg relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-[var(--gold-deep)] hover:text-[var(--gold-classic)] cursor-pointer"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
    
                {/* Form Heading */}
                <h2 className="text-2xl heading-gradient font-bold text-center mt-4 mb-6 text-navy-800">Start Your Investment Journey</h2>
    
                <form className="space-y-4" >
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[var(--gold-soft)] focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                            required
                        />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[var(--gold-soft)] focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                            required
                        />
                        </div>
                    </div>

                    {/* Email Address */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                        </label>
                        <input
                        type="email"
                        name="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[var(--gold-soft)] focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                        required
                        />
                    </div>
                    {/* Number */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                        </label>
                        <input
                        type="number"
                        name="number"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[var(--gold-soft)] focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                        required
                        />
                    </div>

                    {/* Investment Interest (Select) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Investment Interest
                        </label>
                        <select
                          name="investmentInterest"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-[var(--gold-soft)] focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                          required
                         >
                          <option hidden>Select an option</option>
                          <option>Real Estate</option>
                          <option>Business</option>
                          <option>Technology</option>
                          <option>Education</option>
                          <option>Sports</option>
                        </select>
                    </div>

                    {/* Text Area */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                         Message
                        </label>
                        <textarea name="textarea" cols="10" rows="2"
                           className="w-full text-base px-4 py-2 rounded-lg border border-gray-300 focus:border-[var(--gold-soft)] focus:ring-4 focus:ring-amber-100 outline-none transition-all"
                          >

                        </textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="btn btn-primary w-full mt-3 cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>

              </motion.div>
            </div>
          )}
        </AnimatePresence>
      );  
}
