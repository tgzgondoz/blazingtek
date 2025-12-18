import { 
  Handshake,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  MessageCircle,
  FileText,
  User,
  Briefcase,
  MessageSquare,
  ArrowRight,
  Shield
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Compact */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <motion.span 
              className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Strategic Partnerships
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Collaborate with us to drive technological innovation and sustainable development across Africa
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="#partnership-form"
              className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 shadow-lg"
            >
              <span>Become a Partner</span>
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Partnership Registration Form */}
      <section id="partnership-form" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Partnership Application</span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Network
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Submit your details to start a partnership conversation. We'll respond within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg border border-gray-200"
          >
            <div className="p-8">
              {/* Compact Form Header */}
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                  <Handshake className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Partnership Details</h3>
                  <p className="text-sm text-gray-500">All fields are required unless marked optional</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="john@organization.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="+233 24 123 4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Organization *
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Organization name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position *
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="e.g., Director of Research"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Partnership Interest *
                  </label>
                  <select
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors bg-white"
                  >
                    <option value="">Select partnership type</option>
                    {partnershipTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Partnership Proposal *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2.5 text-sm rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    placeholder="Briefly describe your partnership interests and goals..."
                  />
                </div>

                <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="agreement"
                      name="agreement"
                      checked={formData.agreement}
                      onChange={handleInputChange}
                      required
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mt-0.5"
                    />
                    <label htmlFor="agreement" className="text-xs text-gray-700">
                      I confirm that I have the authority to represent my organization and agree to receive communications regarding this partnership inquiry.
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-300 shadow hover:shadow-md flex items-center justify-center gap-2 text-sm"
                  >
                    <span>Submit Application</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                  
                  <p className="text-center text-xs text-gray-500 mt-3">
                    By submitting, you agree to our{' '}
                    <Link to="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link to="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                      Terms
                    </Link>
                  </p>
                </div>
              </form>
            </div>

            {/* Compact Benefits & Contact */}
            <div className="bg-gray-50 border-t border-gray-200 p-8 rounded-b-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    Partnership Benefits
                  </h4>
                  <ul className="space-y-2">
                    <li className="text-xs text-gray-600">• Access to cutting-edge research</li>
                    <li className="text-xs text-gray-600">• Joint funding opportunities</li>
                    <li className="text-xs text-gray-600">• Talent development programs</li>
                    <li className="text-xs text-gray-600">• Technology transfer support</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-blue-600" />
                    Contact Info
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-600">partnerships@innovation.org</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-600">+233 24 123 4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-600">Accra, Ghana</span>
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-blue-600 font-medium">
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