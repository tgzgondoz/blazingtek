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
  Megaphone,
  Play,
  Pause
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import video files from src/assets/videos/
import vid1 from '../assets/videos/vid1.mp4';
import vid2 from '../assets/videos/vid2.mp4';
import vid3 from '../assets/videos/vid3.mp4';

// Fallback images in case videos don't load
import s1 from '../assets/s1.jpg';
import s from '../assets/s.jpg';
import slide1 from '../assets/slide1.jpg';

const News = () => {
  const [savedArticles, setSavedArticles] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [playingVideo, setPlayingVideo] = useState(null);
  const videoRefs = useRef([]);
  const videoSectionRefs = useRef([]);
  const [videoLoaded, setVideoLoaded] = useState([]);
  const [newsContent, setNewsContent] = useState({
    articles: [],
    featuredArticle: null,
    upcomingEvents: [],
    isLoading: true
  });
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  
  // Video slideshow with professional content
  const slideshowVideos = [
    {
      video: vid1,
      fallback: s1,
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      video: vid2,
      fallback: s,
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      video: vid3,
      fallback: slide1,
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];
  
  // Initialize video loaded state
  useEffect(() => {
    setVideoLoaded(new Array(slideshowVideos.length).fill(false));
  }, []);
  
  // Handle video playback for slideshow - AUTO-PLAY ENABLED
  useEffect(() => {
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo) {
      // Always try to play
      const playVideo = async () => {
        try {
          await currentVideo.play();
          setIsPlaying(true);
        } catch (error) {
          console.log("Autoplay prevented, trying with user interaction requirement:", error);
          // If autoplay fails, we'll rely on user interaction
        }
      };
      playVideo();
    }
  }, [currentSlide]);
  
  // Handle video events for full videos section
  useEffect(() => {
    videoSectionRefs.current.forEach((video, index) => {
      if (video) {
        video.onended = () => {
          setPlayingVideo(null);
        };
        video.onpause = () => {
          if (playingVideo === index) {
            setPlayingVideo(null);
          }
        };
        video.onplay = () => {
          setPlayingVideo(index);
        };
      }
    });
  }, [playingVideo]);
  
  // Auto-play and slideshow interval
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideshowVideos.length);
      }, 8000); // Longer interval for videos
    }
    return () => {
      if (interval) clearInterval(interval);
      // Pause all videos on cleanup
      videoRefs.current.forEach(video => {
        if (video) video.pause();
      });
    };
  }, [isPlaying, slideshowVideos.length]);
  
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
  
  const handleVideoLoad = (index) => {
    const newLoaded = [...videoLoaded];
    newLoaded[index] = true;
    setVideoLoaded(newLoaded);
  };
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    const currentVideo = videoRefs.current[currentSlide];
    if (currentVideo) {
      if (isPlaying) {
        currentVideo.pause();
      } else {
        currentVideo.play();
      }
    }
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowVideos.length);
    setIsPlaying(true);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowVideos.length) % slideshowVideos.length);
    setIsPlaying(true);
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

  const handleRegisterEvent = (eventId) => {
    const event = newsContent.upcomingEvents.find(e => e.id === eventId);
    if (event) {
      const details = [
        `📅 **Event Details**`,
        `Title: ${event.title || 'N/A'}`,
        `Date: ${formatDate(event.date) || 'Date TBD'}`,
        `Time: ${event.time ? formatTime(event.time) : 'Time TBD'}`,
        `Location: ${event.location || 'Location TBD'}`,
        `Type: ${event.type || 'N/A'}`,
        `Status: ${event.status || 'N/A'}`,
        `Speaker/Host: ${event.speaker || 'N/A'}`,
        `Description: ${event.description || 'No description available'}`
      ];
      
      if (event.registrationLink) {
        details.push(`🔗 Registration: ${event.registrationLink}`);
      }
      
      // Create a more detailed alert
      alert(details.join('\n\n'));
      
      // Optional: If there's a registration link, ask if user wants to register
      if (event.registrationLink) {
        const shouldRegister = confirm('Would you like to register for this event?');
        if (shouldRegister) {
          window.open(event.registrationLink, '_blank');
        }
      }
    } else {
      alert('Event not found');
    }
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

      {/* Hero Section with Video Slideshow */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        {/* Video Slideshow Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0"
              >
                {/* Video Element - AUTO-PLAY ENABLED */}
                <video
                  ref={el => videoRefs.current[currentSlide] = el}
                  src={slideshowVideos[currentSlide].video}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                  onLoadedData={() => handleVideoLoad(currentSlide)}
                  onError={(e) => {
                    console.error("Video failed to load:", e);
                    // Fallback to image
                    e.target.style.display = 'none';
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = 'absolute inset-0';
                    fallbackDiv.style.backgroundImage = `url(${slideshowVideos[currentSlide].fallback})`;
                    fallbackDiv.style.backgroundSize = 'cover';
                    fallbackDiv.style.backgroundPosition = 'center';
                    e.target.parentElement.appendChild(fallbackDiv);
                  }}
                />
                
                {/* Loading overlay */}
                {!videoLoaded[currentSlide] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-white mb-4"></div>
                      <p className="text-white/60">Loading video...</p>
                    </div>
                  </div>
                )}
                
                {/* Video overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F14]/90 via-[#0A0F14]/70 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F14]/90 to-transparent"></div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Play/Pause Control */}
        <div className="absolute top-8 right-8 z-30">
          <button
            onClick={togglePlayPause}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
            ) : (
              <Play className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
            )}
          </button>
        </div>
        
        {/* Watch Full Video Link */}
        <div className="absolute top-8 left-8 z-30">
          <a
            href="#videos-section"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            <Video className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
            <span className="text-white font-medium text-sm">Watch Full Videos</span>
          </a>
        </div>
        
        {/* Slideshow Navigation */}
        <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronRightIcon className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
          {slideshowVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsPlaying(true);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        
        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
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
                className="bg-white text-[#0A0F14] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95"
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
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 relative backdrop-blur-sm">
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
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    {filteredArticles.map((article, index) => (
                      <article
                        key={article.id || index}
                        className="group"
                      >
                        <div className="bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full hover:scale-[1.02]">
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
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
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
                      </div>
                    ) : (
                      newsContent.upcomingEvents.map((event, index) => (
                        <div
                          key={event.id || index}
                          className="p-4 rounded-lg border border-white/10 hover:border-white/20 transition-colors bg-white/5 hover:scale-[1.02]"
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
                  
                </div>
              </div>

              {/* Newsletter */}
              <div id="newsletter-form">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
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
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white text-white text-sm placeholder-gray-500 backdrop-blur-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-[#0A0F14] hover:bg-gray-100 font-medium py-2 rounded-lg transition-colors flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
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
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
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
                  <div className="text-center p-3 bg-white/5 rounded-lg hover:scale-[1.02] transition-transform">
                    <div className="text-2xl font-bold text-white mb-1">
                      {newsContent.articles.length}
                    </div>
                    <div className="text-xs text-gray-400">Articles</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg hover:scale-[1.02] transition-transform">
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
                </div>
              </div>

              {/* Download Rulebook */}
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded bg-white/5 border border-white/10">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Competition Rules</h3>
                    <p className="text-gray-400 text-sm">Official rulebook</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Download the official rulebook for the upcoming robot competition. Contains all rules, regulations, and guidelines.
                </p>
                <a
                  href="/assets/pdf/Robot Competition Rulebook.pdf"
                  download="Robot_Competition_Rulebook.pdf"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                >
                  <FileText className="h-4 w-4" />
                  <span>Download Rulebook (PDF)</span>
                </a>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Updated: {new Date().toLocaleDateString()}
                </p>
              </div>

            </div> {/* Closing div for the sidebar column */}
          </div>
        </div>
      </section>

      {/* Full Videos Section - Enhanced with Play/Pause Controls */}
      <section id="videos-section" className="py-16 md:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 rounded-full bg-white/5 border border-white/10">
              <Video className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Full Videos</h2>
              <p className="text-gray-400">Watch our complete video content</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {slideshowVideos.map((video, index) => (
              <div key={index} className="group">
                <div className="bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden hover:scale-[1.02]">
                  <div className="relative h-48 overflow-hidden">
                    <video
                      ref={el => videoSectionRefs.current[index] = el}
                      src={video.video}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      poster={video.fallback}
                      onClick={() => {
                        const videoElement = videoSectionRefs.current[index];
                        if (videoElement) {
                          if (videoElement.paused) {
                            videoElement.play();
                            setPlayingVideo(index);
                          } else {
                            videoElement.pause();
                            setPlayingVideo(null);
                          }
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Video Controls Overlay */}
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={() => {
                        const videoElement = videoSectionRefs.current[index];
                        if (videoElement) {
                          if (videoElement.paused) {
                            videoElement.play();
                            setPlayingVideo(index);
                          } else {
                            videoElement.pause();
                            setPlayingVideo(null);
                          }
                        }
                      }}
                    >
                      <div className={`transition-all duration-300 ${playingVideo === index ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                          {playingVideo === index ? (
                            <Pause className="h-8 w-8 text-white" />
                          ) : (
                            <Play className="h-8 w-8 text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Video Information */}
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                          <Video className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-white text-sm font-medium">
                          Video {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {index === 0 && "Research Breakthrough Demo"}
                      {index === 1 && "Technology Conference Highlights"}
                      {index === 2 && "Team Collaboration Showcase"}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {index === 0 && "Watch the full demonstration of our latest research breakthrough in action."}
                      {index === 1 && "Complete coverage of our recent technology conference and key takeaways."}
                      {index === 2 && "Behind-the-scenes look at our team's collaborative projects and innovations."}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => {
                            const videoElement = videoSectionRefs.current[index];
                            if (videoElement) {
                              if (videoElement.paused) {
                                videoElement.play();
                                setPlayingVideo(index);
                              } else {
                                videoElement.pause();
                                setPlayingVideo(null);
                              }
                            }
                          }}
                          className="flex items-center gap-2 text-white hover:text-gray-200 text-sm font-medium"
                        >
                          {playingVideo === index ? (
                            <>
                              <Pause className="h-4 w-4" />
                              <span>Pause</span>
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4" />
                              <span>Play Video</span>
                            </>
                          )}
                        </button>
                      </div>
                      
                      <a
                        href={video.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-gray-200 text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Download</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                    
                    {/* Video Duration Info */}
                    <div className="mt-4 text-xs text-gray-500">
                      {index === 0 && "Duration: 3:45 • Size: 48MB"}
                      {index === 1 && "Duration: 5:20 • Size: 72MB"}
                      {index === 2 && "Duration: 4:15 • Size: 56MB"}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">Looking for more video content?</p>
            <a
              href="/videos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Video className="h-5 w-5" />
              <span>View All Videos</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;