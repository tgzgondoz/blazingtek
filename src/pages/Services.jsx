import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import RoboticsImage from '../assets/Robotics.jpg';
import WorkshopsImage from '../assets/Workshops.jpg';
import SolutionsImage from '../assets/Solutions.webp';
import bgImage from '../assets/bg3.jpg';

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
    <div className="min-h-screen bg-[#0A0F14]">
      {/* Header - Matching Professional Robotics Theme */}
      <section className="relative text-white py-16 md:py-20 overflow-hidden">
        {/* Background */}
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
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0A0F14] opacity-90"></div>
        </div>

        {/* Animated data points */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`data-${i}`}
              className="absolute w-0.5 h-0.5 bg-[#00D4AA] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Content */}
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
            <span className="text-white">Our </span>
            <span className="text-[#00D4AA] font-bold">Services</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Professional robotics solutions tailored for your needs
          </motion.p>

          {/* Accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-8 h-1 bg-[#00D4AA] rounded-full"
          />
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#0A0F14]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="mb-6">
              <div className="w-16 h-1 bg-[#00D4AA] mx-auto mb-4"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Professional Robotics Solutions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
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
                <div className="bg-[#1A232E] rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/5 hover:border-[#00D4AA]/30">
                  <Link to={service.link} className="block">
                    <div className="h-56 overflow-hidden relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Color blending overlay */}
                      <div className="absolute inset-0 bg-[#0A0F14] mix-blend-multiply opacity-40"></div>
                      <div className="absolute inset-0 bg-[#0066CC] mix-blend-overlay opacity-20"></div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#00D4AA]"></div>
                        <span className="text-xs font-semibold text-[#00D4AA] uppercase tracking-wider">
                          Service
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4AA] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-5 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="text-[#00D4AA] font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform">
                          Learn more
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </span>
                        <div className="text-xs font-medium text-gray-500 group-hover:text-[#00D4AA] transition-colors">
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
            className="bg-[#1A232E] rounded-xl p-8 border border-white/5"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D4AA]"></div>
                  <h3 className="text-lg font-bold text-white">Explore More</h3>
                </div>
                <p className="text-gray-400 text-sm">
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
                      className="block text-center px-4 py-3 bg-[#0A0F14] hover:bg-[#0066CC]/20 rounded-lg border border-white/10 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:border-[#0066CC]"
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