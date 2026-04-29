import { motion } from 'framer-motion';
import { Clock, Check, Sparkles, ArrowRight } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ServiceCard = ({ title, duration, bullets, image, badge, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className="group card-hover bg-white rounded-3xl overflow-hidden shadow-lg shadow-sage/5 relative"
    >
      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-terracotta/20 via-sage/10 to-terracotta/20 blur-xl" />
      </div>

      {/* Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden img-zoom">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Image overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-sage/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {badge && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: delay + 0.3 }}
            className="absolute top-4 left-4 bg-terracotta text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 badge-pulse"
          >
            <Sparkles size={14} />
            {badge}
          </motion.div>
        )}

        {/* Duration badge */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
          <Clock size={14} className="text-terracotta" />
          <span className="text-sage text-sm font-medium">{duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 relative">
        {/* Decorative line */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-terracotta/30 to-transparent" />
        
        <h3 className="font-serif text-xl sm:text-2xl text-sage font-semibold mb-4 group-hover:text-terracotta transition-colors duration-300 cursor-pointer">
          {title}
        </h3>

        <ul className="space-y-3">
          {bullets.map((bullet, index) => (
            <li 
              key={index} 
              className="flex items-start gap-3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${delay + 0.4 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center mt-0.5 group-hover:bg-terracotta/20 transition-colors duration-300">
                <Check size={12} className="text-sage group-hover:text-terracotta transition-colors duration-300" />
              </span>
              <span className="text-sage/80 text-sm sm:text-base leading-relaxed">
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mt-6 w-full flex items-center justify-center gap-2 bg-cream text-sage px-6 py-3 rounded-full font-medium hover:bg-sage hover:text-cream transition-all duration-300 group/btn icon-bounce"
        >
          Đặt lịch
          <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </a>
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-terracotta/5 to-transparent rounded-tl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      title: 'Peel táo Ý Diego Dalla Palma',
      duration: '2 buổi',
      badge: 'Hot',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop',
      bullets: [
        'Loại bỏ tế bào sừng, giảm bít tắc lỗ chân lông',
        'Kích thích tái tạo da, giúp da sáng đều màu',
      ],
    },
    {
      title: 'CSDA đặc biệt',
      duration: '3 buổi',
      image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&h=400&fit=crop',
      bullets: [
        'Làm sạch da, hỗ trợ nâng cơ trẻ hóa',
        'Xả stress, lưu thông máu giúp da hồng hào',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-cream relative">
      {/* Background pattern */}
      <div className="absolute inset-0 lines-pattern opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-terracotta text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            <span className="w-8 h-px bg-terracotta" />
            Dịch vụ của chúng tôi
            <span className="w-8 h-px bg-terracotta" />
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-sage font-bold mb-6 cursor-glow">
            Combo Sạch Sâu
          </h2>
          <p className="text-sage/70 text-lg max-w-2xl mx-auto">
            Trải nghiệm liệu trình chăm sóc da chuyên sâu, kết hợp công nghệ hiện đại với sản phẩm cao cấp
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
