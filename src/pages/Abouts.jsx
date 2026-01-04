import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
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
      {/* Hero Section - Visible Background */}
      <section className="relative text-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bg2}
            alt="About Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(0.8) contrast(1.1)'
            }}
          />
          {/* Subtle overlay - More transparent for visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F14]/40 via-[#0A0F14]/60 to-[#0A0F14]"></div>
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
            className="mx-auto mt-12 h-1.5 bg-gradient-to-r from-[#00D4AA] to-[#0066CC] rounded-full shadow-lg"
          />
        </motion.div>
      </section>

      {/* Team Section - Glass Effect */}
      <section className="py-16 md:py-20 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 212, 170, 0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#00D4AA] to-[#0066CC] mx-auto mb-6 rounded-full shadow-lg"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
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
                whileHover={{ y: -6 }}
                className="group"
              >
                {/* Glass Effect Card */}
                <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,212,170,0.15)] transition-all duration-300 h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00D4AA]/0 via-[#00D4AA]/5 to-[#0066CC]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative mb-6">
                    {/* Profile Image Container */}
                    <div className="relative w-36 h-36 mx-auto">
                      {/* Glass ring */}
                      <div className="absolute -inset-2 rounded-full backdrop-blur-sm bg-white/5 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Image */}
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#00D4AA]/30 transition-all duration-300">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-full h-full object-cover"
                          style={{ 
                            filter: 'brightness(1.05) contrast(1.05)'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00D4AA] transition-colors duration-300">
                      {leader.name}
                    </h3>
                    
                    <div className="mb-4">
                      <p className="inline-block px-4 py-1.5 bg-white/5 backdrop-blur-sm rounded-full text-[#00D4AA] text-sm font-medium border border-[#00D4AA]/20 group-hover:border-[#00D4AA]/40 transition-all duration-300">
                        {leader.role}
                      </p>
                    </div>
                    
                    {/* Email */}
                    <a 
                      href={`mailto:${leader.email}`}
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00D4AA] transition-all duration-300 text-sm group/email"
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

      {/* Contact Section - Glass Effect */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 102, 204, 0.2) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Our Team
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#00D4AA] to-[#0066CC] mx-auto mb-6 rounded-full shadow-lg"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-md mx-auto">
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
              whileHover={{ y: -6 }}
              className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[0_20px_40px_rgba(0,102,204,0.15)] transition-all duration-300 group text-center"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0066CC]/0 via-[#0066CC]/5 to-[#0066CC]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative mb-6">
                <div className="relative w-16 h-16 mx-auto backdrop-blur-sm bg-white/5 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#0066CC]/30 transition-all duration-300">
                  <Phone className="h-7 w-7 text-[#0066CC]" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3">Call Us</h3>
              <p className="text-gray-300 text-base font-medium mb-4">+263 788 605 607</p>
              
              <div className="text-[#0066CC] text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to call →
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:info@blazingtek.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[0_20px_40px_rgba(0,212,170,0.15)] transition-all duration-300 group text-center"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00D4AA]/0 via-[#00D4AA]/5 to-[#00D4AA]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative mb-6">
                <div className="relative w-16 h-16 mx-auto backdrop-blur-sm bg-white/5 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00D4AA]/30 transition-all duration-300">
                  <Mail className="h-7 w-7 text-[#00D4AA]" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3">Email Us</h3>
              <p className="text-gray-300 text-base font-medium mb-4">info@blazingtek.com</p>
              
              <div className="text-[#00D4AA] text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Click to email →
              </div>
            </motion.a>

            {/* Location */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -6 }}
              className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[0_20px_40px_rgba(0,102,204,0.15)] transition-all duration-300 group text-center"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0066CC]/0 via-[#0066CC]/5 to-[#0066CC]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative mb-6">
                <div className="relative w-16 h-16 mx-auto backdrop-blur-sm bg-white/5 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#0066CC]/30 transition-all duration-300">
                  <MapPin className="h-7 w-7 text-[#0066CC]" />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3">Visit Us</h3>
              <p className="text-gray-300 text-base font-medium mb-4">87 Engineering, Highfield, Harare</p>
              
              <div className="text-[#0066CC] text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
            className="mt-16 text-center"
          >
            <p className="text-gray-400 text-sm backdrop-blur-sm bg-white/5 inline-block px-4 py-2 rounded-full border border-white/10">
              Available Monday - Friday, 8:00 AM - 5:00 PM CAT
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Abouts;