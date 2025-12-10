// About.jsx
import { Target, Eye, History, Award, Users, Globe } from 'lucide-react';

const Abouts = () => {
  const values = [
    { icon: <Target />, title: "Mission", description: "To accelerate Africa's technological sovereignty through cutting-edge research and accessible innovation." },
    { icon: <Eye />, title: "Vision", description: "A continent where local research drives global technological advancement and sustainable development." },
    { icon: <History />, title: "Our Story", description: "Founded in 2018 by engineers and researchers passionate about solving Africa-specific challenges." },
    { icon: <Award />, title: "Achievements", description: "25+ research papers, 15 patents, and solutions deployed across 8 African countries." },
  ];

  const team = [
    { name: "Dr. Amina Diallo", role: "Lead AI Researcher", expertise: "Machine Learning, Computer Vision" },
    { name: "Kwame Osei", role: "Robotics Director", expertise: "Autonomous Systems, IoT" },
    { name: "Fatima Bello", role: "Sustainability Lead", expertise: "Renewable Energy, Green Tech" },
    { name: "David Chen", role: "Hardware Specialist", expertise: "Embedded Systems, 3D Printing" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Driving Research Excellence</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're more than a tech company—we're a research hub dedicated to developing 
            locally-relevant, globally-competitive technological solutions.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Research Leadership</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-600 font-semibold">{member.role}</p>
                  <p className="text-gray-600 mt-2">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-gray-400">Research Papers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-gray-400">Patents Filed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-gray-400">Researchers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Abouts;