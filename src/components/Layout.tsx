import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import EducatorGiftCards from "./EducatorGiftCards";
import QuickActionBoxes from "./QuickActionBoxes";

export default function Layout() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-[#E31B23]/10 selection:text-[#E31B23]">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <EducatorGiftCards />
      <QuickActionBoxes />
      <Footer />
    </div>
  );
}
