import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Package } from 'lucide-react';

const RoboticsKits = () => {
  const kits = [
    {
      name: "Beginner Kit",
      level: "Introductory",
      description: "Perfect for students starting their robotics journey",
      features: ["Basic sensors", "Motor controllers", "Arduino-based", "Learning materials"],
      price: "$299"
    },
    {
      name: "Advanced Kit",
      level: "University Level",
      description: "For university labs and advanced research",
      features: ["ROS integration", "Advanced sensors", "Customizable modules", "Documentation"],
      price: "$899"
    },
    {
      name: "Research Kit",
      level: "Professional",
      description: "For cutting-edge research institutions",
      features: ["AI capabilities", "Cloud integration", "Multi-robot support", "Priority support"],
      price: "$1,999"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Robotics Kits
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive educational and development kits designed for universities, 
              research institutions, and robotics enthusiasts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kits Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {kits.map((kit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full mb-2">
                      {kit.level}
                    </span>
                    <h3 className="text-2xl font-bold">{kit.name}</h3>
                  </div>
                  <Package className="w-10 h-10 text-blue-400" />
                </div>
                
                <p className="text-gray-400 mb-6">{kit.description}</p>
                
                <div className="space-y-3 mb-8">
                  {kit.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold">{kit.price}</span>
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
                      Inquire Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Back Link */}
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

export default RoboticsKits;