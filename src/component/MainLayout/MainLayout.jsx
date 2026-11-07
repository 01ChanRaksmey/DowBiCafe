
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import CafeBackground from "./CafeBackground.jsx";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo(0, 0);
  }, [location.key, location.hash]);

  return (
    <div className="relative isolate min-h-dvh bg-primary transition-colors duration-100">
      <CafeBackground />
      <div className="relative z-10">
        <header className="sticky top-0 z-50">
          <Header />
        </header>
        <main className="min-h-dvh mb-5">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default MainLayout
