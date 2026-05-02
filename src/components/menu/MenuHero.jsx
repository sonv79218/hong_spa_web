import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MenuHero = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div ref={heroRef} className="relative py-5 sm:py-20 md:py-10 bg-gradient-to-b from-sage/10 via-cream to-cream overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sage/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="pt-24"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-terracotta" />
            <span className="text-terracotta text-sm tracking-[0.2em] uppercase font-medium">
              Bảng giá
            </span>
            <span className="w-8 h-px bg-terracotta" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MenuHero;