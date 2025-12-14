import { 
  Cpu, 
  Zap, 
  Eye, 
  Brain, 
  FlaskConical, 
  BookOpen,
  Users,
  TrendingUp,
  Target,
  Award,
  Calendar,
  ExternalLink,
  Microscope,
  Cloud,
  Shield,
  Battery,
  GitBranch,
  Sparkles,
  ArrowRight,
  ChevronRight,
  FileText,
  Clock,
  MapPin,
  Rocket,
  LineChart,
  Code
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Research = () => {
  const researchAreas = [
    {
      icon: <Brain className="h-10 w-10" />,
      title: "AI & Machine Learning",
      description: "Developing Africa-centric AI models for agriculture, healthcare, and education",
      projects: [
        "Edge AI for remote diagnostics",
        "Reinforcement learning for robotics",
        "Natural language processing for local languages"
      ],
      lead: "Dr. Amina Diallo",
      status: "Active",
      gradient: "from-blue-500 to-cyan-500",
      researchers: 12,
      publications: 8
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: "Autonomous Robotics",
      description: "Developing self-navigating systems for agriculture, mining, and logistics",
      projects: [
        "SLAM navigation in unstructured environments",
        "Swarm robotics for precision agriculture",
        "Autonomous delivery drones"
      ],
      lead: "Kwame Osei",
      status: "Pilot Phase",
      gradient: "from-purple-500 to-pink-500",
      researchers: 8,
      publications: 5
    },
    {
      icon: <Eye className="h-10 w-10" />,
      title: "Computer Vision",
      description: "Advanced imaging and perception systems for industrial applications",
      projects: [
        "Crop disease detection using hyperspectral imaging",
        "3D reconstruction for archaeological sites",
        "Real-time object tracking"
      ],
      lead: "Dr. Chen Wei",
      status: "Active",
      gradient: "from-emerald-500 to-green-500",
      researchers: 10,
      publications: 7
    },
    {
      icon: <Battery className="h-10 w-10" />,
      title: "Sustainable Robotics",
      description: "Energy-efficient systems powered by renewable sources",
      projects: [
        "Solar-powered autonomous vehicles",
        "Energy harvesting from motion",
        "Biodegradable robotic components"
      ],
      lead: "Fatima Bello",
      status: "Research Phase",
      gradient: "from-amber-500 to-orange-500",
      researchers: 6,
      publications: 4
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Assistive Technology",
      description: "Developing affordable assistive devices for people with disabilities",
      projects: [
        "3D-printed prosthetic limbs",
        "Voice-controlled mobility aids",
        "Haptic feedback systems"
      ],
      lead: "Dr. Samuel Adeyemi",
      status: "Deployment",
      gradient: "from-rose-500 to-red-500",
      researchers: 9,
      publications: 6
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "IoT & Edge Computing",
      description: "Networked systems for smart infrastructure and remote monitoring",
      projects: [
        "Low-power IoT networks for agriculture",
        "Edge computing for real-time analytics",
        "Blockchain for supply chain tracking"
      ],
      lead: "Maria Rodriguez",
      status: "Active",
      gradient: "from-indigo-500 to-blue-500",
      researchers: 11,
      publications: 9
    }
  ];

  const currentProjects = [
    {
      title: "AgriBot 2.0",
      description: "AI-powered autonomous farming robot for smallholder farmers",
      progress: 85,
      timeline: "Jan 2024 - Jun 2024",
      funding: "Google AI Impact Challenge",
      gradient: "from-emerald-500 to-green-500",
      partners: ["University of Ghana", "Google AI"]
    },
    {
      title: "MediScan AI",
      description: "Portable diagnostic device for rural healthcare centers",
      progress: 60,
      timeline: "Mar 2024 - Dec 2024",
      funding: "Gates Foundation",
      gradient: "from-blue-500 to-cyan-500",
      partners: ["WHO", "MIT Open Learning"]
    },
    {
      title: "Solar Rover",
      description: "Solar-powered exploration robot for mineral prospecting",
      progress: 45,
      timeline: "Feb 2024 - Nov 2024",
      funding: "African Development Bank",
      gradient: "from-amber-500 to-orange-500",
      partners: ["African Union", "UNDP"]
    }
  ];

  const publications = [
    {
      title: "Edge AI for Precision Agriculture in Sub-Saharan Africa",
      authors: "Diallo, A., Osei, K., et al.",
      journal: "Nature Machine Intelligence",
      year: 2023,
      link: "#",
      citations: 42,
      badge: "Top Cited"
    },
    {
      title: "Low-Cost Prosthetic Design Using 3D Printing",
      authors: "Adeyemi, S., Bello, F.",
      journal: "IEEE Transactions on Biomedical Engineering",
      year: 2023,
      link: "#",
      citations: 28,
      badge: "Best Paper"
    },
    {
      title: "Solar-Powered Autonomous Navigation in Rural Environments",
      authors: "Osei, K., Rodriguez, M.",
      journal: "Robotics and Autonomous Systems",
      year: 2022,
      link: "#",
      citations: 35,
      badge: "Highly Cited"
    }
  ];

  const researchStats = [
    { icon: <FlaskConical className="h-8 w-8" />, value: "25+", label: "Active Projects", gradient: "from-blue-500 to-cyan-500" },
    { icon: <Users className="h-8 w-8" />, value: "50+", label: "Researchers", gradient: "from-purple-500 to-pink-500" },
    { icon: <BookOpen className="h-8 w-8" />, value: "18", label: "Publications (2023)", gradient: "from-emerald-500 to-green-500" },
    { icon: <Award className="h-8 w-8" />, value: "15", label: "Patents Filed", gradient: "from-amber-500 to-orange-500" },
    { icon: <TrendingUp className="h-8 w-8" />, value: "$5M+", label: "Research Funding", gradient: "from-rose-500 to-red-500" },
    { icon: <Target className="h-8 w-8" />, value: "8", label: "Countries Involved", gradient: "from-indigo-500 to-blue-500" }
  ];

  const researchFacilities = [
    { name: "AI Computing Cluster", description: "High-performance GPU servers for ML training", icon: <Cpu className="h-6 w-6" /> },
    { name: "Robotics Test Facility", description: "2000 sq ft indoor/outdoor testing area", icon: <Rocket className="h-6 w-6" /> },
    { name: "3D Printing Lab", description: "Industrial-grade additive manufacturing", icon: <Code className="h-6 w-6" /> },
    { name: "Solar Testing Station", description: "Renewable energy integration lab", icon: <Zap className="h-6 w-6" /> },
    { name: "Vision Systems Lab", description: "Advanced imaging and perception systems", icon: <Eye className="h-6 w-6" /> },
    { name: "IoT Development Hub", description: "Embedded systems and sensor networks", icon: <Cloud className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 backdrop-blur-sm">
                <Microscope className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">Research & Innovation</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Pushing
                </span>
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Boundaries
                </motion.span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl"
              >
                Pioneering interdisciplinary research at the intersection of AI, robotics, 
                and sustainable technology to solve Africa's most pressing challenges.
              </motion.p>
              
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/contact" 
                    className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 flex items-center gap-3"
                  >
                    <span>Partner on Research</span>
                    <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="#publications" 
                    className="group bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5 flex items-center gap-3"
                  >
                    <BookOpen className="h-5 w-5" />
                    <span>View Publications</span>
                  </Link>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="h-5 w-5 text-amber-400" />
                  <span className="text-emerald-400 font-semibold">Research Spotlight</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">Breakthrough Achievement</h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Our team recently achieved 95% accuracy in detecting crop diseases 
                  using AI and drone imagery, helping farmers reduce losses by 40%.
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Latest breakthrough: March 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-amber-400" />
                    <span>Industry Award Winner</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Research Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {researchStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${stat.gradient} mb-4 shadow-lg`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Focus Areas</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Research Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interdisciplinary research at the intersection of AI, robotics, and sustainable technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${area.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${area.gradient} shadow-lg`}>
                        <div className="text-white">
                          {area.icon}
                        </div>
                      </div>
                      <span className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                        area.status === 'Active' ? 'bg-green-100 text-green-800 border border-green-200' :
                        area.status === 'Pilot Phase' ? 'bg-amber-100 text-amber-800 border border-amber-200' :
                        area.status === 'Deployment' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                        'bg-gray-100 text-gray-800 border border-gray-200'
                      }`}>
                        {area.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {area.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <GitBranch className="h-4 w-4 text-blue-500" />
                        Key Projects
                      </div>
                      <ul className="space-y-2">
                        {area.projects.map((project, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mr-3"></div>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-sm text-gray-500">Research Lead</div>
                          <div className="font-semibold text-gray-900">{area.lead}</div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {area.researchers}
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="h-4 w-4" />
                            {area.publications}
                          </div>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/research/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="group flex items-center justify-between text-blue-600 hover:text-blue-700 font-semibold text-sm"
                      >
                        <span>Explore Research Area</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Target className="h-6 w-6 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">Active Projects</span>
              <Target className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Current Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Active research initiatives making real-world impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.progress}%
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed">{project.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Progress</span>
                      <span className="font-medium">{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(to right, ${project.gradient.replace('from-', '').replace('to-', '')})` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-4 w-4 mr-3" />
                      <span className="font-medium">{project.timeline}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Award className="h-4 w-4 mr-3" />
                      <span className="font-medium">{project.funding}</span>
                    </div>
                    <div className="flex items-start text-sm text-gray-400">
                      <Users className="h-4 w-4 mr-3 mt-0.5" />
                      <div>
                        <span className="font-medium block mb-1">Partners:</span>
                        <div className="flex flex-wrap gap-2">
                          {project.partners.map((partner, idx) => (
                            <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs">
                              {partner}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <BookOpen className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Publications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contributing to global knowledge through peer-reviewed research
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="space-y-8">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-6 rounded-xl border border-gray-200 hover:border-transparent transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            pub.badge === 'Top Cited' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                            pub.badge === 'Best Paper' ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' :
                            'bg-amber-100 text-amber-800 border border-amber-200'
                          }`}>
                            {pub.badge}
                          </span>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <FileText className="h-4 w-4" />
                            {pub.citations} citations
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold mb-3 group-hover:text-blue-600 transition-colors">
                          {pub.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-2">{pub.authors}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <span className="font-medium mr-2">{pub.journal}</span>
                            <span className="mx-2">•</span>
                            <span>{pub.year}</span>
                          </div>
                        </div>
                      </div>
                      
                      <a 
                        href={pub.link}
                        className="group/link flex items-center justify-center lg:justify-end gap-2 text-blue-600 hover:text-blue-700 font-semibold whitespace-nowrap"
                      >
                        <span>Read Paper</span>
                        <ExternalLink className="h-4 w-4 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link 
                to="/research/publications"
                className="group inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
              >
                <span>View All Publications</span>
                <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Facilities */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                  <FlaskConical className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  State-of-the-Art <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Research Facilities</span>
                </h2>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our research labs are equipped with cutting-edge technology to support 
                innovative projects across all focus areas, enabling breakthrough discoveries.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {researchFacilities.map((facility, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -3 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-200"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                      {facility.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{facility.name}</div>
                      <div className="text-sm text-gray-600">{facility.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-blue-950 rounded-2xl p-8 text-white shadow-2xl border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="h-6 w-6 text-cyan-400" />
                  <h3 className="text-2xl font-bold">Lab Access Program</h3>
                </div>
                
                <p className="text-gray-300 mb-8 leading-relaxed">
                  We offer access to our research facilities for academic and industry partners. 
                  Collaborate with us on your next breakthrough.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="h-4 w-4 mr-3" />
                    <span>24/7 access for approved researchers</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Users className="h-4 w-4 mr-3" />
                    <span>Mentorship from senior researchers</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="h-4 w-4 mr-3" />
                    <span>Available at all three research centers</span>
                  </div>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/contact" 
                    className="group w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                  >
                    <span>Request Lab Access</span>
                    <ExternalLink className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;