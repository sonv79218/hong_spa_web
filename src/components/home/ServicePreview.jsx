import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Sparkles, Droplets, Heart, Scissors, Flame, Wind, Eye } from 'lucide-react';
import { Link } from "react-router-dom";
import { services } from "../../data/servicesData";

const ServiceSlideCard = ({ service, direction, isSingleCard }) => {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: direction < 0 ? 100 : -100, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`${isSingleCard ? 'w-full max-w-sm mx-auto' : 'w-full flex-shrink-0'}`}
    >
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden h-full flex flex-col">
        {/* Large Image */}
        <div className="relative h-[200px] sm:h-[240px] md:h-[280px] lg:h-[300px] overflow-hidden flex-shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-sage/60 via-sage/10 to-transparent" />
          
          {/* Icon Badge */}
          <div className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <Icon size={20} className="md:text-2xl text-terracotta" />
          </div>
          
          {/* Decorative corner */}
          <div className="absolute bottom-4 left-4 w-10 md:w-12 h-0.5 bg-terracotta/60 rounded-full" />
        </div>
        
        {/* Title Section */}
        <div className="bg-gradient-to-r from-sage/10 to-terracotta/10 px-4 md:px-6 py-3 md:py-4 flex-shrink-0">
          <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-sage">
            {service.title}
          </h3>
        </div>
        
        {/* Description Section */}
        <div className="px-4 md:px-6 pb-4 md:pb-6 pt-3 md:pt-4 flex-grow flex flex-col">
          <p className="text-sage/70 text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-none">
            {service.desc}
          </p>
          
          {/* CTA Button */}
          <Link
            to={`/services/${service.id}`}
            className="mt-3 md:mt-4 w-full py-2.5 md:py-3 px-4 md:px-6 bg-gradient-to-r from-terracotta/10 to-sage/10 hover:from-terracotta/20 hover:to-sage/20 rounded-xl text-terracotta font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Xem chi tiết</span>
            <ChevronRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ServicePreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(1);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });
  const carouselRef = useRef(null);
  
  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setCardsPerView(3); // Large desktop: 3 cards
      } else if (width >= 768) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(1); // Mobile: 1 card
      }
    };
    
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);
  
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

  const isSingleCard = cardsPerView === 1;
  const cardWidth = isSingleCard ? 'max-w-sm' : 'w-full';
  const maxIndex = Math.max(0, services.length - cardsPerView);

  return (
    <section 
      className="py-12 md:py-16 lg:py-20 bg-cream relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          {/* Section label */}
          <div className="flex items-center justify-center gap-3 mb-3 md:mb-4">
            <span className="w-6 md:w-8 h-px bg-terracotta" />
            <span className="text-terracotta text-xs md:text-sm tracking-[0.2em] uppercase font-medium">
              Dịch vụ
            </span>
            <span className="w-6 md:w-8 h-px bg-terracotta" />
          </div>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-sage font-bold mb-3 md:mb-4">
            Dịch vụ nổi bật tại spa
          </h2>
          
          <p className="text-sage/70 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Chúng tôi cung cấp đa dạng dịch vụ chăm sóc sắc đẹp, giúp bạn thư giãn
            và nâng tầm nhan sắc mỗi ngày.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0 && isSingleCard}
            className={`absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-sage hover:bg-terracotta hover:text-white transition-all duration-300 active:scale-95
              ${isSingleCard 
                ? '-left-2 md:-left-4 lg:-left-16' 
                : 'left-0 md:left-2 lg:left-4'
              }
              ${currentIndex === 0 && isSingleCard ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="md:text-2xl" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex && isSingleCard}
            className={`absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-sage hover:bg-terracotta hover:text-white transition-all duration-300 active:scale-95
              ${isSingleCard 
                ? '-right-2 md:-right-4 lg:-right-16' 
                : 'right-0 md:right-2 lg:right-4'
              }
              ${currentIndex >= maxIndex && isSingleCard ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="md:text-2xl" />
          </button>
          
          {/* Carousel Track */}
          <div 
            ref={carouselRef}
            className={`overflow-hidden ${isSingleCard ? '' : 'mx-8 md:mx-12 lg:mx-16 xl:mx-20'}`}
          >
            <div className={`flex ${isSingleCard ? 'justify-center' : 'justify-start gap-4 md:gap-6'}`}>
              {isSingleCard ? (
                <AnimatePresence mode="wait" custom={direction}>
                  <ServiceSlideCard 
                    key={currentIndex}
                    service={services[currentIndex]}
                    direction={direction}
                    isSingleCard={true}
                  />
                </AnimatePresence>
              ) : (
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    initial={{ x: direction > 0 ? 50 : -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction < 0 ? 50 : -50, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="flex gap-4 md:gap-6"
                  >
                    {Array.from({ length: cardsPerView }).map((_, i) => {
                      const index = (currentIndex + i) % services.length;
                      return (
                        <div key={`${currentIndex}-${i}`} className={`${cardWidth} flex-shrink-0`}>
                          <ServiceSlideCard 
                            service={services[index]}
                            direction={direction}
                            isSingleCard={false}
                          />
                        </div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
          
          {/* Dot Indicators - Only show on mobile/tablet single card view */}
          {isSingleCard && (
            <>
              <div className="flex justify-center items-center gap-2 mt-6 md:mt-8">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex 
                        ? 'w-6 md:w-8 h-2.5 md:h-3 bg-terracotta' 
                        : 'w-2.5 md:w-3 h-2.5 md:h-3 bg-sage/30 hover:bg-sage/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Slide Counter */}
              <div className="text-center mt-3 md:mt-4">
                <span className="text-sage/50 text-xs md:text-sm font-medium">
                  {currentIndex + 1} / {services.length}
                </span>
              </div>
            </>
          )}
        </div>
        
        {/* Desktop Grid View - Alternative view */}
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
