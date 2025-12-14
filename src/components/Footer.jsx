import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram, 
  Globe,
  Heart,
  ArrowRight,
  Send
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Footer = () => {
  const footerLinks = {
    Research: [
      { name: 'AI Integration', path: '/research/ai' },
      { name: 'Sustainable Robotics', path: '/research/sustainability' },
      { name: 'Assistive Technology', path: '/research/assistive' },
      { name: 'Lab Projects', path: '/research/labs' },
      { name: 'Publications', path: '/research/publications' },
    ],
    Services: [
      { name: 'Robotics Kits', path: '/services/kits' },
      { name: 'Workshops', path: '/services/workshops' },
      { name: 'Custom Solutions', path: '/services/custom' },
      { name: 'Maintenance', path: '/services/maintenance' },
      { name: 'Consulting', path: '/services/consulting' },
    ],
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about#team' },
      { name: 'Careers', path: '/careers' },
      { name: 'Partnerships', path: '/partnerships' },
      { name: 'News & Blog', path: '/news' },
    ],
    Community: [
      { name: 'STEM Outreach', path: '/community/stem' },
      { name: 'Hackathons', path: '/community/hackathons' },
      { name: 'Open Source', path: '/community/opensource' },
      { name: 'Student Programs', path: '/community/students' },
      { name: 'Events', path: '/community/events' },
    ],
  };

  const socialLinks = [
    { icon: <Twitter size={20} />, name: 'Twitter', url: 'https://twitter.com/blazingtek', color: 'hover:bg-blue-500' },
    { icon: <Linkedin size={20} />, name: 'LinkedIn', url: 'https://linkedin.com/company/blazingtek', color: 'hover:bg-blue-700' },
    { icon: <Github size={20} />, name: 'GitHub', url: 'https://github.com/blazingtek', color: 'hover:bg-gray-800' },
    { icon: <Instagram size={20} />, name: 'Instagram', url: 'https://instagram.com/blazingtek', color: 'hover:bg-pink-600' },
    { icon: <Globe size={20} />, name: 'Research Portal', url: 'https://research.blazingtek.co', color: 'hover:bg-cyan-500' },
  ];

  const contactInfo = [
    { icon: <Mail size={18} />, text: 'info@blazingtek.co', link: 'mailto:info@blazingtek.co' },
    { icon: <Mail size={18} />, text: 'sales@blazingtek.co', link: 'mailto:sales@blazingtek.co' },
    { icon: <Mail size={18} />, text: 'secretary@blazingtek.co', link: 'mailto:secretary@blazingtek.co' },
    { icon: <Phone size={18} />, text: '+233 24 123 4567', link: 'tel:+233241234567' },
    { icon: <MapPin size={18} />, text: 'Accra, Ghana | Nairobi, Kenya | Lagos, Nigeria' },
  ];

  const partnerLogos = [
    { name: 'UNICEF', logo: '🏛️' },
    { name: 'African Union', logo: '🌍' },
    { name: 'UNDP', logo: '📊' },
    { name: 'MIT', logo: '🎓' },
    { name: 'Google AI', logo: '🤖' },
    { name: 'IBM Research', logo: '💻' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-10 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-400/30 rounded-2xl blur-xl"></div>
                <img 
                  src={logo} 
                  alt="BlazingTek Logo" 
                  className="h-14 w-14 object-contain relative"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    BLAZING
                  </h2>
                  <motion.span 
                    className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
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
                    TEK
                  </motion.span>
                </div>
                <p className="text-sm font-medium tracking-widest text-gray-400 uppercase mt-1">
                  Research Labs
                </p>
              </div>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mb-8 max-w-md leading-relaxed"
            >
              Pioneering research-driven technological solutions to address Africa's 
              most pressing challenges through innovation, collaboration, and sustainable development.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex space-x-3 mb-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gray-800/50 hover:bg-gray-800 p-3 rounded-xl transition-all duration-300 border border-white/5 ${social.color} backdrop-blur-sm`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start text-gray-400 group">
                  <span className="mr-3 text-blue-400 mt-0.5">{contact.icon}</span>
                  {contact.link ? (
                    <a 
                      href={contact.link} 
                      className="hover:text-blue-400 transition-colors duration-300 group-hover:translate-x-1 transition-transform"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span>{contact.text}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (categoryIndex + 1) }}
            >
              <h3 className="text-lg font-bold mb-6 text-white flex items-center">
                <span className="h-px w-8 bg-gradient-to-r from-blue-500 to-cyan-400 mr-3"></span>
                {category}
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent ml-3"></span>
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <ArrowRight className="h-3 w-3 mr-3 text-blue-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-900/20 via-gray-900/30 to-purple-900/20 rounded-2xl p-8 mb-12 backdrop-blur-sm border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0 md:max-w-md">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Join Our Research Network
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Get exclusive updates on our latest research breakthroughs, projects, and innovation opportunities.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 w-full sm:w-72 backdrop-blur-sm"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25"
              >
                <span>Subscribe</span>
                <Send className="h-4 w-4" />
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Partners Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-12 border-t border-white/10"
        >
          <p className="text-center text-gray-400 text-sm mb-8 font-medium tracking-wider">
            TRUSTED BY LEADING ORGANIZATIONS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-6 md:mb-0">
              <span className="flex items-center text-sm">
                Made with 
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart size={16} className="mx-2 text-red-500" />
                </motion.span>
                in Africa
              </span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} BlazingTek Research Labs. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-400">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link 
                      to={`/${item.toLowerCase().replace(' ', '-')}`} 
                      className="hover:text-blue-400 transition-colors flex items-center group"
                    >
                      {item}
                      <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Location Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['Accra, Ghana', 'Nairobi, Kenya', 'Lagos, Nigeria'].map((location, index) => (
              <motion.div
                key={location}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm text-gray-400 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
              >
                {location}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;