import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Sparkles, Droplets, Heart, Scissors, Flame, Wind, Eye } from 'lucide-react';
import img4 from "../../assets/images/space/Screenshot_45.png";

const services = [
  {
    title: "Chăm sóc da mặt",
    desc: "Làm sạch sâu, cấp ẩm và phục hồi làn da khỏe mạnh.",
    icon: Sparkles,
    image: img4,
  },
  {
    title: "Chemical Peel",
    desc: "Tái tạo da, cải thiện thâm nám và bề mặt da.",
    icon: Droplets,
    image: img4,
  },
  {
    title: "Massage Body",
    desc: "Thư giãn toàn thân, giảm căng thẳng và đau nhức.",
    icon: Heart,
    image: img4,
  },
  {
    title: "Massage cổ vai gáy",
    desc: "Giảm đau mỏi do ngồi lâu, làm việc văn phòng.",
    icon: Wind,
    image: img4,
  },
  {
    title: "Triệt lông",
    desc: "Công nghệ an toàn, giúp da mịn màng lâu dài.",
    icon: Scissors,
    image: img4,
  },
  {
    title: "Giảm béo",
    desc: "Hỗ trợ giảm mỡ, cải thiện vóc dáng hiệu quả.",
    icon: Flame,
    image: img4,
  },
  {
    title: "Gội đầu dưỡng sinh",
    desc: "Thư giãn tinh thần, cải thiện tuần hoàn máu.",
    icon: Wind,
    image: img4,
  },
  {
    title: "Nối mi",
    desc: "Tạo đôi mắt cuốn hút, tự nhiên và bền đẹp.",
    icon: Eye,
    image: img4,
  },
];

const ServiceSlideCard = ({ service, direction }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full max-w-sm mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Large Image - 65% of card height */}
        <div className="relative h-[320px] sm:h-[380px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-sage/60 via-sage/10 to-transparent" />
          
          {/* Icon Badge */}
          <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <Icon size={24} className="text-terracotta" />
          </div>
          
          {/* Decorative corner */}
          <div className="absolute bottom-4 left-4 w-12 h-0.5 bg-terracotta/60 rounded-full" />
        </div>
        
        {/* Title Section - Highlighted Background */}
        <div className="bg-gradient-to-r from-sage/10 to-terracotta/10 px-6 py-4">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-sage">
            {service.title}
          </h3>
        </div>
        
        {/* Description Section */}
        <div className="px-6 pb-6 pt-4">
          <p className="text-sage/70 text-sm sm:text-base leading-relaxed">
            {service.desc}
          </p>
          
          {/* CTA Button */}
          <button className="mt-4 w-full py-3 px-6 bg-gradient-to-r from-terracotta/10 to-sage/10 hover:from-terracotta/20 hover:to-sage/20 rounded-xl text-terracotta font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 group">
            <span>Xem chi tiết</span>
            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const ServicePreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });
  const containerRef = useRef(null);
  
  // Auto slide
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused]);
  
  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };
  
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-cream to-cream relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Section label */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-terracotta" />
            <span className="text-terracotta text-sm tracking-[0.2em] uppercase font-medium">
              Dịch vụ
            </span>
            <span className="w-8 h-px bg-terracotta" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-sage font-bold mb-4 cursor-glow">
            Dịch vụ nổi bật tại spa
          </h2>
          
          <p className="text-sage/70 text-base md:text-lg max-w-2xl mx-auto">
            Chúng tôi cung cấp đa dạng dịch vụ chăm sóc sắc đẹp, giúp bạn thư giãn
            và nâng tầm nhan sắc mỗi ngày.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-16 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-sage hover:bg-terracotta hover:text-white transition-all duration-300 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-16 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-sage hover:bg-terracotta hover:text-white transition-all duration-300 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Carousel Track */}
          <div 
            ref={containerRef}
            className="overflow-hidden px-4 md:px-16"
          >
            <div className="flex justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <ServiceSlideCard 
                  key={currentIndex}
                  service={services[currentIndex]}
                  direction={direction}
                />
              </AnimatePresence>
            </div>
          </div>
          
          {/* Dot Indicators */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-8 h-3 bg-terracotta' 
                    : 'w-3 h-3 bg-sage/30 hover:bg-sage/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-sage/50 text-sm font-medium">
              {currentIndex + 1} / {services.length}
            </span>
          </div>
        </div>
        
        {/* Desktop Grid View - Optional alternative */}
        <div className="hidden lg:block mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <p className="text-sage/60 text-sm uppercase tracking-wider">Xem tất cả dịch vụ</p>
          </motion.div>
          
          <div className="grid grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-32 rounded-xl overflow-hidden mb-3">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-serif text-sm font-semibold text-sage group-hover:text-terracotta transition-colors">
                  {service.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;
