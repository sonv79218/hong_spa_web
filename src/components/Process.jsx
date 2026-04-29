import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Droplets, Microscope, Sparkle, RefreshCw, Wind, Hand, CircleDot, Sparkles, Flower } from 'lucide-react';

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-terracotta/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-sage/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <SectionHeader />

        {/* Peel Process */}
        <ProcessTimeline
          title="Quy trình Peel"
          steps={peelSteps}
          delay={0.2}
        />

        {/* Divider */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center my-16"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-terracotta/50" />
          <div className="mx-4 w-12 h-12 rounded-full bg-cream flex items-center justify-center border-2 border-terracotta/30 hover:border-terracotta transition-colors duration-300">
            <Flower size={20} className="text-terracotta" />
          </div>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-terracotta/50" />
        </motion.div>

        {/* CSDA Process */}
        <ProcessTimeline
          title="Quy trình CSDA"
          steps={csdaSteps}
          delay={0.4}
        />
      </div>
    </section>
  );
};

const SectionHeader = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="text-center mb-16"
    >
      <span className="inline-flex items-center gap-2 text-terracotta text-sm tracking-[0.2em] uppercase mb-4 font-medium">
        <span className="w-8 h-px bg-terracotta" />
        Liệu trình chi tiết
        <span className="w-8 h-px bg-terracotta" />
      </span>
      <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-sage font-bold mb-6 cursor-glow">
        Quy trình thực hiện
      </h2>
      <p className="text-sage/70 text-lg max-w-2xl mx-auto">
        Mỗi bước đều được thực hiện cẩn thận với sản phẩm chất lượng cao
      </p>
    </motion.div>
  );
};

const ProcessTimeline = ({ title, steps, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      <h3 className="font-serif text-2xl sm:text-3xl text-sage font-semibold text-center mb-10 group cursor-pointer">
        <span className="group-hover:text-terracotta transition-colors duration-300">
          {title}
        </span>
      </h3>

      {/* Timeline */}
      <div className="relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-terracotta/30 to-transparent" />
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-terracotta to-sage"
            initial={{ width: '0%' }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
          />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <TimelineStep key={step.title} step={step} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const TimelineStep = ({ step, index, isInView }) => {
  const icons = {
    'Làm sạch da': <Droplets size={24} />,
    'Tẩy tế bào chết': <Microscope size={24} />,
    'Peel da': <Sparkle size={24} />,
    'Trung hòa': <RefreshCw size={24} />,
    'Dưỡng phục hồi': <Sparkles size={24} />,
    'Làm sạch': <Droplets size={24} />,
    'Xông hơi': <Wind size={24} />,
    'Massage nâng cơ': <Hand size={24} />,
    'Đắp mask': <CircleDot size={24} />,
    'Dưỡng da': <Sparkles size={24} />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
      className="relative flex flex-col items-center text-center group"
    >
      {/* Icon Circle */}
      <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white border-2 border-terracotta/30 flex items-center justify-center shadow-lg shadow-terracotta/10 mb-4 group-hover:border-terracotta group-hover:shadow-xl group-hover:shadow-terracotta/20 transition-all duration-300 group-hover:scale-110">
        <div className="text-terracotta group-hover:text-sage transition-colors duration-300">
          {icons[step.title]}
        </div>
        {/* Step Number */}
        <motion.span 
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5, type: 'spring', stiffness: 200 }}
          className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-terracotta text-white text-xs font-bold flex items-center justify-center shadow-lg group-hover:bg-sage transition-colors duration-300"
        >
          {index + 1}
        </motion.span>
        
        {/* Pulse ring on hover */}
        <div className="absolute inset-0 rounded-full border-2 border-terracotta/50 scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-500" />
      </div>

      {/* Content */}
      <h4 className="font-semibold text-sage text-sm sm:text-base mb-1 group-hover:text-terracotta transition-colors duration-300">
        {step.title}
      </h4>
      <p className="text-sage/60 text-xs sm:text-sm">
        {step.description}
      </p>
      
      {/* Connector line for mobile */}
      {index < 4 && (
        <div className="absolute top-8 -right-2 sm:-right-3 w-4 sm:w-6 h-0.5 bg-gradient-to-r from-terracotta/30 to-transparent md:hidden" />
      )}
    </motion.div>
  );
};

const peelSteps = [
  { title: 'Làm sạch da', description: 'Loại bỏ lớp makeup và bụi bẩn' },
  { title: 'Tẩy tế bào chết', description: 'Bề mặt da mềm mại' },
  { title: 'Peel da', description: 'Bôi dung dịch peel' },
  { title: 'Trung hòa', description: 'Cân bằng độ pH da' },
  { title: 'Dưỡng phục hồi', description: 'Kem dưỡng phục hồi' },
];

const csdaSteps = [
  { title: 'Làm sạch', description: 'Rửa mặt sạch sâu' },
  { title: 'Xông hơi', description: 'Mở lỗ chân lông' },
  { title: 'Massage nâng cơ', description: 'Giúp da săn chắc' },
  { title: 'Đắp mask', description: 'Cấp ẩm nuôi dưỡng' },
  { title: 'Dưỡng da', description: 'Se khít lỗ chân lông' },
];

export default ProcessSection;
