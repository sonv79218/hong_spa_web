import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { MapPin, Phone, Mail, Clock, Send, Check, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const infoRef = useRef(null);
  const isInfoInView = useInView(infoRef, { once: true, margin: "-80px" });
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-80px" });

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ và tên";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Vui lòng nhập nội dung";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        message: "",
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Điện thoại",
      value: "093 836 1234",
      sub: "(Hong Spa 1)",
    },
    {
      icon: MapPin,
      label: "Địa chỉ",
      value: "Khu phố Thanh Bình",
      sub: "Đồng Nguyên - Bắc Ninh",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hongspa68@gmail.com",
      sub: "",
    },
    {
      icon: Clock,
      label: "Giờ mở cửa",
      value: "8:00 - 21:00",
      sub: "Thứ 2 - CN",
    },
  ];

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center"
          >
            {/* Label */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-terracotta" />
              <span className="text-terracotta text-sm tracking-[0.2em] uppercase font-medium">
                Liên hệ
              </span>
              <span className="w-8 h-px bg-terracotta" />
            </div>

            <h1 
              className="font-serif text-4xl sm:text-5xl md:text-6xl text-sage font-bold mb-4 md:mb-6"
              style={{ transform: 'translateZ(0)' }}
            >
              Liên hệ tư vấn dịch vụ
            </h1>

            <p 
              className="text-sage/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
              style={{ transform: 'translateZ(0)' }}
            >
              Hãy liên hệ ngay cho chúng tôi để được tư vấn về dịch vụ spa!
            </p>

            {/* Decorative element */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-terracotta/30" />
              <span className="text-terracotta/50 text-lg">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-terracotta/30" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div 
        ref={infoRef}
        className="py-16 sm:py-20 md:py-24 bg-cream relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                  className="group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
                  style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-terracotta/10 flex items-center justify-center mb-4 group-hover:bg-terracotta/20 transition-colors duration-300">
                    <Icon size={24} className="text-terracotta" />
                  </div>
                  <p className="text-sage/60 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                  <p 
                    className="font-serif text-lg font-semibold text-sage mb-1"
                    style={{ transform: 'translateZ(0)' }}
                  >
                    {item.value}
                  </p>
                  {item.sub && (
                    <p className="text-sage/50 text-sm">{item.sub}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Feedback Form Section */}
      <div 
        ref={formRef}
        className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-cream to-sage/5 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-cream to-transparent" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-lg"
          >
            {/* Form Header */}
            <div className="text-center mb-8 md:mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MessageCircle size={24} className="text-terracotta" />
              </div>
              <h2 
                className="font-serif text-2xl md:text-3xl text-sage font-bold mb-3"
                style={{ transform: 'translateZ(0)' }}
              >
                Góp ý – Phản hồi
              </h2>
              <p className="text-sage/70 text-sm md:text-base max-w-lg mx-auto">
                Chúng tôi luôn mong nhận được những phản hồi quý báu từ quý khách hàng. Xin vui lòng chia sẻ ý kiến của bạn về chất lượng dịch vụ tại spa.
              </p>
            </div>

            {/* Success Message */}
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-sage/10 rounded-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                  <Check size={16} className="text-white" />
                </div>
                <p className="text-sage/80 text-sm md:text-base">
                  Cảm ơn bạn! Phản hồi của bạn đã được gửi thành công.
                </p>
              </motion.div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sage/80 text-sm font-medium mb-2">
                  Họ và tên <span className="text-terracotta">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nhập họ và tên"
                  className={`w-full px-4 py-3 bg-sage/5 rounded-xl border-2 ${errors.name ? 'border-terracotta/50' : 'border-transparent'} focus:border-terracotta/30 focus:bg-white transition-all duration-300 outline-none text-sage placeholder:text-sage/40`}
                  style={{ transform: 'translateZ(0)' }}
                />
                {errors.name && (
                  <p className="text-terracotta/80 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sage/80 text-sm font-medium mb-2">
                  Số điện thoại <span className="text-terracotta">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Nhập số điện thoại"
                  className={`w-full px-4 py-3 bg-sage/5 rounded-xl border-2 ${errors.phone ? 'border-terracotta/50' : 'border-transparent'} focus:border-terracotta/30 focus:bg-white transition-all duration-300 outline-none text-sage placeholder:text-sage/40`}
                  style={{ transform: 'translateZ(0)' }}
                />
                {errors.phone && (
                  <p className="text-terracotta/80 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sage/80 text-sm font-medium mb-2">
                  Email <span className="text-terracotta">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Nhập email"
                  className={`w-full px-4 py-3 bg-sage/5 rounded-xl border-2 ${errors.email ? 'border-terracotta/50' : 'border-transparent'} focus:border-terracotta/30 focus:bg-white transition-all duration-300 outline-none text-sage placeholder:text-sage/40`}
                  style={{ transform: 'translateZ(0)' }}
                />
                {errors.email && (
                  <p className="text-terracotta/80 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sage/80 text-sm font-medium mb-2">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Nhập địa chỉ (tùy chọn)"
                  className="w-full px-4 py-3 bg-sage/5 rounded-xl border-2 border-transparent focus:border-terracotta/30 focus:bg-white transition-all duration-300 outline-none text-sage placeholder:text-sage/40"
                  style={{ transform: 'translateZ(0)' }}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sage/80 text-sm font-medium mb-2">
                  Nội dung <span className="text-terracotta">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Nhập nội dung phản hồi"
                  className={`w-full px-4 py-3 bg-sage/5 rounded-xl border-2 ${errors.message ? 'border-terracotta/50' : 'border-transparent'} focus:border-terracotta/30 focus:bg-white transition-all duration-300 outline-none text-sage placeholder:text-sage/40 resize-none`}
                  style={{ transform: 'translateZ(0)' }}
                />
                {errors.message && (
                  <p className="text-terracotta/80 text-xs mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-terracotta text-white rounded-full font-medium text-base md:text-lg shadow-lg shadow-terracotta/30 hover:shadow-xl hover:shadow-terracotta/40 transition-all duration-300"
                >
                  <Send size={18} />
                  <span>Gửi phản hồi</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ContactPage;
