import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Calendar, Target, Award } from 'lucide-react';

const Workshops = () => {
  const workshops = [
    {
      title: "AI & Machine Learning",
      duration: "3 Days",
      level: "Intermediate",
      description: "Hands-on training in AI algorithms and ML model deployment",
      topics: ["Neural Networks", "Computer Vision", "Reinforcement Learning"]
    },
    {
      title: "ROS Masterclass",
      duration: "5 Days",
      level: "Advanced",
      description: "Comprehensive Robot Operating System training",
      topics: ["ROS2", "Navigation Stack", "Simulation", "Hardware Integration"]
    },
    {
      title: "Robotics for Educators",
      duration: "2 Days",
      level: "Beginner",
      description: "Curriculum development and teaching methodologies",
      topics: ["Lesson Planning", "Lab Setup", "Student Assessment"]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden">
        {/* Background matching Home/Abouts/RoboticsKits */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/95 z-10"></div>
          
          {/* Minimal particles */}
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
          
          {/* Static dots */}
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

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <Users className="w-12 h-12 text-white" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Workshops & <span className="text-gray-300">Training</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto bg-white/5 px-6 py-4 rounded-lg border border-gray-700">
              Custom training programs designed to empower teams with cutting-edge 
              skills in AI, robotics, and emerging technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="relative pb-24 -mt-12">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-white/30 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 text-sm bg-white/10 text-white rounded-full">
                          {workshop.level}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          {workshop.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{workshop.title}</h3>
                    </div>
                    <Target className="w-10 h-10 text-white ml-4" />
                  </div>
                  
                  <p className="text-gray-300 mb-8">{workshop.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    <h4 className="font-medium text-gray-300">Covered Topics:</h4>
                    <div className="space-y-2">
                      {workshop.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-white" />
                          <span className="text-gray-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <button className="w-full py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-colors">
                      Schedule Workshop
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
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

export default Workshops;