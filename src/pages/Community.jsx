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
      {/* Hero Section - Glass Effect */}
      <section className="relative text-white py-20 md:py-24 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 212, 170, 0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div 
                className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full backdrop-blur-sm bg-white/5 border border-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="h-3 w-3 text-[#00D4AA]" />
                <span className="text-xs text-gray-300">Community Impact</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-white">Building Africa's</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#0066CC] font-bold">
                  Next Innovators
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-200 mb-8 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Empowering Africa's next generation through education and innovation.
              </motion.p>
              
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to="/contact"
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#0066CC] to-[#00D4AA] text-white px-8 py-4 rounded-lg font-semibold overflow-hidden"
                  >
                    <span className="relative z-10">Join Community</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right Column - Success Story Card */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Glass Effect Card */}
              <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00D4AA]/5 to-[#0066CC]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="h-2 w-2 rounded-full bg-[#00D4AA]"></div>
                    <span className="text-[#00D4AA] text-sm font-medium">Success Story</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">From Student to Innovator</h3>
                  <p className="text-gray-300 mb-6">
                    Meet Aisha, who went from our STEM camp to working at Google AI.
                  </p>
                  <button className="text-[#00D4AA] hover:text-white text-sm font-medium flex items-center gap-2 group">
                    <span>Read Story</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Community Programs</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#00D4AA] to-[#0066CC] mx-auto mb-6 rounded-full shadow-lg"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Initiatives nurturing talent across Africa
            </p>
          </motion.div>

          {/* Tabs - Glass Effect */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {communityTabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2 transition-all ${
                  activeTab === tab.id
                    ? 'backdrop-blur-xl bg-gradient-to-r from-[#0066CC] to-[#00D4AA] text-white shadow-lg'
                    : 'backdrop-blur-sm bg-white/5 text-gray-300 hover:text-white border border-white/10 hover:border-[#00D4AA]/30'
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

          {/* Programs Grid - Glass Effect */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {/* Glass Effect Card */}
                <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,212,170,0.15)] transition-all duration-300 h-full">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00D4AA]/0 via-[#00D4AA]/5 to-[#00D4AA]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="p-6 relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div 
                        className="p-3 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-[#00D4AA]">
                          {program.icon}
                        </div>
                      </motion.div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-white/5 text-[#00D4AA] border border-white/10">
                        {program.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                    <p className="text-gray-300 mb-6">{program.description}</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mb-6">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span>{program.participants}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>{program.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-[#00D4AA]" />
                        <span>{program.impact}</span>
                      </div>
                    </div>
                    
                    {/* Button */}
                    <div className="pt-4 border-t border-white/10">
                      <button className="text-[#00D4AA] hover:text-white text-sm font-medium flex items-center gap-2 group">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Sidebar Section */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Events Column */}
            <div className="lg:col-span-2">
              <motion.div 
                className="flex items-center gap-4 mb-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
                  <Calendar className="h-6 w-6 text-[#00D4AA]" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">Upcoming Events</h2>
                  <p className="text-gray-300">Join our next gathering</p>
                </div>
              </motion.div>
              
              {/* Events List */}
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {/* Glass Effect Card */}
                    <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-[0_20px_40px_rgba(0,212,170,0.15)] transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-white/5 text-white border border-white/10">
                              {event.registration}
                            </span>
                            <span className="text-gray-400 text-sm">{event.type}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-4">{event.title}</h3>
                          <div className="space-y-3 text-gray-300">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-gray-400" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-gray-400" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-gray-400" />
                              <span>{event.participants}</span>
                            </div>
                          </div>
                        </div>
                        <motion.button
                          className="bg-gradient-to-r from-[#0066CC] to-[#00D4AA] hover:opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 whitespace-nowrap"
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

            {/* Sidebar Column */}
            <div className="space-y-8">
              {/* Volunteer Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
                  <Heart className="h-8 w-8 mb-6 text-[#00D4AA]" />
                  <h3 className="text-xl font-bold text-white mb-4">Become a Volunteer</h3>
                  <p className="text-gray-300 mb-8">
                    Join volunteers making a difference across Africa.
                  </p>
                  <motion.button
                    className="w-full bg-gradient-to-r from-[#0066CC] to-[#00D4AA] hover:opacity-90 text-white py-4 rounded-lg font-medium transition-all"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>

              {/* Connect Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
                      <MessageSquare className="h-5 w-5 text-[#00D4AA]" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Connect</h3>
                  </div>
                  <p className="text-gray-300 mb-8">
                    Join our community forums and Discord.
                  </p>
                  <div className="space-y-4">
                    <motion.button
                      className="w-full bg-gradient-to-r from-[#0066CC] to-[#00D4AA] hover:opacity-90 text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-3"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageSquare className="h-4 w-4" />
                      Discord
                    </motion.button>
                    <motion.button
                      className="w-full backdrop-blur-sm bg-white/5 hover:bg-white/10 text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-3 border border-white/10"
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