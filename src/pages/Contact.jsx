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
      {/* Header Section - Glass Effect Style */}
      <section className="relative text-white py-20 md:py-24 overflow-hidden">
        {/* Background with visible image */}
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt="Contact Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'brightness(0.8) contrast(1.1)'
            }}
            onError={(e) => {
              console.error("Error loading background image");
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F14]/50 via-[#0A0F14]/70 to-[#0A0F14]"></div>
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
            className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
          >
            <span className="text-white drop-shadow-lg">Contact </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#0066CC] font-bold drop-shadow-lg">
              Our Team
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-lg"
          >
            We're here to help you with innovative solutions and answer your questions.
          </motion.p>

          {/* Accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-8 h-1.5 bg-gradient-to-r from-[#00D4AA] to-[#0066CC] rounded-full shadow-lg"
          />
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 102, 204, 0.2) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Reach Out to Us
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#00D4AA] to-[#0066CC] mx-auto mb-6 rounded-full shadow-lg"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Fill out the form below and our team will get back to you promptly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form - Glass Effect */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00D4AA]/5 to-[#0066CC]/5 opacity-30 blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="mb-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
                        <Send className="h-6 w-6 text-[#00D4AA]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                    </div>
                    <p className="text-gray-300">Fill out the form and we'll get back to you soon.</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label className="block text-sm font-medium mb-4 text-gray-300">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-6 py-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#00D4AA]/30 focus:border-[#00D4AA] transition-all duration-300 text-white placeholder-gray-500"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-4 text-gray-300">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-6 py-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#00D4AA]/30 focus:border-[#00D4AA] transition-all duration-300 text-white placeholder-gray-500"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-4 text-gray-300">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows="5"
                        required
                        className="w-full px-6 py-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-[#00D4AA]/30 focus:border-[#00D4AA] transition-all duration-300 text-white placeholder-gray-500 resize-none"
                        placeholder="Tell us about your project or inquiry..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0066CC] to-[#00D4AA] hover:opacity-90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10">Send Message</span>
                      <Send className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Info - Glass Effect */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl h-full">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#0066CC]/5 to-[#00D4AA]/5 opacity-30 blur-xl"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
                        <Mail className="h-6 w-6 text-[#00D4AA]" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                    </div>
                    <p className="text-gray-300">Reach us through any of these channels.</p>
                  </div>
                  
                  <div className="space-y-6 mb-10 flex-1">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="group cursor-pointer"
                      >
                        <a 
                          href={item.link}
                          className="flex items-start p-5 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-[#00D4AA]/30 transition-all duration-300 group-hover:bg-white/10"
                        >
                          <div className="p-3 rounded-lg mr-5 backdrop-blur-sm bg-white/5 border border-white/10 group-hover:bg-[#00D4AA]/10 transition-all">
                            <div className="text-[#00D4AA]">
                              {item.icon}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                            <p className="text-gray-300 group-hover:text-[#00D4AA] transition-colors duration-300">
                              {item.info}
                            </p>
                          </div>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="pt-8 border-t border-white/10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
                        <MapPin className="h-5 w-5 text-[#00D4AA]" />
                      </div>
                      <h5 className="font-semibold text-white text-lg">Our Presence</h5>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="px-4 py-3 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:border-[#00D4AA]/30 transition-all cursor-pointer"
                      >
                        Harare, Zimbabwe
                      </motion.span>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
                        <div className="h-5 w-5 text-[#00D4AA]">⏱</div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white mb-2">Response Time</p>
                        <p className="text-sm text-gray-300">We typically respond within 24 hours during business days.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;