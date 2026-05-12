import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Clock, Users, ShieldCheck, Check, MessageCircle, ChevronDown } from "lucide-react";
import { products } from "../data/productsData";
import ProductCard from "../components/ProductCard";

const formatPrice = (price) =>
  new Intl.NumberFormat("vi-VN").format(price) + "đ";

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === id);

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || product?.image
  );
  const [activeTab, setActiveTab] = useState("mo-ta");
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (!product) return;
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Không tìm thấy sản phẩm</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-sage text-white rounded-xl font-medium"
          >
            <ArrowLeft size={18} />
            Quay lại
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (item) => item.category === product.category && item.id !== product.id
  );

  const discountPercent = Math.round(
    ((product.price - product.salePrice) / product.price) * 100
  );

  const handleBook = () => {
    localStorage.setItem("selectedService", JSON.stringify(product));

    const appUrl = "fb-messenger://user-thread/100083175039911";
    const webUrl = "https://www.facebook.com/messages/t/code0359";
    const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = appUrl;
      setTimeout(() => window.open(webUrl, "_blank"), 1200);
    } else {
      window.open(webUrl, "_blank");
    }
  };

  const tabs = [
    { id: "mo-ta", label: "Mô tả" },
    { id: "loi-ich", label: "Lợi ích" },
    { id: "phu-hop", label: "Phù hợp" },
    { id: "quy-trinh", label: "Quy trình" },
    { id: "luu-y", label: "Lưu ý" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24 sm:pb-8">
      {/* Sticky Header - Show on scroll */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300 lg:hidden ${
          showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-3 px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-gray-600 hover:text-sage transition-colors"
          >
            <ArrowLeft size={22} />
          </button>
          <h1 className="font-semibold text-gray-800 text-sm line-clamp-1 flex-1">
            {product.title}
          </h1>
        </div>
      </div>

      {/* Back Button & Title - Top */}
      <div className="sticky top-0 z-40 bg-white shadow-sm lg:hidden border-b border-sage/10">
        <div className="flex items-center gap-3 px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-gray-600 hover:text-sage transition-colors"
          >
            <ArrowLeft size={22} />
          </button>
          <h1 className="font-semibold text-gray-800 text-sm line-clamp-1">
            {product.title}
          </h1>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="bg-white">
        {/* Main Image */}
        <div className="relative aspect-square max-w-lg mx-auto">
          <img
            src={selectedImage}
            alt={product.title}
            className="w-full h-full object-cover"
          />

          {/* Discount Badge */}
          <div className="absolute top-4 left-4 bg-terracotta text-white text-sm font-bold px-3 py-1.5 rounded-lg">
            -{discountPercent}%
          </div>
        </div>

        {/* Thumbnails */}
        <div className="px-4 py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {product.images?.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === img
                    ? "border-sage shadow-sm"
                    : "border-transparent hover:border-gray-300"
                }`}
              >
                <img src={img} alt={`${product.title} ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="bg-white mt-2 px-4 py-5">
        {/* Price */}
        <div className="flex items-baseline gap-3 mb-3">
          <span className="text-terracotta font-bold text-2xl sm:text-3xl">
            {formatPrice(product.salePrice)}
          </span>
          <span className="text-gray-400 text-base line-through">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-bold text-xl sm:text-2xl text-gray-800 mb-2 leading-tight">
          {product.title}
        </h1>

        {/* Rating & Sold */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Star size={14} className="text-sage fill-sage" />
            <span className="font-medium">{product.rating}</span>
            <span className="text-gray-400">({product.reviewCount} đánh giá)</span>
          </div>
          <div className="text-gray-400">|</div>
          <span>Đã bán {product.sold}</span>
        </div>
      </div>

      {/* Service Info Pills */}
      <div className="bg-white mt-2 px-4 py-4">
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2 bg-sage/10 px-3 py-2 rounded-lg">
            <Clock size={16} className="text-sage" />
            <span className="text-sm text-gray-700">{product.duration}</span>
          </div>
          <div className="flex items-center gap-2 bg-sage/10 px-3 py-2 rounded-lg">
            <Users size={16} className="text-sage" />
            <span className="text-sm text-gray-700">{product.sessions}</span>
          </div>
          <div className="flex items-center gap-2 bg-sage/10 px-3 py-2 rounded-lg">
            <ShieldCheck size={16} className="text-sage" />
            <span className="text-sm text-gray-700">{product.warranty}</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white mt-2 sticky top-[49px] sm:top-[53px] z-30 border-b border-sage/10">
        <div className="flex overflow-x-auto scrollbar-hide px-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                document.getElementById(tab.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`flex-shrink-0 px-4 py-3 text-sm font-medium border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-sage border-sage"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white mt-2">
        {/* Mô tả */}
        <div id="mo-ta" className="p-4 sm:p-5 bg-white rounded-2xl shadow-sm m-2 sm:m-3">
          <h2 className="font-semibold text-gray-800 mb-3">Mô tả dịch vụ</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{product.desc}</p>
        </div>

        {/* Lợi ích */}
        <div id="loi-ich" className="p-4 sm:p-5 bg-white rounded-2xl shadow-sm m-2 sm:m-3 mt-0">
          <h2 className="font-semibold text-gray-800 mb-3">Lợi ích</h2>
          <div className="space-y-2">
            {product.benefits.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <Check size={16} className="text-sage flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Phù hợp */}
        <div id="phu-hop" className="p-4 sm:p-5 bg-white rounded-2xl shadow-sm m-2 sm:m-3 mt-0">
          <h2 className="font-semibold text-gray-800 mb-3">Phù hợp với</h2>
          <div className="flex flex-wrap gap-2">
            {product.suitableFor.map((item, index) => (
              <span
                key={index}
                className="bg-sage/10 text-sage px-3 py-1.5 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Quy trình */}
        <div id="quy-trinh" className="p-4 sm:p-5 bg-white rounded-2xl shadow-sm m-2 sm:m-3 mt-0">
          <h2 className="font-semibold text-gray-800 mb-3">Quy trình thực hiện</h2>
          <div className="space-y-3">
            {product.process.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-sage/10 text-sage flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lưu ý */}
        <div id="luu-y" className="p-4 sm:p-5 bg-white rounded-2xl shadow-sm m-2 sm:m-3 mt-0">
          <h2 className="font-semibold text-gray-800 mb-3">Lưu ý</h2>
          <div className="space-y-2">
            {product.notes.map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">!</span>
                </div>
                <span className="text-gray-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        {product.faq && product.faq.length > 0 && (
          <div id="faq" className="p-4 sm:p-5 bg-white rounded-2xl shadow-sm m-2 sm:m-3 mt-0">
            <h2 className="font-semibold text-gray-800 mb-3">Câu hỏi thường gặp</h2>
            <div className="space-y-3">
              {product.faq.map((item, index) => (
                <details key={index} className="bg-gray-50 rounded-xl overflow-hidden group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                    <span className="font-medium text-gray-800 text-sm">{item.question}</span>
                    <ChevronDown size={18} className="text-gray-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-gray-600 text-sm">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-white mt-2 p-4 sm:p-5">
          <h3 className="font-semibold text-gray-800 mb-4">Dịch vụ liên quan</h3>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/products/${item.id}`}
                className="flex-shrink-0 w-40 sm:w-48"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-sage/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 sm:h-40 object-cover"
                  />
                  <div className="p-3">
                    <h4 className="text-sm font-medium text-gray-800 line-clamp-2 leading-tight mb-2">
                      {item.title}
                    </h4>
                    <p className="text-terracotta font-bold text-sm">
                      {formatPrice(item.salePrice)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Sticky Bottom CTA - Mobile Only */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-sage/10 px-4 py-3 z-40 lg:hidden safe-area-bottom">
        <div className="flex items-center gap-3">
          {/* Price */}
          <div className="flex-shrink-0">
            <p className="text-xs text-gray-500">Giá từ</p>
            <p className="text-lg font-bold text-terracotta">
              {formatPrice(product.salePrice)}
            </p>
          </div>

          {/* Book Button */}
          <button
            onClick={handleBook}
            className="flex-1 py-3.5 bg-sage text-white rounded-xl font-semibold text-sm shadow-lg shadow-sage/20 active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
          >
            <MessageCircle size={18} />
            <span>Đặt lịch ngay</span>
          </button>
        </div>
      </div>

      {/* Desktop CTA - Inside container */}
      <div className="hidden lg:block bg-white mt-2 p-5">
        <button
          onClick={handleBook}
          className="w-full py-4 bg-sage text-white rounded-xl font-semibold text-base shadow-lg shadow-sage/20 hover:bg-sage/90 transition-all flex items-center justify-center gap-2"
        >
          <MessageCircle size={20} />
          <span>Đặt lịch ngay</span>
        </button>
      </div>
    </div>
  );
}
