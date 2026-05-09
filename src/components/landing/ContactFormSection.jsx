import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, MessageCircle, Loader2 } from 'lucide-react';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyBPq53s2Kt2s7nOcgJcmS4CoGrc8S771cYMweKBykwBKcTopL9EYsynk7RKwekhXFo/exec";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ và tên';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const openZalo = () => {
    window.open('https://zalo.me/0392828888', '_blank');
  };

  const openFacebook = () => {
    window.open('https://m.me/hongspavn', '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!validateForm()) return;

    setLoading(true);

    const formDataToSend = new URLSearchParams();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', '');
    formDataToSend.append('address', '');
    formDataToSend.append('message', 'Lead từ landing page triệt lông');

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
      });

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        setFormData({ name: '', phone: '' });
        openZalo();
      }, 1500);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-rose-50 to-white relative overflow-hidden">
      {/* Background decorations - smaller on mobile */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-rose-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-pink-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm mb-3 sm:mb-4">
            <span className="text-lg sm:text-xl">✨</span>
            <span className="text-xs sm:text-sm font-medium text-gray-700">Đăng ký ngay hôm nay</span>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            Nhận tư vấn
            <span className="text-rose-500"> miễn phí</span>
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto text-sm sm:text-base px-2">
            Để lại thông tin, chúng tôi sẽ liên hệ tư vấn chi tiết về liệu trình phù hợp với bạn
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-lg sm:shadow-xl shadow-rose-100/50"
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            {/* Name Input */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Họ và tên <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nhập họ và tên của bạn"
                disabled={loading}
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 outline-none text-gray-800 placeholder:text-gray-400 text-sm ${
                  errors.name 
                    ? 'border-rose-300 bg-rose-50' 
                    : 'border-transparent focus:border-rose-300 focus:bg-white'
                } ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
              />
              {errors.name && (
                <p className="text-rose-500 text-xs sm:text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Số điện thoại <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="VD: 0938123456"
                disabled={loading}
                className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 outline-none text-gray-800 placeholder:text-gray-400 text-sm ${
                  errors.phone 
                    ? 'border-rose-300 bg-rose-50' 
                    : 'border-transparent focus:border-rose-300 focus:bg-white'
                } ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
              />
              {errors.phone && (
                <p className="text-rose-500 text-xs sm:text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="w-full py-3 sm:py-4 px-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base lg:text-lg shadow-lg shadow-rose-300/50 hover:shadow-xl hover:shadow-rose-400/50 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Đang gửi...</span>
                </>
              ) : showSuccess ? (
                <>
                  <Check size={18} />
                  <span>Thành công!</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Đăng ký & mở Zalo</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 sm:gap-4 my-4 sm:my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs sm:text-sm text-gray-400">hoặc</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <a
              href="https://zalo.me/0392828888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 px-4 sm:px-6 bg-blue-500 text-white rounded-xl sm:rounded-2xl font-semibold hover:bg-blue-600 transition-all duration-300 shadow-md sm:shadow-lg"
            >
              <MessageCircle size={18} className="sm:text-xl" />
              <span className="text-sm sm:text-base">Zalo</span>
            </a>

            <a
              href="https://m.me/hongspavn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 px-4 sm:px-6 bg-[#1877F2] text-white rounded-xl sm:rounded-2xl font-semibold hover:bg-[#166FE5] transition-all duration-300 shadow-md sm:shadow-lg"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-sm sm:text-base">Facebook</span>
            </a>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500"
        >
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Check size={14} className="text-green-500" />
            <span>Tư vấn miễn phí</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Check size={14} className="text-green-500" />
            <span>Bảo mật</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Check size={14} className="text-green-500" />
            <span>Phản hồi 5p</span>
          </div>
        </motion.div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-xs w-full text-center shadow-2xl"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <Check size={32} className="sm:text-4xl text-green-500" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                Thành công!
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Đang mở Zalo để tư vấn cho bạn...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
