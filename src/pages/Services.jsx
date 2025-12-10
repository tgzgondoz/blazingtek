// Services.jsx
import { Package, GraduationCap, Wrench, Cpu, Cloud, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Package className="h-12 w-12" />,
      title: "Robotics Kits",
      description: "Educational and development kits for universities and research institutions",
      features: ["Modular design", "Open-source software", "Curriculum materials"]
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Workshops & Training",
      description: "Custom training programs in AI, robotics, and emerging technologies",
      features: ["Corporate training", "Academic workshops", "Hands-on labs"]
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Custom Solutions",
      description: "Bespoke robotic systems for industrial and research applications",
      features: ["Requirement analysis", "Prototype development", "Deployment support"]
    },
    {
      icon: <Cpu className="h-12 w-12" />,
      title: "Robot Rentals",
      description: "Short-term access to advanced robotic platforms for research",
      features: ["Flexible terms", "Technical support", "Maintenance included"]
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: "Software Platform",
      description: "Cloud-based robotics simulation and development environment",
      features: ["Real-time simulation", "Collaboration tools", "API access"]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Maintenance & Support",
      description: "Comprehensive support packages for deployed systems",
      features: ["24/7 monitoring", "Preventive maintenance", "Remote diagnostics"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Research-Driven Services</h1>
          <p className="text-xl max-w-3xl">
            Our services integrate cutting-edge research with practical applications, 
            ensuring our solutions are both innovative and impactful.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="p-8">
                  <div className="text-blue-600 mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 px-8 py-4 border-t">
                  <button className="text-blue-600 font-semibold hover:text-blue-800">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Integration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Research-Backed Solutions
                </h2>
                <p className="mb-6">
                  Every service we offer is informed by ongoing research in our labs. 
                  We don't just sell products—we deliver proven, research-validated solutions.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                  View Research Projects
                </button>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Active Research Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    AI-powered agricultural robotics
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Low-cost prosthetic development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Solar-powered autonomous systems
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    Edge AI for remote monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;