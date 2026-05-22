import { ArrowRight, Flame, Sparkles, Percent, Tag } from "lucide-react";
import { Link } from "react-router-dom";

export default function PromoHero() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 bg-zinc-50">
      <div className="mx-auto max-w-7xl">
        
        {/* Main Grid Layout: SLIGHTLY DIFFERENT (More refined spacing, double borders, glass overlays) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:grid-rows-2">
          
          {/* 1. Watercolor, Uncapped (Left Column - Spans 2 Rows on Desktop) */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#e0f2fe] via-[#bae6fd] to-[#bae6fd] p-8 flex flex-col justify-between min-h-[440px] lg:col-span-1 lg:row-span-2 shadow-sm border border-sky-200/60 outline outline-4 outline-sky-50/30 hover:shadow-xl hover:outline-sky-100/50 transition-all duration-550">
            {/* Background art element */}
            <div className="absolute right-0 top-0 h-64 w-64 bg-[url('https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=400&q=80')] bg-cover opacity-25 group-hover:scale-108 transition-transform duration-700 rounded-bl-full pointer-events-none" />
            
            {/* Floating micro-badge: SLIGHTLY DIFFERENT (Glassmorphic dark styling) */}
            <div className="relative flex items-center gap-1.5 self-start rounded-full bg-zinc-950/90 backdrop-blur-xs px-3 py-1.5 text-[9px] font-bold text-white uppercase tracking-widest shadow-md">
              <Sparkles className="size-3 text-yellow-400 animate-spin" />
              <span>Artist Pick</span>
            </div>

            <div className="relative mt-8 space-y-4">
              <h3 className="text-3xl font-black text-zinc-950 leading-tight">
                Watercolor,<br />Uncapped
              </h3>
              <p className="text-xs font-bold text-sky-900 leading-relaxed max-w-[220px]">
                For professional artists, student sketchers, and everyone in-between.
              </p>
            </div>

            <div className="relative mt-12 space-y-3">
              <Link
                to="/product/brushes-and-painting-tools"
                className="inline-flex items-center gap-2 rounded-xl bg-[#E31B23] px-6 py-3 text-xs font-black text-white hover:bg-black transition-all shadow-md group-hover:-translate-y-0.5"
              >
                <span>Shop Watercolors</span>
                <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="text-[10px] font-extrabold text-[#E31B23] tracking-widest uppercase">SAVE UP TO 30% ON SETS</div>
            </div>
          </div>

          {/* 2. Strathmore 400 Series Pads: SLIGHTLY DIFFERENT (Split Flex layout with a prominent white tag) */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-50 to-orange-100 p-8 flex flex-col justify-between lg:col-span-2 shadow-sm border border-amber-200/60 outline outline-4 outline-amber-50/30 hover:shadow-xl transition-all duration-550 min-h-[200px]">
            <div className="absolute right-0 inset-y-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=400&q=80')] bg-cover bg-center opacity-35 group-hover:scale-105 transition-transform duration-700 rounded-l-3xl pointer-events-none" />
            
            <div className="relative flex items-center gap-1.5 self-start rounded-full bg-white/95 backdrop-blur-xs px-3 py-1.5 text-[9px] font-bold text-amber-900 uppercase tracking-widest border border-amber-200 shadow-sm">
              <Percent className="size-3 text-[#E31B23] animate-bounce" />
              <span>Super Saver</span>
            </div>

            <div className="relative mt-4 max-w-sm">
              <h3 className="text-xl sm:text-2xl font-black text-zinc-950 leading-tight">
                Save <span className="text-[#E31B23] underline decoration-wavy">20-42% Off</span> Strathmore Pads
              </h3>
              <p className="text-xs font-semibold text-zinc-650 mt-1.5">
                The gold standard paper of choice for professional sketching, charcoal drawing and illustrations.
              </p>
            </div>

            <div className="relative mt-6 flex items-center justify-between gap-4 flex-wrap border-t border-amber-200/50 pt-4">
              <Link
                to="/product/papers-and-boards-2"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-950 px-5 py-2.5 text-xs font-black text-white hover:bg-[#E31B23] transition-all shadow-md group-hover:-translate-y-0.5"
              >
                <span>Shop Sketchpads</span>
                <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-[9px] font-black text-amber-800 tracking-widest bg-amber-200/50 px-2.5 py-1 rounded">LIMITED WAREHOUSE STOCK</span>
            </div>
          </div>

          {/* 3. Custom Framing: SLIGHTLY DIFFERENT (Glowing gold borders and refined text styling) */}
          <div className="group relative overflow-hidden rounded-3xl bg-zinc-950 p-8 flex flex-col justify-between min-h-[440px] lg:col-span-1 lg:row-span-2 shadow-md border border-zinc-800 outline outline-4 outline-zinc-900/40 hover:shadow-xl transition-all duration-550">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=400&q=80')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
            
            <div className="relative flex items-center gap-1.5 self-start rounded-full bg-amber-500 text-zinc-950 px-3 py-1.5 text-[9px] font-black uppercase tracking-widest shadow-md">
              <Sparkles className="size-3" />
              <span>Premium Service</span>
            </div>

            <div className="relative mt-8 space-y-3 z-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight">
                Premium<br />Custom Framing
              </h3>
              <p className="text-xs font-bold text-zinc-350 leading-relaxed max-w-[200px]">
                Expertly hand-crafted framing. Premium wood, gold leaf, and linen mats delivered directly to your door.
              </p>
            </div>

            <div className="relative mt-12 z-10 space-y-3">
              <Link
                to="/product/farming-and-matboard"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-xs font-black text-zinc-950 hover:bg-white hover:text-black transition-all shadow-md group-hover:-translate-y-0.5"
              >
                <span>Get Started</span>
                <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="text-[10px] font-black text-amber-400 tracking-wider">ALWAYS HAND-MADE IN US</div>
            </div>
          </div>

          {/* 4. Overstock Liquidation Sale (Bottom Middle Left) */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#E31B23] via-[#c9141b] to-zinc-950 p-6 flex flex-col justify-between shadow-sm border border-red-500 outline outline-4 outline-red-50/20 hover:shadow-xl transition-all duration-550 min-h-[200px] lg:col-span-1">
            <div className="relative flex items-center gap-1.5 self-start rounded-full bg-white/20 backdrop-blur-xs px-2.5 py-1 text-[9px] font-bold text-white uppercase tracking-widest">
              <Flame className="size-3 text-yellow-300 animate-bounce" />
              <span>Blowout Deals</span>
            </div>

            <div className="relative mt-2">
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase leading-none">
                OVERSTOCK<br />
                <span className="text-yellow-400">LIQUIDATION</span><br />
                <span className="text-white text-xs font-black uppercase tracking-wider block mt-1">SAVES UP TO 70% ON LIQUIDS</span>
              </h3>
            </div>

            <div className="relative mt-4">
              <Link
                to="/product/easels-and-furniture-4"
                className="inline-flex items-center gap-1 rounded-lg bg-white px-4 py-2 text-[10px] font-black text-red-950 hover:bg-yellow-400 hover:text-zinc-950 transition-all shadow-sm group-hover:-translate-y-0.5"
              >
                <span>Browse Deals</span>
                <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 5. Blick Acrylic Paint Tubes (Bottom Middle Right) */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-55 to-teal-100 p-6 flex flex-col justify-between shadow-sm border border-emerald-200 outline outline-4 outline-emerald-50/30 hover:shadow-xl transition-all duration-550 min-h-[200px] lg:col-span-1">
            <div className="absolute right-0 bottom-0 h-32 w-32 bg-[url('https://images.unsplash.com/photo-1599833587642-1e9ef5ea06b2?auto=format&fit=crop&w=300&q=80')] bg-cover opacity-25 group-hover:scale-108 transition-transform duration-700 pointer-events-none rounded-tl-full" />
            
            <div className="relative flex items-center gap-1.5 self-start rounded-full bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[9px] font-bold text-emerald-800 uppercase tracking-widest border border-emerald-200 shadow-sm">
              <Tag className="size-3 text-emerald-600 animate-pulse" />
              <span>Studio Choice</span>
            </div>

            <div className="relative mt-2">
              <h3 className="text-base font-black text-zinc-950 leading-tight">
                Blick Studio Acrylics
              </h3>
              <p className="text-[11px] font-black text-emerald-800 mt-0.5">Save 28-47% Off List</p>
              <p className="text-[10px] text-zinc-550 mt-1 max-w-[150px] font-semibold leading-relaxed">
                High pigment loads and smooth buttery textures.
              </p>
            </div>

            <div className="relative mt-4">
              <Link
                to="/product/paints-5"
                className="inline-flex items-center gap-1 rounded-lg bg-zinc-950 px-4 py-2 text-[10px] font-black text-white hover:bg-[#E31B23] transition-all shadow-sm group-hover:-translate-y-0.5"
              >
                <span>Add Paint</span>
                <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
