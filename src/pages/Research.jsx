import { 
  Microscope,
  BookOpen,
  Calendar,
  Award,
  ExternalLink,
  Sparkles,
  Target,
  Users,
  FileText,
  ArrowRight,
  GitBranch
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Research = () => {
  const projects = [
    {
      title: "AI Smart Greenhouse",
      description: "Intelligent greenhouse system using AI and IoT for optimal plant growth and resource management",
      status: "Active",
      progress: 78,
      timeline: "Jan 2024 - Dec 2024",
      team: 5,
      publications: 3,
      technologies: ["AI/ML", "IoT Sensors", "Computer Vision", "Climate Control"],
      lead: "Dr. Sarah Chen"
    },
    {
      title: "Autonomous Workhorse",
      description: "Multi-purpose autonomous robot for industrial and agricultural applications",
      status: "Pilot Phase",
      progress: 65,
      timeline: "Mar 2024 - Feb 2025",
      team: 8,
      publications: 2,
      technologies: ["Autonomous Navigation", "Robotic Arms", "SLAM", "Edge AI"],
      lead: "Kwame Osei"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-800 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-800 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-black/50 border border-gray-800 backdrop-blur-sm">
                <Microscope className="h-4 w-4 text-gray-300" />
                <span className="text-sm font-medium text-gray-300">Research & Innovation</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  Pushing
                </span>
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent"
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
                    className="group bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-black/50 hover:shadow-xl hover:shadow-black/70 flex items-center gap-3"
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
                    to="#projects" 
                    className="group bg-transparent border-2 border-gray-800 hover:border-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-900/20 flex items-center gap-3"
                  >
                    <Target className="h-5 w-5" />
                    <span>View Projects</span>
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
              <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-300 font-semibold">Research Spotlight</span>
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
                    <Award className="h-4 w-4 text-gray-400" />
                    <span>Industry Award Winner</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
              <Target className="h-6 w-6 text-gray-400" />
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Featured Projects</span>
              <Target className="h-6 w-6 text-gray-400" />
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Active <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">Research Projects</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cutting-edge research initiatives driving innovation in AI and robotics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Active' 
                          ? 'bg-gray-800 text-gray-300 border border-gray-700' 
                          : 'bg-gray-800 text-amber-300 border border-gray-700'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-sm text-gray-500">Project {index + 1}</span>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white mb-1">{project.progress}%</div>
                      <div className="text-xs text-gray-500">Progress</div>
                    </div>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full rounded-full bg-gradient-to-r from-gray-600 to-gray-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <GitBranch className="h-4 w-4 text-gray-500" />
                      <span className="text-sm font-semibold text-gray-400">Technologies</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-lg text-sm border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Details Grid */}
                  <div className="grid grid-cols-2 gap-6 border-t border-gray-800 pt-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">Timeline</span>
                      </div>
                      <div className="text-gray-300 font-medium">{project.timeline}</div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">Team</span>
                      </div>
                      <div className="text-gray-300 font-medium">{project.team} researchers</div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">Publications</span>
                      </div>
                      <div className="text-gray-300 font-medium">{project.publications} papers</div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">Lead</span>
                      </div>
                      <div className="text-gray-300 font-medium">{project.lead}</div>
                    </div>
                  </div>
                  
                  {/* View Project Link */}
                  <div className="mt-6">
                    <Link 
                      to={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="group/link inline-flex items-center text-gray-400 hover:text-white font-semibold text-sm"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View All Projects */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link 
              to="/projects"
              className="group inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              <span>View All Research Projects</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Research;