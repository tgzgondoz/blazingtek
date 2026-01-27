import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Calendar, Target, Award, Clock, MapPin, DollarSign, Video, Code, Cpu, Brain, BookOpen, GraduationCap, Shield } from 'lucide-react';

const Workshops = () => {
  const workshops = [
    {
      title: "AI & Machine Learning Bootcamp",
      duration: "3 Days",
      level: "Intermediate",
      description: "Hands-on training in AI algorithms and real-world ML model deployment",
      price: "$1,200",
      location: "Virtual/On-site",
      maxParticipants: 25,
      topics: [
        "Neural Networks & Deep Learning",
        "Computer Vision Applications", 
        "Natural Language Processing",
        "Reinforcement Learning Basics",
        "Model Deployment Strategies"
      ],
      icon: Brain,
      includes: ["Course Materials", "Hands-on Projects", "Certificate", "Labs Access"]
    },
    {
      title: "ROS Masterclass",
      duration: "5 Days",
      level: "Advanced",
      description: "Comprehensive Robot Operating System training for professional development",
      price: "$2,500",
      location: "On-site Preferred",
      maxParticipants: 15,
      topics: [
        "ROS2 Core Concepts",
        "Navigation & SLAM", 
        "Simulation with Gazebo",
        "Hardware Integration",
        "Real-time Control Systems"
      ],
      icon: Cpu,
      includes: ["ROS Workstation", "Robot Kit Access", "Expert Support", "Project Portfolio"]
    },
    {
      title: "Robotics for Educators",
      duration: "2 Days",
      level: "Beginner/Intermediate",
      description: "Curriculum development and modern teaching methodologies for STEM educators",
      price: "$800",
      location: "Virtual",
      maxParticipants: 30,
      topics: [
        "Curriculum Development",
        "Classroom Lab Setup", 
        "Student Assessment Tools",
        "Project-Based Learning",
        "Industry Certification Prep"
      ],
      icon: GraduationCap,
      includes: ["Teaching Resources", "Curriculum Templates", "Community Access", "Ongoing Support"]
    },
    {
      title: "Drone Programming Workshop",
      duration: "2 Days",
      level: "Beginner",
      description: "Learn autonomous drone programming and aerial robotics",
      price: "$950",
      location: "Hybrid",
      maxParticipants: 20,
      topics: [
        "Drone Fundamentals",
        "Autonomous Navigation", 
        "Computer Vision for Drones",
        "Flight Control Systems",
        "Regulations & Safety"
      ],
      icon: Shield,
      includes: ["Simulation Software", "Flight Practice", "Safety Gear", "Programming Tools"]
    }
  ];

  const trainingFeatures = [
    {
      title: "Customizable Programs",
      description: "Tailored content to match your team's skill level and objectives",
      icon: Target
    },
    {
      title: "Expert Instructors",
      description: "Industry professionals with years of real-world experience",
      icon: Users
    },
    {
      title: "Hands-on Projects",
      description: "Practical exercises using actual hardware and software tools",
      icon: Code
    },
    {
      title: "Certification",
      description: "Industry-recognized certificates upon completion",
      icon: Award
    }
  ];

  const upcomingWorkshops = [
    { date: "Mar 15-17, 2024", title: "AI Bootcamp", seats: "12/25", status: "Open" },
    { date: "Apr 8-12, 2024", title: "ROS Masterclass", seats: "5/15", status: "Limited" },
    { date: "May 3-4, 2024", title: "Educator Workshop", seats: "22/30", status: "Open" },
    { date: "Jun 10-11, 2024", title: "Drone Programming", seats: "8/20", status: "Open" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/95 z-10"></div>
          
          {/* Particles */}
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
                  <circle cx="75" cy="75" r="0.8" fill="#FFFFFF" fillOpacity="0.1" />
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
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="p-4 bg-white/10 rounded-full">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Workshops & <span className="text-gray-300">Training</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto bg-white/5 px-6 py-4 rounded-lg border border-gray-700">
              Professional training programs to accelerate your team's expertise in AI, 
              robotics, and emerging technologies.
            </p>
          </motion.div>

          {/* Training Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {trainingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-gray-800">
                  <div className="p-2 bg-white/10 rounded">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="relative py-16 -mt-12">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Featured Workshops
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {workshops.map((workshop, index) => {
              const Icon = workshop.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-white/30 transition-all duration-300 h-full">
                    {/* Workshop Header */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Icon className="w-6 h-6 text-white" />
                            <h3 className="text-2xl font-bold text-white">{workshop.title}</h3>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {workshop.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {workshop.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              Max: {workshop.maxParticipants}
                            </span>
                          </div>
                        </div>
                        <span className="px-3 py-1 text-sm bg-white/10 text-white font-semibold rounded-full">
                          {workshop.level}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-6">{workshop.description}</p>
                      
                      {/* Topics */}
                      <div className="mb-6">
                        <h4 className="font-medium text-white mb-3">Key Topics:</h4>
                        <div className="flex flex-wrap gap-2">
                          {workshop.topics.slice(0, 3).map((topic, idx) => (
                            <span key={idx} className="px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-full">
                              {topic}
                            </span>
                          ))}
                          {workshop.topics.length > 3 && (
                            <span className="px-3 py-1 text-sm bg-white/5 text-gray-400 rounded-full">
                              +{workshop.topics.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Includes */}
                      <div className="mb-6">
                        <h4 className="font-medium text-white mb-3">Includes:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {workshop.includes.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              <span className="text-sm text-gray-400">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Price & Action */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-700">
                        <div>
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-5 h-5 text-white" />
                            <span className="text-2xl font-bold text-white">{workshop.price}</span>
                          </div>
                          <p className="text-sm text-gray-400">Per participant</p>
                        </div>
                        <button className="px-6 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-colors">
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Upcoming Workshops */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6" />
              Upcoming Workshop Schedule
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Date</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Workshop</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Seats Available</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium">Status</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingWorkshops.map((workshop, index) => (
                    <tr key={index} className="border-b border-gray-800/50 hover:bg-white/5">
                      <td className="py-4 px-4">
                        <div className="text-white">{workshop.date}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-white font-medium">{workshop.title}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-gray-300">{workshop.seats}</div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          workshop.status === 'Limited' 
                            ? 'bg-yellow-500/20 text-yellow-300' 
                            : 'bg-green-500/20 text-green-300'
                        }`}>
                          {workshop.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors text-sm">
                          Register
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Custom Training CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-xl p-8 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Need Custom Training?</h3>
                <p className="text-gray-300">
                  We offer customized workshop programs tailored to your organization's 
                  specific needs, technology stack, and learning objectives.
                </p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-white hover:bg-gray-200 text-black font-semibold rounded-lg transition-colors">
                  Request Proposal
                </button>
                <button className="px-6 py-3 border border-white/30 hover:border-white/50 text-white rounded-lg transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </motion.div>

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