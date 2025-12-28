import { Mail, Phone, MapPin, Send, MessageSquare, Users, Clock } from 'lucide-react';
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
    { icon: <Mail className="h-4 w-4" />, title: "General Inquiries", info: "info@blazingtek.com", link: "mailto:info@blazingtek.com" },
    { icon: <Mail className="h-4 w-4" />, title: "Sales", info: "sales@blazingtek.com", link: "mailto:sales@blazingtek.com" },
    { icon: <Phone className="h-4 w-4" />, title: "Phone", info: "+263 788 605 607", link: "tel:+263788605607" },
    { icon: <MapPin className="h-4 w-4" />, title: "Location", info: "Harare, Zimbabwe", link: "#" },
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
      {/* Header with Background Image - Updated to match home page */}
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
          {/* Updated to match home page gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-emerald-900/20"></div>
          
          {/* Animated particles overlay */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
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
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/25 to-emerald-500/25 border border-white/30 backdrop-blur-md">
              <MessageSquare className="h-4 w-4 text-blue-300" />
              <span className="text-sm font-medium text-blue-200">Get in Touch</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg"
          >
            <span className="text-white">Contact </span>
            <span className="bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent font-extrabold drop-shadow-lg">
              Our Team
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-lg"
          >
            We're here to help you with innovative solutions and answer your questions.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-8 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full drop-shadow-lg"
          />
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100">
            <Users className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Let's Start a Conversation</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Reach Out to Us
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
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500">
                  <Send className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
              </div>
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
                  className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300"
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
                  className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300"
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
                  className="w-full px-5 py-3.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-900/25 hover:shadow-xl hover:shadow-blue-900/40"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 border border-gray-200"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
              </div>
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
                  className="flex items-start group cursor-pointer p-4 rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-emerald-50 mr-4 group-hover:from-blue-100 group-hover:to-emerald-100 transition-all">
                    <div className="text-blue-600">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-transparent bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 text-sm"
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
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-50 to-emerald-50">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <h5 className="font-semibold text-gray-900">Our Presence</h5>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 hover:border-blue-200 hover:text-blue-700 transition-all cursor-pointer"
                >
                  Harare, Zimbabwe
                </motion.span>
              </div>
            </div>
            
            <div className="mt-8 p-5 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-emerald-100">
                  <Clock className="h-4 w-4 text-blue-600" />
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