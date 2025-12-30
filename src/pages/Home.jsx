import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Import the slide images and logo
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import bgImage from "../assets/bg.jpg";

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

  return (
    <div className="bg-[#0A0F14]">
      {/* Enhanced Hero Section with Professional Robotics Color Scheme */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        {/* Background with more visible bg.jpg */}
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
          
          {/* Reduced dark overlay to make bg.jpg more visible */}
          <div className="absolute inset-0 bg-[#0A0F14]" style={{ opacity: 0.85 }}></div>
          
          {/* Subtle circuit board pattern - reduced opacity */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M20,0 L20,40 M0,20 L40,20 M5,5 L35,35 M35,5 L5,35" 
                        stroke="#00D4AA" 
                        strokeWidth="0.5" 
                        fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </div>

          {/* Animated data points */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`data-${i}`}
                className="absolute w-0.5 h-0.5 bg-[#00D4AA] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
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
                  <span className="block text-white">Engineering</span>
                  <span className="block text-[#00D4AA] font-bold mt-2">
                    Intelligent Systems
                  </span>
                  <span className="block text-white mt-4">
                    for <span className="text-[#0066CC]">Africa's Future</span>
                  </span>
                </h1>

                {/* Tech-inspired accent line */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-24 h-1 bg-[#00D4AA] rounded-full"></div>
                  <div className="text-sm text-white/50 font-mono tracking-wider">
                    INNOVATION • IMPACT • INTEGRITY
                  </div>
                </div>

                <motion.p
                  className="text-xl mb-10 text-white/80 leading-relaxed max-w-2xl font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Pioneering research-driven solutions to address Africa's most
                  pressing challenges through cutting-edge robotics, AI, and
                  emerging technologies.
                </motion.p>
              </motion.div>

              {/* Enhanced CTA Buttons with tech feel */}
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
                    className="group relative inline-flex items-center gap-3 bg-[#0066CC] hover:bg-[#0052A3] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-[#0066CC]/20 overflow-hidden"
                  >
                    <span className="relative z-10">
                      Explore Research
                    </span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
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
                    className="group relative inline-flex items-center gap-3 bg-transparent hover:bg-white/5 border border-[#00D4AA]/50 hover:border-[#00D4AA] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    <span>Collaborate</span>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Image Carousel */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Clean carousel box without gradient top border */}
              <div className="relative bg-[#0A0F14]/70 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl overflow-hidden">
                
                <div className="relative">
                  {/* Carousel indicator */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="text-xs text-white/40 font-mono">
                      0{currentBreakthrough + 1}/0{breakthroughs.length}
                    </div>
                  </div>

                  {/* Carousel Container */}
                  <div className="relative">
                    {/* Carousel Controls */}
                    <div className="absolute top-16 right-4 z-20">
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
                                  ? "bg-[#00D4AA]"
                                  : "bg-white/30"
                              }`}
                              whileHover={{ scale: 1.5 }}
                            />
                            {index === currentBreakthrough && (
                              <motion.div
                                className="absolute inset-0 border border-[#00D4AA] rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1.5 }}
                                transition={{ duration: 0.2 }}
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Carousel Images with Professional Blending Overlay */}
                    <div className="relative h-96 rounded-xl overflow-hidden">
                      {breakthroughs.map((breakthrough, index) => (
                        <motion.div
                          key={index}
                          className="absolute inset-0"
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{
                            opacity: currentBreakthrough === index ? 1 : 0,
                            scale: currentBreakthrough === index ? 1 : 1.1,
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
                                e.target.src = `https://via.placeholder.com/600x400/0A0F14/00D4AA?text=${encodeURIComponent(
                                  breakthrough.alt
                                )}`;
                              }}
                            />

                            {/* Professional Color Blending Overlay */}
                            <div className="absolute inset-0 bg-[#0A0F14] mix-blend-multiply opacity-40"></div>
                            <div className="absolute inset-0 bg-[#0066CC] mix-blend-overlay opacity-20"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F14] via-transparent to-transparent mix-blend-normal opacity-30"></div>
                            
                            {/* Subtle edge vignette */}
                            <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                      <button
                        onClick={() =>
                          setCurrentBreakthrough(
                            (prev) =>
                              (prev - 1 + breakthroughs.length) %
                              breakthroughs.length
                          )
                        }
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all hover:scale-110"
                      >
                        <ChevronRight className="h-5 w-5 rotate-180 text-[#00D4AA]" />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentBreakthrough(
                            (prev) => (prev + 1) % breakthroughs.length
                          )
                        }
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all hover:scale-110"
                      >
                        <ChevronRight className="h-5 w-5 text-[#00D4AA]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;