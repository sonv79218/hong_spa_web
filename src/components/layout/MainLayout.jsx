import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

export default function MainLayout() {
  return (
    <>
      <div className="pb-20 md:pb-0">
        <Outlet />
      </div>
      <BottomNav />
    </>
  );
}
