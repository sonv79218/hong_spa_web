import { Link } from "react-router-dom";
import { Star, Clock } from "lucide-react";

const formatPrice = (price) =>
  new Intl.NumberFormat("vi-VN").format(price) + "đ";

export default function ProductCard({ product }) {
  const discountPercent = Math.round(
    ((product.price - product.salePrice) / product.price) * 100
  );

  return (
    <Link to={`/products/${product.id}`} className="block">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 active:scale-[0.98] sm:active:scale-100 h-full flex flex-col border border-sage/10">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />

          {/* Discount Badge */}
          <div className="absolute top-2 left-2 bg-terracotta text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
            -{discountPercent}%
          </div>

          {/* Hot Badge */}
          {product.hot && (
            <div className="absolute top-2 right-2 bg-sage text-white text-[10px] sm:text-xs font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md flex items-center gap-0.5">
              <span>HOT</span>
            </div>
          )}

          {/* Duration Badge */}
          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] sm:text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <Clock size={10} className="sm:text-xs" />
            <span>{product.duration}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-2.5 sm:p-3 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base line-clamp-2 leading-tight mb-1.5 sm:mb-2">
            {product.title}
          </h3>

          {/* Short Description */}
          <p className="text-gray-500 text-[11px] sm:text-xs line-clamp-2 leading-snug mb-2 sm:mb-3 flex-grow">
            {product.shortDesc}
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-1.5 sm:gap-2 mb-2">
            <span className="text-terracotta font-bold text-base sm:text-lg">
              {formatPrice(product.salePrice)}
            </span>
            <span className="text-gray-400 text-[10px] sm:text-xs line-through">
              {formatPrice(product.price)}
            </span>
          </div>

          {/* Rating & Sold */}
          <div className="flex items-center justify-between text-[10px] sm:text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Star size={10} className="text-sage fill-sage sm:text-xs" />
              <span>{product.rating}</span>
            </div>
            <span>Đã bán {product.sold}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
