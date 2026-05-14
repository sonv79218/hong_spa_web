import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { offers } from "../data/offers";
import { Link } from "react-router-dom";
import { Gift, Percent, Calendar, Sparkles, ArrowRight } from "lucide-react";
import ServicePreview from "../components/home/ServicePreview";

const PromotionPage = () => {
  const promotions = offers.filter((item) => item.promotion !== undefined);

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const listRef = useRef(null);
  const isListInView = useInView(listRef, { once: true, margin: "-80px" });
  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <section className="min-h-screen bg-cream pt-16" style={{ WebkitFontSmoothing: 'antialiased' }}>
      <Navbar />


      {/* Promotions List */}
      <div 
        ref={listRef}
        className="pt-12 sm:py-20 md:py-24 bg-cream relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream to-transparent" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isListInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-10 md:mb-14"
          >
            <h2 
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-sage font-bold mb-4"
              style={{ transform: 'translateZ(0)' }}
            >
              Ưu đãi nổi bật
            </h2>
            <p className="text-sage/70 text-base sm:text-lg max-w-xl mx-auto">
              Những ưu đãi đặc biệt dành cho bạn
            </p>
          </motion.div>

          <div className="space-y-6 md:space-y-8">
            {promotions.map((item, index) => (
              <motion.div
                key={item.id}
                id={`offer-${item.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isListInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                className="group bg-white rounded-2xl md:rounded-3xl shadow-md md:shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
              >
                <div className="flex flex-col md:flex-row">
                  {/* IMAGE */}
                  <div className="md:w-2/5 h-60 md:h-auto overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ transform: 'translateZ(0)' }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-sage/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-sage/20" />
                    
                    {/* Decorative corner */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/40 rounded-tl-xl" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/40 rounded-br-xl md:hidden" />
                  </div>

                  {/* CONTENT */}
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-terracotta/10 text-terracotta text-xs font-medium rounded-full">
                        <Sparkles size={12} />
                        {item.badge}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sage/10 text-sage text-xs font-medium rounded-full">
                        {item.highlight}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      className="font-serif text-2xl md:text-3xl font-bold text-sage mb-2"
                      style={{ transform: 'translateZ(0)' }}
                    >
                      {item.title}
                    </h3>

                    {/* Subtitle */}
                    <p 
                      className="text-sage/70 text-sm md:text-base mb-2"
                      style={{ transform: 'translateZ(0)' }}
                    >
                      {item.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sage/60 text-sm mb-4">
                      {item.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-serif text-3xl md:text-4xl font-bold text-terracotta">
                        {item.price}
                      </span>
                    </div>

                    {/* PROMOTION BOX */}
                    <div className="p-4 md:p-5 bg-gradient-to-br from-terracotta/5 to-sage/5 rounded-xl md:rounded-2xl">
                      <div className="flex items-center gap-2 mb-3">
                        <Gift size={18} className="text-terracotta" />
                        <span className="text-terracotta font-semibold text-sm">Ưu đãi đặc biệt</span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                            <Percent size={14} className="text-terracotta" />
                          </div>
                          <div>
                            <p className="text-xs text-sage/60">Giảm</p>
                            <p className="text-sm font-semibold text-sage">{item.promotion?.discountPercent}%</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-sage/10 flex items-center justify-center flex-shrink-0">
                            <Calendar size={14} className="text-sage" />
                          </div>
                          <div>
                            <p className="text-xs text-sage/60">Áp dụng</p>
                            <p className="text-sm font-semibold text-sage">{item.promotion?.apply}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 sm:col-span-2">
                          <div className="w-8 h-8 rounded-lg bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                            <Calendar size={14} className="text-terracotta" />
                          </div>
                          <div>
                            <p className="text-xs text-sage/60">Thời gian</p>
                            <p className="text-sm font-semibold text-sage">{item.promotion?.dateRange}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 sm:col-span-2">
                          <div className="w-8 h-8 rounded-lg bg-sage/10 flex items-center justify-center flex-shrink-0">
                            <Gift size={14} className="text-sage" />
                          </div>
                          <div>
                            <p className="text-xs text-sage/60">Quà tặng</p>
                            <p className="text-sm font-semibold text-sage">{item.promotion?.gift}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <ServicePreview />
      {/* CTA Section */}
  
      <Footer />
    </section>
  );
};

export default PromotionPage;
