import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import WhatsAppFloater from "./WhatsAppFloater";
import ParticlesBackground from "./ParticlesBackground";
import { useEffect, useState } from "react";

const Layout = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <ParticlesBackground />
      <ScrollToTop />
      <Navigation />
      <main 
        className={`flex-1 relative z-10 transition-opacity duration-300 ${
          transitionStage === "fadeOut" ? "opacity-0" : "opacity-100"
        }`}
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransitionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloater />
    </div>
  );
};

export default Layout;