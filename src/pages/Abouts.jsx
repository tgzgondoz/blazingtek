// About.jsx
import { motion } from 'framer-motion';
import { Users, Linkedin, Mail } from 'lucide-react';

const Abouts = () => {
  const leaders = [
    {
      name: "Dr. Amina Diallo",
      role: "AI Research Lead",
      description: "Expert in machine learning and computer vision",
      imageColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
      linkedin: "#",
      email: "amina@blazingtek.com"
    },
    {
      name: "Kwame Osei",
      role: "Robotics Director",
      description: "Specialized in autonomous systems and IoT",
      imageColor: "bg-gradient-to-br from-purple-500 to-pink-500",
      linkedin: "#",
      email: "kwame@blazingtek.com"
    },
    {
      name: "Fatima Bello",
      role: "Sustainability Lead",
      description: "Focused on renewable energy and green tech",
      imageColor: "bg-gradient-to-br from-emerald-500 to-green-500",
      linkedin: "#",
      email: "fatima@blazingtek.com"
    },
    {
      name: "David Chen",
      role: "Hardware Specialist",
      description: "Expert in embedded systems and 3D printing",
      imageColor: "bg-gradient-to-br from-amber-500 to-orange-500",
      linkedin: "#",
      email: "david@blazingtek.com"
    },
    {
      name: "Sarah Johnson",
      role: "Operations Director",
      description: "Project management and strategic planning",
      linkedin: "#",
      email: "sarah@blazingtek.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 text-white py-16 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug">
            About BlazingTek
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Pioneering African innovation through research and development.
          </p>
        </motion.div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Leadership Team</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Meet Our Leaders
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              The brilliant minds driving innovation across Africa
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center h-full">
                  {/* Circle Face/Avatar */}
                  <div className="relative mb-6">
                    <div className={`w-24 h-24 rounded-full mx-auto ${leader.imageColor || "bg-gray-100"} flex items-center justify-center ${leader.imageColor ? "text-white" : "text-gray-700"} text-2xl font-bold`}>
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {/* Online Status Indicator */}
                    <div className="absolute bottom-4 right-1/4 transform translate-x-1/2">
                      <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    </div>
                  </div>
                  
                  {/* Leader Info */}
                  <h3 className="text-base font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-2">{leader.role}</p>
                  <p className="text-gray-600 text-xs mb-4">{leader.description}</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <a 
                      href={leader.linkedin} 
                      className="p-1.5 rounded-full bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-colors"
                      aria-label={`Connect with ${leader.name} on LinkedIn`}
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a 
                      href={`mailto:${leader.email}`}
                      className="p-1.5 rounded-full bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-colors"
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
    </div>
  );
};

export default Abouts;