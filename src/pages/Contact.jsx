import { Mail, Phone, MapPin, Send, Building, Globe, ChevronRight, Sparkles, Target, Users, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: ''
  });

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, title: "General Inquiries", info: "info@blazingtek.co", link: "mailto:info@blazingtek.co" },
    { icon: <Mail className="h-5 w-5" />, title: "Sales & Services", info: "sales@blazingtek.co", link: "mailto:sales@blazingtek.co" },
    { icon: <Mail className="h-5 w-5" />, title: "Administration", info: "secretary@blazingtek.co", link: "mailto:secretary@blazingtek.co" },
    { icon: <Phone className="h-5 w-5" />, title: "Phone", info: "+233 24 123 4567", link: "tel:+233241234567" },
    { icon: <MapPin className="h-5 w-5" />, title: "Headquarters", info: "Accra, Ghana | Nairobi, Kenya | Lagos, Nigeria" },
    { icon: <Building className="h-5 w-5" />, title: "Research Labs", info: "Open for academic and industry collaborations" },
  ];

  const partnershipTypes = [
    { icon: <Target className="h-5 w-5" />, title: "Academic Research", description: "University collaborations & joint research projects", color: "from-emerald-500 to-green-500" },
    { icon: <Briefcase className="h-5 w-5" />, title: "Industry R&D", description: "Corporate research partnerships & innovation", color: "from-blue-500 to-cyan-500" },
    { icon: <Users className="h-5 w-5" />, title: "Government & NGO", description: "Public sector projects & development initiatives", color: "from-purple-500 to-pink-500" },
    { icon: <Sparkles className="h-5 w-5" />, title: "Student Programs", description: "Internships, fellowships & graduate programs", color: "from-amber-500 to-orange-500" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-950 text-white py-24">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-white/20 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Get in Touch</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Collaborate
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
              With Us
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl max-w-3xl text-gray-300 leading-relaxed mb-10"
          >
            Interested in research partnerships, joint projects, or exploring how our 
            technology can support your mission? Let's connect and build Africa's technological future together.
          </motion.p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Send Us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-3 text-gray-700">Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-700">Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-700">Area of Interest</label>
                  <select
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 bg-white/50 backdrop-blur-sm appearance-none"
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                  >
                    <option value="">Select an option</option>
                    <option value="research">Research Collaboration</option>
                    <option value="services">Our Services</option>
                    <option value="partnership">Strategic Partnership</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="media">Media Inquiry</option>
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="admin">Administrative Matter</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-3 text-gray-700">Message *</label>
                  <textarea
                    rows="6"
                    required
                    className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 flex items-center justify-center gap-3"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </motion.button>
                
                <p className="text-center text-sm text-gray-500 mt-6">
                  We'll get back to you within 24-48 hours
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Partnership Section */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900 to-blue-950 rounded-2xl p-8 text-white shadow-2xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                  <Mail className="h-5 w-5" />
                </div>
                Get in Touch
              </h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start group"
                  >
                    <div className="text-cyan-400 mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-1 inline-block"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-300">{item.info}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Partnership Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Partnership Opportunities</h4>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {partnershipTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-0.5 bg-gradient-to-br ${type.color} rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                    <div className="relative bg-gray-50 rounded-xl p-6 border border-gray-200 group-hover:border-transparent transition-all duration-300">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${type.color} mb-4`}>
                        <div className="text-white">
                          {type.icon}
                        </div>
                      </div>
                      <h5 className="font-bold text-gray-900 mb-2">{type.title}</h5>
                      <p className="text-gray-600 text-sm">{type.description}</p>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <button className="text-sm font-medium text-gray-500 group-hover:text-blue-600 transition-colors flex items-center">
                          <span>Learn more</span>
                          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Map Placeholder - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-purple-900"></div>
              
              <div className="relative z-10 p-8 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-cyan-400" />
                    <h5 className="text-xl font-bold">Our Locations</h5>
                  </div>
                  <div className="flex items-center gap-2">
                    {['Accra', 'Nairobi', 'Lagos'].map((city, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-white/10 text-sm font-medium">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="h-64 relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-30"></div>
                        <MapPin className="h-16 w-16 mx-auto text-white relative z-10" />
                      </div>
                      <p className="text-lg font-semibold mb-2">Interactive Map Integration</p>
                      <p className="text-gray-300">Showing research labs across Africa</p>
                      <div className="mt-6">
                        <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-medium transition-colors border border-white/20 backdrop-blur-sm">
                          View Full Map
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated location markers */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {['Ghana Lab', 'Kenya Hub', 'Nigeria Center'].map((lab, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-sm font-medium text-gray-300">{lab}</div>
                      <div className="text-xs text-gray-400">Active Research</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Response Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 mb-2">Quick Response Guarantee</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We prioritize all partnership inquiries and guarantee a response within 24 hours for urgent matters. Our team is ready to discuss how we can collaborate on Africa's technological advancement.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;