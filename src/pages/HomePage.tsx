import { useNavigate } from "react-router-dom";
import PromoHero from "../components/PromoHero";
// import FeaturedCategories from "../components/FeaturedCategories";
import ProductCard from "../components/ProductCard";
import { FEATURED_DEALS, FEATURED_ART_SUPPLIES, CLEARANCE_ART_SUPPLIES } from "../data/products";
import { useCart } from "../context/CartContext";
import { Sparkles, Package, Percent } from "lucide-react";

export default function HomePage() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // const handleSelectCategory = (category: string) => {
  //   if (category === "Paints") navigate("/category/paints");
  //   else navigate(`/search?category=${encodeURIComponent(category)}`);
  // };

  const handleProductClick = (product: any) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="animate-fade-in pb-12">
      <PromoHero />
      {/* <FeaturedCategories
        selectedCategory=""
        onSelectCategory={handleSelectCategory}
      /> */}
      
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-16">
        {/* Featured Deals Section */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="size-5 text-amber-500" />
              <h2 className="text-xl font-black text-zinc-900 uppercase tracking-wide">Featured Deals</h2>
            </div>
            <a href="#deals" className="text-sm font-bold text-[#E31B23] hover:underline uppercase tracking-wider">
              View All &rsaquo;
            </a>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {FEATURED_DEALS.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onAddToCart={addToCart}
                onClickProduct={handleProductClick}
              />
            ))}
          </div>
        </section>

        {/* Featured Art Supplies */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package className="size-5 text-emerald-500" />
              <h2 className="text-xl font-black text-zinc-900 uppercase tracking-wide">Featured Art Supplies</h2>
            </div>
            <a href="#supplies" className="text-sm font-bold text-[#E31B23] hover:underline uppercase tracking-wider">
              View All &rsaquo;
            </a>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {FEATURED_ART_SUPPLIES.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onAddToCart={addToCart}
                onClickProduct={handleProductClick}
              />
            ))}
          </div>
        </section>

        {/* Clearance Section */}
        <section className="rounded-3xl bg-zinc-900 px-6 py-10 sm:px-10 mt-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E31B23] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Percent className="size-6 text-[#E31B23]" />
                <h2 className="text-2xl font-black text-white uppercase tracking-wider">Clearance Blowout</h2>
              </div>
              <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">Last-chance savings on premium art canvases and brushes</p>
            </div>
            <a href="#clearance" className="text-xs font-bold text-[#E31B23] hover:underline uppercase tracking-wider">
              Shop All Clearance &rsaquo;
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 relative z-10">
            {CLEARANCE_ART_SUPPLIES.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onAddToCart={addToCart}
                onClickProduct={handleProductClick}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
