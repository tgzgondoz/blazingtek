import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, Cpu, BarChart3, Target, Globe } from 'lucide-react';

const SustainableRobotics = () => {
  const projects = [
    {
      title: 'Solar-Powered Agricultural Bots',
      description: 'Autonomous robots for precision farming powered entirely by solar energy',
      icon: Leaf,
      status: 'In Development'
    },
    {
      title: 'Ocean Cleanup Drones',
      description: 'AI-guided drones for collecting marine plastic waste',
      icon: Globe,
      status: 'Field Testing'
    },
    {
      title: 'Energy-Efficient Actuators',
      description: 'Next-generation servo systems with 40% less power consumption',
      icon: Zap,
      status: 'Research Phase'
    },
    {
      title: 'Biodegradable Components',
      description: 'Developing robot parts from sustainable, biodegradable materials',
      icon: Leaf,
      status: 'Prototype Stage'
    }
  ];

  const researchAreas = [
    'Renewable Energy Integration',
    'Circular Economy Robotics',
    'Low-Power Computing',
    'Sustainable Materials',
    'E-Waste Reduction',
    'Carbon Footprint Analysis'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F14] to-[#1a2634] pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900/20 rounded-full mb-6">
            <Leaf className="h-8 w-8 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sustainable Robotics
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering eco-friendly robotic solutions that harmonize technological advancement with environmental stewardship
          </p>
        </motion.div>

        {/* Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              At BlazingTek Research Labs, we're committed to developing robotic systems that not only push technological boundaries but also prioritize environmental sustainability. Our research focuses on creating robots that are energy-efficient, made from sustainable materials, and designed for longevity and recyclability.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 p-6 rounded-xl">
                <Target className="h-6 w-6 text-green-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Reduced Carbon Footprint</h3>
                <p className="text-gray-400 text-sm">Developing robots that consume 60% less energy than conventional models</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <Cpu className="h-6 w-6 text-green-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Smart Energy Management</h3>
                <p className="text-gray-400 text-sm">AI-powered systems for optimal energy distribution and consumption</p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl">
                <BarChart3 className="h-6 w-6 text-green-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Lifecycle Optimization</h3>
                <p className="text-gray-400 text-sm">Designing for easy repair, upgrade, and end-of-life recycling</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Active Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <project.icon className="h-8 w-8 text-green-400" />
                  <span className="px-3 py-1 bg-green-900/30 text-green-400 text-xs font-medium rounded-full">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Research Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Research Focus Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-colors"
              >
                <span className="text-sm text-gray-300">{area}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Join Our Green Robotics Initiative</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're looking for passionate researchers, engineers, and partners to help build the next generation of sustainable robotics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
                Apply for Research Position
              </button>
              <button className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/10">
                Request Partnership Info
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SustainableRobotics;