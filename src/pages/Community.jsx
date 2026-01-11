import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  User, 
  Clock, 
  ArrowRight,
  Newspaper,
  Users,
  TrendingUp,
  MessageSquare,
  Star,
  ExternalLink,
  BookOpen,
  Target,
  Award
} from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [communityContent, setCommunityContent] = useState({
    featured: [],
    updates: [],
    events: [],
    columns: [],
    isLoading: true
  });

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

  // Load content from localStorage
  useEffect(() => {
    const loadContent = () => {
      try {
        const savedContent = JSON.parse(localStorage.getItem('blazingtek-community')) || {
          featured: [],
          updates: [],
          events: [],
          columns: []
        };
        
        console.log('Loaded from localStorage:', savedContent);
        
        // Use admin content if available, otherwise show empty
        setCommunityContent({
          featured: savedContent.featured && savedContent.featured.length > 0 ? savedContent.featured.map((item, index) => ({
            ...item,
            imageUrl: item.imageUrl || getGradientColor(index)
          })) : [],
          updates: savedContent.updates && savedContent.updates.length > 0 ? savedContent.updates.map((item, index) => ({
            ...item,
            imageUrl: item.imageUrl || getGradientColor(index)
          })) : [],
          events: savedContent.events && savedContent.events.length > 0 ? savedContent.events.map((item, index) => ({
            ...item,
            imageUrl: item.imageUrl || getGradientColor(index)
          })) : [],
          columns: savedContent.columns && savedContent.columns.length > 0 ? savedContent.columns.map((item, index) => ({
            ...item,
            imageUrl: item.imageUrl || getGradientColor(index)
          })) : [],
          isLoading: false
        });
      } catch (error) {
        console.error('Error loading community content:', error);
        // Show empty if there's an error
        setCommunityContent({
          featured: [],
          updates: [],
          events: [],
          columns: [],
          isLoading: false
        });
      }
    };

    loadContent();
    
    // Listen for content updates
    const handleStorageChange = (e) => {
      if (e.key === 'blazingtek-community') {
        loadContent();
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom event from AdminUpload
    const handleCustomStorage = () => {
      loadContent();
    };
    
    window.addEventListener('blazingtek-content-updated', handleCustomStorage);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('blazingtek-content-updated', handleCustomStorage);
    };
  }, []);

  // Filter featured stories based on active tab
  const filteredStories = activeTab === 'all' 
    ? communityContent.featured 
    : communityContent.featured.filter(story => 
        story.category && story.category.toLowerCase().includes(activeTab)
      );

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      const subscriptions = JSON.parse(localStorage.getItem('blazingtek-newsletter-subscriptions')) || [];
      subscriptions.push({
        email: email,
        date: new Date().toISOString(),
        source: 'community-page'
      });
      localStorage.setItem('blazingtek-newsletter-subscriptions', JSON.stringify(subscriptions));
      
      alert('Thank you for subscribing to MA Community! You\'ll receive our weekly digest.');
      e.target.reset();
    }
  };

  // Handle event registration
  const handleEventRegistration = (event) => {
    if (event.registrationLink) {
      window.open(event.registrationLink, '_blank');
    } else {
      alert(`Registration details for "${event.title}" will be announced soon!`);
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Date TBD';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
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

  // Get category icon
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'FEATURE STORIES': return <Star className="h-4 w-4" />;
      case 'COMMUNITY': return <Users className="h-4 w-4" />;
      case 'UPDATE': return <TrendingUp className="h-4 w-4" />;
      case 'BUSINESS': return <Target className="h-4 w-4" />;
      case 'RESEARCH': return <BookOpen className="h-4 w-4" />;
      case 'COLUMNS & OPINION': return <MessageSquare className="h-4 w-4" />;
      case 'UPCOMING EVENTS': return <Calendar className="h-4 w-4" />;
      default: return <Newspaper className="h-4 w-4" />;
    }
  };

  // Image placeholder component
  const ImagePlaceholder = ({ gradient, children, className = '' }) => (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ background: gradient }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );

  // Show loading state
  if (communityContent.isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-white/20 border-t-white mb-6"></div>
          <h1 className="text-3xl font-bold text-white mb-4">Loading Community Content...</h1>
          <p className="text-gray-400">Fetching the latest stories and updates from AdminUpload</p>
        </div>
      </div>
    );
  }

  // Check if we have any content to display
  const hasContent = communityContent.featured.length > 0 || 
                     communityContent.updates.length > 0 || 
                     communityContent.events.length > 0 || 
                     communityContent.columns.length > 0;

  if (!hasContent) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center max-w-md">
          <Newspaper className="h-16 w-16 text-white/20 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">No Community Content Available</h1>
          <p className="text-gray-400 mb-6">
            There's no community content to display. Please add content through the Admin Panel.
          </p>
          <Link 
            to="/admin/upload" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors"
          >
            <span>Go to Admin Panel</span>
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0F14]"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto px-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            MA Community
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            The Voice of African Innovation
          </motion.p>
        </motion.div>
      </section>

      {/* Cover Story with Professional Image - Only show if we have featured stories */}
      {communityContent.featured.length > 0 && (
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Cover with Professional Image - Show first featured story as cover */}
              <motion.div 
                className="relative group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <ImagePlaceholder 
                  gradient={communityContent.featured[0]?.imageUrl || getGradientColor(0)}
                  className="aspect-[4/5] rounded-xl shadow-2xl"
                >
                  <div className="p-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                      <Newspaper className="h-5 w-5" />
                      <span className="font-semibold">COVER STORY</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                      {communityContent.featured[0]?.title || "The Next Generation of African Innovators"}
                    </h2>
                    <p className="text-xl text-gray-200">
                      {communityContent.featured[0]?.description || "How technology and education are shaping Africa's future"}
                    </p>
                  </div>
                </ImagePlaceholder>
              </motion.div>

              {/* Featured Stories */}
              <div className="space-y-8">
                {communityContent.featured.slice(1, 3).map((story, index) => (
                  <motion.article
                    key={story.id || index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="group pb-8 border-b border-white/10 hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      {/* Story Image */}
                      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                        <div 
                          className="w-full h-full"
                          style={{ background: story.imageUrl }}
                        />
                      </div>
                      
                      {/* Story Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {getCategoryIcon(story.category)}
                          <span className="text-sm font-semibold text-white">
                            {story.category || "FEATURE"}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors cursor-pointer">
                          {story.title}
                        </h3>
                        <p className="text-gray-400 mb-4 text-sm line-clamp-2">
                          {story.description || story.excerpt || story.summary || "Read the full story for more details."}
                        </p>
                        <div className="text-xs text-gray-500">
                          By {story.author || "MA Editorial"} • {story.readTime || "5 min read"}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Latest Updates with Images - Only show if we have updates */}
      {communityContent.updates.length > 0 && (
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Latest Updates
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Stay informed with the latest news and developments
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {communityContent.updates.map((update, index) => (
                <motion.div
                  key={update.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                    {/* Update Image */}
                    <div 
                      className="h-48"
                      style={{ background: update.imageUrl }}
                    />
                    
                    {/* Update Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        {getCategoryIcon(update.category)}
                        <span className="text-sm font-semibold text-white">
                          {update.category || "UPDATE"}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-3 group-hover:text-white transition-colors line-clamp-2">
                        {update.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4 line-clamp-3 flex-1">
                        {update.summary || update.description || update.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="text-xs text-gray-500">
                          {formatDate(update.date)}
                        </span>
                        <Link 
                          to={`/community/update/${update.id || index}`}
                          className="text-sm font-medium hover:text-white transition-colors flex items-center gap-1"
                        >
                          Read More
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Feature Stories with Professional Layout - Only show if we have featured stories */}
      {communityContent.featured.length > 0 && (
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Feature Stories
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                In-depth stories exploring innovation and technology
              </p>
            </motion.div>

            {/* Tabs */}
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              {['all', 'FEATURE STORIES', 'COMMUNITY', 'RESEARCH'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                    activeTab === tab.toLowerCase() 
                      ? 'bg-white text-black' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {getCategoryIcon(tab === 'all' ? '' : tab)}
                  {tab === 'all' ? 'All Stories' : tab}
                </button>
              ))}
            </div>

            {/* Stories */}
            <div className="space-y-8">
              {filteredStories.length > 0 ? (
                filteredStories.map((story, index) => (
                  <motion.article
                    key={story.id || index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="group bg-white/5 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-white/10 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Image Column */}
                      <div className="lg:w-2/5">
                        <div 
                          className="h-64 lg:h-full"
                          style={{ background: story.imageUrl }}
                        />
                      </div>
                      
                      {/* Content Column */}
                      <div className="lg:w-3/5 p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold">
                            {getCategoryIcon(story.category)}
                            {story.category || "FEATURE"}
                          </span>
                          <span className="text-xs text-gray-500">• {story.readTime || "5 min read"}</span>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                          {story.title}
                        </h3>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {story.description || story.excerpt || story.summary || "Discover more about this inspiring story."}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
                              <span className="text-sm font-bold">
                                {story.author ? story.author.split(' ')[0][0] : "M"}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium text-sm">{story.author || "MA Editorial"}</p>
                              <p className="text-xs text-gray-500">{story.authorRole || "Contributor"}</p>
                            </div>
                          </div>
                          
                          <Link 
                            to={`/community/story/${story.id || index}`} 
                            className="text-sm font-medium hover:text-white transition-colors flex items-center gap-2"
                          >
                            Read Full Story
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))
              ) : (
                <div className="text-center py-12">
                  <Newspaper className="h-16 w-16 text-white/20 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg mb-2">No feature stories found for this category.</p>
                  <p className="text-gray-500 text-sm mb-6">Add feature stories in the Admin Panel to see them here.</p>
                  <Link 
                    to="/admin/upload" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors"
                  >
                    <span>Go to Admin Panel</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Columns & Events with Professional Images */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Columns - Only show if we have columns */}
            {(communityContent.columns.length > 0) && (
              <div className="lg:col-span-2">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Columns & Opinion
                  </h2>
                  <p className="text-gray-400">Insights and perspectives from our community</p>
                </motion.div>
                
                <div className="space-y-6">
                  {communityContent.columns.map((column, index) => (
                    <motion.article
                      key={column.id || index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="group bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-start gap-6 p-6">
                        {/* Columnist Image */}
                        <div className="flex-shrink-0">
                          <div 
                            className="w-16 h-16 rounded-full border-2 border-white/20"
                            style={{ background: column.imageUrl }}
                          />
                        </div>
                        
                        {/* Column Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold">
                              {getCategoryIcon(column.category)}
                              {column.columnType ? column.columnType.charAt(0).toUpperCase() + column.columnType.slice(1) : "Column"}
                            </div>
                            <div className="h-px flex-1 bg-white/10"></div>
                          </div>
                          
                          <h3 className="text-lg font-bold mb-2 group-hover:text-white transition-colors">
                            {column.title}
                          </h3>
                          
                          <div className="text-sm text-white mb-3">By {column.author || "Anonymous"}</div>
                          
                          <p className="text-gray-400 mb-4 line-clamp-2">
                            {column.excerpt || column.description || "Read the full column for more insights."}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-xs text-gray-500">
                              {formatDate(column.date)} • {column.readTime || "5 min read"}
                            </div>
                            <Link 
                              to={`/community/column/${column.id || index}`} 
                              className="text-sm font-medium hover:text-white transition-colors flex items-center gap-1"
                            >
                              Read full column
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>
            )}

            <div>
              {/* Events Sidebar - Only show if we have events */}
              {communityContent.events.length > 0 && (
                <>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6"
                  >
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Upcoming Events
                    </h2>
                    <p className="text-gray-400">Join our community events and activities</p>
                  </motion.div>
                  
                  <div className="space-y-6 mb-8">
                    {communityContent.events.map((event, index) => (
                      <motion.div
                        key={event.id || index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                      >
                        {/* Event Image */}
                        <div 
                          className="h-48"
                          style={{ background: event.imageUrl }}
                        />
                        
                        {/* Event Content */}
                        <div className="p-6">
                          <div className="mb-4">
                            <span className={`inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold`}>
                              {event.type || "Event"}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                          
                          <div className="space-y-3 text-sm text-gray-300 mb-6">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(event.date)} {event.eventTime && `• ${formatTime(event.eventTime)}`}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{event.location || event.eventLocation || "Location TBA"}</span>
                            </div>
                            {event.speaker && (
                              <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>Speaker: {event.speaker}</span>
                              </div>
                            )}
                          </div>
                          
                          <button 
                            onClick={() => handleEventRegistration(event)}
                            className="w-full bg-white text-black hover:bg-gray-100 py-3 rounded-lg font-medium transition-all"
                          >
                            Register Now
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-4">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Stay Updated</h3>
                  <p className="text-gray-400 text-sm">
                    Get the latest innovation stories delivered weekly
                  </p>
                </div>
                
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white"
                    required
                  />
                  <button 
                    type="submit"
                    className="w-full bg-white text-black hover:bg-gray-100 py-3 rounded-lg font-medium transition-all"
                  >
                    Subscribe Now
                  </button>
                </form>
                
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