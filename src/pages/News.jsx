import { 
  Newspaper, 
  Calendar, 
  User, 
  Tag, 
  ExternalLink, 
  TrendingUp,
  Award,
  Video,
  Podcast,
  FileText,
  Share2,
  Bookmark,
  MessageCircle,
  ChevronRight,
  Globe,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const News = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const newsCategories = [
    { id: 'all', name: 'All News', count: 28 },
    { id: 'research', name: 'Research Breakthroughs', count: 12 },
    { id: 'events', name: 'Events & Conferences', count: 8 },
    { id: 'partnerships', name: 'Partnerships', count: 5 },
    { id: 'awards', name: 'Awards & Recognition', count: 3 },
    { id: 'thought', name: 'Thought Leadership', count: 7 },
  ];

  const featuredArticle = {
    title: "AI-Powered Farming Robot Increases Crop Yields by 40% in Pilot Study",
    excerpt: "Our latest research shows promising results in sustainable agriculture using autonomous robots equipped with computer vision and machine learning algorithms.",
    category: "Research Breakthrough",
    date: "March 15, 2024",
    readTime: "5 min read",
    author: "Dr. Amina Diallo",
    authorRole: "Lead AI Researcher",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=800",
    tags: ["AI", "Agriculture", "Robotics", "Sustainability"]
  };

  const newsArticles = [
    {
      id: 1,
      title: "BlazingTek Wins Google AI Impact Challenge Grant",
      excerpt: "Selected among 1000+ applicants for our work on assistive technology for people with disabilities.",
      category: "Awards & Recognition",
      date: "March 10, 2024",
      type: "article",
      readTime: "3 min read",
      author: "Fatima Bello",
      tags: ["Award", "AI", "Assistive Tech"]
    },
    {
      id: 2,
      title: "New Partnership with University of Nairobi",
      excerpt: "Launching joint research program focused on sustainable energy solutions for robotics.",
      category: "Partnerships",
      date: "March 5, 2024",
      type: "video",
      readTime: "8 min watch",
      author: "Kwame Osei",
      tags: ["Partnership", "Research", "Sustainability"]
    },
    {
      id: 3,
      title: "Thought Leadership: The Future of African Tech Innovation",
      excerpt: "Our CEO discusses how Africa can lead in emerging technologies and build sovereign capabilities.",
      category: "Thought Leadership",
      date: "February 28, 2024",
      type: "podcast",
      readTime: "45 min listen",
      author: "David Chen",
      tags: ["Innovation", "Future Tech", "Africa"]
    },
    {
      id: 4,
      title: "Robotics Workshop Trains 500+ Students Across Ghana",
      excerpt: "STEM outreach program expands to reach more young innovators in rural communities.",
      category: "Events",
      date: "February 20, 2024",
      type: "article",
      readTime: "4 min read",
      author: "Maria Rodriguez",
      tags: ["Education", "STEM", "Workshop"]
    },
    {
      id: 5,
      title: "New Patent Filed for Solar-Powered Navigation System",
      excerpt: "Innovative technology enables autonomous robots to operate 24/7 using renewable energy.",
      category: "Research Breakthrough",
      date: "February 15, 2024",
      type: "article",
      readTime: "6 min read",
      author: "Dr. Samuel Adeyemi",
      tags: ["Patent", "Solar", "Navigation"]
    },
    {
      id: 6,
      title: "Featured at UN Technology Innovation Labs",
      excerpt: "Showcasing our work on AI for social good at United Nations headquarters.",
      category: "Events",
      date: "February 10, 2024",
      type: "video",
      readTime: "12 min watch",
      author: "Dr. Amina Diallo",
      tags: ["UN", "Innovation", "Social Good"]
    }
  ];

  const upcomingEvents = [
    {
      title: "Africa Tech Summit 2024",
      date: "April 15-17, 2024",
      location: "Kigali, Rwanda",
      type: "Conference",
      speaker: "Kwame Osei"
    },
    {
      title: "Women in AI Africa Conference",
      date: "May 8, 2024",
      location: "Virtual",
      type: "Webinar",
      speaker: "Dr. Amina Diallo"
    },
    {
      title: "IEEE Robotics Symposium",
      date: "June 20-22, 2024",
      location: "Cape Town, South Africa",
      type: "Symposium",
      speaker: "Dr. Samuel Adeyemi"
    }
  ];

  const mediaFeatures = [
    { name: "TechCrunch", logo: "TC", date: "Feb 2024" },
    { name: "BBC Future", logo: "BBC", date: "Jan 2024" },
    { name: "Nature", logo: "N", date: "Dec 2023" },
    { name: "Forbes Africa", logo: "FA", date: "Nov 2023" },
    { name: "MIT Technology Review", logo: "MIT", date: "Oct 2023" },
    { name: "African Business", logo: "AB", date: "Sep 2023" },
  ];

  const getTypeIcon = (type) => {
    switch(type) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'podcast': return <Podcast className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const filteredArticles = activeCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Newspaper className="h-12 w-12 text-blue-300 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  News & <span className="text-blue-300">Updates</span>
                </h1>
              </div>
              <p className="text-xl mb-8">
                Stay updated with our latest research breakthroughs, events, 
                and thought leadership in emerging technologies.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center">
                  Subscribe to Newsletter
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center">
                  <Podcast className="mr-2 h-5 w-5" />
                  Listen to Podcast
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm">
                Featured Story
              </div>
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-green-500 to-blue-500"></div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {featuredArticle.category}
                    </span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">{featuredArticle.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{featuredArticle.author}</span>
                    </div>
                    <Link to="/news/featured" className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center text-sm">
                      Read Full Story
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {newsCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-full text-sm">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main News Column */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {filteredArticles.map((article) => (
                  <article 
                    key={article.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          {getTypeIcon(article.type)}
                          <span className="ml-2 text-sm text-gray-500">{article.type}</span>
                        </div>
                        <div className="text-sm text-gray-500">{article.readTime}</div>
                      </div>
                      
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                        {article.category}
                      </span>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">{article.author}</span>
                        </div>
                        <span className="text-sm text-gray-500">{article.date}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {article.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center space-x-4">
                          <button className="text-gray-400 hover:text-blue-600">
                            <Bookmark className="h-5 w-5" />
                          </button>
                          <button className="text-gray-400 hover:text-green-600">
                            <Share2 className="h-5 w-5" />
                          </button>
                          <button className="text-gray-400 hover:text-purple-600">
                            <MessageCircle className="h-5 w-5" />
                          </button>
                        </div>
                        <Link 
                          to={`/news/${article.id}`}
                          className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center text-sm"
                        >
                          Read More
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Load More */}
              <div className="mt-12 text-center">
                <button className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center">
                  Load More Articles
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold">Upcoming Events</h3>
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900">{event.title}</h4>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {event.type}
                        </span>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Globe className="h-3 w-3 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-2" />
                          Speaker: {event.speaker}
                        </div>
                      </div>
                      <button className="mt-3 text-blue-600 hover:text-blue-800 text-sm font-semibold">
                        Register Now →
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Media Features */}
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl shadow-lg p-6 text-white">
                <div className="flex items-center mb-6">
                  <Award className="h-6 w-6 text-blue-300 mr-3" />
                  <h3 className="text-xl font-bold">Featured In</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {mediaFeatures.map((media, index) => (
                    <div 
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors"
                    >
                      <div className="text-2xl font-bold mb-1">{media.logo}</div>
                      <div className="text-sm font-medium">{media.name}</div>
                      <div className="text-xs text-gray-300 mt-1">{media.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <div className="flex items-center mb-6">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold">Stay Updated</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Get our weekly research digest and exclusive content delivered to your inbox.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
                  >
                    Subscribe Now
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-4">
                  No spam. Unsubscribe anytime.
                </p>
              </div>

              {/* Research Highlights */}
              <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl shadow-lg p-6 text-white">
                <Target className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Latest Research Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>New Publications</span>
                    <span className="font-bold">18</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Citations This Year</span>
                    <span className="font-bold">240+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Research Projects</span>
                    <span className="font-bold">25+</span>
                  </div>
                </div>
                <Link 
                  to="/research"
                  className="mt-6 inline-flex items-center justify-center w-full bg-white text-blue-600 hover:bg-gray-100 py-3 rounded-lg font-semibold"
                >
                  Explore Research
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Archive Section */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">News Archive</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our historical news and milestones
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {['2024', '2023', '2022', '2021'].map((year) => (
              <div key={year} className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">{year}</div>
                <div className="text-gray-600">Archive</div>
                <div className="mt-4 text-sm text-gray-500">
                  {year === '2024' ? '12 articles' : 
                   year === '2023' ? '28 articles' : 
                   year === '2022' ? '19 articles' : '15 articles'}
                </div>
                <button className="mt-4 text-blue-600 hover:text-blue-800 text-sm font-semibold">
                  Browse Year →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;