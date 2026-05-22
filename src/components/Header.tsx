import { useState } from "react";
import {
  Search,
  MapPin,
  User,
  HelpCircle,
  ShoppingCart,
  Menu,
  X,
  Trash2,
  Plus,
  Minus,
  Truck,
  ArrowRight
} from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { NAVIGATION_LINKS } from "../data/products";

export default function Header() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  const { cart, removeFromCart, updateQuantity, cartItemsCount, cartTotal } = useCart();

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate("/");
    }
    setShowSearchSuggestions(false);
  };

  // Quick categories suggestions matching actual products
  const searchSuggestions = [
    "Acrylic Paints",
    "Watercolor Paint",
    "Studio Easels",
    "Colored Pencils",
    "Utility Roll Cart",
    "Marker Sets",
    "Sketch Pads",
    "Stretched Canvas",
    "Sewing Machine",
    "Pastel Sets",
    "Paint Thinner",
    "Block Printing",
    "Travel Set"
  ].filter(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant', // 'smooth' for animation, 'auto' for instant jump
    });
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-md transition-all duration-300">

        {/* Top Info Bar: SLIGHTLY DIFFERENT (Elegant Dark Gradient with refined links) */}
        <div className="from-[#0a0a0b] via-[#1c1c1f] to-[#0a0a0b] py-2 px-4 text-xs font-semibold text-zinc-300 transition-colors duration-250 sm:px-6 shadow-sm border-b border-zinc-900/50">
          <div className="mx-auto flex max-w-7xl flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <Link to="/stores" className="flex items-center gap-1.5 hover:text-[#ff3b42] transition-colors">
                <MapPin className="size-3 text-[#ff3b42]" />
                <span className="text-zinc-900">Find a Store</span>
              </Link>
              <span className="text-zinc-900">|</span>
              <span className="flex items-center gap-1.5 text-zinc-900">
                <Truck className="size-3.5 text-emerald-400" />
                <span>Free Shipping on Orders Over $75*</span>
              </span>
            </div>
            <div className="flex items-center gap-4 text-zinc-900">
              <a href="tel:18008284548" className="hover:text-zinc-700 transition-colors">Call: 1 (630) 463-8489</a>
              <span className="text-zinc-700">|</span>
              <a href="#help" className="flex items-center gap-1 hover:text-zinc-700 transition-colors">
                <HelpCircle className="size-3" />
                <span>Help Center</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="border-b border-zinc-100 bg-white px-4 py-3.5 sm:px-6">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">

            {/* Logo: SLIGHTLY DIFFERENT (Added custom fine gold EST label and premium block layout) */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-lg p-1.5 hover:bg-zinc-100 lg:hidden"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="size-6 text-zinc-855" /> : <Menu className="size-6 text-zinc-855" />}
              </button>
              <Link
                to="/"
                className="flex items-center gap-2 group"
              >
                <div className="bg-[#E31B23] text-white font-extrabold px-3.5 py-2 rounded-sm tracking-tighter text-xl sm:text-2xl transform group-hover:scale-105 transition-all shadow-md">
                  Syntrix Systems
                </div>
                <div className="hidden flex-col justify-center sm:flex border-l border-zinc-200 pl-2">
                  <span className="text-[10px] font-black tracking-widest text-[#E31B23] uppercase leading-none">Art Materials</span>
                  <span className="text-[9px] font-bold text-amber-500 tracking-wider leading-none mt-1 uppercase">EST. 1911</span>
                </div>
              </Link>
            </div>

            {/* Interactive Search Bar: SLIGHTLY DIFFERENT (Sleeker flat minimalist borderless card / squircle style) */}
            <form onSubmit={handleSearchSubmit} className="relative hidden max-w-xl flex-1 md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search 110,000+ art supplies..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchSuggestions(true);
                  }}
                  onFocus={() => setShowSearchSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 205)}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-100/60 py-2.5 pl-4 pr-12 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 focus:border-zinc-350 focus:bg-white focus:ring-4 focus:ring-[#E31B23]/5 focus:shadow-xs"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-lg bg-[#E31B23] p-1.5 text-white hover:bg-black transition-colors shadow-sm"
                  aria-label="Search button"
                >
                  <Search className="size-4" />
                </button>
              </div>

              {/* Suggestions dropdown */}
              {showSearchSuggestions && (
                <div className="absolute left-0 right-0 mt-1.5 rounded-xl border border-zinc-100 bg-white p-2 shadow-xl ring-1 ring-black/5 z-50">
                  {searchQuery.length === 0 ? (
                    <>
                      <div className="px-3 py-1.5 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Popular Searches</div>
                      {["Acrylic Paints", "Watercolor Paint", "Studio Easels", "Marker Sets", "Sketch Pads"].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onMouseDown={() => {
                            setSearchQuery(item);
                            navigate(`/search?q=${encodeURIComponent(item)}`);
                            setShowSearchSuggestions(false);
                          }}
                          className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-zinc-50 text-zinc-700 font-medium hover:text-[#E31B23] transition-colors flex items-center gap-2 cursor-pointer"
                        >
                          <Search className="size-3.5 text-zinc-400" />
                          {item}
                        </button>
                      ))}
                    </>
                  ) : (
                    <>
                      <div className="px-3 py-1.5 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Suggestions</div>
                      {searchSuggestions.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onMouseDown={() => {
                            setSearchQuery(item);
                            navigate(`/search?q=${encodeURIComponent(item)}`);
                            setShowSearchSuggestions(false);
                          }}
                          className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-zinc-50 text-zinc-700 font-medium hover:text-[#E31B23] transition-colors flex items-center gap-2 cursor-pointer"
                        >
                          <Search className="size-3.5 text-zinc-400" />
                          {item}
                        </button>
                      ))}
                      {searchSuggestions.length === 0 && (
                        <div className="px-3 py-3 text-sm text-zinc-500 italic">No quick matches. Press search to browse.</div>
                      )}
                    </>
                  )}
                </div>
              )}
            </form>

            {/* Utility Actions */}
            <div className="flex items-center gap-2 sm:gap-4">

              {/* Stores (Desktop Only) */}
              <Link to="/stores" className="hidden flex-col items-center justify-center text-zinc-700 hover:text-[#E31B23] transition-colors lg:flex">
                <MapPin className="size-5" />
                <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Stores</span>
              </Link>

              {/* Blick Art Room (Desktop Only) */}
              {/* <a href="#art-room" className="hidden flex-col items-center justify-center text-zinc-700 hover:text-[#E31B23] transition-colors lg:flex">
                <Palette className="size-5" />
                <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Art Room</span>
              </a> */}

              {/* Account */}
              <Link
                to="/pages/sign-in"
                className="flex flex-col items-center justify-center text-zinc-700 hover:text-[#E31B23] transition-colors"
              >
                <User className="size-5" />
                <span className="text-[10px] font-bold uppercase tracking-wider mt-1 hidden sm:block">My Account</span>
              </Link>

              {/* Shopping Cart Button: SLIGHTLY DIFFERENT (Direct cart page redirect onClick, with badge glow) */}
              <button
                onClick={() => navigate("/cart")}
                className="group relative flex items-center gap-2.5 rounded-xl bg-zinc-50 border border-zinc-200 px-3.5 py-2 hover:bg-zinc-100 hover:border-[#E31B23]/30 transition-all cursor-pointer shadow-xs"
              >
                <div className="relative">
                  <ShoppingCart className="size-5 text-zinc-800 group-hover:text-[#E31B23] transition-colors" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -right-2.5 -top-2.5 flex size-5 items-center justify-center rounded-full bg-[#E31B23] text-[9px] font-bold text-white shadow-md animate-pulse ring-2 ring-white">
                      {cartItemsCount}
                    </span>
                  )}
                </div>
                <div className="hidden flex-col items-start leading-none sm:flex">
                  <span className="text-[8px] font-extrabold text-zinc-400 uppercase tracking-widest">My Cart</span>
                  <span className="text-xs font-black text-zinc-800 mt-0.5">${cartTotal.toFixed(2)}</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar (Visible on mobile only) */}
        <div className="block md:hidden border-b border-zinc-150 bg-white px-4 py-2">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search 110,000+ art supplies..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSearchSuggestions(true);
              }}
              onFocus={() => setShowSearchSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 205)}
              className="w-full rounded-xl border border-zinc-200 bg-zinc-100/60 py-2 pl-4 pr-12 text-sm text-zinc-800 outline-none transition-all placeholder:text-zinc-400 focus:border-[#E31B23] focus:bg-white focus:ring-4 focus:ring-[#E31B23]/5"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-lg bg-[#E31B23] p-1.5 text-white hover:bg-black transition-colors shadow-sm"
              aria-label="Search button"
            >
              <Search className="size-4" />
            </button>

            {/* Mobile Suggestions dropdown */}
            {showSearchSuggestions && (
              <div className="absolute left-0 right-0 mt-1.5 rounded-xl border border-zinc-100 bg-white p-2 shadow-xl ring-1 ring-black/5 z-50">
                {searchQuery.length === 0 ? (
                  <>
                    <div className="px-3 py-1.5 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Popular Searches</div>
                    {["Acrylic Paints", "Watercolor Paint", "Studio Easels", "Marker Sets", "Sketch Pads"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onMouseDown={() => {
                          setSearchQuery(item);
                          navigate(`/search?q=${encodeURIComponent(item)}`);
                          setShowSearchSuggestions(false);
                        }}
                        className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-zinc-50 text-zinc-700 font-medium hover:text-[#E31B23] transition-colors flex items-center gap-2 cursor-pointer"
                      >
                        <Search className="size-3.5 text-zinc-400" />
                        {item}
                      </button>
                    ))}
                  </>
                ) : (
                  <>
                    <div className="px-3 py-1.5 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Suggestions</div>
                    {searchSuggestions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onMouseDown={() => {
                          setSearchQuery(item);
                          navigate(`/search?q=${encodeURIComponent(item)}`);
                          setShowSearchSuggestions(false);
                        }}
                        className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-zinc-50 text-zinc-700 font-medium hover:text-[#E31B23] transition-colors flex items-center gap-2 cursor-pointer"
                      >
                        <Search className="size-3.5 text-zinc-400" />
                        {item}
                      </button>
                    ))}
                    {searchSuggestions.length === 0 && (
                      <div className="px-3 py-3 text-sm text-zinc-500 italic">No quick matches. Press search to browse.</div>
                    )}
                  </>
                )}
              </div>
            )}
          </form>
        </div>

        {/* Mobile Navigation Menu (Slide-down menu) */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden border-b border-zinc-150 bg-zinc-50 py-3">
            <div className="px-4 space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    goToTop();
                    if (link === "Paints") navigate("/category/paints");
                    else navigate(link === "More Categories" ? "/search" : `/search?category=${encodeURIComponent(link)}`);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider text-zinc-700 hover:text-[#E31B23] hover:bg-white rounded-lg transition-colors"
                >
                  {link}
                </button>
              ))}
              <button
                onClick={() => {
                  navigate("/pages/sign-in");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider text-zinc-700 hover:text-[#E31B23] hover:bg-white rounded-lg transition-colors border-t border-zinc-200 mt-2"
              >
                My Account
              </button>
              <button
                onClick={() => {
                  navigate("/stores");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider text-zinc-700 hover:text-[#E31B23] hover:bg-white rounded-lg transition-colors"
              >
                Find a Store
              </button>
              <a
                href="#sale"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-4 py-3 rounded-lg bg-[#E31B23] text-xs font-bold text-white uppercase tracking-wider hover:bg-black transition-all mt-2"
              >
                Sale & Clearance
              </a>
            </div>
          </nav>
        )}

        {/* Category Navigation Bar (Desktop Only): SLIGHTLY DIFFERENT (Finer top tab borders) */}
        <nav className="hidden border-b border-zinc-150 bg-[#141416] py-2.5 lg:block transition-all">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
              {NAVIGATION_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    goToTop();
                    if (link === "Paints") navigate("/category/paints");
                    else navigate(link === "More Categories" ? "/search" : `/search?category=${encodeURIComponent(link)}`);
                  }}
                  className="group relative text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors py-1 cursor-pointer"
                >
                  <span>{link}</span>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#E31B23] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#sale"
                className="rounded-lg bg-[#E31B23] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-[#E31B23] transition-all border border-[#E31B23] shadow-xs"
              >
                Sale & Clearance
              </a>
            </div>
          </div>
        </nav>


      </header>

      {/* Slide-out Drawer (Kept as supplementary modal overlay panel) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div onClick={() => setIsCartOpen(false)} className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity" />
          <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
            <div className="w-screen max-w-md transform transition-all bg-white shadow-2xl flex flex-col">

              {/* Drawer Header */}
              <div className="border-b border-zinc-100 px-6 py-5 flex items-center justify-between bg-zinc-50">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="size-5 text-[#E31B23]" />
                  <h2 className="text-lg font-bold text-zinc-900">Your Cart</h2>
                  <span className="rounded-full bg-zinc-200 text-zinc-800 text-xs px-2.5 py-0.5 font-bold">
                    {cartItemsCount}
                  </span>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="rounded-lg p-1.5 hover:bg-zinc-250 text-zinc-500 hover:text-zinc-800">
                  <X className="size-5" />
                </button>
              </div>



              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 divide-y divide-zinc-100">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-64 text-center py-12">
                    <ShoppingCart className="size-8 text-zinc-300 mb-2" />
                    <p className="text-base font-bold text-zinc-700">Your cart is empty</p>
                    <button onClick={() => setIsCartOpen(false)} className="mt-6 rounded-lg bg-[#E31B23] px-6 py-2 text-xs font-bold text-white hover:bg-black transition-all shadow-md">
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  cart.map((item, idx) => (
                    <div key={`${item.product.id}-${item.selectedOption || idx}`} className="py-4 flex gap-4">
                      <img src={item.product.image} alt={item.product.name} className="size-16 rounded-lg object-cover bg-zinc-50 border shrink-0" />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="text-xs font-bold text-zinc-900 line-clamp-1">{item.product.name}</h4>
                          <span className="text-xs font-bold text-zinc-900 ml-2">${(item.product.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <p className="text-[10px] text-zinc-400 mt-0.5">{item.product.category}</p>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-zinc-200 rounded bg-zinc-50 p-0.5">
                            <button onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedOption)} className="p-0.5 rounded text-zinc-500 hover:bg-white hover:text-zinc-800">
                              <Minus className="size-3" />
                            </button>
                            <span className="px-2 text-xs font-bold text-zinc-800">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedOption)} className="p-0.5 rounded text-zinc-500 hover:bg-white hover:text-zinc-800">
                              <Plus className="size-3" />
                            </button>
                          </div>
                          <button onClick={() => removeFromCart(item.product.id, item.selectedOption)} className="text-zinc-400 hover:text-red-500">
                            <Trash2 className="size-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="border-t border-zinc-100 bg-zinc-50 p-6 space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-zinc-500">
                      <span>Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold text-zinc-900">
                      <span>Total Est.</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      navigate("/cart");
                      setIsCartOpen(false);
                    }}
                    className="w-full py-3 rounded-lg bg-[#E31B23] text-xs font-bold text-white hover:bg-black transition-all shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>View Shopping Cart Page</span>
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
