import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ShoppingBag, MapPin } from "lucide-react";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Header spacer for navbar */}
      <div className="h-16" />

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-md w-full"
        >
          {/* Decorative leaf illustration */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative inline-block mb-8"
          >
            {/* Decorative circle */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-sage/5 flex items-center justify-center">
              <MapPin size={48} className="text-sage/30" strokeWidth={1.5} />
            </div>
            {/* Floating accent */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center"
            />
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-1 -left-3 w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center"
            />
          </motion.div>

          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <span className="font-serif text-8xl sm:text-9xl font-bold text-sage/20 tracking-tight">
              404
            </span>
          </motion.div>

          {/* Error message */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-2 mb-10"
          >
            <h1 className="font-serif text-2xl sm:text-3xl text-sage font-bold mb-3">
              Không tìm thấy trang
            </h1>
            <p className="text-sage/60 text-base sm:text-lg leading-relaxed">
              Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-sage text-cream px-8 py-3.5 rounded-full font-medium hover:bg-sage-light transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <Home size={18} />
              Về trang chủ
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/products")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-sage border border-sage/20 px-8 py-3.5 rounded-full font-medium hover:bg-sage/5 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <ShoppingBag size={18} />
              Xem sản phẩm
            </motion.button>
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-terracotta/40 to-transparent"
          />

          {/* Spa tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="mt-6 text-sage/40 text-sm"
          >
            Hong Spa — Chăm sóc da chuyên nghiệp
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom spacing for bottom nav */}
      <div className="pb-20 md:pb-0" />
    </div>
  );
}
