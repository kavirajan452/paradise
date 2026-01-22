import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="about" className="section-padding bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(217, 125, 68, 0.1) 35px, rgba(217, 125, 68, 0.1) 70px)`
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-primary text-sm md:text-base font-semibold tracking-widest mb-4">
              FOR OVER
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              02 DECADES
            </h2>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
              PARADISE <span className="text-primary">WIRE RECYCLING</span> INDUSTRY
            </h3>
          </motion.div>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
          >
            With over two decades of excellence in the recycling industry, Paradise Wire Recycling Industry 
            has established itself as a leader in sustainable wire and metal processing. Our commitment to 
            environmental responsibility, coupled with state-of-the-art European technology, has enabled us 
            to deliver exceptional value to our clients while contributing to a greener future. We take pride 
            in our legacy of innovation, quality, and unwavering dedication to sustainability.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
