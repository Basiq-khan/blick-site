import { useState } from "react";
import { 
  Heart, 
  ShoppingCart, 
  Check, 
  Plus, 
  Minus, 
  Star, 
  ChevronDown, 
  ChevronRight, 
  ArrowLeft,
  ShieldCheck,
  MapPin,
  Tag,
  Share2
} from "lucide-react";
import type { Product } from "../data/products";
import { cn } from "@/lib/utils";

// Mock Product specifically matching the screenshot details
export const PERMANENT_MARKER_PRODUCT: Product = {
  id: "pm-24",
  name: "Permanent Marker Set 24-Color Fine Tip Set",
  category: "Markers Liquidation",
  price: 11.42,
  originalPrice: 26.99,
  rating: 4.8,
  reviewsCount: 142,
  image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80",
  description: "Vibrant permanent marker set featuring 24 brilliant assorted colors. Quick-drying, fade-resistant ink is water-resistant and works perfectly on metal, glass, plastic, and paper surfaces.",
  discount: "SAVE 57% off List!",
  options: ["Assorted 24-Color Set", "Primary 12-Color Set"]
};

// Thumbnail gallery images
// const GALLERY_IMAGES = [
//   "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80", // Main markers set
//   "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=800&q=80", // Swatches/details
//   "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80", // Hand drawing calligraphy
//   "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&w=800&q=80"  // Art desk styling
// ];

import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ALL_PRODUCTS } from "../data/products";

export default function ProductDetail() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { productId } = useParams();

  const product = ALL_PRODUCTS.find(p => p.id === productId) || PERMANENT_MARKER_PRODUCT;
  const [activeImage, ] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(product.options?.[0] || "");
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<"details" | "specs" | "reviews">("details");
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [isSaveLaterOpen, setIsSaveLaterOpen] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    addToCart(product, selectedOption);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleQtyChange = (val: number) => {
    if (val < 1) return;
    setQuantity(val);
  };

  return (
    <div className="bg-white min-h-screen">


      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        
        {/* Sleek Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mb-6 bg-zinc-50/65 py-2 px-3.5 rounded-full border border-zinc-100/50 w-fit">
          <Link to="/" className="hover:text-[#E31B23] transition-colors">Home</Link>
          <ChevronRight className="size-3 text-zinc-300" />
          <span className="hover:text-zinc-600 cursor-pointer">MacPherson Overstock Liquidation Sale</span>
          <ChevronRight className="size-3 text-zinc-300" />
          <span className="hover:text-zinc-600 cursor-pointer">Drawing and Illustration Liquidation</span>
          <ChevronRight className="size-3 text-zinc-300" />
          <span className="hover:text-zinc-600 cursor-pointer">Markers Liquidation</span>
          <ChevronRight className="size-3 text-zinc-300" />
          <span className="text-[#E31B23] font-bold">Art Alternatives Markers Liquidation</span>
        </nav>

        {/* Two-Column Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Gallery View (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Main Interactive Preview */}
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm group">
              <img 
                src={activeImage} 
                alt={PERMANENT_MARKER_PRODUCT.name} 
                className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute left-3 top-3 bg-red-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow-md">
                LIQUIDATION
              </div>
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={cn(
                  "absolute right-3 top-3 p-2.5 rounded-full border bg-white/95 backdrop-blur-xs transition-all shadow-md",
                  isWishlisted ? "text-red-500 border-red-200" : "text-zinc-400 hover:text-red-500 border-zinc-150"
                )}
                aria-label="Wishlist button"
              >
                <Heart className="size-4.5 fill-current" />
              </button>
            </div>

            {/* Thumbnail Circle / Round-Corner Grid */}
            {/* <div className="grid grid-cols-4 gap-3">
              {GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={cn(
                    "aspect-square rounded-xl overflow-hidden border-2 bg-zinc-50 transition-all shadow-xs hover:border-[#E31B23]/40",
                    activeImage === img ? "border-[#E31B23] ring-2 ring-[#E31B23]/10" : "border-zinc-200"
                  )}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="size-full object-cover" />
                </button>
              ))}
            </div> */}
            
            <p className="text-[11px] text-zinc-400 text-center font-medium italic mt-2">
              Hover image to zoom. Click thumbnails to inspect colors.
            </p>
          </div>

          {/* RIGHT COLUMN: Product Info & Purchase Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Back Action Link */}
            <button 
              onClick={() => navigate("/")} 
              className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#E31B23] hover:text-black transition-colors"
            >
              <ArrowLeft className="size-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span className="underline uppercase tracking-wider">See All Art Alternatives Markers Liquidation</span>
            </button>

            {/* Title */}
            <div className="space-y-1.5">
              <h1 className="text-2xl sm:text-3xl font-black text-zinc-950 leading-tight">
                {product.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-zinc-500">
                <span>Item #: <strong className="text-zinc-800">{product.id}</strong></span>
                <span className="text-zinc-300">|</span>
                <button className="text-[#E31B23] hover:underline uppercase tracking-wider text-[11px]">
                  VIEW PRODUCT DETAILS
                </button>
                <span className="text-zinc-300">|</span>
                <div className="flex items-center text-amber-500 gap-1">
                  <Star className="size-3.5 fill-current" />
                  <span className="text-zinc-700 font-extrabold">{product.rating}</span>
                  <span className="text-zinc-400 font-medium">({product.reviewsCount} reviews)</span>
                </div>
              </div>
            </div>



            {/* Pricing Section */}
            <div className="bg-zinc-50 rounded-2xl p-5 border border-zinc-150/70 space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-bold text-zinc-700">Price:</span>
                <span className="text-3xl font-black text-[#E31B23]">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* PayPal Buy Now Pay Later */}
              <div className="flex items-center gap-3 border-t border-zinc-200/80 pt-3 text-xs text-zinc-600">
                <div className="bg-blue-600 text-white font-black italic px-2 py-0.5 rounded text-[10px] tracking-tight uppercase shadow-xs">
                  PayPal
                </div>
                <span>
                  Pay in 4 interest-free payments of <strong className="text-zinc-800">$2.85</strong>.{" "}
                  <button className="text-blue-600 font-bold hover:underline">Learn More</button>
                </span>
              </div>
            </div>

            {/* Style selectors */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block">
                Select Set Type:
              </label>
              <div className="flex flex-wrap gap-2">
                {product.options?.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedOption(opt)}
                    className={cn(
                      "rounded-lg border px-3 py-1.5 text-xs font-bold transition-all shadow-xs",
                      selectedOption === opt
                        ? "border-[#E31B23] bg-[#E31B23]/5 text-[#E31B23]"
                        : "border-zinc-250 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Add to Cart Container */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              
              {/* Qty Panel */}
              <div className="flex items-center justify-between border border-zinc-250 rounded-xl bg-zinc-50 p-1 shrink-0">
                <button
                  onClick={() => handleQtyChange(quantity - 1)}
                  className="p-2 rounded-lg hover:bg-white text-zinc-500 hover:text-zinc-800 transition-colors"
                  aria-label="Decrease qty"
                >
                  <Minus className="size-4" />
                </button>
                <input 
                  type="text" 
                  value={quantity}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val) && val > 0) setQuantity(val);
                  }}
                  className="w-12 text-center text-sm font-black text-zinc-800 bg-transparent border-none outline-none"
                />
                <button
                  onClick={() => handleQtyChange(quantity + 1)}
                  className="p-2 rounded-lg hover:bg-white text-zinc-500 hover:text-zinc-800 transition-colors"
                  aria-label="Increase qty"
                >
                  <Plus className="size-4" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className={cn(
                  "flex-1 py-3.5 px-6 rounded-xl text-sm font-black text-white transition-all shadow-lg flex items-center justify-center gap-2 transform active:scale-98 cursor-pointer uppercase tracking-wider",
                  isAdded
                    ? "bg-emerald-500 shadow-emerald-100 hover:bg-emerald-600"
                    : "bg-[#E31B23] hover:bg-[#c9141b] shadow-red-100"
                )}
              >
                {isAdded ? (
                  <>
                    <Check className="size-5 animate-bounce" />
                    <span>Added to Order!</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="size-5" />
                    <span>Add to Cart</span>
                  </>
                )}
              </button>
            </div>

            {/* In-Stock Online Alert */}
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 py-1">
              <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
              <span>✓ In stock online — Ships in 24 hours</span>
            </div>

            {/* Interactive Availability and Save Dropdowns */}
            <div className="space-y-2 border-t border-zinc-200 pt-4">
              
              {/* Check Store Availability */}
              <div className="border border-zinc-200 rounded-xl overflow-hidden bg-zinc-50/50">
                <button 
                  onClick={() => setIsAvailabilityOpen(!isAvailabilityOpen)}
                  className="w-full px-4 py-3 flex items-center justify-between text-xs font-bold text-zinc-700 hover:bg-zinc-100/60 transition-colors"
                >
                  <span className="flex items-center gap-2 text-zinc-800 font-extrabold">
                    <MapPin className="size-4 text-[#E31B23]" />
                    <span>Check Store Availability</span>
                  </span>
                  <ChevronDown className={cn("size-4 text-zinc-400 transition-transform", isAvailabilityOpen && "rotate-180")} />
                </button>
                {isAvailabilityOpen && (
                  <div className="px-4 pb-4.5 pt-1.5 text-xs text-zinc-500 space-y-2 border-t border-zinc-100">
                    <p>Enter your ZIP Code to check local warehouse stock:</p>
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        placeholder="ZIP Code..." 
                        className="rounded-lg border border-zinc-300 px-3 py-1.5 text-xs w-28 bg-white outline-none focus:border-[#E31B23]"
                      />
                      <button className="bg-zinc-950 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg hover:bg-[#E31B23] transition-colors">
                        CHECK NOW
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Save For Later */}
              <div className="border border-zinc-200 rounded-xl overflow-hidden bg-zinc-50/50">
                <button 
                  onClick={() => setIsSaveLaterOpen(!isSaveLaterOpen)}
                  className="w-full px-4 py-3 flex items-center justify-between text-xs font-bold text-zinc-700 hover:bg-zinc-100/60 transition-colors"
                >
                  <span className="flex items-center gap-2 text-zinc-800 font-extrabold">
                    <Heart className="size-4 text-zinc-400" />
                    <span>Save For Later / Add to Lists</span>
                  </span>
                  <ChevronDown className={cn("size-4 text-zinc-400 transition-transform", isSaveLaterOpen && "rotate-180")} />
                </button>
                {isSaveLaterOpen && (
                  <div className="px-4 pb-4.5 pt-1.5 text-xs text-zinc-500 space-y-2 border-t border-zinc-100">
                    <button className="w-full text-left py-2 px-2.5 rounded hover:bg-zinc-100 text-zinc-700 font-bold flex items-center justify-between">
                      <span>Save for Later (Move to wishlist)</span>
                      <ChevronRight className="size-3 text-zinc-400" />
                    </button>
                    <button className="w-full text-left py-2 px-2.5 rounded hover:bg-zinc-100 text-zinc-700 font-bold flex items-center justify-between border-t border-zinc-100">
                      <span>Create New Custom Art List</span>
                      <ChevronRight className="size-3 text-zinc-400" />
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* Badges icons block */}
            <div className="flex items-center gap-6 pt-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              <div className="flex items-center gap-1.5">
                <Tag className="size-4 text-[#E31B23]" />
                <span>Best Price Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-emerald-500" />
                <span>Authorized Retailer</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Share2 className="size-4 text-sky-400" />
                <span>Share Deal</span>
              </div>
            </div>

          </div>
        </div>

        {/* Product Details Tabs Section */}
        <div className="mt-16 border border-zinc-200 rounded-2xl overflow-hidden bg-white shadow-xs">
          
          {/* Tab Headers */}
          <div className="flex border-b border-zinc-200 bg-zinc-50/80">
            <button
              onClick={() => setActiveTab("details")}
              className={cn(
                "px-6 py-4.5 text-xs font-black uppercase tracking-wider transition-all border-b-2",
                activeTab === "details"
                  ? "border-[#E31B23] bg-white text-zinc-950"
                  : "border-transparent text-zinc-500 hover:text-zinc-800"
              )}
            >
              Product Details
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={cn(
                "px-6 py-4.5 text-xs font-black uppercase tracking-wider transition-all border-b-2",
                activeTab === "specs"
                  ? "border-[#E31B23] bg-white text-zinc-950"
                  : "border-transparent text-zinc-500 hover:text-zinc-800"
              )}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={cn(
                "px-6 py-4.5 text-xs font-black uppercase tracking-wider transition-all border-b-2",
                activeTab === "reviews"
                  ? "border-[#E31B23] bg-white text-zinc-950"
                  : "border-transparent text-zinc-500 hover:text-zinc-800"
              )}
            >
              Reviews ({product.reviewsCount})
            </button>
          </div>

          {/* Tab Content Box */}
          <div className="p-6 sm:p-8">
            {activeTab === "details" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Specs summary details block (4 columns) */}
                <div className="md:col-span-4 space-y-4 border-r border-zinc-150 pr-6">
                  <h4 className="text-sm font-black text-zinc-900 uppercase tracking-wide">Key Features</h4>
                  <div className="space-y-2.5 text-xs">
                    <div className="flex justify-between py-1 border-b border-zinc-100">
                      <span className="text-zinc-400 font-bold uppercase tracking-wider">Description:</span>
                      <span className="text-zinc-700 font-bold">Permanent Marker Set of 24</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-zinc-100">
                      <span className="text-zinc-400 font-bold uppercase tracking-wider">Color Family:</span>
                      <span className="text-zinc-700 font-bold">Assorted</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-zinc-400 font-bold uppercase tracking-wider">Tip Size:</span>
                      <span className="text-zinc-700 font-bold">Fine Point</span>
                    </div>
                  </div>
                  
                  <button className="group inline-flex items-center gap-1 text-[11px] font-black text-[#E31B23] hover:underline uppercase tracking-wider">
                    <span>See All Art Alternatives Markers</span>
                    <ChevronRight className="size-3" />
                  </button>
                </div>

                {/* Rich prose descriptions block (8 columns) */}
                <div className="md:col-span-8 text-xs text-zinc-500 space-y-4 leading-relaxed">
                  <p>
                    {product.description}
                  </p>
                  <p className="font-bold text-zinc-700">
                    Art Alternatives markers are non-toxic, ACMI AP certified, and feature durable caps that represent matching pigment families for simple studio coordination.
                  </p>
                </div>

              </div>
            )}

            {activeTab === "specs" && (
              <div className="space-y-4 text-xs text-zinc-500">
                <h4 className="text-sm font-black text-zinc-900 uppercase tracking-wide">Technical Specifications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                  <div className="space-y-2">
                    <div className="flex justify-between border-b border-zinc-100 pb-2">
                      <span className="font-bold text-zinc-400">Brand:</span>
                      <span className="font-bold text-zinc-800">Art Alternatives</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-100 pb-2">
                      <span className="font-bold text-zinc-400">Ink Formulation:</span>
                      <span className="font-bold text-zinc-800">Alcohol-Based</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="font-bold text-zinc-400">AP Certified:</span>
                      <span className="font-bold text-zinc-850">Yes, Non-Toxic</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between border-b border-zinc-100 pb-2">
                      <span className="font-bold text-zinc-400">Number of Colors:</span>
                      <span className="font-bold text-zinc-800">24 Assorted</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-100 pb-2">
                      <span className="font-bold text-zinc-400">Country of Origin:</span>
                      <span className="font-bold text-zinc-800">United States</span>
                    </div>
                    <div className="flex justify-between pb-2">
                      <span className="font-bold text-zinc-400">Shipping Weight:</span>
                      <span className="font-bold text-zinc-800">0.65 lbs</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-zinc-150 pb-6">
                  <div className="text-center">
                    <div className="text-4xl font-black text-zinc-950">4.8</div>
                    <div className="flex text-amber-500 justify-center mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-4 fill-current" />
                      ))}
                    </div>
                    <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Product Average</div>
                  </div>
                  <div className="flex-1 max-w-xs space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-8 text-zinc-400 font-bold">5 star</span>
                      <div className="flex-1 h-2 rounded bg-zinc-100 overflow-hidden">
                        <div className="h-full bg-amber-500 w-[85%]" />
                      </div>
                      <span className="w-8 text-zinc-400 font-bold text-right">85%</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-8 text-zinc-400 font-bold">4 star</span>
                      <div className="flex-1 h-2 rounded bg-zinc-100 overflow-hidden">
                        <div className="h-full bg-amber-500 w-[12%]" />
                      </div>
                      <span className="w-8 text-zinc-400 font-bold text-right">12%</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="w-8 text-zinc-400 font-bold">3 star</span>
                      <div className="flex-1 h-2 rounded bg-zinc-100 overflow-hidden">
                        <div className="h-full bg-amber-500 w-[3%]" />
                      </div>
                      <span className="w-8 text-zinc-400 font-bold text-right">3%</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 divide-y divide-zinc-100">
                  <div className="pt-4 space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-amber-500 gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="size-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-zinc-400 font-bold">May 12, 2026</span>
                    </div>
                    <h5 className="font-extrabold text-zinc-800">Sensational Permanent Markers!</h5>
                    <p className="text-zinc-500">I used this set to outline a large watercolor canvas. The ink dries instantly and doesn't bleed even when I paint over it! Absolutely unbeatable price at 57% off.</p>
                    <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">— Verified Artist</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
