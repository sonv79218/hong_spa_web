import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MenuImages = ({ images }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="py-10 bg-gradient-to-b from-cream to-sage/5">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
          >
            <img src={img.src} alt={img.alt} className="rounded-2xl shadow-xl" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MenuImages;