import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  CheckCircle, Package, Cpu, Camera, AlertCircle, 
  Radio, Zap, Wifi, ShoppingCart, Plus, Minus, 
  Trash2, X, CreditCard, Maximize2 
} from 'lucide-react';

// Import local images from assets folder
import arduinoUno from '../../assets/ArduinoUno.jpg';
import arduinoStarter from '../../assets/ArduinoStarter.jpg';
import pirSensor from '../../assets/PIRSensor.jpg';
import relayModule from '../../assets/RelayModule.jpg';
import ultrasonicSensor from '../../assets/UltrasonicSensor.jpg';
import roboticsImg from '../../assets/Robotics.jpg';
import workshopImg from '../../assets/Workshops.jpg';
import solutionsImg from '../../assets/Solutions.webp';
import esp32Board from '../../assets/ESP32Board.jpg';
import raspberryPiPico from '../../assets/RaspberryPiPico.jpg';
import servoMotor from '../../assets/ServoMotor.jpg';
import temperatureSensor from '../../assets/TemperatureSensor.jpg';

// Import new kit images
import advancedRoverKitFrame from '../../assets/advancedroverkitframe.png';
import boomGateKitFrame from '../../assets/BoomGateKitFrame.png';
import carouselKitFrame from '../../assets/carouselkitframe.png';
import elevatorKitFrame from '../../assets/ElevatorKitFrame.png';
import roverKitChassisWithWheels from '../../assets/RoverKitChassisWithWheels.png';
import servoradarkitframe from '../../assets/servoradarkitframe.png';
import conveyorkitframe from '../../assets/conveyorkitframe.png';
import stepperradarkitframe from '../../assets/stepperradarkitframe.png';

// Import background images
import bg from '../../assets/bg.jpg';
import bg2 from '../../assets/bg2.jpg';
import bg3 from '../../assets/bg3.jpg';
import bg4 from '../../assets/bg4.jpg';

const RoboticsKits = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantities, setQuantities] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const kits = [
    {
      id: 'rover-chassis',
      name: "Rover Kit Chassis with Wheels",
      level: "Beginner",
      price: 20,
      image: roverKitChassisWithWheels,
      description: "Sturdy rover chassis with wheels, perfect for mobile robotics projects",
      components: [
        { name: "Chassis Frame", price: 12, icon: Cpu, image: roverKitChassisWithWheels },
        { name: "Wheels (4 pcs)", price: 5, icon: AlertCircle, image: roverKitChassisWithWheels },
        { name: "Motor Mounts", price: 3, icon: Radio, image: roverKitChassisWithWheels }
      ]
    },
    {
      id: 'elevator-kit',
      name: "Elevator Kit Frame",
      level: "Intermediate",
      price: 25,
      image: elevatorKitFrame,
      description: "Mechanical elevator frame for vertical lift mechanisms",
      components: [
        { name: "Elevator Frame", price: 15, icon: Cpu, image: elevatorKitFrame },
        { name: "Pulley System", price: 6, icon: Zap, image: elevatorKitFrame },
        { name: "Guide Rails", price: 4, icon: AlertCircle, image: elevatorKitFrame }
      ]
    },
    {
      id: 'boom-gate',
      name: "Boom Gate Kit Frame",
      level: "Beginner",
      price: 15,
      image: boomGateKitFrame,
      description: "Boom gate mechanism frame for access control projects",
      components: [
        { name: "Boom Arm", price: 6, icon: Wifi, image: boomGateKitFrame },
        { name: "Housing Frame", price: 5, icon: Cpu, image: boomGateKitFrame },
        { name: "Mounting Bracket", price: 4, icon: AlertCircle, image: boomGateKitFrame }
      ]
    },
    {
      id: 'carousel-kit',
      name: "Carousel Kit Frame",
      level: "Intermediate",
      price: 20,
      image: carouselKitFrame,
      description: "Rotating carousel frame for storage or display systems",
      components: [
        { name: "Rotating Platform", price: 10, icon: Cpu, image: carouselKitFrame },
        { name: "Support Frame", price: 6, icon: Zap, image: carouselKitFrame },
        { name: "Bearing Assembly", price: 4, icon: AlertCircle, image: carouselKitFrame }
      ]
    },
    {
      id: 'advanced-rover',
      name: "Advanced Rover Kit Frame",
      level: "Advanced",
      price: 30,
      image: advancedRoverKitFrame,
      description: "Advanced rover frame with enhanced suspension and mounting options",
      components: [
        { name: "Advanced Chassis", price: 15, icon: Cpu, image: advancedRoverKitFrame },
        { name: "Suspension System", price: 8, icon: Zap, image: advancedRoverKitFrame },
        { name: "All-Terrain Wheels", price: 7, icon: AlertCircle, image: advancedRoverKitFrame }
      ]
    },
    {
      id: 'servo-radar',
      name: "Servo Radar Kit Frame",
      level: "Intermediate",
      price: 15,
      image: servoradarkitframe,
      description: "Servo-controlled radar frame for obstacle detection and scanning",
      components: [
        { name: "Servo Motor Mount", price: 5, icon: Zap, image: servoradarkitframe },
        { name: "Radar Base Frame", price: 6, icon: Cpu, image: servoradarkitframe },
        { name: "Sensor Mount", price: 4, icon: AlertCircle, image: servoradarkitframe }
      ]
    },
    {
      id: 'stepper-radar',
      name: "Stepper Radar Kit Frame",
      level: "Advanced",
      price: 15,
      image: stepperradarkitframe,
      description: "Stepper motor-based radar frame for precise angular positioning",
      components: [
        { name: "Stepper Motor Mount", price: 6, icon: Zap, image: stepperradarkitframe },
        { name: "Precision Radar Frame", price: 6, icon: Cpu, image: stepperradarkitframe },
        { name: "Control Bracket", price: 3, icon: Radio, image: stepperradarkitframe }
      ]
    },
    {
      id: 'conveyor-kit',
      name: "Conveyor Kit Frame",
      level: "Intermediate",
      price: 18,
      image: conveyorkitframe,
      description: "Mini conveyor belt frame for automation and sorting projects",
      components: [
        { name: "Conveyor Frame", price: 8, icon: Cpu, image: conveyorkitframe },
        { name: "Roller System", price: 5, icon: Zap, image: conveyorkitframe },
        { name: "Belt Tensioner", price: 3, icon: AlertCircle, image: conveyorkitframe },
        { name: "Motor Mount", price: 2, icon: Radio, image: conveyorkitframe }
      ]
    }
  ];

  const components = [
    {
      category: "Sensors",
      items: [
        { id: 'ultrasonic', name: "Ultrasonic Sensor", price: 4, image: ultrasonicSensor, description: "HC-SR04 Distance Sensor" },
        { id: 'pir', name: "PIR Motion Sensor", price: 3, image: pirSensor, description: "Infrared Motion Detector" },
        { id: 'temp', name: "Temperature Sensor", price: 6, image: temperatureSensor, description: "DHT22 Digital Sensor" },
      ]
    },
    {
      category: "Controllers",
      items: [
        { id: 'arduino', name: "Arduino Uno", price: 12, image: arduinoUno, description: "ATmega328P Development Board" },
        { id: 'esp32', name: "ESP32 Board", price: 8, image: esp32Board, description: "WiFi + Bluetooth Module" },
        { id: 'raspberry', name: "Raspberry Pi Pico", price: 6, image: raspberryPiPico, description: "RP2040 Microcontroller" },
      ]
    },
    {
      category: "Actuators",
      items: [
        { id: 'servo', name: "Servo Motor", price: 3, image: servoMotor, description: "SG90 Micro Servo" },
        { id: 'relay', name: "Relay Module", price: 5, image: relayModule, description: "2-Channel Relay" },
        { id: 'stepper', name: "Stepper Motor", price: 5, image: roboticsImg, description: "28BYJ-48 + Driver" },
      ]
    }
  ];

  const addToCart = (item, type, kitId = null) => {
    const cartItem = {
      ...item,
      uniqueId: `${item.id || item.name}-${Date.now()}-${Math.random()}`,
      type,
      kitId
    };
    setCartItems([...cartItems, cartItem]);
    setQuantities(prev => ({
      ...prev,
      [cartItem.uniqueId]: 1
    }));
  };

  const updateQuantity = (uniqueId, delta) => {
    setQuantities(prev => ({
      ...prev,
      [uniqueId]: Math.max(1, (prev[uniqueId] || 1) + delta)
    }));
  };

  const removeFromCart = (uniqueId) => {
    setCartItems(cartItems.filter(item => item.uniqueId !== uniqueId));
    const newQuantities = { ...quantities };
    delete newQuantities[uniqueId];
    setQuantities(newQuantities);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * (quantities[item.uniqueId] || 1));
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => {
      return total + (quantities[item.uniqueId] || 1);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Full size view"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Cart Sidebar */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isCartOpen ? 0 : '100%' }}
        transition={{ type: 'tween' }}
        className="fixed right-0 top-0 h-full w-96 bg-gray-900 border-l border-gray-800 z-50 overflow-y-auto shadow-2xl"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-white" />
              Cart ({getTotalItems()})
            </h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Your cart is empty</p>
              <p className="text-sm mt-2">Add items to get started</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6 max-h-[60vh] overflow-y-auto pr-2">
                {cartItems.map((item) => (
                  <div key={item.uniqueId} className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition">
                    <div className="flex gap-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded cursor-pointer"
                        onClick={() => setSelectedImage(item.image)}
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm">{item.name}</h3>
                        <p className="text-sm text-white font-bold">${item.price}</p>
                        
                        <div className="flex items-center gap-2 mt-2">
                          <button 
                            onClick={() => updateQuantity(item.uniqueId, -1)}
                            className="p-1 bg-white/10 rounded hover:bg-white/20 transition"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm w-6 text-center">{quantities[item.uniqueId]}</span>
                          <button 
                            onClick={() => updateQuantity(item.uniqueId, 1)}
                            className="p-1 bg-white/10 rounded hover:bg-white/20 transition"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button 
                            onClick={() => removeFromCart(item.uniqueId)}
                            className="ml-auto p-1 bg-white/10 text-gray-400 rounded hover:bg-white/20 transition"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-800 pt-4">
                <div className="flex justify-between text-lg font-bold mb-4">
                  <span>Total:</span>
                  <span className="text-white">${getTotalPrice().toFixed(2)}</span>
                </div>
                <button className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition flex items-center justify-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={bg4} alt="" className="w-full h-full object-cover" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Robotics Kits</span>
            <span className="text-gray-300 ml-3">& Components</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Complete kits and individual components with transparent pricing
          </p>
          
          {/* Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition relative group"
          >
            <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition" />
            View Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-white text-black text-sm rounded-full flex items-center justify-center animate-pulse">
                {getTotalItems()}
              </span>
            )}
          </button>
        </motion.div>
      </section>

      {/* Complete Kits Section */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-white">Complete</span>
          <span className="text-gray-300 ml-3">Kits</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kits.map((kit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-white/30 transition-all hover:shadow-lg hover:shadow-white/5"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg group cursor-pointer">
                <img 
                  src={kit.image} 
                  alt={kit.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onClick={() => setSelectedImage(kit.image)}
                />
                <div 
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  onClick={() => setSelectedImage(kit.image)}
                >
                  <Maximize2 className="w-8 h-8 text-white" />
                </div>
                <span className="absolute top-2 right-2 px-3 py-1 text-xs bg-white/20 text-white border border-white/30 rounded-full">
                  {kit.level}
                </span>
              </div>
              
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold">{kit.name}</h3>
                <Package className="w-5 h-5 text-white/60" />
              </div>
              
              <p className="text-gray-400 text-sm mb-4">{kit.description}</p>
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                {kit.components.slice(0, 4).map((comp, idx) => (
                  <div key={idx} className="flex items-center gap-1 text-xs text-gray-400">
                    <comp.icon className="w-3 h-3 text-white/60" />
                    <span>{comp.name}</span>
                  </div>
                ))}
                {kit.components.length > 4 && (
                  <div className="text-xs text-gray-500">+{kit.components.length - 4} more</div>
                )}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                <div>
                  <p className="text-2xl font-bold text-white">${kit.price}</p>
                  <p className="text-xs text-gray-500">Complete kit</p>
                </div>
                <button
                  onClick={() => addToCart({...kit, id: kit.id}, 'kit')}
                  className="px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition flex items-center gap-2 border border-white/10"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Individual Components Section */}
      <section className="bg-gray-900/30 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-white">Individual</span>
            <span className="text-gray-300 ml-3">Components</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {components.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-800 text-white">
                  {cat.category}
                </h3>
                
                <div className="space-y-4">
                  {cat.items.map((item, idx) => (
                    <div key={idx} className="group hover:bg-white/5 p-2 rounded-lg transition">
                      <div className="flex gap-3 mb-2">
                        <div className="relative cursor-pointer group/img">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-lg"
                            onClick={() => setSelectedImage(item.image)}
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 rounded-lg transition-opacity flex items-center justify-center">
                            <Maximize2 className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-400">{item.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center pl-15">
                        <span className="text-white font-bold">${item.price}</span>
                        <button
                          onClick={() => addToCart(item, 'component')}
                          className="px-3 py-1 bg-white/10 text-white text-xs rounded hover:bg-white/20 transition flex items-center gap-1 border border-white/10"
                        >
                          <ShoppingCart className="w-3 h-3" />
                          Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Back Button */}
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:border-white/30 hover:text-white transition text-gray-400"
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