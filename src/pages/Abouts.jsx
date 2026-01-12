import { motion } from 'framer-motion';

const Abouts = () => {
  return (
    <div className="min-h-screen bg-[#0A0F14]">
      {/* Combined Hero & About Section */}
      <section className="relative text-white py-24 overflow-hidden">
        {/* Subtle background pattern - matches Home */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern 
                id="dots-pattern" 
                x="0" 
                y="0" 
                width="150" 
                height="150" 
                patternUnits="userSpaceOnUse"
              >
                <circle 
                  cx="75" 
                  cy="75" 
                  r="0.8" 
                  fill="#FFFFFF"
                  fillOpacity="0.1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header - Matched to Home's scale */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">
                About
              </span>
            </h1>
            
            {/* Changed from text-xl to text-lg */}
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Pioneering African innovation through cutting-edge technology
            </p>
          </motion.div>

          {/* Mission & Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
              {/* Changed from leading-relaxed to default for consistency */}
              <p className="text-gray-300">
                BlazingTek is at the forefront of technological innovation in Africa, specializing in 
                advanced robotics solutions, AI integration, and custom technological systems. Based in 
                Harare, Zimbabwe, we empower educational institutions, research facilities, and industries 
                with cutting-edge tools and training.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300">
                To bridge the technology gap while fostering local expertise and driving sustainable 
                technological advancement across the African continent. We aim to become the leading 
                technology partner for innovation and development in emerging markets.
              </p>
            </motion.div>
          </div>

          {/* Contact Section */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              {/* Option 1: Match Home's h1 scale */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Get In <span className="text-white">Touch</span>
              </h2>
              
              {/* Changed from text-xl to text-lg */}
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                We're here to help you with innovative technology solutions
              </p>
            </motion.div>

            {/* Contact Cards - text sizes already match (text-lg) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {/* Phone */}
              <motion.a
                href="tel:+263788605607"
                className="group relative"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative bg-white/5 border border-white/10 rounded-xl text-center p-8 hover:border-white/20 transition-all duration-300">
                  <div className="relative mb-6">
                    <div className="relative w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300 text-lg font-medium">+263 788 605 607</p>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">
                      Tap to call
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* Email - same structure */}
              <motion.a
                href="mailto:info@blazingtek.co"
                className="group relative"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative bg-white/5 border border-white/10 rounded-xl text-center p-8 hover:border-white/20 transition-all duration-300">
                  <div className="relative mb-6">
                    <div className="relative w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300 text-lg font-medium">info@blazingtek.co</p>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">
                      Tap to email
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* Location - same structure */}
              <motion.div
                className="group relative"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative bg-white/5 border border-white/10 rounded-xl text-center p-8 hover:border-white/20 transition-all duration-300">
                  <div className="relative mb-6">
                    <div className="relative w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="h-8 w-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300 text-lg font-medium">Harare, Zimbabwe</p>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">
                      Central Africa
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Business Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-6">Business Hours</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">Mon - Fri</span>
                    <span className="text-white font-semibold bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white font-semibold bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-gray-500 font-semibold bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">Closed</span>
                  </li>
                </ul>
              </motion.div>

              {/* Timezone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-6">Timezone</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Local Time</p>
                    <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                      <p className="text-white text-lg font-semibold">Central Africa Time (CAT)</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">UTC Offset</p>
                    <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                      <p className="text-white text-lg font-semibold">UTC +2</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abouts;