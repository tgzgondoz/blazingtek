import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Calendar, Target, Award } from 'lucide-react';

const Workshops = () => {
  const workshops = [
    {
      title: "AI & Machine Learning",
      duration: "3 Days",
      level: "Intermediate",
      description: "Hands-on training in AI algorithms and ML model deployment",
      topics: ["Neural Networks", "Computer Vision", "Reinforcement Learning"]
    },
    {
      title: "ROS Masterclass",
      duration: "5 Days",
      level: "Advanced",
      description: "Comprehensive Robot Operating System training",
      topics: ["ROS2", "Navigation Stack", "Simulation", "Hardware Integration"]
    },
    {
      title: "Robotics for Educators",
      duration: "2 Days",
      level: "Beginner",
      description: "Curriculum development and teaching methodologies",
      topics: ["Lesson Planning", "Lab Setup", "Student Assessment"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-green-900/20 to-teal-900/20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Users className="w-12 h-12 text-green-400" />
              <h1 className="text-4xl md:text-5xl font-bold">Workshops & Training</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Custom training programs designed to empower teams with cutting-edge 
              skills in AI, robotics, and emerging technologies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-8 border border-white/10"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-sm bg-green-500/20 text-green-300 rounded-full">
                        {workshop.level}
                      </span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {workshop.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{workshop.title}</h3>
                  </div>
                  <Target className="w-10 h-10 text-green-400" />
                </div>
                
                <p className="text-gray-400 mb-6">{workshop.description}</p>
                
                <div className="space-y-2 mb-8">
                  <h4 className="font-medium text-gray-300">Covered Topics:</h4>
                  {workshop.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-gray-400">{topic}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors">
                  Schedule Workshop
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 rounded-lg transition-colors"
            >
              ← Back to Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;