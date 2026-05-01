import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Heart, Award } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-16 sm:py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Top gradient transition from hero */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream/50 to-cream/0" />
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-terracotta/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sage/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
                        {/* Section label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-terracotta" />
              <span className="text-terracotta text-sm tracking-[0.2em] uppercase font-medium">
                Về chúng tôi
              </span>
            </div>
            
            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-sage font-bold mb-6 sm:mb-8 leading-tight">
              Hong Spa
            </h2>
            {/* Main image container */}
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 md:-inset-6 border-2 border-terracotta/20 rounded-3xl" />
              
              {/* Image wrapper with rounded corners */}
              <div className="relative overflow-hidden rounded-3xl md:rounded-[2rem] shadow-2xl shadow-sage/10">
                <img
                  src="https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-6/517572504_3796812750463852_1710389456939006730_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=2a1932&_nc_ohc=TPUwp4Ru88QQ7kNvwH9SQbW&_nc_oc=AdrILx4i7XSjvTAbkX3g4dYLUtXJosA2lPIZKuZqv5f5KWYvmar3rB48BJTfiIhQzbA&_nc_zt=23&_nc_ht=scontent.fhan12-1.fna&_nc_gid=b7kQjoBcfi1AeWpFPqpmDA&_nc_ss=7b2a8&oh=00_Af2c-GK3JnMyy2fuEuvXJmBtzz93kwepxHEIQONl4KoZ4A&oe=69F94245"
                  alt="Hong Spa Interior"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sage/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-2xl px-6 py-4 shadow-xl shadow-sage/10 flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-terracotta/10 flex items-center justify-center">
                  <Award size={24} className="text-terracotta" />
                </div>
                <div>
                  <p className="font-serif text-lg font-semibold text-sage">5+ Năm</p>
                  <p className="text-sm text-sage/60">Kinh nghiệm</p>
                </div>
              </motion.div>

              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-terracotta/30 rounded-tl-xl" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-terracotta/30 rounded-br-xl" />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >



            {/* Main description */}
            <p className="text-sage/80 text-base sm:text-lg md:text-xl leading-relaxed mb-5 sm:mb-6" style={{ WebkitFontSmoothing: 'antialiased', transform: 'translateZ(0)' }}>
              Hong Spa là không gian chăm sóc sắc đẹp và thư giãn, nơi khách hàng
              được trải nghiệm các liệu trình hiện đại kết hợp cùng quy trình chăm sóc
              tận tâm.
            </p>

            {/* Secondary description */}
            <p className="text-sage/70 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10" style={{ WebkitFontSmoothing: 'antialiased', transform: 'translateZ(0)' }}>
              Chúng tôi tập trung vào chăm sóc da, massage thư giãn và các dịch vụ làm
              đẹp an toàn nhằm mang đến vẻ đẹp khỏe mạnh và sự cân bằng tinh thần.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-5 sm:gap-6 mb-8 sm:mb-10">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Sparkles size={22} className="text-terracotta" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage mb-1" style={{ transform: 'translateZ(0)' }}>Sản phẩm cao cấp</h4>
                  <p className="text-sm text-sage/60" style={{ transform: 'translateZ(0)' }}>An toàn & Hiệu quả</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Heart size={22} className="text-terracotta" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage mb-1" style={{ transform: 'translateZ(0)' }}>Chăm sóc tận tâm</h4>
                  <p className="text-sm text-sage/60" style={{ transform: 'translateZ(0)' }}>Tư vấn riêng biệt</p>
                </div>
              </div>
            </div>

 
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
