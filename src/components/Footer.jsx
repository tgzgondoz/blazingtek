import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram, 
  Globe,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

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
    { icon: <Twitter size={20} />, name: 'Twitter', url: 'https://twitter.com/blazingtek' },
    { icon: <Linkedin size={20} />, name: 'LinkedIn', url: 'https://linkedin.com/company/blazingtek' },
    { icon: <Github size={20} />, name: 'GitHub', url: 'https://github.com/blazingtek' },
    { icon: <Instagram size={20} />, name: 'Instagram', url: 'https://instagram.com/blazingtek' },
    { icon: <Globe size={20} />, name: 'Research Portal', url: 'https://research.blazingtek.africa' },
  ];

  const contactInfo = [
    { icon: <Mail size={18} />, text: 'research@blazingtek.africa' },
    { icon: <Phone size={18} />, text: '+233 24 123 4567' },
    { icon: <MapPin size={18} />, text: 'Accra, Ghana | Nairobi, Kenya | Lagos, Nigeria' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <Brain className="h-10 w-10 text-blue-400 mr-3" />
              <div>
                <h2 className="text-2xl font-bold">
                  BLAZING<span className="text-blue-400">TEK</span>
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  Robotics, AI & Emerging Tech Research for Africa
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Pioneering research-driven technological solutions to address Africa's 
              most pressing challenges through innovation, collaboration, and sustainable development.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center text-gray-400">
                  <span className="mr-3 text-blue-400">{contact.icon}</span>
                  <span>{contact.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold mb-6 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Join Our Research Network</h3>
              <p className="text-gray-300">
                Get updates on our latest research breakthroughs and projects
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span className="flex items-center">
                Made with <Heart size={16} className="mx-1 text-red-500" /> in Africa
              </span>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} BlazingTek Research. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-400">
                <Link to="/privacy" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-blue-400 transition-colors">
                  Cookie Policy
                </Link>
                <Link to="/sitemap" className="hover:text-blue-400 transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Research Partners */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm mb-4">
            Research Partnerships & Collaborations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[
              'UNICEF Innovation',
              'African Union Commission',
              'UNDP Africa',
              'MIT Open Learning',
              'Google AI Research',
              'IBM Research Africa'
            ].map((partner) => (
              <div 
                key={partner} 
                className="text-gray-400 text-sm hover:text-gray-300 transition-colors cursor-pointer"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;