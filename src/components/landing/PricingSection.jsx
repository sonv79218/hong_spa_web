import { motion } from 'framer-motion';
import { Sparkles, Check } from "lucide-react";

const pricingPlans = [
  {
    id: 1,
    title: "Triệt nách",
    price: "499.000đ",
    oldPrice: "799.000đ",
    image: "https://images.unsplash.com/photo-1598524374912-6e92af34e484?w=400&h=300&fit=crop",
    features: [
      "Công nghệ Diode Laser",
      "15-20 phút/buổi",
      "Da mịn màng ngay",
      "Bảo hành 3 tháng",
    ],
    isHot: false,
    isSale: true,
    popular: false,
  },
  {
    id: 2,
    title: "Triệt chân tay",
    price: "999.000đ",
    oldPrice: "1.499.000đ",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
    features: [
      "Công nghệ Diode Laser",
      "30-45 phút/buổi",
      "Da mịn màng ngay",
      "Bảo hành 3 tháng",
    ],
    isHot: true,
    isSale: true,
    popular: false,
  },
  {
    id: 3,
    title: "Combo Full Body",
    price: "2.999.000đ",
    oldPrice: "4.999.000đ",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
    features: [
      "Công nghệ Diode Laser",
      "Triệt toàn thân",
      "Tiết kiệm 40%",
      "Bảo hành 6 tháng",
      "Tặng kem dưỡng",
    ],
    isHot: true,
    isSale: true,
    popular: true,
  },
];

export default function PricingSection() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-rose-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-3 sm:mb-4">
            <Sparkles size={14} className="text-rose-500" />
            <span className="text-xs sm:text-sm font-medium text-rose-700">Bảng giá ưu đãi</span>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Giá triệt lông
            <span className="text-rose-500"> hấp dẫn</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Nhiều gói combo tiết kiệm, ưu đãi lên đến 50% - Đăng ký ngay!
          </p>
        </motion.div>

        {/* Pricing Cards - Horizontal scroll on mobile */}
        <div className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory sm:snap-none">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex-shrink-0 w-[280px] sm:w-auto snap-center ${
                plan.popular ? 'sm:-mt-4 sm:mb-4' : ''
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg flex items-center gap-1">
                    <span>PHỔ BIẾN NHẤT</span>
                  </div>
                </div>
              )}

              <div className={`relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 h-full ${
                plan.popular 
                  ? 'shadow-xl sm:shadow-2xl shadow-rose-300/50 ring-2 ring-rose-400' 
                  : 'shadow-md sm:shadow-lg shadow-rose-100/50 hover:shadow-xl hover:shadow-rose-200/50'
              }`}>
                {/* Sale badge */}
                {plan.isSale && (
                  <div className="absolute top-3 right-3 z-10">
                    <div className="bg-red-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold">
                      -50%
                    </div>
                  </div>
                )}

                {/* Hot badge */}
                {plan.isHot && !plan.popular && (
                  <div className="absolute top-3 left-3 z-10">
                    <div className="bg-rose-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold flex items-center gap-1">
                      <span>HOT</span>
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-32 sm:h-40 overflow-hidden">
                  <img
                    src={plan.image}
                    alt={plan.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                    {plan.title}
                  </h3>

                  {/* Price */}
                  <div className="mb-3 sm:mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-rose-500">
                        {plan.price}
                      </span>
                      {plan.oldPrice && (
                        <span className="text-xs sm:text-base text-gray-400 line-through">
                          {plan.oldPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                        <Check size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={scrollToContact}
                    className={`w-full py-2.5 sm:py-3 px-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 active:scale-[0.98] ${
                      plan.popular
                        ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-300/50 hover:shadow-xl'
                        : 'bg-rose-50 text-rose-600 hover:bg-rose-100'
                    }`}
                  >
                    Đăng ký ngay
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10 sm:mt-12"
        >
          <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">
            * Giá đã bao gồm VAT.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700 transition-colors text-sm sm:text-base"
          >
            <span>Cần tư vấn thêm? Liên hệ ngay</span>
            <span className="text-lg sm:text-xl">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
