import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import RoboticsImage from '../assets/Robotics.jpg';
import WorkshopsImage from '../assets/Workshops.jpg';
import SolutionsImage from '../assets/Solutions.webp';
import bgImage from '../assets/bg3.jpg'; // Import the background image

const Services = () => {
  const services = [
    {
      title: "Robotics Kits",
      description: "Educational and development kits for universities and research institutions.",
      image: RoboticsImage,
      link: "/services/robotics-kits"
    },
    {
      title: "Workshops & Training",
      description: "Custom training programs in AI, robotics, and emerging technologies.",
      image: WorkshopsImage,
      link: "/services/workshops"
    },
    {
      title: "Custom Solutions",
      description: "Bespoke robotic systems for industrial and research applications.",
      image: SolutionsImage,
      link: "/services/custom-solutions"
    }
  ];

  const otherPages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Research", path: "/research" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with bg.jpg - MATCHING HOME PAGE STYLE */}
      <section className="relative text-white py-16 md:py-20 overflow-hidden">
        {/* Background with bg.jpg */}
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="Services Background"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              console.error("Error loading background image");
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
          {/* Updated to match home page gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-emerald-900/20"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto px-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            <span className="text-white drop-shadow-lg">Our </span>
            <span className="bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent font-extrabold drop-shadow-lg">
              Services
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-lg"
          >
            Professional robotics solutions tailored for your needs
          </motion.p>

          {/* Decorative line - Matching home page */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-8 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full drop-shadow-lg"
          />
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-sm font-semibold text-blue-600">What We Offer</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Professional Robotics Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive robotics solutions for education, industry, and research
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-blue-200">
                  <Link to={service.link} className="block">
                    <div className="h-56 overflow-hidden relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      {/* Gradient overlay at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"></div>
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                          Service
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-5 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                          Learn more
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </span>
                        <div className="text-xs font-medium text-gray-500 group-hover:text-blue-500 transition-colors">
                          Click to explore →
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-8 border border-blue-100"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <h3 className="text-lg font-bold text-gray-900">Explore More</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Discover other areas of our work and expertise
                </p>
              </div>
              
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {otherPages.map((page, index) => (
                  <motion.div
                    key={page.path}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={page.path}
                      className="block text-center px-4 py-3 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 hover:border-blue-300 hover:shadow-sm"
                    >
                      {page.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;