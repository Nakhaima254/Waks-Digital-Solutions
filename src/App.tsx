import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/services/WebDevelopment";
import WordPressDesign from "./pages/services/WordPressDesign";
import EcommerceSolutions from "./pages/services/EcommerceSolutions";
import SEOServices from "./pages/services/SEOServices";
import GraphicDesign from "./pages/services/GraphicDesign";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="services/web-development" element={<WebDevelopment />} />
            <Route path="services/wordpress-design" element={<WordPressDesign />} />
            <Route path="services/ecommerce-solutions" element={<EcommerceSolutions />} />
            <Route path="services/seo-services" element={<SEOServices />} />
            <Route path="services/graphic-design" element={<GraphicDesign />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
