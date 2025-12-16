import { motion } from 'framer-motion';
import { Users, Linkedin, Mail, Building } from 'lucide-react';

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
      <section className="relative bg-gray-900 text-white py-16 md:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto px-4 text-center"
        >
        
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About BlazingTek
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're pioneering African innovation through cutting-edge technology research 
            and development that matters to real people.
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-200">
              <Users className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Meet Our Leadership</span>
            </div>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              The dedicated team driving innovation and making technology accessible across Africa
            </p>
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
                    <div className="w-16 h-16 rounded-full mx-auto bg-gray-100 flex items-center justify-center text-gray-700 text-lg font-bold group-hover:bg-gray-200 transition-all">
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
                      aria-label={`Connect with ${leader.name}`}
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