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
      {/* Hero Section - Glass Effect */}
      <section className="relative overflow-hidden text-white py-20 md:py-24">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 102, 204, 0.2) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-white drop-shadow-lg">Strategic </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4AA] to-[#0066CC] font-bold drop-shadow-lg">
              Partnerships
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-lg"
          >
            Collaborate with us to drive technological innovation and sustainable development across Africa
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

      {/* Partnership Registration Form - Glass Effect */}
      <section id="partnership-form" className="py-16 md:py-20 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join Our Network
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#00D4AA] to-[#0066CC] mx-auto mb-6 rounded-full shadow-lg"></div>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto">
              Submit your details to start a partnership conversation. We'll respond within 24 hours.
            </p>
          </motion.div>

          {/* Glass Effect Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00D4AA]/5 to-[#0066CC]/5 opacity-30 blur-xl"></div>
              
              <div className="p-8 relative z-10">
                {/* Form Header */}
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/10">
                  <div className="p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
                    <Handshake className="h-6 w-6 text-[#00D4AA]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Partnership Details</h3>
                    <p className="text-sm text-gray-300">All fields are required unless marked optional</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl focus:border-[#00D4AA] focus:ring-2 focus:ring-[#00D4AA]/30 transition-all duration-300 text-white placeholder-gray-500"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl focus:border-[#00D4AA] focus:ring-2 focus:ring-[#00D4AA]/30 transition-all duration-300 text-white placeholder-gray-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl focus:border-[#00D4AA] focus:ring-2 focus:ring-[#00D4AA]/30 transition-all duration-300 text-white placeholder-gray-500"
                        placeholder="john@organization.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl focus:border-[#00D4AA] focus:ring-2 focus:ring-[#00D4AA]/30 transition-all duration-300 text-white placeholder-gray-500"
                        placeholder="+263 788 605 607"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Organization *
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl focus:border-[#00D4AA] focus:ring-2 focus:ring-[#00D4AA]/30 transition-all duration-300 text-white placeholder-gray-500"
                        placeholder="Organization name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">
                        Position *
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl focus:border-[#00D4AA] focus:ring-2 focus:ring-[#00D4AA]/30 transition-all duration-300 text-white placeholder-gray-500"
                        placeholder="e.g., Director of Research"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Partnership Interest *
                    </label>
                    <select
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl focus:border-[#00D4AA] focus:ring-2 focus:ring-[#00D4AA]/30 transition-all duration-300 text-white"
                    >
                      <option value="">Select partnership type</option>
                      {partnershipTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Partnership Proposal *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-5 py-4 backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl focus:border-[#00D4AA] focus:ring-2 focus:ring-[#00D4AA]/30 transition-all duration-300 text-white resize-none placeholder-gray-500"
                      placeholder="Briefly describe your partnership interests and goals..."
                    />
                  </div>

                  <div className="backdrop-blur-sm bg-white/5 p-5 rounded-xl border border-white/10">
                    <div className="flex items-start gap-4">
                      <input
                        type="checkbox"
                        id="agreement"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleInputChange}
                        required
                        className="h-5 w-5 text-[#00D4AA] rounded border-white/20 focus:ring-[#00D4AA] mt-0.5 backdrop-blur-sm bg-white/5"
                      />
                      <label htmlFor="agreement" className="text-sm text-gray-300">
                        I confirm that I have the authority to represent my organization and agree to receive communications regarding this partnership inquiry.
                      </label>
                    </div>
                  </div>

                  <div className="pt-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0066CC] to-[#00D4AA] hover:opacity-90 text-white font-semibold py-5 rounded-xl transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10">Submit Application</span>
                      <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    </motion.button>
                    
                    <p className="text-center text-sm text-gray-500 mt-4">
                      By submitting, you agree to our{' '}
                      <Link to="/privacy" className="text-[#00D4AA] hover:text-white font-medium transition-colors">
                        Privacy Policy
                      </Link>{' '}
                      and{' '}
                      <Link to="/terms" className="text-[#00D4AA] hover:text-white font-medium transition-colors">
                        Terms
                      </Link>
                    </p>
                  </div>
                </form>
              </div>

              {/* Benefits & Contact - Glass Effect */}
              <div className="backdrop-blur-sm bg-white/5 border-t border-white/10 p-8 rounded-b-2xl">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
                        <div className="h-5 w-5 text-[#00D4AA]">✓</div>
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        Partnership Benefits
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      <li className="text-sm text-gray-300 flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-[#00D4AA]" />
                        Access to cutting-edge research
                      </li>
                      <li className="text-sm text-gray-300 flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-[#00D4AA]" />
                        Joint funding opportunities
                      </li>
                      <li className="text-sm text-gray-300 flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-[#00D4AA]" />
                        Talent development programs
                      </li>
                      <li className="text-sm text-gray-300 flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-[#00D4AA]" />
                        Technology transfer support
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10">
                        <Mail className="h-5 w-5 text-[#00D4AA]" />
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        Contact Info
                      </h4>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10">
                          <Mail className="h-4 w-4 text-gray-400" />
                        </div>
                        <span className="text-sm text-gray-300">info@blazingtek.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10">
                          <Phone className="h-4 w-4 text-gray-400" />
                        </div>
                        <span className="text-sm text-gray-300">+263 788 605 607</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10">
                          <MapPin className="h-4 w-4 text-gray-400" />
                        </div>
                        <span className="text-sm text-gray-300">Harare, Zimbabwe</span>
                      </div>
                    </div>
                    <div className="mt-6 text-sm text-[#00D4AA] font-semibold backdrop-blur-sm bg-white/5 inline-block px-3 py-2 rounded-lg border border-white/10">
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