import { motion } from 'framer-motion';
import { Users, Linkedin, Mail, Building } from 'lucide-react';
import bg2 from '../assets/bg2.jpg'; // Import the background image

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
      {/* Hero Section with bg2.jpg */}
      <section className="relative text-white py-16 md:py-20">
        {/* Background with bg2.jpg */}
        <div className="absolute inset-0">
          <img
            src={bg2}
            alt="About BlazingTek Background"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              console.error("Error loading background image");
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
          {/* Gradient overlays for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-transparent to-emerald-900/20"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto px-4 text-center"
        >
          {/* Logo/Icon */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
           
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent font-extrabold">
              BlazingTek
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            We're pioneering African innovation through cutting-edge technology research 
            and development that matters to real people.
          </motion.p>

          {/* Decorative elements */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-8 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 rounded-full"
          />
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-200"
            >
              <Users className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Meet Our Leadership</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 max-w-xl mx-auto mb-8"
            >
              The dedicated team driving innovation and making technology accessible across Africa
            </motion.p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-100 text-center">
                  {/* Avatar */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full mx-auto bg-gradient-to-br from-blue-50 to-emerald-50 flex items-center justify-center text-gray-700 text-lg font-bold group-hover:from-blue-100 group-hover:to-emerald-100 transition-all">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-sm font-bold text-gray-900 mb-1 truncate group-hover:text-blue-600 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-gray-700 font-medium text-xs mb-3 px-2 py-1 bg-gray-50 rounded-full inline-block">
                    {leader.role}
                  </p>
                  
                  {/* Contact Links */}
                  <div className="flex justify-center gap-3">
                    <a 
                      href="#"
                      className="p-1.5 rounded-full bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white transition-all duration-300"
                      aria-label={`Connect with ${leader.name} on LinkedIn`}
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                    <a 
                      href={`mailto:${leader.email}`}
                      className="p-1.5 rounded-full bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white transition-all duration-300"
                      aria-label={`Email ${leader.name}`}
                    >
                      <Mail className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abouts;