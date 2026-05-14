import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, MessageCircle, ArrowRight, Star, Shield, Heart, MapPin, Clock, Navigation, CarTaxiFront } from 'lucide-react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const address = "Khu phố Thanh Bình, Đồng Nguyên, Bắc Ninh";
  const phone = "0392828888";
  const googleMapsUrl = "https://www.google.com/maps/search/Hong+Spa+Khu+phố+Thanh+Bình+Đồng+Nguyên+Bắc+Ninh";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.657!2d105.95!3d21.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA3JzQ4LjAiTiAxMDXCsDU3JzA0LjAiRQ!5e0!3m2!1svi!2s!4v1600000000000!5m2!1svi!2s&q=Khu+phố+Thanh+Bình+Đồng+Nguyên+Bắc+Ninh+Hong+Spa";

  return (
    <section id="contact" className="py-8 sm:py-20 md:py-24 bg-sage relative overflow-hidden">
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
            Trải nghiệm liệu trình chăm sóc da chuyên nghiệp tại Hong Spa
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
            <motion.a
              href={`tel:${phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-sage px-10 py-4 rounded-full text-lg font-semibold hover:bg-cream transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <Phone size={22} />
              Gọi ngay
            </motion.a>

            <motion.a
              href={`https://zalo.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0068FF] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#0052CC] transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <MessageCircle size={22} />
              Chat Zalo
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

      {/* Address & Map Section */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* INFO */}
            <div className="space-y-5">
              <h3 className="font-serif text-2xl font-bold text-white">Hong Spa</h3>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-terracotta/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={20} className="text-terracotta" />
                </div>
                <div>
                  <p className="text-cream/60 text-xs uppercase tracking-wider mb-1">Địa chỉ</p>
                  <p className="text-white text-base leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-terracotta/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={20} className="text-terracotta" />
                </div>
                <div>
                  <p className="text-cream/60 text-xs uppercase tracking-wider mb-1">Điện thoại</p>
                  <a 
                    href={`tel:${phone}`}
                    className="text-white text-base hover:text-terracotta transition-colors"
                  >
                    0392828888
                  </a>
                </div>
              </div>
                         <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-terracotta/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={20} className="text-terracotta" />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-terracotta/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={20} className="text-terracotta" />
                </div>
                <div>
                  <p className="text-cream/60 text-xs uppercase tracking-wider mb-1">Giờ mở cửa</p>
                  <p className="text-white text-base">09:00 - 21:00</p>
                </div>
              </div>

              {/* Google Maps Button */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 mt-2 px-6 py-3 bg-terracotta text-white rounded-full font-medium hover:bg-terracotta/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Navigation size={18} />
                <span>Chỉ đường Google Maps</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* MAP */}
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-xl h-[280px] md:h-[300px]">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hong Spa Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
