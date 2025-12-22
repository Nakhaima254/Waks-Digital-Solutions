import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import WhatsAppFloater from "./WhatsAppFloater";
import FloatingMenu from "./FloatingMenu";
import ParticlesBackground from "./ParticlesBackground";
import BackToTop from "./BackToTop";
import { useEffect, useState } from "react";

const Layout = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("enter");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("exit");
    }
  }, [location, displayLocation]);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <ParticlesBackground />
      <ScrollToTop />
      <Navigation />
      <main 
        className={`flex-1 relative z-10 ${
          transitionStage === "exit" ? "animate-page-exit" : "animate-page-enter"
        }`}
        onAnimationEnd={() => {
          if (transitionStage === "exit") {
            setTransitionStage("enter");
            setDisplayLocation(location);
          }
        }}
      >
        <Outlet key={displayLocation.pathname} />
      </main>
      <Footer />
      <WhatsAppFloater />
      <FloatingMenu />
      <BackToTop />
    </div>
  );
};

export default Layout;