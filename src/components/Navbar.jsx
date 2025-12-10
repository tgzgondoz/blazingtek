// Navbar.jsx
import { Link } from 'react-router-dom';
import { Menu, X, Brain, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [researchOpen, setResearchOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
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
    { name: 'Services', path: '/services' },
    { name: 'Community', path: '/community' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-blue-400 mr-3" />
            <Link to="/" className="text-2xl font-bold tracking-tight">
              BLAZING<span className="text-blue-400">TEK</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative group">
                  <button 
                    onMouseEnter={() => setResearchOpen(true)}
                    onMouseLeave={() => setResearchOpen(false)}
                    className="flex items-center hover:text-blue-300 transition-colors"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {researchOpen && (
                    <div 
                      onMouseEnter={() => setResearchOpen(true)}
                      onMouseLeave={() => setResearchOpen(false)}
                      className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl py-2"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 hover:bg-gray-700 hover:text-blue-300"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="hover:text-blue-300 transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition">
              Join Research
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 mt-2 rounded-lg p-4">
            {navItems.map((item) => (
              <div key={item.name} className="py-2">
                <Link
                  to={item.path}
                  className="block hover:text-blue-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;