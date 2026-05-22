import { GraduationCap, Gift, } from "lucide-react";

export default function EducatorGiftCards() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 bg-zinc-50 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Educator Box */}
          <div className="group relative overflow-hidden rounded-2xl from-zinc-900 to-zinc-800 p-8 text-white shadow-sm border border-zinc-800 hover:shadow-xl transition-all duration-300">
            {/* Background Image Overlay */}
            <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-[url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=400&q=80')] opacity-40 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 pointer-events-none rounded-l-3xl" />
            <div className="absolute inset-0 from-zinc-900 via-zinc-900/90 to-transparent" />

            <div className="relative space-y-4">
              <div className="inline-flex rounded-xl bg-amber-500/10 p-3 text-amber-400 border border-amber-500/25">
                <GraduationCap className="size-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-black uppercase tracking-wide text-black">Blick for Art Educators</h3>
                <p className="text-xs text-zinc-900 leading-relaxed max-w-md">
                  We support educators with exclusive discounts, tailored lesson plans, school order management, and specialized classroom packages. Discover great products, great value, and trusted service.
                </p>
              </div>

              {/* <div className="pt-4">
                <a 
                  href="#educators" 
                  className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-2.5 text-xs font-bold text-zinc-950 hover:bg-white hover:text-black transition-all shadow-md group-hover:-translate-y-0.5"
                >
                  <span>Explore Art Education</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div> */}
            </div>
          </div>

          {/* Gift Card Box */}
          <div className="group relative overflow-hidden rounded-2xl from-red-700 via-[#E31B23] to-[#ff3b42] p-8 text-white shadow-sm border border-red-600 hover:shadow-xl transition-all duration-300">
            {/* Background Image Overlay */}
            <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-[url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=400&q=80')] opacity-40 bg-cover bg-center group-hover:scale-105 transition-transform duration-500 pointer-events-none rounded-l-3xl" />
            <div className="absolute inset-0 from-red-700 via-[#E31B23]/90 to-transparent" />

            <div className="relative space-y-4">
              <div className="inline-flex rounded-xl bg-black/10 p-3 text-black border border-black/20">
                <Gift className="size-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-black uppercase tracking-wide text-zinc-900">Blick Gift Cards</h3>
                <p className="text-xs text-zinc-900 leading-relaxed max-w-md">
                  Give the gift of endless creativity! Easy to buy, easy to redeem, and valid both online and at any of our retail store locations nationwide. Available in physical cards and instant e-gift formats.
                </p>
              </div>

              {/* <div className="pt-4">
                <a 
                  href="#giftcards" 
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-bold text-zinc-950 hover:bg-black hover:text-white transition-all shadow-md group-hover:-translate-y-0.5"
                >
                  <span>Purchase Gift Cards</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
