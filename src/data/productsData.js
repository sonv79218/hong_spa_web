const getImg = (folder, name) =>
  new URL(`../assets/images/${folder}/${name}.jpg`, import.meta.url).href;

// Image helpers for each service category
const getTrietImg = (name) => getImg("picture_triet_long", name);
const getBodyImg = (name) => getImg("picture_body", name);
const getFacialImg = (name) => getImg("picture_facial", name);
const getAdvancedImg = (name) => getImg("picture_advanced", name);

// ========== CENTRALIZED PRICING CONFIG ==========
const BODY_SERVICE_PRICING = {
  "Massage body đá nóng": {
    price: 500000,
    salePrice: 300000
  },
  "Massage body đá nóng xông hơi": {
    price: 600000,
    salePrice: 400000
  },
  "Massage lưng": {
    price: 250000,
    salePrice: 150000
  },
  "Massage chân": {
    price: 250000,
    salePrice: 150000
  },
  "Massage cổ vai gáy": {
    price: 250000,
    salePrice: 150000
  },
  "Tẩy tế bào chết body + đắp dưỡng": {
    price: 400000,
    salePrice: 300000
  },
  "Tắm trắng nhả nắng": {
    price: 700000,
    salePrice: 500000
  }
};

const FACIAL_SERVICE_PRICING = {
  "Chăm sóc da cơ bản": {
    price: 250000,
    salePrice: 150000
  },
  "Chăm sóc da chuyên sâu": {
    price: 350000,
    salePrice: 250000
  },
  "Chăm sóc da mụn chuyên sâu": {
    price: 350000,
    salePrice: 250000
  },
  "Cấy tế bào gốc": {
    price: 500000,
    salePrice: 350000
  },
  "Nâng cơ xóa nhăn": {
    price: 550000,
    salePrice: 400000
  },
  "Trẻ hóa da Carbon Toning": {
    price: 550000,
    salePrice: 400000
  },
  "Cấp ẩm phục hồi Christina": {
    price: 650000,
    salePrice: 450000
  },
  "Deep Clean Skin": {
    price: 650000,
    salePrice: 450000
  }
};
const ADVANCED_SKIN_PRICING = {
  "Chemical Peel Mandelic": {
    price: 1000000,
    salePrice: 700000
  },
  "Detox thanh lọc da DR.BELTER": {
    price: 1000000,
    salePrice: 700000
  },
  "Peel A trẻ hóa da": {
    price: 1000000,
    salePrice: 700000
  },
  "Vi tảo Canxi": {
    price: 1200000,
    salePrice: 800000
  },
  "Peel Recovery": {
    price: 1300000,
    salePrice: 900000
  },
  "Mesotech căng bóng": {
    price: 1300000,
    salePrice: 900000
  },
  "Peel Max White": {
    price: 2000000,
    salePrice: 1500000
  },
  "Larimedical Peel": {
    price: 2000000,
    salePrice: 1500000
  },
  "Multy Peel": {
    price: 2000000,
    salePrice: 1500000
  }
};
// Helper function to create massage/body service
const createBodyService = ({
  id,
  slug,
  title,
  area,
  shortDesc,
  desc,
  benefits,
  process,
  notes,
  duration,
  imageName
}) => ({
  id,
  slug,
  title,
  category: "massage-body",
  group: "body-care",
  area,
  shortDesc,
  desc,
  benefits,
  suitableFor: ["Nam", "Nữ"],
  process,
  notes,
  faq: [],
  duration,
  sessions: "1 buổi",
  price: BODY_SERVICE_PRICING[title].price,
  salePrice: BODY_SERVICE_PRICING[title].salePrice,
  sold: 0,
  hot: false,
  rating: 4.9,
  reviewCount: 0,
  image: getBodyImg(imageName),
  images: [getBodyImg(imageName)]
});
const createFacialService = ({
  id,
  slug,
  title,
  area,
  shortDesc,
  desc,
  benefits,
  process,
  notes,
  duration,
  imageName,
  hot = false
}) => ({
  id,
  slug,
  title,
  category: "cham-soc-da",
  group: "facial-care",
  area,
  shortDesc,
  desc,
  benefits,
  suitableFor: ["Nam", "Nữ"],
  process,
  notes,
  faq: [],
  duration,
  sessions: "1 buổi",
  price: FACIAL_SERVICE_PRICING[title].price,
  salePrice: FACIAL_SERVICE_PRICING[title].salePrice,
  sold: 0,
  hot,
  rating: 4.9,
  reviewCount: 0,
  image: getFacialImg(imageName),
  images: [getFacialImg(imageName)]
});

// Helper function to create advanced skin treatment service
const createAdvancedSkinService = ({
  id,
  slug,
  title,
  shortDesc,
  desc,
  benefits,
  process,
  notes,
  duration,
  imageName,
  hot = false
}) => ({
  id,
  slug,
  title,
  category: "dieu-tri-da",
  group: "advanced-skin-treatment",
  area: "Da mặt",
  shortDesc,
  desc,
  benefits,
  suitableFor: ["Nam", "Nữ"],
  process,
  notes,
  faq: [],
  duration,
  sessions: "1 buổi",
  price: ADVANCED_SKIN_PRICING[title].price,
  salePrice: ADVANCED_SKIN_PRICING[title].salePrice,
  sold: 0,
  hot,
  rating: 4.9,
  reviewCount: 0,
  image: getAdvancedImg(imageName),
  images: [getAdvancedImg(imageName)]
});
const TRIET_LONG_PRICING = {
  "Mép": {
    oneYear: { salePrice: 200000, price: 500000 },
    lifetime: { salePrice: 400000, price: 700000 }
  },
  "Râu & Cằm": {
    oneYear: { salePrice: 500000, price: 1200000 },
    lifetime: { salePrice: 1000000, price: 1500000 }
  },
  "Mặt": {
    oneYear: { salePrice: 800000, price: 1500000 },
    lifetime: { salePrice: 1500000, price: 2000000 }
  },
  "Nách": {
    oneYear: { salePrice: 400000, price: 999000 },
    lifetime: { salePrice: 600000, price: 1299000 }
  },
  "1/2 Tay": {
    oneYear: { salePrice: 1000000, price: 1800000 },
    lifetime: { salePrice: 1500000, price: 2200000 }
  },
  "Cả Tay": {
    oneYear: { salePrice: 1500000, price: 2200000 },
    lifetime: { salePrice: 1900000, price: 2600000 }
  },
  "1/2 Chân": {
    oneYear: { salePrice: 1500000, price: 2500000 },
    lifetime: { salePrice: 1800000, price: 2800000 }
  },
  "Chân": {
    oneYear: { salePrice: 3000000, price: 4500000 },
    lifetime: { salePrice: 3500000, price: 5000000 }
  },
  "Lưng": {
    oneYear: { salePrice: 1500000, price: 2200000 },
    lifetime: { salePrice: 2500000, price: 3200000 }
  },
  "Bikini": {
    oneYear: { salePrice: 1500000, price: 2200000 },
    lifetime: { salePrice: 2500000, price: 3200000 }
  },
  "Ngực": {
    oneYear: { salePrice: 500000, price: 1200000 },
    lifetime: { salePrice: 800000, price: 1500000 }
  },
  "Bụng": {
    oneYear: { salePrice: 800000, price: 1500000 },
    lifetime: { salePrice: 1200000, price: 2000000 }
  },
  "Toàn thân": {
    oneYear: { salePrice: 15000000, price: 25000000 },
    lifetime: { salePrice: 20000000, price: 35000000 }
  }
};

// Helper function to create warranty options by area
const createWarrantyOptionsByArea = (area) => {
  const pricing = TRIET_LONG_PRICING[area];
  if (!pricing) return null;

  return [
    {
      id: "1-nam",
      label: "Bảo hành 1 năm",
      warranty: "12 tháng",
      price: pricing.oneYear.price,
      salePrice: pricing.oneYear.salePrice
    },
    {
      id: "vinh-vien",
      label: "Bảo hành vĩnh viễn",
      warranty: "Vĩnh viễn",
      price: pricing.lifetime.price,
      salePrice: pricing.lifetime.salePrice
    }
  ];
};

// ========== PRODUCTS ==========
export const products = [
  // ========== TRIỆT NÁCH ==========
  {
    id: "triet-nach-nam",
    slug: "triet-long-nach-nam",
    title: "Triệt lông nách Nam",
    category: "triet-long",
    group: "triet-nach",
    area: "Nách",
    shortDesc: "Triệt lông nách nam bằng công nghệ diode laser hiện đại.",
    desc: "Triệt lông nách nam bằng công nghệ diode laser từ Hàn Quốc, an toàn, không đau, hạn chế mọc lại.",
    benefits: ["Giảm thâm nách", "Không viêm nang lông", "Da mịn màng"],
    suitableFor: ["Nam"],
    process: ["Thăm khám da", "Làm sạch vùng nách", "Triệt laser diode", "Kiểm tra & dưỡng"],
    notes: ["Không wax trước 2 tuần", "Tránh phơi nắng 48h"],
    faq: [],
    duration: "25-30 phút",
    sessions: "6-8 buổi",
    warrantyOptions: createWarrantyOptionsByArea("Nách"),
    defaultWarranty: "1-nam",
    price: TRIET_LONG_PRICING["Nách"].oneYear.price,
    salePrice: TRIET_LONG_PRICING["Nách"].oneYear.salePrice,
    sold: 157,
    hot: false,
    rating: 4.9,
    reviewCount: 52,
    image: getTrietImg("triet_nach_nam"),
    images: [getTrietImg("triet_nach_nam")],
  },
  {
    id: "triet-nach-nu",
    slug: "triet-long-nach-nu",
    title: "Triệt lông nách Nữ",
    category: "triet-long",
    group: "triet-nach",
    area: "Nách",
    shortDesc: "Triệt lông nách nữ công nghệ diode laser cao cấp.",
    desc: "Triệt lông nách nữ bằng công nghệ diode laser từ Hàn Quốc, giúp da nách mịn màng, không thâm, tự tin diện đồ.",
    benefits: ["Giảm thâm", "Mịn da", "Không viêm nang lông"],
    suitableFor: ["Nữ"],
    process: ["Thăm khám da", "Làm sạch vùng nách", "Triệt laser diode", "Dưỡng da"],
    notes: ["Không wax trước 2 tuần", "Tránh phơi nắng"],
    faq: [
      {
        question: "Triệt nách có đau không?",
        answer: "Cảm giác châm chích nhẹ, hầu hết khách hàng đều thoải mái chịu được."
      }
    ],
    duration: "25-30 phút",
    sessions: "6-8 buổi",
    warrantyOptions: createWarrantyOptionsByArea("Nách"),
    defaultWarranty: "1-nam",
    price: TRIET_LONG_PRICING["Nách"].oneYear.price,
    salePrice: TRIET_LONG_PRICING["Nách"].oneYear.salePrice,
    sold: 289,
    hot: false,
    rating: 4.9,
    reviewCount: 89,
    image: getTrietImg("triet_nach_nu"),
    images: [getTrietImg("triet_nach_nu")],
  },

  // ========== TRIỆT BIKINI / VÙNG KÍN ==========
  {
    id: "triet-bikini",
    slug: "triet-long-bikini",
    title: "Triệt lông bikini",
    category: "triet-long",
    group: "triet-bikini",
    area: "Bikini",
    shortDesc: "Triệt lông bikini kín đáo, riêng tư, an toàn tuyệt đối.",
    desc: "Triệt lông vùng bikini bằng công nghệ diode laser cao cấp, kín đáo, riêng tư, an toàn. Giúp chị em tự tin, vệ sinh hơn.",
    benefits: ["Kín đáo riêng tư", "An toàn tuyệt đối", "Mịn da vùng bikini"],
    suitableFor: ["Nữ"],
    process: ["Tư vấn riêng tư", "Làm sạch vùng bikini", "Triệt laser", "Dưỡng da"],
    notes: ["Bảo mật tuyệt đối", "Không tẩy lông trước 2 tuần"],
    faq: [
      {
        question: "Triệt bikini có an toàn không?",
        answer: "Hoàn toàn an toàn, kỹ thuật viên nữ, phòng riêng tư."
      }
    ],
    duration: "40-45 phút",
    sessions: "8-10 buổi",
    warrantyOptions: createWarrantyOptionsByArea("Bikini"),
    defaultWarranty: "1-nam",
    price: TRIET_LONG_PRICING["Bikini"].oneYear.price,
    salePrice: TRIET_LONG_PRICING["Bikini"].oneYear.salePrice,
    sold: 178,
    hot: false,
    rating: 4.8,
    reviewCount: 67,
    image: getTrietImg("triet_bi"),
    images: [getTrietImg("triet_bi"), getTrietImg("ron"), getTrietImg("mong_nu"), getTrietImg("ria_nu")],
  },

  // ========== TRIỆT CHÂN ==========
  {
    id: "triet-chan-nam",
    slug: "triet-long-chan-nam",
    title: "Triệt lông chân Nam",
    category: "triet-long",
    group: "triet-chan",
    area: "Chân",
    shortDesc: "Triệt lông chân nam công nghệ diode laser hiện đại.",
    desc: "Triệt lông toàn bộ chân nam bằng công nghệ diode laser từ Hàn Quốc, giúp da chân mịn màng, không còn lông chấm gai.",
    benefits: ["Triệt toàn bộ cẳng chân", "Da mịn màng", "Tiết kiệm thời gian"],
    suitableFor: ["Nam"],
    process: ["Thăm khám da", "Làm sạch", "Triệt laser toàn chân", "Dưỡng da"],
    notes: ["Cạo lông trước 1 ngày", "Tránh phơi nắng"],
    faq: [],
    duration: "45-60 phút",
    sessions: "8-10 buổi",
    warrantyOptions: createWarrantyOptionsByArea("Chân"),
    defaultWarranty: "1-nam",
    price: TRIET_LONG_PRICING["Chân"].oneYear.price,
    salePrice: TRIET_LONG_PRICING["Chân"].oneYear.salePrice,
    sold: 124,
    hot: false,
    rating: 4.9,
    reviewCount: 41,
    image: getTrietImg("ca_chan_nam"),
    images: [getTrietImg("ca_chan_nam"), getTrietImg("cang_chan_nam")],
  },
  {
    id: "triet-chan-nu",
    slug: "triet-long-chan-nu",
    title: "Triệt lông chân Nữ",
    category: "triet-long",
    group: "triet-chan",
    area: "Chân",
    shortDesc: "Triệt lông chân nữ công nghệ diode laser cao cấp.",
    desc: "Triệt lông toàn bộ chân nữ bằng công nghệ diode laser từ Hàn Quốc. Giúp chị em tự tin diện váy, đầm ngắn mà không lo lắng.",
    benefits: ["Triệt toàn bộ chân", "Da mịn màng", "Không thâm", "Tự tin diện đồ"],
    suitableFor: ["Nữ"],
    process: ["Thăm khám da", "Làm sạch", "Triệt laser toàn chân", "Dưỡng da"],
    notes: ["Cạo lông trước 1 ngày", "Tránh phơi nắng 48h"],
    faq: [],
    duration: "45-60 phút",
    sessions: "8-10 buổi",
    warrantyOptions: createWarrantyOptionsByArea("Chân"),
    defaultWarranty: "1-nam",
    price: TRIET_LONG_PRICING["Chân"].oneYear.price,
    salePrice: TRIET_LONG_PRICING["Chân"].oneYear.salePrice,
    sold: 234,
    hot: false,
    rating: 4.9,
    reviewCount: 78,
    image: getTrietImg("ca_chan_nu"),
    images: [getTrietImg("ca_chan_nu"), getTrietImg("cang_chan_nu")],
  },

  // ========== TRIỆT TAY ==========
  {
    id: "triet-tay-nam",
    slug: "triet-long-tay-nam",
    title: "Triệt lông tay Nam",
    category: "triet-long",
    group: "triet-tay",
    area: "Cả Tay",
    shortDesc: "Triệt lông tay nam bằng công nghệ diode laser hiện đại.",
    desc: "Triệt lông toàn bộ tay nam bằng công nghệ diode laser từ Hàn Quốc, giúp da tay mịn màng, nam tính hơn.",
    benefits: ["Triệt cẳng tay & cánh tay", "Da mịn màng", "Nhanh chóng"],
    suitableFor: ["Nam"],
    process: ["Thăm khám da", "Làm sạch", "Triệt laser toàn tay", "Dưỡng da"],
    notes: ["Cạo lông trước 1 ngày"],
    faq: [],
    duration: "35-40 phút",
    sessions: "6-8 buổi",
    warrantyOptions: createWarrantyOptionsByArea("Cả Tay"),
    defaultWarranty: "1-nam",
    price: TRIET_LONG_PRICING["Cả Tay"].oneYear.price,
    salePrice: TRIET_LONG_PRICING["Cả Tay"].oneYear.salePrice,
    sold: 98,
    hot: false,
    rating: 4.8,
    reviewCount: 35,
    image: getTrietImg("ca_tay_nam"),
    images: [getTrietImg("ca_tay_nam"), getTrietImg("cang_tay_nam"), getTrietImg("cang_tay"), getTrietImg("canh_tay")],
  },
  {
    id: "triet-tay-nu",
    slug: "triet-long-tay-nu",
    title: "Triệt lông tay Nữ",
    category: "triet-long",
    group: "triet-tay",
    area: "Cả Tay",
    shortDesc: "Triệt lông tay nữ công nghệ diode laser cao cấp.",
    desc: "Triệt lông toàn bộ tay nữ bằng công nghệ diode laser từ Hàn Quốc. Giúp chị em tự tin diện tay áo ngắn, váy tay.",
    benefits: ["Triệt cẳng tay & cánh tay", "Da mịn màng", "Không thâm"],
    suitableFor: ["Nữ"],
    process: ["Thăm khám da", "Làm sạch", "Triệt laser toàn tay", "Dưỡng da"],
    notes: ["Cạo lông trước 1 ngày", "Tránh phơi nắng"],
    faq: [],
    duration: "35-40 phút",
    sessions: "6-8 buổi",
    warrantyOptions: createWarrantyOptionsByArea("Cả Tay"),
    defaultWarranty: "1-nam",
    price: TRIET_LONG_PRICING["Cả Tay"].oneYear.price,
    salePrice: TRIET_LONG_PRICING["Cả Tay"].oneYear.salePrice,
    sold: 156,
    hot: false,
    rating: 4.9,
    reviewCount: 54,
    image: getTrietImg("cang_tay"),
    images: [getTrietImg("cang_tay"), getTrietImg("canh_tay")],
  },

  // ========== TRIỆT LƯNG ==========
  {
    id: "triet-lung",
    slug: "triet-long-lung",
    title: "Triệt lông lưng",
    category: "triet-long",
    group: "triet-lung",
    area: "Lưng",
    shortDesc: "Triệt lông lưng nam/nữ bằng công nghệ diode laser.",
    desc: "Triệt lông lưng bằng công nghệ diode laser từ Hàn Quốc, phù hợp cho cả nam và nữ. Giúp da lưng mịn màng, thoải mái hơn.",
    benefits: ["Triệt toàn bộ lưng", "Da mịn màng", "Thoải mái hơn"],
    suitableFor: ["Nam", "Nữ"],
    process: ["Thăm khám da", "Làm sạch vùng lưng", "Triệt laser", "Dưỡng da"],
    notes: ["Cạo lông trước 1 ngày"],
    faq: [],
    duration: "40-50 phút",
    sessions: "8-10 buổi",
    warrantyOptions: createWarrantyOptionsByArea("Lưng"),
    defaultWarranty: "1-nam",
    price: TRIET_LONG_PRICING["Lưng"].oneYear.price,
    salePrice: TRIET_LONG_PRICING["Lưng"].oneYear.salePrice,
    sold: 67,
    hot: false,
    rating: 4.8,
    reviewCount: 23,
    image: getTrietImg("triet_lung_tren"),
    images: [getTrietImg("triet_lung_tren"), getTrietImg("triet_lung_nu")],
  },

  // ========== TRIỆT BỤNG ==========
  {
    id: "triet-bung",
    slug: "triet-long-bung",
    title: "Triệt lông bụng",
    category: "triet-long",
    group: "triet-bung",
    area: "Bụng",
    shortDesc: "Triệt lông bụng công nghệ diode laser cao cấp.",
    desc: "Triệt lông bụng bằng công nghệ diode laser từ Hàn Quốc. Giúp vùng bụng mịn màng, đặc biệt phù hợp trước mùa hè hoặc trước khi đi biển.",
    benefits: ["Triệt toàn bộ bụng", "Da mịn màng", "Tự tin diện đồ"],
    suitableFor: ["Nam", "Nữ"],
    process: ["Thăm khám da", "Làm sạch vùng bụng", "Triệt laser", "Dưỡng da"],
    notes: ["Tránh phơi nắng 48h", "Không ăn no quá trước khi triệt"],
    faq: [],
    duration: "30-40 phút",
    sessions: "6-8 buổi",
    warrantyOptions: createWarrantyOptionsByArea("Bụng"),
    defaultWarranty: "1-nam",
    price: TRIET_LONG_PRICING["Bụng"].oneYear.price,
    salePrice: TRIET_LONG_PRICING["Bụng"].oneYear.salePrice,
    sold: 89,
    hot: false,
    rating: 4.8,
    reviewCount: 31,
    image: getTrietImg("triet_bung_nu"),
    images: [getTrietImg("triet_bung_nu"), getTrietImg("doc_bung")],
  },

  // ========== TRIỆT NGỰC ==========
  {
    id: "triet-nguc",
    slug: "triet-long-nguc",
    title: "Triệt lông ngực",
    category: "triet-long",
    group: "triet-nguc",
    area: "Ngực",
    shortDesc: "Triệt lông ngực nam công nghệ diode laser hiện đại.",
    desc: "Triệt lông ngực nam bằng công nghệ diode laser từ Hàn Quốc. Giúp vùng ngực nam tính, mịn màng, thoải mái hơn khi tập gym.",
    benefits: ["Triệt toàn vùng ngực", "Da mịn màng", "Nam tính hơn"],
    suitableFor: ["Nam"],
    process: ["Thăm khám da", "Làm sạch vùng ngực", "Triệt laser", "Dưỡng da"],
    notes: ["Tránh phơi nắng"],
    faq: [],
    duration: "30-35 phút",
    sessions: "6-8 buổi",
    warrantyOptions: createWarrantyOptionsByArea("Ngực"),
    defaultWarranty: "1-nam",
    price: TRIET_LONG_PRICING["Ngực"].oneYear.price,
    salePrice: TRIET_LONG_PRICING["Ngực"].oneYear.salePrice,
    sold: 76,
    hot: false,
    rating: 4.9,
    reviewCount: 28,
    image: getTrietImg("triet_nguc"),
    images: [getTrietImg("triet_nguc"), getTrietImg("nguc")],
  },

  // ========== TRIỆT RÂU / CẰM ==========
  {
    id: "triet-rau-nam",
    slug: "triet-long-rau-nam",
    title: "Triệt lông râu & cằm Nam",
    category: "triet-long",
    group: "triet-rau",
    area: "Râu & Cằm",
    shortDesc: "Triệt lông râu, cằm nam bằng công nghệ diode laser.",
    desc: "Triệt lông râu, cằm, quái non nam bằng công nghệ diode laser từ Hàn Quốc. Giúp gương mặt nam tính, sạch sẽ, không cần cạo râu mỗi ngày.",
    benefits: ["Triệt râu, cằm, quái non", "Gương mặt sạch sẽ", "Tiết kiệm thời gian"],
    suitableFor: ["Nam"],
    process: ["Thăm khám da mặt", "Làm sạch", "Triệt laser", "Dưỡng da"],
    notes: ["Không cạo trong 2-3 ngày trước khi triệt", "Tránh phơi nắng"],
    faq: [
      {
        question: "Triệt râu có ảnh hưởng đến da mặt không?",
        answer: "Không, công nghệ diode laser an toàn cho da mặt, còn giúp cải thiện texture da."
      }
    ],
    duration: "25-30 phút",
    sessions: "10-12 buổi",
    warrantyOptions: createWarrantyOptionsByArea("Râu & Cằm"),
    defaultWarranty: "1-nam",
    price: TRIET_LONG_PRICING["Râu & Cằm"].oneYear.price,
    salePrice: TRIET_LONG_PRICING["Râu & Cằm"].oneYear.salePrice,
    sold: 112,
    hot: false,
    rating: 4.9,
    reviewCount: 45,
    image: getTrietImg("triet_rau_quai_non_nam"),
    images: [getTrietImg("triet_rau_quai_non_nam"), getTrietImg("rau_nam"), getTrietImg("ca_mat_nam")],
  },

  // ========== TRIỆT MẶT ==========
  {
    id: "triet-mat-nu",
    slug: "triet-long-mat-nu",
    title: "Triệt lông mặt Nữ",
    category: "triet-long",
    group: "triet-mat",
    area: "Mặt",
    shortDesc: "Triệt lông mặt nữ công nghệ diode laser cao cấp.",
    desc: "Triệt lông mặt nữ bằng công nghệ diode laser từ Hàn Quốc. Giúp da mặt mịn màng, không còn lông tơ, trang điểm đẹp hơn.",
    benefits: ["Triệt lông mặt", "Da mịn màng", "Trang điểm đẹp hơn"],
    suitableFor: ["Nữ"],
    process: ["Thăm khám da mặt", "Làm sạch", "Triệt laser nhẹ nhàng", "Dưỡng da"],
    notes: ["Tránh phơi nắng 48h", "Không trang điểm sau triệt 24h"],
    faq: [],
    duration: "20-25 phút",
    sessions: "8-10 buổi",
    warrantyOptions: createWarrantyOptionsByArea("Mặt"),
    defaultWarranty: "1-nam",
    price: TRIET_LONG_PRICING["Mặt"].oneYear.price,
    salePrice: TRIET_LONG_PRICING["Mặt"].oneYear.salePrice,
    sold: 143,
    hot: false,
    rating: 4.8,
    reviewCount: 52,
    image: getTrietImg("ca_mat_nu"),
    images: [getTrietImg("ca_mat_nu"), getTrietImg("ria_nu")],
  },

  // ========== TRIỆT FULL BODY ==========
  // {
  //   id: "triet-full-body",
  //   slug: "triet-long-full-body",
  //   title: "Triệt lông Full Body",
  //   category: "triet-long",
  //   group: "triet-full",
  //   area: "Toàn thân",
  //   shortDesc: "Triệt lông toàn thân - tiết kiệm nhất, da mịn màng toàn diện.",
  //   desc: "Triệt lông toàn thân bằng công nghệ diode laser cao cấp từ Hàn Quốc. Bao gồm tất cả các vùng: nách, chân, tay, lưng, bụng, bikini. Tiết kiệm đến 40% so với triệt từng vùng.",
  //   benefits: ["Triệt toàn thân", "Tiết kiệm 40%", "Da mịn màng toàn diện", "Tự tin 100%"],
  //   suitableFor: ["Nam", "Nữ"],
  //   process: ["Tư vấn liệu trình", "Triệt laser toàn thân", "Dưỡng da", "Theo dõi kết quả"],
  //   notes: ["Nhiều buổi triệt", "Cần kiên nhẫn 6-12 tháng", "Tránh phơi nắng"],
  //   faq: [
  //     {
  //       question: "Triệt full body mất bao lâu?",
  //       answer: "Thông thường cần 10-15 buổi, mỗi buổi 60-90 phút, khoảng cách 3-4 tuần."
  //     },
  //     {
  //       question: "Triệt full body có đau không?",
  //       answer: "Cảm giác châm chích nhẹ, có thể ủ tê cho các vùng nhạy cảm."
  //     }
  //   ],
  //   duration: "60-90 phút",
  //   sessions: "10-15 buổi",
  //   warrantyOptions: createWarrantyOptionsByArea("Toàn thân"),
  //   defaultWarranty: "1-nam",
  //   price: TRIET_LONG_PRICING["Toàn thân"].oneYear.price,
  //   salePrice: TRIET_LONG_PRICING["Toàn thân"].oneYear.salePrice,
  //   sold: 45,
  //   hot: false,
  //   rating: 4.9,
  //   reviewCount: 18,
  //   image: getTrietImg("triet_nach_nu"),
  //   images: [
  //     getTrietImg("triet_nach_nu"),
  //     getTrietImg("ca_chan_nu"),
  //     getTrietImg("cang_tay"),
  //     getTrietImg("triet_bung_nu"),
  //     getTrietImg("triet_bi"),
  //   ],
  // },

  // ========== MASSAGE BODY ==========
  createBodyService({
    id: "massage-body-da-nong",
    slug: "massage-body-da-nong",
    title: "Massage body đá nóng",
    area: "Toàn thân",
    shortDesc: "Massage body đá nóng giúp thư giãn cơ bắp, giảm stress hiệu quả.",
    desc: "Dịch vụ massage body đá nóng sử dụng đá basalt nóng được đặt trên các điểm huyệt trên cơ thể. Nhiệt từ đá nóng giúp giãn nở mạch máu, tăng tuần hoàn máu, thư giãn cơ bắp và giảm căng thẳng. Trải nghiệm thư giãn tuyệt đối sau một ngày làm việc mệt mỏi.",
    benefits: [
      "Giảm đau nhức cơ bắp",
      "Thư giãn, giảm stress",
      "Tăng tuần hoàn máu",
      "Cải thiện giấc ngủ",
      "Detox da"
    ],
    process: [
      "Khách hàng thư giãn 5 phút",
      "Massage dầu thư giãn toàn thân",
      "Đặt đá nóng lên các huyệt đạo",
      "Massage nhẹ nhàng kết hợp đá nóng",
      "Thư giãn và nghỉ ngơi"
    ],
    notes: [
      "Nên nghỉ ngơi 30 phút sau massage",
      "Uống nhiều nước sau dịch vụ",
      "Không tắm nước nóng ngay sau massage"
    ],
    duration: "60 phút",
    imageName: "massage_body_da_nong"
  }),

  createBodyService({
    id: "massage-body-xong-hoi",
    slug: "massage-body-xong-hoi",
    title: "Massage body đá nóng xông hơi",
    area: "Toàn thân",
    shortDesc: "Massage kết hợp xông hơi thảo dược, thư giãn tối đa.",
    desc: "Dịch vụ massage body đá nóng kết hợp xông hơi thảo dược mang đến trải nghiệm thư giãn toàn diện. Đá nóng giúp giãn cơ, trong khi xông hơi thảo dược giúp lỗ chân lông giãn nở, đào thải độc tố, và làm mềm da. Phù hợp cho những ai muốn detox và phục hồi năng lượng.",
    benefits: [
      "Detox toàn thân",
      "Giãn nở lỗ chân lông",
      "Thư giãn cơ bắp sâu",
      "Làm mềm và sáng da",
      "Cân bằng năng lượng"
    ],
    process: [
      "Xông hơi thảo dược 15 phút",
      "Tắm rửa làm sạch da",
      "Massage body đá nóng 40 phút",
      "Nghỉ ngơi thư giãn"
    ],
    notes: [
      "Không xông hơi khi đói hoặc no",
      "Uống nhiều nước bù khoáng",
      "Nghỉ ngơi ít nhất 1 giờ sau dịch vụ"
    ],
    duration: "60 phút",
    imageName: "massage_body_xong_hoi",
    hot: true
  }),

  createBodyService({
    id: "massage-lung",
    slug: "massage-lung",
    title: "Massage lưng",
    area: "Lưng",
    shortDesc: "Massage lưng chuyên sâu giảm đau nhức vai gáy.",
    desc: "Dịch vụ massage lưng chuyên sâu tập trung vào vùng lưng và cột sống. Kỹ thuật massage bài bản giúp giải phóng các điểm căng cơ, cải thiện tư thế và giảm đau lưng mãn tính. Đặc biệt phù hợp cho dân văn phòng và người thường xuyên ngồi nhiều.",
    benefits: [
      "Giảm đau lưng và cột sống",
      "Giải phóng cơ vai gáy",
      "Cải thiện tư thế",
      "Tăng tuần hoàn vùng lưng",
      "Thư giãn thần kinh"
    ],
    process: [
      "Đánh giá tình trạng cơ lưng",
      "Xông nóng hoặc đắp khăn ấm",
      "Massage các cơ dọc sống lưng",
      "Day ấn huyệt vùng thắt lưng",
      "Vỗ nhẹ thư giãn"
    ],
    notes: [
      "Nên nằm sấp thoải mái trong quá trình massage",
      "Thông báo kỹ thuật viên nếu đau nhức",
      "Tránh ngồi lâu sau massage"
    ],
    duration: "45 phút",
    imageName: "massage_lung"
  }),

  createBodyService({
    id: "massage-chan",
    slug: "massage-chan",
    title: "Massage chân",
    area: "Chân",
    shortDesc: "Massage chân foot massage giúp thư giãn, cải thiện giấc ngủ.",
    desc: "Massage chân theo phương pháp truyền thống kết hợp bấm huyệt. Theo y học cổ truyền, bàn chân là nơi tập trung nhiều huyệt đạo liên quan đến các cơ quan trong cơ thể. Dịch vụ giúp cải thiện tuần hoàn máu chân, giảm phù nề và thư giãn tổng thể.",
    benefits: [
      "Cải thiện tuần hoàn máu chân",
      "Giảm phù nề, mỏi chân",
      "Kích thích huyệt đạo",
      "Cải thiện giấc ngủ",
      "Thư giãn toàn thân"
    ],
    process: [
      "Ngâm chân nước ấm thảo dược 10 phút",
      "Massage bàn chân và cổ chân",
      "Bấm huyệt dưới bàn chân",
      "Massage bắp chân",
      "Thư giãn và dưỡng da"
    ],
    notes: [
      "Nên massage chân định kỳ 1-2 lần/tuần",
      "Uống nhiều nước sau massage",
      "Phù hợp cho người đứng nhiều, đi giày cao gót"
    ],
    duration: "45 phút",
    imageName: "massage_chan"
  }),

  createBodyService({
    id: "massage-co-vai-gay",
    slug: "massage-co-vai-gay",
    title: "Massage cổ vai gáy",
    area: "Cổ vai gáy",
    shortDesc: "Massage cổ vai gáy chuyên sâu giảm đau đầu, mỏi vai.",
    desc: "Massage cổ vai gáy chuyên biệt dành cho vùng cổ - vai - gáy - đầu. Đây là vùng chịu áp lực lớn từ công việc, căng thẳng và tư thế sai. Dịch vụ giúp giải phóng các cơ bị căng cứng, giảm đau đầu, chóng mặt và cải thiện tuần hoàn máu não.",
    benefits: [
      "Giảm đau đầu, chóng mặt",
      "Giải phóng cơ cổ vai gáy",
      "Cải thiện tuần hoàn máu não",
      "Giảm căng thẳng mắt",
      "Cải thiện giấc ngủ"
    ],
    process: [
      "Đánh giá tình trạng cơ vùng cổ vai",
      "Massage dầu thư giãn vùng gáy",
      "Day ấn các điểm trigger",
      "Bấm huyệt thái dương, cổ",
      "Vỗ nhẹ thư giãn"
    ],
    notes: [
      "Thông báo nếu có vấn đề về cột sống cổ",
      "Tránh xoay cổ đột ngột sau massage",
      "Nghỉ ngơi 15-20 phút sau dịch vụ"
    ],
    duration: "45 phút",
    imageName: "massage_co_vai_gay"
  }),

  createBodyService({
    id: "tay-te-bao-chet",
    slug: "tay-te-bao-chet-body",
    title: "Tẩy tế bào chết body + đắp dưỡng",
    area: "Toàn thân",
    shortDesc: "Tẩy tế bào chết toàn thân kết hợp đắp mặt nạ dưỡng da.",
    desc: "Dịch vụ tẩy tế bào chết toàn thân sử dụng sản phẩm scrub tự nhiên kết hợp đắp dưỡng mask toàn thân. Giúp loại bỏ lớp tế bào chết trên bề mặt da, thúc đẩy tái tạo da mới, đồng thời cung cấp dưỡng chất giúp da mềm mại, sáng mịn. Da sau tẩy tế bào chết sẽ hấp thụ dưỡng chất tốt hơn.",
    benefits: [
      "Loại bỏ tế bào chết",
      "Thúc đẩy tái tạo da",
      "Dưỡng ẩm sâu",
      "Da mềm mại, sáng mịn",
      "Cải thiện kết cấu da"
    ],
    process: [
      "Tắm rửa làm sạch da",
      "Bôi scrub tẩy tế bào chết toàn thân",
      "Massage nhẹ nhàng theo vòng tròn",
      "Tắm rửa sạch scrub",
      "Đắp mask dưỡng toàn thân 20 phút",
      "Thư giãn và thấm khô"
    ],
    notes: [
      "Nên thực hiện 1-2 lần/tuần",
      "Tránh tẩy tế bào chết trên da bị tổn thương",
      "Thoa kem dưỡng sau tẩy tế bào chết",
      "Tránh phơi nắng sau dịch vụ"
    ],
    duration: "60 phút",
    imageName: "tay_te_bao_chet_body"
  }),

  createBodyService({
    id: "tam-trang-nha-nang",
    slug: "tam-trang-nha-nang",
    title: "Tắm trắng nhả nắng",
    area: "Toàn thân",
    shortDesc: "Tắm trắng body giúp da sáng mịn, đều màu sau mùa hè.",
    desc: "Dịch vụ tắm trắng nhả nắng sử dụng các sản phẩm kem hoặc gel chứa hoạt chất làm trắng kết hợp xông hơi thảo dược. Giúp phục hồi làn da sau tổn thương do nắng, giảm thâm nám, mang lại làn da trắng sáng đều màu. Phù hợp sau mùa hè hoặc trước các dịp đặc biệt.",
    benefits: [
      "Phục hồi da sau tổn thương nắng",
      "Giảm thâm nám, đen sạm",
      "Da trắng sáng đều màu",
      "Cấp ẩm sâu cho da",
      "Làn da khỏe mạnh"
    ],
    process: [
      "Tắm rửa làm sạch da",
      "Apply kem tắm trắng toàn thân",
      "Xông hơi thảo dược 20 phút",
      "Ủ kem tắm trắng 30 phút",
      "Tắm sạch và thoa kem dưỡng"
    ],
    notes: [
      "Cần thực hiện từ 3-5 buổi để thấy hiệu quả",
      "Tránh phơi nắng sau tắm trắng",
      "Thoa kem chống nắng hàng ngày",
      "Uống nhiều nước, ăn nhiều trái cây"
    ],
    duration: "90 phút",
    imageName: "tam_trang_nha_nang"
  }),

  // ========== CHĂM SÓC DA MẶT ==========
  createFacialService({
    id: "cham-soc-da-co-ban",
    slug: "cham-soc-da-co-ban",
    title: "Chăm sóc da cơ bản",
    area: "Mặt",
    shortDesc: "Chăm sóc da mặt cơ bản giúp làm sạch và cấp ẩm cho da.",
    desc: "Dịch vụ chăm sóc da cơ bản bao gồm các bước làm sạch, tẩy tế bào chết, xông hơi và đắp mặt nạ. Giúp loại bỏ bụi bẩn, bã nhờn tích tụ trên bề mặt da, đồng thời cấp ẩm và nuôi dưỡng làn da từ sâu bên trong. Phù hợp cho mọi loại da, đặc biệt là da thường và da hỗn hợp.",
    benefits: [
      "Làm sạch sâu lỗ chân lông",
      "Cấp ẩm cho da",
      "Tẩy tế bào chết nhẹ nhàng",
      "Da mềm mại, sáng khỏe",
      "Thư giãn toàn thân"
    ],
    process: [
      "Tẩy trang và làm sạch da mặt",
      "Tẩy tế bào chết bằng scrub nhẹ",
      "Xông hơi mở lỗ chân lông",
      "Rút chân lông (nếu cần)",
      "Đắp mặt nạ dưỡng 15 phút",
      "Thoa kem dưỡng và chống nắng"
    ],
    notes: [
      "Nên thực hiện định kỳ 1 lần/tuần",
      "Tránh xông hơi khi da đang viêm",
      "Thoa kem chống nắng sau chăm sóc da"
    ],
    duration: "45 phút",
    imageName: "cham_soc_da_co_ban"
  }),

  createFacialService({
    id: "cham-soc-da-chuyen-sau",
    slug: "cham-soc-da-chuyen-sau",
    title: "Chăm sóc da chuyên sâu",
    area: "Mặt",
    shortDesc: "Chăm sóc da chuyên sâu với serum đặc trị và massage face.",
    desc: "Dịch vụ chăm sóc da chuyên sâu sử dụng các sản phẩm cao cấp chứa serum đặc trị được chiết xuất từ thiên nhiên. Kết hợp massage face giúp kích thích sản sinh collagen, tăng độ đàn hồi và cải thiện các vấn đề về da như lão hóa, xỉn màu. Mang lại làn da trẻ trung, rạng rỡ.",
    benefits: [
      "Cấp serum đặc trị thẩm thấu sâu",
      "Kích thích collagen tự nhiên",
      "Cải thiện nếp nhăn",
      "Da căng bóng, rạng rỡ",
      "Nâng cơ mặt tự nhiên"
    ],
    process: [
      "Double cleansing làm sạch sâu",
      "Tẩy tế bào chết enzyme",
      "Xông hơi và rút chân lông",
      "Apply serum đặc trị",
      "Massage face nâng cơ 15 phút",
      "Đắp mask collagen phục hồi",
      "Thoa kem dưỡng và chống nắng"
    ],
    notes: [
      "Nên thực hiện 1-2 lần/tuần",
      "Kết hợp serum tại nhà để tăng hiệu quả",
      "Tránh thoa serum chứa retinol vào ban ngày"
    ],
    duration: "60 phút",
    imageName: "cham_soc_da_chuyen_sau"
  }),

  createFacialService({
    id: "cham-soc-da-mun",
    slug: "cham-soc-da-mun",
    title: "Chăm sóc da mụn chuyên sâu",
    area: "Mặt",
    shortDesc: "Điều trị và chăm sóc da mụn chuyên biệt, ngăn ngừa tái phát.",
    desc: "Dịch vụ chăm sóc da mụn chuyên sâu được thiết kế riêng cho làn da đang có mụn hoặc có xu hướng mụn. Sử dụng các sản phẩm chuyên biệt chứa BHA, AHA giúp kiểm soát bã nhờn, kháng viêm và ngăn ngừa mụn hình thành. Đồng thời phục hồi và cân bằng độ pH cho da.",
    benefits: [
      "Kiểm soát bã nhờn",
      "Kháng viêm, giảm sưng mụn",
      "Ngăn ngừa mụn tái phát",
      "Thu nhỏ lỗ chân lông",
      "Phục hồi da sau mụn"
    ],
    process: [
      "Làm sạch da chuyên sâu",
      "Tẩy tế bào chết bằng BHA/AHA",
      "Xông hơi mở lỗ chân lông",
      "Rút mụn vô trùng (nếu cần)",
      "Đắp mặt nạ kháng viêm",
      "Apply serum trị mụn",
      "Thoa kem dưỡng kiểm soát dầu"
    ],
    notes: [
      "Không tự ý nặn mụn tại nhà",
      "Tránh sử dụng sản phẩm chứa cồn",
      "Thoa kem chống nắng không nhờn dầu",
      "Rửa mặt 2 lần/ngày"
    ],
    hot: true,
    duration: "60 phút",
    imageName: "cham_soc_da_mun"
  }),

  createFacialService({
    id: "cay-te-bao-goc",
    slug: "cay-te-bao-goc",
    title: "Cấy tế bào gốc",
    area: "Mặt",
    shortDesc: "Cấy tế bào gốc giúp tái tạo da, trẻ hóa làn da.",
    desc: "Công nghệ cấy tế bào gốc tiên tiến giúp đưa các dưỡng chất quý hiếm thẩm thấu sâu vào tầng hạ bì, kích thích quá trình tái tạo tế bào mới. Da được phục hồi từ bên trong, giảm nếp nhăn, cải thiện độ đàn hồi và mang lại làn da trẻ trung, căng mịn tự nhiên.",
    benefits: [
      "Tái tạo tế bào da từ sâu",
      "Kích thích sản sinh collagen",
      "Giảm nếp nhăn sâu",
      "Cải thiện độ đàn hồi",
      "Da căng mịn, trẻ trung"
    ],
    process: [
      "Làm sạch và tẩy tế bào chết",
      "Apply tinh chất tế bào gốc",
      "Phi kim hoặc lăn kim đưa dưỡng chất",
      "Đắp mask phục hồi tế bào gốc",
      "Thoa serum và kem dưỡng",
      "Thoa kem chống nắng"
    ],
    notes: [
      "Da có thể hơi ửng đỏ sau phi kim, tự hết sau 1-2 ngày",
      "Tránh trang điểm 24 giờ sau cấy",
      "Thoa kem tái tạo da theo hướng dẫn",
      "Tránh phơi nắng ít nhất 3 ngày"
    ],
    duration: "75 phút",
    imageName: "cay_te_bao_goc"
  }),

  createFacialService({
    id: "nang-co-xoa-nhan",
    slug: "nang-co-xoa-nhan",
    title: "Nâng cơ xóa nhăn",
    area: "Mặt",
    shortDesc: "Nâng cơ mặt RF giúp xóa nếp nhăn, căng da tức thì.",
    desc: "Công nghệ nâng cơ RF (Radio Frequency) sử dụng sóng tần số vô tuyến tác động sâu vào lớp cơ dưới da, kích thích co rút collagen và elastin. Kết quả là làn da được nâng lên, các nếp nhăn được giảm rõ rệt ngay sau buổi đầu tiên. Da săn chắc, trẻ trung mà không cần phẫu thuật.",
    benefits: [
      "Nâng cơ mặt không phẫu thuật",
      "Xóa nếp nhăn tức thì",
      "Căng da, săn chắc",
      "Kích thích collagen mới",
      "Da trẻ trung rạng rỡ"
    ],
    process: [
      "Làm sạch và đánh giá tình trạng da",
      "Apply gel dẫn truyền RF",
      "Đầu RF massage toàn mặt 20 phút",
      "Massage nâng cơ thủ công",
      "Đắp mask collagen săn chắc",
      "Thoa kem dưỡng và chống nắng"
    ],
    notes: [
      "Nên thực hiện 6-10 buổi để kết quả bền vững",
      "Da có thể hơi nóng sau RF, tự hết sau 30 phút",
      "Uống nhiều nước sau liệu trình",
      "Tránh xông hơi và tắm nước nóng 24 giờ"
    ],
    duration: "75 phút",
    imageName: "nang_co_xoa_nhan"
  }),

  createFacialService({
    id: "carbon-toning",
    slug: "carbon-toning",
    title: "Trẻ hóa da Carbon Toning",
    area: "Mặt",
    shortDesc: "Carbon Toning laser giúp trẻ hóa da, se khít lỗ chân lông.",
    desc: "Công nghệ Carbon Toning sử dụng gel carbon đặc biệt thẩm thấu vào lỗ chân lông, kết hợp laser Nd:YAG phát xung ngắn phá vỡ carbon và kích thích sản sinh collagen. Kết quả là da được thanh lọc sâu, se khít lỗ chân lông, giảm nám tàn nhang và trẻ hóa toàn diện. Phù hợp cho mọi loại da, đặc biệt da xỉn màu, nám nhẹ.",
    benefits: [
      "Thanh lọc da sâu",
      "Se khít lỗ chân lông",
      "Giảm nám, tàn nhang",
      "Đều màu da",
      "Trẻ hóa toàn diện"
    ],
    process: [
      "Làm sạch da mặt",
      "Apply gel carbon đặc biệt",
      "Đợi carbon thẩm thấu 15 phút",
      "Laser Nd:YAG toàn mặt",
      "Đắp mask làm dịu",
      "Thoa serum và kem chống nắng"
    ],
    notes: [
      "Da có thể hơi ửng đỏ sau laser, tự hết sau 1-2 giờ",
      "Tránh phơi nắng 1 tuần sau laser",
      "Thoa kem chống nắng SPF 50+ hàng ngày",
      "Nên thực hiện 3-5 buổi cách 2-4 tuần"
    ],
    duration: "75 phút",
    imageName: "carbon_toning",
    hot: true
  }),

  createFacialService({
    id: "christina-recovery",
    slug: "christina-recovery",
    title: "Cấp ẩm phục hồi Christina",
    area: "Mặt",
    shortDesc: "Liệu pháp Christina giúp phục hồi da hư tổn, cấp ẩm sâu.",
    desc: "Bộ sản phẩm Christina Collagen của Israel nổi tiếng thế giới với khả năng phục hồi và trẻ hóa da vượt trội. Liệu pháp này sử dụng collagen nguyên chất kết hợp các dưỡng chất quý hiếm, giúp phục hồi làn da hư tổn, cấp ẩm sâu và chống lại quá trình lão hóa. Đặc biệt hiệu quả với da khô, da lão hóa và da sau treatment.",
    benefits: [
      "Phục hồi da hư tổn",
      "Cấp ẩm sâu, căng mịn",
      "Chống lão hóa hiệu quả",
      "Tăng độ đàn hồi da",
      "Da khỏe mạnh, rạng rỡ"
    ],
    process: [
      "Double cleansing làm sạch sâu",
      "Tẩy tế bào chết enzyme nhẹ",
      "Apply essence Christina",
      "Đắp mask collagen phục hồi 30 phút",
      "Massage mặt với tinh chất Christina",
      "Thoa kem dưỡng và chống nắng"
    ],
    notes: [
      "Phù hợp cho mọi loại da, đặc biệt da khô và lão hóa",
      "Nên thực hiện định kỳ 1 lần/tuần",
      "Kết hợp sản phẩm Christina tại nhà",
      "Tránh phơi nắng sau liệu trình"
    ],
    duration: "90 phút",
    imageName: "christina_recovery",
    hot: true
  }),

  createFacialService({
    id: "deep-clean-skin",
    slug: "deep-clean-skin",
    title: "Deep Clean Skin",
    area: "Mặt",
    shortDesc: "Làm sạch sâu tối đa với công nghệ hiện đại, se khít lỗ chân lông.",
    desc: "Deep Clean Skin là liệu trình làm sạch sâu toàn diện sử dụng kết hợp nhiều công nghệ tiên tiến: xông hơi nhiệt, rút mụn vô trùng bằng tay, ánh sáng LED kháng viêm và mask thanh lọc. Giúp loại bỏ hoàn toàn bụi bẩn, bã nhờn, mụn đầu đen trong lỗ chân lông, đồng thời se khít và phục hồi da sau làm sạch.",
    benefits: [
      "Làm sạch sâu tối đa",
      "Loại bỏ mụn đầu đen",
      "Se khít lỗ chân lông",
      "Kháng viêm, làm dịu da",
      "Da sạch khoẻ, thông thoáng"
    ],
    process: [
      "Làm sạch bề mặt da",
      "Xông hơi nhiệt mở lỗ chân lông",
      "Rút mụn đầu đen, mụn cám vô trùng",
      "Chiếu ánh sáng LED kháng viêm",
      "Đắp mask thanh lọc, se khít lỗ chân lông",
      "Thoa serum cấp ẩm và kem dưỡng"
    ],
    notes: [
      "Nên thực hiện 2-4 tuần/lần tùy loại da",
      "Không tự ý nặn mụn tại nhà sau khi rút",
      "Tránh trang điểm 24 giờ sau liệu trình",
      "Thoa kem dưỡng kiểm soát dầu và chống nắng"
    ],
    duration: "90 phút",
    imageName: "deep_clean_skin",
    hot: true
  }),

  // ========== ĐIỀU TRỊ DA CHUYÊN SÂU ==========
  createAdvancedSkinService({
    id: "chemical-peel-mandelic",
    slug: "chemical-peel-mandelic",
    title: "Chemical Peel Mandelic",
    shortDesc: "Peel acid từ hạt hạnh nhân, nhẹ nhàng phù hợp mọi loại da.",
    desc: "Chemical Peel Mandelic sử dụng axit mandelic chiết xuất từ hạt hạnh nhân đắng, là một loại AHA (Alpha Hydroxy Acid) rất dịu nhẹ. Phù hợp cho mọi loại da, kể cả da nhạy cảm. Giúp tẩy tế bào chết, cải thiện kết cấu da, giảm nám nhẹ và mang lại làn da sáng mịn, đều màu sau vài lần thực hiện.",
    benefits: [
      "Tẩy tế bào chết nhẹ nhàng",
      "Cải thiện kết cấu da",
      "Giảm thâm nám nhẹ",
      "Se khít lỗ chân lông",
      "Da sáng mịn, đều màu"
    ],
    process: [
      "Làm sạch da mặt",
      "Apply dung dịch peel mandelic",
      "Để hoạt chất thẩm thấu 5-10 phút",
      "Trung hòa axit bằng dung dịch chuyên dụng",
      "Đắp mask làm dịu",
      "Thoa serum và kem dưỡng"
    ],
    notes: [
      "Da có thể bong tróc nhẹ trong 3-5 ngày sau peel",
      "Bắt buộc thoa kem chống nắng SPF 30+",
      "Tránh các sản phẩm chứa retinol 3 ngày trước và sau peel",
      "Nên thực hiện 4-6 buổi cách 2-3 tuần"
    ],
    duration: "60 phút",
    imageName: "chemical_peel_mandelic",
    hot: true
  }),

  createAdvancedSkinService({
    id: "detox-dr-belter",
    slug: "detox-dr-belter",
    title: "Detox thanh lọc da DR.BELTER",
    shortDesc: "Thanh lọc da chuyên sâu với bộ sản phẩm cao cấp DR.BELTER Đức.",
    desc: "Liệu trình detox thanh lọc da sử dụng bộ sản phẩm DR.BELTER cao cấp của Đức, nổi tiếng với công nghệ thanh lọc và phục hồi da chuyên nghiệp. Giúp loại bỏ độc tố tích tụ, cân bằng độ pH, cải thiện làn da xỉn màu, mệt mỏi. Da được hồi sinh, sáng khỏe và tươi trẻ hơn.",
    benefits: [
      "Thanh lọc độc tố trong da",
      "Cân bằng độ pH da",
      "Phục hồi da xỉn màu, mệt mỏi",
      "Cấp ẩm sâu",
      "Da sáng khỏe, tươi trẻ"
    ],
    process: [
      "Làm sạch da sâu với sữa rửa mặt DR.BELTER",
      "Tẩy tế bào chết enzyme",
      "Apply serum detox đặc trị",
      "Massage mặt với tinh chất DR.BELTER",
      "Đắp mask thanh lọc 20 phút",
      "Thoa kem dưỡng phục hồi"
    ],
    notes: [
      "Phù hợp cho mọi loại da",
      "Nên thực hiện định kỳ 1 lần/tuần",
      "Kết hợp sản phẩm DR.BELTER tại nhà",
      "Tránh phơi nắng sau liệu trình"
    ],
    duration: "60 phút",
    imageName: "detox_dr_belter",
    hot: true
  }),

  createAdvancedSkinService({
    id: "peel-a-tre-hoa",
    slug: "peel-a-tre-hoa",
    title: "Peel A trẻ hóa da",
    shortDesc: "Peel vitamin A giúp trẻ hóa da, xóa nếp nhăn và sáng da.",
    desc: "Peel A sử dụng dẫn xuất vitamin A (retinoid) giúp tăng tốc quá trình tái tạo tế bào da, kích thích sản sinh collagen và elastin. Kết quả là làn da được trẻ hóa rõ rệt: giảm nếp nhăn, cải thiện độ đàn hồi, giảm nám và tăng độ sáng tự nhiên. Liệu trình chống lão hóa hiệu quả cao.",
    benefits: [
      "Trẻ hóa da toàn diện",
      "Giảm nếp nhăn sâu",
      "Kích thích collagen",
      "Giảm nám, tăng độ sáng",
      "Cải thiện độ đàn hồi"
    ],
    process: [
      "Làm sạch da mặt",
      "Apply dung dịch Peel A nồng độ phù hợp",
      "Để hoạt chất thẩm thấu 8-12 phút",
      "Trung hòa và rửa sạch",
      "Đắp mask collagen phục hồi",
      "Thoa serum và kem chống nắng"
    ],
    notes: [
      "Da có thể bong tróc và ửng đỏ nhẹ trong 3-7 ngày",
      "Bắt buộc thoa kem chống nắng SPF 50+",
      "Không sử dụng retinol khác trong 1 tuần",
      "Nên thực hiện 4-6 buổi cách 3-4 tuần"
    ],
    duration: "60 phút",
    imageName: "peel_a_tre_hoa"
  }),

  createAdvancedSkinService({
    id: "vi-tao-canxi",
    slug: "vi-tao-canxi",
    title: "Vi tảo Canxi",
    shortDesc: "Cấy canxi giúp tái tạo da, phục hồi hư tổn và trắng sáng.",
    desc: "Vi tảo Canxi là liệu trình cấy dưỡng chất vi tảo biển giàu khoáng chất và canxi, giúp phục hồi làn da bị tổn thương, tái tạo cấu trúc da từ sâu bên trong. Canxi là khoáng chất thiết yếu giúp duy trì độ săn chắc và khỏe mạnh của da. Liệu trình mang lại làn da trắng sáng, mịn màng và đầy sức sống.",
    benefits: [
      "Phục hồi da hư tổn",
      "Tái tạo cấu trúc da",
      "Cấp khoáng chất thiết yếu",
      "Da trắng sáng, mịn màng",
      "Tăng cường hàng rào bảo vệ da"
    ],
    process: [
      "Làm sạch và tẩy tế bào chết",
      "Apply tinh chất vi tảo canxi",
      "Phi kim hoặc lăn kim nhẹ đưa dưỡng chất",
      "Đắp mask phục hồi vi tảo",
      "Thoa serum và kem dưỡng"
    ],
    notes: [
      "Da có thể hơi ửng đỏ sau phi kim, tự hết sau 1-2 ngày",
      "Tránh trang điểm 24 giờ sau cấy",
      "Thoa kem tái tạo da theo hướng dẫn",
      "Nên thực hiện 4-6 buổi để kết quả tối ưu"
    ],
    duration: "75 phút",
    imageName: "vi_tao_canxi"
  }),

  createAdvancedSkinService({
    id: "peel-recovery",
    slug: "peel-recovery",
    title: "Peel Recovery",
    shortDesc: "Peel phục hồi da hư tổn, cải thiện làn da sau treatment.",
    desc: "Peel Recovery là liệu trình peel đặc biệt được thiết kế để phục hồi và tái tạo làn da bị hư tổn do các tác động từ môi trường, treatment không đúng cách hoặc lạm dụng mỹ phẩm. Sử dụng các hoạt chất làm dịu và phục hồi như centella asiatica, niacinamide giúp da khỏe mạnh trở lại.",
    benefits: [
      "Phục hồi da hư tổn",
      "Làm dịu da nhạy cảm",
      "Củng cố hàng rào bảo vệ da",
      "Cải thiện tình trạng kích ứng",
      "Da khỏe mạnh, cân bằng"
    ],
    process: [
      "Đánh giá tình trạng da",
      "Làm sạch nhẹ nhàng",
      "Apply dung dịch peel phục hồi",
      "Để hoạt chất thẩm thấu 5-10 phút",
      "Trung hòa và đắp mask làm dịu",
      "Thoa serum phục hồi và kem dưỡng"
    ],
    notes: [
      "Phù hợp cho da nhạy cảm và da hư tổn",
      "Có thể thực hiện peel nhẹ hơn so với peel thông thường",
      "Tránh các sản phẩm có tính axit mạnh",
      "Nên thực hiện 3-4 buổi cách 2 tuần"
    ],
    duration: "75 phút",
    imageName: "peel_recovery"
  }),

  createAdvancedSkinService({
    id: "mesotech-cang-bong",
    slug: "mesotech-cang-bong",
    title: "Mesotech căng bóng",
    shortDesc: "Mesotherapy giúp căng bóng da, giảm nếp nhăn và phục hồi collagen.",
    desc: "Mesotech là kỹ thuật đưa dưỡng chất trực tiếp vào lớp hạ bì thông qua phi kim (mesotherapy). Sử dụng cocktail dưỡng chất giàu hyaluronic acid, vitamin, peptide và growth factor giúp cấp ẩm sâu, kích thích collagen và elastin. Da được nâng lên, căng bóng và trẻ trung rõ rệt sau lần đầu tiên.",
    benefits: [
      "Cấp ẩm sâu tầng hạ bì",
      "Kích thích collagen tự nhiên",
      "Căng bóng, nâng cơ",
      "Giảm nếp nhăn",
      "Da trẻ trung, rạng rỡ"
    ],
    process: [
      "Làm sạch và gây tê bề mặt",
      "Apply cocktail mesotech đặc trị",
      "Phi kim đưa dưỡng chất vào da",
      "Đắp mask phục hồi",
      "Thoa serum và kem dưỡng"
    ],
    notes: [
      "Da có thể hơi đỏ và khô sau phi kim, tự hết sau 1-2 ngày",
      "Tránh trang điểm 24 giờ sau mesotherapy",
      "Thoa kem tái tạo da và chống nắng nghiêm ngặt",
      "Nên thực hiện 4-6 buổi cách 1-2 tuần"
    ],
    duration: "75 phút",
    imageName: "mesotech_cang_bong",
    hot: true
  }),

  createAdvancedSkinService({
    id: "peel-max-white",
    slug: "peel-max-white",
    title: "Peel Max White",
    shortDesc: "Peel trắng sáng tối đa với công nghệ làm trắng tiên tiến.",
    desc: "Peel Max White là liệu trình peel cao cấp sử dụng kết hợp nhiều hoạt chất làm trắng mạnh mẽ: alpha arbutin, kojic acid, vitamin C đậm đặc. Giúp giảm melanin tối đa, xóa nám, thâm và đều màu da hiệu quả. Phù hợp cho những ai muốn cải thiện làn da xỉn màu, không đều màu và muốn da trắng sáng rõ rệt.",
    benefits: [
      "Làm trắng da hiệu quả",
      "Xóa nám, thâm mạnh mẽ",
      "Đều màu da",
      "Giảm tăng sắc tố",
      "Da trắng sáng rạng rỡ"
    ],
    process: [
      "Làm sạch da mặt",
      "Apply dung dịch peel Max White",
      "Để hoạt chất thẩm thấu 10-15 phút",
      "Trung hòa và rửa sạch",
      "Đắp mask làm trắng phục hồi",
      "Thoa serum vitamin C và kem dưỡng"
    ],
    notes: [
      "Da có thể bong tróc và ửng đỏ trong 5-7 ngày",
      "Bắt buộc thoa kem chống nắng SPF 50+ suốt liệu trình",
      "Tránh phơi nắng hoàn toàn trong quá trình peel",
      "Nên thực hiện 4-6 buổi cách 3-4 tuần"
    ],
    duration: "90 phút",
    imageName: "peel_max_white"
  }),

  createAdvancedSkinService({
    id: "larimedical-peel",
    slug: "larimedical-peel",
    title: "Larimedical Peel",
    shortDesc: "Peel y khoa cao cấp từ thương hiệu Larimedical của Mỹ.",
    desc: "Larimedical Peel sử dụng các sản phẩm peel chuyên nghiệp của thương hiệu Larimedical từ Mỹ, được nghiên cứu và kiểm định lâm sàng. Cung cấp các giải pháp peel từ nhẹ đến trung bình, phù hợp với nhiều vấn đề da: lão hóa, nám, mụn, xỉn màu. An toàn, hiệu quả và được các chuyên gia da liễu tin dùng.",
    benefits: [
      "Điều trị chuyên sâu nhiều vấn đề da",
      "An toàn, được kiểm định lâm sàng",
      "Cải thiện kết cấu da",
      "Giảm nếp nhăn và nám",
      "Da khỏe mạnh, rạng rỡ"
    ],
    process: [
      "Phân tích da và chọn nồng độ peel phù hợp",
      "Làm sạch da",
      "Apply dung dịch peel Larimedical",
      "Theo dõi phản ứng da và trung hòa khi cần",
      "Đắp mask phục hồi",
      "Thoa kem dưỡng và chống nắng"
    ],
    notes: [
      "Nồng độ peel được cá nhân hóa theo tình trạng da",
      "Da có thể bong tróc nhẹ trong 3-5 ngày",
      "Thoa kem chống nắng và kem dưỡng theo hướng dẫn",
      "Nên thực hiện 4-6 buổi cách 2-4 tuần"
    ],
    duration: "90 phút",
    imageName: "larimedical_peel"
  }),

  createAdvancedSkinService({
    id: "multy-peel",
    slug: "multy-peel",
    title: "Multy Peel",
    shortDesc: "Peel đa tầng kết hợp nhiều hoạt chất cho hiệu quả tối ưu.",
    desc: "Multy Peel là liệu trình peel tiên tiến kết hợp nhiều loại axit và hoạt chất đặc trị trong cùng một lần thực hiện: AHA, BHA, PHA và các dưỡng chất bổ sung. Mỗi hoạt chất đảm nhận một chức năng riêng, tạo nên hiệu quả điều trị toàn diện: tái tạo da, trẻ hóa, làm trắng và cải thiện kết cấu da đồng thời.",
    benefits: [
      "Điều trị đa vấn đề da",
      "Tái tạo da toàn diện",
      "Trẻ hóa và làm trắng",
      "Cải thiện kết cấu da",
      "Hiệu quả tối ưu trong 1 lần"
    ],
    process: [
      "Làm sạch da sâu",
      "Apply dung dịch peel đa tầng",
      "Lớp 1: AHA tẩy tế bào chết",
      "Lớp 2: BHA làm sạch lỗ chân lông",
      "Lớp 3: Dưỡng chất phục hồi",
      "Trung hòa và đắp mask",
      "Thoa serum và kem dưỡng"
    ],
    notes: [
      "Da sẽ bong tróc vừa phải trong 5-7 ngày",
      "Đây là peel chuyên sâu, cần chăm sóc da cẩn thận sau peel",
      "Bắt buộc thoa kem chống nắng SPF 50+",
      "Nên thực hiện 3-4 buổi cách 3-4 tuần"
    ],
    duration: "90 phút",
    imageName: "multy_peel",
    hot: true
  }),
];
