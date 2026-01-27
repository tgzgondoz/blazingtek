// VideoLibrary.jsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Video,
  Play,
  Pause,
  Download,
  Clock,
  Calendar,
  Tag,
  Eye,
  Heart,
  ChevronLeft,
  Search,
  Filter,
  Grid,
  List,
  ExternalLink,
  Home,
  ArrowLeft,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX
} from 'lucide-react';

// Import only the actual video files you have
import vid1 from '../assets/videos/vid1.mp4';
import vid2 from '../assets/videos/vid2.mp4';
import vid3 from '../assets/videos/vid3.mp4';

// Fallback thumbnails
import s1 from '../assets/s1.jpg';
import s from '../assets/s.jpg';
import slide1 from '../assets/slide1.jpg';

const VideoLibrary = () => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Research Breakthrough Demo",
      description: "Watch the full demonstration of our latest research breakthrough in artificial intelligence and machine learning applications.",
      videoSrc: vid1,
      thumbnail: s1,
      duration: "3:45",
      category: "Research",
      views: "12.4K",
      likes: "856",
      uploadDate: "2024-03-15",
      fileSize: "48MB",
      tags: ["AI", "Machine Learning", "Research", "Demo"]
    },
    {
      id: 2,
      title: "Technology Conference Highlights",
      description: "Complete coverage of our recent technology conference featuring keynote speakers, workshops, and networking sessions.",
      videoSrc: vid2,
      thumbnail: s,
      duration: "5:20",
      category: "Events",
      views: "8.7K",
      likes: "432",
      uploadDate: "2024-03-10",
      fileSize: "72MB",
      tags: ["Conference", "Technology", "Highlights", "Events"]
    },
    {
      id: 3,
      title: "Team Collaboration Showcase",
      description: "Behind-the-scenes look at our team's collaborative projects, innovation processes, and development workflows.",
      videoSrc: vid3,
      thumbnail: slide1,
      duration: "4:15",
      category: "Team",
      views: "5.9K",
      likes: "321",
      uploadDate: "2024-03-05",
      fileSize: "56MB",
      tags: ["Teamwork", "Collaboration", "Development", "Process"]
    }
  ]);

  const [filteredVideos, setFilteredVideos] = useState(videos);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [playingVideo, setPlayingVideo] = useState(null);
  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const [mutedVideos, setMutedVideos] = useState({});
  const [viewMode, setViewMode] = useState('grid');
  const videoRefs = useRef([]);
  const containerRefs = useRef([]);

  const categories = [
    { id: 'all', name: 'All Videos', count: videos.length },
    { id: 'Research', name: 'Research', count: videos.filter(v => v.category === 'Research').length },
    { id: 'Events', name: 'Events', count: videos.filter(v => v.category === 'Events').length },
    { id: 'Team', name: 'Team', count: videos.filter(v => v.category === 'Team').length },
  ];

  // Handle video events
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
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

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setFullscreenVideo(null);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  // Filter videos based on search and category
  useEffect(() => {
    let results = videos;
    
    if (selectedCategory !== 'all') {
      results = results.filter(video => video.category === selectedCategory);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(video => 
        video.title.toLowerCase().includes(term) ||
        video.description.toLowerCase().includes(term) ||
        video.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    setFilteredVideos(results);
  }, [searchTerm, selectedCategory, videos]);

  const handleVideoClick = (index) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      // Pause currently playing video
      if (playingVideo !== null && playingVideo !== index) {
        const currentVideo = videoRefs.current[playingVideo];
        if (currentVideo) {
          currentVideo.pause();
        }
      }
      
      // Play/pause clicked video
      if (videoElement.paused) {
        videoElement.play();
        setPlayingVideo(index);
      } else {
        videoElement.pause();
      }
    }
  };

  const toggleFullscreen = async (index) => {
    const container = containerRefs.current[index];
    const videoElement = videoRefs.current[index];
    
    if (!container || !videoElement) return;

    try {
      if (fullscreenVideo === index) {
        // Exit fullscreen
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          await document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          await document.msExitFullscreen();
        }
        setFullscreenVideo(null);
      } else {
        // Enter fullscreen
        if (container.requestFullscreen) {
          await container.requestFullscreen();
        } else if (container.webkitRequestFullscreen) {
          await container.webkitRequestFullscreen();
        } else if (container.mozRequestFullScreen) {
          await container.mozRequestFullScreen();
        } else if (container.msRequestFullscreen) {
          await container.msRequestFullscreen();
        }
        setFullscreenVideo(index);
        
        // Ensure video plays in fullscreen
        if (videoElement.paused) {
          videoElement.play();
          setPlayingVideo(index);
        }
      }
    } catch (error) {
      console.error('Fullscreen error:', error);
    }
  };

  const toggleMute = (index) => {
    const videoElement = videoRefs.current[index];
    if (videoElement) {
      videoElement.muted = !videoElement.muted;
      setMutedVideos(prev => ({
        ...prev,
        [index]: videoElement.muted
      }));
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleDownload = (videoSrc, title) => {
    const link = document.createElement('a');
    link.href = videoSrc;
    link.download = `${title.replace(/\s+/g, '_')}.mp4`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Fullscreen Video Player Component
  const FullscreenPlayer = ({ video, index }) => {
    if (fullscreenVideo !== index) return null;

    return (
      <div className="fixed inset-0 z-50 bg-black">
        <div className="relative w-full h-full flex items-center justify-center">
          <video
            ref={el => {
              videoRefs.current[index] = el;
              if (el && fullscreenVideo === index) {
                el.play().catch(console.error);
              }
            }}
            src={video.videoSrc}
            className="w-full h-full object-contain"
            controls
            autoPlay
            muted={mutedVideos[index]}
          />
          
          {/* Custom Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleVideoClick(index)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    {playingVideo === index ? (
                      <Pause className="h-6 w-6 text-white" />
                    ) : (
                      <Play className="h-6 w-6 text-white" />
                    )}
                  </button>
                  
                  <button
                    onClick={() => toggleMute(index)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    {mutedVideos[index] ? (
                      <VolumeX className="h-6 w-6 text-white" />
                    ) : (
                      <Volume2 className="h-6 w-6 text-white" />
                    )}
                  </button>
                  
                  <span className="text-white font-medium">
                    {video.duration}
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleFullscreen(index)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <Minimize2 className="h-6 w-6 text-white" />
                  </button>
                  
                  <button
                    onClick={() => handleDownload(video.videoSrc, video.title)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  >
                    <Download className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Close Button */}
          <button
            onClick={() => toggleFullscreen(index)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <span className="text-white text-sm">Press ESC to exit</span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0F14] text-white">
      {/* Fullscreen Video Players */}
      {videos.map((video, index) => (
        <FullscreenPlayer key={`fullscreen-${video.id}`} video={video} index={index} />
      ))}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0A0F14]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/news"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to News</span>
              </Link>
              <Link
                to="/"
                className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Home className="h-5 w-5" />
                <span>Home</span>
              </Link>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white text-white placeholder-gray-500 w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
              <Video className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Video Library</h1>
              <p className="text-gray-400 text-lg">
                Watch our videos in fullscreen mode for the best experience
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-400">
              <span className="text-white font-semibold">{filteredVideos.length}</span> video{filteredVideos.length !== 1 ? 's' : ''} available
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Click the fullscreen button </span>
              <Maximize2 className="h-4 w-4" />
              <span> for immersive viewing</span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 border ${
                  selectedCategory === category.id
                    ? 'bg-white text-[#0A0F14] border-white'
                    : 'bg-white/5 text-gray-300 hover:text-white border-white/10 hover:border-white/20'
                }`}
              >
                {category.name}
                <span className="ml-2 px-2 py-0.5 rounded text-xs bg-white/10">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-16">
            <Video className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No videos found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                ref={el => containerRefs.current[index] = el}
                className="relative bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full hover:scale-[1.02]"
              >
                {/* Video Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden rounded-t-xl cursor-pointer group">
                  <video
                    ref={el => videoRefs.current[index] = el}
                    src={video.videoSrc}
                    className="w-full h-full object-cover"
                    muted={mutedVideos[index]}
                    loop
                    playsInline
                    poster={video.thumbnail}
                    onClick={() => handleVideoClick(index)}
                  />
                  
                  {/* Video Overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/40 transition-all duration-300"
                    onClick={() => handleVideoClick(index)}
                  />
                  
                  {/* Play/Pause Button */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => handleVideoClick(index)}
                  >
                    <div className={`transition-all duration-300 ${playingVideo === index ? 'opacity-0' : 'opacity-100'} group-hover:scale-110`}>
                      <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors">
                        {playingVideo === index ? (
                          <Pause className="h-8 w-8" />
                        ) : (
                          <Play className="h-8 w-8" />
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Controls Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVideoClick(index);
                          }}
                          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                        >
                          {playingVideo === index ? (
                            <Pause className="h-4 w-4 text-white" />
                          ) : (
                            <Play className="h-4 w-4 text-white" />
                          )}
                        </button>
                        
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMute(index);
                          }}
                          className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                        >
                          {mutedVideos[index] ? (
                            <VolumeX className="h-4 w-4 text-white" />
                          ) : (
                            <Volume2 className="h-4 w-4 text-white" />
                          )}
                        </button>
                        
                        <span className="text-white text-sm font-medium">
                          {video.duration}
                        </span>
                      </div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFullscreen(index);
                        }}
                        className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      >
                        <Maximize2 className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Video Duration */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-xs font-medium">
                    {video.duration}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs font-medium">
                    {video.category}
                  </div>
                </div>
                
                {/* Video Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-white line-clamp-2">
                      {video.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {video.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {video.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Video Metadata */}
                  <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(video.uploadDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {video.views} views
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {video.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {video.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="h-3 w-3" />
                      {video.fileSize}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleVideoClick(index)}
                        className="px-4 py-2 bg-white text-[#0A0F14] hover:bg-gray-100 rounded-lg font-medium transition-colors flex items-center gap-2"
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
                      
                      <button
                        onClick={() => handleDownload(video.videoSrc, video.title)}
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleFullscreen(index)}
                        className="p-2 rounded bg-white/5 hover:bg-white/10 transition-colors"
                        title="Fullscreen"
                      >
                        <Maximize2 className="h-4 w-4" />
                      </button>
                      
                      <a
                        href={video.videoSrc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-2 rounded hover:bg-white/5"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

       
      </main>
    </div>
  );
};

export default VideoLibrary;