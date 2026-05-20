import { useState } from "react";
import { Star, Check, Heart, Plus } from "lucide-react";
import type { Product } from "../data/products";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, option?: string) => void;
  onClickProduct?: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onClickProduct }: ProductCardProps) {
  const [selectedOption, setSelectedOption] = useState<string>(
    product.options && product.options.length > 0 ? product.options[0] : ""
  );
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    onAddToCart(product, selectedOption || undefined);
    setTimeout(() => {
      setIsAdded(false);
    }, 1800);
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-zinc-100 bg-white p-4.5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#E31B23]/15 hover:shadow-xl hover:shadow-zinc-200/50">
      
      {/* Badges and Wishlist Button */}
      <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
        {product.isNew && (
          <span className="rounded-md bg-sky-500 px-2 py-0.5 text-[10px] font-extrabold tracking-wider text-white uppercase shadow-xs">
            New
          </span>
        )}
        {product.isClearance && (
          <span className="rounded-md bg-zinc-900 px-2 py-0.5 text-[10px] font-extrabold tracking-wider text-yellow-400 uppercase shadow-xs border border-zinc-800">
            Clearance
          </span>
        )}
      </div>

      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className={cn(
          "absolute right-3 top-3 z-10 rounded-full border bg-white/80 p-2 text-zinc-400 hover:text-red-500 backdrop-blur-xs transition-all shadow-xs",
          isWishlisted ? "text-red-500 border-red-100 bg-red-50" : "border-zinc-100 hover:bg-white"
        )}
        aria-label="Add to wishlist"
      >
        <Heart className="size-4 fill-current" />
      </button>

      {/* Product Image */}
      <div 
        onClick={() => onClickProduct?.(product)}
        className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-zinc-55 border border-zinc-50 cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Card Info */}
      <div className="flex-1 space-y-2">
        <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">
          {product.category}
        </div>
        
        <h4 
          onClick={() => onClickProduct?.(product)}
          className="text-sm font-extrabold text-zinc-800 line-clamp-2 leading-snug min-h-[40px] group-hover:text-[#E31B23] transition-colors cursor-pointer"
        >
          {product.name}
        </h4>

        {/* Star Rating */}
        <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500">
          <div className="flex items-center text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "size-3.5 fill-current",
                  i < Math.floor(product.rating) ? "text-amber-500" : "text-zinc-200"
                )}
              />
            ))}
          </div>
          <span>{product.rating.toFixed(1)}</span>
          <span className="text-zinc-300 font-light">|</span>
          <span className="text-[11px] text-zinc-400 font-medium">({product.reviewsCount})</span>
        </div>

        {/* Pricing */}
        <div className="pt-1 flex items-baseline gap-2">
          <span className="text-lg font-black text-[#E31B23]">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Option Selector pills */}
        {product.options && product.options.length > 0 && (
          <div className="pt-2 space-y-1.5">
            <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Select Style/Size:</div>
            <div className="flex flex-wrap gap-1">
              {product.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setSelectedOption(opt)}
                  className={cn(
                    "rounded-md border px-2 py-0.5 text-[10px] font-bold transition-all cursor-pointer",
                    selectedOption === opt
                      ? "border-[#E31B23] bg-[#E31B23]/5 text-[#E31B23]"
                      : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50"
                  )}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Interactive Cart Button */}
      <div className="mt-5">
        <button
          onClick={handleAddToCart}
          disabled={isAdded}
          className={cn(
            "w-full rounded-xl py-2 px-3 text-xs font-bold transition-all shadow-xs flex items-center justify-center gap-1.5 cursor-pointer transform active:scale-97",
            isAdded
              ? "bg-emerald-500 text-white shadow-emerald-200/50"
              : "bg-zinc-950 text-white hover:bg-[#E31B23] shadow-zinc-200"
          )}
        >
          {isAdded ? (
            <>
              <Check className="size-4 animate-bounce" />
              <span>Added to Cart!</span>
            </>
          ) : (
            <>
              <Plus className="size-4" />
              <span>Add to Cart</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
