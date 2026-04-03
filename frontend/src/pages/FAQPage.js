import React from "react";
import { Helmet } from "react-helmet-async";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import SEO from "@/components/SEO";

const faqs = [
  {
    q: "Can I put paint in the bin?",
    a: "Paint tins, including empty or dried ones, must be separated and placed aside. Please do not place them inside the bin.",
  },
  {
    q: "Can I put a mattress in the bin?",
    a: "Yes, mattresses can be placed on top of the skip or beside the skip, not inside, to avoid going to general waste. A recycling fee per mattress applies.",
  },
  {
    q: "How long can I keep the bin?",
    a: "Bin hire is available for 24-48 hours, weekly, or ongoing depending on your needs. For construction or long-term hire, please contact us for specific rates.",
  },
  {
    q: "Can I put green waste in a mixed household bin?",
    a: "Yes, green waste can be placed in a mixed household bin, but it should be placed on top of the load to allow it to be separated and recycled properly.",
  },
  {
    q: "Can I put mixed waste in a green waste bin?",
    a: "No, mixed waste is not permitted in a green waste bin. These bins are designated for green waste only and any other materials must be disposed of through general or mixed waste services.",
  },
  {
    q: "What payment methods do you offer?",
    a: "We offer a range of payment methods for your convenience: Cash, Eftpos, and Afterpay.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <div data-testid="faq-page" className="pt-20">
      <SEO
        title="FAQ"
        description="Frequently asked questions about Shano's Skips bin hire in Port Augusta. Learn about what you can put in bins, hire duration, and payment methods."
        path="/faq"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      {/* Header */}
      <section className="relative bg-black text-white py-16 lg:py-24 overflow-hidden">
        <img src="/images/bin-at-site.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-25" />
        <div className="relative max-w-7xl mx-auto px-6">
          <span className="text-[#ff1420] text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h1
            data-testid="faq-title"
            className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'Outfit' }}
          >
            Frequently asked questions
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl text-base lg:text-lg">
            Find answers to common questions about our skip bin hire service.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Accordion type="single" collapsible data-testid="faq-accordion">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="faq-trigger text-left text-base font-semibold py-5"
                  style={{ fontFamily: 'Outfit' }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  data-testid={`faq-content-${i}`}
                  className="text-gray-600 leading-relaxed text-sm pb-5"
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions */}
          <div className="mt-16 p-8 bg-gray-50 rounded-xl border border-gray-100 text-center">
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Outfit' }}>Still have questions?</h3>
            <p className="text-gray-500 text-sm mb-6">
              We're happy to help. Give us a call or send us a message.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:0497068349" data-testid="faq-call-btn">
                <Button
                  className="btn-red rounded-full font-semibold flex items-center gap-2"
                  style={{ backgroundColor: '#bf0403' }}
                >
                  <Phone size={15} />
                  0497 068 349
                </Button>
              </a>
              <Link to="/contact" data-testid="faq-contact-btn">
                <Button
                  variant="outline"
                  className="rounded-full font-semibold border-[#bf0403] text-[#bf0403] hover:bg-[#bf0403] hover:text-white"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
