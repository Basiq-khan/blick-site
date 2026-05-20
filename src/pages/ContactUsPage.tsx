import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Phone,
  Mail,
  Clock,
  MapPin,
  MessageSquare,
  Send,
  Check,
} from "lucide-react";

export default function ContactUsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    orderNumber: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Please enter a valid email.";
    if (!form.subject) newErrors.subject = "Please select a subject.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", orderNumber: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="animate-fade-in bg-white min-h-[70vh]">
      {/* Breadcrumb */}
      <div className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
            <Link to="/" className="hover:text-[#E31B23] transition-colors">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-zinc-800 font-semibold">Contact Us</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Page Header */}
        <h1 className="text-2xl font-bold text-zinc-900 mb-1">Contact Us</h1>
        <p className="text-sm text-zinc-500 mb-10">
          Have a question or need help? Reach out and we'll get back to you as soon as possible.
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-16">

          {/* ─── Left: Contact Form (3 cols) ──────── */}
          <div className="md:col-span-3">
            {submitted && (
              <div className="mb-6 flex items-center gap-3 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3">
                <Check className="size-5 text-emerald-600 shrink-0" />
                <p className="text-sm font-semibold text-emerald-800">
                  Thank you! Your message has been sent. We'll respond within 1-2 business days.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-0">
              <div className="border border-zinc-300 rounded-md divide-y divide-zinc-300 bg-white">
                {/* Required note */}
                <div className="px-4 pt-4 pb-2">
                  <span className="text-xs text-zinc-400">* Indicates a required field.</span>
                </div>

                {/* Name */}
                <div className="px-4 py-4">
                  <label htmlFor="contact-name" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Full Name<span className="text-[#E31B23]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full rounded border ${errors.name ? "border-red-400" : "border-zinc-300"} bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-[#E31B23] focus:ring-1 focus:ring-[#E31B23]/30 transition-colors`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="px-4 py-4">
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Email Address<span className="text-[#E31B23]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full rounded border ${errors.email ? "border-red-400" : "border-zinc-300"} bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-[#E31B23] focus:ring-1 focus:ring-[#E31B23]/30 transition-colors`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.email}</p>}
                </div>

                {/* Order Number (optional) */}
                <div className="px-4 py-4">
                  <label htmlFor="contact-order" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Order Number <span className="text-zinc-400 font-normal text-xs">(optional)</span>
                  </label>
                  <input
                    id="contact-order"
                    name="orderNumber"
                    type="text"
                    value={form.orderNumber}
                    onChange={handleChange}
                    className="w-full rounded border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-[#E31B23] focus:ring-1 focus:ring-[#E31B23]/30 transition-colors"
                    placeholder=""
                  />
                </div>

                {/* Subject */}
                <div className="px-4 py-4">
                  <label htmlFor="contact-subject" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Subject<span className="text-[#E31B23]">*</span>
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full rounded border ${errors.subject ? "border-red-400" : "border-zinc-300"} bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-[#E31B23] focus:ring-1 focus:ring-[#E31B23]/30 transition-colors cursor-pointer`}
                  >
                    <option value="">Select a subject...</option>
                    <option value="order">Order Inquiry</option>
                    <option value="shipping">Shipping & Delivery</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="product">Product Question</option>
                    <option value="account">Account Help</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="px-4 py-4">
                  <label htmlFor="contact-message" className="block text-sm font-semibold text-zinc-700 mb-2">
                    Message<span className="text-[#E31B23]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full rounded border ${errors.message ? "border-red-400" : "border-zinc-300"} bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none focus:border-[#E31B23] focus:ring-1 focus:ring-[#E31B23]/30 transition-colors resize-none`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.message}</p>}
                </div>
              </div>

              {/* Submit */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded bg-[#E31B23] px-10 py-3 text-sm font-bold text-white uppercase tracking-wider hover:bg-red-700 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Send className="size-4" />
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* ─── Right: Contact Info (2 cols) ─────── */}
          <div className="md:col-span-2 md:border-l md:border-zinc-200 md:pl-12">
            <h2 className="text-lg font-bold text-zinc-900 mb-6">Get In Touch</h2>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="flex items-center justify-center size-9 rounded-lg bg-[#E31B23]/10 shrink-0 mt-0.5">
                  <Phone className="size-4 text-[#E31B23]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-800">Phone</h3>
                  <p className="text-sm text-zinc-500 mt-0.5">
                    Toll Free:{" "}
                    <a href="tel:18008284548" className="text-[#E31B23] font-semibold hover:underline">
                      (800) 828-4548
                    </a>
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    International: +1-309-343-6181 Ext. 5402
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="flex items-center justify-center size-9 rounded-lg bg-[#E31B23]/10 shrink-0 mt-0.5">
                  <Mail className="size-4 text-[#E31B23]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-800">Email</h3>
                  <p className="text-sm text-zinc-500 mt-0.5">
                    <a href="mailto:info@dickblick.com" className="text-[#E31B23] font-semibold hover:underline">
                      info@dickblick.com
                    </a>
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    We respond within 1-2 business days.
                  </p>
                </div>
              </div>

              {/* Live Chat */}
              <div className="flex items-start gap-3.5">
                <div className="flex items-center justify-center size-9 rounded-lg bg-[#E31B23]/10 shrink-0 mt-0.5">
                  <MessageSquare className="size-4 text-[#E31B23]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-800">Live Chat</h3>
                  <p className="text-sm text-zinc-500 mt-0.5">
                    Available during business hours.
                  </p>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Click the chat icon on any page.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="flex items-center justify-center size-9 rounded-lg bg-[#E31B23]/10 shrink-0 mt-0.5">
                  <Clock className="size-4 text-[#E31B23]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-800">Customer Service Hours</h3>
                  <div className="text-sm text-zinc-500 mt-1 space-y-0.5">
                    <p>Mon – Fri: 8:00 AM – 7:00 PM CT</p>
                    <p>Saturday: 8:00 AM – 5:00 PM CT</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="flex items-center justify-center size-9 rounded-lg bg-[#E31B23]/10 shrink-0 mt-0.5">
                  <MapPin className="size-4 text-[#E31B23]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-800">Corporate Office</h3>
                  <div className="text-sm text-zinc-500 mt-1 space-y-0.5">
                    <p>Blick Art Materials, LLC</p>
                    <p>P.O. Box 1267</p>
                    <p>Galesburg, IL 61402-1267</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 pt-6 border-t border-zinc-200">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3">Quick Help</h3>
              <ul className="space-y-2">
                {[
                  { label: "Help & FAQs", to: "/pages/help-faqs" },
                  { label: "Shipping Policy", to: "/pages/shipping-policy" },
                  { label: "Return Policy", to: "/pages/return-policy" },
                  { label: "Order Status", to: "/pages/order-status" },
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm font-medium text-[#E31B23] hover:underline flex items-center gap-1.5"
                    >
                      <ChevronRight className="size-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Privacy note */}
        <div className="mt-12 border-t border-zinc-200 pt-8">
          <p className="text-[11px] text-zinc-400 leading-relaxed max-w-4xl">
            When you submit a contact form, we collect your name, email, and message content to respond to your inquiry. We will not share your information with third parties. For more information, see our{" "}
            <Link to="/pages/privacy-policy" className="text-zinc-600 underline hover:text-[#E31B23]">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
