import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Cpu, Camera, AlertCircle, Radio, Zap, Wifi, ExternalLink } from 'lucide-react';

const RoboticsKits = () => {
  const kits = [
    {
      name: "Arduino Starter Kit",
      level: "Introductory",
      price: "$40",
      image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=400&auto=format&fit=crop",
      amazonLink: "https://amzn.to/3T6iWJo",
      components: [
        { 
          name: "Arduino Uno", 
          price: "$12", 
          icon: Cpu,
          amazonLink: "https://amzn.to/3y4vF6G"
        },
        { 
          name: "Ultrasonic Sensor", 
          price: "$4", 
          icon: AlertCircle,
          amazonLink: "https://amzn.to/3R6Z9JF"
        },
        { 
          name: "Relay Module", 
          price: "$5", 
          icon: Radio,
          amazonLink: "https://amzn.to/4bp58Fa"
        },
        { 
          name: "PIR Sensor", 
          price: "$3", 
          icon: Camera,
          amazonLink: "https://amzn.to/3x6iqnW"
        }
      ]
    },
    {
      name: "Advanced Raspberry Pi Kit",
      level: "University Level",
      price: "$250",
      image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?w=400&auto=format&fit=crop",
      amazonLink: "https://amzn.to/3Vs9ikc",
      components: [
        { 
          name: "Raspberry Pi 4", 
          price: "$75", 
          icon: Cpu,
          amazonLink: "https://amzn.to/4dDOz09"
        },
        { 
          name: "Camera Module", 
          price: "$25", 
          icon: Camera,
          amazonLink: "https://amzn.to/3Vs8PwK"
        },
        { 
          name: "GPS Module", 
          price: "$15", 
          icon: Radio,
          amazonLink: "https://amzn.to/3RuTtUU"
        },
        { 
          name: "IMU Sensor", 
          price: "$18", 
          icon: AlertCircle,
          amazonLink: "https://amzn.to/4e2tOrl"
        }
      ]
    },
  ];

  const components = [
    {
      category: "Sensors",
      items: [
        { 
          name: "Ultrasonic Sensor", 
          price: "$4",
          amazonLink: "https://amzn.to/3R6Z9JF"
        },
        { 
          name: "PIR Motion Sensor", 
          price: "$3",
          amazonLink: "https://amzn.to/3x6iqnW"
        },
        { 
          name: "Temperature Sensor", 
          price: "$6",
          amazonLink: "https://amzn.to/3x9StoV"
        },
      ]
    },
    {
      category: "Controllers",
      items: [
        { 
          name: "Arduino Uno", 
          price: "$12",
          amazonLink: "https://amzn.to/3y4vF6G"
        },
        { 
          name: "ESP32 Board", 
          price: "$8",
          amazonLink: "https://amzn.to/3xazGLP"
        },
        { 
          name: "Raspberry Pi Pico", 
          price: "$6",
          amazonLink: "https://amzn.to/4g03Ofq"
        },
      ]
    },
    {
      category: "Actuators",
      items: [
        { 
          name: "Servo Motor", 
          price: "$3",
          amazonLink: "https://amzn.to/4bqgprx"
        },
        { 
          name: "DC Gear Motor", 
          price: "$7",
          amazonLink: "https://amzn.to/3y5xY0a"
        },
        { 
          name: "Stepper Motor", 
          price: "$5",
          amazonLink: "https://amzn.to/4dHEgW0"
        },
      ]
    }
  ];

  // Function to handle Amazon link clicks
  const handleAmazonClick = (url, e) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
            Complete kits and individual components with transparent pricing and Amazon links
          </p>
          <div className="mt-6 flex justify-center items-center gap-4 text-sm text-gray-400">
            <CheckCircle className="w-4 h-4" />
            <span>All components include Amazon affiliate links</span>
          </div>
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
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-colors"
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
                    <a
                      key={idx}
                      href={comp.amazonLink}
                      onClick={(e) => handleAmazonClick(comp.amazonLink, e)}
                      className="flex items-center gap-2 p-2 bg-white/5 rounded hover:bg-white/10 transition-colors group cursor-pointer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-4 h-4" />
                      <div className="flex-1">
                        <p className="text-sm">{comp.name}</p>
                        <p className="text-xs text-gray-400">{comp.price}</p>
                      </div>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  );
                })}
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-700">
                <div>
                  <p className="text-2xl font-bold">{kit.price}</p>
                  <p className="text-sm text-gray-400">Complete kit price</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-2 border border-gray-700 rounded-lg hover:border-white/40 transition">
                    Inquire Now
                  </button>
                  <a
                    href={kit.amazonLink}
                    onClick={(e) => handleAmazonClick(kit.amazonLink, e)}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" 
                      alt="Amazon"
                      className="h-4"
                    />
                    View on Amazon
                  </a>
                </div>
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
                    <a
                      key={idx}
                      href={item.amazonLink}
                      onClick={(e) => handleAmazonClick(item.amazonLink, e)}
                      className="flex justify-between items-center p-3 hover:bg-white/5 rounded group cursor-pointer transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-400 mt-1">Click to view on Amazon</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold">{item.price}</span>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Amazon Disclaimer */}
          <div className="mt-12 p-6 bg-gray-900/50 border border-gray-800 rounded-lg max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2">Amazon Affiliate Links</h4>
                <p className="text-gray-300">
                  All Amazon links are affiliate links. When you purchase through these links, 
                  we may earn a small commission at no extra cost to you. This helps support our 
                  educational resources and component research.
                </p>
              </div>
            </div>
          </div>

          {/* Back Button */}
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