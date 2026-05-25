import { useParams, Link } from "react-router-dom";
import {
  Building2,
  Briefcase,
  MapPin,
  Palette,
  Users,
  Newspaper,
  Trophy,
  Phone,
  HelpCircle,
  Truck,
  RotateCcw,
  Shield,
  FileText,
  Accessibility,
  BookOpen,
  Info,
  BookMarked,
  Monitor,
  ShoppingBag,
  Pipette,
  AlertTriangle,
  LogIn,
  ClipboardList,
  Clock,
  Repeat,
  Heart,
  Gift,
  Settings,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";

/* ──────────────────────────────────────────────
   Page data registry – one entry per footer link
   ────────────────────────────────────────────── */

interface PageInfo {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;       // accent color for the hero gradient
  sections: {
    heading: string;
    body: string;
  }[];
}

const PAGE_REGISTRY: Record<string, PageInfo> = {
  /* ── About Blick ─────────────────────────── */
  "about-us": {
    title: "About Us",
    subtitle: "Serving artists since 1911 — our story, our mission, our passion for art.",
    icon: Building2,
    color: "#E31B23",
    sections: [
      {
        heading: "Our Story",
        body: "Founded in 1911, Blick Art Materials has grown from a small storefront into the largest and oldest provider of art supplies in the United States. For over a century, we've been committed to providing artists of every level with the finest materials at the best prices. Our founder, Dick Blick, believed that art is for everyone — and that belief still drives everything we do today.",
      },
      {
        heading: "Our Mission",
        body: "We exist to support artists and creatives at every stage of their journey. Whether you're a first-time painter, a seasoned professional, or a classroom educator, we want to put the best possible tools in your hands. We work directly with manufacturers around the world to bring you the widest selection of supplies, at unbeatable value.",
      },
      {
        heading: "Our Values",
        body: "Quality, accessibility, and community are at the heart of everything we do. We test and curate every product we sell, offer expert guidance through our knowledgeable staff, and actively support arts education, sponsorships, and community programs nationwide.",
      },
    ],
  },
  careers: {
    title: "Careers",
    subtitle: "Join our creative team and help bring art to the world.",
    icon: Briefcase,
    color: "#6366f1",
    sections: [
      {
        heading: "Why Work at Blick?",
        body: "At Blick Art Materials, you'll be part of a team that is passionate about art and creativity. We offer competitive pay, generous employee discounts, comprehensive benefits, and a supportive work environment where your contributions make a real difference.",
      },
      {
        heading: "Open Positions",
        body: "We're always looking for talented individuals to join our retail stores, distribution centers, and corporate offices. From customer service specialists and visual merchandisers to warehouse associates and marketing professionals, there's a role for every passion.",
      },
      {
        heading: "How to Apply",
        body: "Browse our current openings on our careers portal and submit your application online. We review every application carefully and strive to respond within two weeks. Blick is an equal opportunity employer committed to diversity and inclusion.",
      },
    ],
  },
  "store-locations": {
    title: "Store Locations",
    subtitle: "Find a Blick store near you — with locations across 35+ states.",
    icon: MapPin,
    color: "#10b981",
    sections: [
      {
        heading: "Find Your Nearest Store",
        body: "With over 70 retail locations across the United States, there's likely a Blick store near you. Visit us in person to explore our full range of art supplies, get hands-on with products, and receive expert advice from our knowledgeable staff.",
      },
      {
        heading: "Store Services",
        body: "Many of our stores offer custom framing, canvas stretching, and special order services. We also host free workshops, demonstrations, and community events throughout the year. Check your local store page for upcoming events.",
      },
      {
        heading: "Store Hours",
        body: "Store hours vary by location. Most of our stores are open Monday through Saturday from 10:00 AM to 7:00 PM, and Sunday from 11:00 AM to 6:00 PM. Holiday hours may differ — please contact your local store for the most up-to-date information.",
      },
    ],
  },
  "blick-art-room": {
    title: "Blick Art Room",
    subtitle: "Inspiration, tutorials, and creative resources for artists of all levels.",
    icon: Palette,
    color: "#f59e0b",
    sections: [
      {
        heading: "Explore the Art Room",
        body: "The Blick Art Room is your go-to destination for creative inspiration. Discover step-by-step tutorials, artist interviews, technique guides, and product demonstrations designed to help you grow as an artist.",
      },
      {
        heading: "Tutorials & Guides",
        body: "From beginner watercolor techniques to advanced oil painting methods, our library of tutorials covers every medium and skill level. Each guide includes recommended supply lists so you can easily find everything you need.",
      },
      {
        heading: "Artist Spotlight",
        body: "Every month we feature inspiring artists from around the world, sharing their creative processes, favorite materials, and tips for fellow creators. Submit your own work for a chance to be featured!",
      },
    ],
  },
  "affiliate-program": {
    title: "Affiliate Program",
    subtitle: "Partner with Blick and earn commissions by sharing the art supplies you love.",
    icon: Users,
    color: "#8b5cf6",
    sections: [
      {
        heading: "Program Overview",
        body: "Join the Blick Affiliate Program and earn competitive commissions on every qualified sale you refer. Whether you're a blogger, YouTuber, social media influencer, or educator, our program provides the tools and support you need to succeed.",
      },
      {
        heading: "Benefits",
        body: "Affiliates enjoy competitive commission rates, a 15-day cookie window, access to exclusive promotions and banners, and a dedicated affiliate support team. We also offer performance bonuses for top-performing partners.",
      },
      {
        heading: "How to Join",
        body: "Signing up is easy and free. Apply through our affiliate network partner, and once approved, you'll receive a unique tracking link and access to our full suite of marketing materials. Start earning today!",
      },
    ],
  },
  "press-releases": {
    title: "Press Releases",
    subtitle: "The latest news, announcements, and media coverage from Blick Art Materials.",
    icon: Newspaper,
    color: "#0ea5e9",
    sections: [
      {
        heading: "Latest News",
        body: "Stay up to date with the latest announcements from Blick Art Materials, including new product launches, store openings, partnership announcements, and community initiatives. Our press room is regularly updated with the most current information.",
      },
      {
        heading: "Media Resources",
        body: "Members of the press can find official logos, brand guidelines, high-resolution images, and company fact sheets in our media resource center. For press inquiries, please contact our communications team directly.",
      },
      {
        heading: "In the News",
        body: "Blick Art Materials has been featured in numerous publications including The New York Times, Forbes, Art News, and more. Browse our media coverage highlights to see what people are saying about us.",
      },
    ],
  },
  "blick-sponsorships": {
    title: "Blick Sponsorships",
    subtitle: "Supporting art education, events, and creative communities nationwide.",
    icon: Trophy,
    color: "#f97316",
    sections: [
      {
        heading: "Our Commitment",
        body: "Blick Art Materials is proud to sponsor art events, educational programs, and creative organizations across the country. We believe in the transformative power of art and are dedicated to making it accessible to everyone.",
      },
      {
        heading: "Sponsorship Areas",
        body: "We support a wide range of initiatives including school art programs, museum exhibitions, community art fairs, plein air events, and national art competitions. Our sponsorships include product donations, funding, and promotional support.",
      },
      {
        heading: "Apply for Sponsorship",
        body: "If you represent an art organization, school, or event and would like to explore sponsorship opportunities with Blick, please submit a proposal through our online application form. We review requests on a quarterly basis.",
      },
    ],
  },

  /* ── Customer Service ────────────────────── */
  "contact-us": {
    title: "Contact Us",
    subtitle: "We're here to help — reach out to our customer service team anytime.",
    icon: Phone,
    color: "#E31B23",
    sections: [
      {
        heading: "Get in Touch",
        body: "Our dedicated customer service team is available to assist you Monday through Friday, 8:00 AM to 7:00 PM CT, and Saturday 8:00 AM to 5:00 PM CT. Call us at 1-800-828-4548 or email us at info@dickblick.com.",
      },
      {
        heading: "Live Chat",
        body: "For quick questions, try our live chat feature available during business hours. Click the chat icon in the bottom right corner of any page to connect with a knowledgeable representative in real time.",
      },
      {
        heading: "Corporate Office",
        body: "Blick Art Materials, LLC\nP.O. Box 1267\nGalesburg, IL 61402-1267\n\nFor corporate inquiries, partnerships, or media requests, please direct your correspondence to our corporate headquarters.",
      },
    ],
  },
  "help-faqs": {
    title: "Help & FAQs",
    subtitle: "Find answers to the most commonly asked questions about orders, shipping, and more.",
    icon: HelpCircle,
    color: "#6366f1",
    sections: [
      {
        heading: "Ordering",
        body: "You can place orders online 24/7 at dickblick.com, by phone at 1-800-828-4548, or by visiting any of our retail stores. We accept all major credit cards, PayPal, Apple Pay, and Blick Gift Cards. Orders are processed within 1-2 business days.",
      },
      {
        heading: "Shipping & Delivery",
        body: "We offer several shipping options including Standard (5-10 business days), Expedited (2-3 business days), and Next Day delivery. Free shipping is available on qualifying orders over $35. Some oversized items may incur additional shipping charges.",
      },
      {
        heading: "Returns & Exchanges",
        body: "We want you to be completely satisfied with your purchase. If for any reason you're not happy, you can return most unused items within 60 days for a full refund or exchange. Custom framing orders and select items may have different return policies.",
      },
    ],
  },
  "shipping-policy": {
    title: "Shipping Policy",
    subtitle: "Everything you need to know about how we ship your art supplies.",
    icon: Truck,
    color: "#10b981",
    sections: [
      {
        heading: "Shipping Methods",
        body: "We offer Standard Ground (5-10 business days), Expedited (2-3 business days), and Next Day Air shipping options. Free standard shipping is available on orders over $35 shipped within the contiguous United States.",
      },
      {
        heading: "Processing Times",
        body: "Orders placed before 2:00 PM CT on business days are typically processed and shipped the same day. During peak seasons and promotional periods, processing may take an additional 1-2 business days.",
      },
      {
        heading: "Special Items",
        body: "Some items such as large canvases, easels, and furniture may require special shipping arrangements and additional handling fees. Hazardous materials (solvents, spray paints, etc.) can only ship via ground service and may have restrictions.",
      },
    ],
  },
  "return-policy": {
    title: "Return Policy",
    subtitle: "Easy returns and exchanges — your satisfaction is our priority.",
    icon: RotateCcw,
    color: "#f59e0b",
    sections: [
      {
        heading: "Return Policy Overview",
        body: "If you're not completely satisfied with your purchase, you may return most new, unused items within 60 days of delivery for a full refund. Items must be in their original packaging with all accessories and documentation included.",
      },
      {
        heading: "How to Return",
        body: "To initiate a return, contact our customer service team or visit your nearest Blick store. Online orders can be returned by mail using a prepaid shipping label (a small fee may apply) or in-store for free at any Blick location.",
      },
      {
        heading: "Exceptions",
        body: "Custom framing orders, cut-to-order materials, special orders, and items marked as final sale are not eligible for return. Gift cards, digital downloads, and clearance items may also have modified return policies.",
      },
    ],
  },
  "privacy-policy": {
    title: "Privacy Policy",
    subtitle: "How we collect, use, and protect your personal information.",
    icon: Shield,
    color: "#8b5cf6",
    sections: [
      {
        heading: "Information We Collect",
        body: "We collect information you provide directly, such as your name, email address, shipping address, and payment information when you place an order. We also collect browsing data and usage information through cookies and similar technologies to improve your shopping experience.",
      },
      {
        heading: "How We Use Your Information",
        body: "Your information is used to process orders, communicate with you about your purchases, provide customer support, and personalize your shopping experience. We may also send you promotional emails if you've opted in — you can unsubscribe at any time.",
      },
      {
        heading: "Data Protection",
        body: "We implement industry-standard security measures including SSL encryption, secure payment processing, and regular security audits to protect your personal information. We never sell your data to third parties.",
      },
    ],
  },
  "terms-of-use": {
    title: "Terms of Use",
    subtitle: "The terms and conditions governing your use of dickblick.com.",
    icon: FileText,
    color: "#0ea5e9",
    sections: [
      {
        heading: "Acceptance of Terms",
        body: "By accessing and using dickblick.com, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website. We reserve the right to update these terms at any time, and your continued use constitutes acceptance.",
      },
      {
        heading: "Intellectual Property",
        body: "All content on this website, including text, images, graphics, logos, and software, is the property of Blick Art Materials or its content suppliers and is protected by copyright and trademark laws. Unauthorized use of any materials is strictly prohibited.",
      },
      {
        heading: "Limitation of Liability",
        body: "Blick Art Materials shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website. Product images are for illustration purposes and may vary slightly from actual products.",
      },
    ],
  },
  "accessibility-statement": {
    title: "Accessibility Statement",
    subtitle: "Our commitment to making art supplies accessible to everyone.",
    icon: Accessibility,
    color: "#14b8a6",
    sections: [
      {
        heading: "Our Commitment",
        body: "Blick Art Materials is committed to ensuring that our website is accessible to all users, including those with disabilities. We strive to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.",
      },
      {
        heading: "Accessibility Features",
        body: "Our website includes features such as alternative text for images, keyboard navigation support, clear heading structure, sufficient color contrast, and compatibility with screen readers and other assistive technologies.",
      },
      {
        heading: "Feedback & Assistance",
        body: "If you encounter any accessibility barriers or have suggestions for improvement, please contact us at accessibility@dickblick.com or call 1-800-828-4548. We take all feedback seriously and continuously work to improve the accessibility of our site.",
      },
    ],
  },

  /* ── Resources ───────────────────────────── */
  "lesson-plans": {
    title: "Lesson Plans",
    subtitle: "Free, standards-aligned lesson plans for educators and art teachers.",
    icon: BookOpen,
    color: "#E31B23",
    sections: [
      {
        heading: "Free Lesson Plans",
        body: "Explore hundreds of free, downloadable lesson plans created by experienced art educators. Each lesson includes step-by-step instructions, supply lists, learning objectives, and alignment with National Visual Arts Standards.",
      },
      {
        heading: "Browse by Grade Level",
        body: "Our lesson plans cover all grade levels from Pre-K through 12th grade, as well as college-level and adult education. Filter by medium, technique, art historical period, or specific learning standard to find the perfect lesson for your classroom.",
      },
      {
        heading: "Submit Your Lesson",
        body: "Are you an art educator with a great lesson plan? We'd love to feature your work! Submit your lesson plan for review, and if selected, you'll receive a Blick gift card as a thank-you for contributing to our educational resources.",
      },
    ],
  },
  "product-information": {
    title: "Product Information",
    subtitle: "Detailed specifications, comparisons, and expert reviews on our products.",
    icon: Info,
    color: "#6366f1",
    sections: [
      {
        heading: "Product Details",
        body: "Every product on our website includes detailed specifications, high-resolution images, customer reviews, and expert recommendations. We provide comprehensive product descriptions to help you make informed purchasing decisions.",
      },
      {
        heading: "Product Comparisons",
        body: "Not sure which product is right for you? Our comparison tools and buying guides make it easy to evaluate options side by side. Compare features, prices, and user ratings across similar products to find the perfect match.",
      },
      {
        heading: "Expert Reviews",
        body: "Our product experts regularly test and review supplies across every category. Read their in-depth assessments, watch video demonstrations, and get professional tips for getting the most out of your materials.",
      },
    ],
  },
  "order-catalog": {
    title: "Order Catalog",
    subtitle: "Request a free print catalog delivered right to your door.",
    icon: BookMarked,
    color: "#10b981",
    sections: [
      {
        heading: "Free Print Catalog",
        body: "Browse our complete selection of art supplies in the comfort of your home with a free Blick Art Materials catalog. Our comprehensive catalogs feature thousands of products with detailed descriptions and pricing information.",
      },
      {
        heading: "Request Your Copy",
        body: "Fill out our online form with your mailing address to receive your free catalog within 2-3 weeks. You can also call 1-800-828-4548 to request a catalog by phone. We publish updated editions throughout the year.",
      },
      {
        heading: "Specialty Catalogs",
        body: "In addition to our general catalog, we offer specialty catalogs for specific areas including ceramics, printmaking, and educational supplies. Request any or all of our catalogs at no charge.",
      },
    ],
  },
  "digital-catalog": {
    title: "Digital Catalog",
    subtitle: "Browse our complete catalog online — interactive, searchable, and always up to date.",
    icon: Monitor,
    color: "#f59e0b",
    sections: [
      {
        heading: "Browse Online",
        body: "Our digital catalog gives you instant access to our complete product lineup with interactive features including zoom, search, and direct links to product pages for easy ordering. No download required — browse right in your web browser.",
      },
      {
        heading: "Always Current",
        body: "Unlike print catalogs, our digital catalog is updated regularly with the latest products, pricing, and promotions. Bookmark it for quick reference whenever you need to explore our selection.",
      },
      {
        heading: "Share & Save",
        body: "Found something you love? Share individual pages or products directly with friends and colleagues via email or social media. You can also save pages to your device for offline browsing.",
      },
    ],
  },
  "buying-guides": {
    title: "Buying Guides",
    subtitle: "Expert guidance to help you choose the right supplies for your art practice.",
    icon: ShoppingBag,
    color: "#8b5cf6",
    sections: [
      {
        heading: "Find the Right Supplies",
        body: "Our buying guides are written by experienced artists and product experts to help you navigate our extensive selection. Whether you're setting up your first studio or upgrading your professional toolkit, we have a guide for you.",
      },
      {
        heading: "Guides by Medium",
        body: "Explore guides for oil painting, watercolor, acrylics, drawing, printmaking, ceramics, sculpture, and more. Each guide covers essential supplies, recommended products at various price points, and pro tips for getting started.",
      },
      {
        heading: "Budget & Level Guides",
        body: "We offer buying guides tailored to different budgets and skill levels — from student starter kits to professional-grade setups. Find the best value options that match your needs without compromising on quality.",
      },
    ],
  },
  "color-charts": {
    title: "Color Charts",
    subtitle: "Explore and compare colors across brands with our comprehensive color charts.",
    icon: Pipette,
    color: "#ec4899",
    sections: [
      {
        heading: "Interactive Color Charts",
        body: "Our color charts provide a visual reference for comparing colors across different brands and product lines. View accurate color swatches, pigment information, lightfastness ratings, and transparency levels for paints, pastels, markers, and more.",
      },
      {
        heading: "Brand Comparisons",
        body: "Easily compare similar colors across brands to find the perfect match. Our cross-reference tools help you identify equivalent colors when switching between brands or building a versatile palette.",
      },
      {
        heading: "Download & Print",
        body: "Download printable color charts for offline reference in your studio. Note that printed colors may vary from on-screen representations due to monitor calibration and printer settings.",
      },
    ],
  },
  "safety-data-sheets": {
    title: "Safety Data Sheets (SDS)",
    subtitle: "Access safety information for all products — for your health and compliance.",
    icon: AlertTriangle,
    color: "#ef4444",
    sections: [
      {
        heading: "What Are SDS?",
        body: "Safety Data Sheets (SDS) provide essential information about the chemical composition, hazards, safe handling, storage, and disposal of products. They are required by OSHA and are available for all applicable products we sell.",
      },
      {
        heading: "Search SDS Database",
        body: "Use our searchable database to find Safety Data Sheets for any product. Search by product name, item number, or manufacturer. SDS documents are available as downloadable PDFs for your records.",
      },
      {
        heading: "Safety First",
        body: "Always read and follow the safety guidelines provided on product labels and in Safety Data Sheets. If you have questions about the safe use of any product, contact our customer service team or the manufacturer directly.",
      },
    ],
  },

  /* ── My Account ──────────────────────────── */
  "sign-in": {
    title: "Sign In / Register",
    subtitle: "Access your account or create a new one to enjoy exclusive benefits.",
    icon: LogIn,
    color: "#E31B23",
    sections: [
      {
        heading: "Sign In",
        body: "Welcome back! Sign in to your Blick account to view your order history, track shipments, manage your wishlist, and enjoy a faster checkout experience. Enter your email and password to get started.",
      },
      {
        heading: "Create an Account",
        body: "New to Blick? Creating an account is free and only takes a minute. Enjoy benefits like order tracking, wishlist management, faster checkout, and exclusive member-only offers and promotions.",
      },
      {
        heading: "Account Benefits",
        body: "Registered members receive early access to sales, personalized product recommendations, the ability to save multiple shipping addresses, and easy reordering of frequently purchased items.",
      },
    ],
  },
  "order-status": {
    title: "Order Status",
    subtitle: "Track your order in real-time from processing to delivery.",
    icon: ClipboardList,
    color: "#6366f1",
    sections: [
      {
        heading: "Track Your Order",
        body: "Enter your order number and email address to check the current status of your order. You'll be able to see whether your order is being processed, has shipped, or is out for delivery, along with estimated delivery dates.",
      },
      {
        heading: "Shipping Notifications",
        body: "Once your order ships, you'll receive an email notification with a tracking number and a link to track your package in real time. You can also view tracking information directly from your account dashboard.",
      },
      {
        heading: "Need Help?",
        body: "If your order hasn't arrived within the estimated delivery window, or if you have any concerns about your shipment, please contact our customer service team at 1-800-828-4548 for immediate assistance.",
      },
    ],
  },
  "order-history": {
    title: "Order History",
    subtitle: "View and manage all your past orders in one place.",
    icon: Clock,
    color: "#10b981",
    sections: [
      {
        heading: "Your Order History",
        body: "Access a complete history of all your orders placed with Blick Art Materials. View order details, track shipments, download invoices, and easily reorder your favorite supplies with just a few clicks.",
      },
      {
        heading: "Reorder with Ease",
        body: "Found a product you love? Your order history makes it simple to reorder items. Just click the reorder button next to any previous purchase to add it back to your cart instantly.",
      },
      {
        heading: "Returns from History",
        body: "Need to return an item? You can initiate a return directly from your order history page. Select the order and items you'd like to return, and we'll guide you through the process step by step.",
      },
    ],
  },
  "quick-reorder": {
    title: "Quick Reorder",
    subtitle: "Restock your favorite supplies in seconds — one-click reordering.",
    icon: Repeat,
    color: "#f59e0b",
    sections: [
      {
        heading: "One-Click Reordering",
        body: "Quick Reorder lets you restock your most-purchased items in seconds. Simply browse your frequently ordered products and add them to your cart with a single click. It's the fastest way to replenish your art supply collection.",
      },
      {
        heading: "Favorites List",
        body: "Build a personalized favorites list of products you purchase regularly. Quick Reorder remembers your preferences and displays your go-to supplies for effortless shopping.",
      },
      {
        heading: "Subscription Options",
        body: "For items you use on a regular basis, consider setting up auto-delivery to ensure you never run out. Choose your delivery frequency and we'll handle the rest — with free shipping on qualifying subscriptions.",
      },
    ],
  },
  "my-wishlist": {
    title: "My Wishlist",
    subtitle: "Save your dream supplies and share your wishlist with friends and family.",
    icon: Heart,
    color: "#ec4899",
    sections: [
      {
        heading: "Your Wishlist",
        body: "Keep track of products you love by adding them to your wishlist. It's the perfect way to save items for later, plan future purchases, or create a gift list for holidays and special occasions.",
      },
      {
        heading: "Share Your List",
        body: "Share your wishlist with friends, family, or fellow artists via email or social media. It's a great way to let others know exactly what art supplies you'd love to receive as gifts.",
      },
      {
        heading: "Price Alerts",
        body: "Get notified when items on your wishlist go on sale or drop in price. Never miss a deal on the supplies you've been eyeing — we'll send you an alert so you can snag them at the best price.",
      },
    ],
  },
  "my-gift-cards": {
    title: "My Gift Cards",
    subtitle: "Manage your gift card balances and purchase new cards for fellow artists.",
    icon: Gift,
    color: "#8b5cf6",
    sections: [
      {
        heading: "Gift Card Balance",
        body: "Check the balance on your Blick Gift Cards by entering the card number and PIN. You can use multiple gift cards on a single order and combine them with other payment methods for maximum flexibility.",
      },
      {
        heading: "Purchase Gift Cards",
        body: "Give the gift of creativity! Blick Gift Cards are available in denominations from $10 to $500 and can be sent physically or via email. They never expire and have no fees — the full value goes toward art supplies.",
      },
      {
        heading: "Corporate & Bulk Orders",
        body: "Looking for gift cards for employee rewards, school programs, or corporate events? We offer bulk pricing and custom branding options for orders of 25 or more cards. Contact our corporate sales team for details.",
      },
    ],
  },
  "account-settings": {
    title: "Account Settings",
    subtitle: "Manage your profile, addresses, payment methods, and preferences.",
    icon: Settings,
    color: "#0ea5e9",
    sections: [
      {
        heading: "Profile Information",
        body: "Update your name, email address, phone number, and password. Keeping your profile information current ensures you receive important order updates and communications from Blick.",
      },
      {
        heading: "Addresses & Payment",
        body: "Manage your saved shipping addresses and payment methods for a faster checkout experience. Add, edit, or remove addresses and cards at any time from your account dashboard.",
      },
      {
        heading: "Communication Preferences",
        body: "Control how and when you hear from us. Manage your email subscription preferences, choose which promotional communications you'd like to receive, and opt in or out of SMS notifications.",
      },
    ],
  },
};

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */

export default function FooterPage() {
  const { pageId } = useParams<{ pageId: string }>();
  const page = pageId ? PAGE_REGISTRY[pageId] : undefined;

  if (!page) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4 animate-fade-in">
        <div className="text-6xl font-black text-zinc-200">404</div>
        <p className="text-lg font-semibold text-zinc-500">Page not found</p>
        <Link
          to="/"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#E31B23] px-6 py-2.5 text-sm font-bold text-white hover:bg-red-700 transition-colors"
        >
          <ArrowLeft className="size-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  const Icon = page.icon;

  return (
    <div className="animate-fade-in">
      {/* ── Hero ────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-zinc-950 py-20 sm:py-28"
      >
        {/* Gradient blobs */}
        <div
          className="pointer-events-none absolute -top-32 -left-32 size-96 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: page.color }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 size-80 rounded-full opacity-15 blur-3xl"
          style={{ backgroundColor: page.color }}
        />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          {/* Icon */}
          <div
            className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl border border-white/10 shadow-lg"
            style={{ backgroundColor: `${page.color}20` }}
          >
            <Icon className="size-8" style={{ color: page.color }} />
          </div>

          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center justify-center gap-1.5 text-xs font-bold text-zinc-500 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-zinc-300">{page.title}</span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            {page.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base font-medium text-zinc-400 leading-relaxed">
            {page.subtitle}
          </p>
        </div>
      </section>

      {/* ── Content Sections ────────────────── */}
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
        {page.sections.map((section, i) => (
          <article
            key={i}
            className="group rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-1 flex items-center gap-3">
              <div
                className="size-1.5 rounded-full shrink-0"
                style={{ backgroundColor: page.color }}
              />
              <h2 className="text-lg sm:text-xl font-extrabold text-zinc-900 uppercase tracking-wide">
                {section.heading}
              </h2>
            </div>
            <div className="ml-4.5 border-l-2 border-zinc-100 pl-5 mt-3">
              <p className="text-sm text-zinc-600 leading-relaxed whitespace-pre-line">
                {section.body}
              </p>
            </div>
          </article>
        ))}

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-8 py-3 text-sm font-bold text-white hover:bg-[#E31B23] transition-all"
          >
            <ArrowLeft className="size-4" />
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
