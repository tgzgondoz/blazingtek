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

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Settings className="w-12 h-12 text-purple-400" />
              <h1 className="text-4xl md:text-5xl font-bold">Custom Solutions</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bespoke robotic systems tailored to solve complex challenges in 
              industrial, research, and specialized applications.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500/20 rounded-lg text-purple-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{solution.industry}</h3>
                </div>
                
                <p className="text-gray-400 mb-6">{solution.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-300">Applications:</h4>
                  {solution.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-3 pl-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      <span className="text-gray-400">{app}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors">
                  Request Consultation
                </button>
              </motion.div>
            ))}
          </div>

          <div className="bg-white/5 rounded-xl p-8 border border-white/10 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {["Discovery", "Design", "Development", "Deployment"].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold text-xl">
                    {index + 1}
                  </div>
                  <h4 className="font-medium mb-2">{step}</h4>
                  <p className="text-sm text-gray-400">
                    {index === 0 && "Understand requirements"}
                    {index === 1 && "Create solution blueprint"}
                    {index === 2 && "Build and test system"}
                    {index === 3 && "Implement and support"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 rounded-lg transition-colors"
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