import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Award, Heart } from 'lucide-react';

const TeamSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' });
  
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: '-50px' });

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-cream relative overflow-hidden">
      {/* Top gradient transition from sage/5 */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-sage/5 to-cream" />
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sage/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-terracotta/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ WebkitFontSmoothing: 'antialiased' }}>
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10 md:mb-14"
        >
          {/* Section label */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-terracotta" />
            <span className="text-terracotta text-sm tracking-[0.2em] uppercase font-medium">
              Đội ngũ
            </span>
            <span className="w-8 h-px bg-terracotta" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-sage font-bold mb-5 sm:mb-6" style={{ transform: 'translateZ(0)' }}>
            Đội ngũ chuyên nghiệp
          </h2>
          
          <p className="text-sage/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ transform: 'translateZ(0)' }}>
            Đội ngũ kỹ thuật viên tại Hong Spa được đào tạo bài bản, có kinh nghiệm
            trong chăm sóc da, massage và các liệu trình làm đẹp chuyên sâu.
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-terracotta/30" />
            <span className="text-terracotta/50 text-lg">✦</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-terracotta/30" />
          </div>
        </motion.div>

          {/* Stats Cards */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto"
          style={{ WebkitFontSmoothing: 'antialiased' }}
        >
          {/* Staff Count */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group"
          >
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-terracotta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-terracotta/10 to-sage/10 flex items-center justify-center mb-4">
                  <Users size={28} className="text-terracotta" />
                </div>
                
                {/* Number */}
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-terracotta mb-2" style={{ transform: 'translateZ(0)' }}>
                  10+
                </h3>
                
                {/* Label */}
                <p className="text-sage/70 text-sm uppercase tracking-wider font-medium" style={{ transform: 'translateZ(0)' }}>
                  Kỹ thuật viên
                </p>
                
                {/* Decorative line */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-terracotta/30 to-transparent mx-auto mt-4" />
              </div>
            </div>
          </motion.div>
          
          {/* Years Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-terracotta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-sage/10 to-terracotta/10 flex items-center justify-center mb-4">
                  <Award size={28} className="text-sage" />
                </div>
                
                {/* Number */}
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-sage mb-2" style={{ transform: 'translateZ(0)' }}>
                  5+
                </h3>
                
                {/* Label */}
                <p className="text-sage/70 text-sm uppercase tracking-wider font-medium" style={{ transform: 'translateZ(0)' }}>
                  Năm kinh nghiệm
                </p>
                
                {/* Decorative line */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-sage/30 to-transparent mx-auto mt-4" />
              </div>
            </div>
          </motion.div>
          
          {/* Happy Customers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative group"
          >
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-terracotta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-terracotta/10 to-sage/10 flex items-center justify-center mb-4">
                  <Heart size={28} className="text-terracotta" />
                </div>
                
                {/* Number */}
                <h3 className="font-serif text-4xl md:text-5xl font-bold text-terracotta mb-2" style={{ transform: 'translateZ(0)' }}>
                  1000+
                </h3>
                
                {/* Label */}
                <p className="text-sage/70 text-sm uppercase tracking-wider font-medium" style={{ transform: 'translateZ(0)' }}>
                  Khách hàng tin tưởng
                </p>
                
                {/* Decorative line */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-terracotta/30 to-transparent mx-auto mt-4" />
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <a
            href="#booking"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-terracotta to-sage text-white rounded-full font-medium hover:shadow-lg hover:shadow-terracotta/30 transition-all duration-300 group"
          >
            <span>Đặt lịch ngay</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
