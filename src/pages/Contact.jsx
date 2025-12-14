// Contact.jsx
import { Mail, Phone, MapPin, Send, Building, Globe } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    interest: '',
    message: ''
  });

  const contactInfo = [
    { icon: <Mail />, title: "General Inquiries", info: "info@blazingtek.co", link: "mailto:info@blazingtek.co" },
    { icon: <Mail />, title: "Sales & Services", info: "sales@blazingtek.co", link: "mailto:sales@blazingtek.co" },
    { icon: <Mail />, title: "Administration", info: "secretary@blazingtek.co", link: "mailto:secretary@blazingtek.co" },
    { icon: <Phone />, title: "Phone", info: "+233 24 123 4567", link: "tel:+233241234567" },
    { icon: <MapPin />, title: "Headquarters", info: "Accra, Ghana | Nairobi, Kenya | Lagos, Nigeria" },
    { icon: <Building />, title: "Research Labs", info: "Open for academic and industry collaborations" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Collaborate With Us</h1>
          <p className="text-xl max-w-3xl">
            Interested in research partnerships, joint projects, or exploring how our 
            technology can support your mission? Let's connect.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Organization</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Area of Interest</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-blue-600 mr-4 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-gray-600 hover:text-blue-600">
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Partnership Types */}
              <div className="border-t pt-8">
                <h4 className="text-xl font-bold mb-4">Partnership Opportunities</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-green-600 mr-3" />
                    <span>Academic Research Collaborations</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Industry R&D Partnerships</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-purple-600 mr-3" />
                    <span>Government & NGO Projects</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-yellow-600 mr-3" />
                    <span>Student Internship Programs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-800 rounded-xl h-64 flex items-center justify-center text-white">
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <p>Interactive Map Integration</p>
                <p className="text-sm text-gray-400">Showing locations across Africa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;