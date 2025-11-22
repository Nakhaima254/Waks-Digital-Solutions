import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import WhatsAppFloater from "./WhatsAppFloater";
import ParticlesBackground from "./ParticlesBackground";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ParticlesBackground />
      <ScrollToTop />
      <Navigation />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloater />
    </div>
  );
};

export default Layout;