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
      {/* Header - Glass Effect Style */}
      <section className="relative text-white py-20 md:py-24 overflow-hidden">
        {/* Background with visible image */}
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="Services Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(0.8) contrast(1.1)'
            }}
            onError={(e) => {
              console.error("Error loading background image");
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F14]/50 via-[#0A0F14]/70 to-[#0A0F14]"></div>
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
            className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
          >
            <span className="text-white drop-shadow-lg">Our </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#0066CC] font-bold drop-shadow-lg">
              Services
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-lg"
          >
            Professional robotics solutions tailored for your needs
          </motion.p>

          {/* Accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-8 h-1.5 bg-gradient-to-r from-[#00D4AA] to-[#0066CC] rounded-full shadow-lg"
          />
        </motion.div>
      </section>

      {/* Services Grid - Glass Effect */}
      <section className="py-16 md:py-20 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 212, 170, 0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional Robotics Solutions
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#00D4AA] to-[#0066CC] mx-auto mb-6 rounded-full shadow-lg"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Comprehensive robotics solutions for education, industry, and research
            </p>
          </motion.div>

          {/* Services Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                {/* Glass Effect Card */}
                <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,212,170,0.15)] transition-all duration-300 h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00D4AA]/0 via-[#00D4AA]/5 to-[#0066CC]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <Link to={service.link} className="block h-full">
                    {/* Image Container */}
                    <div className="h-56 overflow-hidden relative">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Glass overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F14]/50 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 relative">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#00D4AA]"></div>
                        <span className="text-xs font-semibold text-[#00D4AA] uppercase tracking-wider">
                          Service
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4AA] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-5 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <span className="text-[#00D4AA] font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform duration-300">
                            Learn more
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </span>
                          <div className="text-xs text-gray-400 group-hover:text-[#00D4AA] transition-colors duration-300">
                            Click to explore →
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Links - Glass Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
              {/* Subtle glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0066CC]/5 to-[#00D4AA]/5 opacity-30 blur-xl"></div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative z-10">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#00D4AA]"></div>
                    <h3 className="text-lg font-bold text-white">Explore More</h3>
                  </div>
                  <p className="text-gray-300 text-sm">
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
                        className="block text-center px-4 py-3 backdrop-blur-sm bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:border-[#00D4AA]/30"
                      >
                        {page.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;