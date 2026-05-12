import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2, Check } from 'lucide-react';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyBPq53s2Kt2s7nOcgJcmS4CoGrc8S771cYMweKBykwBKcTopL9EYsynk7RKwekhXFo/exec";

export default function QuickChatCTA() {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setShowPopup(false);
      }
    };
    
    if (showPopup) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showPopup]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const openZalo = () => {
    window.open('https://zalo.me/0938361234', '_blank');
  };

  const handleSubmit = async () => {
    if (loading) return;

    if (!formData.phone.trim()) {
      openZalo();
      return;
    }

    setLoading(true);

    const formDataToSend = new URLSearchParams();
    formDataToSend.append('name', formData.name || 'Khách landing page');
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', '');
    formDataToSend.append('address', '');
    formDataToSend.append('message', 'Lead từ popup landing page triệt lông');

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
      });

      setShowSuccess(true);

      setTimeout(() => {
        setShowPopup(false);
        setShowSuccess(false);
        setFormData({ name: '', phone: '' });
        openZalo();
      }, 1000);
    } catch (error) {
      console.error(error);
      setShowPopup(false);
      openZalo();
    } finally {
      setLoading(false);
    }
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowSuccess(false);
    setFormData({ name: '', phone: '' });
  };

  return (
    <>
      {/* Floating CTA Button - Desktop only */}
      {!isMobile && (
        <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
          <motion.button
            onClick={handleOpenPopup}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-sage rounded-full animate-ping opacity-30" />
            <div className="relative flex items-center justify-center w-14 h-14 bg-sage rounded-full shadow-lg shadow-sage/20 hover:shadow-xl hover:shadow-sage/30 transition-all duration-300">
              <MessageCircle size={24} className="text-white" />
            </div>
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap">
                Đăng ký tư vấn
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 border-4 border-transparent border-l-gray-800" />
              </div>
            </div>
          </motion.button>
        </div>
      )}

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={handleClosePopup}
            />

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-sm shadow-2xl overflow-hidden border border-sage/10"
            >
              {/* Header */}
              <div className="relative bg-sage p-5 sm:p-6 text-center">
                <button
                  onClick={handleClosePopup}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={24} className="sm:text-3xl text-white" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1">
                  Đăng ký tư vấn
                </h3>
                <p className="text-white/80 text-xs sm:text-sm">
                  Để lại thông tin để được ưu tiên
                </p>
              </div>

              {/* Form */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {showSuccess ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-sage/10 flex items-center justify-center">
                      <Check size={28} className="text-sage" />
                    </div>
                    <p className="text-gray-700 font-medium">Đang mở Zalo...</p>
                  </motion.div>
                ) : (
                  <>
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Họ và tên (không bắt buộc)"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-transparent focus:border-sage/30 focus:bg-white transition-all outline-none text-gray-800 placeholder:text-gray-400 text-sm"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Số điện thoại"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={loading}
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border-2 border-transparent focus:border-sage/30 focus:bg-white transition-all outline-none text-gray-800 placeholder:text-gray-400 text-sm"
                      />
                    </div>

                    <motion.button
                      onClick={handleSubmit}
                      disabled={loading}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 sm:py-4 bg-sage text-white rounded-xl font-semibold text-base shadow-lg shadow-sage/20 hover:bg-sage/90 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Đang gửi...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Gửi & Mở Zalo</span>
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-gray-400">
                      Hoặc bỏ qua và{' '}
                      <button
                        onClick={openZalo}
                        className="text-sage font-medium hover:underline"
                      >
                        chat Zalo ngay
                      </button>
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-3 sm:p-4 bg-white/95 backdrop-blur-lg border-t border-sage/10 lg:hidden z-40 safe-area-bottom">
        <button
          onClick={handleOpenPopup}
          className="w-full inline-flex items-center justify-center gap-2 bg-sage text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold shadow-lg active:scale-[0.98] transition-transform"
        >
          <MessageCircle size={16} className="sm:text-lg" />
          <span>Đăng ký tư vấn MIỄN PHÍ</span>
        </button>
      </div>
    </>
  );
}
