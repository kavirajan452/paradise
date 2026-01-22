import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: 5000, suffix: 'K+', label: 'Tons Recycled' },
    { number: 25, suffix: '+', label: 'Years Experience' },
    { number: 500, suffix: '+', label: 'Happy Clients' },
    { number: 100, suffix: '+', label: 'Skilled Workforce' }
  ];

  return (
    <section className="section-padding bg-dark-brown relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(217, 125, 68, 0.1) 35px, rgba(217, 125, 68, 0.1) 70px)`
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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

  const displayValue = end >= 1000 ? (count / 1000).toFixed(1) : count;

  return (
    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
      {displayValue}{suffix}
    </h3>
  );
};

export default Stats;
