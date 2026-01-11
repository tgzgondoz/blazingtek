import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  Image, 
  FileText, 
  Calendar, 
  Tag, 
  User, 
  Globe, 
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
  Star
} from 'lucide-react';

const AdminUpload = () => {
  // State for active page type
  const [activePage, setActivePage] = useState('news'); // 'news' or 'community'
  const [activeCommunityTab, setActiveCommunityTab] = useState('featured'); // 'featured', 'updates', 'events', 'columns'
  
  // Form states
  const [newsForm, setNewsForm] = useState({
    id: '',
    title: '',
    excerpt: '',
    category: 'research',
    date: new Date().toISOString().split('T')[0],
    type: 'article',
    readTime: '',
    author: '',
    authorRole: '',
    views: '',
    likes: '',
    imageUrl: '',
    content: '',
    // Upcoming Events specific fields
    eventDate: '',
    eventLocation: '',
    eventTime: '',
    registrationLink: '',
    isEvent: false // Flag to indicate if this is an event
  });

  const [communityForm, setCommunityForm] = useState({
    id: '',
    title: '',
    description: '',
    category: 'LATEST UPDATES', // Default to latest updates
    author: '',
    authorRole: '',
    readTime: '',
    imageUrl: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    // Event specific fields (for UPCOMING EVENTS tab)
    eventDate: '',
    eventLocation: '',
    eventTime: '',
    registrationLink: '',
    eventStatus: 'Registration Open',
    // Column specific fields
    columnType: 'opinion', // 'opinion', 'analysis', 'interview'
    tags: [] // For categorizing columns
  });

  // Upcoming Events specific form (for News section)
  const [eventForm, setEventForm] = useState({
    id: '',
    title: '',
    description: '',
    date: new Date().toISOString().split('T')[0],
    time: '',
    location: '',
    type: 'Conference',
    speaker: '',
    registrationLink: '',
    imageUrl: '',
    status: 'Upcoming'
  });

  // Preview and lists
  const [previewNews, setPreviewNews] = useState([]);
  const [previewCommunity, setPreviewCommunity] = useState({
    featured: [], // FEATURE STORIES
    updates: [], // LATEST UPDATES
    events: [], // UPCOMING EVENTS
    columns: [] // COLUMNS & OPINION
  });
  const [previewEvents, setPreviewEvents] = useState([]); // Upcoming Events for News page
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Categories
  const newsCategories = [
    { value: 'research', label: 'Research', icon: <FileText className="h-4 w-4" /> },
    { value: 'events', label: 'Events', icon: <Calendar className="h-4 w-4" /> },
    { value: 'partnerships', label: 'Partnerships', icon: <Users className="h-4 w-4" /> },
    { value: 'awards', label: 'Awards', icon: <Award className="h-4 w-4" /> }
  ];

  const communityCategories = [
    { value: 'LATEST UPDATES', label: 'Latest Updates', color: 'bg-blue-500', icon: <TrendingUp className="h-3 w-3" /> },
    { value: 'FEATURE STORIES', label: 'Feature Stories', color: 'bg-purple-500', icon: <Star className="h-3 w-3" /> },
    { value: 'UPCOMING EVENTS', label: 'Upcoming Events', color: 'bg-green-500', icon: <Calendar className="h-3 w-3" /> },
    { value: 'COLUMNS & OPINION', label: 'Columns & Opinion', color: 'bg-yellow-500', icon: <MessageSquare className="h-3 w-3" /> }
  ];

  const columnTypes = [
    { value: 'opinion', label: 'Opinion Piece' },
    { value: 'analysis', label: 'Industry Analysis' },
    { value: 'interview', label: 'Expert Interview' },
    { value: 'tutorial', label: 'Tutorial/Guide' }
  ];

  const eventTypes = [
    { value: 'Conference', label: 'Conference' },
    { value: 'Webinar', label: 'Webinar' },
    { value: 'Workshop', label: 'Workshop' },
    { value: 'Meetup', label: 'Meetup' },
    { value: 'Hackathon', label: 'Hackathon' },
    { value: 'Summit', label: 'Summit' }
  ];

  // Load existing data from localStorage
  useEffect(() => {
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
  }, []);

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
        if (activePage === 'news') {
          setNewsForm(prev => ({ ...prev, imageUrl: newImages[0].url }));
          setEventForm(prev => ({ ...prev, imageUrl: newImages[0].url }));
        } else {
          setCommunityForm(prev => ({ ...prev, imageUrl: newImages[0].url }));
        }
      }
    }, 1000);
  };

  // Handle form changes
  const handleNewsChange = (field, value) => {
    setNewsForm(prev => ({ ...prev, [field]: value }));
  };

  const handleCommunityChange = (field, value) => {
    setCommunityForm(prev => ({ ...prev, [field]: value }));
  };

  const handleEventChange = (field, value) => {
    setEventForm(prev => ({ ...prev, [field]: value }));
  };

  // Generate ID for new content
  const generateId = () => {
    return 'id-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
  };

  // Save news content
  const saveNewsContent = () => {
    if (newsForm.isEvent) {
      // Save as event
      saveEventContent();
      return;
    }

    if (!newsForm.title || !newsForm.excerpt || !newsForm.author) {
      setErrorMessage('Please fill in all required fields');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    const newNews = {
      ...newsForm,
      id: newsForm.id || generateId(),
      date: newsForm.date || new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      views: newsForm.views || Math.floor(Math.random() * 5000) + 1000,
      likes: newsForm.likes || Math.floor(Math.random() * 300) + 50,
      isEvent: false
    };

    const updatedNews = [newNews, ...previewNews];
    setPreviewNews(updatedNews);
    localStorage.setItem('blazingtek-news', JSON.stringify(updatedNews));

    // Reset form
    setNewsForm({
      id: '',
      title: '',
      excerpt: '',
      category: 'research',
      date: new Date().toISOString().split('T')[0],
      type: 'article',
      readTime: '',
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
      isEvent: false
    });

    setSuccessMessage('News article saved successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  // Save event content (for News section)
  const saveEventContent = () => {
    if (!eventForm.title || !eventForm.description || !eventForm.date) {
      setErrorMessage('Please fill in all required fields for the event');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    const newEvent = {
      ...eventForm,
      id: eventForm.id || generateId(),
      date: eventForm.date || new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    };

    const updatedEvents = [newEvent, ...previewEvents];
    setPreviewEvents(updatedEvents);
    localStorage.setItem('blazingtek-events', JSON.stringify(updatedEvents));

    // Reset event form
    setEventForm({
      id: '',
      title: '',
      description: '',
      date: new Date().toISOString().split('T')[0],
      time: '',
      location: '',
      type: 'Conference',
      speaker: '',
      registrationLink: '',
      imageUrl: '',
      status: 'Upcoming'
    });

    setSuccessMessage('Event saved successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  // Save community content
  const saveCommunityContent = () => {
    if (!communityForm.title || !communityForm.description || !communityForm.author) {
      setErrorMessage('Please fill in all required fields');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    const newCommunity = {
      ...communityForm,
      id: communityForm.id || generateId(),
      readTime: communityForm.readTime || `${Math.floor(Math.random() * 5) + 1} min read`
    };

    // Determine which category to save to based on active tab
    let updatedCommunity = { ...previewCommunity };
    switch(activeCommunityTab) {
      case 'featured':
        updatedCommunity.featured = [newCommunity, ...previewCommunity.featured];
        break;
      case 'updates':
        updatedCommunity.updates = [newCommunity, ...previewCommunity.updates];
        break;
      case 'events':
        updatedCommunity.events = [newCommunity, ...previewCommunity.events];
        break;
      case 'columns':
        updatedCommunity.columns = [newCommunity, ...previewCommunity.columns];
        break;
    }

    setPreviewCommunity(updatedCommunity);
    localStorage.setItem('blazingtek-community', JSON.stringify(updatedCommunity));

    // Reset form
    setCommunityForm({
      id: '',
      title: '',
      description: '',
      category: activeCommunityTab === 'events' ? 'UPCOMING EVENTS' : 
                activeCommunityTab === 'columns' ? 'COLUMNS & OPINION' :
                activeCommunityTab === 'featured' ? 'FEATURE STORIES' : 'LATEST UPDATES',
      author: '',
      authorRole: '',
      readTime: '',
      imageUrl: '',
      content: '',
      date: new Date().toISOString().split('T')[0],
      eventDate: '',
      eventLocation: '',
      eventTime: '',
      registrationLink: '',
      eventStatus: 'Registration Open',
      columnType: 'opinion',
      tags: []
    });

    setSuccessMessage('Community content saved successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  // Edit existing content
  const editContent = (content, type, subType = null) => {
    if (type === 'news') {
      setNewsForm(content);
      setActivePage('news');
    } else if (type === 'event') {
      setEventForm(content);
      setActivePage('news');
    } else {
      setCommunityForm(content);
      setActivePage('community');
      if (subType) setActiveCommunityTab(subType);
    }
  };

  // Delete content
  const deleteContent = (id, type, subType = null) => {
    if (type === 'news') {
      const updated = previewNews.filter(item => item.id !== id);
      setPreviewNews(updated);
      localStorage.setItem('blazingtek-news', JSON.stringify(updated));
    } else if (type === 'event') {
      const updated = previewEvents.filter(item => item.id !== id);
      setPreviewEvents(updated);
      localStorage.setItem('blazingtek-events', JSON.stringify(updated));
    } else {
      let updatedCommunity = { ...previewCommunity };
      switch(subType) {
        case 'featured':
          updatedCommunity.featured = previewCommunity.featured.filter(item => item.id !== id);
          break;
        case 'updates':
          updatedCommunity.updates = previewCommunity.updates.filter(item => item.id !== id);
          break;
        case 'events':
          updatedCommunity.events = previewCommunity.events.filter(item => item.id !== id);
          break;
        case 'columns':
          updatedCommunity.columns = previewCommunity.columns.filter(item => item.id !== id);
          break;
      }
      setPreviewCommunity(updatedCommunity);
      localStorage.setItem('blazingtek-community', JSON.stringify(updatedCommunity));
    }
  };

  // Clear all content
  const clearAllContent = () => {
    if (window.confirm('Are you sure you want to clear all content? This cannot be undone.')) {
      if (activePage === 'news') {
        setPreviewNews([]);
        setPreviewEvents([]);
        localStorage.removeItem('blazingtek-news');
        localStorage.removeItem('blazingtek-events');
      } else {
        setPreviewCommunity({
          featured: [],
          updates: [],
          events: [],
          columns: []
        });
        localStorage.removeItem('blazingtek-community');
      }
    }
  };

  // Get current content list based on active tab
  const getCurrentContentList = () => {
    if (activePage === 'news') {
      return activeCommunityTab === 'events' ? previewEvents : previewNews;
    } else {
      switch(activeCommunityTab) {
        case 'featured': return previewCommunity.featured;
        case 'updates': return previewCommunity.updates;
        case 'events': return previewCommunity.events;
        case 'columns': return previewCommunity.columns;
        default: return previewCommunity.updates;
      }
    }
  };

  // Get content count
  const getContentCount = () => {
    if (activePage === 'news') {
      if (activeCommunityTab === 'events') {
        return previewEvents.length;
      }
      return previewNews.length;
    } else {
      switch(activeCommunityTab) {
        case 'featured': return previewCommunity.featured.length;
        case 'updates': return previewCommunity.updates.length;
        case 'events': return previewCommunity.events.length;
        case 'columns': return previewCommunity.columns.length;
        default: return 0;
      }
    }
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
                onClick={() => {
                  setActivePage('news');
                  setActiveCommunityTab('updates'); // Default to news articles
                }}
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
                onClick={() => {
                  setActivePage('community');
                  setActiveCommunityTab('updates');
                }}
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
            <motion.div
              key={`${activePage}-${activeCommunityTab}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200"
            >
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
                      Upload Image
                    </div>
                  </label>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-[#0A0F14] transition-colors">
                    <div className="max-w-xs mx-auto">
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-sm text-gray-600 mb-2">
                        Drag & drop or click to upload
                      </p>
                      <p className="text-xs text-gray-500 mb-4">
                        Recommended: 1200x630px • Max 5MB
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
                            onClick={() => {
                              if (activePage === 'news') {
                                if (activeCommunityTab === 'events') {
                                  setEventForm(prev => ({ ...prev, imageUrl: img.url }));
                                } else {
                                  setNewsForm(prev => ({ ...prev, imageUrl: img.url }));
                                }
                              } else {
                                setCommunityForm(prev => ({ ...prev, imageUrl: img.url }));
                              }
                            }}
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
                {activePage === 'news' ? (
                  activeCommunityTab === 'events' ? (
                    // Event Form for News Section
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Event Title *
                        </label>
                        <input
                          type="text"
                          value={eventForm.title}
                          onChange={(e) => handleEventChange('title', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                          placeholder="Enter event title"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Event Description *
                        </label>
                        <textarea
                          value={eventForm.description}
                          onChange={(e) => handleEventChange('description', e.target.value)}
                          rows="3"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                          placeholder="Describe the event"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Event Type
                          </label>
                          <select
                            value={eventForm.type}
                            onChange={(e) => handleEventChange('type', e.target.value)}
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
                            value={eventForm.status}
                            onChange={(e) => handleEventChange('status', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                          >
                            <option>Upcoming</option>
                            <option>Registration Open</option>
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
                            value={eventForm.date}
                            onChange={(e) => handleEventChange('date', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Time
                          </label>
                          <input
                            type="time"
                            value={eventForm.time}
                            onChange={(e) => handleEventChange('time', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Location
                          </label>
                          <input
                            type="text"
                            value={eventForm.location}
                            onChange={(e) => handleEventChange('location', e.target.value)}
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
                            value={eventForm.speaker}
                            onChange={(e) => handleEventChange('speaker', e.target.value)}
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
                            value={eventForm.registrationLink}
                            onChange={(e) => handleEventChange('registrationLink', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                            placeholder="https://example.com/register"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    // News Article Form
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Title *
                          </label>
                          <input
                            type="text"
                            value={newsForm.title}
                            onChange={(e) => handleNewsChange('title', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                            placeholder="Enter article title"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category *
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {newsCategories.map(cat => (
                              <button
                                key={cat.value}
                                type="button"
                                onClick={() => handleNewsChange('category', cat.value)}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
                                  newsForm.category === cat.value
                                    ? 'border-[#0A0F14] bg-[#0A0F14]/5'
                                    : 'border-gray-300 hover:border-gray-400'
                                }`}
                              >
                                {cat.icon}
                                <span className="text-sm">{cat.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Excerpt *
                        </label>
                        <textarea
                          value={newsForm.excerpt}
                          onChange={(e) => handleNewsChange('excerpt', e.target.value)}
                          rows="3"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                          placeholder="Brief summary of the article"
                        />
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Read Time
                          </label>
                          <div className="flex items-center">
                            <input
                              type="text"
                              value={newsForm.readTime}
                              onChange={(e) => handleNewsChange('readTime', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                              placeholder="e.g., 5 min read"
                            />
                            <Clock className="h-5 w-5 text-gray-400 ml-2" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Date
                          </label>
                          <input
                            type="date"
                            value={newsForm.date}
                            onChange={(e) => handleNewsChange('date', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Views (Optional)
                          </label>
                          <input
                            type="number"
                            value={newsForm.views}
                            onChange={(e) => handleNewsChange('views', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                            placeholder="e.g., 1500"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Author *
                          </label>
                          <input
                            type="text"
                            value={newsForm.author}
                            onChange={(e) => handleNewsChange('author', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                            placeholder="Author name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Author Role
                          </label>
                          <input
                            type="text"
                            value={newsForm.authorRole}
                            onChange={(e) => handleNewsChange('authorRole', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                            placeholder="e.g., Lead AI Researcher"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Content
                        </label>
                        <textarea
                          value={newsForm.content}
                          onChange={(e) => handleNewsChange('content', e.target.value)}
                          rows="6"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent font-mono text-sm"
                          placeholder="Write the full article content here..."
                        />
                      </div>
                    </div>
                  )
                ) : (
                  // Community Form
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title *
                      </label>
                      <input
                        type="text"
                        value={communityForm.title}
                        onChange={(e) => handleCommunityChange('title', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                        placeholder="Enter content title"
                      />
                    </div>

                    {activeCommunityTab === 'updates' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Category
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {communityCategories.map(cat => (
                            <button
                              key={cat.value}
                              type="button"
                              onClick={() => handleCommunityChange('category', cat.value)}
                              className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${
                                communityForm.category === cat.value
                                  ? 'border-[#0A0F14] bg-[#0A0F14]/5'
                                  : 'border-gray-300 hover:border-gray-400'
                              }`}
                            >
                              <div className={`h-2 w-2 rounded-full ${cat.color}`}></div>
                              <span className="text-sm">{cat.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeCommunityTab === 'events' && (
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Event Date
                          </label>
                          <input
                            type="date"
                            value={communityForm.eventDate}
                            onChange={(e) => handleCommunityChange('eventDate', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Event Time
                          </label>
                          <input
                            type="time"
                            value={communityForm.eventTime}
                            onChange={(e) => handleCommunityChange('eventTime', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Location
                          </label>
                          <input
                            type="text"
                            value={communityForm.eventLocation}
                            onChange={(e) => handleCommunityChange('eventLocation', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                            placeholder="e.g., Accra, Ghana"
                          />
                        </div>
                      </div>
                    )}

                    {activeCommunityTab === 'columns' && (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Column Type
                          </label>
                          <select
                            value={communityForm.columnType}
                            onChange={(e) => handleCommunityChange('columnType', e.target.value)}
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
                            value={communityForm.tags.join(', ')}
                            onChange={(e) => handleCommunityChange('tags', e.target.value.split(',').map(tag => tag.trim()))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                            placeholder="e.g., AI, Robotics, Innovation"
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description *
                      </label>
                      <textarea
                        value={communityForm.description}
                        onChange={(e) => handleCommunityChange('description', e.target.value)}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                        placeholder="Enter description or excerpt"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Author *
                        </label>
                        <input
                          type="text"
                          value={communityForm.author}
                          onChange={(e) => handleCommunityChange('author', e.target.value)}
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
                          value={communityForm.readTime}
                          onChange={(e) => handleCommunityChange('readTime', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                          placeholder="e.g., 5 min read"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Content
                      </label>
                      <textarea
                        value={communityForm.content}
                        onChange={(e) => handleCommunityChange('content', e.target.value)}
                        rows="6"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent font-mono text-sm"
                        placeholder="Write the full content here..."
                      />
                    </div>

                    {activeCommunityTab === 'events' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Registration Link
                        </label>
                        <input
                          type="url"
                          value={communityForm.registrationLink}
                          onChange={(e) => handleCommunityChange('registrationLink', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                          placeholder="https://example.com/register"
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Save Button */}
                <div className="mt-8 flex gap-3">
                  <button
                    onClick={() => {
                      if (activePage === 'news') {
                        if (activeCommunityTab === 'events') {
                          saveEventContent();
                        } else {
                          saveNewsContent();
                        }
                      } else {
                        saveCommunityContent();
                      }
                    }}
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
              </div>
            </motion.div>
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
                    {activePage === 'news' ? 
                      activeCommunityTab === 'events' ? 
                        eventForm.title || 'No event title yet' : 
                        newsForm.title || 'No title yet'
                      : communityForm.title || 'No title yet'
                    }
                  </div>
                </div>

                {/* Image Preview */}
                {(activePage === 'news' && activeCommunityTab === 'events' && eventForm.imageUrl) || 
                 (activePage === 'news' && activeCommunityTab !== 'events' && newsForm.imageUrl) ||
                 (activePage === 'community' && communityForm.imageUrl) ? (
                  <div className="mb-4">
                    <img 
                      src={
                        activePage === 'news' ? 
                          activeCommunityTab === 'events' ? eventForm.imageUrl : newsForm.imageUrl
                          : communityForm.imageUrl
                      } 
                      alt="Preview" 
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                ) : null}

                <div className="space-y-3">
                  {/* Title Preview */}
                  {((activePage === 'news' && activeCommunityTab !== 'events' && newsForm.title) ||
                    (activePage === 'news' && activeCommunityTab === 'events' && eventForm.title) ||
                    (activePage === 'community' && communityForm.title)) && (
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Title</div>
                      <div className="text-sm font-medium">
                        {activePage === 'news' ? 
                          activeCommunityTab === 'events' ? eventForm.title : newsForm.title
                          : communityForm.title
                        }
                      </div>
                    </div>
                  )}

                  {/* Description/Excerpt Preview */}
                  {((activePage === 'news' && activeCommunityTab !== 'events' && newsForm.excerpt) ||
                    (activePage === 'news' && activeCommunityTab === 'events' && eventForm.description) ||
                    (activePage === 'community' && communityForm.description)) && (
                    <div>
                      <div className="text-xs text-gray-500 mb-1">
                        {activePage === 'news' && activeCommunityTab === 'events' ? 'Description' : 'Excerpt'}
                      </div>
                      <div className="text-sm text-gray-700 line-clamp-2">
                        {activePage === 'news' ? 
                          activeCommunityTab === 'events' ? eventForm.description : newsForm.excerpt
                          : communityForm.description
                        }
                      </div>
                    </div>
                  )}

                  {/* Category Preview */}
                  {((activePage === 'news' && activeCommunityTab !== 'events' && newsForm.category) ||
                    (activePage === 'community' && communityForm.category)) && (
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Category</div>
                      <div className="text-sm">
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100">
                          <Tag className="h-3 w-3" />
                          {activePage === 'news' ? newsForm.category : communityForm.category}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Event Details Preview */}
                  {activeCommunityTab === 'events' && (
                    <>
                      {eventForm.date && (
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Event Date</div>
                          <div className="text-sm text-gray-700">{eventForm.date}</div>
                        </div>
                      )}
                      {eventForm.location && (
                        <div>
                          <div className="text-xs text-gray-500 mb-1">Location</div>
                          <div className="text-sm text-gray-700">{eventForm.location}</div>
                        </div>
                      )}
                    </>
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
                      ({activeCommunityTab === 'events' ? 'Events' : 
                        activeCommunityTab === 'featured' ? 'Featured' : 
                        activeCommunityTab === 'columns' ? 'Columns' : 'Updates'})
                    </span>
                  </h3>
                  <span className="text-sm text-gray-500">
                    {getContentCount()} items
                  </span>
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
                    {getCurrentContentList().map((item) => (
                      <div
                        key={item.id}
                        className="p-3 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 capitalize">
                                {item.category || item.type || 'Content'}
                              </span>
                              <span className="text-xs text-gray-500">
                                {item.date || new Date().toLocaleDateString()}
                              </span>
                            </div>
                            <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                              {item.excerpt || item.description}
                            </p>
                          </div>
                          
                          <div className="flex gap-1 ml-2">
                            <button
                              onClick={() => editContent(item, 
                                activePage === 'news' && activeCommunityTab === 'events' ? 'event' : activePage,
                                activeCommunityTab
                              )}
                              className="p-1 hover:bg-gray-100 rounded"
                              title="Edit"
                            >
                              <Edit3 className="h-4 w-4 text-gray-500" />
                            </button>
                            <button
                              onClick={() => deleteContent(item.id, 
                                activePage === 'news' && activeCommunityTab === 'events' ? 'event' : activePage,
                                activeCommunityTab
                              )}
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
                      a.download = `blazingtek-${activePage}-${activeCommunityTab}-${new Date().toISOString().split('T')[0]}.json`;
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