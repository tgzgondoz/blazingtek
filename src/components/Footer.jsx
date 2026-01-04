import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  MessageCircle, // WhatsApp
  Instagram,
  Facebook,
} from 'lucide-react';
import { FaTiktok } from 'react-icons/fa'; // Using react-icons for TikTok
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <Linkedin size={16} />, 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/blazingtek' 
    },
    { 
      icon: <MessageCircle size={16} />, 
      name: 'WhatsApp', 
      url: 'https://wa.me/263788605607' 
    },
    { 
      icon: <Instagram size={16} />, 
      name: 'Instagram', 
      url: 'https://instagram.com/blazingtek' 
    },
    { 
      icon: <Facebook size={16} />, 
      name: 'Facebook', 
      url: 'https://facebook.com/blazingtek' 
    },
    { 
      icon: <FaTiktok size={16} />, // TikTok icon from react-icons
      name: 'TikTok', 
      url: 'https://tiktok.com/@blazingtek' 
    },
  ];

  return (
    <footer className="bg-[#0A0F14] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src={logo} 
                alt="BlazingTek Logo" 
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-lg font-bold text-white">BLAZING</span>
                <span className="text-lg font-bold text-[#00D4AA]">
                  TEK
                </span>
              </div>
              <span className="text-xs text-gray-400">Research Labs</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-[#1A232E] hover:bg-[#0066CC] transition-all duration-300 border border-white/5"
                aria-label={social.name}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-2 text-sm text-gray-400">
              <span>© {new Date().getFullYear()} BlazingTek Research Labs</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Mail size={12} />
              <a href="mailto:info@blazingtek.co" className="hover:text-[#00D4AA] transition-colors">info@blazingtek.co</a>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1">
              <Phone size={12} />
              <a href="tel:+263788605607" className="hover:text-[#00D4AA] transition-colors">+263 788 605 607</a>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1">
              <MapPin size={12} />
              <span>87 Engineering, Highfield, Harare</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;