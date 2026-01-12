import { 
  Handshake,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin
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
    <div className="min-h-screen bg-black">
      {/* Animated Header - Professional but Visible */}
      <section className="relative text-white py-20 md:py-28 overflow-hidden">
        {/* Visible Background with Professional Animations */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-[#0A0F14]"
        >
          {/* Base color film overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F14] via-[#0F172A]/90 to-[#1E293B]/70" />
          
          {/* Visible gradient overlays */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-indigo-900/25 to-transparent mix-blend-overlay"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.3 }}
            className="absolute inset-0 bg-gradient-to-tl from-emerald-900/20 via-teal-900/15 to-transparent mix-blend-overlay"
          />
          
          {/* Visible floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0,
                scale: 0,
              }}
              animate={{ 
                opacity: [0.1, 0.25, 0.1],
                scale: [1, 1.2, 1],
                y: Math.random() * 120 - 60,
                x: Math.random() * 120 - 60
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className="absolute w-[2px] h-[2px] bg-white/60 rounded-full shadow-sm shadow-blue-300/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
          
          {/* Visible grid lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(100, 150, 255, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(100, 150, 255, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
          
          {/* Visible center glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.15, 0.25, 0.15],
              scale: [1, 1.1, 1]
            }}
            transition={{
              opacity: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500/15 via-transparent to-transparent"
          />
          
          {/* Visible animated orb */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-400/20 rounded-full"
          />
          
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
          
          {/* Visible animated lines */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 2, delay: 0.8 }}
              d="M10,10 Q200,100 390,10"
              stroke="rgba(100, 150, 255, 0.3)"
              strokeWidth="1"
              fill="none"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 2, delay: 1 }}
              d="M10,90 Q200,180 390,90"
              stroke="rgba(100, 150, 255, 0.3)"
              strokeWidth="1"
              fill="none"
            />
          </svg>
          
          {/* Subtle noise texture */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
              mixBlendMode: 'overlay'
            }}
          />
        </motion.div>

        {/* Content with visible animations */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-4xl mx-auto px-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight"
          >
            Strategic Partnerships
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "150px" }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/70 to-transparent mx-auto mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-xl text-gray-300/90 max-w-2xl mx-auto mb-8 leading-relaxed font-light"
          >
            Collaborate with us to drive technological innovation and sustainable development across Africa
          </motion.p>
        </motion.div>
      </section>

      {/* Partnership Registration Form */}
      <section id="partnership-form" className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Join Our Network
            </h2>
            <p className="text-gray-400/80 text-lg max-w-xl mx-auto font-light">
              Submit your details to start a partnership conversation. We'll respond within 24 hours.
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl">
              <div className="p-8">
                {/* Form Header */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <Handshake className="h-6 w-6 text-white/90" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-tight">Partnership Details</h3>
                    <p className="text-sm text-gray-400/70 font-light">All fields are required unless marked optional</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300/90 mb-2 tracking-wide">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400/50 focus:outline-none transition-all duration-200 text-white placeholder-gray-500/60 font-light"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300/90 mb-2 tracking-wide">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400/50 focus:outline-none transition-all duration-200 text-white placeholder-gray-500/60 font-light"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300/90 mb-2 tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400/50 focus:outline-none transition-all duration-200 text-white placeholder-gray-500/60 font-light"
                        placeholder="john@organization.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300/90 mb-2 tracking-wide">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400/50 focus:outline-none transition-all duration-200 text-white placeholder-gray-500/60 font-light"
                        placeholder="+263 788 605 607"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300/90 mb-2 tracking-wide">
                        Organization *
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400/50 focus:outline-none transition-all duration-200 text-white placeholder-gray-500/60 font-light"
                        placeholder="Organization name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300/90 mb-2 tracking-wide">
                        Position *
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400/50 focus:outline-none transition-all duration-200 text-white placeholder-gray-500/60 font-light"
                        placeholder="e.g., Director of Research"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300/90 mb-2 tracking-wide">
                      Partnership Interest *
                    </label>
                    <select
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400/50 focus:outline-none transition-all duration-200 text-white font-light appearance-none"
                    >
                      <option value="" className="bg-gray-900">Select partnership type</option>
                      {partnershipTypes.map((type, index) => (
                        <option key={index} value={type} className="bg-gray-900">{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300/90 mb-2 tracking-wide">
                      Partnership Proposal *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-400/50 focus:outline-none transition-all duration-200 text-white resize-none placeholder-gray-500/60 font-light"
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
                        className="h-4 w-4 text-white rounded border-white/20 focus:ring-blue-400/30 mt-0.5 bg-white/5"
                      />
                      <label htmlFor="agreement" className="text-sm text-gray-300/80 font-light">
                        I confirm that I have the authority to represent my organization and agree to receive communications regarding this partnership inquiry.
                      </label>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-white text-black hover:bg-gray-50 font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.01]"
                    >
                      <span>Submit Application</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    
                    <p className="text-center text-sm text-gray-500/70 mt-4 font-light">
                      By submitting, you agree to our{' '}
                      <Link to="/privacy" className="text-white/90 hover:text-white font-medium transition-colors duration-200">
                        Privacy Policy
                      </Link>{' '}
                      and{' '}
                      <Link to="/terms" className="text-white/90 hover:text-white font-medium transition-colors duration-200">
                        Terms
                      </Link>
                    </p>
                  </div>
                </form>
              </div>

              {/* Benefits & Contact */}
              <div className="bg-white/5 border-t border-white/10 p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                        <CheckCircle className="h-5 w-5 text-white/90" />
                      </div>
                      <h4 className="text-base font-semibold text-white tracking-tight">
                        Partnership Benefits
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      <li className="text-sm text-gray-400/80 font-light flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-white/70" />
                        Access to cutting-edge research
                      </li>
                      <li className="text-sm text-gray-400/80 font-light flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-white/70" />
                        Joint funding opportunities
                      </li>
                      <li className="text-sm text-gray-400/80 font-light flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-white/70" />
                        Talent development programs
                      </li>
                      <li className="text-sm text-gray-400/80 font-light flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-white/70" />
                        Technology transfer support
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                        <Mail className="h-5 w-5 text-white/90" />
                      </div>
                      <h4 className="text-base font-semibold text-white tracking-tight">
                        Contact Info
                      </h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded bg-white/5 border border-white/10">
                          <Mail className="h-4 w-4 text-gray-400/70" />
                        </div>
                        <span className="text-sm text-gray-400/80 font-light">info@blazingtek.co</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded bg-white/5 border border-white/10">
                          <Phone className="h-4 w-4 text-gray-400/70" />
                        </div>
                        <span className="text-sm text-gray-400/80 font-light">+263 788 605 607</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded bg-white/5 border border-white/10">
                          <MapPin className="h-4 w-4 text-gray-400/70" />
                        </div>
                        <span className="text-sm text-gray-400/80 font-light">Harare, Zimbabwe</span>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-white/90 font-medium bg-white/5 inline-block px-3 py-2 rounded border border-white/10 tracking-wide">
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