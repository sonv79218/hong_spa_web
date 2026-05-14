import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ComboSection = ({ combos }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="py-10 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center font-serif text-4xl font-bold mb-10">
          Combo nổi bật
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {combos.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow"
            >
              <div className="flex justify-between mb-3">
                <Sparkles />
                <span className="text-terracotta text-sm">{c.highlight}</span>
              </div>

              <h3 className="font-semibold text-xl mb-2">{c.name}</h3>
              <p className="text-gray-500 mb-4">{c.desc}</p>

              <div className="flex justify-between items-center">
                <span className="text-terracotta font-bold">{c.price}</span>

                <Link
  to={`/promotions#offer-${c.id}`}
  className="flex items-center gap-2 px-3 py-2 bg-sage/10 rounded-full hover:bg-sage hover:text-white transition"
>
  <Calendar size={16} />
  Chi tiết
</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComboSection;