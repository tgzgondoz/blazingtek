import { 
  Globe, 
  Handshake, 
  Award, 
  Users, 
  TrendingUp, 
  Shield,
  ExternalLink,
  Building,
  Calendar,
  Target,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Zap,
  FileText,
  MessageCircle,
  MapPin,
  CheckCircle,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Partnerships = () => {
  const partnerCategories = [
    {
      title: "Academic Institutions",
      icon: <Building className="h-8 w-8" />,
      description: "Universities and research centers collaborating on cutting-edge projects",
      partners: [
        { name: "University of Ghana", focus: "AI Research Lab", since: 2019, gradient: "from-blue-500 to-cyan-500" },
        { name: "Makerere University", focus: "Robotics Engineering", since: 2020, gradient: "from-purple-500 to-pink-500" },
        { name: "University of Nairobi", focus: "Sustainable Tech", since: 2021, gradient: "from-emerald-500 to-green-500" },
        { name: "MIT Open Learning", focus: "Curriculum Development", since: 2018, gradient: "from-amber-500 to-orange-500" },
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Government & NGOs",
      icon: <Shield className="h-8 w-8" />,
      description: "Public sector partnerships for national development projects",
      partners: [
        { name: "UNICEF Innovation", focus: "Education Technology", since: 2020, gradient: "from-blue-500 to-indigo-500" },
        { name: "African Union Commission", focus: "Pan-African Initiatives", since: 2019, gradient: "from-green-500 to-emerald-500" },
        { name: "UNDP Africa", focus: "Sustainable Development", since: 2021, gradient: "from-purple-500 to-violet-500" },
        { name: "Ghana Ministry of Education", focus: "STEM Programs", since: 2018, gradient: "from-amber-500 to-yellow-500" },
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Corporate Collaborations",
      icon: <TrendingUp className="h-8 w-8" />,
      description: "Industry partnerships driving commercial innovation",
      partners: [
        { name: "IBM Research Africa", focus: "AI & Cloud Computing", since: 2020, gradient: "from-blue-500 to-indigo-500" },
        { name: "Google AI Research", focus: "Machine Learning", since: 2019, gradient: "from-green-500 to-teal-500" },
        { name: "Siemens Healthineers", focus: "Medical Robotics", since: 2021, gradient: "from-purple-500 to-rose-500" },
        { name: "Nvidia AI Tech Center", focus: "GPU Computing", since: 2022, gradient: "from-gray-500 to-gray-700" },
      ],
      gradient: "from-emerald-500 to-green-500"
    },
    {
      title: "International Organizations",
      icon: <Globe className="h-8 w-8" />,
      description: "Global partnerships for technology transfer and capacity building",
      partners: [
        { name: "World Bank Group", focus: "Digital Transformation", since: 2019, gradient: "from-blue-500 to-cyan-500" },
        { name: "African Development Bank", focus: "Infrastructure Tech", since: 2020, gradient: "from-green-500 to-emerald-500" },
        { name: "UNESCO", focus: "Digital Literacy", since: 2021, gradient: "from-purple-500 to-violet-500" },
        { name: "World Economic Forum", focus: "4IR in Africa", since: 2022, gradient: "from-amber-500 to-orange-500" },
      ],
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const partnershipBenefits = [
    {
      title: "Research Collaboration",
      description: "Access to cutting-edge research and development resources",
      stats: "25+ Joint Research Papers",
      icon: <FileText className="h-6 w-6" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Funding Opportunities",
      description: "Grant proposals and joint funding applications",
      stats: "$5M+ in Collaborative Grants",
      icon: <TrendingUp className="h-6 w-6" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Talent Development",
      description: "Student exchanges, internships, and training programs",
      stats: "150+ Students Trained",
      icon: <Users className="h-6 w-6" />,
      gradient: "from-emerald-500 to-green-500"
    },
    {
      title: "Technology Transfer",
      description: "Shared IP and technology commercialization support",
      stats: "8 Patent Filings",
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const successStories = [
    {
      title: "AI for Agriculture Initiative",
      partner: "UNICEF & University of Ghana",
      outcome: "Deployed smart irrigation systems across 50 farms",
      impact: "40% increase in crop yield",
      duration: "18 months",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Robotics Education Program",
      partner: "Ministry of Education & Google",
      outcome: "Trained 500+ teachers in robotics curriculum",
      impact: "200 schools equipped with robotics kits",
      duration: "24 months",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Medical Robotics Research",
      partner: "Siemens Healthineers & KNUST",
      outcome: "Developed low-cost surgical assistance robots",
      impact: "Reduced procedure costs by 60%",
      duration: "36 months",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const partnershipProcess = [
    { step: 1, title: "Initial Consultation", description: "Understand mutual goals and objectives", icon: <MessageCircle className="h-5 w-5" /> },
    { step: 2, title: "Proposal Development", description: "Create detailed project framework", icon: <FileText className="h-5 w-5" /> },
    { step: 3, title: "Agreement Finalization", description: "Legal and operational documentation", icon: <CheckCircle className="h-5 w-5" /> },
    { step: 4, title: "Project Implementation", description: "Joint execution with regular reviews", icon: <Target className="h-5 w-5" /> },
    { step: 5, title: "Impact Assessment", description: "Measure outcomes and plan scaling", icon: <TrendingUp className="h-5 w-5" /> },
  ];

  const partnershipStats = [
    { value: "40+", label: "Active Partners", icon: <Users className="h-6 w-6" />, gradient: "from-blue-500 to-cyan-500" },
    { value: "15", label: "Countries", icon: <Globe className="h-6 w-6" />, gradient: "from-purple-500 to-pink-500" },
    { value: "$10M+", label: "Joint Funding", icon: <TrendingUp className="h-6 w-6" />, gradient: "from-emerald-500 to-green-500" },
    { value: "50+", label: "Projects", icon: <Target className="h-6 w-6" />, gradient: "from-amber-500 to-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 backdrop-blur-sm">
            <Handshake className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Strategic Collaborations</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Strategic
            </span>
            <br />
            <motion.span 
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
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
              Partnerships
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-10"
          >
            Collaborating with leading organizations to drive technological innovation 
            and sustainable development across Africa
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              to="/contact" 
              className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
            >
              <span>Partner With Us</span>
              <ExternalLink className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Partnership Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnershipStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="relative bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${stat.gradient} mb-4 shadow-lg`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Network</span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partnership Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating across sectors to maximize impact and drive innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnerCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} shadow-lg`}>
                        <div className="text-white">
                          {category.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-8 leading-relaxed">{category.description}</p>
                    
                    <div className="space-y-4">
                      {category.partners.map((partner, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ x: 5 }}
                          className="flex justify-between items-center p-4 bg-gray-50 rounded-xl group/item transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${partner.gradient} opacity-0 group-hover/item:opacity-100 transition-opacity duration-300`} />
                            <div>
                              <div className="font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors">
                                {partner.name}
                              </div>
                              <div className="text-sm text-gray-500">{partner.focus}</div>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="h-4 w-4 mr-1.5" />
                            Since {partner.since}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-950 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="h-6 w-6 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wider">Why Partner With Us</span>
              <Sparkles className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Mutual benefits that drive sustainable impact and innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${benefit.gradient} mb-6`}>
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-4">{benefit.stats}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <button className="text-sm font-medium text-gray-400 hover:text-cyan-300 transition-colors flex items-center group">
                      <span>Learn more</span>
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Award className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real impact through strategic collaborations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${story.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${story.gradient}`}></div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="h-4 w-4 text-amber-500" />
                      <span className="text-sm font-semibold text-emerald-600">Case Study</span>
                    </div>
                    
                    <div className="text-blue-600 font-semibold mb-2 flex items-center gap-2">
                      <Handshake className="h-4 w-4" />
                      {story.partner}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{story.title}</h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{story.outcome}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <span>Duration</span>
                        <span className="font-medium">{story.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">Impact</span>
                        <div className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg font-semibold">
                          {story.impact}
                        </div>
                      </div>
                    </div>
                    
                    <button className="group w-full flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 font-semibold border border-blue-200 hover:border-blue-300 rounded-xl py-3 transition-all duration-300">
                      <span>Read Full Case Study</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Target className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach to building successful collaborations
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-emerald-200"></div>
            
            <div className="space-y-12">
              {partnershipProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-20"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                    <div className="absolute -right-3 lg:right-auto lg:top-1/2 lg:transform lg:-translate-y-1/2 w-6 h-6 bg-white border-4 border-blue-100 rounded-full"></div>
                  </div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'} mt-8 lg:mt-0`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                          <div className="text-white">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="text-sm text-gray-500">Timeline: 2-4 weeks</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Collaborate?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90">
              Join our network of partners driving technological innovation across Africa. 
              Let's create impact together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/contact" 
                  className="group bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                >
                  <span>Start Partnership Discussion</span>
                  <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/research" 
                  className="group bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>Explore Research Areas</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;