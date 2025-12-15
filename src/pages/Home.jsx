import { ArrowRight, Cpu, Zap, Users, Globe, ChevronRight, Sparkles, Target, Rocket, Shield, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Import the slide images
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentBreakthrough, setCurrentBreakthrough] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Auto-rotate breakthroughs
    const interval = setInterval(() => {
      setCurrentBreakthrough((prev) => (prev + 1) % breakthroughs.length);
    }, 5000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const breakthroughs = [
    {
      image: slide1,
      alt: "AI-Assisted Irrigation Robot in Kenya"
    },
    {
      image: slide2,
      alt: "Solar-Powered Agricultural Drone"
    },
    {
      image: slide3,
      alt: "3D Printed Prosthetic Technology"
    },
    {
      image: slide4,
      alt: "Smart Water Purification System"
    }
  ];

  const researchHighlights = [
    { 
      title: "AI-Powered Agriculture", 
      description: "Developing autonomous drones for precision farming in Sub-Saharan Africa",
      icon: <Cpu className="h-8 w-8" />,
      gradient: "from-emerald-500 to-cyan-500",
      features: ["Autonomous Navigation", "Soil Analysis AI", "Yield Optimization"],
      stats: "15+ Deployments"
    },
    { 
      title: "Solar Robotics", 
      description: "Sustainable robotic systems powered entirely by renewable energy",
      icon: <Zap className="h-8 w-8" />,
      gradient: "from-amber-500 to-orange-500",
      features: ["24/7 Solar Power", "Energy Storage", "Low Maintenance"],
      stats: "100% Renewable"
    },
    { 
      title: "Assistive Technology", 
      description: "Custom prosthetic limbs and mobility aids using 3D printing",
      icon: <Users className="h-8 w-8" />,
      gradient: "from-violet-500 to-purple-500",
      features: ["3D Scanning", "Custom Design", "Rapid Production"],
      stats: "500+ Lives Impacted"
    },
    { 
      title: "Global Impact", 
      description: "Collaborating with 15+ African nations on tech solutions",
      icon: <Globe className="h-8 w-8" />,
      gradient: "from-blue-500 to-indigo-500",
      features: ["International Research", "Local Partnerships", "Scale Solutions"],
      stats: "15+ Countries"
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
            
            {/* Animated Image Slides Carousel */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl overflow-hidden">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-2xl opacity-20 blur" />
                
                {/* Carousel Container */}
                <div className="relative">
                  {/* Carousel Controls */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex gap-2">
                      {breakthroughs.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentBreakthrough(index)}
                          className="relative group"
                        >
                          <motion.div
                            className={`w-2 h-2 rounded-full ${index === currentBreakthrough ? 'bg-cyan-400' : 'bg-white/50'}`}
                            whileHover={{ scale: 1.5 }}
                          />
                          {index === currentBreakthrough && (
                            <motion.div
                              className="absolute inset-0 border border-cyan-400 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1.5 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Carousel Images */}
                  <div className="relative h-96 rounded-xl overflow-hidden">
                    {breakthroughs.map((breakthrough, index) => (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{
                          opacity: currentBreakthrough === index ? 1 : 0,
                          scale: currentBreakthrough === index ? 1 : 1.1,
                          filter: currentBreakthrough === index ? 'brightness(1)' : 'brightness(0.7)'
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        style={{ pointerEvents: currentBreakthrough === index ? 'auto' : 'none' }}
                      >
                        <div className="relative h-full w-full">
                          {/* Image */}
                          <img
                            src={breakthrough.image}
                            alt={breakthrough.alt}
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={(e) => {
                              console.error(`Error loading image: ${breakthrough.image}`);
                              e.target.onerror = null;
                              e.target.src = `https://via.placeholder.com/600x400/1e3a8a/0ea5e9?text=${encodeURIComponent(breakthrough.alt)}`;
                            }}
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                          
                          {/* Image Info Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ 
                                opacity: currentBreakthrough === index ? 1 : 0,
                                y: currentBreakthrough === index ? 0 : 20
                              }}
                              transition={{ delay: 0.3 }}
                              className="text-white"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500" />
                                <span className="text-sm font-medium text-cyan-300">Latest Breakthrough</span>
                              </div>
                              <h3 className="text-xl font-bold mb-2">Innovation in Action</h3>
                              <p className="text-sm text-gray-300 mb-4">
                                Our team successfully deployed AI-assisted irrigation robots in Kenya, increasing crop yields by 40% while reducing water usage by 60%.
                              </p>
                              <Link 
                                to="/news" 
                                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 group"
                              >
                                <span>Read Case Study</span>
                                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Navigation Arrows */}
                  <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                    <button
                      onClick={() => setCurrentBreakthrough((prev) => (prev - 1 + breakthroughs.length) % breakthroughs.length)}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all hover:scale-110"
                    >
                      <ChevronRight className="h-4 w-4 rotate-180" />
                    </button>
                    <button
                      onClick={() => setCurrentBreakthrough((prev) => (prev + 1) % breakthroughs.length)}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all hover:scale-110"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Professional Research & Innovation Section */}
      <section className="relative py-28 bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Research & Innovation</span>
              </div>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Driving Technological
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 bg-clip-text text-transparent">
                Advancement
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Pioneering cutting-edge research across multiple disciplines to solve Africa's most pressing challenges through innovative technological solutions.
            </motion.p>
          </motion.div>
          
          {/* Research Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchHighlights.map((item, index) => (
              <motion.div 
                key={index} 
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                {/* Card with Glow Effect */}
                <div className="relative h-full">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                  
                  {/* Main Card */}
                  <div className="relative h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-lg shadow-gray-100/50 group-hover:shadow-2xl group-hover:shadow-blue-100/50 transition-all duration-300 group-hover:border-transparent">
                    {/* Icon Container */}
                    <motion.div 
                      className={`relative mb-8 p-4 rounded-xl bg-gradient-to-br ${item.gradient} w-fit`}
                      whileHover={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm" />
                      <div className="relative text-white">
                        {item.icon}
                      </div>
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {item.features.map((feature, featureIndex) => (
                        <motion.div 
                          key={featureIndex}
                          className="flex items-center gap-3 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1 + 0.3 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Stats Badge */}
                    <div className="mt-auto pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors cursor-pointer">
                          <span>Learn more</span>
                          <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                        
                        <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100">
                          <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            {item.stats}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to Action */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/research"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
            >
              <span>View All Research Projects</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;