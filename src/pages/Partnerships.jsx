import { 
  Handshake,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Partnerships = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    partnershipType: '',
    message: '',
    agreement: false
  });

  const partnershipTypes = [
    'Academic Institution',
    'Government Agency',
    'NGO/Non-Profit',
    'Corporate Partner',
    'Research Collaboration',
    'Technology Transfer',
    'Funding/Sponsorship',
    'Student Exchange'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#0A0F14]">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white py-20 md:py-28">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Strategic Partnerships
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Collaborate with us to drive technological innovation and sustainable development across Africa
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto mt-8 h-1 bg-white rounded-full"
          />
        </motion.div>
      </section>

      {/* Partnership Registration Form */}
      <section id="partnership-form" className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Network
            </h2>
            <div className="w-16 h-1 bg-white mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Submit your details to start a partnership conversation. We'll respond within 24 hours.
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/5 rounded-xl border border-white/10">
              <div className="p-6 md:p-8">
                {/* Form Header */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <Handshake className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Partnership Details</h3>
                    <p className="text-sm text-gray-400">All fields are required unless marked optional</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder-gray-500"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder-gray-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder-gray-500"
                        placeholder="john@organization.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder-gray-500"
                        placeholder="+263 788 605 607"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Organization *
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder-gray-500"
                        placeholder="Organization name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Position *
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder-gray-500"
                        placeholder="e.g., Director of Research"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Partnership Interest *
                    </label>
                    <select
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white focus:outline-none transition-colors text-white"
                    >
                      <option value="">Select partnership type</option>
                      {partnershipTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Partnership Proposal *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-white focus:outline-none transition-colors text-white resize-none placeholder-gray-500"
                      placeholder="Briefly describe your partnership interests and goals..."
                    />
                  </div>

                  <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="agreement"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleInputChange}
                        required
                        className="h-4 w-4 text-white rounded border-white/20 focus:ring-white mt-0.5 bg-white/5"
                      />
                      <label htmlFor="agreement" className="text-sm text-gray-300">
                        I confirm that I have the authority to represent my organization and agree to receive communications regarding this partnership inquiry.
                      </label>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-white text-[#0A0F14] hover:bg-gray-100 font-medium py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <span>Submit Application</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    
                    <p className="text-center text-sm text-gray-500 mt-4">
                      By submitting, you agree to our{' '}
                      <Link to="/privacy" className="text-white hover:text-gray-200 font-medium transition-colors">
                        Privacy Policy
                      </Link>{' '}
                      and{' '}
                      <Link to="/terms" className="text-white hover:text-gray-200 font-medium transition-colors">
                        Terms
                      </Link>
                    </p>
                  </div>
                </form>
              </div>

              {/* Benefits & Contact */}
              <div className="bg-white/5 border-t border-white/10 p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="text-base font-semibold text-white">
                        Partnership Benefits
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="text-sm text-gray-400 flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-white" />
                        Access to cutting-edge research
                      </li>
                      <li className="text-sm text-gray-400 flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-white" />
                        Joint funding opportunities
                      </li>
                      <li className="text-sm text-gray-400 flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-white" />
                        Talent development programs
                      </li>
                      <li className="text-sm text-gray-400 flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-white" />
                        Technology transfer support
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="text-base font-semibold text-white">
                        Contact Info
                      </h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded bg-white/5 border border-white/10">
                          <Mail className="h-4 w-4 text-gray-400" />
                        </div>
                        <span className="text-sm text-gray-400">info@blazingtek.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded bg-white/5 border border-white/10">
                          <Phone className="h-4 w-4 text-gray-400" />
                        </div>
                        <span className="text-sm text-gray-400">+263 788 605 607</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded bg-white/5 border border-white/10">
                          <MapPin className="h-4 w-4 text-gray-400" />
                        </div>
                        <span className="text-sm text-gray-400">Harare, Zimbabwe</span>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-white font-medium bg-white/5 inline-block px-3 py-2 rounded border border-white/10">
                      Average response time: 24 hours
                    </div>
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

export default Partnerships;