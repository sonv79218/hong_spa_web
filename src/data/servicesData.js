import {
  Sparkles,
  Droplets,
  Heart,
  Scissors,
  Flame,
  Wind,
  Eye,
} from "lucide-react";

import img4 from "../assets/images/space/Screenshot_45.png";

export const services = [
  {
    id: "cham-soc-da-mat",
    title: "Chăm sóc da mặt",
    desc: "Làm sạch sâu, cấp ẩm và phục hồi làn da khỏe mạnh.",
    icon: Sparkles,
    image: img4,
    price: "299.000đ",
    duration: "60 phút",
    suitable: "Mọi loại da",
    process: [
      "Soi da và tư vấn",
      "Làm sạch da",
      "Tẩy tế bào chết",
      "Đắp mask phục hồi",
      "Dưỡng và kết thúc",
    ],
    benefits: [
      "Da sạch sâu và thông thoáng",
      "Cấp ẩm và phục hồi",
      "Thư giãn tinh thần",
      "Cải thiện độ sáng và đàn hồi da",
    ],
  },
  {
    id: "chemical-peel",
    title: "Chemical Peel",
    desc: "Tái tạo da, cải thiện thâm nám và bề mặt da.",
    icon: Droplets,
    image: img4,
    price: "499.000đ",
    duration: "75 phút",
    suitable: "Da thâm, da xỉn màu",
    process: [
      "Thăm khám",
      "Làm sạch",
      "Peel da",
      "Phục hồi",
      "Chống nắng",
    ],
    benefits: [
      "Sáng da",
      "Giảm thâm",
      "Mịn bề mặt da",
    ],
  },
  {
    id: "massage-body",
    title: "Massage Body",
    desc: "Thư giãn toàn thân, giảm căng thẳng và đau nhức.",
    icon: Heart,
    image: img4,
    price: "399.000đ",
    duration: "90 phút",
    suitable: "Người stress, đau nhức",
    process: [
      "Xông thư giãn",
      "Massage body",
      "Bấm huyệt",
      "Thả lỏng",
    ],
    benefits: [
      "Giảm đau mỏi",
      "Ngủ ngon hơn",
      "Thư giãn",
    ],
  },
];