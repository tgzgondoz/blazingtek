// Services.jsx
import { 
  Package, 
  GraduationCap, 
  Wrench, 
  Cpu, 
  Cloud, 
  Shield,
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <Package className="h-12 w-12" />,
      title: "Robotics Kits",
      description: "Educational and development kits for universities and research institutions",
      features: ["Modular design", "Open-source software", "Curriculum materials", "Cloud integration"],
      gradient: "from-blue-500 to-cyan-500",
      applications: ["Education", "Research", "Prototyping"],
      delivery: "2-4 weeks"
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Workshops & Training",
      description: "Custom training programs in AI, robotics, and emerging technologies",
      features: ["Corporate training", "Academic workshops", "Hands-on labs", "Certification"],
      gradient: "from-purple-500 to-pink-500",
      applications: ["Skill Development", "Team Upskilling", "Technical Certification"],
      delivery: "Flexible scheduling"
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Custom Solutions",
      description: "Bespoke robotic systems for industrial and research applications",
      features: ["Requirement analysis", "Prototype development", "Deployment support", "Maintenance"],
      gradient: "from-emerald-500 to-green-500",
      applications: ["Industry Automation", "Research Projects", "Specialized Applications"],
      delivery: "8-12 weeks"
    },
    {
      icon: <Cpu className="h-12 w-12" />,
      title: "Robot Rentals",
      description: "Short-term access to advanced robotic platforms for research",
      features: ["Flexible terms", "Technical support", "Maintenance included", "Training"],
      gradient: "from-amber-500 to-orange-500",
      applications: ["Research Trials", "Event Demos", "Testing & Validation"],
      delivery: "Immediate availability"
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: "Software Platform",
      description: "Cloud-based robotics simulation and development environment",
      features: ["Real-time simulation", "Collaboration tools", "API access", "Analytics"],
      gradient: "from-indigo-500 to-blue-500",
      applications: ["Virtual Testing", "Team Collaboration", "Data Analysis"],
      delivery: "Instant access"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Maintenance & Support",
      description: "Comprehensive support packages for deployed systems",
      features: ["24/7 monitoring", "Preventive maintenance", "Remote diagnostics", "Updates"],
      gradient: "from-rose-500 to-red-500",
      applications: ["System Reliability", "Performance Optimization", "Risk Management"],
      delivery: "Ongoing"
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
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Service Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions for education, research, and industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="p-8">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Key Features
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Applications</div>
                        <div className="text-sm font-medium text-gray-900">
                          {service.applications.join(", ")}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Delivery</div>
                        <div className="text-sm font-medium text-gray-900 flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {service.delivery}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
                    <button className="group w-full flex items-center justify-between text-blue-600 hover:text-blue-700 font-semibold">
                      <span>Request Service Details</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
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