import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/bg4.jpg'; // Import background image - change this to bg4.jpg if you have it

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    { icon: <Mail className="h-4 w-4" />, title: "General Inquiries", info: "info@blazingtek.co", link: "mailto:info@blazingtek.co" },
    { icon: <Mail className="h-4 w-4" />, title: "Sales", info: "sales@blazingtek.co", link: "mailto:sales@blazingtek.co" },
    { icon: <Phone className="h-4 w-4" />, title: "Phone", info: "+233 24 123 4567", link: "tel:+233241234567" },
    { icon: <MapPin className="h-4 w-4" />, title: "Locations", info: "Accra, Ghana | Nairobi, Kenya" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Background Image */}
      <div className="relative text-white py-16 md:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="Contact Background"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              console.error("Error loading background image");
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
          {/* Reduced opacity gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/50 to-cyan-900/70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-gray-900/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/20 via-transparent to-cyan-700/20"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 1.5,
                }}
              />
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto px-4 text-center"
        >
          {/* Decorative icon */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg"
          >
            <span className="text-white">Get in </span>
            <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent font-extrabold drop-shadow-lg">
              Touch
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-lg"
          >
            Contact our team. We're here to help you with innovative solutions.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-8 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-full drop-shadow-lg"
          />
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Let's Start a Conversation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you promptly
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Send a Message</h3>
              <p className="text-gray-600">Fill out the form and we'll get back to you soon.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="5"
                  required
                  className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <span>Send Message</span>
                <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Contact Information</h3>
              <p className="text-gray-600">Reach us through any of these channels.</p>
            </div>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start group cursor-pointer"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 mr-4 group-hover:from-blue-100 group-hover:to-cyan-100 transition-all">
                    <div className="text-blue-600">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-sm">{item.info}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-5 w-5 text-blue-600" />
                <h5 className="font-semibold text-gray-900">Our Presence Across Africa</h5>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Accra, Ghana', 'Nairobi, Kenya', 'Lagos, Nigeria', 'Cape Town, South Africa'].map((city, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all cursor-pointer"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-100">
                  <Phone className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 mb-1">Response Time</p>
                  <p className="text-sm text-gray-600">We typically respond within 24 hours during business days.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;