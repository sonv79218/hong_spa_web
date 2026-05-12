import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const pains = [
  {
    title: "Cạo lông nhanh mọc lại",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop",
    emoji: "😫",
  },
  {
    title: "Wax đau rát, da kích ứng",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
    emoji: "😣",
  },
  {
    title: "Viêm nang lông, mụn",
    image: "https://images.unsplash.com/photo-1556228841-a3c527ebefe5?w=400&h=300&fit=crop",
    emoji: "😟",
  },
  {
    title: "Da thâm, kém tự tin",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop",
    emoji: "😔",
  },
];

export default function PainPoints() {
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
            <AlertCircle size={14} className="text-sage" />
            <span className="text-xs sm:text-sm font-medium text-sage">Bạn đang gặp tình trạng này?</span>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-2">
            Đừng để những vấn đề này
            <span className="text-sage"> làm mất tự tin</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Hàng ngày bạn phải đối mặt với những phiền toái này? Có cách giải quyết tốt hơn!
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg shadow-sage/5 hover:shadow-xl hover:shadow-sage/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-24 sm:h-32 md:h-40 lg:h-48 overflow-hidden">
                <img
                  src={pain.image}
                  alt={pain.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                {/* Emoji badge */}
                <div className="absolute top-2 right-2 w-8 h-8 sm:top-3 sm:right-3 sm:w-10 sm:h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-base sm:text-xl shadow-lg">
                  {pain.emoji}
                </div>

                {/* X mark */}
                <div className="absolute bottom-2 left-2 w-6 h-6 sm:bottom-3 sm:left-3 sm:w-8 sm:h-8 bg-terracotta/90 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-[10px] sm:text-sm">✕</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-2 sm:p-3 lg:p-4 text-center">
                <p className="text-xs sm:text-sm lg:text-base font-semibold text-gray-700 leading-snug">
                  {pain.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Solution CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            <span className="text-sage font-semibold">Giải pháp</span> cho bạn: Triệt lông diode laser
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-sage text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:bg-sage/90 transition-all duration-300"
          >
            <span>Tìm hiểu ngay</span>
            <span className="text-lg sm:text-xl">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
