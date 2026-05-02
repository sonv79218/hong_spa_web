import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";
import PromotionPage from "../pages/PromotionPage";
import ServiceDetailPage from "../pages/ServiceDetailPage.jsx";
import ScrollToTop from "../components/ScrollToTop";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/promotions" element={<PromotionPage />} />
          <Route path="/services/:id" element={<ServiceDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}