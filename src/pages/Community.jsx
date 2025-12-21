import { 
  Users, 
  Heart, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Target,
  TrendingUp,
  Video,
  MessageCircle,
  Share2,
  ChevronRight,
  Zap,
  Sparkles,
  BookOpen,
  Coffee,
  Brain,
  Star,
  ArrowRight,
  ExternalLink,
  Send,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Community = () => {
  const [activeTab, setActiveTab] = useState('all');

  const communityTabs = [
    { id: 'all', name: 'All', icon: <Users className="h-4 w-4" /> },
    { id: 'stem', name: 'STEM', icon: <GraduationCap className="h-4 w-4" /> },
    { id: 'outreach', name: 'Outreach', icon: <Heart className="h-4 w-4" /> },
    { id: 'hackathons', name: 'Hackathons', icon: <Zap className="h-4 w-4" /> },
    { id: 'research', name: 'Research', icon: <Brain className="h-4 w-4" /> },
    { id: 'alumni', name: 'Alumni', icon: <Sparkles className="h-4 w-4" /> },
  ];

  const communityPrograms = [
    {
      id: 1,
      title: "STEM Robotics Camps",
      description: "Week-long intensive robotics camps for high school students",
      category: "STEM",
      participants: "2000+",
      duration: "Year-round",
      location: "Multiple",
      impact: "85% pursue STEM",
      icon: <GraduationCap className="h-6 w-6" />,
      gradient: "from-blue-500 to-emerald-500"
    },
    {
      id: 2,
      title: "Rural Tech Outreach",
      description: "Bringing tech education to rural communities",
      category: "Outreach",
      participants: "1500+",
      duration: "Ongoing",
      location: "Remote",
      impact: "30 tech hubs",
      icon: <Heart className="h-6 w-6" />,
      gradient: "from-blue-600 to-emerald-600"
    },
    {
      id: 3,
      title: "AI Hackathons",
      description: "Solving Africa's challenges with AI",
      category: "Hackathons",
      participants: "500+",
      duration: "48 hours",
      location: "Pan-Africa",
      impact: "50+ solutions",
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-blue-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Women in Tech",
      description: "Mentorship for women in technology",
      category: "STEM",
      participants: "800+",
      duration: "6 months",
      location: "Hybrid",
      impact: "300+ careers",
      icon: <Sparkles className="h-6 w-6" />,
      gradient: "from-blue-600 to-emerald-600"
    },
    {
      id: 5,
      title: "Open Source Research",
      description: "Community-driven research projects",
      category: "Research",
      participants: "200+",
      duration: "Continuous",
      location: "Global",
      impact: "15 projects",
      icon: <Brain className="h-6 w-6" />,
      gradient: "from-blue-500 to-emerald-500"
    },
    {
      id: 6,
      title: "Tech Startups",
      description: "Incubator for student startups",
      category: "Alumni",
      participants: "50 startups",
      duration: "3 months",
      location: "Cities",
      impact: "$2M+ raised",
      icon: <TrendingUp className="h-6 w-6" />,
      gradient: "from-blue-600 to-emerald-600"
    }
  ];

  const upcomingEvents = [
    {
      title: "Robotics Competition",
      date: "April 20-22",
      location: "Accra",
      type: "Competition",
      participants: "200",
      registration: "Open",
      gradient: "from-blue-500 to-emerald-500"
    },
    {
      title: "Women in AI Summit",
      date: "May 15",
      location: "Virtual",
      type: "Conference",
      participants: "500+",
      registration: "Open",
      gradient: "from-blue-600 to-emerald-600"
    },
    {
      title: "Tech Caravan",
      date: "June 5-15",
      location: "N. Ghana",
      type: "Outreach",
      participants: "Volunteers",
      registration: "Open",
      gradient: "from-blue-500 to-emerald-500"
    }
  ];

  const filteredPrograms = activeTab === 'all' 
    ? communityPrograms 
    : communityPrograms.filter(program => program.category.toLowerCase().includes(activeTab));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Updated to match home page */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-emerald-900 text-white py-16 md:py-20">
        {/* Background overlay matching home page */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-emerald-900/20"></div>
          
          {/* Animated background */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="h-3 w-3" />
                <span className="text-xs">Community Impact</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Building Africa's
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(34, 211, 238, 0.5)",
                      "0 0 30px rgba(34, 211, 238, 0.8)",
                      "0 0 20px rgba(34, 211, 238, 0.5)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  Next Innovators
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-gray-200 mb-8 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Empowering Africa's next generation through education and innovation.
              </motion.p>
              
              <div className="flex flex-wrap gap-3">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/contact"
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-900/25 hover:shadow-xl hover:shadow-blue-900/40"
                  >
                    <span>Join Community</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button className="group relative inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                    <Video className="h-4 w-4" />
                    <span>Watch Story</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-2 mb-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="h-4 w-4 text-amber-400" />
                </motion.div>
                <span className="text-emerald-400 text-sm">Success Story</span>
              </div>
              <h3 className="text-xl font-bold mb-3">From Student to Innovator</h3>
              <p className="text-gray-300 text-sm mb-4">
                Meet Aisha, who went from our STEM camp to working at Google AI.
              </p>
              <button className="text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text hover:from-blue-500 hover:to-emerald-500 text-sm font-medium flex items-center">
                <span>Read Story</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="h-3 w-3 ml-1" />
                </motion.div>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100">
              <Users className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Community Programs</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Initiatives Nurturing Talent</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Initiatives nurturing talent across Africa
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {communityTabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm inline-flex items-center gap-2 transition-colors ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:from-blue-50 hover:to-emerald-50 hover:text-blue-600 border border-gray-200'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.icon}
                {tab.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <div className="relative group">
                  <motion.div 
                    className={`absolute -inset-0.5 bg-gradient-to-br ${program.gradient} rounded-xl blur opacity-0 group-hover:opacity-70 transition-opacity duration-300`}
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1 }}
                  />
                  <div className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div 
                          className={`p-3 rounded-lg bg-gradient-to-br ${program.gradient}`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="text-white">
                            {program.icon}
                          </div>
                        </motion.div>
                        <span className={`px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${program.gradient} text-white`}>
                          {program.category}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-gray-900 mb-2">{program.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                      
                      <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 mb-4">
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-2 text-gray-400" />
                          <span>{program.participants}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-2 text-gray-400" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-2 text-gray-400" />
                          <span>{program.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Target className="h-3 w-3 mr-2 text-emerald-500" />
                          <span>{program.impact}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <button className="text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text hover:from-blue-600 hover:to-emerald-600 text-sm font-medium flex items-center">
                          <span>Learn More</span>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="h-3 w-3 ml-1" />
                          </motion.div>
                        </button>
                        <div className="flex items-center space-x-2">
                          <button className="text-gray-400 hover:text-blue-600 p-1">
                            <MessageCircle className="h-4 w-4" />
                          </button>
                          <button className="text-gray-400 hover:text-emerald-600 p-1">
                            <Share2 className="h-4 w-4" />
                          </button>
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

      {/* Events & Sidebar */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Events */}
            <div className="lg:col-span-2">
              <motion.div 
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Calendar className="h-5 w-5 text-white" />
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
                  <p className="text-gray-600 text-sm">Join our next gathering</p>
                </div>
              </motion.div>
              
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${event.gradient} text-white`}>
                              {event.registration}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-600 text-sm">{event.type}</span>
                          </div>
                          <h3 className="font-bold text-gray-900 mb-3">{event.title}</h3>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-gray-400" />
                              <span>{event.participants}</span>
                            </div>
                          </div>
                        </div>
                        <motion.button
                          className={`bg-gradient-to-r ${event.gradient} text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 whitespace-nowrap hover:shadow-lg hover:shadow-blue-500/25`}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.div
                            animate={{ y: [0, -2, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <Send className="h-4 w-4" />
                          </motion.div>
                          Register
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Volunteer */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl p-6 text-white">
                  <motion.div 
                    className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <Heart className="h-6 w-6 mb-4 relative z-10" />
                  <h3 className="font-bold text-xl mb-3 relative z-10">Become a Volunteer</h3>
                  <p className="text-blue-100 text-sm mb-6 relative z-10">
                    Join volunteers making a difference across Africa.
                  </p>
                  <motion.button
                    className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 rounded-lg font-medium transition-colors shadow relative z-10 hover:shadow-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>

              {/* Resources */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:border-blue-200 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-50 to-emerald-50">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900">Resources</h3>
                  </div>
                  <div className="space-y-3">
                    {['Open Source', 'Learning', 'Mentorship', 'Scholarships'].map((item, idx) => (
                      <motion.a 
                        key={idx}
                        href="#" 
                        className="flex items-center justify-between text-gray-700 hover:text-blue-600 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mr-3"></div>
                          <span className="text-sm">{item}</span>
                        </div>
                        <ArrowRight className="h-3 w-3 text-gray-400" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Connect */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl p-6 text-white relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10"
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{ backgroundSize: '200% 200%' }}
                  />
                  <div className="flex items-center gap-2 mb-4 relative z-10">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-emerald-500/20">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-xl">Connect</h3>
                  </div>
                  <p className="text-gray-300 text-sm mb-6 relative z-10">
                    Join our community forums and Discord.
                  </p>
                  <div className="space-y-3 relative z-10">
                    <motion.button
                      className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle className="h-4 w-4" />
                      Discord
                    </motion.button>
                    <motion.button
                      className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-white/10"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Users className="h-4 w-4" />
                      Forums
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;