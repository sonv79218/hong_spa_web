import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Search, Sparkles, Heart } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: "Tư vấn miễn phí",
    desc: "Liên hệ để được tư vấn về liệu trình phù hợp với loại da và vùng triệt",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop",
    icon: MessageCircle,
  },
  {
    step: 2,
    title: "Kiểm tra da",
    desc: "Chuyên viên kiểm tra tình trạng da và lông để lên kế hoạch chuẩn xác",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    icon: Search,
  },
  {
    step: 3,
    title: "Thực hiện liệu trình",
    desc: "Quy trình triệt lông chuyên nghiệp với công nghệ diode laser hiện đại",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
    icon: Sparkles,
  },
  {
    step: 4,
    title: "Chăm sóc sau triệt",
    desc: "Hướng dẫn chăm sóc da đúng cách và theo dõi kết quả sau liệu trình",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
    icon: Heart,
  },
];

export default function ProcessSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-cream/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-sage/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4">
            <span className="text-sage font-semibold text-sm sm:text-base">4</span>
            <span className="text-xs sm:text-sm font-medium text-sage">Bước đơn giản</span>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Quy trình
            <span className="text-sage"> chuyên nghiệp</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Chỉ 4 bước đơn giản để sở hữu làn da mịn màng
          </p>
        </motion.div>

        {/* Desktop: 4 columns grid */}
        {!isMobile ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-14 left-[calc(50%+36px)] w-[calc(100%-72px)] h-0.5 bg-gradient-to-r from-sage/30 to-sage/10 z-0" />
                  )}

                  <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-sage/5 hover:shadow-xl hover:shadow-sage/10 transition-all duration-300 group border border-sage/10">
                    <div className="absolute top-3 left-3 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-sage to-sage/80 flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-base sm:text-lg">{step.step}</span>
                    </div>

                    <div className="relative h-32 sm:h-40 overflow-hidden">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                        <Icon size={16} className="sm:text-lg text-sage" />
                        <h2 className="font-semibold text-gray-800 text-sm sm:text-base">
                          {step.title}
                        </h2>
                      </div>
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Mobile: Carousel */
          <div className="relative">
            <div className="overflow-hidden mx-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-sage/5 border border-sage/10"
                >
                  <div className="absolute top-3 left-3 z-10 w-10 h-10 rounded-full bg-gradient-to-br from-sage to-sage/80 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">{steps[currentIndex].step}</span>
                  </div>

                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={steps[currentIndex].image}
                      alt={steps[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      {(() => {
                        const Icon = steps[currentIndex].icon;
                        return <Icon size={18} className="text-sage" />;
                      })()}
                      <h2 className="font-semibold text-gray-800 text-base">
                        {steps[currentIndex].title}
                      </h2>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {steps[currentIndex].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === index
                      ? 'w-6 h-2 bg-sage'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>

            <p className="text-center text-xs text-gray-500 mt-2">
              Bước {currentIndex + 1} / {steps.length}
            </p>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-sage text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:bg-sage/90 transition-all duration-300"
          >
            <span>Đăng ký tư vấn ngay</span>
            <span className="text-lg sm:text-xl">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
