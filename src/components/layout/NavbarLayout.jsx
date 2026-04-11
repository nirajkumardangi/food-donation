import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function NavbarLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-grow min-h-[100dvh] flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default NavbarLayout;
