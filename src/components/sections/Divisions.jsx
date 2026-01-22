import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Divisions = () => {
  const divisions = [
    {
      title: 'WIRE RECYCLING',
      description: 'Advanced technology for efficient wire and cable recycling processes with high recovery rates.',
      gradient: 'from-blue-900/50 to-blue-600/30'
    },
    {
      title: 'STEEL INDUSTRY',
      description: 'Comprehensive steel processing and trading solutions for industrial applications.',
      gradient: 'from-orange-900/50 to-orange-600/30'
    },
    {
      title: 'METAL PROCESSING',
      description: 'State-of-the-art facilities for processing various types of metals and alloys.',
      gradient: 'from-yellow-900/50 to-yellow-600/30'
    }
  ];

  return (
    <section id="divisions" className="section-padding bg-gradient-to-b from-dark to-dark-brown">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary mb-4">OUR DIVISION</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We operate across multiple divisions, each specialized in delivering excellence in their respective domains.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {divisions.map((division, index) => (
            <DivisionCard key={index} division={division} index={index} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="division-swiper"
          >
            {divisions.map((division, index) => (
              <SwiperSlide key={index}>
                <DivisionCard division={division} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .division-swiper {
          padding-bottom: 50px;
        }
        .division-swiper .swiper-pagination-bullet {
          background: #D97D44;
        }
      `}</style>
    </section>
  );
};

const DivisionCard = ({ division, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg bg-dark-brown border border-gray-800 hover:border-primary transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-brown via-transparent to-transparent z-10"></div>
        <div className={`w-full h-full bg-gradient-to-br ${division.gradient}`}></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
          {division.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          {division.description}
        </p>
        <button className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
          <span className="text-sm font-semibold mr-2">Learn More</span>
          <HiArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default Divisions;
