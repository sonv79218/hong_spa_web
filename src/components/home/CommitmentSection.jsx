import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, Shield, Sparkles, Leaf, Banknote, Check } from 'lucide-react';

const commitments = [
  {
    icon: MessageCircle,
    title: "Tư vấn riêng biệt",
    desc: "Tư vấn phù hợp với từng khách hàng",
  },
  {
    icon: Shield,
    title: "Sản phẩm cao cấp",
    desc: "An toàn, rõ nguồn gốc xuất xứ",
  },
  {
    icon: Sparkles,
    title: "Thiết bị hiện đại",
    desc: "Công nghệ tiên tiến nhất",
  },
  {
    icon: Leaf,
    title: "Không gian xanh",
    desc: "Sạch sẽ, thư giãn, thoáng mát",
  },
  {
    icon: Banknote,
    title: "Giá cả minh bạch",
    desc: "Không phí ẩn, chi phí rõ ràng",
  },
];

const CommitmentCard = ({ commitment, index }) => {
  const Icon = commitment.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
      style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-terracotta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-terracotta to-sage transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-terracotta/10 to-sage/10 flex items-center justify-center mb-5 transition-all duration-300">
          <Icon size={28} className="text-terracotta" />
        </div>
        
        {/* Title */}
        <h3 className="font-serif text-xl font-semibold text-sage mb-2 transition-colors duration-300" style={{ transform: 'translateZ(0)' }}>
          {commitment.title}
        </h3>
        
        {/* Description */}
        <p className="text-sage/60 text-sm leading-relaxed" style={{ transform: 'translateZ(0)' }}>
          {commitment.desc}
        </p>
        
        {/* Checkmark */}
        <div className="mt-4 flex items-center gap-2 text-terracotta/60 group-hover:text-terracotta transition-colors duration-300">
          <div className="w-6 h-6 rounded-full bg-terracotta/10 flex items-center justify-center">
            <Check size={14} />
          </div>
          <span className="text-xs font-medium uppercase tracking-wider">Đảm bảo</span>
        </div>
      </div>
    </motion.div>
  );
};

const CommitmentSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-cream relative overflow-hidden">
      {/* Top gradient transition from sage */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-sage to-cream" />
      
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-sage/5 rounded-full blur-3xl" />
      
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
              Cam kết
            </span>
            <span className="w-8 h-px bg-terracotta" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sage font-bold mb-5 sm:mb-6" style={{ transform: 'translateZ(0)' }}>
            Cam kết của chúng tôi
          </h2>
          
          <p className="text-sage/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed" style={{ transform: 'translateZ(0)' }}>
            Chúng tôi cam kết mang đến trải nghiệm spa tốt nhất với chất lượng dịch vụ vượt trội.
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-terracotta/30" />
            <span className="text-terracotta/50 text-lg">✦</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-terracotta/30" />
          </div>
        </motion.div>

        {/* Commitment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {commitments.map((commitment, index) => (
            <CommitmentCard key={commitment.title} commitment={commitment} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
