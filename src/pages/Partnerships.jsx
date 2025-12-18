import { 
  Globe, 
  Handshake, 
  Award, 
  Users, 
  TrendingUp, 
  Shield,
  ExternalLink,
  Building,
  Calendar,
  Target,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Zap,
  FileText,
  MessageCircle,
  MapPin,
  CheckCircle,
  Star,
  Mail,
  Phone,
  User,
  Briefcase,
  MessageSquare
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/20 backdrop-blur-sm">
            <Handshake className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Strategic Collaborations</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Strategic
            </span>
            <br />
            <motion.span 
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Partnerships
            </motion.span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-10"
          >
            Collaborating with leading organizations to drive technological innovation 
            and sustainable development across Africa
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <a 
              href="#partnership-form"
              className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
            >
              <span>Become a Partner</span>
              <ExternalLink className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Partnership Registration Form */}
      <section id="partnership-form" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200">
              <Handshake className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">Join Our Network</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partner <span className="text-blue-600">With Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out the form below to start your partnership journey with us. Our team will contact you within 48 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="grid md:grid-cols-3">
              {/* Form Sidebar */}
              <div className="md:col-span-1 bg-gradient-to-b from-blue-600 to-purple-600 text-white p-8 md:p-12">
                <div className="mb-8">
                  <Award className="h-10 w-10 mb-4 text-blue-200" />
                  <h3 className="text-xl font-bold mb-3">Why Partner With Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-blue-100">Access to cutting-edge research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-blue-100">Joint funding opportunities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-blue-100">Talent development programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-blue-100">Technology transfer support</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8 border-t border-blue-500/30">
                  <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-blue-200" />
                      <span className="text-sm text-blue-100">partnerships@innovation.org</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-blue-200" />
                      <span className="text-sm text-blue-100">+233 24 123 4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-blue-200" />
                      <span className="text-sm text-blue-100">Accra, Ghana</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-500/20 rounded-xl">
                  <p className="text-sm text-blue-100">
                    <span className="font-semibold">Average response time:</span> 24-48 hours
                  </p>
                </div>
              </div>

              {/* Main Form */}
              <div className="md:col-span-2 p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gray-400" />
                          First Name *
                        </div>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="Enter your first name"
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-gray-400" />
                          Email Address *
                        </div>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="your.email@organization.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-gray-400" />
                          Phone Number
                        </div>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="+233 24 123 4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-gray-400" />
                          Organization *
                        </div>
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="Your organization name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Position/Title *
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                        placeholder="e.g., Director of Research"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Handshake className="h-4 w-4 text-gray-400" />
                        Type of Partnership Interest *
                      </div>
                    </label>
                    <select
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors appearance-none"
                    >
                      <option value="">Select partnership type</option>
                      {partnershipTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-gray-400" />
                        Partnership Proposal/Message *
                      </div>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors resize-none"
                      placeholder="Tell us about your partnership interests, goals, and how we can collaborate..."
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="agreement"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleInputChange}
                        required
                        className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 mt-0.5"
                      />
                      <label htmlFor="agreement" className="text-sm text-gray-700">
                        I agree to receive communications regarding this partnership inquiry and confirm that I have the authority to represent my organization in partnership discussions. I understand that my information will be processed in accordance with your privacy policy.
                      </label>
                    </div>
                  </div>

                  <div className="pt-6">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
                    >
                      <span>Submit Partnership Application</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                    
                    <p className="text-center text-sm text-gray-500 mt-4">
                      By submitting this form, you agree to our{' '}
                      <Link to="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                        Privacy Policy
                      </Link>{' '}
                      and{' '}
                      <Link to="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                        Terms of Service
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Next Steps</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-blue-600 mb-3">
                  <MessageCircle className="h-8 w-8 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Initial Consultation</h4>
                <p className="text-sm text-gray-600">
                  Our partnership team will schedule a call to understand your objectives
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-purple-600 mb-3">
                  <FileText className="h-8 w-8 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Proposal Review</h4>
                <p className="text-sm text-gray-600">
                  We'll evaluate alignment and create a customized partnership framework
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="text-emerald-600 mb-3">
                  <CheckCircle className="h-8 w-8 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Agreement & Kickoff</h4>
                <p className="text-sm text-gray-600">
                  Formalize partnership and begin collaborative project implementation
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;