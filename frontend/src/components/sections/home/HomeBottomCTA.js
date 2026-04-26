import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const HomeBottomCTA = () => (
  <section className="py-20 lg:py-28 bg-black text-white">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ fontFamily: 'Outfit' }}>
        Ready to get started?
      </h2>
      <p className="mt-4 text-gray-400 max-w-lg mx-auto">
        Give us a call or visit our contact page. We're open 7 days a week and happy to help with any questions.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <a href="tel:0497068349" data-testid="cta-call-btn">
          <Button
            size="lg"
            className="btn-red rounded-full text-base font-semibold px-8 py-6 flex items-center gap-2"
            style={{ backgroundColor: '#bf0403' }}
          >
            <Phone size={18} />
            0497 068 349
          </Button>
        </a>
        <Link to="/contact" data-testid="cta-contact-btn">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full text-base font-semibold px-8 py-6 border-white/30 text-white hover:bg-white/10 hover:text-white"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  </section>
);
