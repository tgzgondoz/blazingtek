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
      <section className="relative overflow-hidden text-white py-16 md:py-20">
        {/* Background */}
        <div className="absolute inset-0">
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
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-white">Strategic </span>
            <span className="text-[#00D4AA] font-bold">Partnerships</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Collaborate with us to drive technological innovation and sustainable development across Africa
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

      {/* Partnership Registration Form */}
      <section id="partnership-form" className="py-16 md:py-20 bg-[#0A0F14]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Network
            </h2>
            <div className="w-12 h-1 bg-[#00D4AA] mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-xl mx-auto">
              Submit your details to start a partnership conversation. We'll respond within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#1A232E] rounded-xl border border-white/5"
          >
            <div className="p-8">
              {/* Form Header */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
                <div className="p-2 rounded-lg bg-[#00D4AA]">
                  <Handshake className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Partnership Details</h3>
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
                      className="w-full px-4 py-3 bg-[#0A0F14] border border-white/10 rounded-lg focus:border-[#00D4AA] focus:ring-2 focus:ring-[#00D4AA]/30 transition-colors text-white"
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
                      className="w-full px-4 py-3 bg-[#0A0F14] border border-white/10 rounded-lg focus:border-[#00D4AA] focus:ring-2 focus:ring-[#00D4AA]/30 transition-colors text-white"
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
                      className="w-full px-4 py-3 bg-[#0A0F14] border border-white/10 rounded-lg focus:border-[#00D4AA] focus:ring-2 focus:ring-[#00D4AA]/30 transition-colors text-white"
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
                      className="w-full px-4 py-3 bg-[#0A0F14] border border-white/10 rounded-lg focus:border-[#00D4AA] focus:ring-2 focus:ring-[#00D4AA]/30 transition-colors text-white"
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
                      className="w-full px-4 py-3 bg-[#0A0F14] border border-white/10 rounded-lg focus:border-[#00D4AA] focus:ring-2 focus:ring-[#00D4AA]/30 transition-colors text-white"
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
                      className="w-full px-4 py-3 bg-[#0A0F14] border border-white/10 rounded-lg focus:border-[#00D4AA] focus:ring-2 focus:ring-[#00D4AA]/30 transition-colors text-white"
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
                    className="w-full px-4 py-3 bg-[#0A0F14] border border-white/10 rounded-lg focus:border-[#00D4AA] focus:ring-2 focus:ring-[#00D4AA]/30 transition-colors text-white"
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
                    className="w-full px-4 py-3 bg-[#0A0F14] border border-white/10 rounded-lg focus:border-[#00D4AA] focus:ring-2 focus:ring-[#00D4AA]/30 transition-colors text-white resize-none"
                    placeholder="Briefly describe your partnership interests and goals..."
                  />
                </div>

                <div className="bg-[#0A0F14] p-4 rounded-lg border border-white/10">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreement"
                      name="agreement"
                      checked={formData.agreement}
                      onChange={handleInputChange}
                      required
                      className="h-4 w-4 text-[#00D4AA] rounded border-white/20 focus:ring-[#00D4AA] mt-0.5 bg-[#0A0F14]"
                    />
                    <label htmlFor="agreement" className="text-xs text-gray-400">
                      I confirm that I have the authority to represent my organization and agree to receive communications regarding this partnership inquiry.
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full inline-flex items-center justify-center gap-3 bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold py-4 rounded-xl transition-all duration-300"
                  >
                    <span>Submit Application</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  
                  <p className="text-center text-xs text-gray-500 mt-3">
                    By submitting, you agree to our{' '}
                    <Link to="/privacy" className="text-[#00D4AA] hover:text-[#00D4AA]/80 font-medium">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link to="/terms" className="text-[#00D4AA] hover:text-[#00D4AA]/80 font-medium">
                      Terms
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            {/* Benefits & Contact */}
            <div className="bg-[#0A0F14] border-t border-white/10 p-8 rounded-b-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-[#0A0F14] border border-white/10">
                      <div className="h-4 w-4 text-[#00D4AA]">✓</div>
                    </div>
                    <h4 className="text-sm font-semibold text-white">
                      Partnership Benefits
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-400 flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-[#00D4AA]" />
                      Access to cutting-edge research
                    </li>
                    <li className="text-sm text-gray-400 flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-[#00D4AA]" />
                      Joint funding opportunities
                    </li>
                    <li className="text-sm text-gray-400 flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-[#00D4AA]" />
                      Talent development programs
                    </li>
                    <li className="text-sm text-gray-400 flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-[#00D4AA]" />
                      Technology transfer support
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="p-2 rounded-lg bg-[#0A0F14] border border-white/10">
                      <Mail className="h-4 w-4 text-[#00D4AA]" />
                    </div>
                    <h4 className="text-sm font-semibold text-white">
                      Contact Info
                    </h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#0A0F14] border border-white/10">
                        <Mail className="h-3 w-3 text-gray-400" />
                      </div>
                      <span className="text-sm text-gray-400">info@blazingtek.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#0A0F14] border border-white/10">
                        <Phone className="h-3 w-3 text-gray-400" />
                      </div>
                      <span className="text-sm text-gray-400">+263 788 605 607</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#0A0F14] border border-white/10">
                        <MapPin className="h-3 w-3 text-gray-400" />
                      </div>
                      <span className="text-sm text-gray-400">Harare, Zimbabwe</span>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-[#00D4AA] font-semibold">
                    Average response time: 24 hours
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