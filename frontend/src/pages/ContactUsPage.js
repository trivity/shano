import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Facebook, Send, Loader2 } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent! We'll be in touch soon.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try calling us instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-testid="contact-page" className="pt-20">
      {/* Header */}
      <section className="bg-black text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[#ff1420] text-sm font-semibold uppercase tracking-wider">Get in touch</span>
          <h1
            data-testid="contact-title"
            className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'Outfit' }}
          >
            Contact us
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl text-base lg:text-lg">
            Have a question or ready to book a skip? Get in touch and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      data-testid="contact-name-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      data-testid="contact-email-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="h-11"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    data-testid="contact-phone-input"
                    placeholder="Your phone number"
                    value={form.phone}
                    onChange={handleChange}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    data-testid="contact-message-input"
                    placeholder="Tell us about your project or question..."
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  data-testid="contact-submit-btn"
                  disabled={loading}
                  className="btn-red rounded-full font-semibold px-8 h-11 flex items-center gap-2"
                  style={{ backgroundColor: loading ? '#999' : '#bf0403' }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send message
                    </>
                  )}
                </Button>
              </form>
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
