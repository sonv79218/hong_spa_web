import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../common/Logo";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Trang chủ" },
    { path: "/promotions", label: "Khuyến mãi" },
    { path: "/products", label: "Sản phẩm" },
    { path: "/laser-hair-removal", label: "Chương trình" },
    { path: "/menu", label: "Menu" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream shadow-lg shadow-sage/5 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Logo size="sm" className="h-8 sm:h-10" />
            {location.pathname === "/" ? (
              <a
                href="#heroSection"
                className="font-serif text-xl sm:text-2xl text-sage font-bold hover:text-terracotta transition-colors duration-300 cursor-glow"
              >
                Hong Spa
              </a>
            ) : (
              <Link
                to="/"
                className="font-serif text-xl sm:text-2xl text-sage font-bold hover:text-terracotta transition-colors duration-300 cursor-glow"
              >
                Hong Spa
              </Link>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="nav-link relative text-sage hover:text-sage-light transition-colors duration-300 font-medium link-underline py-2"
              >
                {link.label}
              </NavLink>
            ))}

            <a
  href="#contact"
  className="btn-glow bg-sage text-cream px-6 py-2.5 rounded-full hover:bg-sage-light transition-all duration-300 font-medium shine-sweep"
>
  Đặt lịch ngay
</a>
            
          </div>
          

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-sage p-2 hover:bg-sage/5 rounded-lg transition-colors duration-300 icon-bounce"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className="block px-4 py-3 text-sage hover:bg-sage/5 rounded-xl transition-all duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
  href="#contact"
  onClick={() => setIsMobileMenuOpen(false)}
  className="block mx-4 mt-4 bg-sage text-cream px-6 py-3 rounded-full text-center hover:bg-sage-light transition-colors duration-300 font-medium"
>
  Đặt lịch ngay
</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;