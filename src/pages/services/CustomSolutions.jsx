import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings, Factory, Cpu, Shield } from 'lucide-react';

const CustomSolutions = () => {
  const solutions = [
    {
      industry: "Manufacturing",
      icon: <Factory className="w-8 h-8" />,
      applications: ["Automated Assembly", "Quality Inspection", "Material Handling"],
      description: "Robotic systems for production line optimization"
    },
    {
      industry: "Healthcare",
      icon: <Shield className="w-8 h-8" />,
      applications: ["Surgical Assistance", "Rehabilitation", "Hospital Logistics"],
      description: "Medical-grade robotic solutions"
    },
    {
      industry: "Agriculture",
      icon: <Cpu className="w-8 h-8" />,
      applications: ["Precision Farming", "Harvest Automation", "Crop Monitoring"],
      description: "Sustainable agricultural robotics"
    }
  ];

  const processSteps = [
    { step: "Discovery", description: "Understand requirements" },
    { step: "Design", description: "Create solution blueprint" },
    { step: "Development", description: "Build and test system" },
    { step: "Deployment", description: "Implement and support" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden">
        {/* Background matching Home/Abouts/RoboticsKits/Workshops */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/95 z-10"></div>
          
          {/* Minimal particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute top-0 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 0.8 + 0.3}px`,
                height: `${Math.random() * 0.8 + 0.3}px`,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              initial={{ y: -20 }}
              animate={{
                y: "100vh",
                x: Math.random() * 5 - 2.5,
              }}
              transition={{
                duration: Math.random() * 50 + 70,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 20,
              }}
            />
          ))}
          
          {/* Static dots */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern 
                  id="dots-pattern" 
                  x="0" 
                  y="0" 
                  width="150" 
                  height="150" 
                  patternUnits="userSpaceOnUse"
                >
                  <circle 
                    cx="75" 
                    cy="75" 
                    r="0.8" 
                    fill="#FFFFFF"
                    fillOpacity="0.1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots-pattern)" />
            </svg>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <Settings className="w-12 h-12 text-white" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Custom <span className="text-gray-300">Solutions</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto bg-white/5 px-6 py-4 rounded-lg border border-gray-700">
              Bespoke robotic systems tailored to solve complex challenges in 
              industrial, research, and specialized applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative pb-24 -mt-12">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-white/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/10 rounded-lg text-white">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{solution.industry}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-8">{solution.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-300">Applications:</h4>
                    <div className="space-y-2">
                      {solution.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-white" />
                          <span className="text-gray-300">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button className="w-full py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-colors">
                      Request Consultation
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <h4 className="font-medium text-white mb-2">{step.step}</h4>
                  <p className="text-sm text-gray-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Back Link */}
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-white/40 rounded-lg transition-colors text-gray-300 hover:text-white"
            >
              ← Back to Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomSolutions;