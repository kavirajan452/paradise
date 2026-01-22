import { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail, HiArrowUp } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    'About Us',
    'Our Divisions',
    'Products',
    'Technology',
    'Careers',
    'News & Updates'
  ];

  const services = [
    'Wire Recycling',
    'Steel Processing',
    'Metal Trading',
    'Scrap Collection',
    'Industrial Solutions',
    'Consulting'
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-primary hover:bg-secondary text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <HiArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="bg-dark border-t border-gray-800">
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-white">PARADISE</span>
                <span className="text-primary ml-2">WIRE</span>
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                For over two decades, we've been leading the way in sustainable wire and metal recycling solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaFacebookF size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaTwitter size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaLinkedinIn size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaInstagram size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-primary text-sm transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-400 text-sm">
                  <HiLocationMarker className="text-primary mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>123 Industrial Area, Recycling Zone, City 12345</span>
                </li>
                <li className="flex items-center text-gray-400 text-sm">
                  <HiPhone className="text-primary mr-2 flex-shrink-0" size={18} />
                  <span>+1 (234) 567-8900</span>
                </li>
                <li className="flex items-center text-gray-400 text-sm">
                  <HiMail className="text-primary mr-2 flex-shrink-0" size={18} />
                  <span>info@paradisewire.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Paradise Wire Recycling Industry. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
