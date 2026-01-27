import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings, Home, Sun, Camera, Lock, Factory } from 'lucide-react';

const CustomSolutions = () => {
  const solutions = [
    {
      industry: "Home Automation",
      icon: <Home className="w-8 h-8" />,
      applications: ["Smart Lighting", "Climate Control", "Voice Integration", "Entertainment Systems"]
    },
    {
      industry: "Solar Installations",
      icon: <Sun className="w-8 h-8" />,
      applications: ["Residential Solar", "Commercial PV Systems", "Solar Monitoring", "Battery Storage"]
    },
    {
      industry: "CCTV Installation",
      icon: <Camera className="w-8 h-8" />,
      applications: ["HD Surveillance", "Remote Monitoring", "Motion Detection", "Cloud Storage"]
    },
    {
      industry: "Access Control",
      icon: <Lock className="w-8 h-8" />,
      applications: ["Biometric Systems", "Keycard Access", "Visitor Management", "Time & Attendance"]
    },
    {
      industry: "Industrial Automation",
      icon: <Factory className="w-8 h-8" />,
      applications: ["PLC Systems", "Process Control", "Machine Integration", "SCADA Systems"]
    }
  ];

  const processSteps = [
    { step: "Consultation", description: "Needs assessment and site survey" },
    { step: "Design", description: "Custom solution blueprint" },
    { step: "Installation", description: "Professional implementation" },
    { step: "Support", description: "Ongoing maintenance and support" }
  ];

  const caseStudies = [
    {
      title: "Smart Office Complex",
      description: "Complete automation system for 50,000 sq ft commercial building",
      features: ["Energy Management", "Integrated Security", "Centralized Control"]
    },
    {
      title: "Industrial Facility",
      description: "Automation solution for manufacturing plant with 24/7 monitoring",
      features: ["Process Automation", "Safety Systems", "Remote Access"]
    },
    {
      title: "Residential Smart Home",
      description: "Full home automation for luxury residence",
      features: ["Voice Control", "Energy Efficiency", "Security Integration"]
    }
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
              Custom <span className="text-gray-300">Automation Solutions</span>
            </h1>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Tailored automation systems for residential, commercial, and industrial applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            <span className="px-4 py-2 bg-white/10 rounded-full">Smart Homes</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">Solar Energy</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">Security Systems</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">Access Control</span>
            <span className="px-4 py-2 bg-white/10 rounded-full">Industrial IoT</span>
          </div>
        </motion.div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Specialized Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold">{solution.industry}</h3>
              </div>
              
              <div className="space-y-2 mb-8">
                <h4 className="font-medium text-gray-300 mb-3">Key Applications:</h4>
                {solution.applications.map((app, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-gray-300">{app}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
                Request Quote
              </button>
            </motion.div>
          ))}
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