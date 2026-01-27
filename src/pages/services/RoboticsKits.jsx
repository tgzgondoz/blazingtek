import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Package, Camera, Wifi, Cpu, AlertCircle, Radio } from 'lucide-react';

const RoboticsKits = () => {
  const kits = [
    {
      name: "Arduino Starter Kit",
      level: "Introductory",
      description: "Perfect for students starting their robotics journey",
      features: ["Basic sensors", "Motor controllers", "Arduino-based", "Learning materials"],
      price: "$40",
      image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=400&auto=format&fit=crop",
      components: [
        { name: "Arduino Uno", price: "$12", icon: Cpu },
        { name: "Ultrasonic Sensor", price: "$4", icon: AlertCircle },
        { name: "Relay Module", price: "$5", icon: Radio },
        { name: "PIR Sensor", price: "$3", icon: Camera },
        { name: "Breadboard", price: "$3", icon: Zap },
        { name: "LED Pack", price: "$2", icon: Zap }
      ]
    },
    {
      name: "Advanced Raspberry Pi Kit",
      level: "University Level",
      description: "For university labs and advanced research",
      features: ["ROS integration", "Advanced sensors", "Customizable modules", "Documentation"],
      price: "$250",
      image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=400&auto=format&fit=crop",
      components: [
        { name: "Raspberry Pi 4", price: "$75", icon: Cpu },
        { name: "Camera Module", price: "$25", icon: Camera },
        { name: "GPS Module", price: "$15", icon: Radio },
        { name: "IMU Sensor", price: "$18", icon: AlertCircle },
        { name: "Wi-Fi Module", price: "$12", icon: Wifi },
        { name: "Power Supply", price: "$10", icon: Zap }
      ]
    },
  ];

  const individualComponents = [
    {
      category: "Sensors",
      items: [
        { name: "Ultrasonic Sensor", price: "$4", description: "Distance measurement" },
        { name: "PIR Motion Sensor", price: "$3", description: "Human motion detection" },
        { name: "Temperature Sensor", price: "$6", description: "DHT22 digital sensor" },
        { name: "Gas Sensor", price: "$8", description: "MQ-135 air quality" },
      ]
    },
    {
      category: "Controllers",
      items: [
        { name: "Arduino Uno", price: "$12", description: "Standard development board" },
        { name: "ESP32 Board", price: "$8", description: "Wi-Fi & Bluetooth" },
        { name: "Raspberry Pi Pico", price: "$6", description: "Microcontroller" },
        { name: "Relay Module", price: "$5", description: "4-channel relay" },
      ]
    },
    {
      category: "Actuators",
      items: [
        { name: "Servo Motor", price: "$3", description: "SG90 mini servo" },
        { name: "DC Gear Motor", price: "$7", description: "High torque" },
        { name: "Stepper Motor", price: "$5", description: "28BYJ-48 with driver" },
        { name: "Motor Driver", price: "$6", description: "L298N dual H-bridge" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/95 z-10"></div>
          
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
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Robotics <span className="text-gray-300">Kits & Components</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto bg-white/5 px-6 py-4 rounded-lg border border-gray-700">
              Complete kits and individual components with pricing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kits with Images */}
      <section className="relative pb-16 -mt-12">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Complete Robotics Kits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {kits.map((kit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-white/30 transition-all duration-300">
                  {/* IMAGE ADDED HERE */}
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={kit.image} 
                      alt={kit.name}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/400x200/1a1a1a/ffffff?text=Robotics+Kit";
                      }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 text-sm bg-white/10 text-white rounded-full mb-2">
                        {kit.level}
                      </span>
                      <h3 className="text-2xl font-bold text-white">{kit.name}</h3>
                    </div>
                    <Package className="w-8 h-8 text-white" />
                  </div>
                  
                  <p className="text-gray-300 mb-6">{kit.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {kit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-white" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* COMPONENTS WITH PRICES */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Includes Components:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {kit.components.map((component, idx) => {
                        const Icon = component.icon;
                        return (
                          <div key={idx} className="flex items-center gap-2 p-2 bg-white/5 rounded">
                            <Icon className="w-4 h-4 text-white" />
                            <div>
                              <p className="text-sm text-white">{component.name}</p>
                              <p className="text-xs text-gray-400">{component.price}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-white">{kit.price}</span>
                        <p className="text-xs text-gray-400">Complete kit</p>
                      </div>
                      <button className="px-6 py-2 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-colors">
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDIVIDUAL COMPONENTS SECTION */}
      <section className="relative py-16 bg-gray-900/30">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Individual Components Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {individualComponents.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-gray-700">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors"
                    >
                      <div>
                        <h4 className="text-white font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-white">{item.price}</span>
                        <p className="text-xs text-gray-400">each</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* PRICE SUMMARY */}
          <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-6 mb-12">
            <div className="flex items-center gap-4">
              <Zap className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Component Price Examples:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
                  <div>
                    <p className="font-semibold">Ultrasonic Sensor: <span className="text-white">$4</span></p>
                  </div>
                  <div>
                    <p className="font-semibold">Relay Module: <span className="text-white">$5</span></p>
                  </div>
                  <div>
                    <p className="font-semibold">PIR Sensor: <span className="text-white">$3</span></p>
                  </div>
                  <div>
                    <p className="font-semibold">Arduino Uno: <span className="text-white">$12</span></p>
                  </div>
                </div>
                <p className="text-gray-400 mt-4 text-sm">
                  Contact for bulk discounts and custom kit configurations
                </p>
              </div>
            </div>
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