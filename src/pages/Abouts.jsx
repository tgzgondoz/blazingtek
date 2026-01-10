import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import bg2 from '../assets/bg2.jpg';

// Import profile pictures
import AndrewChigona from '../assets/leaders/Andrew_Chigona.png';
import GarryPayera from '../assets/leaders/Claudius_Saranavo.png';
import FrankFarakezi from '../assets/leaders/Frank_Farakezi.png';
import TakudzwaMasomera from '../assets/leaders/Takudzwa_Masomera.png';
import ClaudiusSaranavo from '../assets/leaders/Garry_Payera.png';
import TatendaGondo from '../assets/leaders/Tatenda_Gondo.jpg';

const Abouts = () => {
  const leaders = [
    { 
      name: "Andrew Chigona", 
      role: "CEO", 
      email: "andrew@blazingtek.co",
      image: AndrewChigona
    },
    { 
      name: "Garry Payera", 
      role: "Brand Ambassador", 
      email: "garry@blazingtek.co",
      image: GarryPayera
    },
    { 
      name: "Frank Farakezi", 
      role: "Events Coordinator", 
      email: "frank@blazingtek.co",
      image: FrankFarakezi
    },
    { 
      name: "Takudzwa Masomera", 
      role: "Project Lead", 
      email: "takudzwa@blazingtek.co",
      image: TakudzwaMasomera
    },
    { 
      name: "Claudius Saranavo", 
      role: "Creative Director", 
      email: "claudius@blazingtek.co",
      image: ClaudiusSaranavo
    },
    { 
      name: "Tatenda Gondo", 
      role: "IT Specialist", 
      email: "tatenda@blazingtek.co",
      image: TatendaGondo
    }
  ];
  
  return (
    <div className="min-h-screen bg-[#0A0F14]">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bg2}
            alt="About Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0F14]/80"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto px-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            About BlazingTek
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Pioneering African innovation through cutting-edge technology
          </motion.p>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100px", opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mx-auto mt-12 h-1 bg-white rounded-full"
          />
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 relative">
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
            <div className="w-20 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              The team driving innovation and technology solutions across Africa
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="relative mb-6">
                    <div className="relative w-32 h-32 mx-auto">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {leader.name}
                    </h3>
                    
                    <div className="mb-4">
                      <p className="inline-block px-3 py-1 bg-white/10 rounded-full text-white text-sm">
                        {leader.role}
                      </p>
                    </div>
                    
                    <a 
                      href={`mailto:${leader.email}`}
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      <Mail size={14} />
                      {leader.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact Our Team
            </h2>
            <div className="w-16 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-md mx-auto">
              We're here to help you with innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Phone */}
            <motion.a
              href="tel:+263788605607"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group text-center"
            >
              <div className="relative mb-6">
                <div className="relative w-14 h-14 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-base font-semibold text-white mb-3">Call Us</h3>
              <p className="text-gray-300 text-sm mb-4">+263 788 605 607</p>
              
              <div className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to call
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:info@blazingtek.co"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group text-center"
            >
              <div className="relative mb-6">
                <div className="relative w-14 h-14 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-base font-semibold text-white mb-3">Email Us</h3>
              <p className="text-gray-300 text-sm mb-4">info@blazingtek.co</p>
              
              <div className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to email
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group text-center"
            >
              <div className="relative mb-6">
                <div className="relative w-14 h-14 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-base font-semibold text-white mb-3">Visit Us</h3>
              <p className="text-gray-300 text-sm mb-4">87 Engineering, Highfield, Harare</p>
              
              <div className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Our location
              </div>
            </motion.div>
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