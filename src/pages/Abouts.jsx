import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import bg2 from '../assets/bg2.jpg';

// Import profile pictures
import AndrewChigona from '../assets/leaders/Andrew_Chigona.png';
import GarryPayera from '../assets/leaders/Garry_Payera.png';
import FrankFarakezi from '../assets/leaders/Frank_Farakezi.png';
import TakudzwaMasomera from '../assets/leaders/Takudzwa_Masomera.png';
import ClaudiusSaranavo from '../assets/leaders/Claudius_Saranavo.png';
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
      image: GarryPayera // FIXED: Correct image for Garry
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
      image: ClaudiusSaranavo // FIXED: Correct image for Claudius
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
            className="mx-auto mt-8 h-1 bg-[#00D4AA] rounded-full"
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
            <div className="w-16 h-1 bg-[#00D4AA] mx-auto mb-4"></div>
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
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="bg-[#1A232E] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/5 hover:border-[#00D4AA]/30 text-center h-full">
                  <div className="relative mb-6">
                    {/* Profile Image */}
                    <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-[#0A0F14] shadow-lg mb-4 group-hover:border-[#00D4AA]/50 transition-all duration-300">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  {/* Name and Role */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00D4AA] transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-[#00D4AA] text-sm mb-4 px-3 py-1.5 bg-[#0A0F14] rounded-full font-medium inline-block">
                    {leader.role}
                  </p>
                  
                  {/* Email */}
                  <a 
                    href={`mailto:${leader.email}`}
                    className="inline-block text-gray-400 hover:text-[#00D4AA] transition-colors text-sm mt-2"
                  >
                    {leader.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-[#1A232E]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Contact Our Team
            </h2>
            <div className="w-12 h-1 bg-[#00D4AA] mx-auto mb-4"></div>
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
              whileHover={{ y: -5 }}
              className="bg-[#0A0F14] p-6 rounded-xl border border-white/5 hover:border-[#0066CC] hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#1A232E] mx-auto mb-4 flex items-center justify-center group-hover:bg-[#0066CC]/20 transition-colors">
                <Phone className="h-6 w-6 text-[#0066CC]" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300 text-sm font-medium">+263 788 605 607</p>
              <div className="text-[#0066CC] text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to call →
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:info@blazingtek.com"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-[#0A0F14] p-6 rounded-xl border border-white/5 hover:border-[#00D4AA] hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#1A232E] mx-auto mb-4 flex items-center justify-center group-hover:bg-[#00D4AA]/20 transition-colors">
                <Mail className="h-6 w-6 text-[#00D4AA]" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300 text-sm font-medium">info@blazingtek.com</p>
              <div className="text-[#00D4AA] text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to email →
              </div>
            </motion.a>

            {/* Location */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-[#0A0F14] p-6 rounded-xl border border-white/5 hover:border-[#0066CC] hover:shadow-xl transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#1A232E] mx-auto mb-4 flex items-center justify-center group-hover:bg-[#0066CC]/20 transition-colors">
                <MapPin className="h-6 w-6 text-[#0066CC]" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300 text-sm font-medium">Harare, Zimbabwe</p>
              <div className="text-[#0066CC] text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                View location →
              </div>
            </motion.a>
          </div>

          {/* Contact Hours */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center"
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