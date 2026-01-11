import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Community = () => {
  const [activeTab, setActiveTab] = useState('all');

  const featureStories = [
    {
      id: 1,
      title: "The Robotics Revolution",
      description: "How African youth are building the future through technology",
      category: "COVER STORY",
      author: "MA Editorial",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Bridging the Digital Divide",
      description: "Tech education reaches rural communities across Africa",
      category: "COMMUNITY",
      author: "Kwame Osei",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1551828335-9534c7f5bb64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Women in AI",
      description: "African innovators changing the technology landscape",
      category: "FEATURE",
      author: "Nadia Diallo",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
  ];

  const newsBriefs = [
    {
      id: 1,
      title: "AI Hackathon Produces Solutions",
      summary: "500+ developers participated in innovation marathon",
      category: "UPDATE",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Student Startups Secure Funding",
      summary: "Incubator graduates raise significant investments",
      category: "BUSINESS",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Open Source Research Expands",
      summary: "Global collaboration on African innovation challenges",
      category: "RESEARCH",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
  ];

  const upcomingEvents = [
    {
      title: "Innovation Summit 2024",
      date: "April 20-22",
      location: "Accra",
      status: "Registration Open",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Women in Tech Forum",
      date: "May 15",
      location: "Virtual & Nairobi",
      status: "Applications Open",
      image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
  ];

  const columns = [
    {
      id: 1,
      title: "From the Editor",
      author: "Dr. Amina Bello",
      excerpt: "Celebrating innovation happening across Africa through education and community collaboration...",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Innovator Spotlight",
      author: "David Chen",
      excerpt: "Meet Samuel Kofi, whose agricultural drone startup emerged from our Tech Incubator program...",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0F14] text-white">
      {/* Enhanced Header with Professional Branding */}
      <header className="relative py-8 md:py-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center">
            {/* MA COMMUNITY Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">MA</span>
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">MA COMMUNITY</h1>
                  <p className="text-gray-400 mt-1">The Voice of African Innovation</p>
                </div>
              </div>
            </motion.div>
            
            {/* Publication Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10"
            >
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-sm font-medium">Issue 03 • March 2024</span>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Cover Story with Professional Image */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Cover with Professional Image */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="African innovators collaborating on technology"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Cover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                      COVER STORY
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    The Next Generation of African Innovators
                  </h2>
                  <p className="text-gray-300 text-lg">
                    How technology and education are shaping Africa's future
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Featured Stories */}
            <div className="space-y-8">
              {featureStories.slice(0, 2).map((story, index) => (
                <motion.article
                  key={story.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group pb-8 border-b border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    {/* Story Image */}
                    <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                      <img 
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Story Content */}
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-white mb-2">{story.category}</div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors cursor-pointer">
                        {story.title}
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm">{story.description}</p>
                      <div className="text-xs text-gray-500">
                        By {story.author} • {story.readTime}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Updates with Images */}
      <section className="py-12 border-t border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
          >
            <span className="text-white">
              LATEST UPDATES
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {newsBriefs.map((brief, index) => (
              <motion.div
                key={brief.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  {/* News Image */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={brief.image}
                      alt={brief.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* News Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-2 w-2 rounded-full bg-white"></div>
                      <span className="text-sm font-semibold text-white">{brief.category}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 group-hover:text-white transition-colors">
                      {brief.title}
                    </h3>
                    <p className="text-sm text-gray-400">{brief.summary}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Stories with Professional Layout */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
          >
            FEATURE STORIES
          </motion.h2>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-8">
            {['All Stories', 'STEM', 'Community', 'Research'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab.toLowerCase() 
                    ? 'bg-white text-[#0A0F14] shadow-lg shadow-white/25' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Stories */}
          <div className="space-y-8">
            {featureStories.map((story) => (
              <motion.article
                key={story.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-white/10 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image Column */}
                  <div className="lg:w-2/5">
                    <div className="h-64 lg:h-full overflow-hidden">
                      <img 
                        src={story.image}
                        alt={story.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="lg:w-3/5 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold">
                        {story.category}
                      </span>
                      <span className="text-xs text-gray-500">• {story.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                      {story.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {story.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
                          <span className="text-sm font-bold">{story.author.split(' ')[0][0]}</span>
                        </div>
                        <div>
                          <p className="font-medium text-sm">{story.author}</p>
                          <p className="text-xs text-gray-500">Contributor</p>
                        </div>
                      </div>
                      
                      <button className="text-sm font-medium hover:text-white transition-colors flex items-center gap-2">
                        Read Full Story
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Columns & Events with Professional Images */}
      <section className="py-12 border-t border-white/10 bg-gradient-to-b from-[#0A0F14] to-black/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Columns */}
            <div className="lg:col-span-2">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-6"
              >
                <span className="text-white">
                  COLUMNS & OPINION
                </span>
              </motion.h2>
              
              <div className="space-y-6">
                {columns.map((column) => (
                  <motion.article
                    key={column.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start gap-6 p-6">
                      {/* Columnist Image */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                          <img 
                            src={column.image}
                            alt={column.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Column Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-lg font-bold group-hover:text-white transition-colors">
                            {column.title}
                          </h3>
                          <div className="h-px flex-1 bg-white/10"></div>
                        </div>
                        
                        <div className="text-sm text-white mb-4">By {column.author}</div>
                        
                        <p className="text-gray-400 mb-4">
                          {column.excerpt}
                        </p>
                        
                        <button className="text-sm font-medium hover:text-white transition-colors flex items-center gap-1">
                          Read full column
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Events Sidebar */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-6"
              >
                UPCOMING EVENTS
              </motion.h2>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    {/* Event Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    </div>
                    
                    {/* Event Content */}
                    <div className="relative p-6">
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold">
                          {event.status}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                      
                      <div className="space-y-3 text-sm text-gray-300 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">📅 Date:</span>
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">📍 Location:</span>
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-white text-[#0A0F14] hover:bg-gray-100 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl">
                        Register Now
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Professional Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-to-br from-white/10 via-white/5 to-white/10 rounded-2xl p-6 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-white to-gray-300 mb-4">
                    <span className="text-[#0A0F14] text-lg">✉️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">STAY UPDATED</h3>
                  <p className="text-gray-400 text-sm">
                    Get the latest innovation stories delivered weekly
                  </p>
                </div>
                
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  />
                  <button className="w-full bg-white text-[#0A0F14] hover:bg-gray-100 text-white py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl">
                    Subscribe Now
                  </button>
                </div>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;