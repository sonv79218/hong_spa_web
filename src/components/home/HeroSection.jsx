import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
// import { heroSlides } from "../../data/heroSlides";
import { offers } from "../../data/offers";
import { Link } from "react-router-dom";
const slides = offers.map((item) => ({
  id: item.id,
  title: item.title,
  subtitle: item.subtitle,
  description: item.description,
  image: item.image,
  badge: item.badge,
}));
// const slides = heroSlides;
// Slow, luxurious image slide variants
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.05,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
};

// Elegant text animation with stagger and delay
const textVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.25,
      delayChildren: 0.4,
    }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.6, ease: 'easeInOut' }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.25, 0.1, 0.25, 1],
    }
  },
};

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const containerRef = useRef(null);
  // const dragControls = useDragControls();

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Slow auto-play - 10 seconds
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const interval = setInterval(() => {
      goToNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, goToNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Touch/Mouse drag handlers
  const handleDragStart = (e) => {
    setDragStart(e.type === 'touchstart' ? e.touches[0].clientX : e.clientX);
  };

  const handleDragEnd = (e) => {
    const dragEnd = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
    const dragDistance = dragStart - dragEnd;
    const threshold = 80; // pixels threshold to prevent accidental swipes
    
    if (dragDistance > threshold) {
      goToNext();
    } else if (dragDistance < -threshold) {
      goToPrev();
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <section 
      id="heroSection"
      ref={containerRef}
      className="relative w-full h-[55vh] min-h-[380px] sm:h-[60vh] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] overflow-hidden select-none"
      style={{ WebkitFontSmoothing: 'antialiased', MozOsxFontSmoothing: 'grayscale' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
    >
      {/* Slides Container - draggable */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={(_, info) => {
            const threshold = 80;
            if (info.offset.x > threshold) goToPrev();
            if (info.offset.x < -threshold) goToNext();
          }}
          transition={{
            x: { type: "tween", duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
            opacity: { duration: 1, ease: 'easeInOut' },
            scale: { duration: 1.5, ease: 'easeOut' },
          }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          style={{ touchAction: 'pan-y' }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
          />
          
          {/* Gradient Overlay - blend with navbar */}
          <div className="absolute inset-0 bg-gradient-to-r from-sage/70 via-sage/40 to-transparent" />
          
          {/* Additional dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-sage/60 via-sage/20 to-sage/30" />
          
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-sage/20 via-transparent to-terracotta/10" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container - overlaid on image */}
      <div className="absolute inset-0 flex items-center pointer-events-none z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="max-w-xl md:max-w-2xl pointer-events-auto"
              style={{ WebkitFontSmoothing: 'antialiased', transform: 'translateZ(0)' }}
            >
              {/* Badge */}
              <motion.div 
                variants={itemVariants} 
                className="mb-3 md:mb-4"
                style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 bg-terracotta/90 backdrop-blur-sm text-white text-xs md:text-sm font-medium rounded-full shadow-lg">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse" />
                  {currentSlide.badge}
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1 
                variants={itemVariants}
                className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 leading-tight"
                style={{ 
                  WebkitFontSmoothing: 'antialiased', 
                  MozOsxFontSmoothing: 'grayscale',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              >
                {currentSlide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                variants={itemVariants}
                className="text-cream/90 text-sm sm:text-base md:text-lg lg:text-xl font-light mb-2 md:mb-3 tracking-wide"
                style={{ 
                  WebkitFontSmoothing: 'antialiased', 
                  MozOsxFontSmoothing: 'grayscale',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              >
                {currentSlide.subtitle}
              </motion.p>

              {/* Description - hidden on very small screens */}
              <motion.p 
                variants={itemVariants}
                className="text-white/70 text-xs sm:text-sm md:text-base mb-4 md:mb-6 leading-relaxed max-w-md hidden sm:block"
                style={{ 
                  WebkitFontSmoothing: 'antialiased', 
                  MozOsxFontSmoothing: 'grayscale',
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              >
                {currentSlide.description}
              </motion.p>

              {/* CTA Buttons - compact on mobile */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap items-center gap-2 md:gap-4"
              >
                <a
                  href="#booking"
                  className="group relative inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-terracotta text-white rounded-full font-medium text-sm md:text-base shadow-lg shadow-terracotta/30 hover:shadow-xl hover:shadow-terracotta/40 transition-all duration-500"
                >
                  <span className="relative z-10">Đặt lịch</span>
                  
                  <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
<Link
  to={`/promotions#offer-${currentSlide.id}`}
  className="group relative inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-terracotta text-white rounded-full font-medium text-sm md:text-base shadow-lg shadow-terracotta/30 hover:shadow-xl hover:shadow-terracotta/40 transition-all duration-500"
>
  <span className="relative z-10">Đặt ngay</span>

  <svg
    className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</Link>
                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-full font-medium text-sm md:text-base hover:bg-white/20 hover:border-white/50 transition-all duration-500"
                >
                  <span>Dịch vụ</span>
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows - smaller for compact hero */}
      {/* <button
        onClick={goToPrev}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-terracotta/80 hover:border-terracotta transition-all duration-500 group z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="transition-transform duration-300 group-hover:-translate-x-1" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-terracotta/80 hover:border-terracotta transition-all duration-500 group z-20"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
      </button> */}

      {/* Play/Pause Control */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-16 md:bottom-20 right-4 md:right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-terracotta/80 hover:border-terracotta transition-all duration-500 z-20"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-700 rounded-full ${
              index === currentIndex
                ? "w-8 h-2.5 bg-terracotta"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom Gradient Fade - smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-32 bg-gradient-to-t from-cream via-cream/80 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
