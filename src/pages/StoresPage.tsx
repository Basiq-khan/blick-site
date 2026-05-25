import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  MapPin,
  Phone,
  Clock,
  Search,
  Navigation,
  ExternalLink,
  Store,
} from "lucide-react";

// ── Store data ────────────────────────────────────────────────
interface StoreInfo {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: { days: string; time: string }[];
  lat: number;
  lng: number;
  features: string[];
}

const STORES: StoreInfo[] = [
  {
    id: "nyc-soho",
    name: "Blick Art Materials – SoHo",
    address: "1-5 Bond St",
    city: "New York",
    state: "New York",
    zip: "10012",
    phone: "(212) 533-2444",
    hours: [
      { days: "Mon – Sat", time: "10:00 AM – 8:00 PM" },
      { days: "Sunday", time: "11:00 AM – 7:00 PM" },
    ],
    lat: 40.7264,
    lng: -73.9927,
    features: ["Custom Framing", "Classroom", "Curbside Pickup"],
  },
  {
    id: "nyc-ues",
    name: "Blick Art Materials – Upper East Side",
    address: "1755 2nd Ave",
    city: "New York",
    state: "New York",
    zip: "10128",
    phone: "(212) 348-2410",
    hours: [
      { days: "Mon – Sat", time: "10:00 AM – 7:00 PM" },
      { days: "Sunday", time: "11:00 AM – 6:00 PM" },
    ],
    lat: 40.7831,
    lng: -73.9519,
    features: ["Custom Framing", "Curbside Pickup"],
  },
  {
    id: "chicago-lincoln",
    name: "Blick Art Materials – Lincoln Park",
    address: "1574 N Kingsbury St",
    city: "Chicago",
    state: "Illinois",
    zip: "60642",
    phone: "(312) 573-0110",
    hours: [
      { days: "Mon – Sat", time: "10:00 AM – 8:00 PM" },
      { days: "Sunday", time: "11:00 AM – 6:00 PM" },
    ],
    lat: 41.9094,
    lng: -87.6528,
    features: ["Custom Framing", "Classroom", "Curbside Pickup"],
  },
  {
    id: "chicago-loop",
    name: "Blick Art Materials – South Loop",
    address: "42 S State St",
    city: "Chicago",
    state: "Illinois",
    zip: "60603",
    phone: "(312) 920-0300",
    hours: [
      { days: "Mon – Fri", time: "9:00 AM – 7:00 PM" },
      { days: "Saturday", time: "10:00 AM – 7:00 PM" },
      { days: "Sunday", time: "11:00 AM – 6:00 PM" },
    ],
    lat: 41.8802,
    lng: -87.6278,
    features: ["Custom Framing", "Curbside Pickup"],
  },
  {
    id: "la-westwood",
    name: "Blick Art Materials – Westwood",
    address: "10916 Lindbrook Dr",
    city: "Los Angeles",
    state: "California",
    zip: "90024",
    phone: "(310) 824-1306",
    hours: [
      { days: "Mon – Sat", time: "9:00 AM – 8:00 PM" },
      { days: "Sunday", time: "10:00 AM – 7:00 PM" },
    ],
    lat: 34.0603,
    lng: -118.4454,
    features: ["Custom Framing", "Classroom", "Curbside Pickup"],
  },
  {
    id: "la-pasadena",
    name: "Blick Art Materials – Pasadena",
    address: "44 S Raymond Ave",
    city: "Pasadena",
    state: "California",
    zip: "91105",
    phone: "(626) 795-4985",
    hours: [
      { days: "Mon – Sat", time: "10:00 AM – 8:00 PM" },
      { days: "Sunday", time: "11:00 AM – 6:00 PM" },
    ],
    lat: 34.1447,
    lng: -118.1487,
    features: ["Custom Framing", "Curbside Pickup"],
  },
  {
    id: "sf-market",
    name: "Blick Art Materials – Market Street",
    address: "979 Market St",
    city: "San Francisco",
    state: "California",
    zip: "94103",
    phone: "(415) 431-3724",
    hours: [
      { days: "Mon – Sat", time: "9:30 AM – 7:30 PM" },
      { days: "Sunday", time: "11:00 AM – 6:00 PM" },
    ],
    lat: 37.7822,
    lng: -122.4108,
    features: ["Custom Framing", "Curbside Pickup"],
  },
  {
    id: "boston-back-bay",
    name: "Blick Art Materials – Back Bay",
    address: "333 Newbury St",
    city: "Boston",
    state: "Massachusetts",
    zip: "02115",
    phone: "(617) 247-3322",
    hours: [
      { days: "Mon – Sat", time: "10:00 AM – 8:00 PM" },
      { days: "Sunday", time: "11:00 AM – 6:00 PM" },
    ],
    lat: 42.3489,
    lng: -71.0870,
    features: ["Custom Framing", "Classroom", "Curbside Pickup"],
  },
  {
    id: "seattle-cap-hill",
    name: "Blick Art Materials – Capitol Hill",
    address: "1600 Broadway",
    city: "Seattle",
    state: "Washington",
    zip: "98122",
    phone: "(206) 325-0711",
    hours: [
      { days: "Mon – Sat", time: "10:00 AM – 8:00 PM" },
      { days: "Sunday", time: "11:00 AM – 6:00 PM" },
    ],
    lat: 47.6147,
    lng: -122.3209,
    features: ["Custom Framing", "Curbside Pickup"],
  },
  {
    id: "philly-center",
    name: "Blick Art Materials – Center City",
    address: "1330 Chestnut St",
    city: "Philadelphia",
    state: "Pennsylvania",
    zip: "19107",
    phone: "(215) 965-0610",
    hours: [
      { days: "Mon – Sat", time: "10:00 AM – 8:00 PM" },
      { days: "Sunday", time: "11:00 AM – 6:00 PM" },
    ],
    lat: 39.9517,
    lng: -75.1634,
    features: ["Custom Framing", "Classroom", "Curbside Pickup"],
  },
  {
    id: "denver-lodo",
    name: "Blick Art Materials – LoDo",
    address: "1523 Stout St",
    city: "Denver",
    state: "Colorado",
    zip: "80202",
    phone: "(303) 825-1866",
    hours: [
      { days: "Mon – Sat", time: "9:00 AM – 7:00 PM" },
      { days: "Sunday", time: "10:00 AM – 6:00 PM" },
    ],
    lat: 39.7459,
    lng: -104.9952,
    features: ["Custom Framing", "Curbside Pickup"],
  },
  {
    id: "portland-pearl",
    name: "Blick Art Materials – Pearl District",
    address: "1115 NW Glisan St",
    city: "Portland",
    state: "Oregon",
    zip: "97209",
    phone: "(503) 451-7909",
    hours: [
      { days: "Mon – Sat", time: "10:00 AM – 7:00 PM" },
      { days: "Sunday", time: "11:00 AM – 6:00 PM" },
    ],
    lat: 45.5269,
    lng: -122.6812,
    features: ["Custom Framing", "Curbside Pickup"],
  },
];

// ── Component ─────────────────────────────────────────────────
export default function StoresPage() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedState, setSelectedState] = useState<string | null>(null);

  // Unique states
  const states = useMemo(() => {
    const s = [...new Set(STORES.map((st) => st.state))];
    s.sort();
    return s;
  }, []);

  // Filter
  const filteredStores = useMemo(() => {
    let list = STORES;
    if (selectedState) list = list.filter((s) => s.state === selectedState);
    if (searchValue.trim()) {
      const q = searchValue.toLowerCase().trim();
      list = list.filter(
        (s) =>
          s.city.toLowerCase().includes(q) ||
          s.state.toLowerCase().includes(q) ||
          s.zip.includes(q) ||
          s.name.toLowerCase().includes(q) ||
          s.address.toLowerCase().includes(q)
      );
    }
    return list;
  }, [searchValue, selectedState]);

  // Group by state
  const grouped = useMemo(() => {
    const map: Record<string, StoreInfo[]> = {};
    filteredStores.forEach((s) => {
      if (!map[s.state]) map[s.state] = [];
      map[s.state].push(s);
    });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredStores]);

  return (
    <div className="animate-fade-in bg-white min-h-[70vh]">
      {/* Breadcrumb */}
      <div className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
            <Link to="/" className="hover:text-[#E31B23] transition-colors">
              Home
            </Link>
            <ChevronRight className="size-3" />
            <span className="text-zinc-800 font-semibold">Store Locator</span>
          </nav>
        </div>
      </div>

      {/* ─── Hero Banner ─────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-linear-to-br from-[#0a0a0b] via-[#1a1a1e] to-[#0a0a0b]">
        {/* Decorative dots */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E31B23]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E31B23]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <MapPin className="size-3.5 text-[#E31B23]" />
            <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-widest">
              Find Your Nearest Store
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Visit a Blick Store{" "}
            <span className="text-[#E31B23]">Near You</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Browse our nationwide locations. Get hands-on with 110,000+ art supplies, attend workshops, and get expert advice from our passionate staff.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by city, state, or zip code..."
                value={searchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  setSelectedState(null);
                }}
                className="w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-md py-3.5 pl-12 pr-4 text-sm text-white outline-none transition-all placeholder:text-zinc-500 focus:border-[#E31B23]/50 focus:bg-white/10 focus:ring-4 focus:ring-[#E31B23]/10"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4.5 text-zinc-500" />
            </div>
          </div>

          {/* Store count */}
          <p className="mt-5 text-xs text-zinc-500 font-semibold tracking-wide">
            <span className="text-[#E31B23] font-extrabold">{STORES.length}</span> stores across the United States
          </p>
        </div>
      </div>

      {/* ─── State Filter Pills ────────────────────────────── */}
      <div className="border-b border-zinc-200 bg-zinc-50/50">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mr-2 shrink-0">
              Filter by State:
            </span>
            <button
              onClick={() => setSelectedState(null)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                !selectedState
                  ? "bg-[#E31B23] text-white shadow-md"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:border-[#E31B23]/40 hover:text-[#E31B23]"
              }`}
            >
              All States
            </button>
            {states.map((state) => (
              <button
                key={state}
                onClick={() => setSelectedState(state === selectedState ? null : state)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  selectedState === state
                    ? "bg-[#E31B23] text-white shadow-md"
                    : "bg-white text-zinc-600 border border-zinc-200 hover:border-[#E31B23]/40 hover:text-[#E31B23]"
                }`}
              >
                {state}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Store Directory ───────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Results count */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-lg font-bold text-zinc-900">
            {filteredStores.length === STORES.length
              ? "All Stores"
              : `${filteredStores.length} Store${filteredStores.length !== 1 ? "s" : ""} Found`}
          </h2>
          {(searchValue || selectedState) && (
            <button
              onClick={() => {
                setSearchValue("");
                setSelectedState(null);
              }}
              className="text-xs font-bold text-[#E31B23] hover:underline cursor-pointer"
            >
              Clear Filters
            </button>
          )}
        </div>

        {filteredStores.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Store className="size-10 text-zinc-300 mb-3" />
            <p className="text-base font-bold text-zinc-700">No stores found</p>
            <p className="text-sm text-zinc-400 mt-1">
              Try adjusting your search or browse all locations.
            </p>
            <button
              onClick={() => {
                setSearchValue("");
                setSelectedState(null);
              }}
              className="mt-6 rounded-lg bg-[#E31B23] px-6 py-2 text-xs font-bold text-white hover:bg-black transition-all shadow-md cursor-pointer"
            >
              Show All Stores
            </button>
          </div>
        ) : (
          grouped.map(([state, stores]) => (
            <div key={state} className="mb-10">
              {/* State heading */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center size-8 rounded-lg bg-[#E31B23]/10">
                  <Navigation className="size-4 text-[#E31B23]" />
                </div>
                <h3 className="text-base font-bold text-zinc-900">
                  {state}
                  <span className="ml-2 text-xs font-semibold text-zinc-400">
                    ({stores.length} location{stores.length !== 1 ? "s" : ""})
                  </span>
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {stores.map((store) => (
                  <StoreCard key={store.id} store={store} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* ─── Bottom CTA Banner ─────────────────────────────── */}
      <div className="bg-zinc-50 border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-zinc-900 mb-2">
            Can't Find a Store Near You?
          </h2>
          <p className="text-sm text-zinc-500 mb-6 max-w-md mx-auto">
            Shop our full catalog online with free shipping on orders over $75. We deliver to all 50 states.
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/"
              className="rounded-lg bg-[#E31B23] px-6 py-2.5 text-xs font-bold text-white uppercase tracking-wider hover:bg-black transition-all shadow-md inline-flex items-center gap-2"
            >
              Shop Online
              <ExternalLink className="size-3.5" />
            </Link>
            <Link
              to="/pages/contact-us"
              className="rounded-lg border border-zinc-300 bg-white px-6 py-2.5 text-xs font-bold text-zinc-700 uppercase tracking-wider hover:border-[#E31B23] hover:text-[#E31B23] transition-all inline-flex items-center gap-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Store Card Component ──────────────────────────────────────
function StoreCard({ store }: { store: StoreInfo }) {
  const [expanded, setExpanded] = useState(false);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${store.address}, ${store.city}, ${store.state} ${store.zip}`
  )}`;

  return (
    <div className="group rounded-xl border border-zinc-200 bg-white p-5 hover:border-[#E31B23]/30 hover:shadow-lg transition-all duration-300">
      {/* Name */}
      <h4 className="text-sm font-bold text-zinc-900 leading-snug group-hover:text-[#E31B23] transition-colors">
        {store.name}
      </h4>

      {/* Address */}
      <div className="flex items-start gap-2 mt-3">
        <MapPin className="size-3.5 text-zinc-400 shrink-0 mt-0.5" />
        <div className="text-xs text-zinc-500 leading-relaxed">
          <p>{store.address}</p>
          <p>
            {store.city}, {store.state} {store.zip}
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-2 mt-2.5">
        <Phone className="size-3.5 text-zinc-400 shrink-0" />
        <a
          href={`tel:${store.phone.replace(/[^+\d]/g, "")}`}
          className="text-xs font-semibold text-[#E31B23] hover:underline"
        >
          {store.phone}
        </a>
      </div>

      {/* Hours (toggle) */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 mt-3 text-xs font-semibold text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer"
      >
        <Clock className="size-3.5" />
        <span>{expanded ? "Hide Hours" : "View Hours"}</span>
        <ChevronRight
          className={`size-3 transition-transform duration-200 ${expanded ? "rotate-90" : ""}`}
        />
      </button>
      {expanded && (
        <div className="mt-2 ml-5.5 space-y-0.5 animate-fade-in">
          {store.hours.map((h, i) => (
            <p key={i} className="text-xs text-zinc-500">
              <span className="font-semibold text-zinc-700 inline-block w-20">{h.days}</span>
              {h.time}
            </p>
          ))}
        </div>
      )}

      {/* Feature badges */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {store.features.map((f) => (
          <span
            key={f}
            className="inline-block rounded-full bg-zinc-100 px-2.5 py-0.5 text-[10px] font-bold text-zinc-500 uppercase tracking-wide"
          >
            {f}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-100">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-lg bg-[#E31B23] py-2 text-center text-[11px] font-bold text-white uppercase tracking-wider hover:bg-black transition-all shadow-sm"
        >
          Get Directions
        </a>
        <a
          href={`tel:${store.phone.replace(/[^+\d]/g, "")}`}
          className="flex-1 rounded-lg border border-zinc-200 bg-white py-2 text-center text-[11px] font-bold text-zinc-700 uppercase tracking-wider hover:border-[#E31B23] hover:text-[#E31B23] transition-all"
        >
          Call Store
        </a>
      </div>
    </div>
  );
}
