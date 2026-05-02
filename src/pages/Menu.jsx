import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import MenuHero from "../components/menu/MenuHero";
import MenuImages from "../components/menu/MenuImages";
import ComboSection from "../components/menu/ComboSection";

import {  notes, menuImages } from "../data/menuData";
import { offers } from "../data/offers";
const combos = offers.map((item) => ({
  id: item.id,
  name: item.title,
  desc: item.description,
  price: item.price,
  highlight: item.highlight,
}));
const MenuPage = () => {
  return (
    <section className="min-h-screen bg-cream">
      <Navbar />

      <MenuHero />
      <MenuImages images={menuImages} />
      <ComboSection combos={combos} />

      <Footer />
    </section>
  );
};

export default MenuPage;