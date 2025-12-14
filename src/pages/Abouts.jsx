// About.jsx
import { Target, Eye, History, Award, Users, Globe, Sparkles, ChevronRight, Rocket, Cpu, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Abouts = () => {
  const values = [
    { 
      icon: <Target className="h-10 w-10" />, 
      title: "Mission", 
      description: "To accelerate Africa's technological sovereignty through cutting-edge research and accessible innovation.",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <Eye className="h-10 w-10" />, 
      title: "Vision", 
      description: "A continent where local research drives global technological advancement and sustainable development.",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: <History className="h-10 w-10" />, 
      title: "Our Story", 
      description: "Founded in 2018 by engineers and researchers passionate about solving Africa-specific challenges.",
      color: "from-emerald-500 to-green-500"
    },
    { 
      icon: <Award className="h-10 w-10" />, 
      title: "Achievements", 
      description: "25+ research papers, 15 patents, and solutions deployed across 8 African countries.",
      color: "from-amber-500 to-orange-500"
    },
  ];

  const team = [
    { 
      name: "Dr. Amina Diallo", 
      role: "Lead AI Researcher", 
      expertise: "Machine Learning, Computer Vision",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Kwame Osei", 
      role: "Robotics Director", 
      expertise: "Autonomous Systems, IoT",
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "Fatima Bello", 
      role: "Sustainability Lead", 
      expertise: "Renewable Energy, Green Tech",
      color: "from-emerald-500 to-green-500"
    },
    { 
      name: "David Chen", 
      role: "Hardware Specialist", 
      expertise: "Embedded Systems, 3D Printing",
      color: "from-amber-500 to-orange-500"
    },
  ];

  const impactStats = [
    { value: "25+", label: "Research Papers", icon: <Sparkles className="h-6 w-6" /> },
    { value: "15", label: "Patents Filed", icon: <Shield className="h-6 w-6" /> },
    { value: "8", label: "African Countries", icon: <Globe className="h-6 w-6" /> },
    { value: "50+", label: "Researchers", icon: <Users className="h-6 w-6" /> },
  ];

  const researchFocus = [
    { icon: <Cpu className="h-8 w-8" />, title: "AI & Machine Learning", description: "Developing localized AI models for African languages and contexts" },
    { icon: <Zap className="h-8 w-8" />, title: "Sustainable Robotics", description: "Energy-efficient robotic systems for agriculture and healthcare" },
    { icon: <Shield className="h-8 w-8" />, title: "Assistive Technology", description: "Affordable solutions for accessibility and rehabilitation" },
    { icon: <Rocket className="h-8 w-8" />, title: "Space Tech", description: "Satellite technology for environmental monitoring" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 text-white py-24">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">About BlazingTek</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Driving Research
            </span>
            <br />
            <motion.span 
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Excellence
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-10"
          >
            We're more than a tech company—we're a research hub dedicated to developing 
            locally-relevant, globally-competitive technological solutions for Africa's unique challenges.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/research">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 flex items-center gap-3"
              >
                <span>Explore Research</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link to="/careers">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5 flex items-center gap-3"
              >
                <span>Join Our Team</span>
                <Rocket className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Foundation</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Core Values & Vision
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${item.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <motion.div 
                    className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${item.color} w-fit`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Research Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interdisciplinary research addressing Africa's most pressing challenges
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchFocus.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="text-blue-600 mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">Leadership</span>
              <Users className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Research Leadership
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the brilliant minds driving innovation across Africa
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${member.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
                  <div className={`h-48 bg-gradient-to-br ${member.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-400 leading-relaxed">{member.expertise}</p>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-cyan-400 transition-colors">
                        <span>View Profile</span>
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Quantifying our contribution to technological advancement in Africa
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="flex justify-center mb-4 opacity-90">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold mb-3">{stat.value}</div>
                <div className="text-lg font-medium opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Collaborate?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join us in shaping Africa's technological future through research and innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 flex items-center gap-3"
                >
                  <span>Start Partnership</span>
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/research">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-transparent border-2 border-gray-300 hover:border-gray-400 text-gray-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3"
                >
                  <span>Explore Research</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Abouts;