const Abouts = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Combined Hero & About Section */}
      <section className="relative text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-800 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-800 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                BlazingTek
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Pioneering African innovation through cutting-edge technology
            </p>
          </div>

          {/* Mission & Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {/* Mission Statement */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                BlazingTek is at the forefront of technological innovation in Africa, specializing in 
                advanced robotics solutions, AI integration, and custom technological systems. Based in 
                Harare, Zimbabwe, we empower educational institutions, research facilities, and industries 
                with cutting-edge tools and training.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To bridge the technology gap while fostering local expertise and driving sustainable 
                technological advancement across the African continent. We aim to become the leading 
                technology partner for innovation and development in emerging markets.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get In <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">Touch</span>
              </h2>
              
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We're here to help you with innovative technology solutions
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {/* Phone */}
              <a
                href="tel:+263788605607"
                className="group relative"
              >
                <div className="relative text-center p-8 hover:scale-[1.02] transition-transform duration-300">
                  <div className="relative mb-6">
                    <div className="relative w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              </a>

              {/* Email */}
              <a
                href="mailto:info@blazingtek.co"
                className="group relative"
              >
                <div className="relative text-center p-8 hover:scale-[1.02] transition-transform duration-300">
                  <div className="relative mb-6">
                    <div className="relative w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              </a>

              {/* Location */}
              <div className="group relative">
                <div className="relative text-center p-8 hover:scale-[1.02] transition-transform duration-300">
                  <div className="relative mb-6">
                    <div className="relative w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              </div>
            </div>

            {/* Business Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Hours */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Business Hours</h3>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">Mon - Fri</span>
                    <span className="text-white font-semibold bg-gray-800 px-3 py-1.5 rounded-lg">8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white font-semibold bg-gray-800 px-3 py-1.5 rounded-lg">9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-gray-500 font-semibold bg-gray-900 px-3 py-1.5 rounded-lg">Closed</span>
                  </li>
                </ul>
              </div>

              {/* Timezone */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Timezone</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Local Time</p>
                    <div className="bg-gray-800 rounded-lg px-4 py-3">
                      <p className="text-white text-lg font-semibold">Central Africa Time (CAT)</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-2">UTC Offset</p>
                    <div className="bg-gray-800 rounded-lg px-4 py-3">
                      <p className="text-white text-lg font-semibold">UTC +2</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abouts;