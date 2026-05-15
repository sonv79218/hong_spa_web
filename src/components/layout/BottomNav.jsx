import { NavLink } from "react-router-dom";
import { Home, ShoppingBag, Menu } from "lucide-react";

const navItems = [
  { path: "/", label: "Trang chủ", Icon: Home },
  { path: "/products", label: "Sản phẩm", Icon: ShoppingBag },
  // { path: "/menu", label: "Menu", Icon: Menu },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-cream border-t border-sage/10 shadow-[0_-4px_20px_rgba(61,74,62,0.08)]">
      {/* Safe area padding for iPhone */}
      <div className="pb-safe">
        <div className="flex items-center justify-around h-16">
          {navItems.map(({ path, label, Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 min-w-[64px] ${
                  isActive
                    ? "text-sage"
                    : "text-sage/50 hover:text-sage/70"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="relative">
                    <Icon
                      size={22}
                      strokeWidth={isActive ? 2.5 : 2}
                      className={`transition-transform duration-300 ${
                        isActive ? "scale-110" : ""
                      }`}
                    />
                    {/* {isActive && (
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-sage rounded-full" />
                    )} */}
                  </div>
                  <span
                    className={`text-xs font-medium transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-80"
                    }`}
                  >
                    {label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
