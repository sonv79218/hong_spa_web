import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Image as ImageIcon, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop',
      alt: 'Spa interior',
    },
    {
      src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop',
      alt: 'Spa treatment room',
    },
    {
      src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop',
      alt: 'Relaxing spa moment',
    },
    {
      src: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=600&h=400&fit=crop',
      alt: 'Facial treatment',
    },
  ];

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-0 dots-pattern opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-terracotta text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            <span className="w-8 h-px bg-terracotta" />
            Không gian
            <span className="w-8 h-px bg-terracotta" />
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-sage font-bold mb-6 cursor-glow">
            Hình ảnh Spa
          </h2>
          <p className="text-sage/70 text-lg max-w-2xl mx-auto">
            Không gian thư giãn, hiện đại và thoải mái
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl group cursor-pointer ${
                index === 0 || index === 3 ? 'row-span-2' : ''
              }`}
            >
              <div className={`${index === 0 || index === 3 ? 'aspect-[3/4]' : 'aspect-square'} w-full h-full min-h-[200px] sm:min-h-[250px] relative`}>
                {/* Image with zoom effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sage/60 via-sage/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Zoom icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={24} className="text-sage" />
                  </div>
                </div>
                
                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white text-sm font-medium flex items-center gap-2 drop-shadow-lg">
                    <ImageIcon size={16} />
                    {image.alt}
                  </span>
                </div>
              </div>
              
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-terracotta/50 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View more indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <span className="inline-flex items-center gap-2 text-sage/60 text-sm">
            <span className="w-8 h-px bg-sage/30" />
            Hover để phóng to
            <span className="w-8 h-px bg-sage/30" />
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
