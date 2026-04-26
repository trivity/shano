import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/skip-bin-sizes", label: "Skip Bin Sizes" },
  { to: "/waste-guide", label: "Waste Guide" },
  { to: "/delivery-area", label: "Delivery Area" },
  { to: "/about", label: "About Us" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-18">
        {/* Logo */}
        <Link to="/" data-testid="navbar-logo" className="flex items-center gap-2">
          <span className="text-xl lg:text-2xl font-bold tracking-tight" style={{ fontFamily: 'Outfit' }}>
            Shano's <span style={{ color: '#bf0403' }}>Skips</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" data-testid="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className={`nav-link px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === link.to
                  ? "text-[#bf0403]"
                  : "text-gray-700 hover:text-[#bf0403]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link to="/contact" data-testid="navbar-enquiry-btn">
            <Button
              className="btn-red rounded-full text-sm font-semibold px-5 hidden sm:flex items-center gap-2"
              style={{ backgroundColor: '#bf0403' }}
            >
              <Mail size={15} />
              Send an Enquiry
            </Button>
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="mobile-menu-toggle"
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div data-testid="mobile-menu" className="lg:hidden bg-white border-t mobile-menu-enter">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`py-3 px-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-[#bf0403] bg-red-50"
                    : "text-gray-700 hover:text-[#bf0403] hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-3" data-testid="mobile-enquiry-btn">
              <Button
                className="w-full btn-red rounded-full font-semibold flex items-center justify-center gap-2"
                style={{ backgroundColor: '#bf0403' }}
              >
                <Mail size={15} />
                Send an Enquiry
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
