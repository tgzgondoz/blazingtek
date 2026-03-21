import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LabProjects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Neural Network Optimization',
      description: 'Developing novel algorithms for efficient neural network training and inference',
      category: 'ai',
      status: 'active',
      teamSize: 8,
      startDate: '2024-01',
      progress: 75,
      tags: ['Machine Learning', 'Optimization', 'AI']
    },
    {
      id: 2,
      title: 'Quantum Computing Interface',
      description: 'Creating bridging software between classical and quantum computing systems',
      category: 'quantum',
      status: 'active',
      teamSize: 5,
      startDate: '2024-03',
      progress: 45,
      tags: ['Quantum', 'Software', 'Hardware']
    },
    {
      id: 3,
      title: 'Autonomous Swarm Robotics',
      description: 'Coordinated behavior in robotic swarms for industrial applications',
      category: 'robotics',
      status: 'completed',
      teamSize: 12,
      startDate: '2023-06',
      endDate: '2024-02',
      progress: 100,
      tags: ['Robotics', 'AI', 'Automation']
    },
    {
      id: 4,
      title: 'Biomedical Sensor Fusion',
      description: 'Advanced sensor integration for real-time health monitoring systems',
      category: 'biotech',
      status: 'active',
      teamSize: 6,
      startDate: '2024-02',
      progress: 60,
      tags: ['Healthcare', 'Sensors', 'Data Fusion']
    },
    {
      id: 5,
      title: 'Edge AI Processors',
      description: 'Designing low-power AI processors for edge computing applications',
      category: 'hardware',
      status: 'planning',
      teamSize: 4,
      startDate: '2024-05',
      progress: 20,
      tags: ['Hardware', 'AI', 'Edge Computing']
    },
    {
      id: 6,
      title: 'Environmental Monitoring Network',
      description: 'Distributed sensor network for climate and pollution monitoring',
      category: 'sustainability',
      status: 'active',
      teamSize: 9,
      startDate: '2023-11',
      progress: 80,
      tags: ['Sustainability', 'IoT', 'Monitoring']
    }
  ];

  const categories = [
    { id: 'active', label: 'Active', count: projects.filter(p => p.status === 'active').length },
    { id: 'completed', label: 'Completed', count: projects.filter(p => p.status === 'completed').length },
    { id: 'planning', label: 'Planning', count: projects.filter(p => p.status === 'planning').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter);

  return (
    <div className="min-h-screen bg-[#0A0F14] pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
            <div className="text-2xl font-bold text-gray-300">L</div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lab Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
           no project is too big, no idea is too small. Our lab is a hub of innovation where we turn ambitious ideas into groundbreaking projects. From cutting-edge AI research to sustainable technology development, we are committed to pushing the boundaries of what's possible. Join us on this exciting journey as we explore new frontiers and create solutions that make a real impact on the world.
          </p>
        </motion.div>


  

      </div>
    </div>
  );
};

export default LabProjects;