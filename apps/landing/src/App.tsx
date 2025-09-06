import "./index.css";
import BannerSection from "./components/BannerSection";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Terms from "./components/pages/Terms";
import AffiliateDisclosure from "./components/pages/AffiliateDisclosure";
import Footer from "./components/Footer";

// Main Landing App Component
const LandingApp = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Header />
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
      <Footer />
    </div>
  );
};

export default LandingApp;
