import { motion } from 'framer-motion';
import { Users, Linkedin, Mail, MessageSquare, Phone, MapPin } from 'lucide-react';
import bg2 from '../assets/bg2.jpg';

const Abouts = () => {
  const leaders = [
    { name: "Andrew Chigona", role: "CEO", email: "andrew@blazingtek.com" },
    { name: "Garry Payera", role: "Brand Ambassador", email: "garry@blazingtek.com" },
    { name: "Frank Farakezi", role: "Events Coordinator", email: "frank@blazingtek.com" },
    { name: "Takudzwa Masomera", role: "Project Lead", email: "takudzwa@blazingtek.com" },
    { name: "Claudius Saranavo", role: "Creative Director", email: "claudius@blazingtek.com" },
    { name: "Tatenda Gondo", role: "IT Specialist", email: "tatenda@blazingtek.com" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bg2}
            alt="About Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-gray-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/20 to-transparent"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-4xl mx-auto px-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              BlazingTek
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-100 max-w-2xl mx-auto text-sm md:text-base"
          >
            Pioneering African innovation through cutting-edge technology
          </motion.p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
              <Users className="h-3 w-3" />
              Our Leadership Team
            </div>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              Meet the team driving innovation across Africa
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
                  <div className="relative mb-3">
                    <div className="w-12 h-12 rounded-full mx-auto bg-gradient-to-br from-blue-50 to-emerald-50 flex items-center justify-center text-gray-700 text-sm font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  
                  <h3 className="text-xs font-bold text-gray-900 mb-1 truncate">
                    {leader.name}
                  </h3>
                  <p className="text-gray-600 text-xs mb-2 px-2 py-0.5 bg-gray-50 rounded-full">
                    {leader.role}
                  </p>
                  
                  <div className="flex justify-center gap-2">
                    <a 
                      href="#"
                      className="p-1 rounded-full bg-gray-100 hover:bg-blue-500 text-gray-500 hover:text-white transition-colors"
                      aria-label={`LinkedIn`}
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                    <a 
                      href={`mailto:${leader.email}`}
                      className="p-1 rounded-full bg-gray-100 hover:bg-blue-500 text-gray-500 hover:text-white transition-colors"
                      aria-label={`Email`}
                    >
                      <Mail className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Contact Section */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold">
              <MessageSquare className="h-3 w-3" />
              Get in Touch
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Contact Our Team
            </h2>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              We're here to help you with innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <motion.a
              href="tel:+15551234567"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all group text-center"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 mx-auto mb-3 flex items-center justify-center">
                <Phone className="h-5 w-5 text-blue-500" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Call Us</h3>
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
              <div className="text-blue-500 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to call →
              </div>
            </motion.a>

            <motion.a
              href="mailto:info@blazingtek.com"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all group text-center"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-50 mx-auto mb-3 flex items-center justify-center">
                <Mail className="h-5 w-5 text-emerald-500" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Email Us</h3>
              <p className="text-gray-600 text-sm">info@blazingtek.com</p>
              <div className="text-emerald-500 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to email →
              </div>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all group text-center"
            >
              <div className="w-10 h-10 rounded-full bg-purple-50 mx-auto mb-3 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-purple-500" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Visit Us</h3>
              <p className="text-gray-600 text-sm">Harare, Zimbabwe</p>
              <div className="text-purple-500 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
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