import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin,
  MessageCircle,
  Instagram,
  Facebook,
} from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <Linkedin size={14} />, 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/blazingtek' 
    },
    { 
      icon: <MessageCircle size={14} />, 
      name: 'WhatsApp', 
      url: 'https://wa.me/263788605607' 
    },
    { 
      icon: <Instagram size={14} />, 
      name: 'Instagram', 
      url: 'https://instagram.com/blazingtek' 
    },
    { 
      icon: <Facebook size={14} />, 
      name: 'Facebook', 
      url: 'https://facebook.com/blazingtek' 
    },
    { 
      icon: <FaTiktok size={14} />,
      name: 'TikTok', 
      url: 'https://tiktok.com/@blazingtek' 
    },
  ];

  return (
    <footer className="bg-[#0A0F14] text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <img 
              src={logo} 
              alt="BlazingTek Logo" 
              className="h-6 w-6 object-contain"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-base font-semibold text-white">BLAZING</span>
                <span className="text-base font-semibold text-white">TEK</span>
              </div>
              <span className="text-xs text-gray-400">Research Labs</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-1">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded bg-white/5 hover:bg-white/10 transition-colors border border-white/10 outline-none focus:outline-none focus:ring-0"
                aria-label={social.name}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <div className="text-xs text-gray-400">
              <span>© {new Date().getFullYear()} BlazingTek Research Labs</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <Mail size={10} />
              <a href="mailto:info@blazingtek.co" className="hover:text-white transition-colors outline-none focus:outline-none">info@blazingtek.co</a>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1">
              <Phone size={10} />
              <a href="tel:+263788605607" className="hover:text-white transition-colors outline-none focus:outline-none">+263 788 605 607</a>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-1">
              <MapPin size={10} />
              <span>87 Engineering, Highfield, Harare</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;