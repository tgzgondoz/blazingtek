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

// Import Firebase compatibility version
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZCgcI4IpitZSAz116DtSaWp31vz3bGC4",
  authDomain: "blazingtek-c56e7.firebaseapp.com",
  databaseURL: "https://blazingtek-c56e7-default-rtdb.firebaseio.com",
  projectId: "blazingtek-c56e7",
  storageBucket: "blazingtek-c56e7.firebasestorage.app",
  messagingSenderId: "176023582058",
  appId: "1:176023582058:web:c12f2be2a6195fa5cca113",
  measurementId: "G-S8YYNS28WR"
};

// Initialize Firebase (only if no app exists)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();

const AdminUpload = () => {
  // State for active page type
  const [activePage, setActivePage] = useState('community');
  const [activeCommunityTab, setActiveCommunityTab] = useState('featured');
  
  // Form states
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
    imageUrl: '', // This will store the external URL (Google Drive, etc.)
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
  const [isUploading, setIsUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Gradient colors for image placeholders
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

  // Categories
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

  // Load existing data from Firebase
  useEffect(() => {
    try {
      // Load news
      const newsRef = database.ref('news');
      newsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const newsArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }));
          setPreviewNews(newsArray);
        } else {
          setPreviewNews([]);
        }
      });

      // Load community data
      const communityRef = database.ref('community');
      communityRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setPreviewCommunity({
            featured: data.featured ? Object.keys(data.featured).map(key => ({
              id: key,
              ...data.featured[key]
            })) : [],
            updates: data.updates ? Object.keys(data.updates).map(key => ({
              id: key,
              ...data.updates[key]
            })) : [],
            events: data.events ? Object.keys(data.events).map(key => ({
              id: key,
              ...data.events[key]
            })) : [],
            columns: data.columns ? Object.keys(data.columns).map(key => ({
              id: key,
              ...data.columns[key]
            })) : []
          });
        } else {
          setPreviewCommunity({ featured: [], updates: [], events: [], columns: [] });
        }
      });

      // Load events
      const eventsRef = database.ref('events');
      eventsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const eventsArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }));
          setPreviewEvents(eventsArray);
        } else {
          setPreviewEvents([]);
        }
      });

      return () => {
        newsRef.off();
        communityRef.off();
        eventsRef.off();
      };
    } catch (error) {
      console.error('Error loading data from Firebase:', error);
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
      imageUrl: '', // Reset image URL
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

  // Handle form changes
  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Format date for display
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

  // Convert Google Drive URL to direct image URL
  const convertGoogleDriveUrl = (url) => {
    if (!url) return url;
    
    // If it's already a direct image URL, return as is
    if (url.includes('https://drive.google.com/file/d/')) {
      // Convert Google Drive file URL to direct image URL
      const fileIdMatch = url.match(/\/d\/([^/]+)/);
      if (fileIdMatch) {
        const fileId = fileIdMatch[1];
        return `https://drive.google.com/uc?export=view&id=${fileId}`;
      }
    }
    
    // If it's a Google Drive view URL
    if (url.includes('https://drive.google.com/uc?id=')) {
      return url;
    }
    
    // Return original URL for other image hosts
    return url;
  };

  // Save community content with external image URL
  const saveCommunityContent = async () => {
    if (!formData.title || !formData.description || !formData.author) {
      setErrorMessage('Please fill in all required fields');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    try {
      setIsUploading(true);

      // Prepare data with external image URL
      const newCommunityItem = {
        title: formData.title,
        description: formData.description,
        excerpt: formData.excerpt || formData.description.substring(0, 150) + '...',
        summary: formData.summary || formData.description,
        category: formData.category,
        author: formData.author,
        authorRole: formData.authorRole || 'Contributor',
        readTime: formData.readTime || getDefaultReadTime(),
        // Use external URL if provided, otherwise use gradient
        imageUrl: formData.imageUrl ? convertGoogleDriveUrl(formData.imageUrl) : getGradientColor(getCurrentContentList().length),
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
        columnType: formData.columnType,
        tags: formData.tags,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      // Determine the Firebase path
      let firebasePath;
      if (activeCommunityTab === 'featured') {
        firebasePath = 'community/featured';
      } else if (activeCommunityTab === 'updates') {
        firebasePath = 'community/updates';
      } else if (activeCommunityTab === 'events') {
        firebasePath = 'community/events';
      } else if (activeCommunityTab === 'columns') {
        firebasePath = 'community/columns';
      }

      // Save to Firebase
      const newItemRef = database.ref(firebasePath).push();
      await newItemRef.set(newCommunityItem);

      setSuccessMessage('Community content saved to Firebase successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
      
      // Clear form after successful save
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
        imageUrl: '', // Clear image URL
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

    } catch (error) {
      console.error('Error saving to Firebase:', error);
      setErrorMessage('Error saving content. Please try again.');
      setTimeout(() => setErrorMessage(''), 3000);
    } finally {
      setIsUploading(false);
    }
  };

  // Save news content with external image URL
  const saveNewsContent = async () => {
    if (!formData.title || !formData.excerpt || !formData.author) {
      setErrorMessage('Please fill in all required fields');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    try {
      setIsUploading(true);

      const newNews = {
        title: formData.title,
        excerpt: formData.excerpt,
        description: formData.description || formData.excerpt,
        category: formData.category,
        author: formData.author,
        authorRole: formData.authorRole || 'Contributor',
        readTime: formData.readTime || getDefaultReadTime(),
        // Use external URL if provided, otherwise use gradient
        imageUrl: formData.imageUrl ? convertGoogleDriveUrl(formData.imageUrl) : getGradientColor(previewNews.length),
        date: formatDateForCommunity(formData.date),
        content: formData.content,
        views: formData.views || Math.floor(Math.random() * 5000) + 1000,
        likes: formData.likes || Math.floor(Math.random() * 300) + 50,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const newNewsRef = database.ref('news').push();
      await newNewsRef.set(newNews);

      setSuccessMessage('News article saved to Firebase successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
      
      // Clear form
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
        imageUrl: '', // Clear image URL
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

    } catch (error) {
      console.error('Error saving news to Firebase:', error);
      setErrorMessage('Error saving news article. Please try again.');
      setTimeout(() => setErrorMessage(''), 3000);
    } finally {
      setIsUploading(false);
    }
  };

  // Save event content with external image URL
  const saveEventContent = async () => {
    if (!formData.title || !formData.description || !formData.date) {
      setErrorMessage('Please fill in all required fields for the event');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    try {
      setIsUploading(true);

      const newEvent = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        date: formatDateForCommunity(formData.date),
        time: formData.eventTime,
        location: formData.eventLocation,
        type: formData.type,
        speaker: formData.speaker,
        registrationLink: formData.registrationLink,
        // Use external URL if provided, otherwise use gradient
        imageUrl: formData.imageUrl ? convertGoogleDriveUrl(formData.imageUrl) : getGradientColor(previewEvents.length),
        status: formData.status || 'Upcoming',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const newEventRef = database.ref('events').push();
      await newEventRef.set(newEvent);

      setSuccessMessage('Event saved to Firebase successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
      
      // Clear form
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
        imageUrl: '', // Clear image URL
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

    } catch (error) {
      console.error('Error saving event to Firebase:', error);
      setErrorMessage('Error saving event. Please try again.');
      setTimeout(() => setErrorMessage(''), 3000);
    } finally {
      setIsUploading(false);
    }
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
      id: content.id,
      summary: content.summary || content.description,
      excerpt: content.excerpt || content.description,
      // Keep the existing image URL
      imageUrl: content.imageUrl || ''
    });
  };

  // Delete content from Firebase
  const deleteContent = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;

    try {
      let firebasePath;
      
      if (activePage === 'news') {
        if (activeCommunityTab === 'events') {
          firebasePath = `events/${id}`;
        } else {
          firebasePath = `news/${id}`;
        }
      } else {
        if (activeCommunityTab === 'featured') {
          firebasePath = `community/featured/${id}`;
        } else if (activeCommunityTab === 'updates') {
          firebasePath = `community/updates/${id}`;
        } else if (activeCommunityTab === 'events') {
          firebasePath = `community/events/${id}`;
        } else if (activeCommunityTab === 'columns') {
          firebasePath = `community/columns/${id}`;
        }
      }

      if (firebasePath) {
        await database.ref(firebasePath).remove();
        setSuccessMessage('Content deleted successfully!');
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    } catch (error) {
      console.error('Error deleting from Firebase:', error);
      setErrorMessage('Error deleting content. Please try again.');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  // Clear all content from Firebase
  const clearAllContent = async () => {
    if (!window.confirm('Are you sure you want to clear all content? This cannot be undone.')) {
      return;
    }

    try {
      let firebasePath;
      
      if (activePage === 'news') {
        if (activeCommunityTab === 'events') {
          firebasePath = 'events';
        } else {
          firebasePath = 'news';
        }
      } else {
        if (activeCommunityTab === 'featured') {
          firebasePath = 'community/featured';
        } else if (activeCommunityTab === 'updates') {
          firebasePath = 'community/updates';
        } else if (activeCommunityTab === 'events') {
          firebasePath = 'community/events';
        } else if (activeCommunityTab === 'columns') {
          firebasePath = 'community/columns';
        }
      }

      if (firebasePath) {
        await database.ref(firebasePath).remove();
        setSuccessMessage('All content cleared successfully!');
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    } catch (error) {
      console.error('Error clearing from Firebase:', error);
      setErrorMessage('Error clearing content. Please try again.');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  // Get current content list
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

  // Handle direct URL input for image
  const handleDirectImageUrl = (url) => {
    setFormData(prev => ({ ...prev, imageUrl: url }));
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
                {/* Image URL Input Section - SIMPLIFIED */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <div className="flex items-center gap-2">
                      <Image className="h-4 w-4" />
                      Image URL (Optional)
                    </div>
                  </label>
                  
                  <div className="space-y-4">
                    {/* Direct URL Input */}
                    <div>
                      <input
                        type="url"
                        value={formData.imageUrl}
                        onChange={(e) => handleDirectImageUrl(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
                        placeholder="Enter image URL from Google Drive or other image hosting service"
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Supports: Google Drive (will be converted), direct image URLs (JPG, PNG, GIF), video URLs (MP4, WebM)
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Leave empty for automatic gradient background
                      </p>
                    </div>

                    {/* Google Drive URL Example */}
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-xs font-medium text-blue-800 mb-1">Google Drive URL Example:</p>
                      <p className="text-xs text-blue-600 font-mono">
                        https://drive.google.com/file/d/YOUR_FILE_ID/view
                      </p>
                    </div>

                    {/* Image Preview */}
                    {formData.imageUrl && (
                      <div className="mt-4">
                        <div className="text-sm font-medium text-gray-700 mb-2">Preview:</div>
                        <div className="relative w-full h-48 rounded-lg overflow-hidden border border-gray-300">
                          {/* Check if it's a video URL */}
                          {formData.imageUrl.match(/\.(mp4|webm|avi|mov)$/i) ? (
                            <video
                              src={formData.imageUrl}
                              className="w-full h-full object-cover"
                              controls
                              muted
                            />
                          ) : (
                            <img 
                              src={convertGoogleDriveUrl(formData.imageUrl)}
                              alt="Preview" 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = `
                                  <div class="w-full h-48 flex items-center justify-center bg-red-50">
                                    <div class="text-red-500 text-sm text-center">
                                      <p>Failed to load image/video</p>
                                      <p class="text-xs mt-1">Check URL format or try a direct image link</p>
                                    </div>
                                  </div>
                                `;
                              }}
                            />
                          )}
                          <button
                            onClick={() => handleDirectImageUrl('')}
                            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                            title="Remove image"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    )}

                    {/* No Image Option */}
                    {!formData.imageUrl && (
                      <div className="mt-4">
                        <div className="text-sm font-medium text-gray-700 mb-2">No image selected:</div>
                        <div className="w-full h-48 rounded-lg overflow-hidden">
                          <div 
                            className="w-full h-full flex items-center justify-center"
                            style={{ background: getGradientColor(0) }}
                          >
                            <div className="text-white/80 text-sm text-center">
                              <p>Automatic gradient background</p>
                              <p className="text-xs mt-1">Will be used if no image URL is provided</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Rest of the form remains the same */}
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
                    disabled={isUploading}
                    className={`flex-1 ${isUploading ? 'bg-gray-400' : 'bg-[#0A0F14] hover:bg-[#0A0F14]/90'} text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2`}
                  >
                    {isUploading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="h-5 w-5" />
                        Save {activeCommunityTab === 'events' ? 'Event' : 'Content'}
                      </>
                    )}
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
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Link className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-blue-800">External Image URLs</p>
                      <p className="text-xs text-blue-600 mt-1">
                        Paste image URLs from Google Drive or other image hosting services.
                        Google Drive URLs are automatically converted for proper display.
                        Leave empty for automatic gradient backgrounds.
                      </p>
                    </div>
                  </div>
                </div>
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

                {/* Image Preview */}
                <div className="mb-4 rounded-lg overflow-hidden">
                  {formData.imageUrl ? (
                    <div className="w-full h-48 bg-gray-900 relative">
                      {formData.imageUrl.match(/\.(mp4|webm|avi|mov)$/i) ? (
                        <video
                          src={formData.imageUrl}
                          className="absolute inset-0 w-full h-full object-cover"
                          controls
                          muted
                        />
                      ) : (
                        <img 
                          src={convertGoogleDriveUrl(formData.imageUrl)}
                          alt="Preview" 
                          className="absolute inset-0 w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `
                              <div class="w-full h-48 flex items-center justify-center" style="background: ${getGradientColor(0)}">
                                <div class="text-white/80 text-sm text-center">
                                  <p>Image failed to load</p>
                                  <p class="text-xs mt-1">Using gradient instead</p>
                                </div>
                              </div>
                            `;
                          }}
                        />
                      )}
                    </div>
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
                    Content is saved to Firebase Realtime Database
                  </div>
                  <div className="text-xs text-green-600 mb-2">
                    ✓ Real-time updates enabled
                  </div>
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