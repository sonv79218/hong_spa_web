import { motion } from 'framer-motion';
import { Clock, Sparkles, ShieldCheck, Heart, ThumbsUp } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: "Tiết kiệm thời gian",
    desc: "Không cần cạo/wax mỗi ngày, tiết kiệm đến 30 phút/ngày",
    color: "sage",
  },
  {
    icon: Sparkles,
    title: "Da mịn màng",
    desc: "Hỗ trợ da mịn màng, không còn lông chấm gai, không thâm",
    color: "terracotta",
  },
  {
    icon: ShieldCheck,
    title: "An toàn tuyệt đối",
    desc: "Công nghệ được kiểm định, không gây hại cho da",
    color: "sage",
  },
  {
    icon: Heart,
    title: "Tự tin diện đồ",
    desc: "Tự tin mặc váy, đầm, bikini mà không lo lắng",
    color: "terracotta",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-cream/50 to-white">
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
            <ThumbsUp size={14} className="text-sage" />
            <span className="text-xs sm:text-sm font-medium text-sage">Ưu điểm vượt trội</span>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Tại sao chọn
            <span className="text-sage"> triệt lông laser?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Thay vì phương pháp truyền thống, triệt lông laser mang lại nhiều lợi ích vượt trội
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 text-center shadow-lg shadow-sage/5 hover:shadow-xl hover:shadow-sage/10 transition-all duration-300 border border-sage/10"
              >
                {/* Icon */}
                <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl flex items-center justify-center ${
                  benefit.color === 'sage' 
                    ? 'bg-gradient-to-br from-sage to-sage/80' 
                    : 'bg-gradient-to-br from-terracotta to-terracotta/80'
                }`}>
                  <Icon size={18} className="sm:text-xl lg:text-2xl text-white" />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-gray-800 text-xs sm:text-sm lg:text-base mb-1 sm:mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-[10px] sm:text-xs lg:text-sm leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
