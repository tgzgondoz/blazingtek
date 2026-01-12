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
  Clock,
  ArrowRight,
  Eye,
  Heart,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  AlertCircle,
  MapPin,
  Megaphone
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
  const [successMessage, setSuccessMessage] = useState('');
  
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
  
  // Load news content from Firebase Realtime Database
  useEffect(() => {
    const loadNewsContent = async () => {
      try {
        // Your Firebase database URL (replace with your actual URL)
        const databaseURL = 'https://blazingtek-c56e7-default-rtdb.firebaseio.com';
        
        // Fetch news articles from Firebase
        const newsResponse = await fetch(`${databaseURL}/news.json`);
        const newsData = await newsResponse.json();
        
        // Fetch events from Firebase
        const eventsResponse = await fetch(`${databaseURL}/events.json`);
        const eventsData = await eventsResponse.json();
        
        console.log('Loaded from Firebase:', { newsData, eventsData });
        
        // Process news data from Firebase
        const articles = newsData ? Object.keys(newsData).map(key => ({
          id: key,
          ...newsData[key]
        })) : [];
        
        // Determine featured article (first article is featured, or find one with featured flag)
        let featured = articles.length > 0 ? articles[0] : null;
        
        // Process events data from Firebase
        const events = eventsData ? Object.keys(eventsData).map(key => ({
          id: key,
          ...eventsData[key]
        })) : [];
        
        setNewsContent({
          articles,
          featuredArticle: featured,
          upcomingEvents: events,
          isLoading: false
        });
        
        // Load saved articles from localStorage (this can stay in localStorage since it's user-specific)
        const saved = JSON.parse(localStorage.getItem('blazingtek-saved-articles')) || [];
        setSavedArticles(saved);
        
      } catch (error) {
        console.error('Error loading news content from Firebase:', error);
        setNewsContent({
          articles: [],
          featuredArticle: null,
          upcomingEvents: [],
          isLoading: false
        });
      }
    };

    loadNewsContent();
    
    // Poll for updates every 30 seconds
    const intervalId = setInterval(loadNewsContent, 30000);
    
    return () => {
      clearInterval(intervalId);
    };
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

  const getTypeIcon = (type) => {
    switch(type) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'event': return <Calendar className="h-4 w-4" />;
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

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      try {
        const databaseURL = 'https://blazingtek-c56e7-default-rtdb.firebaseio.com';
        
        // Save to Firebase using POST request
        await fetch(`${databaseURL}/newsletter-subscriptions.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: newsletterEmail,
            date: new Date().toISOString(),
            source: 'news-page'
          })
        });
        
        // Show success message
        setSuccessMessage('Thank you for subscribing to our newsletter!');
        setTimeout(() => setSuccessMessage(''), 3000);
        setNewsletterEmail('');
      } catch (error) {
        console.error('Error saving subscription:', error);
        setSuccessMessage('Error subscribing. Please try again.');
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    }
  };

  // Filter articles by selected category
  const filteredArticles = selectedCategory === 'all' 
    ? newsContent.articles
    : newsContent.articles.filter(article => article.category === selectedCategory);

  const handleRegisterEvent = (eventId) => {
    const event = newsContent.upcomingEvents.find(e => e.id === eventId);
    if (event && event.registrationLink) {
      window.open(event.registrationLink, '_blank');
    } else {
      alert(`Registration details for "${event?.title}" coming soon!`);
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Date TBD';
    try {
      // If date is already formatted (contains comma), return as is
      if (dateString.includes(',')) {
        return dateString;
      }
      
      // Try to parse ISO string or other formats
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return dateString;
      }
      
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch {
      return dateString;
    }
  };

  // Format time for display
  const formatTime = (timeString) => {
    if (!timeString) return '';
    try {
      const [hours, minutes] = timeString.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour % 12 || 12;
      return `${displayHour}:${minutes} ${ampm}`;
    } catch {
      return timeString;
    }
  };

  // Get gradient color for placeholder images
  const getGradientColor = (index = 0) => {
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    ];
    return gradients[index % gradients.length];
  };

  // Show loading screen if still loading
  if (newsContent.isLoading) {
    return (
      <div className="min-h-screen bg-[#0A0F14] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-white/20 border-t-white mb-6"></div>
          <h1 className="text-3xl font-bold text-white mb-4">Loading News Content...</h1>
          <p className="text-gray-400">Fetching the latest updates from Firebase</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0F14]">
      {/* Success Message */}
      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 right-4 z-50 bg-green-500/10 border border-green-500/20 rounded-lg p-4 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 text-green-500">
              <AlertCircle className="h-5 w-5" />
              <span className="font-medium">{successMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              </button>
            </div>
            
            {/* Featured Article Card - Only show if we have one */}
            {newsContent.featuredArticle && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 relative">
                  {/* Featured badge */}
                  <div className="absolute top-4 right-4 bg-white text-[#0A0F14] px-3 py-1 rounded font-medium text-sm z-10">
                    Featured Story
                  </div>
                  
                  <div className="h-40 bg-white/5 rounded-lg mb-6 relative overflow-hidden">
                    {newsContent.featuredArticle?.imageUrl ? (
                      <img 
                        src={newsContent.featuredArticle.imageUrl} 
                        alt={newsContent.featuredArticle.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="w-full h-full flex items-center justify-center" style="background: ${getGradientColor(0)}">
                              <div class="text-white/80 text-sm text-center">
                                <Newspaper class="h-12 w-12 mx-auto mb-2" />
                                <p>Featured Story</p>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ background: getGradientColor(0) }}>
                        <div className="text-white/80 text-sm text-center">
                          <Newspaper className="h-12 w-12 mx-auto mb-2" />
                          <p>Featured Story</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 bg-white/10 px-2 py-1 rounded text-white text-sm font-medium">
                      {newsContent.featuredArticle?.category ? 
                        newsContent.featuredArticle.category.charAt(0).toUpperCase() + newsContent.featuredArticle.category.slice(1) 
                        : "Article"
                      }
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
                    
                    <h3 className="text-lg font-semibold text-white line-clamp-2">
                      {newsContent.featuredArticle.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {newsContent.featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-gray-400 mr-2" />
                        <div>
                          <div className="text-sm text-white font-medium">
                            {newsContent.featuredArticle.author || "Anonymous"}
                          </div>
                          <div className="text-xs text-gray-400">
                            {newsContent.featuredArticle.authorRole || "Author"}
                          </div>
                        </div>
                      </div>
                      <Link 
                        to={`/news/${newsContent.featuredArticle.id}`}
                        className="text-white hover:text-gray-200 text-sm font-medium flex items-center gap-1"
                      >
                        <span>Read</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </section>

      {/* Categories - Only show if we have articles */}
      {newsContent.articles.length > 0 && (
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
      )}

      {/* News Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main News Column */}
            <div className="lg:col-span-2">
              {newsContent.articles.length === 0 ? (
                <div className="text-center py-12">
                  <Newspaper className="h-12 w-12 text-white/20 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No Articles Found</h3>
                  <p className="text-gray-400">
                    No news articles have been added yet.
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
                        <div className="bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                          {article.imageUrl ? (
                            <div className="h-48 w-full overflow-hidden rounded-t-xl">
                              <img 
                                src={article.imageUrl} 
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.parentElement.innerHTML = `
                                    <div class="w-full h-full flex items-center justify-center" style="background: ${getGradientColor(index)}">
                                      <div class="text-white/80 text-sm text-center">
                                        <FileText class="h-12 w-12 mx-auto mb-2" />
                                        <p>${article.category || 'Article'}</p>
                                      </div>
                                    </div>
                                  `;
                                }}
                              />
                            </div>
                          ) : (
                            <div className="h-48 w-full overflow-hidden rounded-t-xl flex items-center justify-center" style={{ background: getGradientColor(index) }}>
                              <div className="text-white/80 text-sm text-center">
                                <FileText className="h-12 w-12 mx-auto mb-2" />
                                <p>{article.category || 'Article'}</p>
                              </div>
                            </div>
                          )}
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
                              {article.category ? 
                                article.category.charAt(0).toUpperCase() + article.category.slice(1) 
                                : "Article"
                              }
                            </span>
                            
                            <h3 className="text-base font-semibold text-white mb-3 line-clamp-2">
                              {article.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
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
                                  <div className="text-xs text-gray-400">
                                    {formatDate(article.date) || "Recent"}
                                  </div>
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
                    {newsContent.upcomingEvents.length === 0 ? (
                      <div className="text-center py-4">
                        <Calendar className="h-8 w-8 text-white/20 mx-auto mb-2" />
                        <p className="text-gray-400 text-sm">No upcoming events scheduled</p>
                        <Link 
                          to="/admin/upload"
                          className="inline-flex items-center gap-1 mt-2 text-xs text-amber-400 hover:text-amber-300"
                        >
                          <span>Add events in Admin Panel</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    ) : (
                      newsContent.upcomingEvents.map((event, index) => (
                        <div
                          key={event.id || index}
                          className="p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors bg-white/5"
                        >
                          <div className="flex justify-between items-start mb-3">
                            <h4 className="font-medium text-white text-sm line-clamp-2">{event.title}</h4>
                            <span className="px-2 py-1 rounded text-xs font-medium bg-white text-[#0A0F14] capitalize whitespace-nowrap ml-2">
                              {event.type || "Event"}
                            </span>
                          </div>
                          <div className="space-y-2 text-xs text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span className="font-medium">
                                {formatDate(event.date)}
                                {event.time && ` • ${formatTime(event.time)}`}
                              </span>
                            </div>
                            {event.location && (
                              <div className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                <span className="font-medium">{event.location}</span>
                              </div>
                            )}
                            {event.speaker && (
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                <span className="font-medium">Speaker: {event.speaker}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                            <span className={`text-xs px-2 py-1 rounded ${
                              event.status === 'Registration Open' ? 'bg-green-500/20 text-green-400' :
                              event.status === 'Sold Out' ? 'bg-red-500/20 text-red-400' :
                              event.status === 'Upcoming' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {event.status}
                            </span>
                            <button 
                              onClick={() => handleRegisterEvent(event.id || index)}
                              className="text-white hover:text-gray-200 text-xs font-medium flex items-center gap-1"
                            >
                              <span>Details</span>
                              <ArrowRight className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <Link 
                    to="/admin/upload"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Megaphone className="h-4 w-4" />
                    <span>Add your event to our calendar</span>
                  </Link>
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
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white text-white text-sm placeholder-gray-500"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-[#0A0F14] hover:bg-gray-100 font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Subscribe Now</span>
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 mt-3 text-center">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </div>

              {/* Content Stats */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded bg-white/5 border border-white/10">
                    <Newspaper className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Content Stats</h3>
                    <p className="text-gray-400 text-sm">Latest updates</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-1">
                      {newsContent.articles.length}
                    </div>
                    <div className="text-xs text-gray-400">Articles</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-1">
                      {newsContent.upcomingEvents.length}
                    </div>
                    <div className="text-xs text-gray-400">Events</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-xs text-gray-500">
                    Last updated: {new Date().toLocaleDateString()}
                  </div>
                  <Link 
                    to="/admin/upload"
                    className="inline-block mt-2 text-xs text-amber-400 hover:text-amber-300"
                  >
                    Manage content in Admin Panel
                  </Link>
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