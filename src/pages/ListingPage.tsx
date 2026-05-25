import { useSearchParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import { ALL_PRODUCTS } from "../data/products";
import { RotateCcw, X, Search } from "lucide-react";

export default function ListingPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const searchQuery = searchParams.get("q") || "";
  const selectedCategory = searchParams.get("category") || "";

  const filteredAllProducts = ALL_PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory 
      ? product.category.toLowerCase() === selectedCategory.toLowerCase() ||
        product.name.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        product.description.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        (selectedCategory === "Clearance" && product.isClearance) ||
        (selectedCategory === "New Products" && product.isNew) ||
        (selectedCategory === "Best Sellers" && product.rating >= 4.8)
      : true;

    return matchesSearch && matchesCategory;
  });

  const handleResetFilters = () => {
    navigate("/search");
  };

  const handleClearSearch = () => {
    if (selectedCategory) navigate(`/search?category=${encodeURIComponent(selectedCategory)}`);
    else navigate("/search");
  };

  const handleClearCategory = () => {
    if (searchQuery) navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    else navigate("/search");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8 animate-fade-in">
      {/* Premium Filter Dashboard Header */}
      <div className="bg-white rounded-3xl border border-zinc-150 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-black text-zinc-950 uppercase tracking-wide flex items-center gap-2.5">
              <Search className="size-6 text-[#E31B23]" />
              <span>
                {searchQuery && selectedCategory 
                  ? "Search & Category Filter"
                  : searchQuery 
                    ? `Search Results for "${searchQuery}"`
                    : selectedCategory
                      ? `Category: ${selectedCategory}`
                      : "All Products"
                }
              </span>
            </h2>
            <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
              Found {filteredAllProducts.length} matching art materials
            </p>
          </div>
          
          <button
            onClick={handleResetFilters}
            className="self-start sm:self-center rounded-full bg-zinc-100 hover:bg-zinc-200 px-5 py-2 text-xs font-bold text-zinc-700 hover:text-[#E31B23] transition-all flex items-center gap-2 cursor-pointer border border-zinc-200"
          >
            <RotateCcw className="size-3.5" />
            <span>Clear All Filters</span>
          </button>
        </div>

        {/* Active Filter Badges */}
        {(searchQuery || selectedCategory) && (
          <div className="mt-5 flex flex-wrap gap-2.5 pt-4 border-t border-zinc-100">
            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider self-center mr-1">Active:</span>
            {searchQuery && (
              <div className="flex items-center gap-1.5 rounded-full bg-[#E31B23]/5 border border-[#E31B23]/15 px-3.5 py-1 text-xs font-bold text-[#E31B23]">
                <span>Search: "{searchQuery}"</span>
                <button 
                  onClick={handleClearSearch}
                  className="rounded-full p-0.5 hover:bg-[#E31B23]/10 transition-colors"
                  aria-label="Clear search query"
                >
                  <X className="size-3 stroke-3" />
                </button>
              </div>
            )}
            {selectedCategory && (
              <div className="flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-bold text-amber-700">
                <span>Category: {selectedCategory}</span>
                <button 
                  onClick={handleClearCategory}
                  className="rounded-full p-0.5 hover:bg-amber-100 transition-colors"
                  aria-label="Clear category filter"
                >
                  <X className="size-3 stroke-3" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {filteredAllProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredAllProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={addToCart}
              onClickProduct={(p) => navigate(`/product/${p.id}`)}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in-95 duration-500">
          <div className="size-20 rounded-full bg-zinc-50 flex items-center justify-center mb-6 border border-zinc-100 shadow-inner">
            <Search className="size-8 text-zinc-300" />
          </div>
          <h3 className="text-xl font-black text-zinc-900 mb-2">No matching products</h3>
          <p className="text-zinc-500 font-medium max-w-sm mb-8">
            We couldn't find any art supplies matching your current filters. Try adjusting your search terms or browsing our categories.
          </p>
          <button
            onClick={handleResetFilters}
            className="rounded-full bg-[#E31B23] px-8 py-3 text-sm font-bold text-white hover:bg-black transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
