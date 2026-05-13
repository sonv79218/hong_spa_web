import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, ShoppingCart, Heart, ChevronLeft, ChevronRight, X } from "lucide-react";
import { products } from "../data/productsData";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [showSortModal, setShowSortModal] = useState(false);

  const itemsPerPage = 8;

  const categories = [
    { id: "all", label: "Tất cả" },
    { id: "hot", label: "Hot" },
    { id: "triet-long", label: "Triệt lông" },
    { id: "cham-soc-da", label: "Chăm sóc da" },
  ];

  const sortOptions = [
    { id: "popular", label: "Bán chạy" },
    { id: "price-asc", label: "Giá: Thấp → Cao" },
    { id: "price-desc", label: "Giá: Cao → Thấp" },
    { id: "discount", label: "Giảm giá nhiều nhất" },
  ];

  const filteredProducts = useMemo(() => {
    let data = [...products];

    data = data.filter((item) => {
      const matchCategory =
        selectedCategory === "all" ||
        item.category === selectedCategory ||
        (selectedCategory === "hot" && item.hot);

      const matchSearch = item.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchCategory && matchSearch;
    });

    data.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.salePrice - b.salePrice;
        case "price-desc":
          return b.salePrice - a.salePrice;
        case "discount":
          return (b.price - b.salePrice) - (a.price - a.salePrice);
        default:
          return b.sold - a.sold;
      }
    });

    return data;
  }, [selectedCategory, sortBy, searchTerm]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const displayedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setPage(1);
  };

  const handleSortChange = (sortId) => {
    setSortBy(sortId);
    setShowSortModal(false);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 sm:pb-0">
      {/* <Navbar /> */}

      {/* Mobile Header - Sticky */}
      <div className="sticky top-0 z-30 bg-white shadow-sm border-b border-sage/10">
        {/* Search Bar */}
        <div className="px-4 py-3">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm dịch vụ..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setPage(1);
              }}
              className="w-full pl-10 pr-10 py-3 bg-gray-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-sage/30 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* Category Chips - Horizontal Scroll */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-sage text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort & Filter Row */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-gray-100">
          <button
            onClick={() => setShowSortModal(true)}
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-sage transition-colors"
          >
            <SlidersHorizontal size={16} />
            <span>{sortOptions.find((s) => s.id === sortBy)?.label}</span>
          </button>

          {/* <div className="flex items-center gap-3">
            <button className="p-2 text-gray-500 hover:text-sage transition-colors">
              <Heart size={20} />
            </button>
            <button className="p-2 text-gray-500 hover:text-sage transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-sage text-white text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-3 sm:px-4 py-4">
        {/* Results count */}
        <p className="text-xs sm:text-sm text-gray-500 mb-3">
          {filteredProducts.length} dịch vụ được tìm thấy
        </p>

        {/* Products Grid - 2 columns on mobile */}
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search size={32} className="text-gray-300" />
            </div>
            <p className="text-gray-500 font-medium">Không tìm thấy dịch vụ</p>
            <p className="text-gray-400 text-sm mt-1">Thử tìm kiếm với từ khóa khác</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all border border-sage/10"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 rounded-xl text-sm font-medium transition-all ${
                    page === p
                      ? "bg-sage text-white shadow-sm"
                      : "bg-white shadow-sm text-gray-600 hover:bg-gray-50 border border-sage/10"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all border border-sage/10"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Sort Modal - Mobile Bottom Sheet */}
      {showSortModal && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowSortModal(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 max-h-[70vh] overflow-y-auto">
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sắp xếp theo</h3>
            <div className="space-y-1">
              {sortOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleSortChange(option.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all ${
                    sortBy === option.id
                      ? "bg-sage/10 text-sage font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
