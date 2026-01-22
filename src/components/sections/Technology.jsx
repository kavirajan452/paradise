import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const Technology = () => {
  return (
    <section id="technology" className="section-padding bg-dark-brown">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-blue-900/50 to-blue-600/30 rounded-lg"></div>
                <div className="aspect-square bg-gradient-to-br from-green-900/50 to-green-600/30 rounded-lg"></div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="aspect-square bg-gradient-to-br from-orange-900/50 to-orange-600/30 rounded-lg"></div>
              </div>
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-4 rounded-lg shadow-xl"
            >
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm">Years</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm font-semibold tracking-widest mb-4">
              TECHNOLOGY
            </p>
            <h2 className="heading-secondary mb-6">
              WE USE <span className="text-primary">ADVANCED EUROPEAN</span> RECYCLING SYSTEMS
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Our state-of-the-art facilities are equipped with the latest European recycling technology, 
              ensuring maximum efficiency and environmental sustainability. We continuously invest in 
              innovation to stay at the forefront of the industry.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">High Recovery Rates</h4>
                  <p className="text-gray-400 text-sm">Achieving up to 99% material recovery efficiency</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Automated Processing</h4>
                  <p className="text-gray-400 text-sm">Fully automated systems for consistent quality</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Environmental Compliance</h4>
                  <p className="text-gray-400 text-sm">Meeting all international environmental standards</p>
                </div>
              </li>
            </ul>
            <a href="#contact" className="inline-flex items-center btn-primary group">
              <span>Learn More</span>
              <HiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
