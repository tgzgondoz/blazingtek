// Home.jsx
import { ArrowRight, Cpu, Zap, Users, Globe } from 'lucide-react';
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
      icon: <Cpu className="h-8 w-8 text-blue-500" />
    },
    { 
      title: "Solar Robotics", 
      description: "Sustainable robotic systems powered entirely by renewable energy",
      icon: <Zap className="h-8 w-8 text-yellow-500" />
    },
    { 
      title: "Assistive Technology", 
      description: "Custom prosthetic limbs and mobility aids using 3D printing",
      icon: <Users className="h-8 w-8 text-green-500" />
    },
    { 
      title: "Global Impact", 
      description: "Collaborating with 15+ African nations on tech solutions",
      icon: <Globe className="h-8 w-8 text-purple-500" />
    },
  ];

  const RoboticBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Circuit Board Grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Robotic Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-blue-400 opacity-30">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1" />
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1" />
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-purple-400 opacity-20">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" />
          <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="1" />
          <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Data Flow Lines */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{
            x: ['0%', '100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          animate={{
            x: ['100%', '0%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          animate={{
            x: ['0%', '100%'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Binary Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-xs font-mono text-green-400 opacity-30"
          initial={{
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
          }}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        >
          {Math.random() > 0.5 ? '1011' : '0100'}
        </motion.div>
      ))}
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-900 via-gray-900 to-blue-900 text-white overflow-hidden">
        <RoboticBackground />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Robotics, AI & Emerging Tech Research 
                <motion.span 
                  className="text-blue-400 block"
                  animate={{ textShadow: ["0 0 8px rgba(59, 130, 246, 0.5)", "0 0 16px rgba(59, 130, 246, 0.8)", "0 0 8px rgba(59, 130, 246, 0.5)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  for Africa
                </motion.span>
              </h1>
              <motion.p 
                className="text-xl mb-8 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Pioneering research-driven solutions to address Africa's most pressing challenges through cutting-edge technology and innovation.
              </motion.p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/research" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center transition"
                  >
                    Explore Solutions
                    <ArrowRight className="ml-2" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/contact" 
                    className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition"
                  >
                    Partner With Us
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl"
                whileHover={{ scale: 1.02 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 30px rgba(168, 85, 247, 0.8)",
                    "0 0 20px rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="bg-gray-900 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Latest Research Breakthrough</h3>
                  <p className="text-gray-300 mb-4">
                    Our team successfully deployed AI-assisted irrigation robots in Kenya, increasing crop yields by 40% while reducing water usage by 60%.
                  </p>
                  <Link to="/news" className="text-blue-400 hover:text-blue-300 font-semibold">
                    Read Case Study →
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Research Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Research & Innovation Focus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving technological advancement through interdisciplinary research and collaborative innovation
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchHighlights.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
              >
                <motion.div 
                  className="mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Trusted By Leading Organizations
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['UNICEF', 'African Union', 'MIT', 'UNDP', 'IBM Research', 'Google AI'].map((partner, index) => (
              <motion.div 
                key={partner} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="h-16 flex items-center justify-center">
                  <span className="text-xl font-semibold text-gray-300">{partner}</span>
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