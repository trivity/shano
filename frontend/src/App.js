import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "sonner"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import SkipBinSizesPage from "@/pages/SkipBinSizesPage";
import WasteGuidePage from "@/pages/WasteGuidePage";
import DeliveryAreaPage from "@/pages/DeliveryAreaPage";
import AboutUsPage from "@/pages/AboutUsPage";
import FAQPage from "@/pages/FAQPage";
import ContactUsPage from "@/pages/ContactUsPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skip-bin-sizes" element={<SkipBinSizesPage />} />
            <Route path="/waste-guide" element={<WasteGuidePage />} />
            <Route path="/delivery-area" element={<DeliveryAreaPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster position="top-right" richColors />
    </BrowserRouter>
  );
}

export default App;
