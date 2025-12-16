// Services.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import RoboticsImage from '../assets/Robotics.jpg';
import WorkshopsImage from '../assets/Workshops.jpg';
import SolutionsImage from '../assets/Solutions.webp';

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
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Professional robotics solutions tailored for your needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {otherPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
              >
                {page.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <Link to={service.link} className="block">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="text-blue-600 text-sm font-medium flex items-center">
                      Learn more
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {otherPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="text-center px-3 py-2 bg-white hover:bg-gray-100 rounded border border-gray-200 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;