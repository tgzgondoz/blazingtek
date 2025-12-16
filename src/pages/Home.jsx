import { ArrowRight, Cpu, Zap, Users, Globe, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Import the slide images and logo
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import logo from "../assets/logo.png"; // Make sure this path is correct

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

  const RoboticBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Enhanced Circuit Board */}
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="1.5"
              />
              <circle cx="30" cy="30" r="2" fill="#6b7280" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Data Nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 10}%`,
            top: `${15 + i * 7}%`,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          <div className="w-3 h-3 rounded-full bg-gray-500 shadow-lg" />
        </motion.div>
      ))}

      {/* Floating Tech Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4"
        animate={{
          x: [0, 30, 0, -20, 0],
          y: [0, -30, 0, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="relative">
          <div className="w-16 h-16 border-2 border-gray-400/30 rounded-lg rotate-45" />
          <div className="absolute inset-4 border-2 border-gray-400/30 rounded rotate-12" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="relative">
          <div className="w-20 h-20 border-2 border-gray-400/20 rounded-full" />
          <div className="absolute inset-3 border-2 border-gray-400/20 rounded-full" />
          <div className="absolute inset-6 border-2 border-gray-400/20 rounded-full" />
        </div>
      </motion.div>

      {/* Dynamic Connection Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M10,100 Q250,50 490,200"
          stroke="#9ca3af"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
          animate={{
            strokeDashoffset: [0, -100],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.path
          d="M500,50 Q300,150 100,300"
          stroke="#6b7280"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
          animate={{
            strokeDashoffset: [100, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
    </div>
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gray-900 text-white overflow-hidden">
        <RoboticBackground />
        <div className="absolute inset-0 bg-gray-900/80"></div>

        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24"
          style={{
            transform: `perspective(1000px) rotateY(${
              mousePosition.x * 2
            }deg) rotateX(${mousePosition.y * -2}deg)`,
            transition: "transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Clean Logo Display - Larger Size */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-12"
              >
                <div className="relative inline-block">
                  {/* Logo container with transparent background - Larger */}
                  <motion.div
                    className="relative p-8 bg-transparent"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={logo}
                      alt="Research & Innovation Logo"
                      className="h-24 w-auto object-contain drop-shadow-2xl filter brightness-0 invert"
                      onError={(e) => {
                        console.error("Error loading logo");
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/400x120/1e3a8a/ffffff?text=Research+%26+Innovation";
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
                <span className="text-white">Robotics, AI &</span>
                <br />
                <span className="text-white font-bold">Emerging Tech</span>
                <br />
                <span className="text-white">for Africa</span>
              </h1>

              <motion.p
                className="text-xl mb-10 text-gray-300 leading-relaxed max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Pioneering research-driven solutions to address Africa's most
                pressing challenges through cutting-edge technology and
                innovation.
              </motion.p>

              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link
                    to="/research"
                    className="group relative inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-gray-800/25 hover:shadow-xl hover:shadow-gray-800/40 border border-gray-700"
                  >
                    <span className="relative z-10">Explore Solutions</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
                  >
                    <span>Partner With Us</span>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Animated Image Slides Carousel */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative bg-gray-800 backdrop-blur-xl rounded-2xl p-4 border border-white/10 shadow-2xl overflow-hidden">
                <div className="absolute -inset-0.5 bg-gray-700 rounded-2xl opacity-20 blur" />

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
                          <div className="absolute inset-0 bg-black/50" />

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
                                <div className="w-3 h-3 rounded-full bg-green-500" />
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

      {/* Compact Research & Innovation Section */}
      <section className="relative py-16 bg-white overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #6b7280 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        {/* Subtle Floating Elements */}
        <div className="absolute top-10 left-5 w-20 h-20 bg-gray-100 rounded-full blur-2xl opacity-30"></div>
        <div className="absolute bottom-10 right-5 w-24 h-24 bg-gray-100 rounded-full blur-2xl opacity-20"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Compact Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Compact Logo - Larger Size */}
            <motion.div
              className="flex flex-col items-center justify-center mb-12"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {/* Clean Logo - Larger with Black Color */}
              <div className="relative">
                {/* Optional shadow/glow effect for black logo */}
                <div className="absolute inset-0 bg-black/10 blur-md rounded-full scale-110"></div>

                <img
                  src={logo}
                  alt="Research & Innovation"
                  className="relative h-28 w-auto object-contain filter brightness-0"
                  onError={(e) => {
                    console.error("Error loading logo in Research section");
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/400x120/000000/ffffff?text=Research+%26+Innovation";
                  }}
                />
              </div>
            </motion.div>

            {/* Compact Heading */}
            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight text-gray-800"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-gray-600">Advancing </span>
              <span className="text-gray-700">Technology</span>
              <span className="text-gray-600"> Through </span>
              <span className="text-gray-800 font-bold">
                Research Excellence
              </span>
            </motion.h2>

            {/* Compact Subtitle */}
            <motion.p
              className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Combining theoretical excellence with practical application to
              deliver innovative solutions for Africa's challenges.
            </motion.p>
          </motion.div>

          {/* Compact Research Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {researchHighlights.map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Compact Card */}
                <div className="relative h-full bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  {/* Compact Icon */}
                  <div className="mb-4 p-3 rounded-lg bg-gray-100 w-fit">
                    <div className="text-gray-700">{item.icon}</div>
                  </div>

                  {/* Compact Title */}
                  <h3 className="text-base font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>

                  {/* Compact Description */}
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Compact Features */}
                  <div className="space-y-2 mb-4">
                    {item.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-xs"
                      >
                        <div className="w-1 h-1 rounded-full bg-gray-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Compact Stats & CTA */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-medium text-gray-700 cursor-pointer group-hover:text-gray-900 transition-colors">
                        Explore →
                      </div>
                      <div className="px-2 py-1 rounded-lg bg-gray-100">
                        <span className="text-xs font-semibold text-gray-700">
                          {item.stats}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Compact Call to Action */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/research"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg border border-gray-700"
            >
              <span>View Research Portfolio</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
