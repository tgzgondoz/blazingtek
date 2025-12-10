import { 
  Users, 
  Heart, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award,
  Target,
  TrendingUp,
  Globe,
  Video,
  MessageCircle,
  Share2,
  ChevronRight,
  Zap,
  Sparkles,
  BookOpen,
  Coffee,
  Brain,
  Star,
  Trophy,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('all');

  const communityTabs = [
    { id: 'all', name: 'All Programs', icon: <Users /> },
    { id: 'stem', name: 'STEM Education', icon: <GraduationCap /> },
    { id: 'outreach', name: 'Rural Outreach', icon: <Heart /> },
    { id: 'hackathons', name: 'Hackathons', icon: <Zap /> },
    { id: 'research', name: 'Research Groups', icon: <Brain /> },
    { id: 'alumni', name: 'Alumni Network', icon: <Sparkles /> },
  ];

  const impactStats = [
    { icon: <Users />, value: "5000+", label: "Students Reached" },
    { icon: <GraduationCap />, value: "120", label: "Schools Partnered" },
    { icon: <Award />, value: "25", label: "National Awards" },
    { icon: <Globe />, value: "8", label: "African Countries" },
    { icon: <Target />, value: "150+", label: "Community Projects" },
    { icon: <TrendingUp />, value: "40%", label: "Female Participation" },
  ];

  const communityPrograms = [
    {
      id: 1,
      title: "STEM Robotics Camps",
      description: "Week-long intensive robotics camps for high school students across Africa",
      category: "STEM Education",
      participants: "2000+ students",
      duration: "Year-round",
      location: "Multiple countries",
      impact: "85% pursue STEM fields",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "blue"
    },
    {
      id: 2,
      title: "Rural Tech Outreach",
      description: "Bringing technology education to underserved rural communities",
      category: "Rural Outreach",
      participants: "1500+ villagers",
      duration: "Ongoing",
      location: "Remote villages",
      impact: "Established 30 tech hubs",
      icon: <Heart className="h-8 w-8" />,
      color: "green"
    },
    {
      id: 3,
      title: "AI for Good Hackathons",
      description: "Annual hackathon solving Africa's challenges with AI and robotics",
      category: "Hackathons",
      participants: "500+ developers",
      duration: "48 hours",
      location: "Pan-African",
      impact: "50+ solutions developed",
      icon: <Zap className="h-8 w-8" />,
      color: "yellow"
    },
    {
      id: 4,
      title: "Women in Tech Initiative",
      description: "Mentorship and training programs for women in technology",
      category: "STEM Education",
      participants: "800+ women",
      duration: "6-month program",
      location: "Virtual & In-person",
      impact: "300+ career placements",
      icon: <Sparkles className="h-8 w-8" />,
      color: "purple"
    },
    {
      id: 5,
      title: "Open Source Research",
      description: "Community-driven research projects on GitHub",
      category: "Research Groups",
      participants: "200+ contributors",
      duration: "Continuous",
      location: "Global",
      impact: "15 open-source projects",
      icon: <Brain className="h-8 w-8" />,
      color: "indigo"
    },
    {
      id: 6,
      title: "Tech Entrepreneurship",
      description: "Incubator program for student startups",
      category: "Alumni Network",
      participants: "50 startups",
      duration: "3-month accelerator",
      location: "Accra, Nairobi, Lagos",
      impact: "$2M+ raised",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "orange"
    }
  ];

  const successStories = [
    {
      name: "Aisha Mohammed",
      role: "Software Engineer at Google",
      story: "Former STEM camp participant now working on AI research",
      quote: "BlazingTek showed me that technology could change Africa.",
      imageColor: "from-pink-400 to-rose-500"
    },
    {
      name: "David Osei",
      role: "Founder of AgriTech Startup",
      story: "Hackathon winner now running successful agriculture tech company",
      quote: "The community support helped turn my idea into reality.",
      imageColor: "from-green-400 to-emerald-500"
    },
    {
      name: "Grace Chen",
      role: "PhD Candidate at MIT",
      story: "Women in Tech scholar pursuing robotics research",
      quote: "They believed in me when no one else did.",
      imageColor: "from-blue-400 to-cyan-500"
    }
  ];

  const upcomingEvents = [
    {
      title: "National Robotics Competition",
      date: "April 20-22, 2024",
      location: "Accra, Ghana",
      type: "Competition",
      participants: "200 students",
      registration: "Open"
    },
    {
      title: "Women in AI Summit",
      date: "May 15, 2024",
      location: "Virtual",
      type: "Conference",
      participants: "500+ attendees",
      registration: "Open"
    },
    {
      title: "Rural Tech Caravan",
      date: "June 5-15, 2024",
      location: "Northern Ghana",
      type: "Outreach",
      participants: "Volunteers needed",
      registration: "Open"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-800 border-blue-200',
      green: 'bg-green-100 text-green-800 border-green-200',
      yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      purple: 'bg-purple-100 text-purple-800 border-purple-200',
      indigo: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      orange: 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colors[color] || colors.blue;
  };

  const filteredPrograms = activeTab === 'all' 
    ? communityPrograms 
    : communityPrograms.filter(program => program.category.includes(activeTab));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Users className="h-12 w-12 text-green-300 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Community <span className="text-green-300">Impact</span>
                </h1>
              </div>
              <p className="text-xl mb-8">
                Building Africa's next generation of innovators through education, 
                outreach, and collaborative opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center">
                  Join Our Community
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center">
                  <Video className="mr-2 h-5 w-5" />
                  Watch Impact Story
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-yellow-900 px-4 py-2 rounded-full font-bold text-sm">
                Featured Impact
              </div>
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className={`h-48 bg-gradient-to-r from-green-400 to-blue-500`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-green-600 font-bold">Success Story</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    From Student to Innovator
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Meet Aisha, who went from our STEM camp to working at Google AI. 
                    Her journey inspires hundreds of students across Africa.
                  </p>
                  <button className="text-green-600 hover:text-green-800 font-semibold inline-flex items-center">
                    Read Full Story
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
                  <div className="text-green-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our initiatives designed to nurture talent and drive technological innovation across Africa
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {communityTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium inline-flex items-center transition-colors ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <div 
                key={program.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-lg ${getColorClasses(program.color).split(' ')[0]}`}>
                      {program.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getColorClasses(program.color)} border`}>
                      {program.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="font-medium">Participants:</span>
                      <span className="ml-2">{program.participants}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="font-medium">Duration:</span>
                      <span className="ml-2">{program.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="font-medium">Location:</span>
                      <span className="ml-2">{program.location}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <Target className="h-4 w-4 text-green-600 mr-2" />
                      <span className="font-semibold text-gray-900">Impact:</span>
                    </div>
                    <p className="text-gray-700 mt-1">{program.impact}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button className="text-green-600 hover:text-green-800 font-semibold inline-flex items-center">
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-blue-600">
                        <MessageCircle className="h-5 w-5" />
                      </button>
                      <button className="text-gray-400 hover:text-green-600">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Trophy className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the innovators whose journeys started with our community programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`h-40 bg-gradient-to-r ${story.imageColor}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">{story.name}</h3>
                      <p className="text-green-600 text-sm">{story.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{story.story}</p>
                  
                  <div className="border-l-4 border-green-500 pl-4 mb-4">
                    <p className="italic text-gray-600">"{story.quote}"</p>
                  </div>
                  
                  <button className="text-green-600 hover:text-green-800 font-semibold text-sm">
                    Read Full Interview →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-8">
                <Calendar className="h-8 w-8 text-green-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Upcoming Community Events</h2>
              </div>
              
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            event.registration === 'Open' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {event.registration}
                          </span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-gray-600 text-sm">{event.type}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                        <div className="space-y-2 text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {event.date}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {event.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            {event.participants}
                          </div>
                        </div>
                      </div>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap">
                        Register Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Volunteer */}
              <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-xl shadow-lg p-6 text-white">
                <Heart className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-4">Become a Volunteer</h3>
                <p className="mb-6">
                  Join our community of volunteers making a difference across Africa.
                </p>
                <button className="w-full bg-white text-green-600 hover:bg-gray-100 py-3 rounded-lg font-semibold">
                  Apply to Volunteer
                </button>
              </div>

              {/* Community Resources */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <BookOpen className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Community Resources</h3>
                <div className="space-y-3">
                  <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Open Source Projects
                  </a>
                  <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Learning Materials
                  </a>
                  <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Mentorship Program
                  </a>
                  <a href="#" className="flex items-center text-gray-700 hover:text-green-600">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Scholarship Opportunities
                  </a>
                </div>
              </div>

              {/* Community Spotlight */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <Lightbulb className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-4">Community Spotlight</h3>
                <p className="text-gray-600 mb-4">
                  This month's featured community project: 
                  <strong className="text-gray-900"> Solar-powered weather stations</strong> built by students in rural Kenya.
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-semibold">
                  View Project Details →
                </button>
              </div>

              {/* Connect */}
              <div className="bg-gray-900 rounded-xl shadow-lg p-6 text-white">
                <Coffee className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <p className="text-gray-300 mb-4">
                  Join our community forums, Discord server, and local meetups.
                </p>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold">
                    Join Discord
                  </button>
                  <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-semibold">
                    Community Forums
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;