import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/bg4.jpg';

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
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#0A0F14]">
      {/* Header Section */}
      <section className="relative text-white py-16 md:py-20 overflow-hidden">
        {/* Background */}
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
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0A0F14] opacity-90"></div>
          
          {/* Animated data points */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`data-${i}`}
                className="absolute w-0.5 h-0.5 bg-[#00D4AA] rounded-full"
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
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          >
            <span className="text-white">Contact </span>
            <span className="text-[#00D4AA] font-bold">Our Team</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            We're here to help you with innovative solutions and answer your questions.
          </motion.p>

          {/* Accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-8 h-1 bg-[#00D4AA] rounded-full"
          />
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Reach Out to Us
          </h2>
          <div className="w-12 h-1 bg-[#00D4AA] mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you promptly
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A232E] rounded-xl p-8 border border-white/5"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#00D4AA]">
                  <Send className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
              </div>
              <p className="text-gray-400">Fill out the form and we'll get back to you soon.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-5 py-3.5 bg-[#0A0F14] border border-white/10 rounded-xl focus:ring-2 focus:ring-[#00D4AA]/30 focus:border-[#00D4AA] transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-5 py-3.5 bg-[#0A0F14] border border-white/10 rounded-xl focus:ring-2 focus:ring-[#00D4AA]/30 focus:border-[#00D4AA] transition-all duration-300 text-white placeholder-gray-500"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="5"
                  required
                  className="w-full px-5 py-3.5 bg-[#0A0F14] border border-white/10 rounded-xl focus:ring-2 focus:ring-[#00D4AA]/30 focus:border-[#00D4AA] transition-all duration-300 text-white placeholder-gray-500 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full inline-flex items-center justify-center gap-3 bg-[#0066CC] hover:bg-[#0052A3] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A232E] rounded-xl p-8 border border-white/5"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#00D4AA]">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              </div>
              <p className="text-gray-400">Reach us through any of these channels.</p>
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
                  className="flex items-start group cursor-pointer p-4 rounded-xl bg-[#0A0F14] border border-white/5 hover:border-[#00D4AA]/30 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-[#0A0F14] mr-4 group-hover:bg-[#00D4AA]/10 transition-all border border-white/5">
                    <div className="text-[#00D4AA]">
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-[#00D4AA] hover:text-[#00D4AA]/80 transition-all duration-300 text-sm"
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-gray-400 text-sm">{item.info}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[#0A0F14] border border-white/5">
                  <MapPin className="h-5 w-5 text-[#00D4AA]" />
                </div>
                <h5 className="font-semibold text-white">Our Presence</h5>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-[#0A0F14] border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:border-[#0066CC] transition-all cursor-pointer"
                >
                  Harare, Zimbabwe
                </motion.span>
              </div>
            </div>
            
            <div className="mt-8 p-5 bg-[#0A0F14] rounded-xl border border-white/5">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#0A0F14] border border-white/5">
                  <div className="h-4 w-4 text-[#00D4AA]">⏱</div>
                </div>
                <div>
                  <p className="text-sm font-medium text-white mb-1">Response Time</p>
                  <p className="text-sm text-gray-400">We typically respond within 24 hours during business days.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;