import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { services } from "../data/servicesData";
import { ArrowLeft, Clock, Users, Check, Calendar, Sparkles } from "lucide-react";
// import ServicesPage from "./Services";
import ServicePreview from "../components/home/ServicePreview";

const ServiceDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const infoRef = useRef(null);
  const isInfoInView = useInView(infoRef, { once: true, margin: "-80px" });
  const processRef = useRef(null);
  const isProcessInView = useInView(processRef, { once: true, margin: "-80px" });
  const benefitsRef = useRef(null);
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-80px" });
  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const service = services.find((item) => item.id === id);

  if (!service) {
    return (
      <section className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-sage font-bold mb-4">
            Không tìm thấy dịch vụ
          </h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta text-white rounded-full font-medium hover:bg-terracotta/90 transition-colors"
          >
            <ArrowLeft size={18} />
            Quay về trang chủ
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-cream" style={{ WebkitFontSmoothing: 'antialiased' }}>
      <Navbar />

      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative py-16 sm:py-20 md:py-28 bg-gradient-to-b from-sage/10 via-cream to-cream overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sage/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-8"
          >
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sage/70 hover:text-terracotta transition-colors duration-300 group"
            >
              <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-medium">Quay lại</span>
            </button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            >
              {/* Label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-terracotta" />
                <span className="text-terracotta text-sm tracking-[0.2em] uppercase font-medium">
                  Dịch vụ
                </span>
              </div>

              <h1 
                className="font-serif text-4xl sm:text-5xl md:text-6xl text-sage font-bold mb-4 md:mb-6 leading-tight"
                style={{ transform: 'translateZ(0)' }}
              >
                {service.title}
              </h1>

              <p 
                className="text-sage/70 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6 md:mb-8"
                style={{ transform: 'translateZ(0)' }}
              >
                {service.desc}
              </p>

              {/* Price Tag */}
              <div className="inline-flex items-center gap-3 bg-terracotta/10 rounded-2xl px-6 py-4 mb-8">
                <span className="font-serif text-3xl md:text-4xl font-bold text-terracotta">
                  {service.price}
                </span>
              </div>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 md:gap-6">
                <div className="flex items-center gap-2 text-sage/70">
                  <Clock size={18} className="text-terracotta" />
                  <span className="text-sm md:text-base">{service.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sage/70">
                  <Users size={18} className="text-terracotta" />
                  <span className="text-sm md:text-base">{service.suitable}</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl shadow-sage/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    style={{ transform: 'translateZ(0)' }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sage/30 via-transparent to-transparent" />
                </div>
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-white/40 rounded-tl-xl" />
                <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-white/40 rounded-br-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div 
        ref={processRef}
        className="py-16 sm:py-20 md:py-24 bg-cream relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-10 md:mb-14"
          >
            <h2 
              className="font-serif text-3xl sm:text-4xl md:text-5xl text-sage font-bold mb-4"
              style={{ transform: 'translateZ(0)' }}
            >
              Quy trình thực hiện
            </h2>
            <p className="text-sage/70 text-base sm:text-lg max-w-xl mx-auto">
              Các bước chuyên nghiệp trong liệu trình của bạn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="relative bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
              >
                {/* Step Number */}
                <div className="w-10 h-10 rounded-full bg-terracotta/10 flex items-center justify-center mb-4">
                  <span className="font-serif text-lg font-bold text-terracotta">
                    {index + 1}
                  </span>
                </div>
                
                <p 
                  className="text-sage/80 text-sm md:text-base font-medium leading-relaxed"
                  style={{ transform: 'translateZ(0)' }}
                >
                  {step}
                </p>

                {/* Connector Line */}
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-terracotta/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div 
        ref={benefitsRef}
        className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-cream to-sage/5 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream to-transparent" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isBenefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center">
                <Sparkles size={24} className="text-terracotta" />
              </div>
              <h2 
                className="font-serif text-2xl md:text-3xl text-sage font-bold"
                style={{ transform: 'translateZ(0)' }}
              >
                Lợi ích nhận được
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isBenefitsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                  className="flex items-start gap-3 p-4 bg-sage/5 rounded-xl"
                  style={{ transform: 'translateZ(0)' }}
                >
                  <div className="w-6 h-6 rounded-full bg-terracotta/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-terracotta" />
                  </div>
                  <p className="text-sage/80 text-sm md:text-base leading-relaxed">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>


<ServicePreview />    
      <Footer />
    </section>
  );
};

export default ServiceDetailPage;
