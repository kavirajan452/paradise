import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Clients = () => {
  // Client logos as text
  const clients = [
    { name: 'SAIL' },
    { name: 'TATA STEEL' },
    { name: 'SICAL' },
    { name: 'JSW' },
    { name: 'HINDALCO' },
    { name: 'VEDANTA' },
    { name: 'NMDC' },
    { name: 'RINL' },
  ];

  return (
    <section id="clients" className="section-padding bg-[#f5f5f5] dark:bg-gradient-to-b dark:from-dark dark:to-dark-brown">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark dark:text-white mb-4 tracking-tight">OUR CLIENTS</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
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
                whileHover={{ scale: 1.05 }}
                className="group bg-white dark:bg-dark-brown border border-gray-200 dark:border-gray-800 rounded-lg p-6 flex items-center justify-center hover:border-primary hover:shadow-xl transition-all duration-300 min-h-[100px]"
              >
                <h3 className="text-lg font-bold text-gray-400 group-hover:text-primary transition-colors">
                  {client.name}
                </h3>
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
                  <h3 className="text-lg font-bold text-gray-400">
                    {client.name}
                  </h3>
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
