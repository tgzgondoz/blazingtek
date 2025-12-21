import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import the logo
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
      name: 'Research & Innovation', 
      path: '/research',
      dropdown: [
        { name: 'AI Integration', path: '/research/ai' },
        { name: 'Sustainable Robotics', path: '/research/sustainability' },
        { name: 'Assistive Tech', path: '/research/assistive' },
        { name: 'Lab Projects', path: '/research/lab' }
      ]
    },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/90 backdrop-blur-lg border-b border-white/10' 
          : 'bg-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link to="/" className="flex items-center gap-3 group">
              {/* Logo Image */}
              <div className="flex-shrink-0">
                <img 
                  src={logo} 
                  alt="BlazingTek Logo" 
                  className="h-8 w-auto object-contain filter brightness-0 invert"
                />
              </div>
              
              {/* Text Container */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-xl font-bold text-white tracking-tight">BLAZINGTEK</span>
                </div>
                <span className="text-xs text-gray-400">Research Labs</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              item.dropdown ? (
                <motion.div 
                  key={item.name} 
                  className="relative"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                >
                  <button 
                    onMouseEnter={() => setResearchOpen(true)}
                    onMouseLeave={() => setResearchOpen(false)}
                    className={`relative px-4 py-2 transition-all duration-200 group ${
                      location.pathname.startsWith(item.path) 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="font-medium text-sm flex items-center gap-1">
                      {item.name}
                      <motion.div
                        animate={{ rotate: researchOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-3 w-3" />
                      </motion.div>
                    </span>
                    {location.pathname.startsWith(item.path) && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {researchOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        onMouseEnter={() => setResearchOpen(true)}
                        onMouseLeave={() => setResearchOpen(false)}
                        className="absolute left-0 mt-1 w-56 bg-gray-900/95 backdrop-blur-lg shadow-lg overflow-hidden border border-white/5"
                      >
                        <div className="p-2">
                          <div className="px-2 py-1 mb-1">
                            <span className="text-xs font-semibold text-gray-400">Research Areas</span>
                          </div>
                          {item.dropdown.map((subItem, idx) => (
                            <motion.div
                              key={subItem.name}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <Link
                                to={subItem.path}
                                className="flex items-center justify-between px-3 py-2 hover:bg-white/5 transition-all duration-200 group/item text-sm"
                              >
                                <div className="flex items-center gap-2">
                                  <div className="w-1 h-3 bg-white opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                                  <span className="text-gray-300 group-hover/item:text-white">
                                    {subItem.name}
                                  </span>
                                </div>
                                <ArrowUpRight className="h-3 w-3 text-gray-500 group-hover/item:text-white transition-all duration-200" />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.2 }}
                >
                  <Link
                    to={item.path}
                    className={`relative px-4 py-2 transition-all duration-200 text-sm font-medium ${
                      location.pathname === item.path
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                    )}
                  </Link>
                </motion.div>
              )
            ))}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center"
            >
              <div className="h-6 w-px bg-white/10 mx-3" />
              <Link
                to="/contact"
                className="group relative"
              >
                <div className="relative px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium transition-all duration-200 border border-gray-700 hover:border-gray-600"
                >
                  Join Research
                  <ArrowUpRight className="h-3 w-3 inline-block ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-800 transition-all duration-200"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-gray-300 hover:text-white" />
            )}
          </motion.button>
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
              <div className="bg-gray-900 border border-white/5 mt-1 mb-2 p-4">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.dropdown ? (
                        <div className="py-1">
                          <div className="text-gray-300 font-medium px-3 py-2 flex items-center justify-between text-sm border-l-2 border-white">
                            {item.name}
                            <ChevronDown className="h-3 w-3" />
                          </div>
                          <div className="ml-4 space-y-1 border-l border-white/10 pl-3">
                            {item.dropdown.map((subItem, idx) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 + 0.1 }}
                              >
                                <Link
                                  to={subItem.path}
                                  className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 text-sm"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className={`block px-3 py-2 transition-all duration-200 text-sm font-medium border-l-2 ${
                            location.pathname === item.path
                              ? 'text-white border-white bg-white/5'
                              : 'text-gray-300 hover:text-white hover:bg-white/5 border-transparent'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-4 border-t border-white/10 mt-2"
                  >
                    <Link
                      to="/contact"
                      className="block w-full px-4 py-3 bg-gray-800 text-white font-medium text-sm text-center hover:bg-gray-700 transition-all duration-200 border border-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Join Research Program
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;