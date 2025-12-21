import { 
  Newspaper, 
  Calendar, 
  User, 
  Tag, 
  ExternalLink, 
  TrendingUp,
  Award,
  Video,
  Podcast,
  FileText,
  Share2,
  Bookmark,
  MessageCircle,
  ChevronRight,
  Globe,
  Target,
  Sparkles,
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
  const [activeCategory, setActiveCategory] = useState('all');
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
    { id: 'all', name: 'All News', count: 28, gradient: 'from-blue-600 to-emerald-600' },
    { id: 'research', name: 'Research Breakthroughs', count: 12, gradient: 'from-blue-500 to-emerald-500' },
    { id: 'events', name: 'Events & Conferences', count: 8, gradient: 'from-blue-600 to-emerald-600' },
    { id: 'partnerships', name: 'Partnerships', count: 5, gradient: 'from-blue-500 to-emerald-500' },
    { id: 'awards', name: 'Awards & Recognition', count: 3, gradient: 'from-blue-600 to-emerald-600' },
    { id: 'thought', name: 'Thought Leadership', count: 7, gradient: 'from-blue-500 to-emerald-500' },
  ];

  const featuredArticle = {
    title: "AI-Powered Farming Robot Increases Crop Yields by 40% in Pilot Study",
    excerpt: "Our latest research shows promising results in sustainable agriculture using autonomous robots equipped with computer vision and machine learning algorithms.",
    category: "Research Breakthrough",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Dr. Amina Diallo",
    authorRole: "Lead AI Researcher",
    views: "2.4K",
    likes: 156,
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800",
    tags: ["AI", "Agriculture", "Robotics", "Sustainability"],
    gradient: "from-blue-600 to-emerald-600"
  };

  const newsArticles = [
    {
      id: 1,
      title: "BlazingTek Wins Google AI Impact Challenge Grant",
      excerpt: "Selected among 1000+ applicants for our work on assistive technology for people with disabilities.",
      category: "Awards & Recognition",
      date: "March 10, 2024",
      type: "article",
      readTime: "3 min read",
      author: "Fatima Bello",
      tags: ["Award", "AI", "Assistive Tech"],
      views: "1.8K",
      gradient: "from-blue-600 to-emerald-600"
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
      tags: ["Partnership", "Research", "Sustainability"],
      views: "3.2K",
      gradient: "from-blue-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Thought Leadership: The Future of African Tech Innovation",
      excerpt: "Our CEO discusses how Africa can lead in emerging technologies and build sovereign capabilities.",
      category: "Thought Leadership",
      date: "February 28, 2024",
      type: "podcast",
      readTime: "45 min listen",
      author: "David Chen",
      tags: ["Innovation", "Future Tech", "Africa"],
      views: "5.1K",
      gradient: "from-blue-600 to-emerald-600"
    },
    {
      id: 4,
      title: "Robotics Workshop Trains 500+ Students Across Ghana",
      excerpt: "STEM outreach program expands to reach more young innovators in rural communities.",
      category: "Events",
      date: "February 20, 2024",
      type: "article",
      readTime: "4 min read",
      author: "Maria Rodriguez",
      tags: ["Education", "STEM", "Workshop"],
      views: "1.2K",
      gradient: "from-blue-500 to-emerald-500"
    },
    {
      id: 5,
      title: "New Patent Filed for Solar-Powered Navigation System",
      excerpt: "Innovative technology enables autonomous robots to operate 24/7 using renewable energy.",
      category: "Research Breakthrough",
      date: "February 15, 2024",
      type: "article",
      readTime: "6 min read",
      author: "Dr. Samuel Adeyemi",
      tags: ["Patent", "Solar", "Navigation"],
      views: "2.9K",
      gradient: "from-blue-600 to-emerald-600"
    },
    {
      id: 6,
      title: "Featured at UN Technology Innovation Labs",
      excerpt: "Showcasing our work on AI for social good at United Nations headquarters.",
      category: "Events",
      date: "February 10, 2024",
      type: "video",
      readTime: "12 min watch",
      author: "Dr. Amina Diallo",
      tags: ["UN", "Innovation", "Social Good"],
      views: "4.3K",
      gradient: "from-blue-500 to-emerald-500"
    }
  ];

  const upcomingEvents = [
    {
      title: "Africa Tech Summit 2024",
      date: "April 15-17, 2024",
      location: "Kigali, Rwanda",
      type: "Conference",
      speaker: "Kwame Osei",
      gradient: "from-blue-600 to-emerald-600"
    },
    {
      title: "Women in AI Africa Conference",
      date: "May 8, 2024",
      location: "Virtual",
      type: "Webinar",
      speaker: "Dr. Amina Diallo",
      gradient: "from-blue-500 to-emerald-500"
    },
    {
      title: "IEEE Robotics Symposium",
      date: "June 20-22, 2024",
      location: "Cape Town, South Africa",
      type: "Symposium",
      speaker: "Dr. Samuel Adeyemi",
      gradient: "from-blue-600 to-emerald-600"
    }
  ];

  const mediaFeatures = [
    { name: "TechCrunch", logo: "TC", date: "Feb 2024", gradient: "from-gray-800 to-gray-900" },
    { name: "BBC Future", logo: "BBC", date: "Jan 2024", gradient: "from-red-600 to-red-800" },
    { name: "Nature", logo: "N", date: "Dec 2023", gradient: "from-blue-600 to-blue-800" },
    { name: "Forbes Africa", logo: "FA", date: "Nov 2023", gradient: "from-emerald-600 to-emerald-800" },
    { name: "MIT Technology Review", logo: "MIT", date: "Oct 2023", gradient: "from-red-500 to-red-700" },
    { name: "African Business", logo: "AB", date: "Sep 2023", gradient: "from-amber-600 to-orange-700" },
  ];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'podcast': return <Podcast className="h-4 w-4" />;
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

  const filteredArticles = activeCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Slideshow - Updated to match home page */}
      <section className="relative overflow-hidden text-white py-16 md:py-20">
        {/* Background with bg.jpg and gradient overlay */}
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
                onError={(e) => {
                  console.error("Error loading slideshow image");
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
            </AnimatePresence>
            
            {/* Updated to match home page gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-emerald-900/20"></div>
            
            {/* Animated particles overlay */}
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

          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}></div>
          </div>
        </div>
        
        {/* Slideshow Navigation */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={prevSlide}
            className="z-10 p-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white/25 transition-all duration-300 group shadow-lg"
          >
            <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="z-10 p-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 hover:bg-white/25 transition-all duration-300 group shadow-lg"
          >
            <ChevronRightIcon className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
          {slideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-8 bg-gradient-to-r from-blue-500 to-emerald-500 shadow-lg' 
                  : 'w-2 bg-white/60 hover:bg-white/80 shadow'
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
              {/* Latest Updates with enhanced animation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/25 to-emerald-500/25 border border-white/30 backdrop-blur-md shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Newspaper className="h-4 w-4 text-blue-300" />
                </motion.div>
                <span className="text-sm font-medium text-blue-200">Latest Updates</span>
                <motion.div 
                  className="w-2 h-2 bg-blue-300 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
              
              {/* News & Insights with enhanced animation */}
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white block drop-shadow-lg"
                  >
                    News &
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative"
                  >
                    <span className="bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent block drop-shadow-lg">
                      Insights
                    </span>
                    <motion.div 
                      className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full shadow-lg"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 1 }}
                    />
                  </motion.span>
                </h1>
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl drop-shadow-md"
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
                  <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-900/25 hover:shadow-xl hover:shadow-blue-900/40">
                    <span>Subscribe to Newsletter</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Send className="h-5 w-5" />
                    </motion.div>
                    {/* Button glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </button>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button className="group relative inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                    <Podcast className="h-5 w-5" />
                    <span>Listen to Podcast</span>
                  </button>
                </motion.div>
              </div>
            </div>
            
            {/* Featured Article Card with enhanced clarity */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl overflow-hidden">
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Featured Story
                </div>
                
                <div className={`h-48 bg-gradient-to-r ${featuredArticle.gradient} rounded-xl mb-6 relative overflow-hidden shadow-lg`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/25 backdrop-blur-sm px-3 py-1 rounded-full shadow">
                    <span className="text-white text-sm font-medium">{featuredArticle.category}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-gray-200" />
                      <span className="text-sm text-gray-200">{featuredArticle.readTime}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4 text-gray-200" />
                        <span className="text-sm text-gray-200">{featuredArticle.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-rose-300" />
                        <span className="text-sm text-gray-200">{featuredArticle.likes}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white line-clamp-2 drop-shadow">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-gray-200 leading-relaxed line-clamp-2 drop-shadow-sm">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-200 mr-2" />
                      <div>
                        <div className="text-sm text-white font-medium">{featuredArticle.author}</div>
                        <div className="text-xs text-gray-300">{featuredArticle.authorRole}</div>
                      </div>
                    </div>
                    <Link 
                      to="/news/featured" 
                      className="group text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text hover:from-blue-500 hover:to-emerald-500 font-semibold inline-flex items-center"
                    >
                      <span>Read Full Story</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {newsCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 shadow-lg ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-xl`
                    : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:from-blue-50 hover:to-emerald-50 hover:text-blue-600 border border-gray-200'
                }`}
              >
                {category.name}
                <span className={`px-2 py-0.5 rounded-full text-sm ${
                  activeCategory === category.id 
                    ? 'bg-white/25' 
                    : 'bg-white/90'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main News Column */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-8">
                {filteredArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${article.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    <div className="relative bg-white rounded-2xl shadow-sm group-hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            {getTypeIcon(article.type)}
                            <span className="text-sm text-gray-600 font-medium">{article.type}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </div>
                        </div>
                        
                        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${article.gradient} text-white mb-4 shadow`}>
                          {article.category}
                        </span>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 shadow"></div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">{article.author}</div>
                              <div className="text-xs text-gray-500">{article.date}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Eye className="h-4 w-4" />
                            {article.views}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {article.tags.map((tag, idx) => (
                            <span 
                              key={idx}
                              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border border-gray-200 shadow-sm hover:shadow transition-all"
                            >
                              <Tag className="h-3 w-3 mr-1.5" />
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                          <div className="flex items-center space-x-3">
                            <button 
                              onClick={() => toggleSaveArticle(article.id)}
                              className={`p-2 rounded-lg transition-all duration-300 ${
                                savedArticles.includes(article.id)
                                  ? 'text-amber-500 bg-gradient-to-r from-amber-50 to-amber-100 shadow-inner'
                                  : 'text-gray-400 hover:text-amber-500 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 shadow-sm'
                              }`}
                            >
                              <Bookmark className="h-5 w-5" />
                            </button>
                            <button className="p-2 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 shadow-sm">
                              <Share2 className="h-5 w-5" />
                            </button>
                            <button className="p-2 rounded-lg text-gray-400 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-emerald-100 transition-all duration-300 shadow-sm">
                              <MessageCircle className="h-5 w-5" />
                            </button>
                          </div>
                          <Link 
                            to={`/news/${article.id}`}
                            className="group text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text hover:from-blue-600 hover:to-emerald-600 font-semibold text-sm flex items-center"
                          >
                            <span>Read More</span>
                            <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
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
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-900/25 hover:shadow-xl hover:shadow-blue-900/40"
                >
                  <span>Load More Articles</span>
                  <ChevronRight className="h-5 w-5" />
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                </motion.button>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 shadow">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Upcoming Events</h3>
                    <p className="text-gray-600 text-sm">Join our next gatherings</p>
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
                      className="group relative"
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${event.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                      <div className="relative p-5 rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300 bg-white shadow-sm hover:shadow-lg">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{event.title}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${event.gradient} text-white shadow`}>
                            {event.type}
                          </span>
                        </div>
                        <div className="space-y-3 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-3 text-gray-400" />
                            <span className="font-medium">{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Globe className="h-4 w-4 mr-3 text-gray-400" />
                            <span className="font-medium">{event.location}</span>
                          </div>
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-3 text-gray-400" />
                            <span className="font-medium">Speaker: {event.speaker}</span>
                          </div>
                        </div>
                        <button className="mt-4 group flex items-center text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text hover:from-blue-600 hover:to-emerald-600 font-semibold text-sm">
                          <span>Register Now</span>
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Media Features */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl shadow-2xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 shadow">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Featured In</h3>
                      <p className="text-gray-300 text-sm">Global media coverage</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {mediaFeatures.map((media, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className={`bg-gradient-to-br ${media.gradient} rounded-xl p-5 text-center hover:shadow-xl transition-all duration-300 cursor-pointer shadow-lg`}
                      >
                        <div className="text-2xl font-bold mb-2 drop-shadow">{media.logo}</div>
                        <div className="text-sm font-medium mb-1">{media.name}</div>
                        <div className="text-xs text-gray-300">{media.date}</div>
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
              >
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 shadow">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Stay Updated</h3>
                      <p className="text-gray-600 text-sm">Get our weekly digest</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Get our weekly research digest and exclusive content delivered to your inbox.
                  </p>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-sm focus:shadow-md"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-900/25 hover:shadow-xl hover:shadow-blue-900/40"
                    >
                      <span>Subscribe Now</span>
                      <Send className="h-5 w-5" />
                      {/* Button glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
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

      {/* Archive Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100">
              <Newspaper className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">News Archive</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Historical News</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our historical news and milestones
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {['2024', '2023', '2022', '2021'].map((year, index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl shadow-sm p-8 text-center border border-gray-100 hover:border-blue-200 transition-all duration-300">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    {year}
                  </div>
                  <div className="text-gray-600 font-medium mb-4">Archive</div>
                  <div className="text-sm text-gray-500 mb-6">
                    {year === '2024' ? '12 articles' : 
                     year === '2023' ? '28 articles' : 
                     year === '2022' ? '19 articles' : '15 articles'}
                  </div>
                  <button className="group inline-flex items-center text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text hover:from-blue-600 hover:to-emerald-600 font-semibold">
                    <span>Browse Year</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;