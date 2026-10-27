import type { Locale } from "./i18n/types";

export type Category = "bags" | "wallets" | "covers";

export const categoryRamp: Record<Category, string> = {
  bags: "var(--color-clay-500)",
  wallets: "var(--color-umber-900)",
  covers: "var(--color-clay-300)",
};

type ProductContent = {
  name: string;
  shortDescription: string;
  description: string;
  variants?: string[];
};

export type Product = {
  slug: string;
  category: Category;
  price: number;
  bestSeller?: boolean;
  new?: boolean;
  available: boolean;
  image: string;
  gallery: string[];
  swatchSeed: number; // drives the generated placeholder art
  content: Record<Locale, ProductContent>;
};

/**
 * Sample catalogue. Every field here is a placeholder standing in for the
 * real Tadreej line-up — swap in actual product names, prices and photos
 * from Instagram before launch. The shape (fields, variants, categories)
 * is built to match how a small hand-finished leather studio like this
 * typically sells, so real products should drop in without restructuring
 * anything. Prices are in Tunisian dinars (quoted to 3 decimals — the
 * millime — per local convention).
 */
export const products: Product[] = [
  {
    slug: "ombre-tote",
    category: "bags",
    price: 420,
    bestSeller: true,
    available: true,
    image: "/products/bag-01.svg",
    gallery: ["/products/bag-01.svg", "/products/bag-01-alt.svg"],
    swatchSeed: 1,
    content: {
      fr: {
        name: "Tote en cuir dégradé",
        shortDescription: "Dégradé brossé à la main sur cuir tanné végétal, une longue anse.",
        description:
          "Taillée dans une seule pièce de cuir tanné végétal et brossée à la main en couches dégradées, claire à la base et plus profonde vers le haut. Une anse structurée, une fermeture magnétique, et assez de place pour une housse d'ordinateur portable et le reste de la journée. Le cuir continuera de foncer avec l'usage, en plus du dégradé teinté déjà présent.",
        variants: ["Fauve", "Châtaigne", "Ombre"],
      },
      ar: {
        name: "حقيبة توتي جلدية متدرّجة",
        shortDescription: "تدرّج مرسوم يدويًا على جلد مدبوغ نباتيًا، بمقبض طويل واحد.",
        description:
          "قُصّت من قطعة واحدة من الجلد المدبوغ نباتيًا وتم تلوينها يدويًا بطبقات متدرّجة، فاتحة عند القاعدة وداكنة عند الحافة العلوية. مقبض واحد متين، وإغلاق مغناطيسي، ومساحة كافية لحقيبة كمبيوتر محمول وبقية أغراض اليوم. سيستمر الجلد في التغميق مع الاستعمال، إضافة إلى التدرّج اللوني المصبوغ أصلًا.",
        variants: ["بني فاتح", "كستنائي", "بني داكن"],
      },
    },
  },
  {
    slug: "patina-crossbody",
    category: "bags",
    price: 310,
    new: true,
    available: true,
    image: "/products/bag-02.svg",
    gallery: ["/products/bag-02.svg"],
    swatchSeed: 2,
    content: {
      fr: {
        name: "Sac bandoulière patine naturelle",
        shortDescription: "Cuir tanné végétal non teinté, laissé à foncer naturellement.",
        description:
          "Pas de teinture sur celui-ci — c'est du cuir tanné végétal non teinté, laissé à développer son propre dégradé, comme le fait naturellement la peau avec la lumière et l'usage. Forme compacte en bandoulière, sangle réglable, un compartiment principal et une poche zippée à l'intérieur. Attendez-vous à ce qu'il ait une allure nettement différente dans un an — en mieux.",
        variants: ["Naturel", "Miel"],
      },
      ar: {
        name: "حقيبة كروسبودي بباتينا طبيعية",
        shortDescription: "جلد مدبوغ نباتيًا غير مصبوغ، يُترك ليغمق من تلقاء نفسه.",
        description:
          "لا صباغة في هذه القطعة — إنه جلد مدبوغ نباتيًا وغير مصبوغ، تُرك ليطوّر تدرّجه الخاص كما تفعل الجلدة طبيعيًا مع الضوء والاستعمال. شكل مدمج يُلبس عبر الجسم، حزام قابل للتعديل، حجرة رئيسية واحدة وجيب بسحّاب من الداخل. توقّع أن يبدو مختلفًا بشكل ملحوظ بعد سنة من الآن — وبشكل أفضل.",
        variants: ["طبيعي", "عسلي"],
      },
    },
  },
  {
    slug: "graduated-edge-bifold",
    category: "wallets",
    price: 145,
    bestSeller: true,
    available: true,
    image: "/products/wallet-01.svg",
    gallery: ["/products/wallet-01.svg", "/products/wallet-01-alt.svg"],
    swatchSeed: 3,
    content: {
      fr: {
        name: "Portefeuille bifold à tranche dégradée",
        shortDescription: "Tranche peinte à la main, claire au pli et plus profonde au coin.",
        description:
          "Une forme bifold classique, rendue moins classique par sa tranche — peinte à la main en couches dégradées pour que le coin paraisse plus foncé que le pli. Six emplacements pour cartes, une poche pleine longueur pour les billets, cousue main au point sellier en fil de lin ciré.",
        variants: ["Fauve", "Ombre"],
      },
      ar: {
        name: "محفظة ثنائية الطي بحافة متدرّجة",
        shortDescription: "حافة مطلية يدويًا، فاتحة عند الطية وداكنة عند الزاوية.",
        description:
          "شكل ثنائي الطي كلاسيكي، لكنه أقل تقليدية بفضل حافته — المطلية يدويًا بطبقات متدرّجة بحيث تبدو الزاوية أغمق من الطية. ستة أماكن للبطاقات، وجيب كامل الطول للأوراق النقدية، مخيط يدويًا بغرزة السروج بخيط كتّان مشمّع.",
        variants: ["بني فاتح", "بني داكن"],
      },
    },
  },
  {
    slug: "dip-dyed-cardholder",
    category: "wallets",
    price: 85,
    available: true,
    image: "/products/wallet-02.svg",
    gallery: ["/products/wallet-02.svg"],
    swatchSeed: 4,
    content: {
      fr: {
        name: "Porte-cartes teint par trempage",
        shortDescription: "Porte-cartes minimaliste pour quatre cartes, teint en dégradé.",
        description:
          "La chose la plus simple que nous fabriquons — un porte-cartes fin pour quatre cartes, trempé à la main pour qu'un bord soit plus foncé que l'autre. Se glisse dans une poche avant sans ajouter d'épaisseur. Un bon point de départ si le bifold vous semble être un engagement.",
        variants: ["Argile", "Châtaigne"],
      },
      ar: {
        name: "حافظة بطاقات مصبوغة بالغمس",
        shortDescription: "حافظة بطاقات بسيطة تتّسع لأربع بطاقات، مصبوغة بتدرّج لوني.",
        description:
          "أبسط ما نصنعه — حافظة رقيقة لأربع بطاقات، مغموسة يدويًا بحيث تكون إحدى الحافتين أغمق من الأخرى. تدخل في جيب أمامي دون أن تُثقله. نقطة انطلاق جيدة إن بدت لك المحفظة ثنائية الطي التزامًا كبيرًا.",
        variants: ["طيني", "كستنائي"],
      },
    },
  },
  {
    slug: "tonal-passport-holder",
    category: "wallets",
    price: 95,
    available: true,
    image: "/products/wallet-03.svg",
    gallery: ["/products/wallet-03.svg"],
    swatchSeed: 5,
    content: {
      fr: {
        name: "Étui à passeport dégradé",
        shortDescription: "Passeport et trois emplacements pour cartes, du fauve à l'ombre.",
        description:
          "Accueille un passeport et trois cartes, dans un cuir qui passe du fauve à l'ombre sur toute la couverture. Se glisse à plat dans une poche de veste ou un sac, et les coins sont renforcés pour survivre à de vrais voyages, pas seulement à un tiroir de bureau.",
      },
      ar: {
        name: "حافظة جواز سفر متدرّجة اللون",
        shortDescription: "لجواز السفر مع ثلاثة أماكن للبطاقات، من البني الفاتح إلى الداكن.",
        description:
          "تتّسع لجواز سفر وثلاث بطاقات، بجلد ينتقل من البني الفاتح إلى الداكن عبر الغلاف. تُحمل مسطّحة في جيب سترة أو حقيبة، وزواياها مقوّاة لتصمد أمام سفر حقيقي، لا مجرّد درج مكتب.",
      },
    },
  },
  {
    slug: "ombre-notebook-cover",
    category: "covers",
    price: 120,
    bestSeller: true,
    available: true,
    image: "/products/cover-01.svg",
    gallery: ["/products/cover-01.svg", "/products/cover-01-alt.svg"],
    swatchSeed: 6,
    content: {
      fr: {
        name: "Couverture de carnet dégradée",
        shortDescription: "Couverture rechargeable pour carnet A5, teinte à la main.",
        description:
          "Une couverture rechargeable, taillée pour un carnet A5 standard, teinte à la main en dégradé de la tranche jusqu'au bord. La fermeture élastique et l'emplacement carte à l'intérieur sont les seules concessions à la structure — tout le reste n'est que du cuir bien fini.",
        variants: ["Fauve", "Châtaigne", "Ombre"],
      },
      ar: {
        name: "غلاف دفتر متدرّج اللون",
        shortDescription: "غلاف قابل لإعادة التعبئة لدفتر A5، مصبوغ يدويًا.",
        description:
          "غلاف قابل لإعادة التعبئة، بمقاس دفتر A5 القياسي، مصبوغ يدويًا بتدرّج لوني من الكعب إلى الحافة. الإغلاق المطاطي وجيب البطاقة من الداخل هما الاستثناءان الوحيدان في التصميم — وكل ما تبقى هو مجرّد جلد متقن التشطيب.",
        variants: ["بني فاتح", "كستنائي", "بني داكن"],
      },
    },
  },
  {
    slug: "hand-stitched-journal-cover",
    category: "covers",
    price: 135,
    available: true,
    image: "/products/cover-02.svg",
    gallery: ["/products/cover-02.svg"],
    swatchSeed: 7,
    content: {
      fr: {
        name: "Couverture de journal cousue main",
        shortDescription: "Cousue au point sellier, cuir végétal naturel qui fonce avec le temps.",
        description:
          "Laissée non teinte, pour que le dégradé vienne plus tard — de vos mains, pas des nôtres. Cousue au point sellier en fil de lin ciré, avec un porte-stylo et un emplacement carte. Convient à un journal A5 standard, remplaçable une fois les pages épuisées.",
      },
      ar: {
        name: "غلاف مفكرة مخيط يدويًا",
        shortDescription: "مخيط بغرزة السروج، جلد نباتي طبيعي يغمق مع الزمن.",
        description:
          "تُركت دون صباغة، ليأتي التدرّج لاحقًا — من يديك أنت، لا من أيدينا. مخيطة بغرزة السروج بخيط كتّان مشمّع، مع حلقة لقلم وجيب بطاقة واحد. تناسب مفكرة A5 قياسية، وقابلة للاستبدال عند نفاد الصفحات.",
      },
    },
  },
  {
    slug: "contrast-stitch-billfold",
    category: "wallets",
    price: 160,
    available: false,
    image: "/products/wallet-04.svg",
    gallery: ["/products/wallet-04.svg"],
    swatchSeed: 8,
    content: {
      fr: {
        name: "Portefeuille long à couture contrastée",
        shortDescription: "Portefeuille long, couture en fil ciré contrasté.",
        description:
          "Un portefeuille long à couture contrastée bien visible — la seule pièce de la ligne où c'est le fil qui porte le dégradé plutôt que le cuir, s'éclaircissant d'une nuance à chaque point le long de la couture. Actuellement en rupture de stock ; la prochaine série est coupée mais pas encore cousue.",
        variants: ["Ombre"],
      },
      ar: {
        name: "محفظة طويلة بخياطة متباينة",
        shortDescription: "محفظة طويلة، بخياطة خيط مشمّع متباين اللون.",
        description:
          "محفظة طويلة بخياطة متباينة واضحة — القطعة الوحيدة في المجموعة التي يحمل فيها الخيط التدرّج اللوني بدل الجلد، إذ يزداد فتحًا بدرجة مع كل غرزة على طول الدرزة. غير متوفرة حاليًا؛ الدفعة القادمة مقصوصة لكن لم تُخط بعد.",
        variants: ["بني داكن"],
      },
    },
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
