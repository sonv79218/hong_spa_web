import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Globe, Star } from 'lucide-react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <footer className="bg-sage-dark py-16 sm:py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-sage to-sage-dark" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
        >
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.h3 
              whileHover={{ scale: 1.02 }}
              className="font-serif text-3xl text-white font-bold mb-4 cursor-pointer"
            >
              Hong Spa
            </motion.h3>
            <p className="text-cream/70 text-sm leading-relaxed mb-4">
              Chăm sóc da chuyên nghiệp với công nghệ hiện đại và sản phẩm cao cấp.
              Đồng hành cùng bạn trên hành trình làm đẹp.
            </p>
            {/* Rating stars */}
            <div className="flex items-center justify-center md:justify-start gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  whileHover={{ scale: 1.2, rotate: star * 15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Star 
                    size={16} 
                    className="text-terracotta fill-terracotta cursor-pointer" 
                  />
                </motion.div>
              ))}
              <span className="text-cream/60 text-sm ml-2">(4.9/5)</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Liên hệ
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-terracotta/50" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center justify-center md:justify-start gap-3 text-cream/80 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center group-hover:bg-terracotta/30 transition-colors">
                  <MapPin size={18} className="text-terracotta" />
                </div>
                <span className="text-sm group-hover:text-cream transition-colors">
                  Thanh Bình - Đồng Kỵ - Từ Sơn - Bắc Ninh
                </span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-cream/80 group">
                <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center group-hover:bg-terracotta/30 transition-colors">
                  <Phone size={18} className="text-terracotta" />
                </div>
                <a 
                  href="tel:0392828888" 
                  className="text-sm group-hover:text-cream transition-colors"
                >
                  039 282 8888
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3 text-cream/80 group">
                <div className="w-10 h-10 rounded-full bg-terracotta/20 flex items-center justify-center group-hover:bg-terracotta/30 transition-colors">
                  <Clock size={18} className="text-terracotta" />
                </div>
                <span className="text-sm group-hover:text-cream transition-colors">
                  8:00 - 20:00 (Thứ 2 - CN)
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold text-lg mb-6 relative inline-block">
              Theo dõi
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-terracotta/50" />
            </h4>
            <div className="flex items-center justify-center md:justify-end gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
                aria-label="Website"
              >
                <Globe size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg"
                aria-label="Social"
              >
                <Globe size={20} />
              </motion.a>
              <motion.a
                href="https://zalo.me/0392828888"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-[#0068FF]/20 flex items-center justify-center text-white hover:bg-[#0068FF]/30 transition-all duration-300 shadow-lg"
                aria-label="Zalo"
              >
                <span className="text-lg font-bold">Z</span>
              </motion.a>
            </div>

            {/* Quick links */}
            <div className="mt-6 flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm text-cream/60">
              <a 
                href="#services" 
                className="hover:text-terracotta transition-colors duration-300 underline-draw"
              >
                Dịch vụ
              </a>
              <span className="w-1 h-1 rounded-full bg-cream/30" />
              <a 
                href="#process" 
                className="hover:text-terracotta transition-colors duration-300 underline-draw"
              >
                Quy trình
              </a>
              <span className="w-1 h-1 rounded-full bg-cream/30" />
              <a 
                href="#gallery" 
                className="hover:text-terracotta transition-colors duration-300 underline-draw"
              >
                Hình ảnh
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-cream/50 text-sm">
            © 2024 Hồng Spa. Tất cả quyền được bảo lưu.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
