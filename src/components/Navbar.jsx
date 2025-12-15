// Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gray-900/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl' 
          : 'bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-transparent backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Increased Size */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                {/* Glow effect - Larger */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-400/30 to-purple-500/30 rounded-2xl blur-xl"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                {/* Logo Container - Larger */}
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src={logo} 
                    alt="BlazingTek Logo" 
                    className="h-12 w-12 object-contain bg-transparent" // Increased from h-10 w-10 to h-12 w-12
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%233b82f6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    BLAZING
                  </span>
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
                <div className="flex items-center gap-2">
                  <div className="w-4 h-px bg-gradient-to-r from-blue-500 to-cyan-400" />
                  <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">
                    Research Labs
                  </span>
                  <div className="w-4 h-px bg-gradient-to-r from-cyan-400 to-purple-500" />
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation with Better Button Alignment */}
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
                    className={`relative px-5 py-3 rounded-xl transition-all duration-300 group ${
                      location.pathname.startsWith(item.path) 
                        ? 'text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="font-medium flex items-center gap-2">
                      {item.name}
                      <motion.div
                        animate={{ rotate: researchOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </span>
                    {/* Animated underline */}
                    <div className={`absolute bottom-2 left-5 right-5 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transform origin-left transition-transform duration-300 ${
                      location.pathname.startsWith(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </button>
                  
                  <AnimatePresence>
                    {researchOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        onMouseEnter={() => setResearchOpen(true)}
                        onMouseLeave={() => setResearchOpen(false)}
                        className="absolute left-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden border border-white/5"
                      >
                        <div className="p-3">
                          <div className="px-3 py-2 mb-2">
                            <span className="text-sm font-semibold text-gray-400">Research Areas</span>
                          </div>
                          {item.dropdown.map((subItem, idx) => (
                            <motion.div
                              key={subItem.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <Link
                                to={subItem.path}
                                className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 transition-all duration-300 group/item"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                                  <span className="text-gray-300 group-hover/item:text-white font-medium">
                                    {subItem.name}
                                  </span>
                                </div>
                                <ArrowUpRight className="h-3 w-3 text-gray-500 group-hover/item:text-cyan-400 transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all duration-300" />
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
                    className={`relative px-5 py-3 rounded-xl transition-all duration-300 group ${
                      location.pathname === item.path
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    {/* Animated underline */}
                    <div className={`absolute bottom-2 left-5 right-5 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transform origin-left transition-transform duration-300 ${
                      location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                </motion.div>
              )
            ))}
            
            {/* CTA Button - Better Alignment with Navbar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center"
            >
              <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent mx-4" />
              <Link
                to="/contact"
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-300" />
                <div className="relative px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl border border-white/10 overflow-hidden flex items-center gap-2">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Sparkles className="h-4 w-4 text-cyan-300 relative z-10" />
                  <span className="font-semibold text-white relative z-10">Join Research</span>
                  <ArrowUpRight className="h-3 w-3 text-gray-400 group-hover:text-cyan-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 relative z-10" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button - Sleeker */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-white/5 transition-all duration-300 relative"
            whileTap={{ scale: 0.9 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
            {isOpen ? (
              <X className="h-6 w-6 text-white relative z-10" />
            ) : (
              <Menu className="h-6 w-6 text-gray-300 hover:text-white relative z-10" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation - Enhanced */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900 backdrop-blur-2xl rounded-2xl border border-white/5 mt-2 mb-4 p-6 shadow-2xl">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.dropdown ? (
                        <div className="py-2">
                          <div className="text-gray-300 font-semibold px-4 py-3 flex items-center justify-between">
                            {item.name}
                            <ChevronDown className="h-4 w-4" />
                          </div>
                          <div className="ml-6 space-y-2 border-l border-white/10 pl-4">
                            {item.dropdown.map((subItem, idx) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 + 0.1 }}
                              >
                                <Link
                                  to={subItem.path}
                                  className="block px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
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
                          className="block px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-6 border-t border-white/10 mt-4"
                  >
                    <Link
                      to="/contact"
                      className="block w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl text-center hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-blue-500/25"
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