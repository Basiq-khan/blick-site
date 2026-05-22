import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Award,
  Globe
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter an email address");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setIsSubscribed(true);
    setError("");
    setEmail("");
    setTimeout(() => {
      setIsSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#18181b] text-zinc-300 border-t border-zinc-800">
      
      {/* 1. Newsletter / Join Community */}
      <div className="border-b border-zinc-800/80 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-1.5 max-w-md">
            <h3 className="text-base font-extrabold uppercase tracking-widest text-white flex items-center gap-2">
              <Mail className="size-5 text-[#E31B23]" />
              <span>Join the Creative Community</span>
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-medium">
              Sign up for our email list to receive exclusive coupons, special sale previews, free lesson plans, and project inspiration!
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="relative w-full max-w-md">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  disabled={isSubscribed}
                  className="w-full rounded-full border border-zinc-700 bg-zinc-900/60 py-3 pl-4 pr-10 text-xs text-white outline-none placeholder:text-zinc-500 focus:border-[#E31B23] focus:bg-zinc-950 transition-colors disabled:opacity-50"
                />
                {isSubscribed && (
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-400">
                    <Check className="size-4 animate-bounce" />
                  </span>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubscribed}
                className="rounded-full bg-[#E31B23] px-6 py-3 text-xs font-bold text-white hover:bg-red-700 transition-all flex items-center gap-1.5 shrink-0 transform active:scale-97 cursor-pointer"
              >
                <span>{isSubscribed ? "Subscribed!" : "Subscribe"}</span>
                {!isSubscribed && <ArrowRight className="size-3.5" />}
              </button>
            </div>
            {error && <span className="absolute left-4 -bottom-5 text-[10px] font-bold text-red-400">{error}</span>}
            {isSubscribed && (
              <span className="absolute left-4 -bottom-5 text-[10px] font-bold text-emerald-400">
                🎉 Welcome! Check your inbox for your 10% coupon.
              </span>
            )}
          </form>
        </div>
      </div>

      {/* 2. Main Footer Links columns */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          
          {/* Column 1: About Blick */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white border-l-2 border-[#E31B23] pl-2 leading-none">
              Shop Categories
            </h4>
            <ul className="space-y-2 text-xs font-medium text-zinc-400">
               <li>
                <Link to="/product/brushes-and-painting-tools" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Brushes & Painting Tools
                </Link>
              </li>
              <li>
                <Link to="/product/canvas-and-surfaces" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Canvas & Surfaces
                </Link>
              </li>
              <li>
                <Link to="/product/ceramics-and-sculpture" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Ceramics & Sculpture
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Customer Service */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white border-l-2 border-[#E31B23] pl-2 leading-none">
              Popular Categories
            </h4>
            <ul className="space-y-2 text-xs font-medium text-zinc-400">
              <li>
                <Link to="/product/drawing-and-illustration" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Drawing & Illustration
                </Link>
              </li>
              <li>
                <Link to="/product/easels-and-furniture" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Easels & Furniture
                </Link>
              </li>
              <li>
                <Link to="/product/farming-and-matboard" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Farming & Matboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white border-l-2 border-[#E31B23] pl-2 leading-none">
              Featured Collections
            </h4>
            <ul className="space-y-2 text-xs font-medium text-zinc-400">
             <li>
                <Link to="/product/paints" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Paints
                </Link>
              </li>
              <li>
                <Link to="/product/papers-and-boards" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Papers & Boards
                </Link>
              </li>
              <li>
                <Link to="/product/studio-and-office-supplies" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Studio & Office Supplies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: My Account
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-white border-l-2 border-[#E31B23] pl-2 leading-none">
              My Account
            </h4>
            <ul className="space-y-2 text-xs font-medium text-zinc-400">
              <li><Link to="/pages/sign-in" className="hover:text-white hover:translate-x-1 inline-block transition-all">Sign In / Register</Link></li>
              <li><Link to="/pages/order-status" className="hover:text-white hover:translate-x-1 inline-block transition-all">Order Status</Link></li>
              <li><Link to="/pages/order-history" className="hover:text-white hover:translate-x-1 inline-block transition-all">Order History</Link></li>
              <li><Link to="/pages/quick-reorder" className="hover:text-white hover:translate-x-1 inline-block transition-all">Quick Reorder</Link></li>
              <li><Link to="/pages/my-wishlist" className="hover:text-white hover:translate-x-1 inline-block transition-all">My Wishlist</Link></li>
              <li><Link to="/pages/my-gift-cards" className="hover:text-white hover:translate-x-1 inline-block transition-all">My Gift Cards</Link></li>
              <li><Link to="/pages/account-settings" className="hover:text-white hover:translate-x-1 inline-block transition-all">Account Settings</Link></li>
            </ul>
          </div> */}

        </div>
      </div>

      {/* 3. Seals and Trust Badges Row */}
      <div className="border-t border-zinc-800/80 bg-zinc-950 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-zinc-800 pb-8">
          
          {/* Trust Seal */}
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white/5 p-2 text-yellow-500 border border-white/10 shrink-0">
              <Award className="size-6" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-white uppercase tracking-wider leading-none">Best Online Shops</h4>
              <p className="text-[10px] text-zinc-500 font-bold mt-1 uppercase tracking-widest leading-none">#1 customer service rating</p>
            </div>
          </div>

          {/* Secure Payment */}
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white/5 p-2 text-[#E31B23] border border-white/10 shrink-0">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-white uppercase tracking-wider leading-none">100% Secure Checkout</h4>
              <p className="text-[10px] text-zinc-500 font-bold mt-1 uppercase tracking-widest leading-none">SSL Encrypted Transaction processing</p>
            </div>
          </div>

          {/* Global shipping */}
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-white/5 p-2 text-sky-400 border border-white/10 shrink-0">
              <Globe className="size-6" />
            </div>
            <div>
              <h4 className="text-xs font-extrabold text-white uppercase tracking-wider leading-none">Nationwide Delivery</h4>
              <p className="text-[10px] text-zinc-500 font-bold mt-1 uppercase tracking-widest leading-none">Stores and hubs in 35+ states</p>
            </div>
          </div>

        </div>

        {/* Social and legal policies */}
        <div className="mx-auto max-w-7xl pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#E31B23] text-white font-extrabold px-2 py-0.5 rounded-xs tracking-tighter text-sm uppercase">BLICK</div>
              <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Art Materials Since 1911</span>
            </div>
            <p className="text-[10px] text-zinc-500 max-w-md font-medium leading-relaxed">
              © {new Date().getFullYear()} Blick Art Materials. All rights reserved. All prices, packaging, and descriptions on this site are subject to change without notice. Art supplies, custom framing, canvases.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="rounded-full bg-zinc-900 border border-zinc-800 p-2.5 text-zinc-400 hover:text-white hover:bg-[#E31B23] transition-all shadow-xs" aria-label="Facebook">
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            <a href="#" className="rounded-full bg-zinc-900 border border-zinc-800 p-2.5 text-zinc-400 hover:text-white hover:bg-sky-400 transition-all shadow-xs" aria-label="Twitter">
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="rounded-full bg-zinc-900 border border-zinc-800 p-2.5 text-zinc-400 hover:text-white hover:bg-rose-500 transition-all shadow-xs" aria-label="Instagram">
              <svg className="size-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="rounded-full bg-zinc-900 border border-zinc-800 p-2.5 text-zinc-400 hover:text-white hover:bg-[#ff0000] transition-all shadow-xs" aria-label="YouTube">
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

    </footer>
  );
}
