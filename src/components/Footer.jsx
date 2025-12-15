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
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Footer = () => {
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
    { icon: <Phone size={18} />, text: '+263 788 605 607', link: 'tel:+263788605607' },
    { icon: <MapPin size={18} />, text: 'Chinhoyi, Zimbabwe | Harare, Zimbabwe | Bulawayo, Zimbabwe' },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
          {/* Brand Section - Now spans full width */}
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
              className="text-gray-400 mb-8 max-w-2xl leading-relaxed"
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
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white/10"
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

          {/* Location Badges - Updated to Zimbabwe locations */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['Chinhoyi, Zimbabwe', 'Harare, Zimbabwe', 'Bulawayo, Zimbabwe'].map((location, index) => (
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