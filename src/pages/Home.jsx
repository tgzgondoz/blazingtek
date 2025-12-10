// Home.jsx
import { ArrowRight, Cpu, Zap, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const researchHighlights = [
    { 
      title: "AI-Powered Agriculture", 
      description: "Developing autonomous drones for precision farming in Sub-Saharan Africa",
      icon: <Cpu className="h-8 w-8 text-blue-500" />
    },
    { 
      title: "Solar Robotics", 
      description: "Sustainable robotic systems powered entirely by renewable energy",
      icon: <Zap className="h-8 w-8 text-yellow-500" />
    },
    { 
      title: "Assistive Technology", 
      description: "Custom prosthetic limbs and mobility aids using 3D printing",
      icon: <Users className="h-8 w-8 text-green-500" />
    },
    { 
      title: "Global Impact", 
      description: "Collaborating with 15+ African nations on tech solutions",
      icon: <Globe className="h-8 w-8 text-purple-500" />
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
        </video>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Robotics, AI & Emerging Tech Research 
                <span className="text-blue-400 block">for Africa</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Pioneering research-driven solutions to address Africa's most pressing challenges through cutting-edge technology and innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/research" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center transition"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2" />
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl">
                <div className="bg-gray-900 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Latest Research Breakthrough</h3>
                  <p className="text-gray-300 mb-4">
                    Our team successfully deployed AI-assisted irrigation robots in Kenya, increasing crop yields by 40% while reducing water usage by 60%.
                  </p>
                  <Link to="/news" className="text-blue-400 hover:text-blue-300 font-semibold">
                    Read Case Study →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Research & Innovation Focus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving technological advancement through interdisciplinary research and collaborative innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchHighlights.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted By Leading Organizations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {['UNICEF', 'African Union', 'MIT', 'UNDP', 'IBM Research', 'Google AI'].map((partner) => (
              <div key={partner} className="text-center">
                <div className="h-16 flex items-center justify-center">
                  <span className="text-xl font-semibold text-gray-300">{partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;