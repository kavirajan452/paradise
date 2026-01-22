import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '#about' },
    { name: 'Divisions', path: '#divisions', hasMegaMenu: true },
    { name: 'Product & Materials', path: '#products' },
    { name: 'Process', path: '#technology' },
    { name: 'Sustainability', path: '#responsibility' },
    { name: 'Clients', path: '#clients' },
    { name: 'Contact Us', path: '#contact' },
  ];

  const megaMenuItems = [
    {
      title: 'Wire Recycling',
      description: 'Advanced wire and cable recycling solutions',
      image: '/images/wire-recycling.jpg'
    },
    {
      title: 'Steel Industry',
      description: 'Comprehensive steel processing services',
      image: '/images/steel-industry.jpg'
    },
    {
      title: 'Metal Processing',
      description: 'State-of-the-art metal processing facilities',
      image: '/images/metal-processing.jpg'
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-white">PARADISE</span>
              <span className="text-primary ml-2">WIRE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasMegaMenu && setIsMegaMenuOpen(true)}
                onMouseLeave={() => item.hasMegaMenu && setIsMegaMenuOpen(false)}
              >
                <a
                  href={item.path}
                  className="text-white hover:text-primary transition-colors duration-300 text-sm font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                
                {/* Mega Menu */}
                {item.hasMegaMenu && (
                  <AnimatePresence>
                    {isMegaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[600px] bg-dark-brown border border-primary/20 rounded-lg shadow-2xl p-6"
                      >
                        <div className="grid grid-cols-3 gap-4">
                          {megaMenuItems.map((megaItem, index) => (
                            <div
                              key={index}
                              className="group cursor-pointer"
                            >
                              <div className="aspect-video bg-gray-700 rounded-lg mb-3 overflow-hidden">
                                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent group-hover:scale-110 transition-transform duration-300"></div>
                              </div>
                              <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                                {megaItem.title}
                              </h4>
                              <p className="text-gray-400 text-xs">
                                {megaItem.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white text-3xl focus:outline-none"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    className="block text-white hover:text-primary transition-colors duration-300 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
