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
  Award,
  ChevronRight,
  Share2,
  Bookmark,
  Eye
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

  // Get gradient color for placeholder images (black and white only)
  const getGradientColor = (index = 0) => {
    const gradients = [
      'linear-gradient(135deg, #000000 0%, #333333 100%)',
      'linear-gradient(135deg, #111111 0%, #444444 100%)',
      'linear-gradient(135deg, #222222 0%, #555555 100%)',
      'linear-gradient(135deg, #333333 0%, #666666 100%)',
      'linear-gradient(135deg, #444444 0%, #777777 100%)',
      'linear-gradient(135deg, #555555 0%, #888888 100%)',
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
      {children}
    </div>
  );

  // Magazine Header Component
  const MagazineHeader = () => (
    <div className="relative border-b border-white/10 pb-8 mb-12">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Issue No. 48</div>
          <div className="text-sm text-gray-400">December 2024 Edition</div>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase tracking-widest text-white mb-1">The Innovation Chronicle</div>
          <div className="text-sm text-gray-400">African Tech Magazine</div>
        </div>
      </div>
      
      <div className="text-center">
        <div className="inline-block h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6"></div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            COMMUNITY
          </span>
        </h1>
        <div className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          The Definitive Voice of <span className="text-white font-semibold">African Innovation</span> • Stories That Shape Tomorrow
        </div>
      </div>
    </div>
  );

  // Magazine Grid Layout
  const MagazineGrid = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Main Featured Story - Left Column */}
      <div className="lg:col-span-8">
        {communityContent.featured.length > 0 && communityContent.featured[0] && (
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative group"
          >
            {/* Magazine Label */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-bold tracking-wider">COVER STORY</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent"></div>
            </div>
            
            {/* Featured Image with Magazine Style */}
            <div className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
              <ImagePlaceholder 
                gradient={communityContent.featured[0]?.imageUrl || getGradientColor(0)}
                className="aspect-[16/9]"
              >
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wide border border-white/30">
                      EXCLUSIVE FEATURE
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 max-w-4xl">
                    {communityContent.featured[0]?.title || "The Next Generation of African Innovators"}
                  </h2>
                  <div className="flex items-center gap-6 text-sm text-gray-200">
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      By {communityContent.featured[0]?.author || "MA Editorial Team"}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {communityContent.featured[0]?.readTime || "12 min read"}
                    </span>
                    <span>•</span>
                    <span>{formatDate(communityContent.featured[0]?.date)}</span>
                  </div>
                </div>
              </ImagePlaceholder>
              
              {/* Magazine Corner Accent */}
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/30"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/30"></div>
            </div>
            
            {/* Story Excerpt */}
            <div className="relative">
              <div className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 pl-6 border-l-2 border-white/20">
                {communityContent.featured[0]?.description || 
                  "In this groundbreaking feature, we explore how Africa's brightest minds are leveraging technology to solve the continent's most pressing challenges. From AI-powered healthcare to blockchain solutions for financial inclusion, discover the innovations shaping Africa's future."}
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <Link 
                  to={`/community/story/${communityContent.featured[0]?.id || 0}`}
                  className="group flex items-center gap-3 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all border border-white/20"
                >
                  <span className="font-semibold">Read Full Story</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="p-3 hover:bg-white/10 rounded-lg transition-colors border border-white/10">
                  <Bookmark className="h-5 w-5" />
                </button>
                <button className="p-3 hover:bg-white/10 rounded-lg transition-colors border border-white/10">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.article>
        )}
        
        {/* Secondary Features Grid */}
        {communityContent.featured.length > 1 && (
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold">More Features</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {communityContent.featured.slice(1, 3).map((story, index) => (
                <motion.article
                  key={story.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                    {/* Story Image */}
                    <div 
                      className="aspect-[4/3]"
                      style={{ background: story.imageUrl }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        {getCategoryIcon(story.category)}
                        <span className="text-sm font-semibold uppercase tracking-wider">
                          {story.category || "FEATURE"}
                        </span>
                      </div>
                      
                      <h4 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                        {story.title}
                      </h4>
                      
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {story.description || story.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{formatDate(story.date)}</span>
                        <Link 
                          to={`/community/story/${story.id || index}`}
                          className="flex items-center gap-1 hover:text-white transition-colors"
                        >
                          Read
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/10 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Sidebar - Updates & Quick Reads */}
      <div className="lg:col-span-4">
        <div className="sticky top-8">
          {/* Latest Updates */}
          {communityContent.updates.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
                <h3 className="text-xl font-bold">Latest Updates</h3>
              </div>
              
              <div className="space-y-6">
                {communityContent.updates.slice(0, 4).map((update, index) => (
                  <motion.article
                    key={update.id || index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group pb-6 border-b border-white/10 last:border-0 last:pb-0"
                  >
                    <div className="flex items-start gap-4">
                      {/* Update Number */}
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                          <span className="text-sm font-bold">{index + 1}</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                            {update.category || "UPDATE"}
                          </span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500">{formatDate(update.date)}</span>
                        </div>
                        
                        <h4 className="font-semibold mb-2 group-hover:text-white transition-colors line-clamp-2">
                          {update.title}
                        </h4>
                        
                        <p className="text-sm text-gray-400 line-clamp-2 mb-3">
                          {update.summary || update.description}
                        </p>
                        
                        <Link 
                          to={`/community/update/${update.id || index}`}
                          className="inline-flex items-center gap-1 text-sm font-medium hover:text-white transition-colors"
                        >
                          Read more
                          <ChevronRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          )}
          
          {/* Magazine Metrics */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
            <h4 className="font-bold mb-4">This Month's Metrics</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Total Stories</span>
                <span className="font-semibold">{communityContent.featured.length + communityContent.updates.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Community Contributors</span>
                <span className="font-semibold">48+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Avg. Read Time</span>
                <span className="font-semibold">7 min</span>
              </div>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="bg-black rounded-xl p-6 border border-white/10">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 mb-4 border border-white/10">
                <span className="text-white text-xl">✉️</span>
              </div>
              <h4 className="font-bold mb-2">Subscribe to Our Digest</h4>
              <p className="text-sm text-gray-400">
                Weekly insights delivered to your inbox
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white text-sm"
                required
              />
              <button 
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 py-3 rounded-lg font-semibold transition-all border border-white/20"
              >
                Join the Community
              </button>
            </form>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              Premium content • No spam • Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Featured Stories Section with Magazine Tabs
  const FeaturedStoriesSection = () => (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-white/5 rounded-full mb-4 border border-white/10">
            <span className="text-sm font-semibold tracking-wider">FEATURED SECTIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              In-Depth Stories
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore comprehensive features on innovation, technology, and the people shaping Africa's future
          </p>
        </div>
        
        {/* Magazine Tabs */}
        <div className="flex justify-center gap-1 mb-12">
          {['All Stories', 'Innovation', 'Technology', 'Startups', 'Research', 'Community'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0])}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all relative border border-transparent ${
                activeTab === tab.toLowerCase().split(' ')[0] 
                  ? 'text-white bg-white/5 border-white/20' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
              {activeTab === tab.toLowerCase().split(' ')[0] && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white rounded-full"></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Stories Grid */}
        {filteredStories.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.slice(0, 6).map((story, index) => (
              <motion.article
                key={story.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-full bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50">
                  {/* Story Image */}
                  <div 
                    className="h-48"
                    style={{ background: story.imageUrl }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-white/10">
                        {getCategoryIcon(story.category)}
                        <span className="text-xs font-semibold">{story.category || "STORY"}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span>{formatDate(story.date)}</span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {story.views || "1.2k"}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors line-clamp-2">
                      {story.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                      {story.description || story.excerpt || story.summary}
                    </p>
                    
                    {/* Author & Action */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                          <span className="text-xs font-bold">
                            {story.author ? story.author.charAt(0) : "M"}
                          </span>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium">{story.author || "MA Editorial"}</div>
                          <div className="text-xs text-gray-500">{story.authorRole || "Contributor"}</div>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/community/story/${story.id || index}`}
                        className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/10"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Newspaper className="h-16 w-16 text-white/20 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No stories found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );

  // Columns & Events Section
  const ColumnsEventsSection = () => (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Columns Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-1 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
                <h2 className="text-2xl font-bold">Columns & Opinion</h2>
              </div>
              
              <div className="space-y-8">
                {communityContent.columns.map((column, index) => (
                  <motion.article
                    key={column.id || index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                      {/* Columnist Info */}
                      <div className="md:w-1/4">
                        <div className="flex md:flex-col items-center gap-4">
                          <div 
                            className="h-16 w-16 rounded-full border-2 border-white/20"
                            style={{ background: column.imageUrl }}
                          />
                          <div className="md:text-center">
                            <div className="font-semibold">{column.author || "Anonymous"}</div>
                            <div className="text-sm text-gray-500">{column.authorRole || "Columnist"}</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Column Content */}
                      <div className="md:w-3/4">
                        <div className="mb-3">
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold border border-white/10">
                            <MessageSquare className="h-3 w-3" />
                            OP-ED
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                          {column.title}
                        </h3>
                        
                        <p className="text-gray-400 mb-4 line-clamp-3">
                          {column.excerpt || column.description || "Read the full column for detailed insights and analysis."}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">{formatDate(column.date)} • {column.readTime || "8 min read"}</span>
                          <Link 
                            to={`/community/column/${column.id || index}`}
                            className="flex items-center gap-1 font-medium hover:text-white transition-colors"
                          >
                            Read opinion
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
          
          {/* Events Sidebar */}
          <div>
            {communityContent.events.length > 0 && (
              <div className="sticky top-8">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-8 w-1 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
                    <h2 className="text-2xl font-bold">Upcoming Events</h2>
                  </div>
                  
                  <div className="space-y-6">
                    {communityContent.events.map((event, index) => (
                      <motion.div
                        key={event.id || index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        {/* Event Image */}
                        <div 
                          className="h-40 relative"
                          style={{ background: event.imageUrl }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                          
                          {/* Event Date */}
                          <div className="absolute top-4 right-4">
                            <div className="text-center bg-black/50 backdrop-blur-sm rounded-lg p-2 min-w-14 border border-white/10">
                              <div className="text-xs uppercase tracking-wider">DEC</div>
                              <div className="text-xl font-bold">15</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Event Content */}
                        <div className="p-6">
                          <div className="mb-3">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold border border-white/10">
                              <Calendar className="h-3 w-3" />
                              {event.type || "CONFERENCE"}
                            </span>
                          </div>
                          
                          <h3 className="font-bold mb-4">{event.title}</h3>
                          
                          <div className="space-y-3 text-sm text-gray-300 mb-6">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>{formatDate(event.date)} at {formatTime(event.eventTime)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{event.location || "Virtual / Lagos"}</span>
                            </div>
                          </div>
                          
                          <button 
                            onClick={() => handleEventRegistration(event)}
                            className="w-full bg-white text-black hover:bg-gray-200 py-3 rounded-lg font-semibold transition-all border border-white/20"
                          >
                            Register Interest
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );

  // Magazine Footer
  const MagazineFooter = () => (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">The Innovation Chronicle</div>
          <div className="text-2xl font-bold mb-8">MA Community Magazine</div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/community" className="hover:text-white transition-colors">Archive</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/admin/upload" className="hover:text-white transition-colors">Submit Content</Link>
          </div>
          
          <div className="text-xs text-gray-500">
            © 2024 MA Community. All rights reserved. Volume 48, Issue 12.
          </div>
        </div>
      </div>
    </footer>
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
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors border border-white/10"
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
      {/* Magazine Header */}
      <section className="relative text-white pt-12 pb-8 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black">
          {/* Magazine-style grid */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#1a1a1a_1px,transparent_1px),linear-gradient(180deg,#1a1a1a_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <MagazineHeader />
        </div>
      </section>

      {/* Main Magazine Content */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <MagazineGrid />
        </div>
      </section>

      {/* Featured Stories */}
      <FeaturedStoriesSection />

      {/* Columns & Events */}
      <ColumnsEventsSection />

      {/* Magazine Footer */}
      <MagazineFooter />
    </div>
  );
};

export default Community;