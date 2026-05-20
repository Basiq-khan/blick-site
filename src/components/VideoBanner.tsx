import { useState } from "react";
import { Play, X, Sparkles } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  desc: string;
  thumbnail: string;
  embedId: string;
}

const tutorials: VideoItem[] = [
  {
    id: "vid-1",
    title: "Get Creative with Acrylic Pouring: Step-by-Step Tutorial",
    desc: "Learn how to mix mediums, select complementary color families, and master dirty pour techniques to create gorgeous abstract canvas pours.",
    thumbnail: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    embedId: "Q7M4r8fL9K8"
  },
  {
    id: "vid-2",
    title: "Brush Lettering Guide for Beginners: Calligraphy Secrets",
    desc: "Uncover expert secrets to master dynamic downstrokes, thin hairline upstrokes, and hand-eye positioning using premium dual brush tip markers.",
    thumbnail: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
    embedId: "s3G9XhY2J0"
  }
];

export default function VideoBanner() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 bg-zinc-50 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl">
        
        {/* Title */}
        <div className="text-center space-y-2 mb-10">
          <h2 className="text-2xl font-black text-zinc-950 uppercase tracking-wide flex items-center justify-center gap-2">
            <svg className="size-6 text-[#E31B23] fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Blick Video Tutorials</span>
          </h2>
          <p className="text-xs text-zinc-400 font-bold uppercase tracking-wider">
            Step-by-step masterclasses hosted by professional artists
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {tutorials.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group relative flex flex-col items-start text-left rounded-2xl overflow-hidden bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:border-zinc-200 transition-all duration-500 cursor-pointer"
            >
              {/* Image & Play Button Container */}
              <div className="relative w-full aspect-video overflow-hidden bg-zinc-900 shrink-0">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="size-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Pulsing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex size-14 items-center justify-center rounded-full bg-[#E31B23] text-white shadow-lg transform transition-all duration-300 group-hover:scale-115 group-hover:bg-red-600 relative">
                    <span className="absolute -inset-2 rounded-full border border-[#E31B23]/40 animate-ping group-hover:animate-none" />
                    <Play className="size-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Video Duration / Tag */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md bg-black/60 backdrop-blur-xs px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                  <Sparkles className="size-3 text-yellow-300" />
                  <span>Free Tutorial</span>
                </div>
              </div>

              {/* Text info */}
              <div className="p-6 space-y-2">
                <h3 className="text-sm font-extrabold text-zinc-900 leading-snug group-hover:text-[#E31B23] transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
                  {video.desc}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center">
          {/* Backdrop */}
          <div 
            onClick={() => setActiveVideo(null)} 
            className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-3xl mx-4 bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl z-10 border border-zinc-800">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white/80 hover:text-white hover:bg-black transition-colors"
              aria-label="Close video"
            >
              <X className="size-5" />
            </button>

            <div className="aspect-video w-full relative bg-black flex items-center justify-center">
              {/* Since we are mock playing, we simulate a premium player that has play state, scrubbing bar, volume, etc. */}
              <img 
                src={activeVideo.thumbnail} 
                alt={activeVideo.title} 
                className="absolute inset-0 size-full object-cover opacity-30" 
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
              
              <div className="relative z-10 text-center space-y-4 px-6 max-w-md">
                <div className="inline-flex size-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg animate-bounce">
                  <Play className="size-8 fill-current translate-x-0.5" />
                </div>
                <h4 className="text-sm font-black text-white">{activeVideo.title}</h4>
                <p className="text-xs text-zinc-400">Tutorial video player active! (In a production environment, this embeds a responsive secure YouTube/Vimeo iframe for `{activeVideo.embedId}`).</p>
                <button 
                  onClick={() => setActiveVideo(null)}
                  className="rounded-full bg-white px-5 py-2 text-xs font-bold text-zinc-950 hover:bg-[#E31B23] hover:text-white transition-all shadow-md"
                >
                  Close Player
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
