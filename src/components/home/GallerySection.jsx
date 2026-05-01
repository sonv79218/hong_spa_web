import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import img1 from "../../assets/images/space/Screenshot_1.png";
import img2 from "../../assets/images/space/Screenshot_2.png";
import img3 from "../../assets/images/space/Screenshot_45.png";
import img4 from "../../assets/images/space/Screenshot_45.png";

const gallery = [
  {
    img: img1,
    title: "Máy chăm sóc da mặt",
    desc: "Thiết bị làm sạch sâu và tái tạo làn da chuyên nghiệp.",
  },
  {
    img: img2,
    title: "Máy massage công nghệ cao",
    desc: "Hỗ trợ thư giãn cơ, giảm căng thẳng toàn thân.",
  },
  {
    img: img3,
    title: "Khu trị liệu da",
    desc: "Không gian điều trị da an toàn, tiêu chuẩn spa.",
  },
  {
    img: img4,
    title: "Thiết bị chăm sóc body",
    desc: "Hỗ trợ giảm béo, làm săn chắc cơ thể.",
  },
];

const GalleryItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: 'easeOut'
      }}
      className="group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={item.img} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-sage/80 via-sage/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Top Left Badge */}
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
          <Camera size={18} className="text-sage" />
        </div>
        
        {/* Expand Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-150">
          <Maximize2 size={16} className="text-sage" />
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
            {/* Decorative line */}
            <div className="w-12 h-0.5 bg-terracotta mb-3" />
            
            <h3 className="font-serif text-lg md:text-xl font-semibold text-white mb-1">
              {item.title}
            </h3>
            
            <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
      
      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-2xl md:rounded-3xl border-2 border-transparent group-hover:border-terracotta/50 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

const GallerySection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-sage relative overflow-hidden">
      {/* Top gradient transition from sage/5 */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-sage/5 to-sage" />
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cream/10 rounded-full blur-3xl translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Section label */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-cream/50" />
            <span className="text-cream/80 text-sm tracking-[0.2em] uppercase font-medium">
              Hình ảnh
            </span>
            <span className="w-8 h-px bg-cream/50" />
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
            Không gian & thiết bị
          </h2>
          
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-terracotta/50" />
            <span className="text-terracotta/70 text-lg">✦</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-terracotta/50" />
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {gallery.map((item, index) => (
            <GalleryItem key={index} item={item} index={index} />
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <a 
            href="#gallery"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-cream/30 text-cream rounded-full font-medium hover:bg-cream hover:text-sage transition-all duration-300"
          >
            <span>Xem tất cả</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
