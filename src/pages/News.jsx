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
  
  const slideshowImages = [
    s1,
    s,
    slide1,
    slide2,
    slide3,
    slide4
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slideshowImages.length]);
  
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
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${slideshowImages[currentSlide]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-[#0A0F14]/80"></div>
          </div>
        </div>
        
        {/* Slideshow Navigation */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
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
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-6 bg-white' 
                  : 'w-1.5 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                News & Insights
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-gray-300 mb-10 max-w-2xl leading-relaxed"
              >
                Stay updated with our latest research breakthroughs, events, 
                and thought leadership in emerging technologies.
              </motion.p>
              
              <button className="bg-white text-[#0A0F14] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2">
                <span>Subscribe to Newsletter</span>
                <Send className="h-4 w-4" />
              </button>
            </div>
            
            {/* Featured Article Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                {/* Featured badge */}
                <div className="absolute top-4 right-4 bg-white text-[#0A0F14] px-3 py-1 rounded font-medium text-sm">
                  Featured Story
                </div>
                
                <div className="h-40 bg-white/5 rounded-lg mb-6 relative overflow-hidden">
                  <div className="absolute top-3 left-3 bg-white/10 px-2 py-1 rounded text-white text-sm font-medium">
                    {featuredArticle.category}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{featuredArticle.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{featuredArticle.likes}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
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
                      className="text-white hover:text-gray-200 text-sm font-medium flex items-center gap-1"
                    >
                      <span>Read</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {newsCategories.map((category) => (
              <button
                key={category.id}
                className="px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 bg-white/5 text-gray-300 hover:text-white border border-white/10"
              >
                {category.name}
                <span className="px-2 py-0.5 rounded text-xs bg-white/5 text-white">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main News Column */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {newsArticles.map((article, index) => (
                  <article
                    key={article.id}
                    className="group"
                  >
                    <div className="bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            {getTypeIcon(article.type)}
                            <span className="text-sm text-gray-400">{article.type}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Clock className="h-3 w-3" />
                            {article.readTime}
                          </div>
                        </div>
                        
                        <span className="inline-block px-3 py-1 rounded text-xs font-medium bg-white/5 text-white border border-white/10 mb-3">
                          {article.category}
                        </span>
                        
                        <h3 className="text-base font-semibold text-white mb-3">
                          {article.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10"></div>
                            <div>
                              <div className="text-sm text-white">{article.author}</div>
                              <div className="text-xs text-gray-400">{article.date}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-400">
                            <Eye className="h-3 w-3" />
                            {article.views}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => toggleSaveArticle(article.id)}
                              className={`p-1.5 rounded transition-colors ${
                                savedArticles.includes(article.id)
                                  ? 'text-white bg-white/5'
                                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              <Bookmark className="h-4 w-4" />
                            </button>
                            <button className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                              <MessageCircle className="h-4 w-4" />
                            </button>
                          </div>
                          <Link 
                            to={`/news/${article.id}`}
                            className="text-white hover:text-gray-200 text-sm font-medium flex items-center gap-1"
                          >
                            <span>Read</span>
                            <ExternalLink className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Load More */}
              <div className="mt-12 text-center">
                <button className="bg-white text-[#0A0F14] hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-300 flex items-center gap-2 mx-auto">
                  <span>Load More Articles</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded bg-white/5 border border-white/10">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Upcoming Events</h3>
                      <p className="text-gray-400 text-sm">Join our next gatherings</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors bg-white/5"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-medium text-white text-sm">{event.title}</h4>
                          <span className="px-2 py-1 rounded text-xs font-medium bg-white text-[#0A0F14]">
                            {event.type}
                          </span>
                        </div>
                        <div className="space-y-2 text-xs text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span className="font-medium">{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Globe className="h-3 w-3" />
                            <span className="font-medium">{event.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span className="font-medium">Speaker: {event.speaker}</span>
                          </div>
                        </div>
                        <button className="mt-3 text-white hover:text-gray-200 text-xs font-medium flex items-center gap-1">
                          <span>Register</span>
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded bg-white/5 border border-white/10">
                      <TrendingUp className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
                      <p className="text-gray-400 text-sm">Get our weekly digest</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">
                    Get our weekly research digest and exclusive content delivered to your inbox.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white text-white text-sm"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-[#0A0F14] hover:bg-gray-100 font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Subscribe Now</span>
                      <Send className="h-3 w-3" />
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;