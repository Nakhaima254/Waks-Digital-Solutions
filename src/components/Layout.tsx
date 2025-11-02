import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import WhatsAppFloater from "./WhatsAppFloater";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloater />
    </div>
  );
};

export default Layout;