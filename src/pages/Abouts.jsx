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
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bg2}
            alt="About Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0F14] opacity-90"></div>
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F14]/50 via-[#0A0F14]/80 to-[#0A0F14]" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto px-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            <span className="text-white">About </span>
            <span className="text-[#00D4AA] font-bold">BlazingTek</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Pioneering African innovation through cutting-edge technology
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-8 h-1 bg-gradient-to-r from-[#00D4AA] to-[#0066CC] rounded-full"
          />
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 bg-[#0A0F14]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#00D4AA] to-[#0066CC] mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-400 max-w-xl mx-auto">
              The team driving innovation and technology solutions across Africa
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="bg-gradient-to-b from-[#1A232E] to-[#0A0F14] rounded-2xl p-8 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,212,170,0.15)] transition-all duration-300 border border-white/5 hover:border-[#00D4AA]/30 text-center h-full backdrop-blur-sm">
                  <div className="relative mb-8">
                    {/* Profile Image with Professional Styling */}
                    <div className="relative w-40 h-40 mx-auto mb-6">
                      {/* Outer gradient ring */}
                      <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-[#00D4AA] to-[#0066CC] opacity-20 group-hover:opacity-40 transition-all duration-500">
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
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00D4AA]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      {/* Decorative dots */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#00D4AA] opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                      <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-[#0066CC] opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                    </div>
                  </div>
                  
                  {/* Name and Role */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4AA] transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <div className="relative mb-6">
                    <p className="relative z-10 text-[#00D4AA] text-sm px-4 py-2 bg-gradient-to-r from-[#0A0F14] to-[#1A232E] rounded-full font-medium inline-block border border-[#00D4AA]/20 group-hover:border-[#00D4AA]/50 transition-all duration-300">
                      {leader.role}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00D4AA]/10 to-[#0066CC]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  </div>
                  
                  {/* Email with hover effect */}
                  <a 
                    href={`mailto:${leader.email}`}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00D4AA] transition-all duration-300 text-sm mt-2 group/email"
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
      <section className="py-12 md:py-16 bg-gradient-to-b from-[#1A232E] to-[#0A0F14]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Contact Our Team
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-[#00D4AA] to-[#0066CC] mx-auto mb-4 rounded-full"></div>
            <p className="text-gray-400 max-w-md mx-auto">
              We're here to help you with innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Phone */}
            <motion.a
              href="tel:+263788605607"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-b from-[#0A0F14] to-[#1A232E] p-8 rounded-2xl border border-white/5 hover:border-[#0066CC] hover:shadow-[0_20px_40px_rgba(0,102,204,0.15)] transition-all duration-300 group text-center backdrop-blur-sm"
            >
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#1A232E] to-[#0A0F14] mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0066CC]/0 to-[#0066CC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Phone className="h-8 w-8 text-[#0066CC] relative z-10" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Call Us</h3>
              <p className="text-gray-300 text-sm font-medium mb-4">+263 788 605 607</p>
              <div className="text-[#0066CC] text-xs font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1">
                Click to call
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:info@blazingtek.com"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-b from-[#0A0F14] to-[#1A232E] p-8 rounded-2xl border border-white/5 hover:border-[#00D4AA] hover:shadow-[0_20px_40px_rgba(0,212,170,0.15)] transition-all duration-300 group text-center backdrop-blur-sm"
            >
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#1A232E] to-[#0A0F14] mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00D4AA]/0 to-[#00D4AA]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Mail className="h-8 w-8 text-[#00D4AA] relative z-10" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Email Us</h3>
              <p className="text-gray-300 text-sm font-medium mb-4">info@blazingtek.com</p>
              <div className="text-[#00D4AA] text-xs font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1">
                Click to email
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </motion.a>

            {/* Location */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-b from-[#0A0F14] to-[#1A232E] p-8 rounded-2xl border border-white/5 hover:border-[#0066CC] hover:shadow-[0_20px_40px_rgba(0,102,204,0.15)] transition-all duration-300 group text-center backdrop-blur-sm"
            >
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#1A232E] to-[#0A0F14] mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0066CC]/0 to-[#0066CC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <MapPin className="h-8 w-8 text-[#0066CC] relative z-10" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Visit Us</h3>
              <p className="text-gray-300 text-sm font-medium mb-4">Harare, Zimbabwe</p>
              <div className="text-[#0066CC] text-xs font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1">
                View location
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </motion.a>
          </div>

          {/* Contact Hours */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 text-sm">
              Available Monday - Friday, 8:00 AM - 5:00 PM CAT
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Abouts;