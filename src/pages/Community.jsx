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

  // Default content functions
  const getDefaultFeaturedStories = () => [
    {
      id: 1,
      title: "The Robotics Revolution in African Tech",
      description: "How young innovators are building autonomous solutions for local challenges",
      category: "FEATURE STORIES",
      author: "Dr. Amina Diallo",
      authorRole: "Lead AI Researcher",
      readTime: "8 min read",
      imageUrl: getGradientColor(0),
      date: "March 15, 2024",
      content: "",
      summary: "Exploring the rise of robotics education across Africa"
    },
    {
      id: 2,
      title: "Bridging the Digital Divide Through Community Centers",
      description: "Tech education reaches rural communities across Africa",
      category: "COMMUNITY",
      author: "Kwame Osei",
      authorRole: "Community Director",
      readTime: "6 min read",
      imageUrl: getGradientColor(1),
      date: "March 10, 2024",
      content: "",
      summary: "Transforming remote areas through accessible technology training"
    },
    {
      id: 3,
      title: "Women in AI: Leading Africa's Tech Future",
      description: "African women innovators changing the technology landscape",
      category: "FEATURE STORIES",
      author: "Nadia Bello",
      authorRole: "AI Ethics Specialist",
      readTime: "7 min read",
      imageUrl: getGradientColor(2),
      date: "March 5, 2024",
      content: "",
      summary: "Spotlight on female tech leaders across the continent"
    },
  ];

  const getDefaultUpdates = () => [
    {
      id: 1,
      title: "AI Hackathon Produces Solutions for Agriculture",
      summary: "500+ developers participated in 48-hour innovation marathon",
      description: "Participants developed AI solutions for crop disease detection and yield prediction",
      category: "UPDATE",
      author: "MA Editorial",
      authorRole: "News Team",
      readTime: "3 min read",
      imageUrl: getGradientColor(3),
      date: "March 12, 2024",
      content: ""
    },
    {
      id: 2,
      title: "Student Startups Secure $2M in Funding",
      summary: "Incubator graduates raise significant investments",
      description: "Four student-led startups from our tech incubator secured seed funding",
      category: "BUSINESS",
      author: "Financial Times Africa",
      authorRole: "Business Reporter",
      readTime: "4 min read",
      imageUrl: getGradientColor(4),
      date: "March 8, 2024",
      content: ""
    },
    {
      id: 3,
      title: "Open Source Research Collaboration Expands",
      summary: "Global partnership on African innovation challenges",
      description: "New open-source platform launched for collaborative research",
      category: "RESEARCH",
      author: "TechCrunch Africa",
      authorRole: "Tech Journalist",
      readTime: "5 min read",
      imageUrl: getGradientColor(5),
      date: "March 3, 2024",
      content: ""
    },
  ];

  const getDefaultEvents = () => [
    {
      id: 1,
      title: "African Innovation Summit 2024",
      description: "Annual gathering of tech innovators and entrepreneurs",
      date: "April 20-22, 2024",
      eventDate: "2024-04-20",
      eventTime: "09:00",
      eventLocation: "Accra, Ghana",
      location: "Accra International Conference Center",
      status: "Registration Open",
      type: "Summit",
      speaker: "Dr. Amina Diallo, Kwame Osei",
      registrationLink: "",
      imageUrl: getGradientColor(0),
      author: "MA Events Team",
      readTime: "Event",
      content: "",
      category: "UPCOMING EVENTS"
    },
    {
      id: 2,
      title: "Women in Tech Leadership Forum",
      description: "Empowering female tech leaders across Africa",
      date: "May 15, 2024",
      eventDate: "2024-05-15",
      eventTime: "14:00",
      eventLocation: "Nairobi, Kenya",
      location: "Virtual & Nairobi Hub",
      status: "Applications Open",
      type: "Forum",
      speaker: "Nadia Bello, Maria Rodriguez",
      registrationLink: "",
      imageUrl: getGradientColor(1),
      author: "Women in Tech Africa",
      readTime: "Event",
      content: "",
      category: "UPCOMING EVENTS"
    },
    {
      id: 3,
      title: "Tech for Good Hackathon",
      description: "Building solutions for social impact",
      date: "June 5-7, 2024",
      eventDate: "2024-06-05",
      eventTime: "10:00",
      eventLocation: "Lagos, Nigeria",
      location: "Innovation Hub Lagos",
      status: "Upcoming",
      type: "Hackathon",
      speaker: "Samuel Adeyemi",
      registrationLink: "",
      imageUrl: getGradientColor(2),
      author: "Tech for Good Initiative",
      readTime: "Event",
      content: "",
      category: "UPCOMING EVENTS"
    },
  ];

  const getDefaultColumns = () => [
    {
      id: 1,
      title: "From the Editor's Desk",
      description: "The importance of community in tech innovation",
      excerpt: "Celebrating the incredible innovation happening across Africa through education and community collaboration. This month, we highlight stories of resilience and creativity...",
      author: "Dr. Amina Bello",
      authorRole: "Editor-in-Chief",
      readTime: "4 min read",
      imageUrl: getGradientColor(3),
      date: "March 15, 2024",
      content: "",
      category: "COLUMNS & OPINION",
      columnType: "opinion"
    },
    {
      id: 2,
      title: "Innovator Spotlight: The Drone Farmer",
      description: "How technology is transforming agriculture",
      excerpt: "Meet Samuel Kofi, whose agricultural drone startup emerged from our Tech Incubator program. His story represents the new generation of African innovators...",
      author: "David Chen",
      authorRole: "Senior Correspondent",
      readTime: "6 min read",
      imageUrl: getGradientColor(4),
      date: "March 10, 2024",
      content: "",
      category: "COLUMNS & OPINION",
      columnType: "interview"
    },
    {
      id: 3,
      title: "The Future of African Tech Education",
      description: "Building sustainable tech ecosystems",
      excerpt: "As we look toward 2030, the role of accessible tech education has never been more critical. Our analysis shows promising trends...",
      author: "Prof. Kwame Mensah",
      authorRole: "Education Analyst",
      readTime: "5 min read",
      imageUrl: getGradientColor(5),
      date: "March 5, 2024",
      content: "",
      category: "COLUMNS & OPINION",
      columnType: "analysis"
    },
  ];

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
        
        // Use admin content if available, otherwise use defaults
        setCommunityContent({
          featured: savedContent.featured && savedContent.featured.length > 0 ? savedContent.featured.map((item, index) => ({
            ...item,
            imageUrl: item.imageUrl || getGradientColor(index)
          })) : getDefaultFeaturedStories(),
          updates: savedContent.updates && savedContent.updates.length > 0 ? savedContent.updates.map((item, index) => ({
            ...item,
            imageUrl: item.imageUrl || getGradientColor(index)
          })) : getDefaultUpdates(),
          events: savedContent.events && savedContent.events.length > 0 ? savedContent.events.map((item, index) => ({
            ...item,
            imageUrl: item.imageUrl || getGradientColor(index)
          })) : getDefaultEvents(),
          columns: savedContent.columns && savedContent.columns.length > 0 ? savedContent.columns.map((item, index) => ({
            ...item,
            imageUrl: item.imageUrl || getGradientColor(index)
          })) : getDefaultColumns(),
          isLoading: false
        });
      } catch (error) {
        console.error('Error loading community content:', error);
        // Use defaults if there's an error
        setCommunityContent({
          featured: getDefaultFeaturedStories(),
          updates: getDefaultUpdates(),
          events: getDefaultEvents(),
          columns: getDefaultColumns(),
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
      <div className="min-h-screen bg-[#0A0F14] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-white mb-4"></div>
          <h3 className="text-lg font-semibold text-white mb-2">Loading Community Content</h3>
          <p className="text-gray-400">Fetching the latest stories and updates...</p>
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
      <div className="min-h-screen bg-[#0A0F14] text-white flex items-center justify-center">
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
              <span className="text-sm font-medium">Issue 03 • {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Cover Story with Professional Image */}
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

      {/* Latest Updates with Images */}
      <section className="py-12 border-t border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
          >
            <span className="flex items-center justify-center gap-3">
              <TrendingUp className="h-8 w-8" />
              LATEST UPDATES
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
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

      {/* Feature Stories with Professional Layout */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center"
          >
            <span className="flex items-center justify-center gap-3">
              <Star className="h-8 w-8" />
              FEATURE STORIES
            </span>
          </motion.h2>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {['all', 'FEATURE STORIES', 'COMMUNITY', 'RESEARCH'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activeTab === tab.toLowerCase() 
                    ? 'bg-white text-[#0A0F14] shadow-lg shadow-white/25' 
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
                  className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-white/10 transition-all duration-300"
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
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
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
                <span className="flex items-center gap-3">
                  <MessageSquare className="h-6 w-6" />
                  COLUMNS & OPINION
                </span>
              </motion.h2>
              
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

            {/* Events Sidebar */}
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-6"
              >
                <span className="flex items-center gap-3">
                  <Calendar className="h-6 w-6" />
                  UPCOMING EVENTS
                </span>
              </motion.h2>
              
              <div className="space-y-6">
                {communityContent.events.map((event, index) => (
                  <motion.div
                    key={event.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    {/* Event Image */}
                    <div 
                      className="h-64"
                      style={{ background: event.imageUrl }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    </div>
                    
                    {/* Event Content */}
                    <div className="relative p-6">
                      <div className="mb-4">
                        <span className={`inline-flex items-center gap-2 px-3 py-1 backdrop-blur-sm rounded-full text-xs font-semibold ${
                          event.status === 'Registration Open' ? 'bg-green-500/20 text-green-400' :
                          event.status === 'Applications Open' ? 'bg-blue-500/20 text-blue-400' :
                          event.status === 'Sold Out' ? 'bg-red-500/20 text-red-400' :
                          'bg-white/20 text-white'
                        }`}>
                          {event.type || "Event"} • {event.status || "Upcoming"}
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
                        className="w-full bg-white text-[#0A0F14] hover:bg-gray-100 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                      >
                        {event.status === 'Registration Open' || event.status === 'Applications Open' 
                          ? 'Register Now' 
                          : 'Learn More'}
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
                    <span className="text-[#0A0F14] text-xl">✉️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">STAY UPDATED</h3>
                  <p className="text-gray-400 text-sm">
                    Get the latest innovation stories delivered weekly
                  </p>
                </div>
                
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                    required
                  />
                  <button 
                    type="submit"
                    className="w-full bg-white text-[#0A0F14] hover:bg-gray-100 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                  >
                    Subscribe Now
                  </button>
                </form>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </motion.div>

              {/* Content Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6 bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <h3 className="text-lg font-bold mb-4">Community Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-1">
                      {communityContent.featured.length}
                    </div>
                    <div className="text-xs text-gray-400">Feature Stories</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-1">
                      {communityContent.updates.length}
                    </div>
                    <div className="text-xs text-gray-400">Latest Updates</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-1">
                      {communityContent.events.length}
                    </div>
                    <div className="text-xs text-gray-400">Upcoming Events</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-white mb-1">
                      {communityContent.columns.length}
                    </div>
                    <div className="text-xs text-gray-400">Columns</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Link 
                    to="/admin/upload"
                    className="inline-block text-xs text-amber-400 hover:text-amber-300"
                  >
                    Manage all content in Admin Panel →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Content Notice */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-[#0A0F14]/90 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-xs text-gray-400 z-40">
          <div className="flex items-center gap-2 mb-1">
            <div className={`h-2 w-2 rounded-full ${
              communityContent.featured.length > 0 || 
              communityContent.updates.length > 0 || 
              communityContent.events.length > 0 || 
              communityContent.columns.length > 0 
                ? 'bg-green-500' : 'bg-yellow-500'
            } animate-pulse`}></div>
            <span>Community Content: {
              communityContent.featured.length > 0 || 
              communityContent.updates.length > 0 || 
              communityContent.events.length > 0 || 
              communityContent.columns.length > 0 
                ? 'Admin' : 'Default'
            }</span>
          </div>
          <div className="mt-1 text-xs">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <span>Features: {communityContent.featured.length}</span>
              <span>Updates: {communityContent.updates.length}</span>
              <span>Events: {communityContent.events.length}</span>
              <span>Columns: {communityContent.columns.length}</span>
            </div>
            <Link to="/admin/upload" className="text-amber-400 hover:text-amber-300">
              Edit in Admin Panel →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Community;