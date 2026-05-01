import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageCircle, ArrowRight, Star, Shield, Heart } from 'lucide-react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 sm:py-28 bg-sage relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 dots-pattern opacity-10" />
      </div>

      {/* Floating shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-white/5"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-20 right-10 w-20 h-20 rounded-full bg-terracotta/10"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 text-cream/70 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            <span className="w-8 h-px bg-cream/30" />
            Liên hệ ngay
            <span className="w-8 h-px bg-cream/30" />
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-6">
            Đặt lịch ngay hôm nay
          </h2>
          <p className="text-cream/80 text-lg mb-10 max-w-2xl mx-auto">
            Trải nghiệm liệu trình chăm sóc da chuyên nghiệp tại Hồng Spa
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
            <motion.a
              href="tel:0392828888"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-sage px-10 py-4 rounded-full text-lg font-semibold hover:bg-cream transition-all duration-300 shadow-xl hover:shadow-2xl shine-sweep"
            >
              <Phone size={22} className="icon-bounce" />
              Gọi ngay
              <ArrowRight size={18} className="hidden sm:block group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="https://zalo.me/0392828888"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0068FF] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#0052CC] transition-all duration-300 shadow-xl hover:shadow-2xl shine-sweep"
            >
              <MessageCircle size={22} className="icon-bounce" />
              Chat Zalo
              <ArrowRight size={18} className="hidden sm:block group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-cream/70"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-terracotta/20 flex items-center justify-center">
                <Star size={16} className="text-terracotta" />
              </div>
              <span className="text-sm hover:text-cream transition-colors">5+ năm kinh nghiệm</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-terracotta/20 flex items-center justify-center">
                <Shield size={16} className="text-terracotta" />
              </div>
              <span className="text-sm hover:text-cream transition-colors">Sản phẩm cao cấp</span>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-terracotta/20 flex items-center justify-center">
                <Heart size={16} className="text-terracotta" />
              </div>
              <span className="text-sm hover:text-cream transition-colors">Tư vấn miễn phí</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
