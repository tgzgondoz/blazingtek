import { Mail, Phone, MapPin } from 'lucide-react';

const Abouts = () => {
  const backgroundImage = 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';

  return (
    <div className="min-h-screen bg-black">
      {/* Combined Hero & About Section */}
      <section className="relative text-white py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt="Robotics Technology Background"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/95"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">
          {/* Header - Adjusted spacing */}
          <div className="text-center mb-8"> {/* Changed from mb-16 to mb-8 (2rem less) */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              About BlazingTek
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Pioneering African innovation through cutting-edge technology
            </p>
          </div>

          {/* Mission & Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Mission Statement */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                BlazingTek is at the forefront of technological innovation in Africa, specializing in 
                advanced robotics solutions, AI integration, and custom technological systems. Based in 
                Harare, Zimbabwe, we empower educational institutions, research facilities, and industries 
                with cutting-edge tools and training.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To bridge the technology gap while fostering local expertise and driving sustainable 
                technological advancement across the African continent. We aim to become the leading 
                technology partner for innovation and development in emerging markets.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <div className="text-center mb-12">
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-white">Contact Our Team</h2>
              </div>
              <p className="text-gray-400">We're here to help you with innovative technology solutions</p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              {/* Phone */}
              <a
                href="tel:+263788605607"
                className="group bg-white/5 rounded-xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] text-center hover:bg-white/10"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-white/10 blur-sm rounded-full"></div>
                  <div className="relative w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-white text-lg font-medium">+263 788 605 607</p>
              </a>

              {/* Email */}
              <a
                href="mailto:info@blazingtek.co"
                className="group bg-white/5 rounded-xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] text-center hover:bg-white/10"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-white/10 blur-sm rounded-full"></div>
                  <div className="relative w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-white text-lg font-medium">info@blazingtek.co</p>
              </a>

              {/* Location */}
              <div className="group bg-white/5 rounded-xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] text-center hover:bg-white/10">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-white/10 blur-sm rounded-full"></div>
                  <div className="relative w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-white text-lg font-medium">Harare, Zimbabwe</p>
              </div>
            </div>

            {/* Business Info - Removed backgrounds and borders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Hours */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between text-gray-300">
                    <span>Mon - Fri</span>
                    <span className="text-white font-medium">8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between text-gray-300">
                    <span>Saturday</span>
                    <span className="text-white font-medium">9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between text-gray-300">
                    <span>Sunday</span>
                    <span className="text-white font-medium">Closed</span>
                  </li>
                </ul>
              </div>

              {/* Timezone */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">Timezone</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-300 text-sm">Local Time</p>
                    <p className="text-white text-lg font-medium">Central Africa Time (CAT)</p>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">UTC Offset</p>
                    <p className="text-white text-lg font-medium">UTC +2</p>
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