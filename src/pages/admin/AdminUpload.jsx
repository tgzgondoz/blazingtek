import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  Image, 
  FileText, 
  Calendar, 
  Tag, 
  User, 
  Clock, 
  Eye, 
  Heart, 
  Video, 
  Newspaper, 
  Users, 
  Award, 
  Link, 
  X, 
  Check, 
  AlertCircle,
  Save,
  Eye as EyeIcon,
  Trash2,
  Edit3,
  Plus,
  Layout,
  Type,
  Hash,
  Megaphone,
  MessageSquare,
  TrendingUp,
  Star,
  Target,
  BookOpen
} from 'lucide-react';

const AdminUpload = () => {
  // State for active page type
  const [activePage, setActivePage] = useState('community'); // Default to 'community'
  const [activeCommunityTab, setActiveCommunityTab] = useState('featured'); // 'featured', 'updates', 'events', 'columns'
  
  // Form states - simplified
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    excerpt: '',
    description: '',
    summary: '',
    category: 'FEATURE STORIES',
    date: new Date().toISOString().split('T')[0],
    type: 'article',
    readTime: '5 min read',
    author: '',
    authorRole: '',
    views: '',
    likes: '',
    imageUrl: '',
    content: '',
    // Event specific fields
    eventDate: '',
    eventLocation: '',
    eventTime: '',
    registrationLink: '',
    status: 'Upcoming',
    speaker: '',
    // Column specific fields
    columnType: 'opinion',
    tags: []
  });

  // Preview and lists
  const [previewNews, setPreviewNews] = useState([]);
  const [previewCommunity, setPreviewCommunity] = useState({
    featured: [],
    updates: [],
    events: [],
    columns: []
  });
  const [previewEvents, setPreviewEvents] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Gradient colors for image placeholders - MUST match Community component
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

  // Categories that match the Community component
  const communityCategories = [
    { value: 'FEATURE STORIES', label: 'Feature Stories', icon: <Star className="h-4 w-4" /> },
    { value: 'COMMUNITY', label: 'Community', icon: <Users className="h-4 w-4" /> },
    { value: 'UPDATE', label: 'Latest Update', icon: <TrendingUp className="h-4 w-4" /> },
    { value: 'BUSINESS', label: 'Business', icon: <Target className="h-4 w-4" /> },
    { value: 'RESEARCH', label: 'Research', icon: <BookOpen className="h-4 w-4" /> },
    { value: 'UPCOMING EVENTS', label: 'Upcoming Events', icon: <Calendar className="h-4 w-4" /> },
    { value: 'COLUMNS & OPINION', label: 'Columns & Opinion', icon: <MessageSquare className="h-4 w-4" /> }
  ];

  const columnTypes = [
    { value: 'opinion', label: 'Opinion' },
    { value: 'interview', label: 'Interview' },
    { value: 'analysis', label: 'Analysis' },
    { value: 'editorial', label: 'Editorial' },
    { value: 'tutorial', label: 'Tutorial/Guide' }
  ];

  const eventTypes = [
    { value: 'Summit', label: 'Summit' },
    { value: 'Conference', label: 'Conference' },
    { value: 'Webinar', label: 'Webinar' },
    { value: 'Workshop', label: 'Workshop' },
    { value: 'Meetup', label: 'Meetup' },
    { value: 'Hackathon', label: 'Hackathon' },
    { value: 'Forum', label: 'Forum' }
  ];

  // Get category icon for Community component
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

  // Load existing data from localStorage
  useEffect(() => {
    try {
      const savedNews = JSON.parse(localStorage.getItem('blazingtek-news')) || [];
      const savedCommunity = JSON.parse(localStorage.getItem('blazingtek-community')) || {
        featured: [],
        updates: [],
        events: [],
        columns: []
      };
      const savedEvents = JSON.parse(localStorage.getItem('blazingtek-events')) || [];
      
      setPreviewNews(savedNews);
      setPreviewCommunity(savedCommunity);
      setPreviewEvents(savedEvents);
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
      // Initialize with empty arrays if there's an error
      setPreviewNews([]);
      setPreviewCommunity({ featured: [], updates: [], events: [], columns: [] });
      setPreviewEvents([]);
    }
  }, []);

  // Reset form when switching tabs
  useEffect(() => {
    setFormData({
      id: '',
      title: '',
      excerpt: '',
      description: '',
      summary: '',
      category: getDefaultCategory(),
      date: new Date().toISOString().split('T')[0],
      type: 'article',
      readTime: getDefaultReadTime(),
      author: '',
      authorRole: '',
      views: '',
      likes: '',
      imageUrl: '',
      content: '',
      eventDate: '',
      eventLocation: '',
      eventTime: '',
      registrationLink: '',
      status: 'Upcoming',
      speaker: '',
      columnType: 'opinion',
      tags: []
    });
  }, [activePage, activeCommunityTab]);

  // Helper functions
  const getDefaultCategory = () => {
    if (activePage === 'community') {
      switch(activeCommunityTab) {
        case 'featured': return 'FEATURE STORIES';
        case 'updates': return 'UPDATE';
        case 'events': return 'UPCOMING EVENTS';
        case 'columns': return 'COLUMNS & OPINION';
        default: return 'FEATURE STORIES';
      }
    }
    return 'research';
  };

  const getDefaultReadTime = () => {
    return `${Math.floor(Math.random() * 5) + 1} min read`;
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setIsUploading(true);
    
    setTimeout(() => {
      const newImages = files.map(file => ({
        id: Date.now() + Math.random(),
        name: file.name,
        url: URL.createObjectURL(file),
        size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
        type: file.type
      }));
      
      setUploadedImages(prev => [...prev, ...newImages]);
      setIsUploading(false);
      
      // Auto-fill image URL for active form
      if (newImages.length > 0) {
        setFormData(prev => ({ ...prev, imageUrl: newImages[0].url }));
      }
    }, 1000);
  };

  // Handle form changes
  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Generate ID for new content
  const generateId = () => {
    return Date.now() + Math.floor(Math.random() * 1000);
  };

  // Format date for Community component
  const formatDateForCommunity = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch {
      return new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  };

  // Save community content - UPDATED to match Community component structure
  const saveCommunityContent = () => {
    if (!formData.title || !formData.description || !formData.author) {
      setErrorMessage('Please fill in all required fields');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    // Prepare data in the format Community component expects
    const newCommunityItem = {
      id: formData.id || generateId(),
      title: formData.title,
      description: formData.description,
      excerpt: formData.excerpt || formData.description.substring(0, 150) + '...',
      summary: formData.summary || formData.description,
      category: formData.category,
      author: formData.author,
      authorRole: formData.authorRole || 'Contributor',
      readTime: formData.readTime || getDefaultReadTime(),
      imageUrl: formData.imageUrl || getGradientColor(getCurrentContentList().length),
      date: formatDateForCommunity(formData.date),
      content: formData.content,
      // Event specific
      eventDate: formData.eventDate || formData.date,
      eventTime: formData.eventTime,
      eventLocation: formData.eventLocation,
      location: formData.eventLocation,
      status: formData.status,
      type: formData.type,
      speaker: formData.speaker,
      registrationLink: formData.registrationLink,
      // Column specific
      columnType: formData.columnType
    };

    let updatedCommunity = { ...previewCommunity };
    
    // Determine which category to save to based on active tab
    if (activeCommunityTab === 'featured') {
      updatedCommunity.featured = [newCommunityItem, ...previewCommunity.featured];
    } else if (activeCommunityTab === 'updates') {
      updatedCommunity.updates = [newCommunityItem, ...previewCommunity.updates];
    } else if (activeCommunityTab === 'events') {
      updatedCommunity.events = [newCommunityItem, ...previewCommunity.events];
    } else if (activeCommunityTab === 'columns') {
      updatedCommunity.columns = [newCommunityItem, ...previewCommunity.columns];
    }

    setPreviewCommunity(updatedCommunity);
    
    // Save to localStorage - THIS IS CRITICAL for Community component
    localStorage.setItem('blazingtek-community', JSON.stringify(updatedCommunity));
    
    // Dispatch event to notify Community component - THIS IS CRITICAL
    window.dispatchEvent(new Event('blazingtek-content-updated'));
    window.dispatchEvent(new CustomEvent('blazingtek-community-updated', { 
      detail: updatedCommunity 
    }));

    setSuccessMessage('Community content saved successfully! Page will update automatically.');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  // Save news content (for News section)
  const saveNewsContent = () => {
    if (!formData.title || !formData.excerpt || !formData.author) {
      setErrorMessage('Please fill in all required fields');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    const newNews = {
      ...formData,
      id: formData.id || generateId(),
      date: formatDateForCommunity(formData.date),
      views: formData.views || Math.floor(Math.random() * 5000) + 1000,
      likes: formData.likes || Math.floor(Math.random() * 300) + 50
    };

    const updatedNews = [newNews, ...previewNews];
    setPreviewNews(updatedNews);
    localStorage.setItem('blazingtek-news', JSON.stringify(updatedNews));

    setSuccessMessage('News article saved successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  // Save event content (for News section)
  const saveEventContent = () => {
    if (!formData.title || !formData.description || !formData.date) {
      setErrorMessage('Please fill in all required fields for the event');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    const newEvent = {
      id: formData.id || generateId(),
      title: formData.title,
      description: formData.description,
      date: formatDateForCommunity(formData.date),
      time: formData.eventTime,
      location: formData.eventLocation,
      type: formData.type,
      speaker: formData.speaker,
      registrationLink: formData.registrationLink,
      imageUrl: formData.imageUrl || getGradientColor(previewEvents.length),
      status: formData.status || 'Upcoming'
    };

    const updatedEvents = [newEvent, ...previewEvents];
    setPreviewEvents(updatedEvents);
    localStorage.setItem('blazingtek-events', JSON.stringify(updatedEvents));

    setSuccessMessage('Event saved successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  // Handle save based on current tab
  const handleSave = () => {
    if (activePage === 'news') {
      if (activeCommunityTab === 'events') {
        saveEventContent();
      } else {
        saveNewsContent();
      }
    } else {
      saveCommunityContent();
    }
  };

  // Edit existing content
  const editContent = (content) => {
    // Convert date back to input format if needed
    const editData = { ...content };
    
    // Try to parse the date if it's in the Community format
    if (content.date && content.date.includes(',')) {
      try {
        const dateObj = new Date(content.date);
        editData.date = dateObj.toISOString().split('T')[0];
      } catch (e) {
        // Keep original date
      }
    }
    
    setFormData({
      ...formData,
      ...editData,
      summary: content.summary || content.description,
      excerpt: content.excerpt || content.description
    });
  };

  // Delete content
  const deleteContent = (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;

    if (activePage === 'news') {
      if (activeCommunityTab === 'events') {
        const updated = previewEvents.filter(item => item.id !== id);
        setPreviewEvents(updated);
        localStorage.setItem('blazingtek-events', JSON.stringify(updated));
      } else {
        const updated = previewNews.filter(item => item.id !== id);
        setPreviewNews(updated);
        localStorage.setItem('blazingtek-news', JSON.stringify(updated));
      }
    } else {
      let updatedCommunity = { ...previewCommunity };
      
      if (activeCommunityTab === 'featured') {
        updatedCommunity.featured = previewCommunity.featured.filter(item => item.id !== id);
      } else if (activeCommunityTab === 'updates') {
        updatedCommunity.updates = previewCommunity.updates.filter(item => item.id !== id);
      } else if (activeCommunityTab === 'events') {
        updatedCommunity.events = previewCommunity.events.filter(item => item.id !== id);
      } else if (activeCommunityTab === 'columns') {
        updatedCommunity.columns = previewCommunity.columns.filter(item => item.id !== id);
      }
      
      setPreviewCommunity(updatedCommunity);
      localStorage.setItem('blazingtek-community', JSON.stringify(updatedCommunity));
      
      // Notify Community component of deletion
      window.dispatchEvent(new Event('blazingtek-content-updated'));
    }
  };

  // Clear all content
  const clearAllContent = () => {
    if (window.confirm('Are you sure you want to clear all content? This cannot be undone.')) {
      if (activePage === 'news') {
        if (activeCommunityTab === 'events') {
          setPreviewEvents([]);
          localStorage.removeItem('blazingtek-events');
        } else {
          setPreviewNews([]);
          localStorage.removeItem('blazingtek-news');
        }
      } else {
        const updatedCommunity = { featured: [], updates: [], events: [], columns: [] };
        setPreviewCommunity(updatedCommunity);
        localStorage.setItem('blazingtek-community', JSON.stringify(updatedCommunity));
        
        // Notify Community component
        window.dispatchEvent(new Event('blazingtek-content-updated'));
      }
    }
  };

  // Get current content list based on active tab
  const getCurrentContentList = () => {
    if (activePage === 'news') {
      return activeCommunityTab === 'events' ? previewEvents : previewNews;
    } else {
      if (activeCommunityTab === 'featured') return previewCommunity.featured;
      if (activeCommunityTab === 'updates') return previewCommunity.updates;
      if (activeCommunityTab === 'events') return previewCommunity.events;
      if (activeCommunityTab === 'columns') return previewCommunity.columns;
      return previewCommunity.updates;
    }
  };

  // Get content count
  const getContentCount = () => {
    const list = getCurrentContentList();
    return Array.isArray(list) ? list.length : 0;
  };

  // Get current category options
  const getCurrentCategories = () => {
    if (activePage === 'community') {
      return communityCategories;
    }
    return [
      { value: 'research', label: 'Research', icon: <FileText className="h-4 w-4" /> },
      { value: 'events', label: 'Events', icon: <Calendar className="h-4 w-4" /> },
      { value: 'partnerships', label: 'Partnerships', icon: <Users className="h-4 w-4" /> },
      { value: 'awards', label: 'Awards', icon: <Award className="h-4 w-4" /> }
    ];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#0A0F14] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Content Management</h1>
              <p className="text-gray-400">Upload and manage content for BlazingTek website</p>
            </div>
            
            {/* Page Toggle */}
            <div className="flex gap-2 bg-white/10 rounded-lg p-1">
              <button
                onClick={() => setActivePage('news')}
                className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2 ${
                  activePage === 'news' 
                    ? 'bg-white text-[#0A0F14]' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Newspaper className="h-4 w-4" />
                News Page
              </button>
              <button
                onClick={() => setActivePage('community')}
                className={`px-4 py-2 rounded-md font-medium transition-colors flex items-center gap-2 ${
                  activePage === 'community' 
                    ? 'bg-white text-[#0A0F14]' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                <Users className="h-4 w-4" />
                Community Page
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-navigation for tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {activePage === 'news' ? (
              <>
                <button
                  onClick={() => setActiveCommunityTab('updates')}
                  className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeCommunityTab === 'updates'
                      ? 'border-[#0A0F14] text-[#0A0F14]'
                      : 'border-transparent text-gray-600 hover:text-[#0A0F14]'
                  }`}
                >
                  News Articles
                </button>
                <button
                  onClick={() => setActiveCommunityTab('events')}
                  className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                    activeCommunityTab === 'events'
                      ? 'border-[#0A0F14] text-[#0A0F14]'
                      : 'border-transparent text-gray-600 hover:text-[#0A0F14]'
                  }`}
                >
                  <Calendar className="h-4 w-4" />
                  Upcoming Events
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setActiveCommunityTab('featured')}
                  className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                    activeCommunityTab === 'featured'
                      ? 'border-[#0A0F14] text-[#0A0F14]'
                      : 'border-transparent text-gray-600 hover:text-[#0A0F14]'
                  }`}
                >
                  <Star className="h-4 w-4" />
                  Feature Stories
                </button>
                <button
                  onClick={() => setActiveCommunityTab('updates')}
                  className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                    activeCommunityTab === 'updates'
                      ? 'border-[#0A0F14] text-[#0A0F14]'
                      : 'border-transparent text-gray-600 hover:text-[#0A0F14]'
                  }`}
                >
                  <TrendingUp className="h-4 w-4" />
                  Latest Updates
                </button>
                <button
                  onClick={() => setActiveCommunityTab('events')}
                  className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                    activeCommunityTab === 'events'
                      ? 'border-[#0A0F14] text-[#0A0F14]'
                      : 'border-transparent text-gray-600 hover:text-[#0A0F14]'
                  }`}
                >
                  <Calendar className="h-4 w-4" />
                  Upcoming Events
                </button>
                <button
                  onClick={() => setActiveCommunityTab('columns')}
                  className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
                    activeCommunityTab === 'columns'
                      ? 'border-[#0A0F14] text-[#0A0F14]'
                      : 'border-transparent text-gray-600 hover:text-[#0A0F14]'
                  }`}
                >
                  <MessageSquare className="h-4 w-4" />
                  Columns & Opinion
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Success/Error Messages */}
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 bg-green-500/10 border border-green-500/20 rounded-lg p-4"
            >
              <div className="flex items-center gap-3 text-green-500">
                <Check className="h-5 w-5" />
                <span className="font-medium">{successMessage}</span>
              </div>
            </motion.div>
          )}

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 bg-red-500/10 border border-red-500/20 rounded-lg p-4"
            >
              <div className="flex items-center gap-3 text-red-500">
                <AlertCircle className="h-5 w-5" />
                <span className="font-medium">{errorMessage}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Form Section */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#0A0F14]/10">
                    {activePage === 'news' ? 
                      activeCommunityTab === 'events' ? 
                        <Calendar className="h-6 w-6 text-[#0A0F14]" /> :
                        <Newspaper className="h-6 w-6 text-[#0A0F14]" />
                      : activeCommunityTab === 'updates' ? 
                        <TrendingUp className="h-6 w-6 text-[#0A0F14]" /> :
                      activeCommunityTab === 'featured' ?
                        <Star className="h-6 w-6 text-[#0A0F14]" /> :
                      activeCommunityTab === 'events' ?
                        <Calendar className="h-6 w-6 text-[#0A0F14]" /> :
                        <MessageSquare className="h-6 w-6 text-[#0A0F14]" />
                    }
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {activePage === 'news' ? 
                        activeCommunityTab === 'events' ? 'Add Upcoming Event' : 'Add News Article'
                        : activeCommunityTab === 'updates' ? 'Add Latest Update' :
                        activeCommunityTab === 'featured' ? 'Add Feature Story' :
                        activeCommunityTab === 'events' ? 'Add Community Event' : 'Add Column/Opinion'
                      }
                    </h2>
                    <p className="text-gray-600 text-sm">Fill in the details below</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Image Upload */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <div className="flex items-center gap-2">
                      <Image className="h-4 w-4" />
                      Upload Image (Optional)
                    </div>
                  </label>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#0A0F14] transition-colors">
                    <div className="max-w-xs mx-auto">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-sm text-gray-600 mb-2">
                        Drag & drop or click to upload
                      </p>
                      <p className="text-xs text-gray-500 mb-4">
                        Leave empty for automatic gradient background
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="inline-block bg-[#0A0F14] text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-[#0A0F14]/90 transition-colors"
                      >
                        Choose Image
                      </label>
                    </div>
                  </div>

                  {/* Uploaded Images */}
                  {uploadedImages.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      {uploadedImages.map(img => (
                        <div key={img.id} className="relative group">
                          <img 
                            src={img.url} 
                            alt={img.name}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <button
                            onClick={() => handleFormChange('imageUrl', img.url)}
                            className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center"
                          >
                            <EyeIcon className="h-5 w-5 text-white" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Dynamic Form based on active page and tab */}
                <div className="space-y-6">
                  {/* Title Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => handleFormChange('title', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                      placeholder={
                        activePage === 'news' && activeCommunityTab === 'events' 
                          ? "Enter event title" 
                          : "Enter content title"
                      }
                    />
                  </div>

                  {/* Description/Excerpt Field */}
                  {activePage === 'news' && activeCommunityTab !== 'events' ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Excerpt *
                      </label>
                      <textarea
                        value={formData.excerpt}
                        onChange={(e) => handleFormChange('excerpt', e.target.value)}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                        placeholder="Brief summary of the article"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description *
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => handleFormChange('description', e.target.value)}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                        placeholder="Enter description or excerpt"
                      />
                    </div>
                  )}

                  {/* Summary field for featured stories */}
                  {activePage === 'community' && activeCommunityTab === 'featured' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Summary
                      </label>
                      <textarea
                        value={formData.summary}
                        onChange={(e) => handleFormChange('summary', e.target.value)}
                        rows="2"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                        placeholder="Brief summary for featured cards"
                      />
                    </div>
                  )}

                  {/* Category/Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {getCurrentCategories().map(cat => (
                        <button
                          key={cat.value}
                          type="button"
                          onClick={() => handleFormChange('category', cat.value)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
                            formData.category === cat.value
                              ? 'border-[#0A0F14] bg-[#0A0F14]/5'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          {cat.icon || getCategoryIcon(cat.value)}
                          <span className="text-sm">{cat.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Event specific fields */}
                  {(activeCommunityTab === 'events' || (activePage === 'news' && activeCommunityTab === 'events')) && (
                    <>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Event Type
                          </label>
                          <select
                            value={formData.type}
                            onChange={(e) => handleFormChange('type', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                          >
                            {eventTypes.map(type => (
                              <option key={type.value} value={type.value}>
                                {type.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Status
                          </label>
                          <select
                            value={formData.status}
                            onChange={(e) => handleFormChange('status', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                          >
                            <option>Upcoming</option>
                            <option>Registration Open</option>
                            <option>Applications Open</option>
                            <option>Sold Out</option>
                            <option>Ongoing</option>
                            <option>Completed</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Date *
                          </label>
                          <input
                            type="date"
                            value={formData.date}
                            onChange={(e) => handleFormChange('date', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Time
                          </label>
                          <input
                            type="time"
                            value={formData.eventTime}
                            onChange={(e) => handleFormChange('eventTime', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Location
                          </label>
                          <input
                            type="text"
                            value={formData.eventLocation}
                            onChange={(e) => handleFormChange('eventLocation', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                            placeholder="e.g., Accra, Ghana"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Speaker/Host
                          </label>
                          <input
                            type="text"
                            value={formData.speaker}
                            onChange={(e) => handleFormChange('speaker', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                            placeholder="Event speaker or host"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Registration Link
                          </label>
                          <input
                            type="url"
                            value={formData.registrationLink}
                            onChange={(e) => handleFormChange('registrationLink', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                            placeholder="https://example.com/register"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Column specific fields */}
                  {activeCommunityTab === 'columns' && (
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Column Type
                        </label>
                        <select
                          value={formData.columnType}
                          onChange={(e) => handleFormChange('columnType', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                        >
                          {columnTypes.map(type => (
                            <option key={type.value} value={type.value}>
                              {type.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tags (comma separated)
                        </label>
                        <input
                          type="text"
                          value={formData.tags.join(', ')}
                          onChange={(e) => handleFormChange('tags', e.target.value.split(',').map(tag => tag.trim()))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                          placeholder="e.g., AI, Robotics, Innovation"
                        />
                      </div>
                    </div>
                  )}

                  {/* Author and Read Time */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Author *
                      </label>
                      <input
                        type="text"
                        value={formData.author}
                        onChange={(e) => handleFormChange('author', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                        placeholder="Author name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Read Time
                      </label>
                      <input
                        type="text"
                        value={formData.readTime}
                        onChange={(e) => handleFormChange('readTime', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                        placeholder="e.g., 5 min read"
                      />
                    </div>
                  </div>

                  {/* Full Content */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Content (Optional)
                    </label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => handleFormChange('content', e.target.value)}
                      rows="6"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent font-mono text-sm"
                      placeholder="Write the full content here (supports Markdown)..."
                    />
                  </div>
                </div>

                {/* Save Button */}
                <div className="mt-8 flex gap-3">
                  <button
                    onClick={handleSave}
                    className="flex-1 bg-[#0A0F14] text-white hover:bg-[#0A0F14]/90 py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Save className="h-5 w-5" />
                    Save {activeCommunityTab === 'events' ? 'Event' : 'Content'}
                  </button>
                  
                  <button
                    onClick={clearAllContent}
                    className="px-4 py-3 border border-red-300 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    <Trash2 className="h-5 w-5" />
                    Clear All
                  </button>
                </div>

                {/* Integration Note */}
                {activePage === 'community' && (
                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Link className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-blue-800">Integration Note</p>
                        <p className="text-xs text-blue-600 mt-1">
                          Content saved here will automatically appear on the Community page. 
                          The Community component listens for updates in real-time.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Preview & List */}
          <div className="space-y-8">
            {/* Preview Section */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <EyeIcon className="h-5 w-5" />
                  Preview
                </h3>
                <p className="text-gray-600 text-sm">How it will appear on the page</p>
              </div>
              
              <div className="p-6">
                <div className="bg-[#0A0F14] rounded-lg p-4 mb-4">
                  <div className="text-white text-sm font-medium mb-2">
                    {activePage === 'news' ? 
                      activeCommunityTab === 'events' ? 'Upcoming Event Preview' : 'News Article Preview'
                      : activeCommunityTab === 'updates' ? 'Latest Update Preview' :
                      activeCommunityTab === 'featured' ? 'Feature Story Preview' :
                      activeCommunityTab === 'events' ? 'Community Event Preview' : 'Column/Opinion Preview'
                    }
                  </div>
                  <div className="text-gray-400 text-xs">
                    {formData.title || 'No title yet'}
                  </div>
                </div>

                {/* Image Preview or Gradient */}
                <div className="mb-4 rounded-lg overflow-hidden">
                  {formData.imageUrl ? (
                    <img 
                      src={formData.imageUrl}
                      alt="Preview" 
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div 
                      className="w-full h-48"
                      style={{ background: getGradientColor(0) }}
                    >
                      <div className="w-full h-full flex items-center justify-center text-white/80 text-sm">
                        Gradient background (auto-generated)
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  {/* Title Preview */}
                  {formData.title && (
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Title</div>
                      <div className="text-sm font-medium">
                        {formData.title}
                      </div>
                    </div>
                  )}

                  {/* Description/Excerpt Preview */}
                  {(formData.excerpt || formData.description) && (
                    <div>
                      <div className="text-xs text-gray-500 mb-1">
                        {activePage === 'news' && activeCommunityTab === 'events' ? 'Description' : 'Excerpt'}
                      </div>
                      <div className="text-sm text-gray-700 line-clamp-2">
                        {formData.excerpt || formData.description}
                      </div>
                    </div>
                  )}

                  {/* Category Preview */}
                  {formData.category && (
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Category</div>
                      <div className="text-sm">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                          {getCategoryIcon(formData.category)}
                          {formData.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Existing Content List */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Layout className="h-5 w-5" />
                    Existing Content
                    <span className="text-sm font-normal text-gray-500 ml-2">
                      ({getContentCount()} items)
                    </span>
                  </h3>
                </div>
              </div>
              
              <div className="p-6 max-h-96 overflow-y-auto">
                {getContentCount() === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                    <p>No content yet</p>
                    <p className="text-sm mt-1">Start by adding content above</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {getCurrentContentList().map((item, index) => (
                      <div
                        key={item.id || index}
                        className="p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 capitalize">
                                {item.category || item.type || 'Content'}
                              </span>
                              <span className="text-xs text-gray-500">
                                {item.date || 'No date'}
                              </span>
                            </div>
                            <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                              {item.excerpt || item.description || item.summary || 'No description'}
                            </p>
                            {item.author && (
                              <p className="text-xs text-gray-400 mt-1">
                                By {item.author}
                              </p>
                            )}
                          </div>
                          
                          <div className="flex gap-1 ml-2">
                            <button
                              onClick={() => editContent(item)}
                              className="p-1 hover:bg-gray-100 rounded"
                              title="Edit"
                            >
                              <Edit3 className="h-4 w-4 text-gray-500" />
                            </button>
                            <button
                              onClick={() => deleteContent(item.id)}
                              className="p-1 hover:bg-red-50 rounded"
                              title="Delete"
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2">
                    Content is saved to localStorage
                  </div>
                  <button
                    onClick={() => {
                      const data = getCurrentContentList();
                      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = `blazingtek-${activePage}-${activeCommunityTab}.json`;
                      a.click();
                    }}
                    className="text-sm text-[#0A0F14] hover:text-[#0A0F14]/80 font-medium"
                  >
                    Export as JSON
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUpload;