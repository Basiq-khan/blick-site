import { ChevronRight, ArrowRight } from "lucide-react";

interface Subcategory {
  name: string;
  image: string;
}

interface CategoryLandingPageProps {
  category: string;
  onSelectSubcategory: (subcat: string) => void;
}

// Example subcategories mapping for "Paints" category
const PAINT_SUBCATEGORIES: Subcategory[] = [
  { name: "Acrylics", image: "https://images.unsplash.com/photo-1599833587642-1e9ef5ea06b2?auto=format&fit=crop&w=300&q=80" },
  { name: "Oils", image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?auto=format&fit=crop&w=300&q=80" },
  { name: "Watercolors", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&q=80" },
  { name: "Mediums & Varnishes", image: "https://images.unsplash.com/photo-1582201942922-47e5c53bf7ac?auto=format&fit=crop&w=300&q=80" },
  { name: "Paint Sets & Kits", image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=300&q=80" },
  { name: "Gouache", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&q=80" },
  { name: "Palettes & Tools", image: "https://images.unsplash.com/photo-1599833587642-1e9ef5ea06b2?auto=format&fit=crop&w=300&q=80" },
  { name: "Painting Surfaces", image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=300&q=80" },
  { name: "Pastels", image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=300&q=80" },
  { name: "Spray Paint & Supplies", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=300&q=80" }
];

export default function CategoryLandingPage({ category, onSelectSubcategory }: CategoryLandingPageProps) {
  return (
    <div className="w-full bg-white pb-16 animate-fade-in">
      
      {/* Breadcrumb */}
      <div className="border-b border-zinc-100 bg-zinc-50 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center text-xs font-bold text-zinc-500 uppercase tracking-wider">
          <span className="hover:text-[#E31B23] cursor-pointer" onClick={() => onSelectSubcategory("")}>Home</span>
          <ChevronRight className="size-3.5 mx-1" />
          <span className="text-zinc-900">{category}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-zinc-900 group cursor-pointer mb-12" onClick={() => onSelectSubcategory("Acrylics")}>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1599833587642-1e9ef5ea06b2?auto=format&fit=crop&w=1200&q=80" 
            alt="Paints Banner" 
            className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 sm:px-12">
            <span className="text-[#ff3b42] font-black uppercase tracking-widest text-xs mb-2">Featured Selection</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight max-w-lg mb-4">
              Make a Splash.<br/>Blick Studio Acrylic Sets.
            </h2>
            <button className="self-start mt-2 bg-white text-zinc-900 font-bold px-6 py-2.5 rounded-full text-sm hover:bg-[#E31B23] hover:text-white transition-colors flex items-center gap-2">
              Shop Now <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        {/* Subcategories Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-black text-center text-zinc-900 uppercase tracking-wide mb-8">
            Discover {category} and Mediums by Category
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {PAINT_SUBCATEGORIES.map((sub) => (
              <div 
                key={sub.name}
                onClick={() => onSelectSubcategory(sub.name)}
                className="group flex flex-col items-center gap-3 cursor-pointer"
              >
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-zinc-50 border border-zinc-100 shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-zinc-200">
                  <img 
                    src={sub.image} 
                    alt={sub.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <span className="text-xs font-extrabold text-zinc-800 text-center uppercase tracking-wider group-hover:text-[#E31B23] transition-colors">
                  {sub.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Informational SEO Block */}
        <div className="bg-zinc-50 rounded-3xl p-8 border border-zinc-100 mb-16">
          <h4 className="text-lg font-black text-zinc-900 uppercase tracking-wide mb-4">Learn More About Painting Supplies</h4>
          <div className="prose prose-sm text-zinc-600 max-w-none space-y-4 leading-relaxed font-medium">
            <p>
              Professional paints and mediums offer a vast spectrum of vibrant colors, consistent textures, and archival qualities. 
              Whether you are working with heavy body acrylics, traditional oil colors, or transparent watercolors, having the right 
              supplies can dramatically impact the longevity and appearance of your artwork. 
            </p>
            <p>
              <strong className="text-zinc-800">Acrylics:</strong> Fast-drying and extremely versatile, acrylics can be used thinly like watercolors or thickly like oils. 
              They are water-soluble when wet but become water-resistant when dry.<br/>
              <strong className="text-zinc-800">Oils:</strong> Known for their slow drying time and rich, buttery consistency, allowing for extensive blending on the canvas.<br/>
              <strong className="text-zinc-800">Watercolors:</strong> Characterized by their transparency and fluidity, they are perfect for washes and delicate layering.
            </p>
            <p>
              To complete your studio setup, explore our extensive selection of mediums, varnishes, and gesso to alter drying times, 
              finish, and texture. Don't forget high-quality brushes and reliable painting surfaces to ensure your masterpiece lasts for generations.
            </p>
          </div>
        </div>

        {/* Featured Brands */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-black text-zinc-900 uppercase tracking-wide">Featured Brands</h3>
          </div>
          <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-2xl font-black font-serif italic text-zinc-800">Utrecht</div>
            <div className="text-2xl font-black tracking-widest text-zinc-800">GOLDEN</div>
            <div className="text-xl font-bold uppercase tracking-wider text-zinc-800">Winsor & Newton</div>
            <div className="text-2xl font-black text-zinc-800">Liquitex</div>
            <div className="text-2xl font-bold uppercase tracking-wider text-zinc-800 font-serif border-2 border-zinc-800 p-1">Gamblin</div>
          </div>
        </div>

      </div>
    </div>
  );
}
