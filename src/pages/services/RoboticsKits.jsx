import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Cpu, Camera, AlertCircle, Radio, Zap, Wifi } from 'lucide-react';

const RoboticsKits = () => {
  const kits = [
    {
      name: "Arduino Starter Kit",
      level: "Introductory",
      price: "$40",
      image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=400&auto=format&fit=crop",
      components: [
        { name: "Arduino Uno", price: "$12", icon: Cpu },
        { name: "Ultrasonic Sensor", price: "$4", icon: AlertCircle },
        { name: "Relay Module", price: "$5", icon: Radio },
        { name: "PIR Sensor", price: "$3", icon: Camera }
      ]
    },
    {
      name: "Advanced Raspberry Pi Kit",
      level: "University Level",
      price: "$250",
      image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=400&auto=format&fit=crop",
      components: [
        { name: "Raspberry Pi 4", price: "$75", icon: Cpu },
        { name: "Camera Module", price: "$25", icon: Camera },
        { name: "GPS Module", price: "$15", icon: Radio },
        { name: "IMU Sensor", price: "$18", icon: AlertCircle }
      ]
    },
  ];

  const components = [
    {
      category: "Sensors",
      items: [
        { name: "Ultrasonic Sensor", price: "$4" },
        { name: "PIR Motion Sensor", price: "$3" },
        { name: "Temperature Sensor", price: "$6" },
      ]
    },
    {
      category: "Controllers",
      items: [
        { name: "Arduino Uno", price: "$12" },
        { name: "ESP32 Board", price: "$8" },
        { name: "Raspberry Pi Pico", price: "$6" },
      ]
    },
    {
      category: "Actuators",
      items: [
        { name: "Servo Motor", price: "$3" },
        { name: "DC Gear Motor", price: "$7" },
        { name: "Stepper Motor", price: "$5" },
      ]
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Robotics Kits & Components
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Complete kits and individual components with transparent pricing
          </p>
        </motion.div>
      </section>

      {/* Kits */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Complete Kits</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {kits.map((kit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
            >
              <img 
                src={kit.image} 
                alt={kit.name}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="px-3 py-1 text-sm bg-white/10 rounded-full">
                    {kit.level}
                  </span>
                  <h3 className="text-2xl font-bold mt-2">{kit.name}</h3>
                </div>
                <Package className="w-8 h-8" />
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-6">
                {kit.components.map((comp, idx) => {
                  const Icon = comp.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-white/5 rounded">
                      <Icon className="w-4 h-4" />
                      <div>
                        <p className="text-sm">{comp.name}</p>
                        <p className="text-xs text-gray-400">{comp.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-700">
                <div>
                  <p className="text-2xl font-bold">{kit.price}</p>
                  <p className="text-sm text-gray-400">Complete kit</p>
                </div>
                <button className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200">
                  Inquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Components */}
      <section className="bg-gray-900/30 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Individual Components</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {components.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-700">
                  {cat.category}
                </h3>
                <div className="space-y-4">
                  {cat.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between p-3 hover:bg-white/5 rounded">
                      <p className="font-medium">{item.name}</p>
                      <p className="font-bold">{item.price}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:border-white/40 transition"
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