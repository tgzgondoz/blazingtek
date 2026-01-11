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
  ChevronRight as ChevronRightIcon,
  AlertCircle
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
  const [newsContent, setNewsContent] = useState({
    articles: [],
    featuredArticle: null,
    upcomingEvents: [],
    isLoading: true
  });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  
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
  
  // Load news content from localStorage
  useEffect(() => {
    const loadNewsContent = () => {
      const savedContent = JSON.parse(localStorage.getItem('blazingtek-news')) || [];
      
      // Separate featured article (first article is featured by default, or look for featured flag)
      const featured = savedContent.length > 0 ? savedContent[0] : getDefaultFeaturedArticle();
      const articles = savedContent.length > 0 ? savedContent : getDefaultArticles();
      const events = getDefaultUpcomingEvents(); // Events are separate in news page
      
      setNewsContent({
        articles,
        featuredArticle: featured,
        upcomingEvents: events,
        isLoading: false
      });
      
      // Load saved articles from localStorage
      const saved = JSON.parse(localStorage.getItem('blazingtek-saved-articles')) || [];
      setSavedArticles(saved);
    };

    loadNewsContent();
    
    // Listen for content updates
    const handleStorageChange = () => {
      loadNewsContent();
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const newsCategories = [
    { id: 'all', name: 'All', count: 0 },
    { id: 'research', name: 'Research', count: 0 },
    { id: 'events', name: 'Events', count: 0 },
    { id: 'partnerships', name: 'Partnerships', count: 0 },
    { id: 'awards', name: 'Awards', count: 0 },
  ];

  // Calculate category counts
  useEffect(() => {
    if (newsContent.articles.length > 0) {
      const categories = [...newsCategories];
      categories[0].count = newsContent.articles.length;
      categories[1].count = newsContent.articles.filter(a => a.category === 'research').length;
      categories[2].count = newsContent.articles.filter(a => a.category === 'events').length;
      categories[3].count = newsContent.articles.filter(a => a.category === 'partnerships').length;
      categories[4].count = newsContent.articles.filter(a => a.category === 'awards').length;
    }
  }, [newsContent.articles]);

  // Default content
  const getDefaultFeaturedArticle = () => ({
    id: 'featured',
    title: "AI-Powered Farming Robot Increases Crop Yields by 40% in Pilot Study",
    excerpt: "Our latest research shows promising results in sustainable agriculture using autonomous robots equipped with computer vision and machine learning algorithms.",
    category: "Research",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Dr. Amina Diallo",
    authorRole: "Lead AI Researcher",
    views: "2.4K",
    likes: 156,
    type: "article"
  });

  const getDefaultArticles = () => [
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

  const getDefaultUpcomingEvents = () => [
    {
      id: 1,
      title: "Africa Tech Summit 2024",
      date: "April 15-17, 2024",
      location: "Kigali, Rwanda",
      type: "Conference",
      speaker: "Kwame Osei",
    },
    {
      id: 2,
      title: "Women in AI Africa Conference",
      date: "May 8, 2024",
      location: "Virtual",
      type: "Webinar",
      speaker: "Dr. Amina Diallo",
    },
    {
      id: 3,
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
    let newSavedArticles;
    if (savedArticles.includes(articleId)) {
      newSavedArticles = savedArticles.filter(id => id !== articleId);
    } else {
      newSavedArticles = [...savedArticles, articleId];
    }
    setSavedArticles(newSavedArticles);
    localStorage.setItem('blazingtek-saved-articles', JSON.stringify(newSavedArticles));
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      // Save to localStorage (in production, send to backend)
      const subscriptions = JSON.parse(localStorage.getItem('blazingtek-newsletter-subscriptions')) || [];
      subscriptions.push({
        email: newsletterEmail,
        date: new Date().toISOString(),
        source: 'news-page'
      });
      localStorage.setItem('blazingtek-newsletter-subscriptions', JSON.stringify(subscriptions));
      
      alert('Thank you for subscribing to our newsletter!');
      setNewsletterEmail('');
    }
  };

  // Filter articles by selected category
  const filteredArticles = selectedCategory === 'all' 
    ? newsContent.articles
    : newsContent.articles.filter(article => article.category === selectedCategory);

  const handleLoadMore = () => {
    // In a real app, this would load more articles from an API
    alert('Load more functionality would connect to your backend API');
  };

  const handleRegisterEvent = (eventId) => {
    alert(`Registering for event ${eventId}. In production, this would open a registration form.`);
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
              
              <button 
                onClick={() => document.getElementById('newsletter-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-[#0A0F14] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center gap-2"
              >
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
                  {newsContent.featuredArticle?.imageUrl ? (
                    <img 
                      src={newsContent.featuredArticle.imageUrl} 
                      alt={newsContent.featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center">
                      <Newspaper className="h-12 w-12 text-white/40" />
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-white/10 px-2 py-1 rounded text-white text-sm font-medium">
                    {newsContent.featuredArticle?.category || "Research"}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{newsContent.featuredArticle?.readTime || "5 min read"}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{newsContent.featuredArticle?.views || "2.4K"}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        <span>{newsContent.featuredArticle?.likes || "156"}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white">
                    {newsContent.featuredArticle?.title || "AI-Powered Farming Robot Increases Crop Yields by 40% in Pilot Study"}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {newsContent.featuredArticle?.excerpt || "Our latest research shows promising results in sustainable agriculture using autonomous robots equipped with computer vision and machine learning algorithms."}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <div className="text-sm text-white font-medium">
                          {newsContent.featuredArticle?.author || "Dr. Amina Diallo"}
                        </div>
                        <div className="text-xs text-gray-400">
                          {newsContent.featuredArticle?.authorRole || "Lead AI Researcher"}
                        </div>
                      </div>
                    </div>
                    <Link 
                      to={`/news/${newsContent.featuredArticle?.id || 'featured'}`}
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
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 border ${
                  selectedCategory === category.id
                    ? 'bg-white text-[#0A0F14] border-white'
                    : 'bg-white/5 text-gray-300 hover:text-white border-white/10'
                }`}
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
              {filteredArticles.length === 0 ? (
                <div className="text-center py-12">
                  <Newspaper className="h-12 w-12 text-white/20 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No Articles Found</h3>
                  <p className="text-gray-400">
                    {selectedCategory === 'all' 
                      ? 'No news articles have been added yet.' 
                      : `No articles in the ${selectedCategory} category.`}
                  </p>
                  <Link 
                    to="/admin/upload"
                    className="inline-flex items-center gap-2 mt-4 text-amber-400 hover:text-amber-300"
                  >
                    <span>Add articles in Admin Panel</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredArticles.map((article, index) => (
                      <article
                        key={article.id || index}
                        className="group"
                      >
                        <div className="bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                {getTypeIcon(article.type || 'article')}
                                <span className="text-sm text-gray-400 capitalize">
                                  {article.type || 'article'}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Clock className="h-3 w-3" />
                                {article.readTime || "5 min read"}
                              </div>
                            </div>
                            
                            <span className="inline-block px-3 py-1 rounded text-xs font-medium bg-white/5 text-white border border-white/10 mb-3 capitalize">
                              {article.category || "Research"}
                            </span>
                            
                            <h3 className="text-base font-semibold text-white mb-3">
                              {article.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                              {article.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                                  <span className="text-xs font-bold">
                                    {article.author ? article.author.split(' ')[0][0] : 'A'}
                                  </span>
                                </div>
                                <div>
                                  <div className="text-sm text-white">{article.author || "Anonymous"}</div>
                                  <div className="text-xs text-gray-400">{article.date || "Recent"}</div>
                                </div>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-gray-400">
                                <Eye className="h-3 w-3" />
                                {article.views || "1.2K"}
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                              <div className="flex items-center space-x-2">
                                <button 
                                  onClick={() => toggleSaveArticle(article.id || index)}
                                  className={`p-1.5 rounded transition-colors ${
                                    savedArticles.includes(article.id || index)
                                      ? 'text-white bg-white/5'
                                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                                  }`}
                                >
                                  <Bookmark className="h-4 w-4" />
                                </button>
                                <button 
                                  onClick={() => alert('Comment functionality would be implemented with a backend')}
                                  className="p-1.5 rounded text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                >
                                  <MessageCircle className="h-4 w-4" />
                                </button>
                              </div>
                              <Link 
                                to={`/news/${article.id || index}`}
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
                    <button 
                      onClick={handleLoadMore}
                      className="bg-white text-[#0A0F14] hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-300 flex items-center gap-2 mx-auto"
                    >
                      <span>Load More Articles</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              )}
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
                    {newsContent.upcomingEvents.map((event, index) => (
                      <div
                        key={event.id || index}
                        className="p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors bg-white/5"
                      >
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-medium text-white text-sm">{event.title}</h4>
                          <span className="px-2 py-1 rounded text-xs font-medium bg-white text-[#0A0F14] capitalize">
                            {event.type || "Event"}
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
                          {event.speaker && (
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              <span className="font-medium">Speaker: {event.speaker}</span>
                            </div>
                          )}
                        </div>
                        <button 
                          onClick={() => handleRegisterEvent(event.id || index)}
                          className="mt-3 text-white hover:text-gray-200 text-xs font-medium flex items-center gap-1"
                        >
                          <span>Register</span>
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div id="newsletter-form">
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
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white text-white text-sm"
                      required
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

      {/* Admin Content Notice (development only) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-[#0A0F14]/90 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-xs text-gray-400">
          <div className="flex items-center gap-2 mb-1">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>News Content: {newsContent.articles.length > 0 ? 'Admin' : 'Default'}</span>
          </div>
          <div className="text-xs">
            <Link to="/admin/upload" className="text-amber-400 hover:text-amber-300">
              Edit in Admin →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;