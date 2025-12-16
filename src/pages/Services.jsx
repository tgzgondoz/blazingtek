// Services.jsx
import { 
  Package, 
  GraduationCap, 
  Wrench
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import images
import RoboticsImage from '../assets/Robotics.jpg';
import WorkshopsImage from '../assets/Workshops.jpg';
import SolutionsImage from '../assets/Solutions.webp';

const Services = () => {
  const services = [
    {
      icon: <Package className="h-12 w-12" />,
      title: "Robotics Kits",
      description: "Educational and development kits for universities and research institutions",
      features: ["Modular design", "Open-source software", "Curriculum materials", "Cloud integration"],
      gradient: "from-blue-500 to-cyan-500",
      applications: ["Education", "Research", "Prototyping"],
      delivery: "2-4 weeks",
      image: RoboticsImage
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Workshops & Training",
      description: "Custom training programs in AI, robotics, and emerging technologies",
      features: ["Corporate training", "Academic workshops", "Hands-on labs", "Certification"],
      gradient: "from-purple-500 to-pink-500",
      applications: ["Skill Development", "Team Upskilling", "Technical Certification"],
      delivery: "Flexible scheduling",
      image: WorkshopsImage
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Custom Solutions",
      description: "Bespoke robotic systems for industrial and research applications",
      features: ["Requirement analysis", "Prototype development", "Deployment support", "Maintenance"],
      gradient: "from-emerald-500 to-green-500",
      applications: ["Industry Automation", "Research Projects", "Specialized Applications"],
      delivery: "8-12 weeks",
      image: SolutionsImage
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 text-white py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Our Services
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto"
          >
            Comprehensive robotics solutions tailored to meet your specific needs
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  {/* Image Section */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
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

export default Services;