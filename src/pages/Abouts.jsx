import { motion } from 'framer-motion';
import { Users, Linkedin, Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import bg2 from '../assets/bg2.jpg';


// Import profile pictures - CORRECTED
import AndrewChigona from '../assets/leaders/Andrew_Chigona.png'; // .png not .jpg
import GarryPayera from '../assets/leaders/Garry_Payera.png';     // .png not .jpg
import FrankFarakezi from '../assets/leaders/Frank_Farakezi.png'; // .png not .jpg
import TakudzwaMasomera from '../assets/leaders/Takudzwa_Masomera.png'; // .png not .jpg
import ClaudiusSaranavo from '../assets/leaders/Claudius_Saranavo.png'; // .png not .jpg
import TatendaGondo from '../assets/leaders/Tatenda_Gondo.jpg'; // This one is .jpg (note the filename ends with 'j' not 'o')

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
      image: GarryPayera
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
      image: ClaudiusSaranavo
    },
    { 
      name: "Tatenda Gondo", 
      role: "IT Specialist", 
      email: "tatenda@blazingtek.com",
      image: TatendaGondo
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bg2}
            alt="About Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-emerald-900/20"></div>
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
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg"
          >
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-extrabold drop-shadow-lg">
              BlazingTek
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-lg"
          >
            Pioneering African innovation through cutting-edge technology
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-8 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full drop-shadow-lg"
          />
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100">
              <Users className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Our Leadership Team</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Meet the Visionaries
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
              The team driving innovation and technology solutions across Africa
            </p>
          </motion.div>
          
          {/* Changed grid-cols-6 to grid-cols-3 for 3 per row */}
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
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100 text-center h-full">
                  <div className="relative mb-6">
                    {/* Profile Image - Increased from w-20 h-20 to w-32 h-32 */}
                    <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-white shadow-lg mb-4 group-hover:border-blue-200 transition-all duration-300">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-md"></div>
                  </div>
                  
                  {/* Name with hover effect */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full font-medium inline-block">
                    {leader.role}
                  </p>
                  
                  <div className="flex justify-center gap-4 mt-6">
                    <a 
                      href="#"
                      className="p-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-500 hover:to-emerald-500 text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                      aria-label={`Connect with ${leader.name} on LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a 
                      href={`mailto:${leader.email}`}
                      className="p-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-500 hover:to-emerald-500 text-gray-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                      aria-label={`Email ${leader.name}`}
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Contact Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100">
              <MessageSquare className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Get in Touch</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Contact Our Team
            </h2>
            <p className="text-gray-600 max-w-md mx-auto text-sm md:text-base">
              We're here to help you with innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <motion.a
              href="tel:+15551234567"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-emerald-50 mx-auto mb-4 flex items-center justify-center group-hover:from-blue-100 group-hover:to-emerald-100 transition-colors">
                <Phone className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
              <div className="text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to call →
              </div>
            </motion.a>

            <motion.a
              href="mailto:info@blazingtek.com"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-emerald-50 mx-auto mb-4 flex items-center justify-center group-hover:from-blue-100 group-hover:to-emerald-100 transition-colors">
                <Mail className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">info@blazingtek.com</p>
              <div className="text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to email →
              </div>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-emerald-50 mx-auto mb-4 flex items-center justify-center group-hover:from-blue-100 group-hover:to-emerald-100 transition-colors">
                <MapPin className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">Harare, Zimbabwe</p>
              <div className="text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-xs font-medium mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                View location →
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abouts;