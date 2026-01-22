import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Clients = () => {
  // Using placeholder logos - in a real scenario, these would be actual client logos
  const clients = [
    { name: 'SAIL', logo: 'https://via.placeholder.com/150x80/1a1a1a/D97D44?text=SAIL' },
    { name: 'Tata Steel', logo: 'https://via.placeholder.com/150x80/1a1a1a/D97D44?text=TATA' },
    { name: 'SICAL', logo: 'https://via.placeholder.com/150x80/1a1a1a/D97D44?text=SICAL' },
    { name: 'JSW', logo: 'https://via.placeholder.com/150x80/1a1a1a/D97D44?text=JSW' },
    { name: 'Hindalco', logo: 'https://via.placeholder.com/150x80/1a1a1a/D97D44?text=HINDALCO' },
    { name: 'Vedanta', logo: 'https://via.placeholder.com/150x80/1a1a1a/D97D44?text=VEDANTA' },
    { name: 'NMDC', logo: 'https://via.placeholder.com/150x80/1a1a1a/D97D44?text=NMDC' },
    { name: 'RINL', logo: 'https://via.placeholder.com/150x80/1a1a1a/D97D44?text=RINL' },
  ];

  return (
    <section id="clients" className="section-padding bg-gradient-to-b from-dark to-dark-brown">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary mb-4">OUR CLIENTS</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Trusted by leading companies across industries for our reliable and sustainable recycling solutions
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="group bg-dark-brown border border-gray-800 rounded-lg p-6 flex items-center justify-center hover:border-primary transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            className="client-swiper"
          >
            {clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="bg-dark-brown border border-gray-800 rounded-lg p-6 flex items-center justify-center h-24">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-auto grayscale"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <h4 className="text-3xl font-bold text-primary mb-2">500+</h4>
            <p className="text-gray-400 text-sm">Active Clients</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-primary mb-2">98%</h4>
            <p className="text-gray-400 text-sm">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-primary mb-2">50+</h4>
            <p className="text-gray-400 text-sm">Industries Served</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-bold text-primary mb-2">25+</h4>
            <p className="text-gray-400 text-sm">Years Partnership</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
