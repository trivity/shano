import React, { useEffect } from "react";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import SEO from "@/components/SEO";

const GHL_SCRIPT_SRC = "https://link.simplifyyourbusiness.au/js/form_embed.js";

export default function ContactUsPage() {
  useEffect(() => {
    // Load Go Highlevel form embed script once.
    if (document.querySelector(`script[src="${GHL_SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = GHL_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div data-testid="contact-page" className="pt-20">
      <SEO
        title="Contact Us"
        description="Get in touch with Shano's Skips for skip bin hire in Port Augusta. Call 0497 068 349 or send us a message. Open 7 days a week."
        path="/contact"
      />
      {/* Header */}
      <section className="relative bg-black text-white py-16 lg:py-24 overflow-hidden">
        <img src="/images/truck-bin-sky.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-[#ff1420] text-sm font-semibold uppercase tracking-wider">Get in touch</span>
          <h1
            data-testid="contact-title"
            className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'Outfit' }}
          >
            Contact us
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl text-base lg:text-lg">
            Have a question or ready to book a skip? Get in touch and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* GHL Embedded Form */}
            <div className="lg:col-span-3" data-testid="contact-form-wrapper">
              <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Outfit' }}>
                Send us a message
              </h2>
              <p className="text-sm text-gray-500 mb-6">
                Fill in the form below and we'll get back to you shortly.
              </p>
              <div className="rounded-xl border border-gray-100 bg-white overflow-hidden">
                <iframe
                  src="https://link.simplifyyourbusiness.au/widget/form/zOI9pRb8CX8RmEcTTMzd"
                  style={{ width: "100%", height: "660px", border: "none", borderRadius: "3px" }}
                  id="inline-zOI9pRb8CX8RmEcTTMzd"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Web-Contact Form"
                  data-height="597"
                  data-layout-iframe-id="inline-zOI9pRb8CX8RmEcTTMzd"
                  data-form-id="zOI9pRb8CX8RmEcTTMzd"
                  title="Web-Contact Form"
                  data-testid="ghl-contact-iframe"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold mb-6" style={{ fontFamily: 'Outfit' }}>Contact details</h3>
                <div className="space-y-5">
                  <a
                    href="tel:0497068349"
                    data-testid="contact-info-phone"
                    className="flex items-center gap-4 text-gray-700 hover:text-[#bf0403] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FEE2E2' }}>
                      <Phone size={18} className="text-[#bf0403]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Phone</p>
                      <p className="font-medium text-sm">0497 068 349</p>
                    </div>
                  </a>
                  <a
                    href="mailto:shanosskips@outlook.com"
                    data-testid="contact-info-email"
                    className="flex items-center gap-4 text-gray-700 hover:text-[#bf0403] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FEE2E2' }}>
                      <Mail size={18} className="text-[#bf0403]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Email</p>
                      <p className="font-medium text-sm">shanosskips@outlook.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FEE2E2' }}>
                      <MapPin size={18} className="text-[#bf0403]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Address</p>
                      <p className="font-medium text-sm">3 Osborne St, Port Augusta SA 5700</p>
                    </div>
                  </div>
                  <a
                    href="https://www.facebook.com/profile.php?id=61581009062954"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contact-info-facebook"
                    className="flex items-center gap-4 text-gray-700 hover:text-[#bf0403] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FEE2E2' }}>
                      <Facebook size={18} className="text-[#bf0403]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Facebook</p>
                      <p className="font-medium text-sm">Follow us on Facebook</p>
                    </div>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm font-semibold mb-1" style={{ fontFamily: 'Outfit' }}>Open 7 days</p>
                  <p className="text-xs text-gray-500">
                    We're available every day of the week. Don't hesitate to reach out.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
