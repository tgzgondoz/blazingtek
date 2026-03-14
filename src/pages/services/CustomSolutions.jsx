import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings, Home, Sun, Camera, Lock, Factory, ArrowRight } from 'lucide-react';
import { useState } from 'react';

// Import local images
import homeAutomation from '../../assets/HomeAutomation.jpg';
import industrialAutomation from '../../assets/Industrial Automation.jpg';
import cctvInstallation from '../../assets/CCTVInstallation.jpg';
import accessControl from '../../assets/AccessControl.webp';
import solarInstallations from '../../assets/SolarInstallations.jpg';
import bg4 from '../../assets/bg4.jpg';

const CustomSolutions = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutions = [
    {
      id: 'home',
      industry: "Home Automation",
      icon: <Home className="w-8 h-8" />,
      image: homeAutomation,
      description: "Transform your living space into a smart, efficient, and comfortable environment",
      applications: [
        "Smart Lighting Control",
        "Climate & HVAC Automation", 
        "Voice Integration (Alexa/Google)",
        "Entertainment Systems"
      ]
    },
    {
      id: 'solar',
      industry: "Solar Installations",
      icon: <Sun className="w-8 h-8" />,
      image: solarInstallations,
      description: "Complete solar energy solutions for residential and commercial properties",
      applications: [
        "Residential Solar PV Systems",
        "Commercial Solar Installations",
        "Battery Storage Solutions",
        "Grid-Tie & Off-Grid Systems"
      ]
    },
    {
      id: 'cctv',
      industry: "CCTV Installation",
      icon: <Camera className="w-8 h-8" />,
      image: cctvInstallation,
      description: "Professional security camera systems for 24/7 surveillance and peace of mind",
      applications: [
        "HD & 4K Surveillance Systems",
        "Remote Mobile Monitoring",
        "Motion Detection Alerts",
        "Cloud & Local Storage"
      ]
    },
    {
      id: 'access',
      industry: "Access Control",
      icon: <Lock className="w-8 h-8" />,
      image: accessControl,
      description: "Advanced security systems to manage and monitor entry to your property",
      applications: [
        "Biometric Fingerprint Systems",
        "RFID Keycard Access",
        "Visitor Management Systems",
        "Time & Attendance Tracking"
      ]
    },
    {
      id: 'industrial',
      industry: "Industrial Automation",
      icon: <Factory className="w-8 h-8" />,
      image: industrialAutomation,
      description: "Comprehensive automation solutions for manufacturing and industrial facilities",
      applications: [
        "PLC Programming & Integration",
        "Process Control Systems",
        "SCADA Systems",
        "Industrial IoT"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={bg4} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <Settings className="w-12 h-12 text-orange-400" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Custom <span className="text-orange-400">Automation</span> Solutions
            </h1>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Tailored automation systems for residential, commercial, and industrial applications.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Smart Homes</span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Solar Energy</span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Security Systems</span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Access Control</span>
            <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Industrial IoT</span>
          </div>
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-orange-400/50 transition-all group"
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={solution.image} 
                  alt={solution.industry}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-3 right-3 p-2 bg-orange-400/20 rounded-lg">
                  <div className="text-orange-400">{solution.icon}</div>
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{solution.industry}</h3>
                <p className="text-gray-400 text-sm mb-4">{solution.description}</p>
                
                <div className="space-y-2 mb-5">
                  {solution.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5"></div>
                      <span className="text-gray-300">{app}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => setSelectedSolution(solution)}
                  className="w-full py-2.5 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 group"
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:border-orange-400/50 transition"
          >
            ← Back to Services
          </Link>
        </div>
      </section>

      {/* Quote Request Modal */}
      {selectedSolution && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-xl max-w-md w-full p-6 border border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-1">Request Quote</h3>
            <p className="text-gray-400 text-sm mb-5">for {selectedSolution.industry}</p>
            
            <form className="space-y-3">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:border-orange-400 outline-none text-sm"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:border-orange-400 outline-none text-sm"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:border-orange-400 outline-none text-sm"
              />
              <textarea 
                placeholder="Tell us about your project..." 
                rows="3"
                className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:border-orange-400 outline-none text-sm"
              ></textarea>
              
              <div className="flex gap-3 pt-3">
                <button className="flex-1 px-4 py-2.5 bg-orange-400 hover:bg-orange-500 rounded-lg font-semibold text-sm transition">
                  Submit
                </button>
                <button 
                  onClick={() => setSelectedSolution(null)}
                  className="px-4 py-2.5 border border-gray-700 hover:border-gray-600 rounded-lg text-sm transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CustomSolutions;