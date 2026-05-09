import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const technologyImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1598524374912-6e92af34e484?w=500&h=400&fit=crop",
    title: "Diode Laser Technology",
    desc: "Công nghệ laser diode từ Hàn Quốc"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&h=400&fit=crop",
    title: "Safe & Painless",
    desc: "Không đau, không khó chịu"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=500&h=400&fit=crop",
    title: "Professional Equipment",
    desc: "Thiết bị được kiểm định chất lượng"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=400&fit=crop",
    title: "Certified Technicians",
    desc: "Kỹ thuật viên được đào tạo chuyên sâu"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&h=400&fit=crop",
    title: "Modern Facility",
    desc: "Cơ sở vật chất hiện đại, sạch sẽ"
  },
];

export default function TechnologySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Responsive cards per view
  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsPerView(3);
      } else if (width >= 640) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologyImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % technologyImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + technologyImages.length) % technologyImages.length);
  };

  const maxIndex = Math.max(0, technologyImages.length - cardsPerView);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-rose-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4">
            <Sparkles size={14} className="text-rose-500" />
            <span className="text-xs sm:text-sm font-medium text-rose-700">Công nghệ hiện đại</span>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Công nghệ triệt lông
            <span className="text-rose-500"> tiên tiến nhất</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Ứng dụng công nghệ diode laser từ Hàn Quốc, giúp hỗ trợ giảm lông mọc lại hiệu quả,
            an toàn cho mọi loại da
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-700 hover:bg-rose-500 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} className="sm:text-lg lg:text-xl" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 z-10 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-700 hover:bg-rose-500 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={16} className="sm:text-lg lg:text-xl" />
          </button>

          {/* Slider Track */}
          <div className="overflow-hidden mx-6 sm:mx-10 lg:mx-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3 sm:gap-4 lg:gap-6"
              >
                {Array.from({ length: cardsPerView }).map((_, i) => {
                  const index = (currentIndex + i) % technologyImages.length;
                  const item = technologyImages[index];
                  return (
                    <div
                      key={`${currentIndex}-${i}`}
                      className={`flex-shrink-0 ${cardsPerView === 1 ? 'w-full' : cardsPerView === 2 ? 'w-[calc(50%-0.5rem)]' : 'w-[calc(33.333%-1rem)]'}`}
                    >
                      <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg shadow-rose-100/50 hover:shadow-xl hover:shadow-rose-200/50 transition-all duration-300 group">
                        {/* Image */}
                        <div className="relative h-36 sm:h-48 lg:h-56 overflow-hidden">
                          <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-3 sm:p-4 lg:p-5">
                          <h3 className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg mb-0.5 sm:mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-500 text-xs sm:text-sm">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {technologyImages.slice(0, Math.ceil(technologyImages.length / cardsPerView)).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * cardsPerView)}
                className={`transition-all duration-300 rounded-full ${
                  Math.floor(currentIndex / cardsPerView) === index
                    ? 'w-5 h-2 sm:w-6 sm:h-2.5 bg-rose-500'
                    : 'w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
