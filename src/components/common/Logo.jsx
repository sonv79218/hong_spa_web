import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const sizeClasses = {
  sm: "h-8",
  md: "h-10",
  lg: "h-14",
};

export default function Logo({ size = "md", to = "/", className = "" }) {
  return (
    <Link to={to} className={`inline-flex items-center ${className}`}>
      <img
        src={logo}
        alt="Hong Spa Logo"
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </Link>
  );
}
