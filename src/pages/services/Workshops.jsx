import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Users, Target, Award, Code, Brain, Cpu, GraduationCap, Shield, DollarSign, Clock, MapPin, Calendar } from 'lucide-react';

const Workshops = () => {
  const [workshops, setWorkshops] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const features = [
    {
      title: "Custom Programs",
      description: "Tailored to your team's needs",
      icon: Target
    },
    {
      title: "Expert Instructors",
      description: "Industry professionals",
      icon: Users
    },
    {
      title: "Hands-on Projects",
      description: "Practical exercises",
      icon: Code
    },
    {
      title: "Certification",
      description: "Industry-recognized",
      icon: Award
    }
  ];

  // Load workshops from Firebase
  useEffect(() => {
    const loadWorkshops = async () => {
      try {
        const databaseURL = 'https://blazingtek-c56e7-default-rtdb.firebaseio.com';
        const response = await fetch(`${databaseURL}/workshops.json`);
        const data = await response.json();
        
        if (data) {
          const workshopsArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
          }));
          setWorkshops(workshopsArray);
        } else {
          setWorkshops([]);
        }
      } catch (error) {
        console.error('Error loading workshops:', error);
        setWorkshops([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadWorkshops();
    
    // Poll for updates every 30 seconds
    const intervalId = setInterval(loadWorkshops, 30000);
    
    return () => clearInterval(intervalId);
  }, []);

  // Get icon component based on icon name
  const getIconComponent = (iconName) => {
    switch(iconName) {
      case 'Brain': return Brain;
      case 'Cpu': return Cpu;
      case 'GraduationCap': return GraduationCap;
      case 'Shield': return Shield;
      case 'Code': return Code;
      case 'Users': return Users;
      case 'Target': return Target;
      case 'Award': return Award;
      default: return Brain;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-gray-800 border-t-white mb-6"></div>
          <h1 className="text-3xl font-bold text-white mb-4">Loading Workshops...</h1>
          <p className="text-gray-500">Please wait while we load our training programs</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="p-4 bg-white/10 rounded-full">
              <Users className="w-12 h-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Workshops & <span className="text-gray-300">Training</span>
            </h1>
          </div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional training in AI, robotics, and emerging technologies.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                <div className="p-2 bg-white/10 rounded">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Workshops */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Workshops</h2>
        
        {workshops.length === 0 ? (
          <div className="text-center py-12 bg-gray-900/50 rounded-xl border border-gray-800">
            <Brain className="h-16 w-16 text-gray-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">No Workshops Available</h3>
            <p className="text-gray-400">Check back soon for upcoming training programs.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((workshop, i) => {
              const Icon = getIconComponent(workshop.icon);
              return (
                <motion.div
                  key={workshop.id || i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/10 rounded-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{workshop.title}</h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm text-gray-400 flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {workshop.duration || '3 Days'}
                        </span>
                        <span className="text-lg font-bold flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          {workshop.price || '$1,200'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {workshop.description && (
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {workshop.description}
                    </p>
                  )}

                  {workshop.topics && workshop.topics.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-bold mb-3">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {workshop.topics.map((topic, idx) => (
                          <span key={idx} className="px-3 py-1 text-sm bg-white/10 rounded-full">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {workshop.includes && workshop.includes.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-bold mb-3">Includes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {workshop.includes.map((item, idx) => (
                          <span key={idx} className="px-3 py-1 text-sm bg-white/5 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {workshop.startDate && (
                    <div className="mb-4 flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span>Starts: {new Date(workshop.startDate).toLocaleDateString()}</span>
                      {workshop.location && (
                        <>
                          <MapPin className="h-4 w-4 ml-2" />
                          <span>{workshop.location}</span>
                        </>
                      )}
                    </div>
                  )}

                  <button className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                    Learn More
                  </button>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Custom Training */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-xl p-8 mt-12">
          <div className="md:flex items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Need Custom Training?</h3>
              <p className="text-gray-300">
                Tailored programs for your organization's specific needs.
              </p>
            </div>
            <Link to="/contact">
              <button className="mt-4 md:mt-0 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200">
                Request Proposal
              </button>
            </Link>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-lg hover:border-white/40 transition"
          >
            ← Back to Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Workshops;