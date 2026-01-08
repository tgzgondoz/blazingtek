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
      {/* Snowflakes Animation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              opacity: Math.random() * 0.6 + 0.1,
              filter: "blur(0.5px)",
            }}
            initial={{ y: -20 }}
            animate={{
              y: "100vh",
              x: [
                Math.random() * 20 - 10,
                Math.random() * 20 - 10,
                Math.random() * 20 - 10,
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Larger snowflakes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`large-${i}`}
            className="absolute top-0 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              opacity: Math.random() * 0.4 + 0.1,
              filter: "blur(1px)",
            }}
            initial={{ y: -20 }}
            animate={{
              y: "100vh",
              x: [
                Math.random() * 40 - 20,
                Math.random() * 40 - 20,
                Math.random() * 40 - 20,
              ],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 25 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Hero Section with Professional Glass Effects */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        {/* Background with enhanced visibility */}
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
          
          {/* Reduced overlay opacity for better background visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F14]/70 via-[#0A0F14]/60 to-[#0A0F14]/50"></div>
          
          {/* Animated grid pattern - reduced opacity */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#00D4AA" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full"
          style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x * 1.5}deg) rotateX(${mousePosition.y * -1.5}deg)`,
            transition: "transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text directly on background */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="block text-white">Engineering</span>
                <span className="block text-[#00D4AA] mt-2">Intelligent</span>
                <span className="block text-white">Systems</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg mb-8 text-white/80 max-w-lg"
              >
                Pioneering research-driven solutions for Africa's challenges through robotics and AI.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  to="/research"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#0066CC] to-[#00D4AA] text-white px-8 py-4 rounded-lg font-semibold overflow-hidden"
                >
                  <span className="relative z-10">Explore Research</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Enhanced Glass Carousel without text */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Glass carousel container */}
              <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl overflow-hidden">
                {/* Carousel indicator */}
                <div className="absolute top-4 right-4 z-20">
                  <div className="text-xs text-white/40 font-mono bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    0{currentBreakthrough + 1}/0{breakthroughs.length}
                  </div>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                  {/* Main Carousel Image - Larger and cleaner */}
                  <div className="relative h-96 rounded-xl overflow-hidden">
                    {breakthroughs.map((breakthrough, index) => (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: currentBreakthrough === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="relative h-full w-full">
                          <img
                            src={breakthrough.image}
                            alt={breakthrough.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={(e) => {
                              console.error(`Error loading image: ${breakthrough.image}`);
                              e.target.onerror = null;
                              e.target.src = `https://via.placeholder.com/600x400/0A0F14/00D4AA?text=${encodeURIComponent(breakthrough.title)}`;
                            }}
                          />
                          {/* Subtle overlay for better image visibility */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Navigation and Progress only */}
                  <div className="mt-6 flex items-center justify-between">
                    {/* Progress dots */}
                    <div className="flex gap-3">
                      {breakthroughs.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentBreakthrough(index)}
                          className="relative"
                        >
                          <motion.div
                            className={`w-3 h-3 rounded-full ${
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
                    
                    {/* Navigation buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          setCurrentBreakthrough((prev) => 
                            (prev - 1 + breakthroughs.length) % breakthroughs.length
                          )
                        }
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all hover:scale-105"
                      >
                        <ChevronRight className="h-5 w-5 rotate-180 text-[#00D4AA]" />
                      </button>
                      <button
                        onClick={() =>
                          setCurrentBreakthrough((prev) => 
                            (prev + 1) % breakthroughs.length
                          )
                        }
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-sm transition-all hover:scale-105"
                      >
                        <ChevronRight className="h-5 w-5 text-[#00D4AA]" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decorative floating elements - reduced opacity */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00D4AA]/5 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#0066CC]/5 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>

          {/* Bottom callout - Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 text-white/50 text-sm">
              <span>Ready to innovate?</span>
              <Link 
                to="/contact" 
                className="text-[#00D4AA] hover:text-white transition-colors inline-flex items-center gap-1"
              >
                Start a conversation
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;