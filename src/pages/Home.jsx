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
      title: "AI-Assisted Irrigation",
      location: "Kenya",
    },
    {
      image: slide2,
      title: "Solar-Powered Drones",
      location: "Agriculture",
    },
    {
      image: slide3,
      title: "3D Printed Prosthetics",
      location: "Medical Tech",
    },
    {
      image: slide4,
      title: "Smart Water Systems",
      location: "Purification",
    },
  ];

  return (
    <div className="bg-[#0A0F14]">
      {/* Optimized Subtle Animation Background - Further Simplified */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Minimal subtle particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute top-0 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 0.8 + 0.3}px`,
              height: `${Math.random() * 0.8 + 0.3}px`,
              backgroundColor: "rgba(255, 255, 255, 0.05)",
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
        
        {/* Static subtle dots - much simpler */}
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        {/* Background */}
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
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0A0F14]/80"></div>
        </div>

        {/* Main Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="block text-white">Engineering</span>
                <span className="block text-white mt-2">Intelligent</span>
                <span className="block text-white">Systems</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg mb-8 text-gray-300 max-w-lg"
              >
                Pioneering research-driven solutions for Africa's challenges through robotics and AI.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/research"
                  className="inline-flex items-center gap-3 bg-white text-[#0A0F14] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  <span>Explore Research</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Carousel */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Carousel container */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                {/* Carousel indicator */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="text-xs text-gray-400 font-mono bg-black/30 px-2 py-1 rounded">
                    0{currentBreakthrough + 1}/0{breakthroughs.length}
                  </div>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                  {/* Main Carousel Image */}
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    {breakthroughs.map((breakthrough, index) => (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: currentBreakthrough === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="relative h-full w-full">
                          <img
                            src={breakthrough.image}
                            alt={breakthrough.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={(e) => {
                              console.error(`Error loading image: ${breakthrough.image}`);
                              e.target.onerror = null;
                              e.target.src = `https://via.placeholder.com/600x400/0A0F14/FFFFFF?text=${encodeURIComponent(breakthrough.title)}`;
                            }}
                          />
                          {/* Subtle overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Navigation and Progress */}
                  <div className="mt-4 flex items-center justify-between">
                    {/* Progress dots */}
                    <div className="flex gap-2">
                      {breakthroughs.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentBreakthrough(index)}
                          className="relative"
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              index === currentBreakthrough
                                ? "bg-white"
                                : "bg-white/30"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    
                    {/* Navigation buttons */}
                    <div className="flex gap-1">
                      <button
                        onClick={() =>
                          setCurrentBreakthrough((prev) => 
                            (prev - 1 + breakthroughs.length) % breakthroughs.length
                          )
                        }
                        className="p-2 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                      >
                        <ChevronRight className="h-4 w-4 rotate-180 text-white" />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentBreakthrough((prev) => 
                            (prev + 1) % breakthroughs.length
                          )
                        }
                        className="p-2 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                      >
                        <ChevronRight className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
              <span>Ready to innovate?</span>
              <Link 
                to="/contact" 
                className="text-white hover:text-gray-200 transition-colors inline-flex items-center gap-1"
              >
                Start a conversation
                <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;