import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { number: 5, suffix: 'K', label: '', sublabel: 'Tons Recycled', size: 'large' },
    { number: 25, suffix: '', label: 'Years', sublabel: 'Experience', size: 'large' },
    { number: 500, suffix: '', label: '', sublabel: 'Happy Clients', size: 'small' },
    { number: 100, suffix: '', label: '', sublabel: 'Skilled Workforce', size: 'small' }
  ];

  return (
    <section className="section-padding bg-dark-brown relative overflow-hidden min-h-[600px] flex items-center" ref={ref}>
      {/* Industrial Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Simulated industrial/warehouse background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-800/40 via-dark-brown/80 to-dark/95"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTcsIDEyNSwgNjgsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container-custom relative z-10 w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-xs md:text-sm font-bold tracking-[0.3em] mb-4 uppercase">
            Empowering Your Scrap With Our
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white">
            SOLUTION
          </h2>
        </motion.div>

        {/* Stats Grid - 2x2 layout matching design */}
        <div className="grid grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-5xl mx-auto mb-12">
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
                  label={stat.label}
                  isInView={isInView}
                  duration={2}
                  size={stat.size}
                />
              </div>
              <p className="text-gray-300 text-xs md:text-sm lg:text-base font-medium uppercase tracking-wider">{stat.sublabel}</p>
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
          <a href="#divisions" className="inline-flex items-center btn-primary group px-8 py-4">
            <span className="font-bold">Discover More</span>
            <HiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const CountUp = ({ end, suffix, label, isInView, duration, size }) => {
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

  const textSize = size === 'large' 
    ? 'text-6xl md:text-7xl lg:text-8xl xl:text-9xl' 
    : 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl';

  return (
    <div className="flex flex-col items-center">
      <h3 className={`${textSize} font-black text-primary leading-none mb-1`}>
        {count}{suffix}
      </h3>
      {label && <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold">{label}</p>}
    </div>
  );
};

export default Stats;
