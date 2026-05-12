import heroImg from "../assets/images/space/Screenshot_45.png";
import triet_bi from "../assets/images/picture_triet_long/triet_bi.jpg";
import triet_nach_nam from "../assets/images/picture_triet_long/triet_nach_nam.jpg";

export const products = [
  {
    id: "triet-long-1",
    slug: "triet-long-nach",
    title: "Triệt lông nách",
    category: "triet-long",
    shortDesc: "Triệt lông nách an toàn, nhanh chóng, hạn chế mọc lại.",
    desc: "Triệt lông nách bằng công nghệ diode laser hiện đại.",
    benefits: ["Giảm thâm", "Giảm viêm nang lông", "Da mịn hơn"],
    suitableFor: ["Nam", "Nữ"],
    process: ["Thăm khám", "Làm sạch", "Triệt laser"],
    notes: ["Không wax trước 1 tuần"],
    faq: [],
    duration: "30 phút",
    sessions: "6 buổi",
    warranty: "12 tháng",
    price: 999000,
    salePrice: 299000,
    sold: 120,
    hot: true,
    rating: 4.9,
    reviewCount: 40,
    image: triet_nach_nam,
    images: [triet_nach_nam, triet_nach_nam, triet_nach_nam, triet_bi]
  },

  {
    id: "triet-long-2",
    slug: "triet-long-bikini",
    title: "Triệt lông bikini",
    category: "triet-long",
    shortDesc: "Triệt bikini kín đáo, riêng tư, an toàn.",
    desc: "Công nghệ triệt lông chuyên sâu cho vùng bikini.",
    benefits: ["Giảm mọc lại", "Mịn da"],
    suitableFor: ["Nữ"],
    process: ["Tư vấn", "Làm sạch", "Laser"],
    notes: ["Không tẩy lông trước liệu trình"],
    faq: [],
    duration: "45 phút",
    sessions: "8 buổi",
    warranty: "12 tháng",
    price: 1999000,
    salePrice: 699000,
    sold: 85,
    hot: true,
    rating: 4.8,
    reviewCount: 28,
    image: triet_bi,
    images: [triet_bi, triet_bi, triet_bi]
  },

  {
    id: "da-2",
    slug: "laser-tri-tham-nam",
    title: "Laser trị thâm nám",
    category: "cham-soc-da",
    shortDesc: "Cải thiện thâm nám bằng laser hiện đại.",
    desc: "Laser trị nám giúp làm mờ nám, tàn nhang và sắc tố không đều.",
    benefits: [
      "Làm mờ nám",
      "Đều màu da",
      "Kích thích collagen"
    ],
    suitableFor: ["Da nám", "Da thâm sau mụn"],
    process: [
      "Soi da",
      "Làm sạch",
      "Laser",
      "Phục hồi"
    ],
    notes: [
      "Chống nắng kỹ",
      "Không treatment mạnh 3-5 ngày"
    ],
    faq: [
      {
        question: "Laser trị nám có đau không?",
        answer: "Châm chích nhẹ, có thể ủ tê."
      }
    ],
    duration: "60 phút",
    sessions: "3-6 buổi",
    warranty: "Theo liệu trình",
    price: 2599000,
    salePrice: 999000,
    sold: 73,
    hot: false,
    rating: 4.8,
    reviewCount: 32,
    image: heroImg,
    images: [heroImg, heroImg, heroImg ]
  }
];