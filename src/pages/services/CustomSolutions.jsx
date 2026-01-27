import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings, Factory, Cpu, Shield } from 'lucide-react';

const CustomSolutions = () => {
  const solutions = [
    {
      industry: "Manufacturing",
      icon: <Factory className="w-8 h-8" />,
      applications: ["Automated Assembly", "Quality Inspection", "Material Handling"]
    },
    {
      industry: "Healthcare",
      icon: <Shield className="w-8 h-8" />,
      applications: ["Surgical Assistance", "Rehabilitation", "Hospital Logistics"]
    },
    {
      industry: "Agriculture",
      icon: <Cpu className="w-8 h-8" />,
      applications: ["Precision Farming", "Harvest Automation", "Crop Monitoring"]
    }
  ];

  const processSteps = [
    { step: "Discovery", description: "Understand requirements" },
    { step: "Design", description: "Create solution blueprint" },
    { step: "Development", description: "Build and test system" },
    { step: "Deployment", description: "Implement and support" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <Settings className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Custom <span className="text-gray-300">Solutions</span>
            </h1>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Bespoke robotic systems for industrial, research, and specialized applications.
          </p>
        </motion.div>
      </section>

      {/* Solutions */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-lg">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold">{solution.industry}</h3>
              </div>
              
              <div className="space-y-2 mb-8">
                <h4 className="font-medium text-gray-300">Applications:</h4>
                {solution.applications.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-gray-300">{app}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200">
                Request Consultation
              </button>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <h4 className="font-medium mb-2">{step.step}</h4>
                <p className="text-sm text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:border-white/40 transition"
          >
            ← Back to Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CustomSolutions;