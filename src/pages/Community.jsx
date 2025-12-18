import { 
  Users, 
  Heart, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award,
  Target,
  TrendingUp,
  Globe,
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
  Trophy,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  Send
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Community = () => {
  const [activeTab, setActiveTab] = useState('all');

  const communityTabs = [
    { id: 'all', name: 'All Programs', icon: <Users className="h-5 w-5" /> },
    { id: 'stem', name: 'STEM Education', icon: <GraduationCap className="h-5 w-5" /> },
    { id: 'outreach', name: 'Rural Outreach', icon: <Heart className="h-5 w-5" /> },
    { id: 'hackathons', name: 'Hackathons', icon: <Zap className="h-5 w-5" /> },
    { id: 'research', name: 'Research Groups', icon: <Brain className="h-5 w-5" /> },
    { id: 'alumni', name: 'Alumni Network', icon: <Sparkles className="h-5 w-5" /> },
  ];

  const communityPrograms = [
    {
      id: 1,
      title: "STEM Robotics Camps",
      description: "Week-long intensive robotics camps for high school students across Africa",
      category: "STEM Education",
      participants: "2000+ students",
      duration: "Year-round",
      location: "Multiple countries",
      impact: "85% pursue STEM fields",
      icon: <GraduationCap className="h-10 w-10" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Rural Tech Outreach",
      description: "Bringing technology education to underserved rural communities",
      category: "Rural Outreach",
      participants: "1500+ villagers",
      duration: "Ongoing",
      location: "Remote villages",
      impact: "Established 30 tech hubs",
      icon: <Heart className="h-10 w-10" />,
      gradient: "from-emerald-500 to-green-500"
    },
    {
      id: 3,
      title: "AI for Good Hackathons",
      description: "Annual hackathon solving Africa's challenges with AI and robotics",
      category: "Hackathons",
      participants: "500+ developers",
      duration: "48 hours",
      location: "Pan-African",
      impact: "50+ solutions developed",
      icon: <Zap className="h-10 w-10" />,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      id: 4,
      title: "Women in Tech Initiative",
      description: "Mentorship and training programs for women in technology",
      category: "STEM Education",
      participants: "800+ women",
      duration: "6-month program",
      location: "Virtual & In-person",
      impact: "300+ career placements",
      icon: <Sparkles className="h-10 w-10" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      title: "Open Source Research",
      description: "Community-driven research projects on GitHub",
      category: "Research Groups",
      participants: "200+ contributors",
      duration: "Continuous",
      location: "Global",
      impact: "15 open-source projects",
      icon: <Brain className="h-10 w-10" />,
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      title: "Tech Entrepreneurship",
      description: "Incubator program for student startups",
      category: "Alumni Network",
      participants: "50 startups",
      duration: "3-month accelerator",
      location: "Accra, Nairobi, Lagos",
      impact: "$2M+ raised",
      icon: <TrendingUp className="h-10 w-10" />,
      gradient: "from-rose-500 to-red-500"
    }
  ];

  const successStories = [
    {
      name: "Aisha Mohammed",
      role: "Software Engineer at Google",
      story: "Former STEM camp participant now working on AI research",
      quote: "BlazingTek showed me that technology could change Africa.",
      imageColor: "from-pink-500 via-rose-500 to-red-500",
      delay: 0.1
    },
    {
      name: "David Osei",
      role: "Founder of AgriTech Startup",
      story: "Hackathon winner now running successful agriculture tech company",
      quote: "The community support helped turn my idea into reality.",
      imageColor: "from-emerald-500 via-green-500 to-teal-500",
      delay: 0.2
    },
    {
      name: "Grace Chen",
      role: "PhD Candidate at MIT",
      story: "Women in Tech scholar pursuing robotics research",
      quote: "They believed in me when no one else did.",
      imageColor: "from-blue-500 via-cyan-500 to-sky-500",
      delay: 0.3
    }
  ];

  const upcomingEvents = [
    {
      title: "National Robotics Competition",
      date: "April 20-22, 2024",
      location: "Accra, Ghana",
      type: "Competition",
      participants: "200 students",
      registration: "Open",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Women in AI Summit",
      date: "May 15, 2024",
      location: "Virtual",
      type: "Conference",
      participants: "500+ attendees",
      registration: "Open",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Rural Tech Caravan",
      date: "June 5-15, 2024",
      location: "Northern Ghana",
      type: "Outreach",
      participants: "Volunteers needed",
      registration: "Open",
      gradient: "from-emerald-500 to-green-500"
    }
  ];

  const filteredPrograms = activeTab === 'all' 
    ? communityPrograms 
    : communityPrograms.filter(program => program.category.includes(activeTab));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-white/20 backdrop-blur-sm">
                <Users className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">Community Impact</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  Building Africa's
                </span>
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-cyan-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent"
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
                  Next Innovators
                </motion.span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl"
              >
                Empowering Africa's next generation through education, 
                outreach, and collaborative opportunities in technology and innovation.
              </motion.p>
              
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/contact"
                    className="group bg-gradient-to-r from-emerald-600 to-cyan-500 hover:from-emerald-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 flex items-center gap-3"
                  >
                    <span>Join Our Community</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button className="group bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5 flex items-center gap-3">
                    <Video className="h-5 w-5" />
                    <span>Watch Impact Story</span>
                  </button>
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
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                  Featured Impact
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-5 w-5 text-amber-400" />
                    <span className="text-emerald-400 font-semibold">Success Story</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">From Student to Innovator</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Meet Aisha, who went from our STEM camp to working at Google AI. 
                    Her journey inspires hundreds of students across Africa.
                  </p>
                  <button className="group text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center">
                    <span>Read Full Story</span>
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Community Programs */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
              <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Our Initiatives</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Community Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our initiatives designed to nurture talent and drive technological innovation across Africa
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {communityTabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-medium inline-flex items-center gap-2 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-emerald-600 to-cyan-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm'
                }`}
              >
                {tab.icon}
                {tab.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${program.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${program.gradient} shadow-lg`}>
                      <div className="text-white">
                        {program.icon}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${program.gradient} text-white`}>
                      {program.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-3 text-gray-400" />
                      <span className="font-medium mr-2">Participants:</span>
                      <span>{program.participants}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-3 text-gray-400" />
                      <span className="font-medium mr-2">Duration:</span>
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-3 text-gray-400" />
                      <span className="font-medium mr-2">Location:</span>
                      <span>{program.location}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 mb-6 border border-gray-200">
                    <div className="flex items-center mb-2">
                      <Target className="h-4 w-4 text-emerald-600 mr-2" />
                      <span className="font-semibold text-gray-900">Impact</span>
                    </div>
                    <p className="text-gray-700">{program.impact}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <button className="group flex items-center text-emerald-600 hover:text-emerald-700 font-semibold">
                      <span>Learn More</span>
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                      </button>
                      <button className="text-gray-400 hover:text-emerald-600 p-2 rounded-lg hover:bg-emerald-50 transition-colors">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Trophy className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the innovators whose journeys started with our community programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: story.delay }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${story.imageColor} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <div className={`h-48 bg-gradient-to-r ${story.imageColor} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
                      <div className="ml-4">
                        <h3 className="font-bold text-xl text-gray-900">{story.name}</h3>
                        <p className="text-emerald-600 font-semibold">{story.role}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">{story.story}</p>
                    
                    <div className="border-l-4 border-emerald-500 pl-4 mb-6">
                      <p className="italic text-gray-600 leading-relaxed">"{story.quote}"</p>
                    </div>
                    
                    <button className="group flex items-center text-emerald-600 hover:text-emerald-700 font-semibold">
                      <span>Read Full Interview</span>
                      <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events & Sidebar */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Events Column */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Upcoming Community Events</h2>
                  <p className="text-gray-600 mt-2">Join our next community gathering</p>
                </div>
              </motion.div>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${event.gradient} rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center flex-wrap gap-3 mb-4">
                            <span className={`px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r ${event.gradient} text-white shadow-sm`}>
                              {event.registration}
                            </span>
                            <span className="text-gray-400">•</span>
                            <span className="text-gray-600 font-medium">{event.type}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                          <div className="space-y-3 text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="h-5 w-5 mr-3 text-gray-400" />
                              <span className="font-medium">{event.date}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-5 w-5 mr-3 text-gray-400" />
                              <span className="font-medium">{event.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-5 w-5 mr-3 text-gray-400" />
                              <span className="font-medium">{event.participants}</span>
                            </div>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`bg-gradient-to-r ${event.gradient} hover:shadow-lg text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-2`}
                        >
                          <Send className="h-4 w-4" />
                          Register Now
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-8">
              {/* Volunteer */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-2xl shadow-lg p-8 text-white">
                  <Heart className="h-8 w-8 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Become a Volunteer</h3>
                  <p className="text-emerald-100 mb-8 leading-relaxed">
                    Join our community of volunteers making a difference across Africa.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-emerald-600 hover:bg-gray-100 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                  >
                    Apply to Volunteer
                  </motion.button>
                </div>
              </motion.div>

              {/* Community Resources */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                  <BookOpen className="h-8 w-8 text-emerald-600 mb-6" />
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Community Resources</h3>
                  <div className="space-y-4">
                    {['Open Source Projects', 'Learning Materials', 'Mentorship Program', 'Scholarship Opportunities'].map((item, idx) => (
                      <a 
                        key={idx}
                        href="#" 
                        className="group flex items-center justify-between text-gray-700 hover:text-emerald-600 p-3 rounded-lg hover:bg-emerald-50 transition-all duration-300"
                      >
                        <div className="flex items-center">
                          <ChevronRight className="h-4 w-4 mr-3 text-gray-400 group-hover:text-emerald-500" />
                          <span>{item}</span>
                        </div>
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Connect */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-gradient-to-br from-gray-900 to-blue-950 rounded-2xl shadow-lg p-8 text-white">
                  <Coffee className="h-8 w-8 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Join our community forums, Discord server, and local meetups.
                  </p>
                  <div className="space-y-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Join Discord
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white/10 hover:bg-white/20 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <Users className="h-5 w-5" />
                      Community Forums
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