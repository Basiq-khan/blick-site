import { 
  Gift, 
  Sparkles, 
  Award, 
  Percent, 
  Flame, 
  Frame, 
  Palette, 
  Brush, 
  Droplet, 
  Wind, 
  PenTool, 
  Paintbrush, 
  BookOpen, 
  Grid, 
  Layers, 
  Book, 
  Briefcase, 
  Scissors, 
  Square, 
  Compass, 
  Smile, 
  Package 
} from "lucide-react";
import { cn } from "@/lib/utils";

const topPromos = [
  { name: "Gifts", color: "bg-blue-600 hover:bg-blue-700", icon: Gift, text: "Gifts" },
  { name: "New Products", color: "bg-[#0ea5e9] hover:bg-sky-600", icon: Sparkles, text: "New" },
  { name: "Best Sellers", color: "bg-[#E31B23] hover:bg-red-700", icon: Award, text: "Best" },
  { name: "Clearance", color: "bg-zinc-900 hover:bg-black", icon: Percent, text: "Clearance" },
  { name: "Overstock Sale", color: "bg-orange-500 hover:bg-orange-600", icon: Flame, text: "Overstock" }
];

const categoryIcons: Record<string, any> = {
  "Frame": Frame,
  "Palette": Palette,
  "Brush": Brush,
  "Droplet": Droplet,
  "Wind": Wind,
  "PenTool": PenTool,
  "Paintbrush": Paintbrush,
  "BookOpen": BookOpen,
  "Grid": Grid,
  "Layers": Layers,
  "Book": Book,
  "Briefcase": Briefcase,
  "Scissors": Scissors,
  "Square": Square,
  "Sparkles": Sparkles,
  "Compass": Compass,
  "Smile": Smile,
  "Package": Package
};

export const CATEGORIES = [
  { name: "Custom Canvas & Framing", icon: "Frame" },
  { name: "Watercolor Paint", icon: "Palette" },
  { name: "Acrylic Paint", icon: "Brush" },
  { name: "Oil Paint", icon: "Droplet" },
  { name: "Airbrush & Mediums", icon: "Wind" },
  { name: "Marker & Pen Sets", icon: "PenTool" },
  { name: "Brushes & Painting Tools", icon: "Paintbrush" },
  { name: "Sketchpads & Paper", icon: "BookOpen" },
  { name: "Easels & Furniture", icon: "Grid" },
  { name: "Clay, Pottery & Sculpting", icon: "Layers" },
  { name: "Art Journals & Albums", icon: "Book" },
  { name: "Portfolios & Presentation", icon: "Briefcase" },
  { name: "Framing & Mounting", icon: "Scissors" },
  { name: "Canvas & Canvas Panels", icon: "Square" },
  { name: "General Art & Craft Supplies", icon: "Sparkles" },
  { name: "Drafting & Drawing", icon: "Compass" },
  { name: "Crafts & Activities", icon: "Smile" },
  { name: "Packaging & Shipping", icon: "Package" }
];

interface FeaturedCategoriesProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function FeaturedCategories({
  selectedCategory,
  onSelectCategory
}: FeaturedCategoriesProps) {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white border-t border-zinc-100">
      <div className="mx-auto max-w-7xl">
        
        {/* Title */}
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-wide">
            Discover Featured Categories
          </h2>
          <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
            Explore 110,000+ top brand art materials
          </p>
        </div>

        {/* Top 5 High-Promo circles */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mb-14">
          {topPromos.map((promo) => {
            const Icon = promo.icon;
            const isActive = selectedCategory === promo.name;
            return (
              <button
                key={promo.name}
                onClick={() => onSelectCategory(isActive ? "" : promo.name)}
                className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
              >
                <div 
                  className={cn(
                    "flex size-14 sm:size-18 items-center justify-center rounded-full text-white shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6",
                    promo.color,
                    isActive ? "ring-4 ring-offset-4 ring-[#E31B23]" : ""
                  )}
                >
                  <Icon className="size-6 sm:size-8" />
                </div>
                <span className={cn(
                  "text-xs sm:text-sm font-extrabold text-zinc-700 tracking-wide transition-colors group-hover:text-[#E31B23]",
                  isActive ? "text-[#E31B23]" : ""
                )}>
                  {promo.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* Regular categories grid */}
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
          {CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat.icon] || Palette;
            const isActive = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => onSelectCategory(isActive ? "" : cat.name)}
                className="group flex flex-col items-center text-center gap-2 cursor-pointer"
              >
                <div 
                  className={cn(
                    "flex size-14 sm:size-16 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 transition-all duration-300 group-hover:border-[#E31B23]/35 group-hover:bg-[#E31B23]/5 group-hover:text-[#E31B23] group-hover:scale-105",
                    isActive ? "border-[#E31B23] bg-[#E31B23]/10 text-[#E31B23] scale-105" : ""
                  )}
                >
                  <Icon className="size-5 sm:size-6" />
                </div>
                <span className={cn(
                  "text-[10px] sm:text-xs font-bold text-zinc-500 leading-tight transition-colors group-hover:text-zinc-900 line-clamp-2 px-1",
                  isActive ? "text-zinc-950 font-extrabold" : ""
                )}>
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Reset Banner */}
        {selectedCategory && (
          <div className="mt-8 flex justify-center">
            <button 
              onClick={() => onSelectCategory("")}
              className="rounded-full bg-zinc-100 hover:bg-zinc-200 px-4 py-1.5 text-xs font-bold text-zinc-700 transition-all flex items-center gap-2"
            >
              <span>Filtering by: <strong>{selectedCategory}</strong></span>
              <span className="rounded-full bg-zinc-300 text-zinc-800 text-[10px] px-1.5 py-0.5">✕ Clear</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
