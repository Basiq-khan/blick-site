import { MapPin, Trophy, MessageSquare, ArrowRight } from "lucide-react";

const actions = [
  {
    title: "Find a Store",
    desc: "Explore our physical retail stores, find exclusive in-store sales, and check local community schedules.",
    icon: MapPin,
    color: "from-blue-600 to-blue-700",
    hoverColor: "group-hover:text-blue-200",
    href: "#stores"
  },
  {
    title: "Blick Art Room",
    desc: "Discover free lesson plans, creative classroom assets, video tutorials, and inspiring community programs.",
    icon: Trophy,
    color: "from-emerald-600 to-emerald-700",
    hoverColor: "group-hover:text-emerald-200",
    href: "#artroom"
  },
  {
    title: "Contact Us",
    desc: "Got questions? Our award-winning customer support agents are ready to assist you via phone, email, or chat.",
    icon: MessageSquare,
    color: "from-[#E31B23] to-[#c9141b]",
    hoverColor: "group-hover:text-red-200",
    href: "#contact"
  }
];

export default function QuickActionBoxes() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 bg-zinc-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {actions.map((act) => {
            const Icon = act.icon;
            return (
              <a 
                key={act.title}
                href={act.href}
                className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-[#0284c7] to-[#0369a1] p-6 text-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-sky-600/10"
              >
                {/* Background decorative bubble */}
                <div className="absolute -right-6 -bottom-6 size-28 rounded-full bg-white/10 opacity-20 blur-md group-hover:scale-125 transition-transform" />
                
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-white/15 p-3 text-white border border-white/20 group-hover:scale-110 transition-transform">
                    <Icon className="size-6" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="text-base font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                      <span>{act.title}</span>
                      <ArrowRight className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-xs text-sky-100/90 leading-relaxed">
                      {act.desc}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
