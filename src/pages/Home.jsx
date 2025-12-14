// Home.jsx
import { ArrowRight, Cpu, Zap, Users, Globe, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const researchHighlights = [
    { 
      title: "AI-Powered Agriculture", 
      description: "Developing autonomous drones for precision farming in Sub-Saharan Africa",
      icon: <Cpu className="h-10 w-10" />,
      gradient: "from-emerald-500 to-cyan-500"
    },
    { 
      title: "Solar Robotics", 
      description: "Sustainable robotic systems powered entirely by renewable energy",
      icon: <Zap className="h-10 w-10" />,
      gradient: "from-amber-500 to-orange-500"
    },
    { 
      title: "Assistive Technology", 
      description: "Custom prosthetic limbs and mobility aids using 3D printing",
      icon: <Users className="h-10 w-10" />,
      gradient: "from-violet-500 to-purple-500"
    },
    { 
      title: "Global Impact", 
      description: "Collaborating with 15+ African nations on tech solutions",
      icon: <Globe className="h-10 w-10" />,
      gradient: "from-blue-500 to-indigo-500"
    },
  ];

  const RoboticBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced Circuit Board with Glow */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="url(#grid-glow)" strokeWidth="1.5" />
              <circle cx="30" cy="30" r="2" fill="url(#node-glow)" />
            </pattern>
            <linearGradient id="grid-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.6" />
            </linearGradient>
            <radialGradient id="node-glow">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Data Nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute"
          style={{
            left: `${20 + (i * 10)}%`,
            top: `${15 + (i * 7)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30" />
        </motion.div>
      ))}

      {/* Floating Tech Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4"
        animate={{
          x: [0, 30, 0, -20, 0],
          y: [0, -30, 0, 20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="relative">
          <div className="w-16 h-16 border-2 border-cyan-400/30 rounded-lg rotate-45" />
          <div className="absolute inset-4 border-2 border-purple-400/30 rounded rotate-12" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="relative">
          <div className="w-20 h-20 border-2 border-blue-400/20 rounded-full" />
          <div className="absolute inset-3 border-2 border-emerald-400/20 rounded-full" />
          <div className="absolute inset-6 border-2 border-violet-400/20 rounded-full" />
        </div>
      </motion.div>

      {/* Dynamic Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M10,100 Q250,50 490,200"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
          animate={{
            strokeDashoffset: [0, -100],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.path
          d="M500,50 Q300,150 100,300"
          stroke="url(#line-gradient-2)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
          animate={{
            strokeDashoffset: [100, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-white overflow-hidden">
        <RoboticBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-blue-900/50"></div>
        
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
          style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x * 2}deg) rotateX(${mousePosition.y * -2}deg)`,
            transition: 'transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
          }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm"
              >
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">Pioneering African Innovation</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Robotics, AI &
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
                  Emerging Tech
                </motion.span>
                <br />
                <span className="bg-gradient-to-r from-emerald-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  for Africa
                </span>
              </h1>
              
              <motion.p 
                className="text-xl mb-10 text-gray-300 leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Pioneering research-driven solutions to address Africa's most pressing challenges through cutting-edge technology and innovation.
              </motion.p>
              
              <div className="flex flex-wrap gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }} 
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link 
                    to="/research" 
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
                  >
                    <span className="relative z-10">Explore Solutions</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                  </Link>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }} 
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <Link 
                    to="/contact" 
                    className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
                  >
                    <span>Partner With Us</span>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div 
                className="relative bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl"
                whileHover={{ y: -5 }}
                animate={{
                  boxShadow: [
                    "0 20px 40px rgba(0, 0, 0, 0.3)",
                    "0 20px 60px rgba(59, 130, 246, 0.3)",
                    "0 20px 40px rgba(0, 0, 0, 0.3)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-2xl opacity-20 blur" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500" />
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-400 to-pink-500" />
                    <span className="ml-auto text-sm font-medium text-cyan-300">Case Study</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Latest Breakthrough</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our team successfully deployed AI-assisted irrigation robots in Kenya, increasing crop yields by 40% while reducing water usage by 60%.
                  </p>
                  <Link to="/news" className="group inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium">
                    <span>Read Case Study</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Research Highlights */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Focus Areas</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Research & Innovation
              <span className="block text-3xl md:text-4xl font-normal text-gray-600 mt-2">
                Driving Technological Advancement
              </span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchHighlights.map((item, index) => (
              <motion.div 
                key={index} 
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur" 
                  style={{ background: `linear-gradient(135deg, ${item.gradient.replace('from-', '').replace('to-', '').replace('-500', '')}500, transparent)` }}
                />
                <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <motion.div 
                    className={`mb-6 p-4 rounded-xl bg-gradient-to-br ${item.gradient} w-fit`}
                    whileHover={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors">
                      <span>Learn more</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">Trusted Partnerships</span>
              <Sparkles className="h-5 w-5 text-cyan-400" />
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Global Collaborations
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Working with leading organizations worldwide to drive innovation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {['UNICEF', 'African Union', 'MIT', 'UNDP', 'IBM Research', 'Google AI'].map((partner, index) => (
              <motion.div 
                key={partner} 
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <div className="h-12 flex items-center justify-center">
                    <span className="text-xl font-semibold text-transparent bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text group-hover:from-white group-hover:to-cyan-200 transition-all duration-300">
                      {partner}
                    </span>
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

export default Home;