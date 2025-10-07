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
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import WebDevelopment from "./pages/services/WebDevelopment";
import WordPressDesign from "./pages/services/WordPressDesign";
import EcommerceSolutions from "./pages/services/EcommerceSolutions";
import SEOServices from "./pages/services/SEOServices";
import WebDesignTrends2025 from "./pages/blog/WebDesignTrends2025";
import SEOGuideKenyanBusinesses from "./pages/blog/SEOGuideKenyanBusinesses";
import EcommerceSuccessKenya from "./pages/blog/EcommerceSuccessKenya";
import WordPressVsCustom from "./pages/blog/WordPressVsCustom";
import MobileOptimizationImportance from "./pages/blog/MobileOptimizationImportance";
import DigitalMarketingStrategiesSMEs from "./pages/blog/DigitalMarketingStrategiesSMEs";
import ColorPsychologyWebDesign from "./pages/blog/ColorPsychologyWebDesign";
import NavigationDesignBestPractices from "./pages/blog/NavigationDesignBestPractices";
import TypographyTrendsKenya from "./pages/blog/TypographyTrendsKenya";
import MinimalistVsMaximalist from "./pages/blog/MinimalistVsMaximalist";
import AccessibilityDesignGuide from "./pages/blog/AccessibilityDesignGuide";
import VisualHierarchyPrinciples from "./pages/blog/VisualHierarchyPrinciples";
import KeywordResearchGuide from "./pages/blog/KeywordResearchGuide";
import MetaTagsSchemaMarkup from "./pages/blog/MetaTagsSchemaMarkup";
import EcommerceSEOStrategies from "./pages/blog/EcommerceSEOStrategies";
import SEOAuditChecklist from "./pages/blog/SEOAuditChecklist";
import MobileFirstIndexing from "./pages/blog/MobileFirstIndexing";
import InternationalSEO from "./pages/blog/InternationalSEO";
import PaymentGatewaysKenya from "./pages/blog/PaymentGatewaysKenya";
import ProductPhotographyEcommerce from "./pages/blog/ProductPhotographyEcommerce";
import ConversionRateOptimization from "./pages/blog/ConversionRateOptimization";
import CustomerRetentionEcommerce from "./pages/blog/CustomerRetentionEcommerce";
import EcommerceSecurityTrust from "./pages/blog/EcommerceSecurityTrust";
import SocialCommerceWhatsApp from "./pages/blog/SocialCommerceWhatsApp";

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
            <Route path="pricing" element={<Pricing />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/web-design-trends-2025" element={<WebDesignTrends2025 />} />
            <Route path="blog/seo-guide-kenyan-businesses" element={<SEOGuideKenyanBusinesses />} />
            <Route path="blog/ecommerce-success-kenya" element={<EcommerceSuccessKenya />} />
            <Route path="blog/wordpress-vs-custom-development" element={<WordPressVsCustom />} />
            <Route path="blog/mobile-optimization-importance" element={<MobileOptimizationImportance />} />
            <Route path="blog/digital-marketing-strategies-smes" element={<DigitalMarketingStrategiesSMEs />} />
            <Route path="blog/color-psychology-web-design" element={<ColorPsychologyWebDesign />} />
            <Route path="blog/navigation-design-best-practices" element={<NavigationDesignBestPractices />} />
            <Route path="blog/typography-trends-kenya" element={<TypographyTrendsKenya />} />
            <Route path="blog/minimalist-vs-maximalist" element={<MinimalistVsMaximalist />} />
            <Route path="blog/accessibility-design-guide" element={<AccessibilityDesignGuide />} />
            <Route path="blog/visual-hierarchy-principles" element={<VisualHierarchyPrinciples />} />
            <Route path="blog/keyword-research-guide" element={<KeywordResearchGuide />} />
            <Route path="blog/meta-tags-schema-markup" element={<MetaTagsSchemaMarkup />} />
            <Route path="blog/ecommerce-seo-strategies" element={<EcommerceSEOStrategies />} />
            <Route path="blog/seo-audit-checklist" element={<SEOAuditChecklist />} />
            <Route path="blog/mobile-first-indexing" element={<MobileFirstIndexing />} />
            <Route path="blog/international-seo" element={<InternationalSEO />} />
            <Route path="blog/payment-gateways-kenya" element={<PaymentGatewaysKenya />} />
            <Route path="blog/product-photography-ecommerce" element={<ProductPhotographyEcommerce />} />
            <Route path="blog/conversion-rate-optimization" element={<ConversionRateOptimization />} />
            <Route path="blog/customer-retention-ecommerce" element={<CustomerRetentionEcommerce />} />
            <Route path="blog/ecommerce-security-trust" element={<EcommerceSecurityTrust />} />
            <Route path="blog/social-commerce-whatsapp" element={<SocialCommerceWhatsApp />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
