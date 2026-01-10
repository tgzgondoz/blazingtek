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
      {/* Header */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="Services Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0A0F14]/80"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto px-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Professional robotics solutions tailored for your needs
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-8 h-1 bg-white rounded-full"
          />
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Robotics Solutions
            </h2>
            <div className="w-20 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  <Link to={service.link} className="block h-full">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      
                      <div className="pt-4 border-t border-white/10">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium text-sm flex items-center">
                            Learn more
                            <ArrowRight className="w-3 h-3 ml-2" />
                          </span>
                          <div className="text-xs text-gray-500">
                            Click to explore
                          </div>
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
            className="bg-white/5 rounded-xl p-6 border border-white/10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Explore More
                </h3>
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
                      className="block text-center px-3 py-2 bg-white/5 hover:bg-white/10 rounded border border-white/10 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
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