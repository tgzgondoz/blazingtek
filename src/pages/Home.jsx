import { ArrowRight, Cpu, Zap, Users, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Import the slide images and logo
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import logo from "../assets/logo.png";
import bgImage from "../assets/bg.jpg"; // Import the background image

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentBreakthrough, setCurrentBreakthrough] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Auto-rotate breakthroughs
    const interval = setInterval(() => {
      setCurrentBreakthrough((prev) => (prev + 1) % breakthroughs.length);
    }, 5000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const breakthroughs = [
    {
      image: slide1,
      alt: "AI-Assisted Irrigation Robot in Kenya",
    },
    {
      image: slide2,
      alt: "Solar-Powered Agricultural Drone",
    },
    {
      image: slide3,
      alt: "3D Printed Prosthetic Technology",
    },
    {
      image: slide4,
      alt: "Smart Water Purification System",
    },
  ];

  const researchHighlights = [
    {
      title: "AI-Powered Agriculture",
      description:
        "Developing autonomous drones for precision farming in Sub-Saharan Africa",
      icon: <Cpu className="h-8 w-8" />,
      features: [
        "Autonomous Navigation",
        "Soil Analysis AI",
        "Yield Optimization",
      ],
      stats: "15+ Deployments",
    },
    {
      title: "Solar Robotics",
      description:
        "Sustainable robotic systems powered entirely by renewable energy",
      icon: <Zap className="h-8 w-8" />,
      features: ["24/7 Solar Power", "Energy Storage", "Low Maintenance"],
      stats: "100% Renewable",
    },
    {
      title: "Assistive Technology",
      description:
        "Custom prosthetic limbs and mobility aids using 3D printing",
      icon: <Users className="h-8 w-8" />,
      features: ["3D Scanning", "Custom Design", "Rapid Production"],
      stats: "500+ Lives Impacted",
    },
    {
      title: "Global Impact",
      description: "Collaborating with 15+ African nations on tech solutions",
      icon: <Globe className="h-8 w-8" />,
      features: [
        "International Research",
        "Local Partnerships",
        "Scale Solutions",
      ],
      stats: "15+ Countries",
    },
  ];

  return (
    <div>
      {/* Enhanced Hero Section with bg.jpg */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        {/* Background with bg.jpg and gradient overlay */}
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="Technology Background"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              console.error("Error loading background image");
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
          {/* Gradient overlays for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-emerald-900/20"></div>
          
          {/* Animated particles overlay */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full"
          style={{
            transform: `perspective(1000px) rotateY(${
              mousePosition.x * 2
            }deg) rotateX(${mousePosition.y * -2}deg)`,
            transition: "transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Enhanced Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span className="block text-white/90">Robotics, AI &</span>
                  <span className="block bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent font-extrabold">
                    Emerging Tech
                  </span>
                  <span className="block text-white mt-2">
                    for <span className="text-emerald-300 font-bold">Africa</span>
                  </span>
                </h1>

                {/* Subtle decorative line */}
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mb-8"></div>

                <motion.p
                  className="text-xl mb-10 text-gray-200 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Pioneering research-driven solutions to address Africa's most
                  pressing challenges through cutting-edge technology and
                  innovation.
                </motion.p>
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <Link
                    to="/research"
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-900/25 hover:shadow-xl hover:shadow-blue-900/40"
                  >
                    <span className="relative z-10">Explore Solutions</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                  >
                    <span>Partner With Us</span>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              {/* Stats Bar */}
              <motion.div
                className="mt-12 pt-8 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { number: "50+", label: "Projects" },
                    { number: "15+", label: "Countries" },
                    { number: "100%", label: "Impact" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image Carousel */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl overflow-hidden">
                {/* Carousel Container */}
                <div className="relative">
                  {/* Carousel Controls */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="flex gap-2">
                      {breakthroughs.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentBreakthrough(index)}
                          className="relative group"
                        >
                          <motion.div
                            className={`w-2 h-2 rounded-full ${
                              index === currentBreakthrough
                                ? "bg-white"
                                : "bg-white/50"
                            }`}
                            whileHover={{ scale: 1.5 }}
                          />
                          {index === currentBreakthrough && (
                            <motion.div
                              className="absolute inset-0 border border-white rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1.5 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Carousel Images */}
                  <div className="relative h-96 rounded-xl overflow-hidden">
                    {breakthroughs.map((breakthrough, index) => (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{
                          opacity: currentBreakthrough === index ? 1 : 0,
                          scale: currentBreakthrough === index ? 1 : 1.1,
                          filter:
                            currentBreakthrough === index
                              ? "brightness(1)"
                              : "brightness(0.7)",
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        style={{
                          pointerEvents:
                            currentBreakthrough === index ? "auto" : "none",
                        }}
                      >
                        <div className="relative h-full w-full">
                          {/* Image */}
                          <img
                            src={breakthrough.image}
                            alt={breakthrough.alt}
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={(e) => {
                              console.error(
                                `Error loading image: ${breakthrough.image}`
                              );
                              e.target.onerror = null;
                              e.target.src = `https://via.placeholder.com/600x400/374151/9ca3af?text=${encodeURIComponent(
                                breakthrough.alt
                              )}`;
                            }}
                          />

                          {/* Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                          {/* Image Info Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{
                                opacity: currentBreakthrough === index ? 1 : 0,
                                y: currentBreakthrough === index ? 0 : 20,
                              }}
                              transition={{ delay: 0.3 }}
                              className="text-white"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-sm font-medium text-gray-300">
                                  Latest Breakthrough
                                </span>
                              </div>
                              <h3 className="text-xl font-bold mb-2">
                                Innovation in Action
                              </h3>
                              <p className="text-sm text-gray-300 mb-4">
                                Our team successfully deployed AI-assisted
                                irrigation robots in Kenya, increasing crop
                                yields by 40% while reducing water usage by 60%.
                              </p>
                              <Link
                                to="/news"
                                className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white group"
                              >
                                <span>Read Case Study</span>
                                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                    <button
                      onClick={() =>
                        setCurrentBreakthrough(
                          (prev) =>
                            (prev - 1 + breakthroughs.length) %
                            breakthroughs.length
                        )
                      }
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all hover:scale-110"
                    >
                      <ChevronRight className="h-4 w-4 rotate-180" />
                    </button>
                    <button
                      onClick={() =>
                        setCurrentBreakthrough(
                          (prev) => (prev + 1) % breakthroughs.length
                        )
                      }
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all hover:scale-110"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Keep the existing Research & Innovation section below */}
      {/* ... rest of the existing code remains the same ... */}
    </div>
  );
};

export default Home;