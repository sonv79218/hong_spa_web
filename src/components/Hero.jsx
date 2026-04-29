import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark to-cream">
        {/* Animated decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-sage/5 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-terracotta/5 rounded-[30%_60%_70%_40%_/_50%_60%_30%_60%] blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/3 rounded-[50%_60%_30%_60%_/_30%_60%_70%_40%] blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
        
        {/* Decorative dots pattern */}
        <div className="absolute inset-0 dots-pattern opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6"
        >
          <span className="inline-block text-sage/60 text-sm tracking-[0.4em] uppercase mb-6 font-medium relative">
            <span className="absolute -left-6 top-1/2 w-4 h-px bg-sage/40" />
            Spa cao cấp
            <span className="absolute -right-6 top-1/2 w-4 h-px bg-sage/40" />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-sage font-bold mb-6 leading-tight tracking-wide"
        >
          <span className="inline-block hover:text-terracotta transition-colors duration-500 cursor-glow">
            COMBO SẠCH SÂU
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-terracotta" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-sage/80 font-light italic"
          >
            Kết hợp giữa sạch sâu và tái tạo
          </motion.p>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-terracotta" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="btn-glow group relative inline-flex items-center gap-3 bg-sage text-cream px-10 py-4 rounded-full text-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-sage/20 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-3">
              Đặt lịch ngay
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <span className="absolute inset-0 bg-sage-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div 
        className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full bg-terracotta/40"
        animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-sage/30"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
      />

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sage/50 hover:text-sage transition-colors duration-300 cursor-pointer group"
        aria-label="Scroll to services"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest uppercase opacity-60">Khám phá</span>
          <ChevronDown size={28} className="group-hover:text-terracotta transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
