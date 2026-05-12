import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Heart } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream via-white to-cream overflow-hidden pb-20 sm:pb-12">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-sage/10 to-sage/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 sm:bottom-0 left-0 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-tr from-terracotta/5 to-cream rounded-full blur-3xl" />

      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle, #6b8e6b 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 lg:pt-24 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          {/* Left - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left pt-4 lg:pt-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm mb-4 sm:mb-6 border border-sage/10"
            >
              <Star size={12} className="text-terracotta fill-terracotta" />
              <span className="text-xs sm:text-sm font-medium text-sage">Dịch vụ triệt lông TOP Bắc Ninh</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight mb-4 sm:mb-6"
            >
              <span className="text-sage">Triệt lông</span>
              <br />
              <span className="text-gray-700">vĩnh viễn</span>
              <br />
              <span className="text-gray-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                không lo mọc lại
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-sm sm:text-base lg:text-xl mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Công nghệ triệt lông diode laser hiện đại từ Hàn Quốc,
              da mịn màng suốt đời
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-8"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-sage/10 flex items-center justify-center">
                  <Heart size={12} className="text-sage sm:text-14" />
                </div>
                <span>An toàn</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-sage/10 flex items-center justify-center">
                  <Clock size={12} className="text-sage sm:text-14" />
                </div>
                <span>30-60 phút</span>
              </div>
            </motion.div>

            {/* CTA Buttons - Desktop only, mobile uses sticky */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden sm:flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 lg:gap-4"
            >
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sage text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:bg-sage/90 transition-all duration-300 active:scale-95"
              >
                <span>Đăng ký tư vấn miễn phí</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="https://zalo.me/0938361234"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-sage px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold border-2 border-sage/20 hover:border-sage/40 hover:bg-sage/5 transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                <span>Chat Zalo</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 sm:mt-10 pt-6 sm:pt-8 border-t border-sage/10"
            >
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="text-center lg:text-left">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-sage">5000+</p>
                  <p className="text-xs sm:text-sm text-gray-500">Khách hàng</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-sage">4.9</p>
                  <p className="text-xs sm:text-sm text-gray-500">Đánh giá</p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-sage">5+</p>
                  <p className="text-xs sm:text-sm text-gray-500">Năm kinh nghiệm</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Main image container */}
            <div className="relative mx-auto max-w-xs sm:max-w-md lg:max-w-lg">
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-sage/10 rounded-full blur-xl" />
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-terracotta/10 rounded-full blur-xl" />
              
              {/* Image frame */}
              <div className="relative bg-white rounded-2xl sm:rounded-3xl p-2 sm:p-3 shadow-xl shadow-sage/10">
                <img
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=700&fit=crop"
                  alt="Triệt lông công nghệ cao"
                  className="w-full h-[280px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-xl sm:rounded-2xl"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-lg shadow-sage/10 border border-sage/10">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-sage to-sage/80 flex items-center justify-center">
                      <span className="text-white text-lg sm:text-xl font-bold">✨</span>
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-gray-500">Giảm ngay</p>
                      <p className="text-base sm:text-lg font-bold text-terracotta">50%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
