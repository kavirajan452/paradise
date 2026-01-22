import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Background gradient simulating video */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-brown to-dark"></div>
        {/* Animated background pattern */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(217, 125, 68, 0.1) 35px, rgba(217, 125, 68, 0.1) 70px)`
          }}
        ></motion.div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 w-full">
        <div className="max-w-6xl mx-auto">
          {/* Headline Layout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left mb-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              TURNING
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-right mb-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              SCRAP INTO
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white relative inline-block">
              SUSTAINABILITY
              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary"></div>
            </h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-gray-300 text-base md:text-lg text-center max-w-3xl mx-auto"
          >
            Leading the industry with advanced European recycling technology for over two decades
          </motion.p>
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
