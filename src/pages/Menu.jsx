import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import menu1 from "../assets/images/menu/menu1.png";
import menu2 from "../assets/images/menu/menu2.png";
import { Sparkles, Heart, Droplets, Wind, Scissors, Flame, Eye, Star, Phone, Calendar, Clock, Check } from "lucide-react";


const combos = [
  {
    name: "Combo sạch sâu phục hồi",
    desc: "Làm sạch sâu, cấp ẩm và phục hồi làn da mệt mỏi.",
    price: "499.000đ",
    highlight: "Bán chạy",
  },
  {
    name: "Combo thư giãn toàn thân",
    desc: "Massage body kết hợp cổ vai gáy giúp giảm stress hiệu quả.",
    price: "399.000đ",
    highlight: "Phổ biến",
  },
  {
    name: "Combo trẻ hóa da",
    desc: "Chemical Peel kết hợp chăm sóc chuyên sâu cho làn da sáng khỏe.",
    price: "699.000đ",
    highlight: "Premium",
  },
];

const notes = [
  "Giá dịch vụ có thể thay đổi tùy tình trạng da và nhu cầu khách hàng.",
  "Vui lòng đặt lịch trước 2-4 tiếng để được phục vụ tốt nhất.",
  "Tư vấn miễn phí trước khi sử dụng liệu trình.",
  "Thời gian mỗi liệu trình từ 60-120 phút tùy dịch vụ.",
];

const MenuPage = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const menuRef = useRef(null);
  const isMenuInView = useInView(menuRef, { once: true, margin: "-80px" });
  const combosRef = useRef(null);
  const isCombosInView = useInView(combosRef, { once: true, margin: "-80px" });

  return (
    <section className="min-h-screen bg-cream" style={{ WebkitFontSmoothing: 'antialiased' }}>
      <Navbar />

      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative py-5 sm:py-20 md:py-10 bg-gradient-to-b from-sage/10 via-cream to-cream overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sage/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
		<div className="pt-24"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            {/* Section label */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-terracotta" />
              <span className="text-terracotta text-sm tracking-[0.2em] uppercase font-medium">
                Bảng giá
              </span>
              <span className="w-8 h-px bg-terracotta" />
            </div>




            {/* Decorative element */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-terracotta/30" />
              <span className="text-terracotta/50 text-lg">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-terracotta/30" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Menu Images / Price List */}
      <div 
        ref={menuRef}
        className="py-5 sm:py-10 md:py-10 bg-gradient-to-b from-cream to-sage/5 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-0 bg-gradient-to-b from-cream to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isMenuInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-10 md:mb-14"
          >
            <h2 
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-sage font-bold mb-4"
              style={{ transform: 'translateZ(0)' }}
            >
              Bảng giá chi tiết
            </h2>
            <p className="text-sage/70 text-base sm:text-lg max-w-xl mx-auto">
              Tham khảo chi phí từng liệu trình tại Hong Spa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isMenuInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl bg-white">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={menu1}
                    alt="Bảng giá dịch vụ 1"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ transform: 'translateZ(0)' }}
                  />
                  {/* Overlay gradient */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-sage/20 via-transparent to-transparent" /> */}
                </div>
                {/* Decorative corner */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-terracotta/30 rounded-tl-xl" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-terracotta/30 rounded-br-xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isMenuInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl bg-white">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={menu2}
                    alt="Bảng giá dịch vụ 2"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ transform: 'translateZ(0)' }}
                  />
                  {/* Overlay gradient */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-sage/20 via-transparent to-transparent" /> */}
                </div>
                {/* Decorative corner */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-terracotta/30 rounded-tl-xl" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-terracotta/30 rounded-br-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Combos Section */}
      <div 
        ref={combosRef}
        className="py-16 sm:py-20 md:py-24 bg-cream relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-sage/5 to-cream" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCombosInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-10 md:mb-14"
          >
            {/* Section label */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-terracotta" />
              <span className="text-terracotta text-sm tracking-[0.2em] uppercase font-medium">
                Ưu đãi
              </span>
              <span className="w-8 h-px bg-terracotta" />
            </div>

            <h2 
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-sage font-bold mb-4"
              style={{ transform: 'translateZ(0)' }}
            >
              Combo nổi bật
            </h2>
            <p className="text-sage/70 text-base sm:text-lg max-w-xl mx-auto">
              Tiết kiệm hơn với các gói combo được nhiều khách hàng yêu thích
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {combos.map((combo, index) => (
              <motion.div
                key={combo.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isCombosInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
                className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-terracotta to-sage" />
                
                {/* Highlight badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-terracotta/10 text-terracotta text-xs font-medium rounded-full">
                    <Star size={12} />
                    {combo.highlight}
                  </span>
                </div>

                <div className="p-6 md:p-8">
                  {/* Icon placeholder */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-terracotta/10 to-sage/10 flex items-center justify-center mb-5">
                    <Sparkles size={28} className="text-terracotta" />
                  </div>

                  <h3 
                    className="font-serif text-xl md:text-2xl font-semibold text-sage mb-3"
                    style={{ transform: 'translateZ(0)' }}
                  >
                    {combo.name}
                  </h3>
                  
                  <p 
                    className="text-sage/70 text-sm md:text-base leading-relaxed mb-5"
                    style={{ transform: 'translateZ(0)' }}
                  >
                    {combo.desc}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-sage/10">
                    <span 
                      className="font-serif text-2xl md:text-3xl font-bold text-terracotta"
                      style={{ transform: 'translateZ(0)' }}
                    >
                      {combo.price}
                    </span>
                    <a
                      href="#booking"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-sage/10 hover:bg-sage text-sage hover:text-white rounded-full text-sm font-medium transition-all duration-300"
                    >
                      <Calendar size={16} />
                      Đặt lịch
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Notes Section */}
      <div className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-cream to-sage/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream to-transparent" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center">
                <Clock size={20} className="text-terracotta" />
              </div>
              <h2 
                className="font-serif text-2xl md:text-3xl text-sage font-bold"
                style={{ transform: 'translateZ(0)' }}
              >
                Lưu ý khi sử dụng dịch vụ
              </h2>
            </div>

            <ul className="space-y-4">
              {notes.map((note, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-sage" />
                  </div>
                  <p 
                    className="text-sage/80 text-sm md:text-base leading-relaxed"
                    style={{ transform: 'translateZ(0)' }}
                  >
                    {note}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default MenuPage;
