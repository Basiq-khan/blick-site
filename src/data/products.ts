export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  discount?: string;
  isNew?: boolean;
  isClearance?: boolean;
  options?: string[];
}

export const ALL_PRODUCTS: Product[] = [
    {
        "image":  "/images/products/06461-Group-1-4ww.jpg",
        "rating":  4.8,
        "id":  "brushes-and-painting-tools",
        "price":  4.93,
        "category":  "brushes \u0026 painting tools",
        "description":  "Containing a blend of luxurious NextGen synthetic filaments, Princeton Velvetouch Synthetic Brushes are the ultimate mixed media tool for watercolors,...",
        "reviewsCount":  659,
        "isNew":  false,
        "name":  "Princeton Velvetouch Synthetic Brushes and Sets",
        "discount":  "SAVE up to 60% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/06421-Group-M-4ww.jpg",
        "rating":  4.8,
        "id":  "brushes-and-painting-tools-1",
        "price":  4.79,
        "category":  "brushes \u0026 painting tools",
        "description":  "Princeton Catalyst Polytip Bristle Brushes are another Princeton breakthrough that advances the science of synthetic hair. By giving each individual h...",
        "reviewsCount":  382,
        "isNew":  false,
        "name":  "Princeton Catalyst Polytip Bristle Brushes and Sets",
        "discount":  "SAVE 44-67% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/09160-GroupAll-1-4ww.jpg",
        "rating":  4.9,
        "id":  "brushes-and-painting-tools-2",
        "price":  8.29,
        "category":  "brushes \u0026 painting tools",
        "description":  "Princeton Aspen Synthetic Brushes combine performance, practicality, and style. Made from synthetic bristles with the same stiffness as natural bristl...",
        "reviewsCount":  165,
        "isNew":  false,
        "name":  "Princeton Aspen Synthetic Brushes and Sets",
        "discount":  "SAVE up to 60% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/06280-1269-1-4ww.jpg",
        "rating":  4.5,
        "id":  "brushes-and-painting-tools-3",
        "price":  5.13,
        "category":  "brushes \u0026 painting tools",
        "description":  "Available in a range of shapes, sizes, and hair types, these very affordable brush sets are great for students, beginners, and the price-conscious pro...",
        "reviewsCount":  72,
        "isNew":  false,
        "name":  "Blick Essentials Brown Nylon Value Brush Sets",
        "discount":  "SAVE 28% or more off List!",
        "isClearance":  false,
        "options":  [
                        "+ 4 Options"
                    ]
    },
    {
        "image":  "/images/products/06223-9153-M-4ww.jpg",
        "rating":  4.7,
        "id":  "brushes-and-painting-tools-4",
        "price":  5.5,
        "category":  "brushes \u0026 painting tools",
        "description":  "Create all kinds of projects with Princeton Real Value Series 9100 Synthetic Golden Taklon Brush Sets. These paintbrushes are great for use with any m...",
        "reviewsCount":  48,
        "isNew":  false,
        "name":  "Princeton Real Value Series 9100 Synthetic Golden Taklon Brush Sets",
        "discount":  "SAVE 44-50% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 17 Options"
                    ]
    },
    {
        "image":  "/images/products/06223-9153-M-4ww_1.jpg",
        "rating":  4.7,
        "id":  "brushes-and-painting-tools-5",
        "price":  1.6,
        "category":  "brushes \u0026 painting tools",
        "description":  "Royal \u0026 Langnickel Big Kids\u0027 Choice Lil\u0027 Grippers Brushes feature short, thick handles with a soft rubber grip that gives kids better handling and con...",
        "reviewsCount":  65,
        "isNew":  false,
        "name":  "Royal \u0026 Langnickel Big Kid\u0027s Choice Lil\u0027 Grippers Synthetic Brushes and Sets",
        "discount":  "SAVE up to 42% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/06082-2619-2-4ww.jpg",
        "rating":  4.5,
        "id":  "brushes-and-painting-tools-6",
        "price":  7.4,
        "category":  "brushes \u0026 painting tools",
        "description":  "Robert Simmons Signet brushes are handmade using high-quality Chungking hog bristle, interlocked and deep-set in extra-long, seamless, nickel-plated f...",
        "reviewsCount":  205,
        "isNew":  false,
        "name":  "Robert Simmons Signet Bristle Brushes and Sets",
        "discount":  "SAVE 20-47% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 43 Options"
                    ]
    },
    {
        "image":  "/images/products/06644-Group-4ww.jpg",
        "rating":  4.7,
        "id":  "brushes-and-painting-tools-7",
        "price":  10.01,
        "category":  "brushes \u0026 painting tools",
        "description":  "Utrecht Manglon Synthetic Brushes are known for their excellent paint capacity, their silky feel, an extraordinary snap-back, and great shape retentio...",
        "reviewsCount":  114,
        "isNew":  false,
        "name":  "Utrecht Manglon Synthetic Brushes and Sets",
        "discount":  "SAVE 40% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 31 Options"
                    ]
    },
    {
        "image":  "/images/products/04616-Group-1-3ww-l.jpg",
        "rating":  4.8,
        "id":  "brushes-and-painting-tools-8",
        "price":  9.02,
        "category":  "brushes \u0026 painting tools",
        "description":  "Princeton\u0027s long handle synthetic bristle brush has excellent stiffness, snap, and hair shape retention for maximum control. Easier to clean than natu...",
        "reviewsCount":  131,
        "isNew":  false,
        "name":  "Princeton Dakota Series 6300 Firm Synthetic Hair Brushes and Set",
        "discount":  "SAVE 44-58% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 31 Options"
                    ]
    },
    {
        "image":  "/images/products/06280-1139-3-4ww.jpg",
        "rating":  4.2,
        "id":  "brushes-and-painting-tools-9",
        "price":  5.14,
        "category":  "brushes \u0026 painting tools",
        "description":  "Available in a range of shapes, sizes, and hair types, these very affordable brush sets are great for students, beginners, and the price-conscious pro...",
        "reviewsCount":  63,
        "isNew":  false,
        "name":  "Blick Essentials White Nylon Value Brush Sets",
        "discount":  "SAVE 28% or more off List!",
        "isClearance":  false,
        "options":  [
                        "+ 4 Options"
                    ]
    },
    {
        "image":  "/images/products/04627-group-1-3ww-l.jpg",
        "rating":  4.7,
        "id":  "brushes-and-painting-tools-10",
        "price":  9.06,
        "category":  "brushes \u0026 painting tools",
        "description":  "The Escoda Versatil Synthetic Brush is the modern-day alternative to natural Kolinsky. Utilizing a carefully selected custom blend of uniquely pattern...",
        "reviewsCount":  219,
        "isNew":  false,
        "name":  "Escoda Versatil Synthetic Brushes and Sets",
        "discount":  "SAVE up to 49% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/05891-1079-1-4ww.jpg",
        "rating":  4.8,
        "id":  "brushes-and-painting-tools-11",
        "price":  3.85,
        "category":  "brushes \u0026 painting tools",
        "description":  "Royal \u0026 Langnickel Aqualon Brushes are soft fan brushes made from durable, multi-diameter synthetic fibers, perfect for covering large surfaces with c...",
        "reviewsCount":  59,
        "isNew":  false,
        "name":  "Royal \u0026 Langnickel Aqualon Soft Synthetic Fan Brushes",
        "discount":  "SAVE 29-37% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 4 Options"
                    ]
    },
    {
        "image":  "/images/products/05358-group3ww-l.jpg",
        "rating":  4.6,
        "id":  "brushes-and-painting-tools-12",
        "price":  2.69,
        "category":  "brushes \u0026 painting tools",
        "description":  "Lightweight and easy to handle, Royal \u0026 Langnickel Zen brushes are appropriate for all media. Synthetic multi-diameter filaments form excellent points...",
        "reviewsCount":  198,
        "isNew":  false,
        "name":  "Royal \u0026 Langnickel Zen All Media Brushes and Sets",
        "discount":  "SAVE up to 20% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/06223-9130-M-4ww.jpg",
        "rating":  4.8,
        "id":  "brushes-and-painting-tools-13",
        "price":  4.21,
        "category":  "brushes \u0026 painting tools",
        "description":  "The Golden Taklon short-handled Snap! brushes are ideal for acrylic and watercolor paints. Fun, but not frivolous, Snap! brushes from Princeton Artist...",
        "reviewsCount":  108,
        "isNew":  false,
        "name":  "Princeton SNAP! Series 9650 Golden Synthetic Brushes and Sets",
        "discount":  "SAVE up to 52% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 22 Options"
                    ]
    },
    {
        "image":  "/images/products/09124-09128-Group-4ww.jpg",
        "rating":  4.5,
        "id":  "brushes-and-painting-tools-14",
        "price":  12.29,
        "category":  "brushes \u0026 painting tools",
        "description":  "Bob Ross Synthetic and Bristle Blend Brushes feature a durable blend of high-quality synthetic and natural hog hair bristles shaped according to Bob R...",
        "reviewsCount":  31,
        "isNew":  false,
        "name":  "Bob Ross Synthetic and Bristle Blend Brushes",
        "discount":  "SAVE 20% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 4 Options"
                    ]
    },
    {
        "image":  "/images/products/07140-group3ww-l.jpg",
        "rating":  4.7,
        "id":  "canvas-and-surfaces",
        "price":  3.82,
        "category":  "canvas \u0026 surfaces",
        "description":  "For works in oils or acrylics, Blick Premier Stretched Cotton Canvas offers the high quality you expect from Blick — with an affordable price. Availab...",
        "reviewsCount":  3553,
        "isNew":  false,
        "name":  "Blick Premier Stretched Cotton Canvas",
        "discount":  "SAVE 16-79% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/07526-group-1-4ww.jpg",
        "rating":  4.8,
        "id":  "canvas-and-surfaces-1",
        "price":  16.99,
        "category":  "canvas \u0026 surfaces",
        "description":  "Blick Super Value Canvas Packs are easy on budgets and come in popular sizes. Pre-primed with three coats of acid-free acrylic gesso, they\u0027re ready to...",
        "reviewsCount":  1524,
        "isNew":  false,
        "name":  "Blick Super Value Canvas Packs",
        "discount":  "SAVE 57-70% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 12 Options"
                    ]
    },
    {
        "image":  "/images/products/07135-group-2-1-4ww.jpg",
        "rating":  4.7,
        "id":  "canvas-and-surfaces-2",
        "price":  3.06,
        "category":  "canvas \u0026 surfaces",
        "description":  "For quality, dependability and affordability there is no better choice than Blick Studio Canvas. Economically priced, it is the perfect high-quality s...",
        "reviewsCount":  2066,
        "isNew":  false,
        "name":  "Blick Studio Stretched Cotton Canvas",
        "discount":  "SAVE 18-78% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/MacPherson_banners-34.jpg",
        "rating":  4.4,
        "id":  "canvas-and-surfaces-3",
        "price":  0.65,
        "category":  "canvas \u0026 surfaces",
        "description":  "Once in a lifetime closeout prices! Wide variety of brands and products to choose from. Great value.",
        "reviewsCount":  0,
        "isNew":  false,
        "name":  "Traditional Profile Stretched Canvas Liquidation",
        "discount":  "SAVE up to 85% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/07161-1824-M-4ww.jpg",
        "rating":  4.6,
        "id":  "canvas-and-surfaces-4",
        "price":  16.46,
        "category":  "canvas \u0026 surfaces",
        "description":  "Intended for the most demanding professional, Blick Premier Heavyweight Cotton Canvas is made from professional-grade, archival-quality 100% cotton du...",
        "reviewsCount":  292,
        "isNew":  false,
        "name":  "Blick Premier Heavyweight Stretched Cotton Canvas",
        "discount":  "SAVE 50-60% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/07166-2228-M-4ww.jpg",
        "rating":  4,
        "id":  "canvas-and-surfaces-5",
        "price":  6.35,
        "category":  "canvas \u0026 surfaces",
        "description":  "Economically priced for students and professionals, Blick Studio Linen Canvas is the perfect high-quality substrate for ensuring archival longevity, o...",
        "reviewsCount":  215,
        "isNew":  false,
        "name":  "Blick Studio 100% Linen Stretched Canvas",
        "discount":  "SAVE 16-71% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/07167-group-3ww-l.jpg",
        "rating":  4.7,
        "id":  "canvas-and-surfaces-6",
        "price":  3.17,
        "category":  "canvas \u0026 surfaces",
        "description":  "An economical option for students, good-quality Blick Academic Cotton Stretched Canvas is back-stapled for easier re-stretching. The 5/8\" thick s...",
        "reviewsCount":  448,
        "isNew":  false,
        "name":  "Blick Academic Canvas 2-Packs",
        "discount":  "SAVE 57-78% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 7 Options"
                    ]
    },
    {
        "image":  "/images/products/MacPherson_banners-34.jpg",
        "rating":  4,
        "id":  "canvas-and-surfaces-7",
        "price":  3.48,
        "category":  "canvas \u0026 surfaces",
        "description":  "Once in a lifetime closeout prices! Wide variety of brands and products to choose from. Great value.",
        "reviewsCount":  0,
        "isNew":  false,
        "name":  "Gallery Profile Stretched Canvas Liquidation",
        "discount":  "SAVE up to 77% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/07108-1008-2-3ww-l.jpg",
        "rating":  4.5,
        "id":  "canvas-and-surfaces-8",
        "price":  6.65,
        "category":  "canvas \u0026 surfaces",
        "description":  "Red Label Artist Series is a professional-quality stretched canvas made from 100% cotton duck with a medium texture. The 100% cotton, 7 oz canvas is t...",
        "reviewsCount":  232,
        "isNew":  false,
        "name":  "Fredrix Red Label Cotton Canvas",
        "discount":  "SAVE up to 53% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/MacPherson_banners-34.jpg",
        "rating":  5,
        "id":  "canvas-and-surfaces-9",
        "price":  0.65,
        "category":  "canvas \u0026 surfaces",
        "description":  "Once in a lifetime closeout prices! Wide variety of brands and products to choose from. Great value.",
        "reviewsCount":  0,
        "isNew":  false,
        "name":  "Hello, Artist! Canvas and Boards Liquidation",
        "discount":  "SAVE up to 85% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 32 Options"
                    ]
    },
    {
        "image":  "/images/products/07173-1020-M-4ww.jpg",
        "rating":  4.6,
        "id":  "canvas-and-surfaces-10",
        "price":  37.4,
        "category":  "canvas \u0026 surfaces",
        "description":  "Ideal for artists at all skill levels, the Fredrix Pro Series features the world-famous Tara/Fredrix Dixie #123 12 oz cotton duck canvas, double-prime...",
        "reviewsCount":  74,
        "isNew":  false,
        "name":  "Fredrix Pro Series Dixie Cotton Canvas",
        "discount":  "SAVE up to 53% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/07162-1114-4ww.jpg",
        "rating":  4.3,
        "id":  "canvas-and-surfaces-11",
        "price":  25.74,
        "category":  "canvas \u0026 surfaces",
        "description":  "Considered the ultimate painting surface for oils, Belgian linen is the highest-quality substrate available for artists seeking a superior painting ex...",
        "reviewsCount":  64,
        "isNew":  false,
        "name":  "Blick Premier Oil Primed Belgian Linen Canvas",
        "discount":  "SAVE 40-50% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 33 Options"
                    ]
    },
    {
        "image":  "/images/products/07112-9002-M-4ww.jpg",
        "rating":  4.8,
        "id":  "canvas-and-surfaces-12",
        "price":  12.76,
        "category":  "canvas \u0026 surfaces",
        "description":  "Bring new dimensionality to your paintings with this Fredrix Convexo Stretched Canvas. Medium-textured, pure cotton duck canvas is stretched across it...",
        "reviewsCount":  58,
        "isNew":  false,
        "name":  "Fredrix Convexo Round and Oval Stretched Canvas",
        "discount":  "SAVE 13-48% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 13 Options"
                    ]
    },
    {
        "image":  "/images/products/07703-1005-M-4ww.jpg",
        "rating":  4.7,
        "id":  "canvas-and-surfaces-13",
        "price":  14.56,
        "category":  "canvas \u0026 surfaces",
        "description":  "Fredrix Blue Label Cotton Canvas has the smoothest working surface that Fredrix offers, perfect for portraiture and fine detail work. Choose from two ...",
        "reviewsCount":  179,
        "isNew":  false,
        "name":  "Fredrix Blue Label Cotton Canvas",
        "discount":  "SAVE up to 21% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 21 Options"
                    ]
    },
    {
        "image":  "/images/products/07197-1402-3ww-l.jpg",
        "rating":  4.5,
        "id":  "canvas-and-surfaces-14",
        "price":  3.99,
        "category":  "canvas \u0026 surfaces",
        "description":  "Make a big impact with a small work of art! Blick Mini Cotton Canvas Packs are perfect for quick studies, miniatures, multiples, crafts, and gifts. Th...",
        "reviewsCount":  63,
        "isNew":  false,
        "name":  "Blick Mini Cotton Canvas Packs",
        "discount":  "SAVE 20-47% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 8 Options"
                    ]
    },
    {
        "image":  "/images/products/30446-art-V-4ww.jpg",
        "rating":  4.9,
        "id":  "ceramics-and-sculpture",
        "price":  19.16,
        "category":  "ceramics \u0026 sculpture",
        "description":  "Amaco Potter\u0027s Choice glazes achieve the effects of Cone 10 reduction without the need for a reduction gas kiln or firing to high temperatures. These ...",
        "reviewsCount":  985,
        "isNew":  false,
        "name":  "Amaco Potter\u0027s Choice Glazes",
        "discount":  "SAVE 17% or more off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/30411-6006-3-4ww.jpg",
        "rating":  4.8,
        "id":  "ceramics-and-sculpture-1",
        "price":  6.72,
        "category":  "ceramics \u0026 sculpture",
        "description":  "Lead-free Amaco Velvets are opaque underglazes which have the appearance of velvet when left unglazed. When glazed with transparent matte glaze they w...",
        "reviewsCount":  375,
        "isNew":  false,
        "name":  "Amaco Lead-Free Velvet Underglazes",
        "discount":  "SAVE up to 20% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/30588-5396-M-4ww.jpg",
        "rating":  4.8,
        "id":  "ceramics-and-sculpture-2",
        "price":  10.62,
        "category":  "ceramics \u0026 sculpture",
        "description":  "Mayco Stoneware Classic Glazes offer incredible versatility and ease for potters of all levels. Available in a broad range of finishes, textures, and ...",
        "reviewsCount":  331,
        "isNew":  false,
        "name":  "Mayco Stoneware Classic Glazes",
        "discount":  "SAVE up to 24% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/30433-1003-M-4ww.jpg",
        "rating":  4.9,
        "id":  "ceramics-and-sculpture-3",
        "price":  16.61,
        "category":  "ceramics \u0026 sculpture",
        "description":  "Mayco Stroke \u0026 Coat Glazes is specially formulated for application on bisque, greenware, and even wet clay (see Note below for exceptions). The ready-...",
        "reviewsCount":  282,
        "isNew":  false,
        "name":  "Mayco Stroke \u0026 Coat Glazes and Sets",
        "discount":  "SAVE 12-22% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/30489-6176-3ww-l.jpg",
        "rating":  4.9,
        "id":  "ceramics-and-sculpture-4",
        "price":  18.13,
        "category":  "ceramics \u0026 sculpture",
        "description":  "Amaco Celadon Liquid High Fire Glazes are lead-free, glossy, transparent, and pool beautifully to add vivid accents to textured and carved surfaces. T...",
        "reviewsCount":  446,
        "isNew":  false,
        "name":  "Amaco Celadon High-Fire Liquid Glazes",
        "discount":  "SAVE up to 17% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 39 Options"
                    ]
    },
    {
        "image":  "/images/products/30587-1306-M-4ww.jpg",
        "rating":  4.8,
        "id":  "ceramics-and-sculpture-5",
        "price":  12.16,
        "category":  "ceramics \u0026 sculpture",
        "description":  "Mayco Stoneware Crystal Glazes offer potters of all skill levels a unique way to create vibrant effects in their stoneware. These easy-to-use glazes c...",
        "reviewsCount":  264,
        "isNew":  false,
        "name":  "Mayco Stoneware Crystal Glazes",
        "discount":  "SAVE 20% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 24 Options"
                    ]
    },
    {
        "image":  "/images/products/30482-1009-M-4ww.jpg",
        "rating":  4.7,
        "id":  "ceramics-and-sculpture-6",
        "price":  14.09,
        "category":  "ceramics \u0026 sculpture",
        "description":  "Bright, true colors that intermix for an infinite palette. Smooth, self-leveling application and consistent firing results, fire after fire. Food safe...",
        "reviewsCount":  217,
        "isNew":  false,
        "name":  "Blick Essentials Gloss Glazes and Sets",
        "discount":  "SAVE up to 20% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 48 Options"
                    ]
    },
    {
        "image":  "/images/products/30400-0029-4-4ww.jpg",
        "rating":  4.8,
        "id":  "ceramics-and-sculpture-7",
        "price":  17.73,
        "category":  "ceramics \u0026 sculpture",
        "description":  "Mayco Lead-Free Jungle Gems Crystal Glazes contain small pieces of glass frit that transform into splashes of color and patterns when fired, demonstra...",
        "reviewsCount":  181,
        "isNew":  false,
        "name":  "Mayco Lead-Free Jungle Gems Crystal Glazes and Sets",
        "discount":  "SAVE 12-21% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/30599-6416-M-4ww.jpg",
        "rating":  4.8,
        "id":  "ceramics-and-sculpture-8",
        "price":  13.18,
        "category":  "ceramics \u0026 sculpture",
        "description":  "Spectrum Floating Glazes are reactive mid-fire glazes that create glossy, multi-tone, multi-color decorative effects on pottery pieces. When fired, th...",
        "reviewsCount":  142,
        "isNew":  false,
        "name":  "Spectrum Floating Glazes",
        "discount":  "SAVE 17% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 24 Options"
                    ]
    },
    {
        "image":  "/images/products/30457-1129-M-4ww.jpg",
        "rating":  4.5,
        "id":  "ceramics-and-sculpture-9",
        "price":  6.61,
        "category":  "ceramics \u0026 sculpture",
        "description":  "Speedball Ceramic Underglazes feature bright and intense colors that are highly saturated for spectacular results. The liquid, opaque colors will not ...",
        "reviewsCount":  182,
        "isNew":  false,
        "name":  "Speedball Ceramic Underglazes and Sets",
        "discount":  "SAVE up to 37% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/30569-1001-1-4ww.jpg",
        "rating":  4.8,
        "id":  "ceramics-and-sculpture-10",
        "price":  16.03,
        "category":  "ceramics \u0026 sculpture",
        "description":  "Mayco Fundamentals Underglazes are consistent, versatile, and intermixable. Apply to wet clay, greenware, or Cone 04 bisque with a brush or sponge. Ce...",
        "reviewsCount":  80,
        "isNew":  false,
        "name":  "Mayco Fundamentals Underglazes and Sets",
        "discount":  "SAVE 15% or more off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/83401-4740-M-4ww.jpg",
        "rating":  4.7,
        "id":  "ceramics-and-sculpture-11",
        "price":  10.54,
        "category":  "ceramics \u0026 sculpture",
        "description":  "Mayco Stoneware Classic Glazes offer a consistent, user-friendly experience, from application and layering to the firing process. Ideal for creating u...",
        "reviewsCount":  101,
        "isNew":  false,
        "name":  "Mayco Stoneware Matte Glazes",
        "discount":  "SAVE 13-22% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 28 Options"
                    ]
    },
    {
        "image":  "/images/products/30443-7246-M-4ww.jpg",
        "rating":  4.8,
        "id":  "ceramics-and-sculpture-12",
        "price":  13.13,
        "category":  "ceramics \u0026 sculpture",
        "description":  "Mayco Elements Glazes were designed to simulate the aesthetic, movement, and interest of mid-range and high fire glazes in a cone 06/05 oxidation kiln...",
        "reviewsCount":  82,
        "isNew":  false,
        "name":  "Mayco Elements Glazes",
        "discount":  "SAVE 20-30% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 42 Options"
                    ]
    },
    {
        "image":  "/images/products/30597-2026-M-4ww.jpg",
        "rating":  4.6,
        "id":  "ceramics-and-sculpture-13",
        "price":  10.67,
        "category":  "ceramics \u0026 sculpture",
        "description":  "Spectrum Stoneware Glazes come in a wide range of colors and finishes, including reactive, multi-tone colors, and both glossy and matte finishes. Thes...",
        "reviewsCount":  106,
        "isNew":  false,
        "name":  "Spectrum Stoneware Glazes",
        "discount":  "SAVE up to 11% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 42 Options"
                    ]
    },
    {
        "image":  "/images/products/30446-2056-2-4ww.jpg",
        "rating":  4.9,
        "id":  "ceramics-and-sculpture-14",
        "price":  18.13,
        "category":  "ceramics \u0026 sculpture",
        "description":  "Get endless creative options with Amaco Potter’s Choice Flux Glazes. These fluid, food-safe glazes can be used alone or in combination with other glaz...",
        "reviewsCount":  65,
        "isNew":  false,
        "name":  "Amaco Potter\u0027s Choice Flux Glazes",
        "discount":  "SAVE 17% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 12 Options"
                    ]
    },
    {
        "image":  "/images/products/19994-1109-4-4ww.jpg",
        "rating":  4.8,
        "id":  "drawing-and-illustration",
        "price":  2.8,
        "category":  "drawing \u0026 illustration",
        "description":  "Posca Paint Markers and Sets are the ultimate drawing tool! These water-based paint markers deliver vibrant, opaque colors that adhere beautifully to ...",
        "reviewsCount":  945,
        "isNew":  false,
        "name":  "Posca Paint Markers and Sets",
        "discount":  "SAVE up to 54% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/21395-group-4ww.jpg",
        "rating":  4.9,
        "id":  "drawing-and-illustration-1",
        "price":  4.39,
        "category":  "drawing \u0026 illustration",
        "description":  "The choice of professionals worldwide, the Copic marker offers outstanding performance in all areas of design and illustration. Two versatile tips pro...",
        "reviewsCount":  1622,
        "isNew":  false,
        "name":  "Copic Sketch Markers and Sets",
        "discount":  "SAVE 25-48% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/20702-0109-2-4ww.jpg",
        "rating":  4.8,
        "id":  "drawing-and-illustration-2",
        "price":  2.99,
        "category":  "drawing \u0026 illustration",
        "description":  "An enduring favorite for detailed drawing and writing, the Sakura Pigma Micron contains archival-quality pigment ink that flows smoothly, producing ri...",
        "reviewsCount":  1479,
        "isNew":  false,
        "name":  "Sakura Pigma Micron Pens and Sets",
        "discount":  "SAVE 14-46% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/82320-group-1-4ww.jpg",
        "rating":  4.8,
        "id":  "drawing-and-illustration-3",
        "price":  3.77,
        "category":  "drawing \u0026 illustration",
        "description":  "Revive your Copic markers with Copic Ink Refills. These alcohol ink refills feature a compact Copic marker design with a long nozzle that makes restor...",
        "reviewsCount":  263,
        "isNew":  false,
        "name":  "Copic Ink Refills",
        "discount":  "SAVE up to 37% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/24532-Group-4-4ww.jpg",
        "rating":  4.7,
        "id":  "drawing-and-illustration-4",
        "price":  4.23,
        "category":  "drawing \u0026 illustration",
        "description":  "Blick Studio Brush Markers are a line of high-quality yet affordable brush markers for artists in all areas of graphic design and illustration. Water-...",
        "reviewsCount":  618,
        "isNew":  false,
        "name":  "Blick Studio Brush Markers and Sets",
        "discount":  "SAVE 20-66% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/21316-1039-M-4ww.jpg",
        "rating":  4.8,
        "id":  "drawing-and-illustration-5",
        "price":  0.74,
        "category":  "drawing \u0026 illustration",
        "description":  "Mark almost anything with bright, lasting color! Sharpie Fine Point Permanent Markers have a tough, resilient 0.5 mm tip. The fast-drying, quick-flowi...",
        "reviewsCount":  249,
        "isNew":  false,
        "name":  "Sharpie Fine Point Permanent Markers and Sets",
        "discount":  "SAVE up to 59% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 22 Options"
                    ]
    },
    {
        "image":  "/images/products/21342-1059-M-4ww.jpg",
        "rating":  4.7,
        "id":  "drawing-and-illustration-6",
        "price":  2.17,
        "category":  "drawing \u0026 illustration",
        "description":  "Designed for detailed work, these double-ended art markers feature an advanced dye-based alcohol ink formulation that ensures rich color saturation, i...",
        "reviewsCount":  860,
        "isNew":  false,
        "name":  "Prismacolor Premier Dual-Ended Chisel Tip Markers and Sets",
        "discount":  "SAVE 36-68% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 15 Options"
                    ]
    },
    {
        "image":  "/images/products/21334-1279-M-4ww.jpg",
        "rating":  4.8,
        "id":  "drawing-and-illustration-7",
        "price":  2.52,
        "category":  "drawing \u0026 illustration",
        "description":  "Tombow Dual Brush Pens have two tips - a flexible brush tip and a fine-point, hard nylon tip. Both tips are fed from the same ink reservoir, ensuring ...",
        "reviewsCount":  637,
        "isNew":  false,
        "name":  "Tombow Dual Brush Pens and Sets",
        "discount":  "SAVE up to 50% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/22186-group-1-4ww.jpg",
        "rating":  4.9,
        "id":  "drawing-and-illustration-8",
        "price":  2.73,
        "category":  "drawing \u0026 illustration",
        "description":  "Copic Ciao Double Ended Markers are the perfect choice for beginning artists who want to try markers for the first time. The Ciao\u0027s solid polypropylen...",
        "reviewsCount":  348,
        "isNew":  false,
        "name":  "Copic Ciao Double Ended Markers and Sets",
        "discount":  "SAVE 29-50% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/21303-1019-9-4ww.jpg",
        "rating":  4.6,
        "id":  "drawing-and-illustration-9",
        "price":  7.09,
        "category":  "drawing \u0026 illustration",
        "description":  "These waterproof, permanent solvent-based markers deliver brilliant sparkling color in fine, medium, or broad strokes. Each marker contains a single n...",
        "reviewsCount":  239,
        "isNew":  false,
        "name":  "Chartpak Ad Markers and Sets",
        "discount":  "SAVE 28-65% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/21218-1209-M-4ww.jpg",
        "rating":  4.5,
        "id":  "drawing-and-illustration-10",
        "price":  0.57,
        "category":  "drawing \u0026 illustration",
        "description":  "Long-lasting and durable, Crayola Broad Line Markers are designed to stand up to the most demanding school use. These markers feature a conical nib th...",
        "reviewsCount":  41,
        "isNew":  false,
        "name":  "Crayola Broad Line Markers and Sets",
        "discount":  "SAVE up to 56% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 15 Options"
                    ]
    },
    {
        "image":  "/images/products/19910-0139-3-4ww.jpg",
        "rating":  4.6,
        "id":  "drawing-and-illustration-11",
        "price":  7.35,
        "category":  "drawing \u0026 illustration",
        "description":  "Molotow One4All Acrylic Markers are highly opaque and permanent, with a semi-gloss finish. They’re also quick-drying and non-toxic. The refillable mar...",
        "reviewsCount":  186,
        "isNew":  false,
        "name":  "Molotow One4All Acrylic Markers and Sets",
        "discount":  "SAVE 27-57% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/22110-group-1-4ww.jpg",
        "rating":  4.8,
        "id":  "drawing-and-illustration-12",
        "price":  4.1,
        "category":  "drawing \u0026 illustration",
        "description":  "There\u0027s nothing like the Copic Classic double-ended, alcohol ink marker for expert blending, painting, and tone control. Use them for fine art project...",
        "reviewsCount":  211,
        "isNew":  false,
        "name":  "Copic Classic Markers and Sets",
        "discount":  "SAVE up to 48% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/87353-1005-3-4ww.jpg",
        "rating":  4.7,
        "id":  "drawing-and-illustration-13",
        "price":  2.78,
        "category":  "drawing \u0026 illustration",
        "description":  "Let creativity flow with Sharpie Creative Acrylic Markers. These waterbased acrylic markers come in either a bullet or brush tip to suit your needs. T...",
        "reviewsCount":  58,
        "isNew":  false,
        "name":  "Sharpie Creative Acrylic Markers and Sets",
        "discount":  "SAVE 20-67% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 49 Options"
                    ]
    },
    {
        "image":  "/images/products/21315-1069-M-4ww.jpg",
        "rating":  4.7,
        "id":  "drawing-and-illustration-14",
        "price":  0.64,
        "category":  "drawing \u0026 illustration",
        "description":  "Ultra-fine point in a metal sleeve produces an 0.3mm line. Permanently mark almost any surface. Sharpie markers are available individually in a variet...",
        "reviewsCount":  177,
        "isNew":  false,
        "name":  "Sharpie Ultra-Fine Point Markers and Sets",
        "discount":  "SAVE 12-65% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 14 Options"
                    ]
    },
    {
        "image":  "/images/products/49812-1011-M-4ww.jpg",
        "rating":  4.7,
        "id":  "easels-and-furniture",
        "price":  33.16,
        "category":  "easels \u0026 furniture",
        "description":  "Whether you\u0027re painting on the beach or in the mountains, U.Go Plein Air Anywhere Pochade Box \u0026 Accessories are the perfect plein air accompaniment. P...",
        "reviewsCount":  74,
        "isNew":  false,
        "name":  "New Wave u.go Plein Air Anywhere Pochade",
        "discount":  "SAVE 17% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/50391-Group-1-4ww.jpg",
        "rating":  4.7,
        "id":  "easels-and-furniture-1",
        "price":  38.21,
        "category":  "easels \u0026 furniture",
        "description":  "The Blick Studio Tabletop Easel may be small, but it’s designed for serious work. Whether you\u0027re an artist who creates small-scale paintings, a studen...",
        "reviewsCount":  142,
        "isNew":  false,
        "name":  "Blick Studio Tabletop Easel",
        "discount":  "SAVE 38% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/51753-1010-M-4ww.jpg",
        "rating":  4.6,
        "id":  "easels-and-furniture-2",
        "price":  178.19,
        "category":  "easels \u0026 furniture",
        "description":  "Paint without limits. This convertible studio easel tilts upright for oils and acrylics or flat for watercolor, pours, and other wet techniques. When ...",
        "reviewsCount":  427,
        "isNew":  false,
        "name":  "Blick Studio Convertible Studio Easel",
        "discount":  "SAVE 53% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/51753-1050-M-4ww.jpg",
        "rating":  4.4,
        "id":  "easels-and-furniture-3",
        "price":  174.49,
        "category":  "easels \u0026 furniture",
        "description":  "The Blick Studio Medium-Duty H-Frame Easel Finely handcrafted of smooth, sanded beechwood, it tilts back to any angle that suits your medium and paint...",
        "reviewsCount":  351,
        "isNew":  false,
        "name":  "Blick Studio Medium-Duty H-Frame Easel",
        "discount":  "SAVE 63% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/MacPherson_banners-34.jpg",
        "rating":  5,
        "id":  "easels-and-furniture-4",
        "price":  9.99,
        "category":  "easels \u0026 furniture",
        "description":  "Once in a lifetime closeout prices! Wide variety of brands and products to choose from. Great value.",
        "reviewsCount":  0,
        "isNew":  false,
        "name":  "Studio Easels Liquidation",
        "discount":  "SAVE up to 70% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/MacPherson_banners-34.jpg",
        "rating":  0,
        "id":  "easels-and-furniture-5",
        "price":  26,
        "category":  "easels \u0026 furniture",
        "description":  "Once in a lifetime closeout prices! Wide variety of brands and products to choose from. Great value.",
        "reviewsCount":  0,
        "isNew":  false,
        "name":  "Portable Easels Liquidation",
        "discount":  "SAVE 18-65% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/52856-1001-M-4ww.jpg",
        "rating":  4.4,
        "id":  "easels-and-furniture-6",
        "price":  70.83,
        "category":  "easels \u0026 furniture",
        "description":  "Stable, ultra-lightweight, and compact, the Blick Studio Aluminum Tripod Travel Easel is made for plein air painting, but it\u0027s also great for small ho...",
        "reviewsCount":  145,
        "isNew":  false,
        "name":  "Blick Studio Aluminum Tripod Travel Easel",
        "discount":  "SAVE 21% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/51588-1001-15-4ww.jpg",
        "rating":  4.3,
        "id":  "easels-and-furniture-7",
        "price":  144.97,
        "category":  "easels \u0026 furniture",
        "description":  "Blending traditional craftsmanship with thoughtful design, the Blick French Easel by Jullian is a fresh take on a plein air classic. Crafted exclusive...",
        "reviewsCount":  160,
        "isNew":  false,
        "name":  "Blick French Easel by Jullian",
        "discount":  "SAVE 20% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/50437-1001-M-4ww.jpg",
        "rating":  5,
        "id":  "easels-and-furniture-8",
        "price":  124.99,
        "category":  "easels \u0026 furniture",
        "description":  "Featuring a chalkboard, dry-erase board, and a 75-foot paper roll, the artPOP! 3-in-1 Floor Easel gives kids countless opportunities for creative lear...",
        "reviewsCount":  0,
        "isNew":  false,
        "name":  "artPOP! 3-in-1 Floor Easel",
        "discount":  "SAVE 37% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/83540-2400-M-4ww.jpg",
        "rating":  5,
        "id":  "easels-and-furniture-9",
        "price":  159.95,
        "category":  "easels \u0026 furniture",
        "description":  "The Meeden Versatile H-Frame Easel is a sturdy and adaptable easel for artists working in a variety of styles and mediums. Crafted from premium solid ...",
        "reviewsCount":  0,
        "isNew":  false,
        "name":  "Meeden Versatile H-Frame Easel",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/50391-1003-2-4ww.jpg",
        "rating":  4.7,
        "id":  "easels-and-furniture-10",
        "price":  93.29,
        "category":  "easels \u0026 furniture",
        "description":  "The Blick Studio Sketchbox Table Easel is a high-quality, beautifully crafted, portable studio for artists on the go. With versatile, independently ad...",
        "reviewsCount":  130,
        "isNew":  false,
        "name":  "Blick Studio Sketchbox Table Easel",
        "discount":  "SAVE 34% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/51753-1020-4ww.jpg",
        "rating":  4.6,
        "id":  "easels-and-furniture-11",
        "price":  234.63,
        "category":  "easels \u0026 furniture",
        "description":  "Finely handcrafted of smooth, sanded beechwood, the Blick Studio Light-Duty H-Frame Easel is equipped with an adjustable-height mast tilts back up to ...",
        "reviewsCount":  308,
        "isNew":  false,
        "name":  "Blick Studio Light-Duty H-Frame Easel",
        "discount":  "SAVE 23% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/50577-1001-3-4ww.jpg",
        "rating":  4.6,
        "id":  "easels-and-furniture-12",
        "price":  26.99,
        "category":  "easels \u0026 furniture",
        "description":  "Simple, sturdy, and adjustable, the Blick Studio Table Easel by Jullian is an all-purpose studio staple. Set up this convenient table easel on any fla...",
        "reviewsCount":  115,
        "isNew":  false,
        "name":  "Blick Studio Table Easel by Jullian",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/50387-1002-3ww-l.jpg",
        "rating":  4.6,
        "id":  "easels-and-furniture-13",
        "price":  19.99,
        "category":  "easels \u0026 furniture",
        "description":  "These small easels are miniature replicas of Jullian\u0027s Studio easels, especially created for table painting. Made of oiled beechwood, they\u0027re ideal fo...",
        "reviewsCount":  44,
        "isNew":  false,
        "name":  "Jullian Table Easels",
        "discount":  "SAVE 20% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/83540-2100-M-4ww.jpg",
        "rating":  5,
        "id":  "easels-and-furniture-14",
        "price":  248.36,
        "category":  "easels \u0026 furniture",
        "description":  "Create your next masterpiece with an easel that moves with you! Meeden’s Deluxe Heavy-Duty Multi-Function Easel is built for large-scale artwork up to...",
        "reviewsCount":  0,
        "isNew":  false,
        "name":  "Meeden Deluxe Heavy-Duty Multi-Function Easel",
        "discount":  "SAVE up to 10% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/17707-2029-M-4ww.jpg",
        "rating":  4.4,
        "id":  "farming-and-matboard",
        "price":  20.99,
        "category":  "farming \u0026 matboard",
        "description":  "",
        "reviewsCount":  81,
        "isNew":  false,
        "name":  "Blick Bellevue Frame - Black, 18\" x 24\"",
        "discount":  "SAVE up to 30% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/18862-2008-1.jpg",
        "rating":  4.3,
        "id":  "farming-and-matboard-1",
        "price":  57.57,
        "category":  "farming \u0026 matboard",
        "description":  "",
        "reviewsCount":  1032,
        "isNew":  false,
        "name":  "Blick Wood Gallery Frame - Black, 16\" x 20\"",
        "discount":  "SAVE up to 12% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/17707-2025-M-4ww.jpg",
        "rating":  4.4,
        "id":  "farming-and-matboard-2",
        "price":  10.49,
        "category":  "farming \u0026 matboard",
        "description":  "",
        "reviewsCount":  81,
        "isNew":  false,
        "name":  "Blick Bellevue Frame - Black, 11\" x 14\"",
        "discount":  "SAVE up to 30% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/17707-2027-M-4ww.jpg",
        "rating":  4.4,
        "id":  "farming-and-matboard-3",
        "price":  24.99,
        "category":  "farming \u0026 matboard",
        "description":  "",
        "reviewsCount":  81,
        "isNew":  false,
        "name":  "Blick Bellevue Frame - Black, 24\" x 36\"",
        "discount":  "SAVE up to 37% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/17563-8904-M-4ww.jpg",
        "rating":  4.7,
        "id":  "farming-and-matboard-4",
        "price":  37.1,
        "category":  "farming \u0026 matboard",
        "description":  "",
        "reviewsCount":  639,
        "isNew":  false,
        "name":  "Ampersand Floaterframe - Thin, Maple, 8\" x 10\", 7/8\"",
        "discount":  "SAVE up to 29% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/17707-2028-M-4ww.jpg",
        "rating":  4.4,
        "id":  "farming-and-matboard-5",
        "price":  15.44,
        "category":  "farming \u0026 matboard",
        "description":  "",
        "reviewsCount":  81,
        "isNew":  false,
        "name":  "Blick Bellevue Frame - Black, 16\" x 20\"",
        "discount":  "SAVE up to 22% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/18862-1908-2-4ww.jpg",
        "rating":  4.3,
        "id":  "farming-and-matboard-6",
        "price":  57.57,
        "category":  "farming \u0026 matboard",
        "description":  "",
        "reviewsCount":  1032,
        "isNew":  false,
        "name":  "Blick Wood Gallery Frame - Natural, 16\" x 20\"",
        "discount":  "SAVE up to 12% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/18862-2009-1-4ww.jpg",
        "rating":  4.3,
        "id":  "farming-and-matboard-7",
        "price":  67.58,
        "category":  "farming \u0026 matboard",
        "description":  "",
        "reviewsCount":  1032,
        "isNew":  false,
        "name":  "Blick Wood Gallery Frame - Black, 18\" x 24\"",
        "discount":  "SAVE up to 15% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/18846-5012-M-4ww.jpg",
        "rating":  4.4,
        "id":  "farming-and-matboard-8",
        "price":  43.15,
        "category":  "farming \u0026 matboard",
        "description":  "",
        "reviewsCount":  1326,
        "isNew":  false,
        "name":  "Blick Simplon Frame, 3-1/4”-8” x 10” x 1/2”, Gold Leaf",
        "discount":  "SAVE up to 33% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/18862-1909-1-4ww.jpg",
        "rating":  4.3,
        "id":  "farming-and-matboard-9",
        "price":  67.58,
        "category":  "farming \u0026 matboard",
        "description":  "",
        "reviewsCount":  1032,
        "isNew":  false,
        "name":  "Blick Wood Gallery Frame - Natural, 18\" x 24\"",
        "discount":  "SAVE up to 15% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/18862-1905-2-4ww.jpg",
        "rating":  4.3,
        "id":  "farming-and-matboard-10",
        "price":  45.57,
        "category":  "farming \u0026 matboard",
        "description":  "",
        "reviewsCount":  1032,
        "isNew":  false,
        "name":  "Blick Wood Gallery Frame - Natural, 11\" x 14\"",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/18862-2005-2-4ww.jpg",
        "rating":  4.3,
        "id":  "farming-and-matboard-11",
        "price":  45.57,
        "category":  "farming \u0026 matboard",
        "description":  "",
        "reviewsCount":  1032,
        "isNew":  false,
        "name":  "Blick Wood Gallery Frame - Black, 11\" x 14\"",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/18846-5005-M-4ww.jpg",
        "rating":  4.4,
        "id":  "farming-and-matboard-12",
        "price":  48.37,
        "category":  "farming \u0026 matboard",
        "description":  "",
        "reviewsCount":  1326,
        "isNew":  false,
        "name":  "Blick Simplon Frame, 3-1/4”-11” x 14” x 1/2”, Gold Leaf",
        "discount":  "SAVE up to 39% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/18862-1904-2-4ww.jpg",
        "rating":  4.3,
        "id":  "farming-and-matboard-13",
        "price":  45.57,
        "category":  "farming \u0026 matboard",
        "description":  "",
        "reviewsCount":  1032,
        "isNew":  false,
        "name":  "Blick Wood Gallery Frame - Natural, 12\" x 12\"",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/17707-2029-M-4ww.jpg",
        "rating":  4.4,
        "id":  "farming-and-matboard-14",
        "price":  20.99,
        "category":  "farming \u0026 matboard",
        "description":  "",
        "reviewsCount":  81,
        "isNew":  false,
        "name":  "Blick Bellevue Frame - Black, 18\" x 24\"",
        "discount":  "SAVE up to 30% off List!",
        "isClearance":  false,
        "options":  [

                    ]
    },
    {
        "image":  "/images/products/00711-Group-9-4ww.jpg",
        "rating":  4.6,
        "id":  "paints",
        "price":  7.37,
        "category":  "paints",
        "description":  "Blickrylic Student Acrylic Paint is a true acrylic paint, priced for the budget-minded. It\u0027s highly versatile for an unlimited range of projects on pa...",
        "reviewsCount":  2094,
        "isNew":  false,
        "name":  "Blickrylic Student Acrylic Paints and Sets",
        "discount":  "SAVE 12-45% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/00620-acrylics3ww-l.jpg",
        "rating":  4.9,
        "id":  "paints-1",
        "price":  9.09,
        "category":  "paints",
        "description":  "Golden Heavy Body Artist Acrylics are known for their exceptionally smooth, thick, buttery consistency, and for their excellent permanency and lightfa...",
        "reviewsCount":  1430,
        "isNew":  false,
        "name":  "Golden Artist Acrylic Heavy Body Paints and Sets",
        "discount":  "SAVE 30% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/00638-group-P-3ww-l.jpg",
        "rating":  4.9,
        "id":  "paints-2",
        "price":  5.94,
        "category":  "paints",
        "description":  "Golden Fluid Acrylics are highly intense, permanent acrylics with a consistency close to heavy cream. Produced from lightfast pigments, they offer str...",
        "reviewsCount":  1216,
        "isNew":  false,
        "name":  "Golden Fluid Acrylic Paint and Sets",
        "discount":  "SAVE 30% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/00617-group-3-4ww.jpg",
        "rating":  4.8,
        "id":  "paints-3",
        "price":  8.99,
        "category":  "paints",
        "description":  "Liquitex Professional Heavy Body Acrylics are made to have an exceptionally smooth, thick, buttery consistency. A high pigment load produces rich, bri...",
        "reviewsCount":  934,
        "isNew":  false,
        "name":  "Liquitex Professional Heavy Body Acrylic Paints and Sets",
        "discount":  "SAVE up to 48% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/00717-0129-4-4ww.jpg",
        "rating":  4.8,
        "id":  "paints-4",
        "price":  4.19,
        "category":  "paints",
        "description":  "For watercolor, airbrush, and printmaking. Apply on canvas, wood, clay, paper, fabric. Mix with water or Liquitex acrylic mediums. Dries water-resista...",
        "reviewsCount":  828,
        "isNew":  false,
        "name":  "Liquitex Basics Acrylic Paints and Sets",
        "discount":  "SAVE 20-66% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/01637-group-14-4ww.jpg",
        "rating":  4.7,
        "id":  "paints-5",
        "price":  4.24,
        "category":  "paints",
        "description":  "Blick Studio Acrylic Colors are a great value for students and beginning artists. Rich, thick textures holds impasto brush and palette marks. High pi...",
        "reviewsCount":  1128,
        "isNew":  false,
        "name":  "Blick Studio Acrylic Paints and Sets",
        "discount":  "SAVE 38-74% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/00643-4553-M-4ww.jpg",
        "rating":  4.8,
        "id":  "paints-6",
        "price":  3.42,
        "category":  "paints",
        "description":  "Proudly crafted in the Netherlands, these acrylic paints are value priced and easy to use, making them an excellent choice for the beginning or interm...",
        "reviewsCount":  487,
        "isNew":  false,
        "name":  "Amsterdam Standard Series Acrylic Paints and Sets",
        "discount":  "SAVE up to 49% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/01618-group-M-4ww.jpg",
        "rating":  4.7,
        "id":  "paints-7",
        "price":  9.09,
        "category":  "paints",
        "description":  "Golden Open Acrylics offer an escape from the studio, allowing acrylic artists to experience the warm sun and fresh spring breeze of plein air paintin...",
        "reviewsCount":  513,
        "isNew":  false,
        "name":  "Golden Open Acrylic Paints and Sets",
        "discount":  "SAVE 30% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/01654-Group-main-1-4ww.jpg",
        "rating":  4.7,
        "id":  "paints-8",
        "price":  8.09,
        "category":  "paints",
        "description":  "Utrecht has been carefully handcrafting Utrecht Artists\u0027 Acrylic Colors in its Brooklyn, New York, mill since 1959. These fine paints are prized by pr...",
        "reviewsCount":  350,
        "isNew":  false,
        "name":  "Utrecht Artists\u0027 Acrylic Paint and Sets",
        "discount":  "SAVE 20-59% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/00811-1029-1-4ww.jpg",
        "rating":  4.8,
        "id":  "paints-9",
        "price":  6.76,
        "category":  "paints",
        "description":  "Holbein Acrylic Gouache is a fast-drying, opaque acrylic based watercolor paint. It\u0027s water soluble while wet, and water-resistant, matte and opaque, ...",
        "reviewsCount":  345,
        "isNew":  false,
        "name":  "Holbein Acrylic Gouache and Sets",
        "discount":  "SAVE 35% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/01650-1049-M-4ww.jpg",
        "rating":  4.9,
        "id":  "paints-10",
        "price":  5.94,
        "category":  "paints",
        "description":  "Incredibly flexible, Golden High Flow Acrylics have an ink-like consistency that lends itself to a wide range of techniques — painting, drawing, stain...",
        "reviewsCount":  406,
        "isNew":  false,
        "name":  "Golden High Flow Acrylic Paints and Sets",
        "discount":  "SAVE 30% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/00604-1029-3-4ww.jpg",
        "rating":  4.7,
        "id":  "paints-11",
        "price":  4.4,
        "category":  "paints",
        "description":  "Winsor \u0026 Newton Galeria Acrylics provide professional performance at an exceptional value. These versatile acrylics are perfect for artists of all lev...",
        "reviewsCount":  226,
        "isNew":  false,
        "name":  "Winsor \u0026 Newton Galeria Acrylic Paints and Sets",
        "discount":  "SAVE up to 50% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/00624-Group-1-4ww.jpg",
        "rating":  4.6,
        "id":  "paints-12",
        "price":  7.36,
        "category":  "paints",
        "description":  "Smooth, lightfast, and permanent, with excellent pigment quality, color strength, and longevity, Blick Artists\u0027 Acrylic Paints and Sets offer an excep...",
        "reviewsCount":  841,
        "isNew":  false,
        "name":  "Blick Artists\u0027 Acrylic Paints and Sets",
        "discount":  "SAVE up to 61% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/01655-group-5-4ww.jpg",
        "rating":  4.8,
        "id":  "paints-13",
        "price":  8.49,
        "category":  "paints",
        "description":  "Made in Brooklyn, New York, Utrecht Studio Series Acrylic Paints are milled using the same intense pigments and quality vehicles as Utrecht\u0027s professi...",
        "reviewsCount":  235,
        "isNew":  false,
        "name":  "Utrecht Studio Series Acrylic Paints",
        "discount":  "SAVE 35-60% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/09404-1009-1-4ww.jpg",
        "rating":  4.8,
        "id":  "paints-14",
        "price":  9.09,
        "category":  "paints",
        "description":  "Golden SoFlat Matte Acrylics are rich, saturated acrylic colors that dry to an even, highly opaque, glare-free finish. Specially formulated to produce...",
        "reviewsCount":  96,
        "isNew":  false,
        "name":  "Golden SoFlat Matte Acrylic Paints and Sets",
        "discount":  "SAVE 30% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/10209-group-4ww.jpg",
        "rating":  4.7,
        "id":  "papers-and-boards",
        "price":  3.97,
        "category":  "papers \u0026 boards",
        "description":  "Our premium brand of student art papers was produced to meet the needs of the art teacher. It has a medium surface suitable for all pencil, charcoal, ...",
        "reviewsCount":  570,
        "isNew":  false,
        "name":  "Blick White Sulphite Drawing Paper",
        "discount":  "SAVE up to 44% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 20 Options"
                    ]
    },
    {
        "image":  "/images/products/12468-1009-M-4ww.jpg",
        "rating":  4.8,
        "id":  "papers-and-boards-1",
        "price":  9.94,
        "category":  "papers \u0026 boards",
        "description":  "Designed to appeal to students, Canson XL papers are developed in consultation with art professors who use Canson\u0027s professional artist papers as a be...",
        "reviewsCount":  431,
        "isNew":  false,
        "name":  "Canson XL Mixed Media Wirebound Pads",
        "discount":  "SAVE 11-38% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 6 Options"
                    ]
    },
    {
        "image":  "/images/products/13307-1005-4ww.jpg",
        "rating":  4.8,
        "id":  "papers-and-boards-2",
        "price":  3.42,
        "category":  "papers \u0026 boards",
        "description":  "Strathmore 300 Series Bristol Board Pads contain high-quality, heavyweight Bristol paper suitable for final artwork. Available in Smooth and Vellum su...",
        "reviewsCount":  463,
        "isNew":  false,
        "name":  "Strathmore 300 Series Bristol Board Pads",
        "discount":  "SAVE up to 45% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 11 Options"
                    ]
    },
    {
        "image":  "/images/products/10710-group-1-4ww.jpg",
        "rating":  4.7,
        "id":  "papers-and-boards-3",
        "price":  0.8,
        "category":  "papers \u0026 boards",
        "description":  "This classic French paper has a honeycomb surface on one side, and a fine grain and surface on the reverse, both equally suitable for pastel, oil past...",
        "reviewsCount":  545,
        "isNew":  false,
        "name":  "Canson Mi-Teintes Art Paper Sheets and Packs",
        "discount":  "SAVE 20-39% off List!",
        "isClearance":  false,
        "options":  [
                        "100+ Options"
                    ]
    },
    {
        "image":  "/images/products/10423-group-4-4ww.jpg",
        "rating":  4.8,
        "id":  "papers-and-boards-4",
        "price":  4.68,
        "category":  "papers \u0026 boards",
        "description":  "Stonehenge is a traditional fine art paper with a smooth, flawless surface that\u0027s slightly mottled to resemble actual vellum. Use it for watercolor, p...",
        "reviewsCount":  461,
        "isNew":  false,
        "name":  "Legion Stonehenge Paper",
        "discount":  "SAVE 26-53% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 21 Options"
                    ]
    },
    {
        "image":  "/images/products/10316-group-4ww.jpg",
        "rating":  4.8,
        "id":  "papers-and-boards-5",
        "price":  3.08,
        "category":  "papers \u0026 boards",
        "description":  "Strathmore 400 is one of the most versatile sheets Strathmore offers. This off-white drawing paper has a uniform surface and is ideal for sketching an...",
        "reviewsCount":  262,
        "isNew":  false,
        "name":  "Strathmore 400 Series Drawing Paper Pads",
        "discount":  "SAVE 22-40% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 8 Options"
                    ]
    },
    {
        "image":  "/images/products/10419-group-1-4ww.jpg",
        "rating":  4.9,
        "id":  "papers-and-boards-6",
        "price":  6.05,
        "category":  "papers \u0026 boards",
        "description":  "Made of 100% cotton, Rives BFK Printmaking Papers are mouldmade in France and have a smooth, absorbent surface. The sheets are acid-free, soft-sized, ...",
        "reviewsCount":  297,
        "isNew":  false,
        "name":  "Rives BFK Printmaking Papers",
        "discount":  "SAVE 28-50% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 10 Options"
                    ]
    },
    {
        "image":  "/images/products/13880-Group-2-4ww.jpg",
        "rating":  4.7,
        "id":  "papers-and-boards-7",
        "price":  8.25,
        "category":  "papers \u0026 boards",
        "description":  "Talens Art Creation Sketchbooks make a reliable companion for artists on the move. Each sketchbook contains 80 sheets of acid-free, 90 lb (140 gsm) pa...",
        "reviewsCount":  129,
        "isNew":  false,
        "name":  "Talens Art Creations Sketchbooks",
        "discount":  "SAVE up to 18% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/10314-1052-2-4ww.jpg",
        "rating":  4.7,
        "id":  "papers-and-boards-8",
        "price":  8.46,
        "category":  "papers \u0026 boards",
        "description":  "Ideal for pencil, charcoal, crayon, pen, light washes, and final drawings, the high-quality, heavyweight (80 lb, 130 gsm), acid-free white paper in Bl...",
        "reviewsCount":  256,
        "isNew":  false,
        "name":  "Blick Studio Drawing Pads",
        "discount":  "SAVE up to 25% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 11 Options"
                    ]
    },
    {
        "image":  "/images/products/12917-2612-M-4ww.jpg",
        "rating":  4.5,
        "id":  "papers-and-boards-9",
        "price":  13.45,
        "category":  "papers \u0026 boards",
        "description":  "Saral Wax Free Transfer Paper is a specialized transfer paper that works like carbon paper to transfer a design from one surface to another. It produc...",
        "reviewsCount":  316,
        "isNew":  false,
        "name":  "Saral Wax Free Transfer Paper",
        "discount":  "SAVE 12% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 5 Options"
                    ]
    },
    {
        "image":  "/images/products/10311-1043-3-3ww-l.jpg",
        "rating":  4.7,
        "id":  "papers-and-boards-10",
        "price":  4.48,
        "category":  "papers \u0026 boards",
        "description":  "Blick Studio Newsprint is ideal for practice sketches with pencils, pastels, or charcoal. Available in pads or reams, the pads feature a heavy cardboa...",
        "reviewsCount":  139,
        "isNew":  false,
        "name":  "Blick Studio Newsprint Pads",
        "discount":  "SAVE up to 19% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 7 Options"
                    ]
    },
    {
        "image":  "/images/products/14915-group-1-4ww.jpg",
        "rating":  4.8,
        "id":  "papers-and-boards-11",
        "price":  5.5,
        "category":  "papers \u0026 boards",
        "description":  "Claybord is a true multimedia panel, ideal for paint, ink, gouache, egg tempera, acrylics, airbrush, collage, photo-transfer, pencil, casein, and for ...",
        "reviewsCount":  381,
        "isNew":  false,
        "name":  "Ampersand Claybord",
        "discount":  "SAVE up to 54% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/10800-1023-3ww-l.jpg",
        "rating":  4.5,
        "id":  "papers-and-boards-12",
        "price":  7.5,
        "category":  "papers \u0026 boards",
        "description":  "The textured finish and subtle colors make this paper an ideal background for hard, soft, and oil pastels, as well as a wide variety of drawing media....",
        "reviewsCount":  88,
        "isNew":  false,
        "name":  "Strathmore 400 Series Pastel Paper Pads",
        "discount":  "SAVE 35% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 3 Options"
                    ]
    },
    {
        "image":  "/images/products/10820-group3ww-l.jpg",
        "rating":  4.8,
        "id":  "papers-and-boards-13",
        "price":  5.72,
        "category":  "papers \u0026 boards",
        "description":  "Clairefontaine developed Pastelmat to meet the specific expectations of the most demanding pastel artists. Acid-free and pH neutral, Pastelmat Sheets ...",
        "reviewsCount":  399,
        "isNew":  false,
        "name":  "Clairefontaine Pastelmat Sheets",
        "discount":  "SAVE 12-20% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 42 Options"
                    ]
    },
    {
        "image":  "/images/products/10322-1003-M-4ww.jpg",
        "rating":  4.8,
        "id":  "papers-and-boards-14",
        "price":  7.57,
        "category":  "papers \u0026 boards",
        "description":  "This heavy 65 lb (96 gsm) weight, acid-free paper is well suited for pencil, charcoal, pen, and light wash. It\u0027s manufactured from French made Crobart...",
        "reviewsCount":  147,
        "isNew":  false,
        "name":  "Canson Universal Sketch Pad",
        "discount":  "SAVE 30-63% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 5 Options"
                    ]
    },
    {
        "image":  "/images/products/16974-Group-3-4ww.jpg",
        "rating":  4.6,
        "id":  "studio-and-office-supplies",
        "price":  3.15,
        "category":  "studio \u0026 office supplies",
        "description":  "Made from heavy polypropylene imbedded with cotton mesh, they\u0027ll stand up to repeated use. Choose from a variety of sizes to hold pens, pencils, marke...",
        "reviewsCount":  227,
        "isNew":  false,
        "name":  "Blick Mesh Zipper Bags",
        "discount":  "SAVE up to 24% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 6 Options"
                    ]
    },
    {
        "image":  "/images/products/15105-Group-2-4ww.jpg",
        "rating":  4.2,
        "id":  "studio-and-office-supplies-1",
        "price":  8.72,
        "category":  "studio \u0026 office supplies",
        "description":  "For storing, protecting, filing, or transporting flat artwork of non-archival quality. Constructed of tough long-fiber paper, yet lightweight.",
        "reviewsCount":  182,
        "isNew":  false,
        "name":  "Star Products Red Wallet Portfolios",
        "discount":  "SAVE up to 12% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 13 Options"
                    ]
    },
    {
        "image":  "/images/products/15019-1046-M-4ww.jpg",
        "rating":  4.8,
        "id":  "studio-and-office-supplies-2",
        "price":  8.05,
        "category":  "studio \u0026 office supplies",
        "description":  "Itoya’s Original Art Profolios offer a clean, professional way to store and present your work. Made from durable, lightweight recycled polypropylene, ...",
        "reviewsCount":  347,
        "isNew":  false,
        "name":  "Itoya Original Art Profolios",
        "discount":  "SAVE up to 46% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 21 Options"
                    ]
    },
    {
        "image":  "/images/products/15315-group-4-4ww.jpg",
        "rating":  4.7,
        "id":  "studio-and-office-supplies-3",
        "price":  19.66,
        "category":  "studio \u0026 office supplies",
        "description":  "Blick\u0027s clamshell boxes provide archival-quality storage that\u0027s extra-durable and acid-free. Strong metal edges at the corners prevent crushing and th...",
        "reviewsCount":  226,
        "isNew":  false,
        "name":  "Blick Archival Storage Boxes",
        "discount":  "SAVE up to 35% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 14 Options"
                    ]
    },
    {
        "image":  "/images/products/16992-Group-2-4ww.jpg",
        "rating":  4.6,
        "id":  "studio-and-office-supplies-4",
        "price":  17.72,
        "category":  "studio \u0026 office supplies",
        "description":  "Available in black or red, the Blick Studio Series Softside Portfolio is made of heavyweight nylon with reinforced corners. It features a zipper and a...",
        "reviewsCount":  163,
        "isNew":  false,
        "name":  "Blick Studio Series Softside Portfolios",
        "discount":  "SAVE 35-48% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 4 Options"
                    ]
    },
    {
        "image":  "/images/products/03274-group3ww-l.jpg",
        "rating":  4.7,
        "id":  "studio-and-office-supplies-5",
        "price":  6.53,
        "category":  "studio \u0026 office supplies",
        "description":  "Quick View Carrying Cases are molded in translucent polypropylene with a \"window\" for a quick view of what\u0027s inside. Secure lockable latches keep the ...",
        "reviewsCount":  56,
        "isNew":  false,
        "name":  "ArtBin Quick-View Carrying Case",
        "discount":  "SAVE up to 34% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 6 Options"
                    ]
    },
    {
        "image":  "/images/products/03395-1023-3-4ww.jpg",
        "rating":  4.9,
        "id":  "studio-and-office-supplies-6",
        "price":  3.5,
        "category":  "studio \u0026 office supplies",
        "description":  "Uline Plastic Cups and Lids are great for dispensing and storing paints, glue, water, and paste in classroom settings. Disposable or reusable, these l...",
        "reviewsCount":  0,
        "isNew":  false,
        "name":  "Uline Plastic Cups with Lids",
        "discount":  "SAVE up to 10% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 4 Options"
                    ]
    },
    {
        "image":  "/images/products/MacPherson_banners-34.jpg",
        "rating":  0,
        "id":  "studio-and-office-supplies-7",
        "price":  2.01,
        "category":  "studio \u0026 office supplies",
        "description":  "Once in a lifetime closeout prices! Wide variety of brands and products to choose from. Great value.",
        "reviewsCount":  0,
        "isNew":  false,
        "name":  "Cases and Pouches Liquidation",
        "discount":  "SAVE up to 66% off List!",
        "isClearance":  false,
        "options":  [
                        "50+ Options"
                    ]
    },
    {
        "image":  "/images/products/21952-group3ww-l.jpg",
        "rating":  4.9,
        "id":  "studio-and-office-supplies-8",
        "price":  8.12,
        "category":  "studio \u0026 office supplies",
        "description":  "These handy plastic jars and trays are stackable, and protect your PanPastels during transport or storage.",
        "reviewsCount":  191,
        "isNew":  false,
        "name":  "PanPastel Palette Trays and Storage Jars",
        "discount":  "SAVE 30% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 4 Options"
                    ]
    },
    {
        "image":  "/images/products/15274-1005-4ww.jpg",
        "rating":  4.8,
        "id":  "studio-and-office-supplies-9",
        "price":  8.09,
        "category":  "studio \u0026 office supplies",
        "description":  "Blick\u0027s affordable, functional presentation books are ideal for storing, transporting, and displaying your photographs, drawings, and more.",
        "reviewsCount":  228,
        "isNew":  false,
        "name":  "Blick Basic Series Presentation Books",
        "isClearance":  false,
        "options":  [
                        "+ 8 Options"
                    ]
    },
    {
        "image":  "/images/products/04815-1002-3ww-l.jpg",
        "rating":  5,
        "id":  "studio-and-office-supplies-10",
        "price":  0.65,
        "category":  "studio \u0026 office supplies",
        "description":  "These clear glass jars and caps are ideal for storing paints, solvents, and other materials around the studio. The jars feature easy-to-clean, wide mo...",
        "reviewsCount":  59,
        "isNew":  false,
        "name":  "Glass Jars and Caps",
        "discount":  "SAVE up to 55% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 6 Options"
                    ]
    },
    {
        "image":  "/images/products/22744-group-4ww.jpg",
        "rating":  4.6,
        "id":  "studio-and-office-supplies-11",
        "price":  15.16,
        "category":  "studio \u0026 office supplies",
        "description":  "Handcrafted from a finely woven 16 oz canvas, these versatile pencil cases are perfect for travel or storage. Each elastic loop holds four pencils or ...",
        "reviewsCount":  330,
        "isNew":  false,
        "name":  "Speedball Canvas Pencil Cases",
        "discount":  "SAVE 27% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 16 Options"
                    ]
    },
    {
        "image":  "/images/products/02909-group-4ww.jpg",
        "rating":  3.4,
        "id":  "studio-and-office-supplies-12",
        "price":  1.32,
        "category":  "studio \u0026 office supplies",
        "description":  "Improved locking mechanism keeps paint inside the containers, and keeps containers clean. For 1/2 and 1-gallon containers.",
        "reviewsCount":  64,
        "isNew":  false,
        "name":  "Lockable Pump Lids",
        "discount":  "SAVE 66% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 2 Options"
                    ]
    },
    {
        "image":  "/images/products/15139-group-4ww.jpg",
        "rating":  4.5,
        "id":  "studio-and-office-supplies-13",
        "price":  16.1,
        "category":  "studio \u0026 office supplies",
        "description":  "The Itoya Art Profolio All-Weather Portfolio delivers modern protection with a classic look for artists, students, and professionals on the move. Made...",
        "reviewsCount":  90,
        "isNew":  false,
        "name":  "Itoya Art Profolio All-Weather Portfolios",
        "discount":  "SAVE 15% off List!",
        "isClearance":  false,
        "options":  [
                        "+ 5 Options"
                    ]
    },
    {
        "image":  "/images/products/15153-1021-8-4ww.jpg",
        "rating":  4.8,
        "id":  "studio-and-office-supplies-14",
        "price":  15.98,
        "category":  "studio \u0026 office supplies",
        "description":  "The Blick Essentials Folding Portfolio it tucks into a backpack, carryall, or briefcase, but transforms quickly into a full-size portfolio. It\u0027s made ...",
        "reviewsCount":  34,
        "isNew":  false,
        "name":  "Blick Essentials Folding Portfolio",
        "isClearance":  false,
        "options":  [
                        "+ 2 Options"
                    ]
    }
]
// Helper subsets for backward compatibility with existing components
export const FEATURED_DEALS = ALL_PRODUCTS.filter(p => p.discount && !p.isClearance).slice(0, 5);
export const FEATURED_ART_SUPPLIES = ALL_PRODUCTS.filter(p => !p.discount && !p.isClearance).slice(0, 5);
export const CLEARANCE_ART_SUPPLIES = ALL_PRODUCTS.filter(p => p.isClearance).slice(0, 5);

export const CATEGORIES = [
  { name: "Paints", count: "4,200+", icon: "Palette" },
  { name: "Canvas & Surfaces", count: "1,500+", icon: "Square" },
  { name: "Drawing & Illustration", count: "2,400+", icon: "PenTool" },
  { name: "Brushes & Tools", count: "1,800+", icon: "Brush" },
  { name: "Papers & Boards", count: "3,100+", icon: "BookOpen" },
  { name: "Easels & Furniture", count: "450+", icon: "Grid" },
  { name: "Studio & Office", count: "900+", icon: "Briefcase" },
  { name: "Crafts & Fabric", count: "1,600+", icon: "Smile" },
  { name: "Ceramics & Sculpture", count: "650+", icon: "Layers" },
  { name: "Framing & Matting", count: "800+", icon: "Scissors" }
];

export const NAVIGATION_LINKS = [
  "brushes & painting tools",
  "canvas & surfaces",
  "ceramics & sculpture",
  "drawing & illustration",
  "easels & furniture",
  "farming & matboard",
  "paints",
  "papers & boards",
  "studio & office supplies"
];








