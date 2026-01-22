import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: 5, suffix: 'K+', label: 'Tons Recycled' },
    { number: 25, suffix: '+', label: 'Years Experience' },
    { number: 500, suffix: '+', label: 'Happy Clients' },
    { number: 100, suffix: '+', label: 'Skilled Workforce' }
  ];

  return (
    <section className="section-padding bg-dark-brown relative overflow-hidden" ref={ref}>
      {/* Industrial Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Simulated industrial background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 via-dark-brown to-dark"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(217, 125, 68, 0.2) 35px, rgba(217, 125, 68, 0.2) 70px)`
        }}></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-widest mb-4">
            EMPOWERING YOUR SCRAP WITH OUR
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            SOLUTION
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4">
                <CountUp
                  end={stat.number}
                  suffix={stat.suffix}
                  isInView={isInView}
                  duration={2}
                />
              </div>
              <p className="text-gray-400 text-sm md:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="#divisions" className="inline-flex items-center btn-primary group">
            <span>Discover More</span>
            <HiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const CountUp = ({ end, suffix, isInView, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
      {count}{suffix}
    </h3>
  );
};

export default Stats;
