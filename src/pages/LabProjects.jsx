import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FlaskRound, 
  Cpu, 
  Code, 
  Users, 
  Calendar, 
  Award,
  ExternalLink,
  Filter,
  Search,
  Clock,
  TrendingUp
} from 'lucide-react';

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
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'active', label: 'Active', count: projects.filter(p => p.status === 'active').length },
    { id: 'completed', label: 'Completed', count: projects.filter(p => p.status === 'completed').length },
    { id: 'planning', label: 'Planning', count: projects.filter(p => p.status === 'planning').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.status === filter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0F14] to-[#1a2634] pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/20 rounded-full mb-6">
            <FlaskRound className="h-8 w-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lab Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore cutting-edge research and innovative projects underway at BlazingTek Research Labs
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <FlaskRound className="h-6 w-6 text-blue-400" />
              <span className="text-2xl font-bold text-white">{projects.length}</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">Active Projects</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <Users className="h-6 w-6 text-green-400" />
              <span className="text-2xl font-bold text-white">
                {projects.reduce((sum, p) => sum + p.teamSize, 0)}
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-2">Researchers</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <Award className="h-6 w-6 text-yellow-400" />
              <span className="text-2xl font-bold text-white">
                {projects.filter(p => p.status === 'completed').length}
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-2">Completed</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <TrendingUp className="h-6 w-6 text-purple-400" />
              <span className="text-2xl font-bold text-white">
                {Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)}%
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-2">Avg Progress</p>
          </div>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <Filter className="h-5 w-5 text-gray-400" />
              <h2 className="text-2xl font-bold text-white">Our Projects</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filter === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                    project.status === 'active' ? 'bg-green-900/30 text-green-400' :
                    project.status === 'completed' ? 'bg-blue-900/30 text-blue-400' :
                    'bg-gray-900/30 text-gray-400'
                  }`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
                <ExternalLink className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6">{project.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-white font-medium">{project.progress}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Tags and Info */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{project.teamSize}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.startDate}</span>
                    </div>
                  </div>
                  {project.endDate && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Completed: {project.endDate}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Interested in Our Research?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for talented researchers, students, and industry partners to collaborate on groundbreaking projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Join Research Team
              </button>
              <button className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/10">
                Propose Collaboration
              </button>
              <button className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/10">
                View Publications
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LabProjects;