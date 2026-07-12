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

// Placeholder image for components without specific images
import defaultComponentImg from '../../assets/ArduinoUno.jpg';

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
      image: roverKitChassisWithWheels,
      description: "Sturdy rover chassis with wheels, perfect for mobile robotics projects",
      components: [
        { name: "Chassis Frame", icon: Cpu, image: roverKitChassisWithWheels },
        { name: "Wheels (4 pcs)", icon: AlertCircle, image: roverKitChassisWithWheels },
        { name: "Motor Mounts", icon: Radio, image: roverKitChassisWithWheels }
      ]
    },
    {
      id: 'elevator-kit',
      name: "Elevator Kit Frame",
      level: "Intermediate",
      image: elevatorKitFrame,
      description: "Mechanical elevator frame for vertical lift mechanisms",
      components: [
        { name: "Elevator Frame", icon: Cpu, image: elevatorKitFrame },
        { name: "Pulley System", icon: Zap, image: elevatorKitFrame },
        { name: "Guide Rails", icon: AlertCircle, image: elevatorKitFrame }
      ]
    },
    {
      id: 'boom-gate',
      name: "Boom Gate Kit Frame",
      level: "Beginner",
      image: boomGateKitFrame,
      description: "Boom gate mechanism frame for access control projects",
      components: [
        { name: "Boom Arm", icon: Wifi, image: boomGateKitFrame },
        { name: "Housing Frame", icon: Cpu, image: boomGateKitFrame },
        { name: "Mounting Bracket", icon: AlertCircle, image: boomGateKitFrame }
      ]
    },
    {
      id: 'carousel-kit',
      name: "Carousel Kit Frame",
      level: "Intermediate",
      image: carouselKitFrame,
      description: "Rotating carousel frame for storage or display systems",
      components: [
        { name: "Rotating Platform", icon: Cpu, image: carouselKitFrame },
        { name: "Support Frame", icon: Zap, image: carouselKitFrame },
        { name: "Bearing Assembly", icon: AlertCircle, image: carouselKitFrame }
      ]
    },
    {
      id: 'advanced-rover',
      name: "Advanced Rover Kit Frame",
      level: "Advanced",
      image: advancedRoverKitFrame,
      description: "Advanced rover frame with enhanced suspension and mounting options",
      components: [
        { name: "Advanced Chassis", icon: Cpu, image: advancedRoverKitFrame },
        { name: "Suspension System", icon: Zap, image: advancedRoverKitFrame },
        { name: "All-Terrain Wheels", icon: AlertCircle, image: advancedRoverKitFrame }
      ]
    },
    {
      id: 'servo-radar',
      name: "Servo Radar Kit Frame",
      level: "Intermediate",
      image: servoradarkitframe,
      description: "Servo-controlled radar frame for obstacle detection and scanning",
      components: [
        { name: "Servo Motor Mount", icon: Zap, image: servoradarkitframe },
        { name: "Radar Base Frame", icon: Cpu, image: servoradarkitframe },
        { name: "Sensor Mount", icon: AlertCircle, image: servoradarkitframe }
      ]
    },
    {
      id: 'stepper-radar',
      name: "Stepper Radar Kit Frame",
      level: "Advanced",
      image: stepperradarkitframe,
      description: "Stepper motor-based radar frame for precise angular positioning",
      components: [
        { name: "Stepper Motor Mount", icon: Zap, image: stepperradarkitframe },
        { name: "Precision Radar Frame", icon: Cpu, image: stepperradarkitframe },
        { name: "Control Bracket", icon: Radio, image: stepperradarkitframe }
      ]
    },
    {
      id: 'conveyor-kit',
      name: "Conveyor Kit Frame",
      level: "Intermediate",
      image: conveyorkitframe,
      description: "Mini conveyor belt frame for automation and sorting projects",
      components: [
        { name: "Conveyor Frame", icon: Cpu, image: conveyorkitframe },
        { name: "Roller System", icon: Zap, image: conveyorkitframe },
        { name: "Belt Tensioner", icon: AlertCircle, image: conveyorkitframe },
        { name: "Motor Mount", icon: Radio, image: conveyorkitframe }
      ]
    }
  ];

  const components = [
    {
      category: "Sensors",
      items: [
        // Temperature & Humidity
        { id: 'lm35', name: "LM35 Temperature Sensor", image: temperatureSensor, description: "Precision temperature sensor" },
        { id: 'ds18b20', name: "DS18B20 Temperature Sensor", image: temperatureSensor, description: "Waterproof digital temperature sensor" },
        { id: 'dht11', name: "DHT11 Sensor", image: temperatureSensor, description: "Temperature & Humidity Sensor" },
        { id: 'dht22', name: "DHT22 Sensor", image: temperatureSensor, description: "High precision Temp & Humidity" },
        { id: 'bme280', name: "BME280 / BMP280", image: temperatureSensor, description: "Pressure, Temp & Humidity Sensor" },
        // Light & Optical
        { id: 'ldr', name: "LDR Sensor", image: defaultComponentImg, description: "Light Dependent Resistor" },
        { id: 'photodiode', name: "Photodiode", image: defaultComponentImg, description: "Light detection diode" },
        { id: 'ir-obstacle', name: "IR Obstacle Sensor", image: defaultComponentImg, description: "Infrared obstacle detection" },
        { id: 'ir-line', name: "IR Line Sensor", image: defaultComponentImg, description: "Line following sensor module" },
        { id: 'ov7670', name: "Camera Module (OV7670)", image: defaultComponentImg, description: "VGA camera module" },
        { id: 'esp32-cam', name: "ESP32-CAM", image: esp32Board, description: "Camera module with ESP32" },
        // Distance & Motion
        { id: 'ultrasonic', name: "Ultrasonic Sensor (HC-SR04)", image: ultrasonicSensor, description: "Distance measuring sensor" },
        { id: 'pir', name: "PIR Motion Sensor", image: pirSensor, description: "Infrared Motion Detector" },
        { id: 'adxl345', name: "Accelerometer (ADXL345)", image: defaultComponentImg, description: "3-axis accelerometer" },
        { id: 'mpu6050', name: "Gyroscope + Accelerometer (MPU6050)", image: defaultComponentImg, description: "6-axis motion tracking" },
        { id: 'tilt', name: "Tilt Sensor", image: defaultComponentImg, description: "Ball tilt switch sensor" },
        { id: 'rotary-encoder', name: "Rotary Encoder", image: defaultComponentImg, description: "Rotary position encoder" },
        // Pressure, Force & Touch
        { id: 'fsr', name: "Force Sensitive Resistor (FSR)", image: defaultComponentImg, description: "Force/pressure sensor" },
        { id: 'piezo', name: "Piezoelectric Sensor", image: defaultComponentImg, description: "Vibration/pressure sensor" },
        { id: 'ttp223', name: "Capacitive Touch Sensor (TTP223)", image: defaultComponentImg, description: "Touch detection module" },
        { id: 'strain-gauge', name: "Strain Gauge", image: defaultComponentImg, description: "Strain measurement sensor" },
        // Environmental & Gas
        { id: 'mq-gas', name: "MQ Series Gas Sensors", image: defaultComponentImg, description: "Gas detection (MQ-2, MQ-135, etc.)" },
        { id: 'co2', name: "CO2 Sensor (MH-Z19)", image: defaultComponentImg, description: "CO2 concentration sensor" },
        { id: 'ccs811', name: "Air Quality Sensor (CCS811)", image: defaultComponentImg, description: "Air quality monitoring" },
        { id: 'rain', name: "Rain Sensor", image: defaultComponentImg, description: "Rain/water detection" },
        { id: 'soil-moisture', name: "Soil Moisture Sensor", image: defaultComponentImg, description: "Soil humidity detection" },
        { id: 'flame', name: "Flame Sensor", image: defaultComponentImg, description: "Flame/fire detection" },
        // Sound & Vibration
        { id: 'microphone', name: "Microphone / Sound Sensor", image: defaultComponentImg, description: "Sound detection module" },
        { id: 'vibration', name: "Vibration Sensor (SW-420)", image: defaultComponentImg, description: "Vibration detection" },
        // Specialty
        { id: 'gps', name: "GPS Module (NEO-6M)", image: defaultComponentImg, description: "GPS positioning module" },
        { id: 'rfid', name: "RFID / NFC Reader (RC522)", image: defaultComponentImg, description: "RFID/NFC card reader" },
        { id: 'magnetometer', name: "Magnetometer (HMC5883L)", image: defaultComponentImg, description: "3-axis magnetic field sensor" },
        { id: 'compass', name: "Compass Module", image: defaultComponentImg, description: "Digital compass module" },
        { id: 'heartbeat', name: "Heartbeat / Pulse Sensor", image: defaultComponentImg, description: "Heart rate monitoring" },
      ]
    },
    {
      category: "Controllers",
      items: [
        // Core Arduino Boards
        { id: 'arduino-uno', name: "Arduino Uno R3", image: arduinoUno, description: "ATmega328P Development Board" },
        { id: 'arduino-mega', name: "Arduino Mega 2560", image: arduinoUno, description: "ATmega2560 Development Board" },
        { id: 'arduino-nano', name: "Arduino Nano", image: arduinoUno, description: "Compact ATmega328P Board" },
        // Communication & IoT Controllers
        { id: 'esp8266', name: "ESP8266 (NodeMCU)", image: esp32Board, description: "WiFi IoT Development Board" },
        { id: 'esp32', name: "ESP32", image: esp32Board, description: "WiFi + Bluetooth IoT Board" },
        // Raspberry Pi Boards
        { id: 'rpi-zero', name: "Raspberry Pi Zero 2 W", image: raspberryPiPico, description: "Mini Raspberry Pi with WiFi" },
        { id: 'rpi-3b', name: "Raspberry Pi 3 Model B+", image: raspberryPiPico, description: "Quad-core 1.4GHz" },
        { id: 'rpi-4-4gb', name: "Raspberry Pi 4 Model B (4GB RAM)", image: raspberryPiPico, description: "Quad-core 1.5GHz, 4GB RAM" },
        { id: 'rpi-4-8gb', name: "Raspberry Pi 4 Model B (8GB RAM)", image: raspberryPiPico, description: "Quad-core 1.5GHz, 8GB RAM" },
      ]
    },
    {
      category: "Actuators",
      items: [
        // Motors
        { id: 'dc-motor', name: "DC Motor", image: servoMotor, description: "Standard DC motor" },
        { id: 'servo-sg90', name: "Servo Motor SG90", image: servoMotor, description: "Micro servo motor" },
        { id: 'stepper-motor', name: "Stepper Motor", image: servoMotor, description: "NEMA 17 Stepper Motor" },
        { id: 'geared-dc', name: "Geared DC Motor", image: servoMotor, description: "DC motor with gearbox" },
        // Sound & Vibration
        { id: 'piezo-buzzer', name: "Piezo Buzzer", image: defaultComponentImg, description: "Sound generator module" },
        { id: 'speaker', name: "Speaker Module", image: defaultComponentImg, description: "Audio speaker module" },
        { id: 'vibration-motor', name: "Vibration Motor", image: defaultComponentImg, description: "Haptic feedback motor" },
        // Light & Display
        { id: 'led', name: "LEDs (basic)", image: defaultComponentImg, description: "Basic LED pack" },
        { id: 'rgb-led', name: "RGB LED Module", image: defaultComponentImg, description: "RGB LED with controller" },
        { id: 'led-matrix', name: "LED Matrix (8x8, 16x16)", image: defaultComponentImg, description: "Dot matrix display" },
        { id: 'lcd', name: "LCD Display (16x2, 20x4)", image: defaultComponentImg, description: "Character LCD display" },
        { id: 'oled', name: "OLED Display (0.96\", 1.3\")", image: defaultComponentImg, description: "OLED graphic display" },
        // Mechanical & Control
        { id: 'relay', name: "Relay Module", image: relayModule, description: "2-Channel Relay" },
        { id: 'solenoid', name: "Solenoid Lock", image: defaultComponentImg, description: "Electric lock actuator" },
        { id: 'continuous-servo', name: "Continuous Rotation Servo", image: servoMotor, description: "360 degree servo motor" },
        { id: 'high-torque-servo', name: "High Torque Servo", image: servoMotor, description: "Heavy duty servo for robot arms" },
      ]
    }
  ];

  const addToCart = (item, type, kitId = null) => {
    const cartItem = {
      ...item,
      uniqueId: `${item.id || item.name}-${Date.now()}-${Math.random()}`,
      type,
      kitId,
      price: 0 // Keep price as 0 internally for cart calculations
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
                        {/* Price display removed from cart */}
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
            Complete kits and individual components
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

              <div className="flex justify-end pt-4 border-t border-gray-800">
                <button
                  onClick={() => addToCart({...kit, id: kit.id, price: 0}, 'kit')}
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
        <div className="max-w-7xl mx-auto px-4">
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
                
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
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
                      
                      <div className="flex justify-end items-center">
                        <button
                          onClick={() => addToCart({...item, price: 0}, 'component')}
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