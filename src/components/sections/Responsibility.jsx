import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const Responsibility = () => {
  const images = [
    {
      gradient: 'from-green-900/70 to-green-600/50',
      alt: 'Team collaboration',
      rotation: -5
    },
    {
      gradient: 'from-blue-900/70 to-blue-600/50',
      alt: 'Environmental responsibility',
      rotation: 3
    },
    {
      gradient: 'from-orange-900/70 to-orange-600/50',
      alt: 'Community engagement',
      rotation: -3
    }
  ];

  return (
    <section id="responsibility" className="section-padding bg-gradient-to-br from-[#8B4513] via-[#6B3410] to-[#4A2810] relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D97D44' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-xs md:text-sm font-bold tracking-[0.3em] mb-4 uppercase">
            Sustainability & CSR
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            RECYCLING WITH <span className="text-primary">RESPONSIBILITY</span>
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            We are committed to environmental stewardship and social responsibility, 
            ensuring our operations contribute positively to communities and the planet.
          </p>
        </motion.div>

        {/* Polaroid-style Image Collage */}
        <div className="flex justify-center items-center gap-6 flex-wrap mb-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: image.rotation }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-4 shadow-2xl cursor-pointer"
              style={{ transform: `rotate(${image.rotation}deg)` }}
            >
              <div className="w-64 h-64 overflow-hidden mb-3">
                <div className={`w-full h-full bg-gradient-to-br ${image.gradient}`}></div>
              </div>
              <p className="text-dark text-center text-sm font-handwriting">{image.alt}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10"
        >
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-white font-semibold mb-2">Environmental Care</h4>
            <p className="text-gray-400 text-sm">Reducing carbon footprint through sustainable practices</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-white font-semibold mb-2">Community Support</h4>
            <p className="text-gray-400 text-sm">Creating employment and supporting local communities</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-white font-semibold mb-2">Safety First</h4>
            <p className="text-gray-400 text-sm">Maintaining highest safety standards for our workforce</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="#contact" className="inline-flex items-center btn-primary group">
            <span>Learn About Our Initiatives</span>
            <HiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Responsibility;
