import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Target, Award, Code, Brain, Cpu, GraduationCap, Shield } from 'lucide-react';

const Workshops = () => {
  const workshops = [
    {
      title: "AI & Machine Learning Bootcamp",
      duration: "3 Days",
      price: "$1,200",
      topics: ["Neural Networks", "Computer Vision", "NLP", "Model Deployment"],
      icon: Brain,
      includes: ["Materials", "Projects", "Certificate"]
    },
    {
      title: "ROS Masterclass",
      duration: "5 Days",
      price: "$2,500",
      topics: ["ROS2 Core", "Navigation", "Simulation", "Hardware Integration"],
      icon: Cpu,
      includes: ["Workstation", "Robot Kit", "Expert Support"]
    },
    {
      title: "Robotics for Educators",
      duration: "2 Days",
      price: "$800",
      topics: ["Curriculum Dev", "Lab Setup", "Teaching Methods", "Cert Prep"],
      icon: GraduationCap,
      includes: ["Resources", "Templates", "Community Access"]
    },
    {
      title: "Drone Programming",
      duration: "2 Days",
      price: "$950",
      topics: ["Drone Basics", "Autonomous Nav", "Flight Control", "Safety"],
      icon: Shield,
      includes: ["Sim Software", "Flight Practice", "Tools"]
    }
  ];

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
        <div className="grid md:grid-cols-2 gap-6">
          {workshops.map((workshop, i) => {
            const Icon = workshop.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{workshop.title}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-gray-400">{workshop.duration}</span>
                      <span className="text-lg font-bold">{workshop.price}</span>
                    </div>
                  </div>
                </div>

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

                <button className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200">
                  Learn More
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Training */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-xl p-8 mt-12">
          <div className="md:flex items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Need Custom Training?</h3>
              <p className="text-gray-300">
                Tailored programs for your organization's specific needs.
              </p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200">
              Request Proposal
            </button>
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