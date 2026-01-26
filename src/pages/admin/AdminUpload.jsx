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
  BookOpen,
  RefreshCw,
  Shield
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
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Simple gradient colors - simplified version
  const getGradientColor = (index = 0) => {
    const gradients = [
      '#667eea',
      '#f5576c',
      '#4facfe',
      '#43e97b',
      '#fa709a',
      '#30cfd0',
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
    { value: 'Robotics Competition', label: 'Robotics Competition' },
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
    const loadData = async () => {
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
        setErrorMessage('Failed to load data from Firebase');
        setTimeout(() => setErrorMessage(''), 3000);
      }
    };

    loadData();
  }, []);

  // Reset form when switching tabs
  useEffect(() => {
    resetForm();
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

  // Reset form function
  const resetForm = () => {
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

  // Refresh data function
  const refreshData = async () => {
    setIsRefreshing(true);
    try {
      // Force reload from Firebase
      const newsSnapshot = await database.ref('news').once('value');
      const communitySnapshot = await database.ref('community').once('value');
      const eventsSnapshot = await database.ref('events').once('value');
      
      // Update state with fresh data
      const newsData = newsSnapshot.val();
      const communityData = communitySnapshot.val();
      const eventsData = eventsSnapshot.val();
      
      setPreviewNews(newsData ? Object.keys(newsData).map(key => ({ id: key, ...newsData[key] })) : []);
      setPreviewCommunity({
        featured: communityData?.featured ? Object.keys(communityData.featured).map(key => ({ id: key, ...communityData.featured[key] })) : [],
        updates: communityData?.updates ? Object.keys(communityData.updates).map(key => ({ id: key, ...communityData.updates[key] })) : [],
        events: communityData?.events ? Object.keys(communityData.events).map(key => ({ id: key, ...communityData.events[key] })) : [],
        columns: communityData?.columns ? Object.keys(communityData.columns).map(key => ({ id: key, ...communityData.columns[key] })) : []
      });
      setPreviewEvents(eventsData ? Object.keys(eventsData).map(key => ({ id: key, ...eventsData[key] })) : []);
      
      setSuccessMessage('Data refreshed successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error('Error refreshing data:', error);
      setErrorMessage('Failed to refresh data');
      setTimeout(() => setErrorMessage(''), 3000);
    } finally {
      setIsRefreshing(false);
    }
  };

  // Save community content
  const saveCommunityContent = async (isUpdate = false) => {
    if (!formData.title || !formData.description || !formData.author) {
      setErrorMessage('Please fill in all required fields');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    try {
      setIsUploading(true);

      const communityItem = {
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
        eventDate: formData.eventDate || formData.date,
        eventTime: formData.eventTime,
        eventLocation: formData.eventLocation,
        location: formData.eventLocation,
        status: formData.status,
        type: formData.type,
        speaker: formData.speaker,
        registrationLink: formData.registrationLink,
        columnType: formData.columnType,
        tags: formData.tags,
        updatedAt: new Date().toISOString()
      };

      // Add createdAt for new items
      if (!isUpdate) {
        communityItem.createdAt = new Date().toISOString();
      }

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

      if (isUpdate && formData.id) {
        // Update existing item
        await database.ref(`${firebasePath}/${formData.id}`).update(communityItem);
        setSuccessMessage('Community content updated successfully!');
      } else {
        // Create new item
        const newItemRef = database.ref(firebasePath).push();
        await newItemRef.set(communityItem);
        setSuccessMessage('Community content saved successfully!');
      }

      setTimeout(() => setSuccessMessage(''), 3000);
      resetForm();

    } catch (error) {
      console.error('Error saving to Firebase:', error);
      setErrorMessage('Error saving content. Please try again.');
      setTimeout(() => setErrorMessage(''), 3000);
    } finally {
      setIsUploading(false);
    }
  };

  // Save news content
  const saveNewsContent = async (isUpdate = false) => {
    if (!formData.title || !formData.excerpt || !formData.author) {
      setErrorMessage('Please fill in all required fields');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    try {
      setIsUploading(true);

      const newsItem = {
        title: formData.title,
        excerpt: formData.excerpt,
        description: formData.description || formData.excerpt,
        category: formData.category,
        author: formData.author,
        authorRole: formData.authorRole || 'Contributor',
        readTime: formData.readTime || getDefaultReadTime(),
        imageUrl: formData.imageUrl || getGradientColor(previewNews.length),
        date: formatDateForCommunity(formData.date),
        content: formData.content,
        views: formData.views || Math.floor(Math.random() * 5000) + 1000,
        likes: formData.likes || Math.floor(Math.random() * 300) + 50,
        updatedAt: new Date().toISOString()
      };

      if (!isUpdate) {
        newsItem.createdAt = new Date().toISOString();
      }

      if (isUpdate && formData.id) {
        await database.ref(`news/${formData.id}`).update(newsItem);
        setSuccessMessage('News article updated successfully!');
      } else {
        const newNewsRef = database.ref('news').push();
        await newNewsRef.set(newsItem);
        setSuccessMessage('News article saved successfully!');
      }

      setTimeout(() => setSuccessMessage(''), 3000);
      resetForm();

    } catch (error) {
      console.error('Error saving news to Firebase:', error);
      setErrorMessage('Error saving news article. Please try again.');
      setTimeout(() => setErrorMessage(''), 3000);
    } finally {
      setIsUploading(false);
    }
  };

  // Save event content
  const saveEventContent = async (isUpdate = false) => {
    if (!formData.title || !formData.description || !formData.date) {
      setErrorMessage('Please fill in all required fields for the event');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }

    try {
      setIsUploading(true);

      const eventItem = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        date: formatDateForCommunity(formData.date),
        time: formData.eventTime,
        location: formData.eventLocation,
        type: formData.type,
        speaker: formData.speaker,
        registrationLink: formData.registrationLink,
        imageUrl: formData.imageUrl || getGradientColor(previewEvents.length),
        status: formData.status || 'Upcoming',
        updatedAt: new Date().toISOString()
      };

      if (!isUpdate) {
        eventItem.createdAt = new Date().toISOString();
      }

      if (activePage === 'news' && activeCommunityTab === 'events') {
        if (isUpdate && formData.id) {
          await database.ref(`events/${formData.id}`).update(eventItem);
          setSuccessMessage('Event updated successfully!');
        } else {
          const newEventRef = database.ref('events').push();
          await newEventRef.set(eventItem);
          setSuccessMessage('Event saved successfully!');
        }
      } else {
        // Community events
        if (isUpdate && formData.id) {
          await database.ref(`community/events/${formData.id}`).update(eventItem);
          setSuccessMessage('Community event updated successfully!');
        } else {
          const newEventRef = database.ref('community/events').push();
          await newEventRef.set(eventItem);
          setSuccessMessage('Community event saved successfully!');
        }
      }

      setTimeout(() => setSuccessMessage(''), 3000);
      resetForm();

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
    const isUpdate = !!formData.id;
    
    if (activePage === 'news') {
      if (activeCommunityTab === 'events') {
        saveEventContent(isUpdate);
      } else {
        saveNewsContent(isUpdate);
      }
    } else {
      saveCommunityContent(isUpdate);
    }
  };

  // Edit existing content
  const editContent = (content) => {
    const editData = { ...content };
    
    // Parse date for form input
    if (content.date && content.date.includes(',')) {
      try {
        const dateObj = new Date(content.date);
        editData.date = dateObj.toISOString().split('T')[0];
      } catch (e) {
        // Keep original date
      }
    }
    
    setFormData({
      ...editData,
      id: content.id,
      summary: content.summary || content.description,
      excerpt: content.excerpt || content.description,
      imageUrl: content.imageUrl || '',
      tags: content.tags || [],
      eventDate: content.eventDate || content.date || '',
      eventLocation: content.eventLocation || content.location || '',
      eventTime: content.eventTime || content.time || '',
      registrationLink: content.registrationLink || '',
      status: content.status || 'Upcoming',
      speaker: content.speaker || '',
      columnType: content.columnType || 'opinion'
    });

    // Scroll to form
    document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Delete content from Firebase
  const deleteContent = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item? This action cannot be undone.')) return;

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
        
        // If deleting the item being edited, reset form
        if (formData.id === id) {
          resetForm();
        }
      }
    } catch (error) {
      console.error('Error deleting from Firebase:', error);
      setErrorMessage('Error deleting content. Please try again.');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  // Clear all content from Firebase
  const clearAllContent = async () => {
    if (!window.confirm('⚠️ DANGER: Are you absolutely sure you want to clear ALL content? This action is PERMANENT and cannot be undone!')) {
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
        resetForm();
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

  // Cancel edit
  const cancelEdit = () => {
    resetForm();
    setSuccessMessage('Edit cancelled');
    setTimeout(() => setSuccessMessage(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0A0F14] to-[#1a2530] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3">
                <Shield className="h-8 w-8" />
                Content Management System
              </h1>
              <p className="text-gray-300">Upload and manage content for BlazingTek website</p>
            </div>
            
            {/* Page Toggle */}
            <div className="flex gap-2 bg-white/10 rounded-lg p-1 backdrop-blur-sm">
              <button
                onClick={() => setActivePage('news')}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                  activePage === 'news' 
                    ? 'bg-white text-[#0A0F14] transform scale-105' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Newspaper className="h-4 w-4" />
                News Page
              </button>
              <button
                onClick={() => setActivePage('community')}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 flex items-center gap-2 ${
                  activePage === 'community' 
                    ? 'bg-white text-[#0A0F14] transform scale-105' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
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
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto">
            {activePage === 'news' ? (
              <>
                <button
                  onClick={() => setActiveCommunityTab('updates')}
                  className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-all duration-300 ${
                    activeCommunityTab === 'updates'
                      ? 'border-[#0A0F14] text-[#0A0F14] bg-gray-50'
                      : 'border-transparent text-gray-600 hover:text-[#0A0F14] hover:bg-gray-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Newspaper className="h-4 w-4" />
                    News Articles
                  </span>
                </button>
                <button
                  onClick={() => setActiveCommunityTab('events')}
                  className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-all duration-300 flex items-center gap-2 ${
                    activeCommunityTab === 'events'
                      ? 'border-[#0A0F14] text-[#0A0F14] bg-gray-50'
                      : 'border-transparent text-gray-600 hover:text-[#0A0F14] hover:bg-gray-50'
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
                  className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-all duration-300 flex items-center gap-2 ${
                    activeCommunityTab === 'featured'
                      ? 'border-[#0A0F14] text-[#0A0F14] bg-gray-50'
                      : 'border-transparent text-gray-600 hover:text-[#0A0F14] hover:bg-gray-50'
                  }`}
                >
                  <Star className="h-4 w-4" />
                  Feature Stories
                </button>
                <button
                  onClick={() => setActiveCommunityTab('updates')}
                  className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-all duration-300 flex items-center gap-2 ${
                    activeCommunityTab === 'updates'
                      ? 'border-[#0A0F14] text-[#0A0F14] bg-gray-50'
                      : 'border-transparent text-gray-600 hover:text-[#0A0F14] hover:bg-gray-50'
                  }`}
                >
                  <TrendingUp className="h-4 w-4" />
                  Latest Updates
                </button>
                <button
                  onClick={() => setActiveCommunityTab('events')}
                  className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-all duration-300 flex items-center gap-2 ${
                    activeCommunityTab === 'events'
                      ? 'border-[#0A0F14] text-[#0A0F14] bg-gray-50'
                      : 'border-transparent text-gray-600 hover:text-[#0A0F14] hover:bg-gray-50'
                  }`}
                >
                  <Calendar className="h-4 w-4" />
                  Community Events
                </button>
                <button
                  onClick={() => setActiveCommunityTab('columns')}
                  className={`px-4 py-3 font-medium whitespace-nowrap border-b-2 transition-all duration-300 flex items-center gap-2 ${
                    activeCommunityTab === 'columns'
                      ? 'border-[#0A0F14] text-[#0A0F14] bg-gray-50'
                      : 'border-transparent text-gray-600 hover:text-[#0A0F14] hover:bg-gray-50'
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
              className="mb-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-4"
            >
              <div className="flex items-center gap-3 text-green-600">
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
              className="mb-6 bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-500/20 rounded-xl p-4"
            >
              <div className="flex items-center gap-3 text-red-600">
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
            <div id="form-section" className="bg-white rounded-2xl border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#0A0F14]/10 to-[#0A0F14]/5 border border-gray-200">
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
                        {formData.id ? 'Edit' : 'Add'} {
                          activePage === 'news' ? 
                            activeCommunityTab === 'events' ? 'Upcoming Event' : 'News Article'
                            : activeCommunityTab === 'updates' ? 'Latest Update' :
                            activeCommunityTab === 'featured' ? 'Feature Story' :
                            activeCommunityTab === 'events' ? 'Community Event' : 'Column/Opinion'
                        }
                      </h2>
                      <p className="text-gray-600 text-sm">
                        {formData.id ? 'Update existing content' : 'Fill in the details below'}
                      </p>
                    </div>
                  </div>
                  
                  {formData.id && (
                    <button
                      onClick={cancelEdit}
                      className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>
                
                {formData.id && (
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center gap-2 text-yellow-800">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">Editing Mode: {formData.title}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* Image URL Input Section - Simplified */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    <div className="flex items-center gap-2">
                      <Image className="h-4 w-4" />
                      Image URL (Optional)
                    </div>
                  </label>
                  
                  <div className="space-y-4">
                    <input
                      type="url"
                      value={formData.imageUrl}
                      onChange={(e) => handleDirectImageUrl(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent transition-all duration-300"
                      placeholder="Paste direct image URL..."
                    />
                    
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
                      <div className="flex items-start gap-3">
                        <Link className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-blue-900 mb-1">Simple Image Upload</p>
                          <p className="text-xs text-blue-700 mb-2">
                            Use direct image URLs. If left empty, a gradient color will be used.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Image Preview */}
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2">Preview:</div>
                      <div className="relative w-full h-64 rounded-xl overflow-hidden border border-gray-300">
                        {formData.imageUrl ? (
                          <>
                            <div className="w-full h-full bg-gray-900">
                              <img 
                                src={formData.imageUrl}
                                alt="Preview" 
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                  e.target.parentElement.innerHTML = `
                                    <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-rose-100">
                                      <div class="text-red-600 text-sm text-center p-4">
                                        <AlertCircle class="h-8 w-8 mx-auto mb-2" />
                                        <p class="font-medium">Failed to load image</p>
                                        <p class="text-xs mt-1">Using gradient color instead</p>
                                      </div>
                                    </div>
                                  `;
                                }}
                              />
                            </div>
                            <button
                              onClick={() => handleDirectImageUrl('')}
                              className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                              title="Remove image"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </>
                        ) : (
                          <div 
                            className="w-full h-full flex flex-col items-center justify-center"
                            style={{ backgroundColor: getGradientColor(0) }}
                          >
                            <div className="text-white/90 text-center p-4">
                              <Image className="h-12 w-12 mx-auto mb-3 opacity-80" />
                              <p className="text-sm font-medium">Color background</p>
                              <p className="text-xs mt-1 opacity-80">Will be used if no image URL is provided</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Form Fields */}
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent transition-all duration-300"
                      placeholder={
                        activePage === 'news' && activeCommunityTab === 'events' 
                          ? "Enter event title..." 
                          : "Enter content title..."
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent transition-all duration-300"
                        placeholder="Brief summary of the article..."
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent transition-all duration-300"
                        placeholder="Enter description or excerpt..."
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent transition-all duration-300"
                        placeholder="Brief summary for featured cards..."
                      />
                    </div>
                  )}

                  {/* Category/Type Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {getCurrentCategories().map(cat => (
                        <button
                          key={cat.value}
                          type="button"
                          onClick={() => handleFormChange('category', cat.value)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300 ${
                            formData.category === cat.value
                              ? 'border-[#0A0F14] bg-gradient-to-r from-[#0A0F14]/5 to-[#0A0F14]/10 transform scale-[1.02]'
                              : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                          }`}
                        >
                          <div className={`p-2 rounded-lg ${
                            formData.category === cat.value 
                              ? 'bg-[#0A0F14] text-white' 
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {cat.icon || getCategoryIcon(cat.value)}
                          </div>
                          <span className="text-sm font-medium">{cat.label}</span>
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
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
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent"
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
                      rows="8"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A0F14] focus:border-transparent font-mono text-sm"
                      placeholder="Write the full content here (supports Markdown)..."
                    />
                  </div>
                </div>

                {/* Save Button */}
                <div className="mt-8 flex gap-3">
                  <button
                    onClick={handleSave}
                    disabled={isUploading}
                    className={`flex-1 ${isUploading ? 'bg-gray-400' : 'bg-gradient-to-r from-[#0A0F14] to-[#1a2530] hover:from-[#1a2530] hover:to-[#0A0F14]'} text-white py-4 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3`}
                  >
                    {isUploading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        {formData.id ? 'Updating...' : 'Saving...'}
                      </>
                    ) : (
                      <>
                        <Save className="h-5 w-5" />
                        {formData.id ? 'Update' : 'Save'} {activeCommunityTab === 'events' ? 'Event' : 'Content'}
                      </>
                    )}
                  </button>
                  
                  <button
                    onClick={refreshData}
                    disabled={isRefreshing}
                    className="px-4 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl font-medium transition-colors flex items-center gap-2"
                  >
                    <RefreshCw className={`h-5 w-5 ${isRefreshing ? 'animate-spin' : ''}`} />
                    Refresh
                  </button>
                  
                  <button
                    onClick={clearAllContent}
                    className="px-4 py-4 border border-red-300 text-red-600 hover:bg-red-50 rounded-xl font-medium transition-colors flex items-center gap-2"
                  >
                    <Trash2 className="h-5 w-5" />
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Preview & List */}
          <div className="space-y-8">
            {/* Preview Section */}
            <div className="bg-white rounded-2xl border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <EyeIcon className="h-5 w-5" />
                  Live Preview
                </h3>
                <p className="text-gray-600 text-sm">How it will appear on the website</p>
              </div>
              
              <div className="p-6">
                <div className="bg-gradient-to-r from-[#0A0F14] to-[#1a2530] rounded-xl p-5 mb-5">
                  <div className="text-white text-sm font-medium mb-2 flex items-center gap-2">
                    {formData.id ? '🔄 Editing Preview' : '✨ New Content Preview'}
                  </div>
                  <div className="text-gray-300 text-sm font-semibold truncate">
                    {formData.title || 'No title yet'}
                  </div>
                </div>

                {/* Image Preview */}
                <div className="mb-5 rounded-xl overflow-hidden">
                  {formData.imageUrl ? (
                    <div className="w-full h-48 bg-gray-900 relative">
                      <img 
                        src={formData.imageUrl}
                        alt="Preview" 
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `
                            <div class="w-full h-48 flex items-center justify-center" style="background-color: ${getGradientColor(0)}">
                              <div class="text-white/80 text-sm text-center p-4">
                                <p>Image failed to load</p>
                                <p class="text-xs mt-1">Using color instead</p>
                              </div>
                            </div>
                          `;
                        }}
                      />
                    </div>
                  ) : (
                    <div 
                      className="w-full h-48"
                      style={{ backgroundColor: getGradientColor(0) }}
                    >
                      <div className="w-full h-full flex items-center justify-center text-white/80 text-sm">
                        <div className="text-center p-4">
                          <Image className="h-8 w-8 mx-auto mb-2 opacity-70" />
                          <p>Color background</p>
                          <p className="text-xs mt-1 opacity-70">(auto-generated)</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {/* Title Preview */}
                  {formData.title && (
                    <div>
                      <div className="text-xs text-gray-500 mb-1 font-medium">Title</div>
                      <div className="text-sm font-semibold text-gray-900 bg-gray-50 p-3 rounded-lg">
                        {formData.title}
                      </div>
                    </div>
                  )}

                  {/* Description/Excerpt Preview */}
                  {(formData.excerpt || formData.description) && (
                    <div>
                      <div className="text-xs text-gray-500 mb-1 font-medium">
                        {activePage === 'news' && activeCommunityTab === 'events' ? 'Description' : 'Excerpt'}
                      </div>
                      <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg leading-relaxed">
                        {formData.excerpt || formData.description}
                      </div>
                    </div>
                  )}

                  {/* Category Preview */}
                  {formData.category && (
                    <div>
                      <div className="text-xs text-gray-500 mb-1 font-medium">Category</div>
                      <div className="text-sm">
                        <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200">
                          {getCategoryIcon(formData.category)}
                          <span className="font-medium">{formData.category}</span>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Existing Content List */}
            <div className="bg-white rounded-2xl border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <Layout className="h-5 w-5" />
                      Existing Content
                      <span className="text-sm font-normal text-gray-500 ml-2">
                        ({getContentCount()} items)
                      </span>
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {activePage === 'news' ? 'News & Events' : 'Community Content'}
                    </p>
                  </div>
                  <button
                    onClick={refreshData}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    title="Refresh list"
                  >
                    <RefreshCw className={`h-4 w-4 text-gray-500 ${isRefreshing ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>
              
              <div className="p-6 max-h-[500px] overflow-y-auto">
                {getContentCount() === 0 ? (
                  <div className="text-center py-10 text-gray-500">
                    <FileText className="h-16 w-16 mx-auto mb-4 text-gray-300" />
                    <p className="font-medium text-gray-600">No content yet</p>
                    <p className="text-sm mt-1 text-gray-500">Start by adding content above</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {getCurrentContentList().map((item, index) => (
                      <motion.div
                        key={item.id || index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-4 border rounded-xl transition-all duration-300 ${
                          formData.id === item.id
                            ? 'border-[#0A0F14] bg-gradient-to-r from-[#0A0F14]/5 to-[#0A0F14]/10'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`text-xs font-medium px-2 py-1 rounded-lg capitalize ${
                                formData.id === item.id
                                  ? 'bg-[#0A0F14] text-white'
                                  : 'bg-gray-100 text-gray-700'
                              }`}>
                                {item.category || item.type || 'Content'}
                              </span>
                              <span className="text-xs text-gray-500">
                                {item.date ? new Date(item.date).toLocaleDateString() : 'No date'}
                              </span>
                              {formData.id === item.id && (
                                <span className="text-xs font-medium px-2 py-1 rounded-lg bg-yellow-100 text-yellow-800">
                                  Editing
                                </span>
                              )}
                            </div>
                            <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2">
                              {item.title}
                            </h4>
                            <p className="text-xs text-gray-500 line-clamp-1 mb-2">
                              {item.excerpt || item.description || item.summary || 'No description'}
                            </p>
                            {item.author && (
                              <div className="flex items-center gap-1 text-xs text-gray-400">
                                <User className="h-3 w-3" />
                                <span>By {item.author}</span>
                              </div>
                            )}
                          </div>
                          
                          <div className="flex gap-1 ml-3">
                            <button
                              onClick={() => editContent(item)}
                              className={`p-2 rounded-lg transition-colors ${
                                formData.id === item.id
                                  ? 'bg-[#0A0F14] text-white'
                                  : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
                              }`}
                              title={formData.id === item.id ? "Currently editing" : "Edit"}
                            >
                              <Edit3 className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => deleteContent(item.id)}
                              className="p-2 rounded-lg hover:bg-red-50 text-gray-500 hover:text-red-600 transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 rounded-b-2xl">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Live Firebase Connection</span>
                  </div>
                  <div className="text-xs text-gray-600">
                    Real-time updates enabled • Auto-sync every 30s
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