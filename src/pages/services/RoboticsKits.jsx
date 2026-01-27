import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Package } from 'lucide-react';

const RoboticsKits = () => {
  const kits = [
    {
      name: "Arduino Starter Kit",
      level: "Introductory",
      description: "Perfect for students starting their robotics journey",
      features: ["Basic sensors", "Motor controllers", "Arduino-based", "Learning materials"],
      price: "$40"
    },
    {
      name: "Advanced Raspberry Pi Kit",
      level: "University Level",
      description: "For university labs and advanced research",
      features: ["ROS integration", "Advanced sensors", "Customizable modules", "Documentation"],
      price: "$250"
    },
  
   
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden">
        {/* Background matching Home/Abouts */}
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Robotics <span className="text-gray-300">Kits</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto bg-white/5 px-6 py-4 rounded-lg border border-gray-700">
              Comprehensive educational and development kits designed for universities, 
              research institutions, and robotics enthusiasts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kits Section */}
      <section className="relative pb-24 -mt-12">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {kits.map((kit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-white/30 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="inline-block px-3 py-1 text-sm bg-white/10 text-white rounded-full mb-2">
                        {kit.level}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{kit.name}</h3>
                    </div>
                    <Package className="w-10 h-10 text-white" />
                  </div>
                  
                  <p className="text-gray-300 mb-8">{kit.description}</p>
                  
                  <div className="space-y-4 mb-8">
                    {kit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-white" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-8 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-white">{kit.price}</span>
                      <button className="px-6 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-colors">
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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

export default RoboticsKits;