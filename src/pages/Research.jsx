import { 
  Cpu, 
  Zap, 
  Eye, 
  Brain, 
  FlaskConical, 
  BookOpen,
  Users,
  TrendingUp,
  Target,
  Award,
  Calendar,
  ExternalLink,
  Microscope,
  Cloud,
  Shield,
  Battery,
  GitBranch
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Research = () => {
  const researchAreas = [
    {
      icon: <Brain className="h-10 w-10" />,
      title: "AI & Machine Learning",
      description: "Developing Africa-centric AI models for agriculture, healthcare, and education",
      projects: [
        "Edge AI for remote diagnostics",
        "Reinforcement learning for robotics",
        "Natural language processing for local languages"
      ],
      lead: "Dr. Amina Diallo",
      status: "Active"
    },
    {
      icon: <Cpu className="h-10 w-10" />,
      title: "Autonomous Robotics",
      description: "Developing self-navigating systems for agriculture, mining, and logistics",
      projects: [
        "SLAM navigation in unstructured environments",
        "Swarm robotics for precision agriculture",
        "Autonomous delivery drones"
      ],
      lead: "Kwame Osei",
      status: "Pilot Phase"
    },
    {
      icon: <Eye className="h-10 w-10" />,
      title: "Computer Vision",
      description: "Advanced imaging and perception systems for industrial applications",
      projects: [
        "Crop disease detection using hyperspectral imaging",
        "3D reconstruction for archaeological sites",
        "Real-time object tracking"
      ],
      lead: "Dr. Chen Wei",
      status: "Active"
    },
    {
      icon: <Battery className="h-10 w-10" />,
      title: "Sustainable Robotics",
      description: "Energy-efficient systems powered by renewable sources",
      projects: [
        "Solar-powered autonomous vehicles",
        "Energy harvesting from motion",
        "Biodegradable robotic components"
      ],
      lead: "Fatima Bello",
      status: "Research Phase"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Assistive Technology",
      description: "Developing affordable assistive devices for people with disabilities",
      projects: [
        "3D-printed prosthetic limbs",
        "Voice-controlled mobility aids",
        "Haptic feedback systems"
      ],
      lead: "Dr. Samuel Adeyemi",
      status: "Deployment"
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "IoT & Edge Computing",
      description: "Networked systems for smart infrastructure and remote monitoring",
      projects: [
        "Low-power IoT networks for agriculture",
        "Edge computing for real-time analytics",
        "Blockchain for supply chain tracking"
      ],
      lead: "Maria Rodriguez",
      status: "Active"
    }
  ];

  const currentProjects = [
    {
      title: "AgriBot 2.0",
      description: "AI-powered autonomous farming robot for smallholder farmers",
      progress: 85,
      timeline: "Jan 2024 - Jun 2024",
      funding: "Google AI Impact Challenge"
    },
    {
      title: "MediScan AI",
      description: "Portable diagnostic device for rural healthcare centers",
      progress: 60,
      timeline: "Mar 2024 - Dec 2024",
      funding: "Gates Foundation"
    },
    {
      title: "Solar Rover",
      description: "Solar-powered exploration robot for mineral prospecting",
      progress: 45,
      timeline: "Feb 2024 - Nov 2024",
      funding: "African Development Bank"
    }
  ];

  const publications = [
    {
      title: "Edge AI for Precision Agriculture in Sub-Saharan Africa",
      authors: "Diallo, A., Osei, K., et al.",
      journal: "Nature Machine Intelligence",
      year: 2023,
      link: "#"
    },
    {
      title: "Low-Cost Prosthetic Design Using 3D Printing",
      authors: "Adeyemi, S., Bello, F.",
      journal: "IEEE Transactions on Biomedical Engineering",
      year: 2023,
      link: "#"
    },
    {
      title: "Solar-Powered Autonomous Navigation in Rural Environments",
      authors: "Osei, K., Rodriguez, M.",
      journal: "Robotics and Autonomous Systems",
      year: 2022,
      link: "#"
    }
  ];

  const researchStats = [
    { icon: <FlaskConical />, value: "25+", label: "Active Projects" },
    { icon: <Users />, value: "50+", label: "Researchers" },
    { icon: <BookOpen />, value: "18", label: "Publications (2023)" },
    { icon: <Award />, value: "15", label: "Patents Filed" },
    { icon: <TrendingUp />, value: "$5M+", label: "Research Funding" },
    { icon: <Target />, value: "8", label: "Countries Involved" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-purple-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Microscope className="h-12 w-12 text-blue-300 mr-4" />
                <h1 className="text-5xl md:text-6xl font-bold">
                  Research & <span className="text-blue-300">Innovation</span>
                </h1>
              </div>
              <p className="text-xl mb-8">
                Pushing the boundaries of technology through interdisciplinary research 
                focused on solving Africa's most pressing challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center"
                >
                  Partner on Research
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="#publications" 
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center"
                >
                  View Publications
                  <BookOpen className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-2xl">
                <div className="bg-gray-900 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-4">Research Spotlight</h3>
                  <p className="text-gray-300 mb-4">
                    Our team recently achieved 95% accuracy in detecting crop diseases 
                    using AI and drone imagery, helping farmers reduce losses by 40%.
                  </p>
                  <div className="flex items-center text-blue-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Latest breakthrough: March 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {researchStats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="text-blue-600 flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Interdisciplinary research at the intersection of AI, robotics, and sustainable technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-blue-600">{area.icon}</div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      area.status === 'Active' ? 'bg-green-100 text-green-800' :
                      area.status === 'Pilot Phase' ? 'bg-yellow-100 text-yellow-800' :
                      area.status === 'Deployment' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {area.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Key Projects:</div>
                    <ul className="space-y-1">
                      {area.projects.map((project, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <GitBranch className="h-3 w-3 mr-2 text-blue-500" />
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4 flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-500">Research Lead</div>
                      <div className="font-semibold">{area.lead}</div>
                    </div>
                    <Link 
                      to={`/research/${area.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm inline-flex items-center"
                    >
                      Learn More
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Target className="h-12 w-12 mx-auto text-blue-400 mb-4" />
            <h2 className="text-4xl font-bold mb-4">Current Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Active research initiatives making real-world impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="bg-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {project.progress}%
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.timeline}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Award className="h-4 w-4 mr-2" />
                    {project.funding}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <BookOpen className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Publications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contributing to global knowledge through peer-reviewed research
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold mb-2">{pub.title}</h3>
                      <p className="text-gray-600 mb-2">{pub.authors}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="font-medium">{pub.journal}</span>
                        <span className="mx-2">•</span>
                        <span>{pub.year}</span>
                      </div>
                    </div>
                    <a 
                      href={pub.link}
                      className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center whitespace-nowrap"
                    >
                      Read Paper
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                to="/research/publications"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                View All Publications
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Facilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                State-of-the-Art <span className="text-blue-600">Research Facilities</span>
              </h2>
              <p className="text-gray-600 mb-6">
                Our research labs are equipped with cutting-edge technology to support 
                innovative projects across all focus areas.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-green-500 mr-3" />
                  <span>Solar-powered testing facility</span>
                </li>
                <li className="flex items-center">
                  <Cpu className="h-5 w-5 text-blue-500 mr-3" />
                  <span>High-performance computing cluster</span>
                </li>
                <li className="flex items-center">
                  <Eye className="h-5 w-5 text-purple-500 mr-3" />
                  <span>Advanced computer vision lab</span>
                </li>
                <li className="flex items-center">
                  <FlaskConical className="h-5 w-5 text-red-500 mr-3" />
                  <span>Prototyping and fabrication workshop</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1">
              <div className="bg-gray-900 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Lab Access Program</h3>
                <p className="text-gray-300 mb-6">
                  We offer access to our research facilities for academic and industry partners. 
                  Collaborate with us on your next breakthrough.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
                >
                  Request Lab Access
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;