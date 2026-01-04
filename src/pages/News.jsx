import { 
  Newspaper, 
  Calendar, 
  User, 
  ExternalLink, 
  TrendingUp,
  Video,
  FileText,
  Bookmark,
  MessageCircle,
  ChevronRight,
  Globe,
  Send,
  Clock,
  ArrowRight,
  Eye,
  Heart,
  ChevronLeft,
  ChevronRight as ChevronRightIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images from src/assets/
import s1 from '../assets/s1.jpg';
import s from '../assets/s.jpg';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';

const News = () => {
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slideshow images array using imported images
  const slideshowImages = [
    s1,
    s,
    slide1,
    slide2,
    slide3,
    slide4
  ];
  
  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slideshowImages.length]);
  
  // Navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const newsCategories = [
    { id: 'research', name: 'Research', count: 12 },
    { id: 'events', name: 'Events', count: 8 },
    { id: 'partnerships', name: 'Partnerships', count: 5 },
    { id: 'awards', name: 'Awards', count: 3 },
  ];

  const featuredArticle = {
    title: "AI-Powered Farming Robot Increases Crop Yields by 40% in Pilot Study",
    excerpt: "Our latest research shows promising results in sustainable agriculture using autonomous robots equipped with computer vision and machine learning algorithms.",
    category: "Research",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Dr. Amina Diallo",
    authorRole: "Lead AI Researcher",
    views: "2.4K",
    likes: 156,
  };

  const newsArticles = [
    {
      id: 1,
      title: "BlazingTek Wins Google AI Impact Challenge Grant",
      excerpt: "Selected among 1000+ applicants for our work on assistive technology for people with disabilities.",
      category: "Awards",
      date: "March 10, 2024",
      type: "article",
      readTime: "3 min read",
      author: "Fatima Bello",
      views: "1.8K",
    },
    {
      id: 2,
      title: "New Partnership with University of Nairobi",
      excerpt: "Launching joint research program focused on sustainable energy solutions for robotics.",
      category: "Partnerships",
      date: "March 5, 2024",
      type: "video",
      readTime: "8 min watch",
      author: "Kwame Osei",
      views: "3.2K",
    },
    {
      id: 3,
      title: "Robotics Workshop Trains 500+ Students Across Ghana",
      excerpt: "STEM outreach program expands to reach more young innovators in rural communities.",
      category: "Events",
      date: "February 20, 2024",
      type: "article",
      readTime: "4 min read",
      author: "Maria Rodriguez",
      views: "1.2K",
    },
    {
      id: 4,
      title: "New Patent Filed for Solar-Powered Navigation System",
      excerpt: "Innovative technology enables autonomous robots to operate 24/7 using renewable energy.",
      category: "Research",
      date: "February 15, 2024",
      type: "article",
      readTime: "6 min read",
      author: "Dr. Samuel Adeyemi",
      views: "2.9K",
    },
    {
      id: 5,
      title: "Featured at UN Technology Innovation Labs",
      excerpt: "Showcasing our work on AI for social good at United Nations headquarters.",
      category: "Events",
      date: "February 10, 2024",
      type: "video",
      readTime: "12 min watch",
      author: "Dr. Amina Diallo",
      views: "4.3K",
    }
  ];

  const upcomingEvents = [
    {
      title: "Africa Tech Summit 2024",
      date: "April 15-17, 2024",
      location: "Kigali, Rwanda",
      type: "Conference",
      speaker: "Kwame Osei",
    },
    {
      title: "Women in AI Africa Conference",
      date: "May 8, 2024",
      location: "Virtual",
      type: "Webinar",
      speaker: "Dr. Amina Diallo",
    },
    {
      title: "IEEE Robotics Symposium",
      date: "June 20-22, 2024",
      location: "Cape Town, South Africa",
      type: "Symposium",
      speaker: "Dr. Samuel Adeyemi",
    }
  ];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'video': return <Video className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const toggleSaveArticle = (articleId) => {
    if (savedArticles.includes(articleId)) {
      setSavedArticles(savedArticles.filter(id => id !== articleId));
    } else {
      setSavedArticles([...savedArticles, articleId]);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0F14]">
      {/* Hero Section with Slideshow - Glass Effect */}
      <section className="relative text-white py-20 md:py-24 overflow-hidden">
        {/* Background with visible slideshow */}
        <div className="absolute inset-0">
          {/* Slideshow Background */}
          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${slideshowImages[currentSlide]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </AnimatePresence>
            
            {/* Subtle overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F14]/50 via-[#0A0F14]/70 to-[#0A0F14]"></div>
          </div>
        </div>
        
        {/* Slideshow Navigation */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {slideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-8 bg-gradient-to-r from-[#00D4AA] to-[#0066CC]' 
                  : 'w-2 backdrop-blur-sm bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-white drop-shadow-lg">News &</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#0066CC] font-bold drop-shadow-lg">
                  Insights
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl drop-shadow-lg"
              >
                Stay updated with our latest research breakthroughs, events, 
                and thought leadership in emerging technologies.
              </motion.p>
              
              <div className="flex flex-wrap gap-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#0066CC] to-[#00D4AA] text-white px-8 py-4 rounded-lg font-semibold overflow-hidden">
                    <span className="relative z-10">Subscribe to Newsletter</span>
                    <Send className="h-5 w-5 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </button>
                </motion.div>
              </div>
            </div>
            
            {/* Featured Article Card - Glass Effect */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
                {/* Featured badge */}
                <div className="absolute top-4 right-4 backdrop-blur-sm bg-gradient-to-r from-[#00D4AA] to-[#0066CC] text-white px-4 py-2 rounded-lg font-bold text-sm">
                  Featured Story
                </div>
                
                {/* Article image */}
                <div className="h-48 backdrop-blur-sm bg-white/5 rounded-2xl mb-6 relative overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4 backdrop-blur-sm bg-white/10 px-3 py-1 rounded-lg">
                    <span className="text-white text-sm font-medium">{featuredArticle.category}</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{featuredArticle.readTime}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{featuredArticle.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-[#00D4AA]" />
                        <span className="text-sm text-gray-400">{featuredArticle.likes}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white line-clamp-2">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed line-clamp-2">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <div className="text-sm text-white font-medium">{featuredArticle.author}</div>
                        <div className="text-xs text-gray-400">{featuredArticle.authorRole}</div>
                      </div>
                    </div>
                    <Link 
                      to="/news/featured" 
                      className="text-[#00D4AA] hover:text-white font-semibold inline-flex items-center gap-2 group"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Categories - Glass Effect */}
      <section className="py-12 bg-[#0A0F14] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {newsCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-sm bg-white/5 text-gray-300 hover:text-white border border-white/10 hover:border-[#00D4AA]/30"
              >
                {category.name}
                <span className="px-2 py-1 rounded-full text-sm backdrop-blur-sm bg-white/5 text-[#00D4AA]">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News Grid - Glass Effect */}
      <section className="py-16 md:py-20 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 212, 170, 0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main News Column */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {newsArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="group"
                  >
                    {/* Glass Effect Card */}
                    <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-xl hover:shadow-[0_20px_40px_rgba(0,212,170,0.15)] transition-all duration-300 overflow-hidden">
                      {/* Hover glow */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00D4AA]/0 via-[#00D4AA]/5 to-[#00D4AA]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="p-6 relative z-10">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            {getTypeIcon(article.type)}
                            <span className="text-sm text-gray-400 font-medium">{article.type}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </div>
                        </div>
                        
                        <span className="inline-block px-4 py-1.5 rounded-lg text-xs font-semibold backdrop-blur-sm bg-white/5 text-[#00D4AA] border border-white/10 mb-4">
                          {article.category}
                        </span>
                        
                        <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-[#00D4AA] transition-colors">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full backdrop-blur-sm bg-white/5 border border-white/10"></div>
                            <div>
                              <div className="text-sm font-medium text-white">{article.author}</div>
                              <div className="text-xs text-gray-400">{article.date}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Eye className="h-4 w-4" />
                            {article.views}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-6 border-t border-white/10">
                          <div className="flex items-center space-x-3">
                            <button 
                              onClick={() => toggleSaveArticle(article.id)}
                              className={`p-2 rounded-lg transition-all duration-300 ${
                                savedArticles.includes(article.id)
                                  ? 'text-[#00D4AA] backdrop-blur-sm bg-white/5'
                                  : 'text-gray-400 hover:text-[#00D4AA] hover:backdrop-blur-sm hover:bg-white/5'
                              }`}
                            >
                              <Bookmark className="h-5 w-5" />
                            </button>
                            <button className="p-2 rounded-lg text-gray-400 hover:text-[#00D4AA] hover:backdrop-blur-sm hover:bg-white/5 transition-all duration-300">
                              <MessageCircle className="h-5 w-5" />
                            </button>
                          </div>
                          <Link 
                            to={`/news/${article.id}`}
                            className="text-[#00D4AA] hover:text-white font-semibold text-sm flex items-center gap-2 group/link"
                          >
                            <span>Read More</span>
                            <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
              
              {/* Load More */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#0066CC] to-[#00D4AA] hover:opacity-90 text-white px-10 py-4 rounded-lg font-semibold overflow-hidden"
                >
                  <span className="relative z-10">Load More Articles</span>
                  <ChevronRight className="h-5 w-5 relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </motion.button>
              </motion.div>
            </div>

            {/* Sidebar - Glass Effect */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
                      <Calendar className="h-6 w-6 text-[#00D4AA]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Upcoming Events</h3>
                      <p className="text-gray-300">Join our next gatherings</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {upcomingEvents.map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="relative p-5 rounded-xl border border-white/10 hover:border-[#00D4AA]/30 transition-all duration-300 backdrop-blur-sm bg-white/5">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="font-bold text-white group-hover:text-[#00D4AA] transition-colors">{event.title}</h4>
                            <span className="px-3 py-1 rounded-lg text-xs font-semibold backdrop-blur-sm bg-gradient-to-r from-[#0066CC] to-[#00D4AA] text-white">
                              {event.type}
                            </span>
                          </div>
                          <div className="space-y-3 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-gray-400" />
                              <span className="font-medium">{event.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Globe className="h-4 w-4 text-gray-400" />
                              <span className="font-medium">{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4 text-gray-400" />
                              <span className="font-medium">Speaker: {event.speaker}</span>
                            </div>
                          </div>
                          <button className="mt-4 group flex items-center text-[#00D4AA] hover:text-white font-semibold text-sm">
                            <span>Register Now</span>
                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
                      <TrendingUp className="h-6 w-6 text-[#00D4AA]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Stay Updated</h3>
                      <p className="text-gray-300">Get our weekly digest</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Get our weekly research digest and exclusive content delivered to your inbox.
                  </p>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3.5 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl focus:border-[#00D4AA] transition-all duration-300 text-white"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0066CC] to-[#00D4AA] hover:opacity-90 text-white py-4 rounded-xl font-semibold overflow-hidden"
                    >
                      <span className="relative z-10">Subscribe Now</span>
                      <Send className="h-5 w-5 relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </motion.button>
                  </form>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;