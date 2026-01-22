import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-brown to-dark"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(217, 125, 68, 0.1) 35px, rgba(217, 125, 68, 0.1) 70px)`
        }}></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary text-sm md:text-base font-semibold tracking-widest mb-4">
              FOR OVER
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
              02 DECADES
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-8">
              PARADISE <span className="text-primary">WIRE RECYCLING</span> INDUSTRY
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-10"
          >
            Leading the industry with advanced European recycling technology, delivering sustainable solutions 
            for wire, cable, and metal processing. Building a greener future, one ton at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#about"
              className="inline-flex items-center btn-primary group"
            >
              <span>Discover More</span>
              <HiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <p className="text-gray-400 text-xs mb-2">Scroll Down</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
