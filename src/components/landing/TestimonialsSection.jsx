import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Thị Lan",
    age: 28,
    location: "Bắc Ninh",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    review: "Mình triệt nách và chân tại đây, da mịn màng hẳn luôn! Nhân viên tư vấn nhiệt tình, không gian sạch sẽ. Đã giới thiệu cho 3 chị em đồng nghiệp rồi!",
    rating: 5,
    service: "Triệt nách + Chân",
  },
  {
    id: 2,
    name: "Trần Minh Hà",
    age: 32,
    location: "Hà Nội",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    review: "Trước đây waxing đau kinh khủng, giờ triệt laser nhẹ nhàng hơn nhiều. Đặc biệt sau 3 buổi thấy lông mọc lại ít hẳn, da còn mịn hơn. Quá hài lòng!",
    rating: 5,
    service: "Triệt full body",
  },
  {
    id: 3,
    name: "Phạm Thu Hà",
    age: 25,
    location: "Bắc Ninh",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    review: "Đi làm văn phòng hay mặc đầm, giờ không còn phải lo lắng về vùng nách nữa. Đã hết viêm nang lông luôn. Spa gần nhà, nhân viên dễ thương!",
    rating: 5,
    service: "Triệt nách",
  },
  {
    id: 4,
    name: "Lê Hoài An",
    age: 30,
    location: "Hưng Yên",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    review: "Chồng mình cũng đi triệt lưng với chân tại đây. Kết quả rất tốt, lông mọc lại chậm hẳn. Giá cả hợp lý, còn được tặng voucher!",
    rating: 5,
    service: "Triệt lưng + Chân",
  },
  {
    id: 5,
    name: "Đặng Mai Phương",
    age: 27,
    location: "Bắc Ninh",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    review: "Đặt lịch online rất tiện, nhận xác nhận nhanh. Đến spa được phục vụ chu đáo, kỹ thuật viên làm cẩn thận. Chắc chắn sẽ quay lại!",
    rating: 5,
    service: "Triệt bikini",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-cream/50 to-white overflow-hidden">
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
            <Star size={14} className="text-sage fill-sage" />
            <span className="text-xs sm:text-sm font-medium text-sage">Đánh giá khách hàng</span>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Khách hàng
            <span className="text-sage"> nói gì?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Hơn 5000+ khách hàng đã trải nghiệm và hài lòng
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden">
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
                  const index = (currentIndex + i) % testimonials.length;
                  const item = testimonials[index];
                  return (
                    <div
                      key={`${currentIndex}-${i}`}
                      className={`flex-shrink-0 ${cardsPerView === 1 ? 'w-full' : cardsPerView === 2 ? 'w-[calc(50%-0.5rem)]' : 'w-[calc(33.333%-1rem)]'}`}
                    >
                      <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 shadow-lg shadow-sage/5 hover:shadow-xl hover:shadow-sage/10 transition-all duration-300 h-full flex flex-col border border-sage/10">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-sage/10 flex items-center justify-center mb-3 sm:mb-4">
                          <Quote size={14} className="sm:text-lg text-sage" />
                        </div>

                        <div className="flex items-center gap-1 mb-2 sm:mb-3">
                          {[...Array(item.rating)].map((_, starIndex) => (
                            <Star
                              key={starIndex}
                              size={12}
                              className="sm:text-base text-sage fill-sage"
                            />
                          ))}
                        </div>

                        <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4 flex-grow">
                          "{item.review}"
                        </p>

                        <div className="inline-block bg-sage/10 text-sage px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs mb-3 sm:mb-4 w-fit">
                          {item.service}
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-sage/10">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-sage/20"
                          />
                          <div>
                            <p className="font-semibold text-gray-800 text-xs sm:text-sm">{item.name}</p>
                            <p className="text-xs sm:text-sm text-gray-500">{item.location}</p>
                          </div>
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
            {testimonials.slice(0, Math.ceil(testimonials.length / cardsPerView)).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * cardsPerView)}
                className={`transition-all duration-300 rounded-full ${
                  Math.floor(currentIndex / cardsPerView) === index
                    ? 'w-5 h-2 sm:w-6 sm:h-2.5 bg-sage'
                    : 'w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
