// ===== Site content — edit here to update prices, products and gallery =====
window.SITE = {
  whatsapp: "972504235050",

  // Price per pin by quantity (from the original price list). "to: null" = and above.
  prices: [
    { from: 20,  to: 29,   price: 25 },
    { from: 30,  to: 39,   price: 19 },
    { from: 40,  to: 49,   price: 15 },
    { from: 50,  to: 69,   price: 12 },
    { from: 70,  to: 100,  price: 11 },
    { from: 101, to: 200,  price: 9 },
    { from: 201, to: null, price: 8 }
  ],

  // Ready-made pins from stock (~500 units already produced), sold at a flat clearance price. min = minimum order quantity.
  products: [
    { name: "סיכת שבט קווה",  img: "shevet-kaveh.webp", price: 10, min: 40 },
    { name: "סיכת שבט רעים",  img: "shevet-reim.webp",  price: 10, min: 40 },
    { name: "סיכת שרוליק",    img: "shrulik.webp",      price: 10, min: 40 }
  ],

  // Portfolio. cat: youth | tribe | community
  gallery: [
    { img: "kfar-yona.webp",        cat: "youth",     alt: "סיכת סניף כפר יונה – בני עקיבא" },
    { img: "ir-imperia.webp",       cat: "youth",     alt: "סיכת עיירה אימפריה 2023" },
    { img: "houston.webp",          cat: "youth",     alt: "סיכת בני עקיבא יוסטון" },
    { img: "hazorim.webp",          cat: "youth",     alt: "סיכת סניף הזורעים – בני עקיבא" },
    { img: "sisu.webp",             cat: "youth",     alt: "סיכת שישו את ירושלים" },
    { img: "montreal.webp",         cat: "youth",     alt: "סיכת בני עקיבא מונטריאול" },
    { img: "kfar-eldad.webp",       cat: "youth",     alt: "סיכת סניף כפר אלדד – בני עקיבא" },
    { img: "kiryat-shmuel.webp",    cat: "youth",     alt: "סיכת סניף קריית שמואל – בני עקיבא" },
    { img: "shabbat-ola.webp",      cat: "youth",     alt: "סיכת שבת עולה 2023" },
    { img: "ramaa.webp",            cat: "youth",     alt: "סיכת סניף רמ\"א – בני עקיבא" },
    { img: "shomron.webp",          cat: "youth",     alt: "סיכת שבט שומרון – בני עקיבא" },
    { img: "ba-1.webp",             cat: "youth",     alt: "סיכת סניף בני עקיבא" },
    { img: "ba-2.webp",             cat: "youth",     alt: "סיכת סניף בני עקיבא" },
    { img: "ba-3.webp",             cat: "youth",     alt: "סיכת סניף בני עקיבא" },
    { img: "ba-4.webp",             cat: "youth",     alt: "סיכת סניף בני עקיבא" },
    { img: "ba-5.webp",             cat: "youth",     alt: "סיכת סניף בני עקיבא" },
    { img: "shevet-reim.webp",      cat: "tribe",     alt: "סיכת שבט רעים" },
    { img: "shevet-kaveh.webp",     cat: "tribe",     alt: "סיכת שבט קווה" },
    { img: "shevet-haim.webp",      cat: "tribe",     alt: "סיכת שבט חיים" },
    { img: "kaveh-ariel.webp",      cat: "tribe",     alt: "סיכת קווה אריאל" },
    { img: "nirit.webp",            cat: "tribe",     alt: "סיכת נירית" },
    { img: "wings-a.webp",          cat: "tribe",     alt: "סיכת כנפיים" },
    { img: "shrulik.webp",          cat: "community", alt: "סיכת שרוליק" },
    { img: "shrulikim.webp",        cat: "community", alt: "סיכות שרוליקים – אשכול בן יהודה" },
    { img: "eshkol-or-rehovot.webp",cat: "community", alt: "סיכת אשכול אורט רחובות" },
    { img: "ordim-hadar.webp",      cat: "community", alt: "סיכת אורדים הדר" },
    { img: "green-mask.webp",       cat: "community", alt: "סיכה מעוצבת – דמות ירוקה" }
  ]
};
