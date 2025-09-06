import "./index.css";
import BannerSection from "./components/BannerSection";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Terms from "./components/pages/Terms";
import AffiliateDisclosure from "./components/pages/AffiliateDisclosure";
import React from "react";

// Standalone header/footer
const LocalHeader = React.lazy(() => import("./components/Header"));
const LocalFooter = React.lazy(() => import("./components/Footer"));

// Main Landing App Component
const LandingApp = () => {
  const isFederated =
    typeof window !== "undefined" && window.location.pathname.startsWith("/landing");

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <React.Suspense fallback={null}>{isFederated ? <></> : <LocalHeader />}</React.Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BannerSection />
              <ProductList />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
      </Routes>
      <React.Suspense fallback={null}>{isFederated ? <></> : <LocalFooter />}</React.Suspense>
    </div>
  );
};

export default LandingApp;
