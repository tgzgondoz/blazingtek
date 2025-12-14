// Services.jsx
import { 
  Package, 
  GraduationCap, 
  Wrench, 
  Cpu, 
  Cloud, 
  Shield,
  Sparkles,
  Target,
  Users,
  Zap,
  Brain,
  Rocket,
  ArrowRight,
  ChevronRight,
  LineChart,
  CheckCircle,
  Clock,
  Award,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <Package className="h-12 w-12" />,
      title: "Robotics Kits",
      description: "Educational and development kits for universities and research institutions",
      features: ["Modular design", "Open-source software", "Curriculum materials", "Cloud integration"],
      gradient: "from-blue-500 to-cyan-500",
      applications: ["Education", "Research", "Prototyping"],
      delivery: "2-4 weeks"
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Workshops & Training",
      description: "Custom training programs in AI, robotics, and emerging technologies",
      features: ["Corporate training", "Academic workshops", "Hands-on labs", "Certification"],
      gradient: "from-purple-500 to-pink-500",
      applications: ["Skill Development", "Team Upskilling", "Technical Certification"],
      delivery: "Flexible scheduling"
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Custom Solutions",
      description: "Bespoke robotic systems for industrial and research applications",
      features: ["Requirement analysis", "Prototype development", "Deployment support", "Maintenance"],
      gradient: "from-emerald-500 to-green-500",
      applications: ["Industry Automation", "Research Projects", "Specialized Applications"],
      delivery: "8-12 weeks"
    },
    {
      icon: <Cpu className="h-12 w-12" />,
      title: "Robot Rentals",
      description: "Short-term access to advanced robotic platforms for research",
      features: ["Flexible terms", "Technical support", "Maintenance included", "Training"],
      gradient: "from-amber-500 to-orange-500",
      applications: ["Research Trials", "Event Demos", "Testing & Validation"],
      delivery: "Immediate availability"
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: "Software Platform",
      description: "Cloud-based robotics simulation and development environment",
      features: ["Real-time simulation", "Collaboration tools", "API access", "Analytics"],
      gradient: "from-indigo-500 to-blue-500",
      applications: ["Virtual Testing", "Team Collaboration", "Data Analysis"],
      delivery: "Instant access"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Maintenance & Support",
      description: "Comprehensive support packages for deployed systems",
      features: ["24/7 monitoring", "Preventive maintenance", "Remote diagnostics", "Updates"],
      gradient: "from-rose-500 to-red-500",
      applications: ["System Reliability", "Performance Optimization", "Risk Management"],
      delivery: "Ongoing"
    }
  ];

  const researchIntegration = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI-Powered Agriculture",
      description: "Our robotics kits include AI models trained on African crop data",
      impact: "40% yield increase in pilot farms"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Sustainable Energy",
      description: "All systems designed with renewable energy integration",
      impact: "70% energy reduction in operations"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Assistive Technology",
      description: "Solutions developed with and for people with disabilities",
      impact: "60% cost reduction for prosthetics"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Edge Computing",
      description: "Localized processing for remote area operations",
      impact: "90% reduction in data transmission"
    }
  ];

  const clientStories = [
    {
      organization: "University of Nairobi",
      service: "Robotics Kits & Training",
      outcome: "Established Africa's first robotics engineering lab",
      timeline: "6 months",
      metrics: ["50 students trained", "3 research papers", "International awards"]
    },
    {
      organization: "Agricultural Ministry, Ghana",
      service: "Custom Solutions",
      outcome: "Automated irrigation system for 200 farms",
      timeline: "9 months",
      metrics: ["40% water savings", "30% labor reduction", "Increased yields"]
    },
    {
      organization: "Tech Startup Incubator",
      service: "Software Platform Access",
      outcome: "Accelerated 15 startups in robotics space",
      timeline: "12 months",
      metrics: ["$2M raised", "8 products launched", "50+ jobs created"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-blue-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-white/20 backdrop-blur-sm">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">Research-Driven Services</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
                  Innovation
                </span>
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-cyan-400 via-green-500 to-blue-500 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  In Action
                </motion.span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl"
              >
                Our services integrate cutting-edge research with practical applications, 
                ensuring solutions that are both innovative and impactful for Africa's development.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-gradient-to-r from-green-600 to-cyan-500 hover:from-green-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 flex items-center gap-3"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                
                <Link to="/research">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group bg-transparent border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5 flex items-center gap-3"
                  >
                    <Brain className="h-5 w-5" />
                    <span>View Research</span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="h-6 w-6 text-green-400" />
                  <h3 className="text-2xl font-bold">Impact Through Services</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20">
                      <Users className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">500+ Institutions</div>
                      <div className="text-gray-300 text-sm">Served across Africa</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20">
                      <Award className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">25+ Awards</div>
                      <div className="text-gray-300 text-sm">For innovation and impact</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-green-500/20 to-blue-500/20">
                      <LineChart className="h-5 w-5 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">95% Satisfaction</div>
                      <div className="text-gray-300 text-sm">Client retention rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Our Offerings</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions backed by cutting-edge research
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className="p-8">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Key Features
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-500 to-blue-500 mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Applications</div>
                        <div className="text-sm font-medium text-gray-900">
                          {service.applications.join(", ")}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Delivery</div>
                        <div className="text-sm font-medium text-gray-900 flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {service.delivery}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
                    <button className="group w-full flex items-center justify-between text-green-600 hover:text-green-700 font-semibold">
                      <span>Request Service Details</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Integration */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Brain className="h-6 w-6 text-green-600" />
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Research Integration</span>
              <Brain className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research-Backed Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service we offer is informed by ongoing research in our labs
            </p>
          </motion.div>

          <div className="bg-gradient-to-r from-green-600 via-blue-600 to-cyan-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">
                    From Lab to Application
                  </h3>
                  <p className="mb-8 leading-relaxed text-green-100">
                    We don't just sell products—we deliver proven, research-validated solutions. 
                    Our services incorporate the latest findings from our active research projects, 
                    ensuring you benefit from cutting-edge innovation.
                  </p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link 
                      to="/research"
                      className="inline-flex items-center bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                    >
                      <span>View Research Projects</span>
                      <ExternalLink className="ml-3 h-5 w-5" />
                    </Link>
                  </motion.div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                  <h4 className="text-xl font-bold mb-6">Active Research Integration</h4>
                  <div className="space-y-6">
                    {researchIntegration.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 group/item"
                      >
                        <div className="p-2 rounded-lg bg-gradient-to-r from-green-500/30 to-blue-500/30 group-hover/item:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-bold mb-1">{item.title}</div>
                          <p className="text-green-100 text-sm mb-2">{item.description}</p>
                          <div className="text-xs px-3 py-1 bg-white/20 rounded-full inline-block">
                            Impact: {item.impact}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Rocket className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real impact through our research-driven services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r from-green-500 via-blue-500 to-cyan-500`}></div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-green-500/10 to-blue-500/10">
                        <Award className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900">{story.organization}</div>
                        <div className="text-sm text-green-600">{story.service}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-gray-900">{story.outcome}</h3>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          Timeline
                        </span>
                        <span className="font-semibold">{story.timeline}</span>
                      </div>
                      
                      <div className="text-sm font-semibold text-gray-700 mb-3">Key Results</div>
                      <ul className="space-y-2">
                        {story.metrics.map((metric, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-500 to-blue-500 mr-3"></div>
                            {metric}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="group w-full flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-semibold border border-green-200 hover:border-green-300 rounded-xl py-3 transition-all duration-300">
                      <span>Read Full Case Study</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 via-blue-500 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform with Technology?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
              Partner with us to implement research-driven solutions that deliver real impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/contact" 
                  className="group bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/services/catalog" 
                  className="group bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Package className="h-5 w-5" />
                  <span>View Service Catalog</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;