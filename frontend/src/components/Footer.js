import React from "react";
import { Phone, Mail, MapPin, Facebook, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer data-testid="footer" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Outfit' }}>
              Shano's <span style={{ color: '#bf0403' }}>Skips</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Locally owned and operated skip bin business, proudly serving Port Augusta and surrounding areas.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/profile.php?id=61581009062954"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-facebook-link"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#bf0403] hover:text-[#bf0403] transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/skip-bin-sizes", label: "Skip Bin Sizes" },
                { to: "/waste-guide", label: "Waste Guide" },
                { to: "/delivery-area", label: "Delivery Area" },
                { to: "/about", label: "About Us" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:0497068349" data-testid="footer-phone" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <Phone size={16} className="text-[#bf0403]" />
                0497 068 349
              </a>
              <a href="mailto:shanosskips@outlook.com" data-testid="footer-email" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm">
                <Mail size={16} className="text-[#bf0403]" />
                shanosskips@outlook.com
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="text-[#bf0403] mt-0.5 shrink-0" />
                3 Osborne St, Port Augusta SA 5700
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Shano's Skips. All rights reserved. Powered by{' '}
            <a
              href="https://simplifyyourbusiness.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors underline"
            >
              Simplify Your Business
            </a>
          </p>
          <button
            onClick={scrollToTop}
            data-testid="scroll-to-top-btn"
            className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-[#bf0403] hover:text-[#bf0403] transition-colors"
          >
            <ChevronUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
