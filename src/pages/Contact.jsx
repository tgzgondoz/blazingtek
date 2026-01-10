import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Contact Our Team
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            We're here to help you with innovative solutions and answer your questions.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-8 h-1 bg-white rounded-full"
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Reach Out to Us
          </h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you promptly
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Send a Message</h3>
                </div>
                <p className="text-gray-400">Fill out the form and we'll get back to you soon.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder-gray-500"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder-gray-500"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="4"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder-gray-500 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-[#0A0F14] hover:bg-gray-100 font-medium py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 h-full">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Contact Information</h3>
                </div>
                <p className="text-gray-400">Reach us through any of these channels.</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="group"
                  >
                    <a 
                      href={item.link}
                      className="flex items-start p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="p-2 rounded mr-4 bg-white/5 border border-white/10">
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-400">
                          {item.info}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded bg-white/5 border border-white/10">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <h5 className="font-medium text-white">Our Presence</h5>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-400">
                    Harare, Zimbabwe
                  </span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-white/5 border border-white/10">
                    <div className="h-4 w-4 text-white">⏱</div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white mb-1">Response Time</p>
                    <p className="text-sm text-gray-400">We typically respond within 24 hours during business days.</p>
                  </div>
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