import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "Triệt lông laser có đau không?",
    answer: "Triệt lông laser hiện đại được đánh giá là ít đau nhất trong các phương pháp triệt lông. Cảm giác châm chích nhẹ tùy cơ địa từng người. Công nghệ diode laser mới có hệ thống làm mát giúp giảm đau tối đa.",
  },
  {
    id: 2,
    question: "Bao nhiêu buổi thì hiệu quả?",
    answer: "Thông thường cần liệu trình từ 6-10 buổi để đạt kết quả tốt nhất. Khoảng cách giữa các buổi là 3-4 tuần. Kết quả rõ rệt nhất sau 3-4 buổi đầu tiên.",
  },
  {
    id: 3,
    question: "Có cần chăm sóc gì sau liệu trình?",
    answer: "Sau khi triệt lông, nên: Tránh phơi nắng 24-48 giờ, thoa kem dưỡng ẩm, tránh cạo/wax vùng đã triệt, sử dụng kem chống nắng khi ra ngoài.",
  },
  {
    id: 4,
    question: "Triệt lông laser có an toàn không?",
    answer: "Triệt lông laser hoàn toàn an toàn. Công nghệ diode laser đã được FDA chứng nhận. Tại Hong Spa, thiết bị được kiểm định và kỹ thuật viên được đào tạo chuyên sâu.",
  },
  {
    id: 5,
    question: "Chi phí triệt lông là bao nhiêu?",
    answer: "Giá dao động từ 499.000đ (triệt nách) đến 2.999.000đ (combo full body). Thường có ưu đãi giảm 30-50%. Liên hệ ngay để được báo giá chính xác!",
  },
  {
    id: 6,
    question: "Triệt lông có ảnh hưởng đến da không?",
    answer: "Triệt lông laser không gây hại cho da. Ngược lại, ánh sáng laser còn giúp kích thích sản sinh collagen, cải thiện texture da. Da có thể hơi ửng đỏ nhẹ nhưng sẽ tự hết sau vài giờ.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-sage/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4">
            <HelpCircle size={14} className="text-sage" />
            <span className="text-xs sm:text-sm font-medium text-sage">Giải đáp thắc mắc</span>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Câu hỏi
            <span className="text-sage"> thường gặp</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Những câu hỏi phổ biến nhất về dịch vụ triệt lông laser
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`bg-white rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 border border-sage/10 ${
                openId === faq.id 
                  ? 'shadow-lg shadow-sage/10 ring-2 ring-sage/20' 
                  : 'shadow-md shadow-sage/5 hover:shadow-lg hover:shadow-sage/10'
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left"
              >
                <span className="font-semibold text-gray-800 pr-3 text-sm sm:text-base">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    openId === faq.id 
                      ? 'bg-sage text-white' 
                      : 'bg-sage/10 text-sage'
                  }`}
                >
                  <ChevronDown size={16} className="sm:text-lg" />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 pt-0">
                      <div className="w-full h-px bg-gradient-to-r from-sage/20 to-terracotta/20 mb-3 sm:mb-4" />
                      <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-8 sm:mt-12 p-4 sm:p-6 bg-gradient-to-r from-cream/50 to-white rounded-xl sm:rounded-2xl border border-sage/10"
        >
          <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
            Vẫn còn thắc mắc? Liên hệ ngay!
          </p>
          <a
            href="https://zalo.me/0938361234"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sage font-semibold hover:text-sage/80 transition-colors text-sm sm:text-base"
          >
            <span>Chat Zalo ngay</span>
            <span className="text-lg sm:text-xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
