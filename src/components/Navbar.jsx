import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, Lock, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import the logo
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Check if user is logged in as admin
  const [isAdmin, setIsAdmin] = useState(() => {
    const adminData = localStorage.getItem('blazingtek-admin');
    return adminData ? JSON.parse(adminData).isLoggedIn : false;
  });

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

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError('');

    // Simple authentication - username: "admin", password: "admin"
    if (loginForm.username === 'admin' && loginForm.password === 'admin') {
      // Store login state in localStorage
      const adminData = {
        isLoggedIn: true,
        username: 'admin',
        loginTime: new Date().toISOString()
      };
      localStorage.setItem('blazingtek-admin', JSON.stringify(adminData));
      setIsAdmin(true);
      setShowLoginModal(false);
      setLoginForm({ username: '', password: '' });
      
      // Navigate to admin panel
      navigate('/admin/upload');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('blazingtek-admin');
    setIsAdmin(false);
    
    // If currently on admin page, redirect to home
    if (location.pathname.startsWith('/admin')) {
      navigate('/');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Quick admin access shortcut (Ctrl+Shift+A)
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        setShowLoginModal(true);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <>
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
              
              {/* Admin Link (only visible when logged in) */}
              {isAdmin ? (
                <div className="flex items-center gap-2">
                  <Link
                    to="/admin/upload"
                    className="px-3 py-2 text-sm text-amber-400 hover:text-amber-300 transition-colors duration-200 flex items-center gap-1"
                  >
                    <Lock className="h-3 w-3" />
                    Admin
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 text-sm text-gray-400 hover:text-red-400 transition-colors duration-200 flex items-center gap-1"
                    title="Logout from admin"
                  >
                    <LogOut className="h-3 w-3" />
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1"
                  title="Admin Login (Ctrl+Shift+A)"
                >
                  <Lock className="h-3 w-3" />
                  Admin Login
                </button>
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
                    
                    {/* Admin Login/Logout in Mobile */}
                    {isAdmin ? (
                      <>
                        <Link
                          to="/admin/upload"
                          className="block px-2 py-2 text-sm text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
                          onClick={() => setIsOpen(false)}
                        >
                          <Lock className="h-3 w-3" />
                          Admin Portal
                        </Link>
                        <button
                          onClick={() => {
                            handleLogout();
                            setIsOpen(false);
                          }}
                          className="block w-full px-2 py-2 text-sm text-gray-400 hover:text-red-400 transition-colors flex items-center gap-1"
                        >
                          <LogOut className="h-3 w-3" />
                          Logout
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setShowLoginModal(true);
                          setIsOpen(false);
                        }}
                        className="block px-2 py-2 text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                      >
                        <Lock className="h-3 w-3" />
                        Admin Login
                      </button>
                    )}
                    
                    <div className="pt-3 border-t border-white/10 mt-2 space-y-2">
                      <Link
                        to="/contact"
                        className="block w-full px-3 py-2 bg-white text-[#0A0F14] font-medium text-sm text-center hover:bg-gray-100 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Join Research Program
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setShowLoginModal(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative bg-[#0A0F14] border border-white/10 rounded-xl shadow-2xl max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center">
                    <Lock className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Admin Login</h3>
                    <p className="text-sm text-gray-400">Access content management panel</p>
                  </div>
                </div>

                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={loginForm.username}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter username"
                      autoComplete="username"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={loginForm.password}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter password"
                      autoComplete="current-password"
                      required
                    />
                  </div>

                  {loginError && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <p className="text-sm text-red-400">{loginError}</p>
                    </div>
                  )}

                  <div className="flex gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2.5 rounded-lg transition-colors"
                    >
                      Login
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowLoginModal(false);
                        setLoginError('');
                        setLoginForm({ username: '', password: '' });
                      }}
                      className="px-4 py-2.5 border border-white/10 hover:bg-white/5 text-gray-400 hover:text-white font-medium rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500 text-center">
                    Use Ctrl+Shift+A to open login from anywhere
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;