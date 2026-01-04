import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import bg2 from '../assets/bg2.jpg';

// Import profile pictures - Swapped the images
import AndrewChigona from '../assets/leaders/Andrew_Chigona.png';
import GarryPayera from '../assets/leaders/Claudius_Saranavo.png'; // SWAPPED: Using Claudius' image for Garry
import FrankFarakezi from '../assets/leaders/Frank_Farakezi.png';
import TakudzwaMasomera from '../assets/leaders/Takudzwa_Masomera.png';
import ClaudiusSaranavo from '../assets/leaders/Garry_Payera.png'; // SWAPPED: Using Garry's image for Claudius
import TatendaGondo from '../assets/leaders/Tatenda_Gondo.jpg';

const Abouts = () => {
  const leaders = [
    { 
      name: "Andrew Chigona", 
      role: "CEO", 
      email: "andrew@blazingtek.com",
      image: AndrewChigona
    },
    { 
      name: "Garry Payera", 
      role: "Brand Ambassador", 
      email: "garry@blazingtek.com",
      image: GarryPayera // SWAPPED: Now using Claudius' image
    },
    { 
      name: "Frank Farakezi", 
      role: "Events Coordinator", 
      email: "frank@blazingtek.com",
      image: FrankFarakezi
    },
    { 
      name: "Takudzwa Masomera", 
      role: "Project Lead", 
      email: "takudzwa@blazingtek.com",
      image: TakudzwaMasomera
    },
    { 
      name: "Claudius Saranavo", 
      role: "Creative Director", 
      email: "claudius@blazingtek.com",
      image: ClaudiusSaranavo // SWAPPED: Now using Garry's image
    },
    { 
      name: "Tatenda Gondo", 
      role: "IT Specialist", 
      email: "tatenda@blazingtek.com",
      image: TatendaGondo
    }
  ];
  
  return (
    <div className="min-h-screen bg-[#0A0F14]">
      {/* Hero Section - Updated for better image visibility */}
      <section className="relative text-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bg2}
            alt="About Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(0.8) contrast(1.1) saturate(1.2)'
            }}
          />
          {/* Gradient overlay - Reduced opacity for better image visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F14]/70 via-[#0A0F14]/85 to-[#0A0F14]"></div>
          {/* Subtle radial gradient for focus */}
          <div className="absolute inset-0 bg-radial-gradient(at top center, rgba(10, 15, 20, 0.3), rgba(10, 15, 20, 0.7))"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto px-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white drop-shadow-lg">About </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#0066CC] font-bold drop-shadow-lg">
              BlazingTek
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-lg"
          >
            Pioneering African innovation through cutting-edge technology
          </motion.p>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "120px", opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mx-auto mt-12 h-1.5 bg-gradient-to-r from-[#00D4AA] via-[#00D4AA] to-[#0066CC] rounded-full shadow-lg"
          />
          
          {/* Decorative elements for header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#00D4AA]/20 to-[#0066CC]/20 blur-2xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#0066CC]/20 to-[#00D4AA]/20 blur-2xl"
          />
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#0A0F14] via-[#0A0F14] to-[#1A232E]/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#00D4AA] to-[#0066CC] mx-auto mb-6 rounded-full shadow-lg"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The team driving innovation and technology solutions across Africa
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="bg-gradient-to-b from-[#1A232E] to-[#0A0F14] rounded-2xl p-8 shadow-2xl hover:shadow-[0_25px_50px_rgba(0,212,170,0.15)] transition-all duration-300 border border-white/5 hover:border-[#00D4AA]/30 text-center h-full backdrop-blur-sm">
                  <div className="relative mb-8">
                    {/* Profile Image with Professional Styling */}
                    <div className="relative w-44 h-44 mx-auto mb-8">
                      {/* Outer gradient ring */}
                      <div className="absolute inset-0 rounded-full p-1.5 bg-gradient-to-r from-[#00D4AA] via-[#00D4AA] to-[#0066CC] opacity-20 group-hover:opacity-40 group-hover:animate-pulse transition-all duration-500">
                        <div className="w-full h-full rounded-full bg-[#0A0F14]"></div>
                      </div>
                      
                      {/* Image container with smooth overlay */}
                      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#0A0F14] shadow-2xl group-hover:border-transparent transition-all duration-500">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                          style={{ 
                            filter: 'brightness(1.05) contrast(1.05)',
                            objectPosition: 'center'
                          }}
                        />
                        {/* Subtle overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00D4AA]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      {/* Decorative animated dots */}
                      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gradient-to-r from-[#00D4AA] to-[#00D4AA] opacity-0 group-hover:opacity-80 transition-all duration-500 animate-pulse"></div>
                      <div className="absolute -bottom-2 -left-2 w-5 h-5 rounded-full bg-gradient-to-r from-[#0066CC] to-[#0066CC] opacity-0 group-hover:opacity-80 transition-all duration-500 animate-pulse delay-300"></div>
                    </div>
                  </div>
                  
                  {/* Name and Role */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4AA] transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <div className="relative mb-6">
                    <p className="relative z-10 text-[#00D4AA] text-sm px-5 py-2 bg-gradient-to-r from-[#0A0F14] to-[#1A232E] rounded-full font-medium inline-block border border-[#00D4AA]/20 group-hover:border-[#00D4AA]/50 transition-all duration-300 shadow-lg">
                      {leader.role}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00D4AA]/10 to-[#0066CC]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  </div>
                  
                  {/* Email with hover effect */}
                  <a 
                    href={`mailto:${leader.email}`}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00D4AA] transition-all duration-300 text-sm mt-2 group/email hover:underline decoration-[#00D4AA]/30"
                  >
                    <Mail size={14} className="opacity-0 -translate-x-2 group-hover/email:opacity-100 group-hover/email:translate-x-0 transition-all duration-300" />
                    {leader.email}
                    <Mail size={14} className="opacity-0 translate-x-2 group-hover/email:opacity-100 group-hover/email:translate-x-0 transition-all duration-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#1A232E] via-[#0A0F14] to-[#0A0F14]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact Our Team
            </h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#00D4AA] to-[#0066CC] mx-auto mb-6 rounded-full shadow-lg"></div>
            <p className="text-gray-300 text-lg max-w-md mx-auto">
              We're here to help you with innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {/* Phone */}
            <motion.a
              href="tel:+263788605607"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-gradient-to-b from-[#0A0F14] to-[#1A232E] p-8 rounded-2xl border border-white/5 hover:border-[#0066CC] hover:shadow-[0_25px_50px_rgba(0,102,204,0.2)] transition-all duration-300 group text-center backdrop-blur-sm"
            >
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#1A232E] to-[#0A0F14] mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0066CC]/0 to-[#0066CC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Phone className="h-9 w-9 text-[#0066CC] relative z-10" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">Call Us</h3>
              <p className="text-gray-300 text-base font-medium mb-6">+263 788 605 607</p>
              <div className="text-[#0066CC] text-sm font-medium mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                Click to call
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:info@blazingtek.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-gradient-to-b from-[#0A0F14] to-[#1A232E] p-8 rounded-2xl border border-white/5 hover:border-[#00D4AA] hover:shadow-[0_25px_50px_rgba(0,212,170,0.2)] transition-all duration-300 group text-center backdrop-blur-sm"
            >
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#1A232E] to-[#0A0F14] mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00D4AA]/0 to-[#00D4AA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Mail className="h-9 w-9 text-[#00D4AA] relative z-10" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">Email Us</h3>
              <p className="text-gray-300 text-base font-medium mb-6">info@blazingtek.com</p>
              <div className="text-[#00D4AA] text-sm font-medium mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                Click to email
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </div>
            </motion.a>

            {/* Location - UPDATED */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-gradient-to-b from-[#0A0F14] to-[#1A232E] p-8 rounded-2xl border border-white/5 hover:border-[#0066CC] hover:shadow-[0_25px_50px_rgba(0,102,204,0.2)] transition-all duration-300 group text-center backdrop-blur-sm"
            >
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#1A232E] to-[#0A0F14] mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0066CC]/0 to-[#0066CC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <MapPin className="h-9 w-9 text-[#0066CC] relative z-10" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">Visit Us</h3>
              <p className="text-gray-300 text-base font-medium mb-6">87 Engineering, Highfield, Harare</p>
              <div className="text-[#0066CC] text-sm font-medium mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                View location
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </div>
            </motion.a>
          </div>

          {/* Contact Hours */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 text-sm">
              Available Monday - Friday, 8:00 AM - 5:00 PM CAT
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Abouts;