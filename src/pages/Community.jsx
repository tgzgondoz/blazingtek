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

// Import Firebase from your existing configuration
// First, check if you have a separate firebase config file
// If not, we'll create a simple fetch approach

const Community = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [communityContent, setCommunityContent] = useState({
    featured: [],
    updates: [],
    events: [],
    columns: [],
    isLoading: true
  });

  // Get gradient color for placeholder images (grayscale only)
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

  // Load content from Firebase Realtime Database using fetch API
  useEffect(() => {
    const loadContentFromFirebase = async () => {
      try {
        // Your Firebase database URL (replace with your actual URL)
        const databaseURL = 'https://blazingtek-c56e7-default-rtdb.firebaseio.com';
        
        // Fetch community data
        const communityResponse = await fetch(`${databaseURL}/community.json`);
        const communityData = await communityResponse.json();
        
        console.log('Loaded from Firebase:', communityData);
        
        if (communityData) {
          // Process data from Firebase
          setCommunityContent({
            featured: communityData.featured ? Object.keys(communityData.featured).map(key => ({
              id: key,
              ...communityData.featured[key],
              imageUrl: communityData.featured[key].imageUrl || getGradientColor(0)
            })) : [],
            updates: communityData.updates ? Object.keys(communityData.updates).map(key => ({
              id: key,
              ...communityData.updates[key],
              imageUrl: communityData.updates[key].imageUrl || getGradientColor(1)
            })) : [],
            events: communityData.events ? Object.keys(communityData.events).map(key => ({
              id: key,
              ...communityData.events[key],
              imageUrl: communityData.events[key].imageUrl || getGradientColor(2)
            })) : [],
            columns: communityData.columns ? Object.keys(communityData.columns).map(key => ({
              id: key,
              ...communityData.columns[key],
              imageUrl: communityData.columns[key].imageUrl || getGradientColor(3)
            })) : [],
            isLoading: false
          });
        } else {
          // No data in Firebase yet
          setCommunityContent({
            featured: [],
            updates: [],
            events: [],
            columns: [],
            isLoading: false
          });
        }
      } catch (error) {
        console.error('Error loading community content from Firebase:', error);
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

    loadContentFromFirebase();
    
    // Poll for updates every 30 seconds
    const intervalId = setInterval(loadContentFromFirebase, 30000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Filter featured stories based on active tab
  const filteredStories = activeTab === 'all' 
    ? communityContent.featured 
    : communityContent.featured.filter(story => 
        story.category && story.category.toLowerCase().includes(activeTab)
      );

  // Handle newsletter subscription
  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      try {
        const databaseURL = 'https://blazingtek-c56e7-default-rtdb.firebaseio.com';
        
        // Save to Firebase using POST request
        await fetch(`${databaseURL}/newsletter-subscriptions.json`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            date: new Date().toISOString(),
            source: 'community-page'
          })
        });
        
        alert('Thank you for subscribing to MA Community! You\'ll receive our weekly digest.');
        e.target.reset();
      } catch (error) {
        console.error('Error saving subscription:', error);
        alert('Subscription failed. Please try again.');
      }
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
    <div className="relative border-b border-gray-800 pb-8 mb-12">
      <div className="flex items-start justify-between mb-6">
        <div>
          <br/>
          <br/>
          <br/>

          <div className="text-xs uppercase tracking-widest text-gray-600 mb-2">Issue No. 48</div>
          <div className="text-sm text-gray-500">December 2024 Edition</div>
        </div>
        <div className="text-right">
          <br/>
          <br/>
          <br/>
          <div className="text-xs uppercase tracking-widest text-white mb-1">The Innovation Chronicle</div>
          <div className="text-sm text-gray-500">African Tech Magazine</div>
        </div>
      </div>
      
      <div className="text-center">
        <div className="inline-block h-px w-24 bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            COMMUNITY
          </span>
        </h1>
        <div className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
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
              <div className="h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent"></div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 backdrop-blur-sm rounded-full border border-gray-800">
                <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-bold tracking-wider">COVER STORY</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-gray-800 to-transparent"></div>
            </div>
            
            {/* Featured Image with Magazine Style */}
            <div className="relative mb-8 overflow-hidden rounded-2xl border border-gray-800 shadow-2xl shadow-black/50">
              <ImagePlaceholder 
                gradient={communityContent.featured[0]?.imageUrl || getGradientColor(0)}
                className="aspect-[16/9]"
              >
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-gray-900 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wide border border-gray-700">
                      EXCLUSIVE FEATURE
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 max-w-4xl">
                    {communityContent.featured[0]?.title || "The Next Generation of African Innovators"}
                  </h2>
                  <div className="flex items-center gap-6 text-sm text-gray-300">
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
              <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-gray-700"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-gray-700"></div>
            </div>
            
            {/* Story Excerpt */}
            <div className="relative">
              <div className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 pl-6 border-l-2 border-gray-800">
                {communityContent.featured[0]?.description || 
                  "In this groundbreaking feature, we explore how Africa's brightest minds are leveraging technology to solve the continent's most pressing challenges. From AI-powered healthcare to blockchain solutions for financial inclusion, discover the innovations shaping Africa's future."}
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <Link 
                  to={`/community/story/${communityContent.featured[0]?.id || 0}`}
                  className="group flex items-center gap-3 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-all border border-gray-700"
                >
                  <span className="font-semibold">Read Full Story</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="p-3 hover:bg-gray-900 rounded-lg transition-colors border border-gray-800">
                  <Bookmark className="h-5 w-5 text-gray-400" />
                </button>
                <button className="p-3 hover:bg-gray-900 rounded-lg transition-colors border border-gray-800">
                  <Share2 className="h-5 w-5 text-gray-400" />
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
              <div className="h-px flex-1 bg-gradient-to-r from-gray-800 to-transparent"></div>
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
                  <div className="relative overflow-hidden rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
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
                        <span className="text-sm font-semibold uppercase tracking-wider text-gray-300">
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
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-700 transition-all duration-300 pointer-events-none"></div>
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
                <div className="h-8 w-1 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full"></div>
                <h3 className="text-xl font-bold">Latest Updates</h3>
              </div>
              
              <div className="space-y-6">
                {communityContent.updates.slice(0, 4).map((update, index) => (
                  <motion.article
                    key={update.id || index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group pb-6 border-b border-gray-800 last:border-0 last:pb-0"
                  >
                    <div className="flex items-start gap-4">
                      {/* Update Number */}
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800">
                          <span className="text-sm font-bold text-gray-300">{index + 1}</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            {update.category || "UPDATE"}
                          </span>
                          <span className="text-xs text-gray-600">•</span>
                          <span className="text-xs text-gray-600">{formatDate(update.date)}</span>
                        </div>
                        
                        <h4 className="font-semibold mb-2 group-hover:text-white transition-colors line-clamp-2">
                          {update.title}
                        </h4>
                        
                        <p className="text-sm text-gray-500 line-clamp-2 mb-3">
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
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-8">
            <h4 className="font-bold mb-4 text-gray-300">This Month's Metrics</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Total Stories</span>
                <span className="font-semibold">{communityContent.featured.length + communityContent.updates.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Community Contributors</span>
                <span className="font-semibold">48+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Avg. Read Time</span>
                <span className="font-semibold">7 min</span>
              </div>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="bg-black rounded-xl p-6 border border-gray-800">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-gray-900 to-black mb-4 border border-gray-800">
                <span className="text-white text-xl">✉️</span>
              </div>
              <h4 className="font-bold mb-2">Subscribe to Our Digest</h4>
              <p className="text-sm text-gray-500">
                Weekly insights delivered to your inbox
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-gray-700 text-sm"
                required
              />
              <button 
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-200 py-3 rounded-lg font-semibold transition-all border border-gray-700"
              >
                Join the Community
              </button>
            </form>
            
            <p className="text-xs text-gray-600 text-center mt-4">
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
          <div className="inline-block px-6 py-2 bg-gray-900 rounded-full mb-4 border border-gray-800">
            <span className="text-sm font-semibold tracking-wider">FEATURED SECTIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              In-Depth Stories
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
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
                  ? 'text-white bg-gray-900 border-gray-700' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-900'
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
                <div className="relative h-full bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50">
                  {/* Story Image */}
                  <div 
                    className="h-48"
                    style={{ background: story.imageUrl }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-gray-700">
                        {getCategoryIcon(story.category)}
                        <span className="text-xs font-semibold text-gray-300">{story.category || "STORY"}</span>
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
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                          <span className="text-xs font-bold text-gray-300">
                            {story.author ? story.author.charAt(0) : "M"}
                          </span>
                        </div>
                        <div className="text-sm">
                          <div className="font-medium text-gray-300">{story.author || "MA Editorial"}</div>
                          <div className="text-xs text-gray-500">{story.authorRole || "Contributor"}</div>
                        </div>
                      </div>
                      
                      <Link 
                        to={`/community/story/${story.id || index}`}
                        className="h-8 w-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors border border-gray-700"
                      >
                        <ArrowRight className="h-4 w-4 text-gray-300" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Newspaper className="h-16 w-16 text-gray-800 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No stories found for this category.</p>
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
                <div className="h-8 w-1 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full"></div>
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
                    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
                      {/* Columnist Info */}
                      <div className="md:w-1/4">
                        <div className="flex md:flex-col items-center gap-4">
                          <div 
                            className="h-16 w-16 rounded-full border-2 border-gray-700"
                            style={{ background: column.imageUrl }}
                          />
                          <div className="md:text-center">
                            <div className="font-semibold text-gray-300">{column.author || "Anonymous"}</div>
                            <div className="text-sm text-gray-500">{column.authorRole || "Columnist"}</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Column Content */}
                      <div className="md:w-3/4">
                        <div className="mb-3">
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold border border-gray-700">
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
                    <div className="h-8 w-1 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full"></div>
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
                        className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300"
                      >
                        {/* Event Image */}
                        <div 
                          className="h-40 relative"
                          style={{ background: event.imageUrl }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                          
                          {/* Event Date */}
                          <div className="absolute top-4 right-4">
                            <div className="text-center bg-black/50 backdrop-blur-sm rounded-lg p-2 min-w-14 border border-gray-700">
                              <div className="text-xs uppercase tracking-wider text-gray-300">DEC</div>
                              <div className="text-xl font-bold text-white">15</div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Event Content */}
                        <div className="p-6">
                          <div className="mb-3">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold border border-gray-700">
                              <Calendar className="h-3 w-3" />
                              {event.type || "CONFERENCE"}
                            </span>
                          </div>
                          
                          <h3 className="font-bold mb-4 text-gray-300">{event.title}</h3>
                          
                          <div className="space-y-3 text-sm text-gray-400 mb-6">
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>{formatDate(event.date)} at {formatTime(event.eventTime)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{event.location || event.eventLocation || "Virtual / Lagos"}</span>
                            </div>
                          </div>
                          
                          <button 
                            onClick={() => handleEventRegistration(event)}
                            className="w-full bg-white text-black hover:bg-gray-200 py-3 rounded-lg font-semibold transition-all border border-gray-700"
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
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="text-sm uppercase tracking-widest text-gray-600 mb-4">The Innovation Chronicle</div>
          <div className="text-2xl font-bold mb-8 text-gray-300">MA Community Magazine</div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/community" className="hover:text-white transition-colors">Archive</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link to="/admin/upload" className="hover:text-white transition-colors">Submit Content</Link>
          </div>
          
          <div className="text-xs text-gray-600">
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
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-gray-800 border-t-white mb-6"></div>
          <h1 className="text-3xl font-bold text-white mb-4">Loading Community Content...</h1>
          <p className="text-gray-500">Fetching the latest stories and updates from Firebase</p>
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
          <Newspaper className="h-16 w-16 text-gray-800 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-4">No Community Content Available</h1>
          <p className="text-gray-500 mb-6">
            There's no community content to display. Please add content through the Admin Panel.
          </p>
          <Link 
            to="/admin/upload" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 rounded-lg font-medium transition-colors border border-gray-800"
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