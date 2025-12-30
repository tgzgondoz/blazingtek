import { 
  Users, 
  Heart, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Target,
  Zap,
  Brain,
  ArrowRight,
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
      icon: <Users className="h-6 w-6" />,
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
    },
    {
      id: 6,
      title: "Tech Incubator",
      description: "Support for student startups",
      category: "Alumni",
      participants: "50 startups",
      duration: "3 months",
      location: "Cities",
      impact: "$2M+ raised",
      icon: <Target className="h-6 w-6" />,
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
    },
    {
      title: "Women in AI Summit",
      date: "May 15",
      location: "Virtual",
      type: "Conference",
      participants: "500+",
      registration: "Open",
    },
    {
      title: "Tech Caravan",
      date: "June 5-15",
      location: "N. Ghana",
      type: "Outreach",
      participants: "Volunteers",
      registration: "Open",
    }
  ];

  const filteredPrograms = activeTab === 'all' 
    ? communityPrograms 
    : communityPrograms.filter(program => program.category.toLowerCase().includes(activeTab));

  return (
    <div className="min-h-screen bg-[#0A0F14]">
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0A0F14] opacity-90"></div>
          
          {/* Animated data points */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`data-${i}`}
                className="absolute w-0.5 h-0.5 bg-[#00D4AA] rounded-full"
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
                className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="h-3 w-3" />
                <span className="text-xs text-gray-300">Community Impact</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Building Africa's
                <br />
                <span className="text-[#00D4AA]">
                  Next Innovators
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-gray-300 mb-8 max-w-xl"
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
                    className="group relative inline-flex items-center gap-3 bg-[#0066CC] hover:bg-[#0052A3] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    <span>Join Community</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-[#1A232E] rounded-xl p-6 border border-white/5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-[#00D4AA]"></div>
                <span className="text-[#00D4AA] text-sm">Success Story</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">From Student to Innovator</h3>
              <p className="text-gray-400 text-sm mb-4">
                Meet Aisha, who went from our STEM camp to working at Google AI.
              </p>
              <button className="text-[#00D4AA] hover:text-[#00D4AA]/80 text-sm font-medium flex items-center">
                <span>Read Story</span>
                <ArrowRight className="h-3 w-3 ml-1" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-[#0A0F14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-white mb-3">Community Programs</h2>
            <div className="w-16 h-1 bg-[#00D4AA] mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
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
                    ? 'bg-[#0066CC] text-white'
                    : 'bg-[#1A232E] text-gray-300 hover:text-white border border-white/5'
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
                <div className="bg-[#1A232E] rounded-xl border border-white/5 hover:border-[#00D4AA]/30 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div 
                        className="p-3 rounded-lg bg-[#0A0F14] border border-white/5"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-[#00D4AA]">
                          {program.icon}
                        </div>
                      </motion.div>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-[#0A0F14] text-[#00D4AA] border border-white/5">
                        {program.category}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-white mb-2">{program.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{program.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 text-xs text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Users className="h-3 w-3 mr-2 text-gray-500" />
                        <span>{program.participants}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-2 text-gray-500" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-2 text-gray-500" />
                        <span>{program.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Target className="h-3 w-3 mr-2 text-[#00D4AA]" />
                        <span>{program.impact}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-white/5">
                      <button className="text-[#00D4AA] hover:text-[#00D4AA]/80 text-sm font-medium flex items-center">
                        <span>Learn More</span>
                        <ArrowRight className="h-3 w-3 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Sidebar */}
      <section className="py-16 bg-[#0A0F14]">
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
                <div className="p-2 rounded-lg bg-[#00D4AA]">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
                  <p className="text-gray-400 text-sm">Join our next gathering</p>
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
                    <div className="bg-[#1A232E] rounded-xl p-6 border border-white/5 hover:border-[#00D4AA]/30 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#0066CC] text-white">
                              {event.registration}
                            </span>
                            <span className="text-gray-600">•</span>
                            <span className="text-gray-400 text-sm">{event.type}</span>
                          </div>
                          <h3 className="font-bold text-white mb-3">{event.title}</h3>
                          <div className="space-y-2 text-sm text-gray-400">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2 text-gray-500" />
                              <span>{event.participants}</span>
                            </div>
                          </div>
                        </div>
                        <motion.button
                          className="bg-[#0066CC] hover:bg-[#0052A3] text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 whitespace-nowrap"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Send className="h-4 w-4" />
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
                <div className="relative overflow-hidden bg-[#1A232E] rounded-xl p-6 border border-white/5">
                  <Heart className="h-6 w-6 mb-4 text-[#00D4AA]" />
                  <h3 className="font-bold text-xl text-white mb-3">Become a Volunteer</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Join volunteers making a difference across Africa.
                  </p>
                  <motion.button
                    className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white py-3 rounded-lg font-medium transition-colors"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>

              {/* Connect */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="bg-[#1A232E] rounded-xl p-6 border border-white/5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-[#0A0F14] border border-white/5">
                      <MessageSquare className="h-5 w-5 text-[#00D4AA]" />
                    </div>
                    <h3 className="font-bold text-white">Connect</h3>
                  </div>
                  <p className="text-gray-400 text-sm mb-6">
                    Join our community forums and Discord.
                  </p>
                  <div className="space-y-3">
                    <motion.button
                      className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageSquare className="h-4 w-4" />
                      Discord
                    </motion.button>
                    <motion.button
                      className="w-full bg-[#0A0F14] hover:bg-white/5 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 border border-white/5"
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