import { useState } from "react";
import { 
  Trash2, 
  Plus, 
  Minus, 
  Phone, 
  ChevronLeft, 
  ChevronRight, 
  Star,
  CheckCircle,
  AlertTriangle,
  Download,
  Printer
} from "lucide-react";
import type { Product } from "../data/products";

// Mock data for frequently bought together matching screenshots
const FREQUENTLY_BOUGHT_PRODUCTS: Product[] = [
  {
    id: "fbt-1",
    name: "Blick Studio Artists' Colored Pencil Set - Set of 12, Assorted Colors",
    category: "Sketchpads & Paper",
    price: 11.58,
    originalPrice: 21.05,
    rating: 4.8,
    reviewsCount: 1541,
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=300&q=80",
    description: "Highly pigmented break-resistant artists' pencils.",
    discount: "SAVE up to 45% off List!"
  },
  {
    id: "fbt-2",
    name: "Blick Studio Drawing Pencils - Set of 12",
    category: "Drafting & Drawing",
    price: 15.10,
    originalPrice: 27.45,
    rating: 4.9,
    reviewsCount: 4776,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=300&q=80",
    description: "Ideal pencil grades for fine sketching and high-detail illustrations.",
    discount: "SAVE up to 45% off List!"
  },
  {
    id: "fbt-3",
    name: "Sakura Cray-Pas Expressionist Oil Pastel Sets - Set of 12",
    category: "General Art & Craft Supplies",
    price: 5.86,
    originalPrice: 7.71,
    rating: 4.7,
    reviewsCount: 1187,
    image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=300&q=80",
    description: "Buttery soft pastels perfect for blending, scratching, and wash overlay techniques.",
    discount: "SAVE up to 24% off List!"
  },
  {
    id: "fbt-4",
    name: "Sakura Pigma Micron Pens - Set of 6, Black, Extra Fine and Fine",
    category: "Markers",
    price: 17.43,
    originalPrice: 30.58,
    rating: 4.8,
    reviewsCount: 11079,
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=300&q=80",
    description: "Archival pigment ink pens with exceptional bleed-free definition.",
    discount: "SAVE up to 43% off List!"
  },
  {
    id: "fbt-5",
    name: "Blickrylic Student Acrylics - Titanium White, Half Gallon",
    category: "Acrylic Paint",
    price: 20.63,
    originalPrice: 27.14,
    rating: 4.6,
    reviewsCount: 7894,
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=300&q=80",
    description: "High density paint formulated for classrooms and large student mural projects.",
    discount: "SAVE up to 24% off List!"
  }
];

import {useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, addToCart } = useCart();
  const [quickAddItem, setQuickAddItem] = useState("");
  const [quickAddQty, setQuickAddQty] = useState(1);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [quickAddMessage, setQuickAddMessage] = useState("");

  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  


  const shippingThreshold = 75;
  const awayFromFreeShipping = Math.max(0, shippingThreshold - cartTotal);

  const handleQuickAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickAddItem) return;
    
    // Simulate finding a matching marker set or sketchbook by item number
    const mockFoundProduct: Product = {
      id: "quick-added",
      name: `Permanent Marker Set 24-Color Fine Tip Set (${quickAddItem})`,
      category: "Markers",
      price: 11.42,
      originalPrice: 26.99,
      rating: 4.8,
      reviewsCount: 142,
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&q=80",
      description: "Quick-added via Item search.",
      options: ["Assorted"]
    };

    addToCart(mockFoundProduct, "Assorted");
    setQuickAddMessage(`✓ Added item ${quickAddItem} to cart!`);
    setQuickAddItem("");
    setTimeout(() => setQuickAddMessage(""), 3000);
  };

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % (FREQUENTLY_BOUGHT_PRODUCTS.length - 2));
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + (FREQUENTLY_BOUGHT_PRODUCTS.length - 2)) % (FREQUENTLY_BOUGHT_PRODUCTS.length - 2));
  };

  return (
    <div className="bg-zinc-50 min-h-screen py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Title & Utility Header */}
        <div className="border-b border-zinc-200 pb-5 mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-black text-zinc-950 uppercase tracking-wide">
              Shopping Cart
            </h1>
            <p className="text-xs text-zinc-500 font-bold tracking-wide flex items-center gap-1.5">
              <button onClick={() => navigate("/")} className="text-red-600 hover:underline">Sign In</button>
              <span>or</span>
              <button onClick={() => navigate("/")} className="text-red-600 hover:underline">Create Account</button>
              <span className="text-zinc-300">|</span>
              <span>Save items in your cart for later.</span>
            </p>
          </div>

          {/* Cart Download / Print utilities */}
          <div className="flex items-center gap-4 text-xs font-bold text-zinc-600 uppercase tracking-wider">
            <button className="flex items-center gap-1.5 hover:text-[#E31B23] transition-colors">
              <Printer className="size-4" />
              <span>Print Cart</span>
            </button>
            <span className="text-zinc-200">|</span>
            <button className="flex items-center gap-1.5 hover:text-[#E31B23] transition-colors">
              <Download className="size-4" />
              <span>Download Cart</span>
            </button>
          </div>
        </div>

        {/* Quick Add Form Section */}
        <div className="bg-white rounded-2xl p-5 border border-zinc-200 shadow-xs mb-8">
          <form onSubmit={handleQuickAddSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <span className="text-xs font-black text-zinc-800 uppercase tracking-wider">
              Quick Add:
            </span>
            <input 
              type="text" 
              placeholder="Add By Item # (e.g. 76044-0317)"
              value={quickAddItem}
              onChange={(e) => setQuickAddItem(e.target.value)}
              className="flex-1 rounded-lg border border-zinc-350 bg-zinc-50 px-3.5 py-2 text-xs text-zinc-800 outline-none focus:border-[#E31B23] focus:bg-white placeholder:text-zinc-400"
            />
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-zinc-400 uppercase">Qty</span>
              <input 
                type="number" 
                value={quickAddQty}
                onChange={(e) => setQuickAddQty(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-12 text-center rounded-lg border border-zinc-350 py-2 text-xs font-bold bg-zinc-50 outline-none"
              />
            </div>
            <button 
              type="submit"
              className="bg-[#E31B23] hover:bg-[#c9141b] text-white text-xs font-black uppercase px-6 py-2.5 rounded-lg shadow-md transition-colors"
            >
              + Add
            </button>
          </form>
          {quickAddMessage && <span className="text-xs font-bold text-emerald-600 block mt-2">{quickAddMessage}</span>}
        </div>

        {/* Main Cart Grid (Two Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Items List (8 Columns) */}
          <div className="lg:col-span-8 space-y-6">
            
            {cart.length === 0 ? (
              <div className="bg-white rounded-2xl border border-zinc-200 p-12 text-center space-y-4 shadow-xs">
                <p className="text-base font-extrabold text-zinc-700">Your shopping cart is currently empty</p>
                <p className="text-xs text-zinc-400 max-w-sm mx-auto">Fill it with high-grade sketch pads, permanent marker sets, oils, brushes and make something incredible!</p>
                <button 
                  onClick={() => navigate("/")}
                  className="rounded-xl bg-[#E31B23] px-6 py-3 text-xs font-black text-white hover:bg-black uppercase tracking-widest transition-colors shadow-lg"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-xs divide-y divide-zinc-200">
                {cart.map((item, idx) => (
                  <div key={`${item.product.id}-${item.selectedOption || idx}`} className="p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                    
                    {/* Thumbnail Image */}
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="size-20 rounded-xl object-cover bg-zinc-50 border border-zinc-200 shrink-0"
                    />

                    {/* Text info and options */}
                    <div className="flex-1 space-y-2">
                      <div className="space-y-1">
                        <h4 className="text-sm font-black text-zinc-950 hover:text-[#E31B23] transition-colors leading-snug cursor-pointer">
                          {item.product.name}
                        </h4>
                        <div className="flex flex-wrap items-center gap-x-3 text-[10px] font-bold text-zinc-400 uppercase tracking-wide">
                          <span>Part #: {item.product.id === "pm-24" ? "76044-0317" : item.product.id}</span>
                          {item.selectedOption && (
                            <>
                              <span className="text-zinc-200">|</span>
                              <span className="bg-zinc-100 text-zinc-600 px-1.5 py-0.5 rounded">Style: {item.selectedOption}</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Stock / Discontinued status warning */}
                      {item.product.id === "pm-24" ? (
                        <div className="flex items-center gap-1.5 text-xs text-amber-800 font-extrabold bg-amber-50 rounded-lg py-1.5 px-3 border border-amber-100/60 w-fit">
                          <AlertTriangle className="size-4 text-[#E31B23]" />
                          <span>Discontinued, Order Soon.</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                          <CheckCircle className="size-3.5" />
                          <span>In Stock & Ready to Ship</span>
                        </div>
                      )}

                      {/* Move / Save links */}
                      <div className="flex items-center gap-3 text-xs font-bold text-zinc-400">
                        <button className="hover:text-zinc-700 transition-colors uppercase tracking-wider text-[10px]">Save for Later</button>
                        <span className="text-zinc-200">|</span>
                        <button className="hover:text-zinc-700 transition-colors uppercase tracking-wider text-[10px]">Move to List</button>
                      </div>
                    </div>

                    {/* Price and Qty Adjuster Panel */}
                    <div className="flex sm:flex-col items-end justify-between sm:justify-start w-full sm:w-auto gap-4 sm:gap-2">
                      <div className="text-right">
                        <span className="text-base font-black text-zinc-950">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                        {item.quantity > 1 && (
                          <span className="block text-[10px] text-zinc-400 font-bold">
                            (${item.product.price.toFixed(2)} each)
                          </span>
                        )}
                      </div>

                      {/* Adjuster */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-zinc-200 rounded-lg bg-zinc-50 p-0.5">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedOption)}
                            className="p-1 rounded text-zinc-500 hover:bg-white hover:text-zinc-800 transition-colors"
                            aria-label="Reduce quantity"
                          >
                            <Minus className="size-3" />
                          </button>
                          <span className="px-3 text-xs font-black text-zinc-800">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedOption)}
                            className="p-1 rounded text-zinc-500 hover:bg-white hover:text-zinc-800 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="size-3" />
                          </button>
                        </div>

                        <button 
                          onClick={() => removeFromCart(item.product.id, item.selectedOption)}
                          className="text-zinc-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            )}

            {/* Back shopping button */}
            <button 
              onClick={() => navigate("/")} 
              className="text-xs font-black text-[#E31B23] hover:underline uppercase tracking-wider flex items-center gap-1"
            >
              <ChevronLeft className="size-4" />
              <span>Continue Shopping</span>
            </button>

          </div>

          {/* RIGHT COLUMN: Sidebar Order Summary (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Summary Card */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-xs space-y-5">
              <h3 className="text-base font-black text-zinc-950 uppercase tracking-wide border-b border-zinc-100 pb-3">
                Your Order ({totalItemsCount} Items)
              </h3>

              <div className="space-y-3 text-xs text-zinc-600">
                <div className="flex justify-between items-center">
                  <span>Subtotal:</span>
                  <span className="font-bold text-zinc-900">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Estimated Shipping:</span>
                  <span className="font-bold text-zinc-900">
                    {awayFromFreeShipping === 0 ? "FREE" : "$7.99"}
                  </span>
                </div>
                


                <div className="flex justify-between items-center pt-3 border-t border-zinc-100 text-sm font-black text-zinc-900">
                  <span>Pre-Tax Total:</span>
                  <span>${(cartTotal + (awayFromFreeShipping === 0 ? 0 : 7.99)).toFixed(2)}</span>
                </div>
              </div>



              {/* Action checkout buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => navigate("/checkout")}
                  disabled={cart.length === 0}
                  className="w-full bg-[#E31B23] hover:bg-[#c9141b] text-white text-xs font-black uppercase py-3.5 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 transform active:scale-97 disabled:opacity-50"
                >
                  Checkout Now
                </button>
                
                <div className="relative text-center py-1">
                  <span className="absolute inset-x-0 top-1/2 h-px bg-zinc-200 -translate-y-1/2" />
                  <span className="relative bg-white px-2.5 text-[10px] font-bold text-zinc-400 uppercase">OR</span>
                </div>

                {/* PayPal Express */}
                <button 
                  onClick={() => navigate("/checkout")}
                  disabled={cart.length === 0}
                  className="w-full bg-amber-400 hover:bg-amber-500 text-zinc-800 text-xs font-black uppercase py-3 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50"
                >
                  <span className="text-blue-700 font-extrabold italic lowercase text-sm tracking-tighter">Paypal</span>
                  <span className="text-zinc-700 font-bold text-[10px] lowercase">Checkout</span>
                </button>

                {/* School Account */}
                <button 
                  onClick={() => navigate("/checkout")}
                  disabled={cart.length === 0}
                  className="w-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-xs font-black uppercase py-3.5 rounded-xl border border-zinc-200 transition-colors disabled:opacity-50"
                >
                  School or Business Account
                </button>
              </div>
            </div>

            {/* Can We Help Info Card */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-xs space-y-4">
              <h4 className="text-xs font-black text-zinc-950 uppercase tracking-widest flex items-center gap-1.5">
                <Phone className="size-4 text-[#E31B23]" />
                <span>Can We Help?</span>
              </h4>
              <div className="space-y-2 text-xs">
                <p className="text-zinc-600 font-semibold">
                  Call customer support toll-free:
                </p>
                <a href="tel:18008284548" className="text-base font-black text-zinc-900 hover:text-[#E31B23]">
                  1-800-828-4548
                </a>
                
                {/* Custom Card Icons block */}
                <div className="flex items-center gap-2 pt-2 border-t border-zinc-100">
                  <div className="h-6 w-9 rounded bg-blue-700 text-white flex items-center justify-center font-bold italic text-[9px] uppercase tracking-tighter shadow-xs">Visa</div>
                  <div className="h-6 w-9 rounded bg-red-600 text-white flex items-center justify-center font-bold italic text-[9px] uppercase tracking-tighter shadow-xs">MC</div>
                  <div className="h-6 w-9 rounded bg-amber-500 text-white flex items-center justify-center font-bold italic text-[9px] uppercase tracking-tighter shadow-xs">Amex</div>
                  <div className="h-6 w-9 rounded bg-sky-500 text-white flex items-center justify-center font-bold italic text-[9px] uppercase tracking-tighter shadow-xs">Disc</div>
                </div>
                
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-1">
                  We ship to the US and internationally.
                </p>
              </div>

              {/* Sidebar Helper Links */}
              <ul className="space-y-1.5 border-t border-zinc-100 pt-3 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                <li><a href="#status" className="hover:text-[#E31B23]">Order Status / Past Orders</a></li>
                <li><a href="#promos" className="hover:text-[#E31B23]">Promo Codes & Free Shipping Details</a></li>
                <li><a href="#tax" className="hover:text-[#E31B23]">Sales Tax & Tax Exemptions</a></li>
                <li><a href="#quote" className="hover:text-[#E31B23]">Purchase Orders & Quotes</a></li>
                <li><a href="#shipping" className="hover:text-[#E31B23]">Shipping & Returns Information</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Carousel Bottom: Frequently Bought Together */}
        <div className="mt-16 bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between border-b border-zinc-200 pb-4 mb-6">
            <h3 className="text-base sm:text-lg font-black text-zinc-950 uppercase tracking-wide">
              Frequently Bought Together
            </h3>
            <div className="flex items-center gap-2">
              <button 
                onClick={prevCarousel}
                className="p-1.5 rounded-lg border border-zinc-250 hover:bg-zinc-50 text-zinc-600 transition-colors"
                aria-label="Previous suggestions"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button 
                onClick={nextCarousel}
                className="p-1.5 rounded-lg border border-zinc-250 hover:bg-zinc-50 text-zinc-600 transition-colors"
                aria-label="Next suggestions"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Interactive Carousel Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {FREQUENTLY_BOUGHT_PRODUCTS.slice(carouselIndex, carouselIndex + 3).map((prod) => (
              <div key={prod.id} className="group flex flex-col justify-between rounded-xl border border-zinc-150 p-4 bg-zinc-50/50 hover:shadow-lg transition-all duration-300">
                <div className="space-y-3">
                  {/* Thumbnail aspect-video */}
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-white border border-zinc-200">
                    <img src={prod.image} alt={prod.name} className="size-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xs font-black text-zinc-900 leading-snug line-clamp-2 group-hover:text-[#E31B23] transition-colors cursor-pointer">
                      {prod.name}
                    </h4>
                    
                    <div className="flex items-center text-amber-500 gap-1">
                      <Star className="size-3 fill-current" />
                      <span className="text-[10px] font-extrabold text-zinc-700">{prod.rating}</span>
                      <span className="text-[9px] text-zinc-400">({prod.reviewsCount})</span>
                    </div>

                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-sm font-black text-[#E31B23]">${prod.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(prod)}
                  className="mt-4 w-full bg-zinc-950 hover:bg-[#E31B23] text-white text-[11px] font-black uppercase py-2.5 rounded-lg transition-all shadow-xs transform active:scale-97"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
