import { motion } from 'framer-motion';

const Abouts = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero & About Section */}
      <section className="relative text-white py-24 overflow-hidden">
        {/* Simplified Background */}
        <div className="absolute inset-0">
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/95 z-10"></div>
          
          {/* Minimal subtle particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute top-0 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 0.8 + 0.3}px`,
                height: `${Math.random() * 0.8 + 0.3}px`,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              initial={{ y: -20 }}
              animate={{
                y: "100vh",
                x: Math.random() * 5 - 2.5,
              }}
              transition={{
                duration: Math.random() * 50 + 70,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 20,
              }}
            />
          ))}
          
          {/* Static subtle dots */}
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
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            {/* Simple Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-24 h-24 mx-auto mb-8"
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3"/>
                <path d="M30 50H70M50 30V70" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.3"/>
              </svg>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="text-white">About</span>
              <span className="text-gray-300 ml-3">BlazingTek</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto bg-white/5 px-6 py-4 rounded-lg border border-gray-700">
              <span className="font-semibold text-white">Pioneering African Innovation</span> 
              <span className="text-gray-400"> through </span>
              <span className="font-semibold text-white">Advanced Robotics & AI</span>
            </p>
          </motion.div>

          {/* Mission & Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  At BlazingTek, we're revolutionizing African technology through advanced robotics solutions, 
                  AI integration, and custom automation systems. Based in Harare, Zimbabwe, we empower 
                  educational institutions, research facilities, and industries with cutting-edge robotic 
                  tools, AI-powered training, and innovative technological systems tailored for African 
                  challenges and opportunities.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To bridge Africa's technology gap by becoming the continent's leading robotics innovation hub. 
                  We envision a future where African-developed robotic solutions drive sustainable development, 
                  foster local expertise, and position Africa at the forefront of the Fourth Industrial Revolution. 
                  Our goal is to create a self-sustaining ecosystem of robotics talent and innovation across emerging markets.
                </p>
              </div>
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Get In <span className="text-gray-300">Touch</span>
              </h2>
              
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Connect with Africa's premier robotics innovation team
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {/* Phone */}
              <motion.a
                href="tel:+263788605607"
                className="group relative"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl text-center p-8 hover:border-white/30 transition-all duration-300">
                  <div className="relative mb-6">
                    <div className="relative w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-white text-lg font-medium">+263 788 605 607</p>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">
                      Robotics Solutions Hotline
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:info@blazingtek.co"
                className="group relative"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl text-center p-8 hover:border-white/30 transition-all duration-300">
                  <div className="relative mb-6">
                    <div className="relative w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-white text-lg font-medium">info@blazingtek.co</p>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">
                      Innovation & Partnership Inquiries
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* Location */}
              <motion.div
                className="group relative"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl text-center p-8 hover:border-white/30 transition-all duration-300">
                  <div className="relative mb-6">
                    <div className="relative w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-white text-lg font-medium">Harare, Zimbabwe</p>
                  <div className="mt-4">
                    <span className="text-sm text-gray-500">
                      African Robotics Innovation Hub
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
                className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Innovation Hours</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">Mon - Fri</span>
                    <span className="text-white font-semibold bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-lg">8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white font-semibold bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-lg">9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-gray-500 font-semibold bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-lg">Robotics R&D</span>
                  </li>
                </ul>
              </motion.div>

              {/* Timezone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white">Global Robotics Time</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Local Innovation Time</p>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3">
                      <p className="text-white text-lg font-semibold">Central Africa Time (CAT)</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Collaboration Offset</p>
                    <div className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3">
                      <p className="text-white text-lg font-semibold">UTC +2 • Robotics Never Sleeps</p>
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