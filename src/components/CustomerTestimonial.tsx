import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The selection at Blick is unmatched! The customer service is always incredibly knowledgeable, and they package paints so securely that nothing ever leaks. It's my absolute go-to for all my professional studio materials.",
    author: "Sarah M.",
    role: "Professional Fine Artist",
    rating: 5,
    location: "Chicago, IL"
  },
  {
    quote: "Outstanding values and super fast shipping! The Strathmore sketchpads and Blick studio markers I ordered arrived in perfect condition, and the price was almost half of what I would pay at my local boutique craft store.",
    author: "Jason K.",
    role: "Illustrator & Designer",
    rating: 5,
    location: "Austin, TX"
  },
  {
    quote: "I order all the clay and printmaking supplies for my middle school classrooms from Blick. Their lesson plans are exceptionally detailed, and school order discounts make my tiny public budget go twice as far!",
    author: "Elena R.",
    role: "Art Educator",
    rating: 5,
    location: "Boston, MA"
  }
];

export default function CustomerTestimonial() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white border-t border-zinc-100">
      <div className="mx-auto max-w-7xl">
        
        {/* Title */}
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-wide">
            Customers Say...
          </h2>
          <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
            Loved by 1M+ artists, students, and educators nationwide
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="relative rounded-2xl border border-zinc-100 bg-zinc-50/50 p-6 flex flex-col justify-between hover:shadow-lg hover:border-zinc-200/60 transition-all duration-300"
            >
              <Quote className="absolute right-4 top-4 size-10 text-zinc-200/70 pointer-events-none" />
              
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center text-amber-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current text-amber-550" />
                  ))}
                </div>
                
                <p className="text-xs font-semibold text-zinc-600 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-extrabold text-zinc-900">{t.author}</h4>
                  <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">{t.role}</p>
                </div>
                <span className="text-[10px] text-zinc-400 font-bold">{t.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
