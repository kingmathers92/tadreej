export type Category = "bags" | "wallets" | "covers";

export const categories: { id: Category; label: string; ramp: string }[] = [
  { id: "bags", label: "Bags", ramp: "var(--color-clay-500)" },
  { id: "wallets", label: "Wallets", ramp: "var(--color-umber-900)" },
  { id: "covers", label: "Book Covers", ramp: "var(--color-clay-300)" },
];

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  shortDescription: string;
  description: string;
  variants?: string[];
  bestSeller?: boolean;
  new?: boolean;
  available: boolean;
  image: string;
  gallery: string[];
  swatchSeed: number; // drives the generated placeholder art
};

/**
 * Sample catalogue. Every field here is a placeholder standing in for the
 * real Tadreej line-up — swap in actual product names, prices and photos
 * from Instagram before launch. The shape (fields, variants, categories)
 * is built to match how a small hand-finished leather studio like this
 * typically sells, so real products should drop in without restructuring
 * anything.
 */
export const products: Product[] = [
  {
    slug: "ombre-tote",
    name: "Ombré Leather Tote",
    category: "bags",
    price: 420,
    shortDescription: "Hand-brushed gradient across vegetable-tanned leather, one long strap.",
    description:
      "Cut from a single piece of vegetable-tanned leather and hand-brushed in graduated layers, pale at the base to deep at the top edge. One structured strap, a magnetic close, and enough room for a laptop sleeve and the rest of the day. The leather will keep deepening with handling, on top of the dyed gradient already built in.",
    variants: ["Tan", "Chestnut", "Umber"],
    bestSeller: true,
    available: true,
    image: "/products/bag-01.jpg",
    gallery: ["/products/bag-01.jpg", "/products/bag-01-alt.jpg"],
    swatchSeed: 1,
  },
  {
    slug: "patina-crossbody",
    name: "Patina Crossbody Bag",
    category: "bags",
    price: 310,
    shortDescription: "Undyed veg-tan leather, left to darken on its own.",
    description:
      "No dye on this one — it's undyed vegetable-tanned leather, left to develop its own gradation the way the hide naturally does with light and handling. Compact crossbody shape, adjustable strap, one main compartment and a zip pocket inside. Expect it to look noticeably different a year from now, in a good way.",
    variants: ["Natural", "Honey"],
    new: true,
    available: true,
    image: "/products/bag-02.svg",
    gallery: ["/products/bag-02.svg"],
    swatchSeed: 2,
  },
  {
    slug: "graduated-edge-bifold",
    name: "Graduated Edge Bifold Wallet",
    category: "wallets",
    price: 145,
    shortDescription: "Hand-painted edge, pale at the fold to deep at the corner.",
    description:
      "A standard bifold shape made less standard by the edge — painted by hand in graduated coats so the corner reads darker than the fold. Six card slots, a full-length note pocket, saddle-stitched in waxed linen thread.",
    variants: ["Tan", "Umber"],
    bestSeller: true,
    available: true,
    image: "/products/wallet-01.jpg",
    gallery: ["/products/wallet-01.jpg", "/products/wallet-01-alt.jpg"],
    swatchSeed: 3,
  },
  {
    slug: "dip-dyed-cardholder",
    name: "Dip-Dyed Cardholder",
    category: "wallets",
    price: 85,
    shortDescription: "Minimal four-card holder, dipped in graduated color.",
    description:
      "The simplest thing we make — a slim, four-card holder dipped by hand so one edge sits darker than the other. Fits in a front pocket without adding bulk. A good starting point if the bifold feels like a commitment.",
    variants: ["Clay", "Chestnut"],
    available: true,
    image: "/products/wallet-02.jpg",
    gallery: ["/products/wallet-02.jpg"],
    swatchSeed: 4,
  },
  {
    slug: "tonal-passport-holder",
    name: "Tonal Passport Holder",
    category: "wallets",
    price: 95,
    shortDescription: "Passport plus three card slots, tan fading to umber.",
    description:
      "Holds a passport and three cards, in leather that moves from tan to umber across the cover. Travels flat in a jacket pocket or bag, and the corners are reinforced so it survives actual travel, not just a desk drawer.",
    available: true,
    image: "/products/wallet-03.jpg",
    gallery: ["/products/wallet-03.jpg"],
    swatchSeed: 5,
  },
  {
    slug: "ombre-notebook-cover",
    name: "Ombré Notebook Cover",
    category: "covers",
    price: 120,
    shortDescription: "Refillable cover for an A5 notebook, hand-dyed.",
    description:
      "A refillable cover sized for a standard A5 notebook, hand-dyed in graduated tone from spine to edge. The elastic closure and card slot inside are the only concessions to structure — everything else is just well-finished leather.",
    variants: ["Tan", "Chestnut", "Umber"],
    bestSeller: true,
    available: true,
    image: "/products/cover-01.svg",
    gallery: ["/products/cover-01.jpg", "/products/cover-01-alt.jpg"],
    swatchSeed: 6,
  },
  {
    slug: "hand-stitched-journal-cover",
    name: "Hand-Stitched Journal Cover",
    category: "covers",
    price: 135,
    shortDescription: "Saddle-stitched, natural veg-tan that darkens with age.",
    description:
      "Left undyed, so the gradation here comes later — from your hands, not ours. Saddle-stitched in waxed linen thread with a pen loop and a single card slot. Fits a standard A5 journal, replaceable when the pages run out.",
    available: true,
    image: "/products/cover-02.svg",
    gallery: ["/products/cover-02.svg"],
    swatchSeed: 7,
  },
  {
    slug: "contrast-stitch-billfold",
    name: "Contrast-Stitch Billfold",
    category: "wallets",
    price: 160,
    shortDescription: "Long billfold, contrast waxed-thread stitching.",
    description:
      "A long billfold with visible contrast stitching — the one piece in the line where the thread carries the gradient instead of the leather, moving a shade lighter with every stitch across the seam. Currently out of stock; the next batch is cut but not yet stitched.",
    variants: ["Umber"],
    available: false,
    image: "/products/wallet-04.svg",
    gallery: ["/products/wallet-04.svg"],
    swatchSeed: 8,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelated(product: Product, count = 3) {
  return products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .concat(products.filter((p) => p.slug !== product.slug && p.category !== product.category))
    .slice(0, count);
}

export function getBestSellers() {
  return products.filter((p) => p.bestSeller);
}
