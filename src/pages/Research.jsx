import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";

// Import Firebase modular version (recommended)
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZCgcI4IpitZSAz116DtSaWp31vz3bGC4",
  authDomain: "blazingtek-c56e7.firebaseapp.com",
  databaseURL: "https://blazingtek-c56e7-default-rtdb.firebaseio.com",
  projectId: "blazingtek-c56e7",
  storageBucket: "blazingtek-c56e7.firebasestorage.app",
  messagingSenderId: "176023582058",
  appId: "1:176023582058:web:c12f2be2a6195fa5cca113",
  measurementId: "G-S8YYNS28WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Research = () => {
  const [researchProjects, setResearchProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [breakthrough, setBreakthrough] = useState(null);

  // Load research projects from Firebase
  useEffect(() => {
    const loadResearchData = async () => {
      try {
        setIsLoading(true);
        
        // Load research projects
        const projectsRef = ref(database, 'research/projects');
        onValue(projectsRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const projectsArray = Object.keys(data).map(key => ({
              id: key,
              ...data[key]
            }));
            // Sort by date or progress
            projectsArray.sort((a, b) => b.progress - a.progress);
            setResearchProjects(projectsArray);
            
            // Set first project as breakthrough achievement if available
            if (projectsArray.length > 0) {
              setBreakthrough({
                title: "Breakthrough Achievement",
                description: `${projectsArray[0].title} - Our team recently achieved ${projectsArray[0].progress}% progress in this cutting-edge research project.`,
                date: projectsArray[0].date || new Date().toISOString().split('T')[0],
                award: "Active Research Project"
              });
            }
          } else {
            setResearchProjects([]);
            // Default breakthrough if no data
            setBreakthrough({
              title: "Breakthrough Achievement",
              description: "Our team recently achieved 95% accuracy in detecting crop diseases using AI and drone imagery, helping farmers reduce losses by 40%.",
              date: "March 2024",
              award: "Industry Award Winner"
            });
          }
          setIsLoading(false);
        });
      } catch (error) {
        console.error('Error loading research data from Firebase:', error);
        setIsLoading(false);
      }
    };

    loadResearchData();
  }, []);

  // Format date for display
  const formatDateForDisplay = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch {
      return dateString || 'Ongoing';
    }
  };

  // Get status color
  const getStatusColor = (status) => {
    const statusMap = {
      'active': 'bg-green-500/10 text-green-400 border-green-500/20',
      'pilot': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      'completed': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'planning': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      'funding': 'bg-red-500/10 text-red-400 border-red-500/20',
      'collaboration': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
    };
    return statusMap[status?.toLowerCase()] || 'bg-white/10 text-gray-300 border-white/10';
  };

  // Get status label
  const getStatusLabel = (status) => {
    const statusMap = {
      'active': 'Active',
      'pilot': 'Pilot Phase',
      'completed': 'Completed',
      'planning': 'Planning',
      'funding': 'Seeking Funding',
      'collaboration': 'Open for Collaboration'
    };
    return statusMap[status?.toLowerCase()] || status || 'Active';
  };

  // Simple gradient colors for fallback images
  const getGradientColor = (index = 0) => {
    const gradients = [
      '#667eea',
      '#f5576c',
      '#4facfe',
      '#43e97b',
      '#fa709a',
      '#30cfd0',
    ];
    return gradients[index % gradients.length];
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'AI': return '🤖';
      case 'ROBOTICS': return '⚙️';
      case 'ML': return '🧠';
      case 'IOT': return '📡';
      case 'CV': return '👁️';
      case 'SUSTAINABLE': return '🌱';
      case 'AUTONOMOUS': return '🚗';
      case 'AGRITECH': return '🌾';
      default: return '🔬';
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F14]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0A0F14] text-white py-24">
        <div className="absolute inset-0">
          {/* Subtle background pattern matching Home page */}
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
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-white">
                  Pushing
                </span>
                <br />
                <motion.span 
                  className="text-white"
                  animate={{
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
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
                    className="group bg-white text-[#0A0F14] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-3"
                  >
                    <span>Partner on Research</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="#projects" 
                    className="group bg-transparent border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/5"
                  >
                    View Projects
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
              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {breakthrough?.title || "Breakthrough Achievement"}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {breakthrough?.description || "Our team recently achieved 95% accuracy in detecting crop diseases using AI and drone imagery, helping farmers reduce losses by 40%."}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div>
                    <span>Latest breakthrough: {breakthrough?.date || "March 2024"}</span>
                  </div>
                  <div>
                    <span>{breakthrough?.award || "Industry Award Winner"}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#0A0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Active <span className="text-white">Research Projects</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {isLoading ? 'Loading research projects...' : 
               researchProjects.length > 0 ? 
                 `Cutting-edge research initiatives driving innovation in AI and robotics` : 
                 'No research projects available yet. Check back soon!'}
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 animate-pulse">
                  <div className="h-8 bg-white/10 rounded mb-4"></div>
                  <div className="h-4 bg-white/10 rounded mb-6"></div>
                  <div className="h-2 bg-white/10 rounded mb-8"></div>
                  <div className="flex gap-2 mb-8">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-6 w-20 bg-white/10 rounded"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : researchProjects.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 gap-8">
                {researchProjects.map((project, index) => (
                  <motion.div
                    key={project.id || index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -8 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-white/5 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                    
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                      {/* Status Badge */}
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status || project.projectStatus)}`}>
                            {getStatusLabel(project.status || project.projectStatus)}
                          </span>
                          <span className="text-sm text-gray-500">
                            {getCategoryIcon(project.category || project.researchArea)} {project.category || project.researchArea}
                          </span>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-3xl font-bold text-white mb-1">{project.progress || 75}%</div>
                          <div className="text-xs text-gray-500">Progress</div>
                        </div>
                      </div>
                      
                      {/* Title & Description */}
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 mb-8 leading-relaxed">
                        {project.description || project.summary || project.excerpt || 'No description available.'}
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="mb-8">
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full rounded-full bg-gradient-to-r from-white/40 to-white/60"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${project.progress || 75}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      </div>
                      
                      {/* Technologies */}
                      <div className="mb-8">
                        <div className="text-sm font-semibold text-gray-400 mb-3">Technologies</div>
                        
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(project.technologies) && project.technologies.length > 0 ? (
                            project.technologies.slice(0, 4).map((tech, idx) => (
                              <span 
                                key={idx}
                                className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-sm border border-white/10"
                              >
                                {tech}
                              </span>
                            ))
                          ) : typeof project.technologies === 'string' && project.technologies.trim() !== '' ? (
                            <span className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-sm border border-white/10">
                              {project.technologies}
                            </span>
                          ) : (
                            <span className="text-gray-500 text-sm">Technologies not specified</span>
                          )}
                        </div>
                      </div>
                      
                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                        <div>
                          <div className="text-sm text-gray-500 mb-2">Timeline</div>
                          <div className="text-gray-300 font-medium">{project.timeline || 'Ongoing'}</div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-500 mb-2">Team</div>
                          <div className="text-gray-300 font-medium">
                            {project.teamSize ? `${project.teamSize} researchers` : project.team || 'Research Team'}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-500 mb-2">Publications</div>
                          <div className="text-gray-300 font-medium">{project.publications || '0'} papers</div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-500 mb-2">Lead</div>
                          <div className="text-gray-300 font-medium">
                            {project.leadResearcher || project.author || 'Research Team'}
                          </div>
                        </div>
                      </div>
                      
                      {/* View Project Link */}
                      <div className="mt-6">
                        <Link 
                          to={`/projects/${project.id || index}`}
                          className="group/link inline-flex items-center text-gray-400 hover:text-white font-semibold text-sm"
                        >
                          <span>View Project Details</span>
                          <ArrowRight className="h-4 w-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* View All Projects */}
              {researchProjects.length > 2 && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-16 text-center"
                >
                  <Link 
                    to="/research/all"
                    className="group inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                  >
                    <span>View All Research Projects ({researchProjects.length})</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-500 text-lg mb-8">No research projects available yet.</div>
              <p className="text-gray-400 mb-8">Check back soon for our latest research initiatives.</p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Contact us for research collaboration
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Research;