import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import the logo
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // In production, this would come from authentication context
  const [isAdmin, setIsAdmin] = useState(false);

  // For development: Allow easy access to admin
  useEffect(() => {
    // Check if admin flag exists in localStorage (for demo purposes)
    const adminFlag = localStorage.getItem('blazingtek-admin');
    if (adminFlag === 'true') {
      setIsAdmin(true);
    }
    
    // Quick access: typing "admin" on any page sets admin mode
    const handleKeyPress = (e) => {
      if (e.key === 'a' && e.ctrlKey) {
        const newAdminState = !isAdmin;
        setIsAdmin(newAdminState);
        localStorage.setItem('blazingtek-admin', newAdminState.toString());
        alert(`Admin mode ${newAdminState ? 'enabled' : 'disabled'}`);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isAdmin]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Community', path: '/community' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
    { 
      name: 'Research', 
      path: '/research',
      dropdown: [
        { name: 'Sustainable Robotics', path: '/research/sustainability' },
        { name: 'Lab Projects', path: '/research/lab' }
      ]
    },
  ];

  const toggleAdminMode = () => {
    const newAdminState = !isAdmin;
    setIsAdmin(newAdminState);
    localStorage.setItem('blazingtek-admin', newAdminState.toString());
    alert(`Admin mode ${newAdminState ? 'enabled' : 'disabled'}`);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A0F14] border-b border-white/10' 
          : 'bg-[#0A0F14]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src={logo} 
                alt="BlazingTek Logo" 
                className="h-6 w-6 object-contain"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-lg font-semibold text-white">BLAZING</span>
                  <span className="text-lg font-semibold text-white">TEK</span>
                </div>
                <span className="text-xs text-gray-400">Research Labs</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              item.dropdown ? (
                <div 
                  key={item.name} 
                  className="relative"
                >
                  <button 
                    onMouseEnter={() => setResearchOpen(true)}
                    onMouseLeave={() => setResearchOpen(false)}
                    className={`px-3 py-2 transition-colors duration-200 text-sm ${
                      location.pathname.startsWith(item.path) 
                        ? 'text-white font-medium' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      {item.name}
                      <ChevronDown className="h-3 w-3" />
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {researchOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        onMouseEnter={() => setResearchOpen(true)}
                        onMouseLeave={() => setResearchOpen(false)}
                        className="absolute left-0 mt-1 w-48 bg-[#0A0F14] border border-white/10"
                      >
                        <div className="p-1">
                          <div className="px-2 py-1 mb-1">
                            <span className="text-xs text-gray-400">Research Areas</span>
                          </div>
                          {item.dropdown.map((subItem, idx) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                              onClick={() => setResearchOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-white font-medium'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            
            {/* Admin Link (only visible to admins) */}
            {isAdmin && (
              <Link
                to="/admin/upload"
                className="px-3 py-2 text-sm text-amber-400 hover:text-amber-300 transition-colors duration-200 flex items-center gap-1"
              >
                <Lock className="h-3 w-3" />
                Admin
              </Link>
            )}
            
            {/* CTA Button */}
            <div className="flex items-center ml-2">
              <div className="h-5 w-px bg-white/10 mx-2" />
              <Link
                to="/contact"
                className="px-3 py-2 bg-white text-[#0A0F14] hover:bg-gray-100 text-sm font-medium transition-colors"
              >
                Join Research
              </Link>
              
              {/* Admin Toggle Button (hidden by default, for development) */}
              <button
                onClick={toggleAdminMode}
                className="ml-2 px-2 py-1 text-xs bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors rounded"
                title={isAdmin ? "Disable admin mode" : "Enable admin mode (Ctrl+A)"}
              >
                {isAdmin ? "🔓" : "🔒"}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1 hover:bg-white/5 transition-colors"
          >
            {isOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-gray-400 hover:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-[#0A0F14] border border-white/10 mt-1 mb-2 p-3">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <div
                      key={item.name}
                    >
                      {item.dropdown ? (
                        <div className="py-1">
                          <div className="text-white font-medium px-2 py-2 flex items-center justify-between text-sm">
                            {item.name}
                            <ChevronDown className="h-3 w-3" />
                          </div>
                          <div className="ml-3 space-y-1 border-l border-white/10 pl-2">
                            {item.dropdown.map((subItem, idx) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="block px-2 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className={`block px-2 py-2 text-sm transition-colors ${
                            location.pathname === item.path
                              ? 'text-white font-medium'
                              : 'text-gray-400 hover:text-white'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  {/* Admin Link in Mobile (only visible to admins) */}
                  {isAdmin && (
                    <Link
                      to="/admin/upload"
                      className="block px-2 py-2 text-sm text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
                      onClick={() => setIsOpen(false)}
                    >
                      <Lock className="h-3 w-3" />
                      Admin Portal
                    </Link>
                  )}
                  
                  <div className="pt-3 border-t border-white/10 mt-2 space-y-2">
                    <Link
                      to="/contact"
                      className="block w-full px-3 py-2 bg-white text-[#0A0F14] font-medium text-sm text-center hover:bg-gray-100 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Join Research Program
                    </Link>
                    
                    {/* Admin Toggle in Mobile */}
                    <button
                      onClick={() => {
                        toggleAdminMode();
                        setIsOpen(false);
                      }}
                      className="w-full px-3 py-2 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white text-sm font-medium transition-colors text-center"
                    >
                      {isAdmin ? "🔓 Disable Admin Mode" : "🔒 Enable Admin Mode"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;