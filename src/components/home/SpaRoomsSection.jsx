import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Bed, Sofa, ShowerHead, Armchair } from 'lucide-react';
import phong_tri_lieu from "../../assets/images/space/phong_tri_lieu.png";
import phong_cho from "../../assets/images/space/phong_cho.png";
import phong_tam from "../../assets/images/space/phong_tam.png";
import phong_nghi from "../../assets/images/space/phong_nghi.png";


const rooms = [
  {
    name: "Phòng trị liệu",
    src: phong_tri_lieu,
    icon: Bed,
  },
  {
    name: "Phòng chờ",
    src: phong_cho,
    icon: Sofa,
  },
  {
    name: "Phòng tắm",
    src: phong_tam,
    icon: ShowerHead,
  },
  {
    name: "Phòng nghỉ",
    src: phong_nghi,
    icon: Armchair,
  },
];

const RoomCard = ({ room, index }) => {
  const Icon = room.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      className="group relative overflow-hidden rounded-3xl cursor-pointer"
      style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
    >
      {/* Large Image Container - Dominant visual */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={room.src}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 will-change-transform"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-sage/80 via-sage/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        
        {/* Content Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <div className="will-change-transform">
            {/* Room Name */}
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-2" style={{ transform: 'translateZ(0)' }}>
              {room.name}
            </h3>
            
            {/* Decorative Element */}
            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
              <span className="w-8 h-0.5 bg-terracotta" />
              <span className="text-white/80 text-sm">Khám phá</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-terracotta/40 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
};

const SpaRoomsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });
  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef, { once: true, margin: '-100px' });

  return (
    <section className="py-10 sm:py-20 md:py-24 bg-gradient-to-b from-cream to-sage/5 relative overflow-hidden">
      {/* Top gradient transition from cream to sage */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-cream to-transparent" />
      
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-sage/5 rounded-full blur-3xl" />
      
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
              Không gian
            </span>
            <span className="w-8 h-px bg-terracotta" />
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-sage font-bold mb-5 sm:mb-6" style={{ transform: 'translateZ(0)' }}>
            Không gian trải nghiệm
          </h2>
          
          <p className="text-sage/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ transform: 'translateZ(0)' }}>
            Không gian tại Hong Spa được thiết kế theo phong cách nhẹ nhàng, thư
            giãn và riêng tư.
          </p>
          
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-terracotta/30" />
            <span className="text-terracotta/50 text-lg">✦</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-terracotta/30" />
          </div>
        </motion.div>

        {/* Room Gallery Grid - 2 columns desktop, 1 column mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={room.name} room={room} index={index} />
          ))}
        </div>

        {/* Footer Description */}
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isFooterInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-sage/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Từng khu vực trị liệu được bố trí sạch sẽ, thoáng mát và tạo cảm giác
            thoải mái trong suốt quá trình trải nghiệm.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SpaRoomsSection;
