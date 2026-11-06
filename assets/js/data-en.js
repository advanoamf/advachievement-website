// ===== English site (/en/) — loaded after data.js, overrides only what differs =====
(function () {
  const S = window.SITE;

  // Price per pin in USD, shipping quoted separately. "label" overrides the quantity shown in the table.
  S.prices = [
    { from: 20,  to: 49,   price: 7 },
    { from: 50,  to: 99,   price: 5 },
    { from: 100, to: 199,  price: 4 },
    { from: 200, to: null, price: 3, label: "200+" }
  ];

  // No stock pins on the English site.
  S.products = [];

  S.sources = { ig: "Instagram", fb: "Facebook" };

  // Text used by main.js
  S.t = {
    hi: "Hi",
    currency: "$",
    locale: "en-US",
    enlarge: "Enlarge: ",
    cameVia: (name) => ` (via ${name})`,
    minimum: (n) => `Minimum ${n} pins`,
    total: (sum, each) => `<strong>${sum}</strong> total · ${each} per pin · shipping quoted separately`
  };

  const alts = {
    "houston.webp": "Bnei Akiva Houston pin",
    "montreal.webp": "Bnei Akiva Montreal pin",
    "kfar-yona.webp": "Bnei Akiva Kfar Yona chapter pin",
    "ir-imperia.webp": "Ayara Imperia 2023 pin",
    "hazorim.webp": "Bnei Akiva Hazorim chapter pin",
    "sisu.webp": "Sisu et Yerushalayim pin",
    "kfar-eldad.webp": "Bnei Akiva Kfar Eldad chapter pin",
    "kiryat-shmuel.webp": "Bnei Akiva Kiryat Shmuel chapter pin",
    "shabbat-ola.webp": "Shabbat Ola 2023 pin",
    "ramaa.webp": "Bnei Akiva Rama chapter pin",
    "shomron.webp": "Bnei Akiva Shomron pin",
    "shevet-reim.webp": "Shevet Reim wing pin",
    "shevet-kaveh.webp": "Shevet Kaveh wing pin",
    "shevet-haim.webp": "Shevet Haim wing pin",
    "amikam.webp": "Shevet Amikam wing pin",
    "bonim.webp": "Tzevet HaBonim wing pin",
    "ba-black.webp": "Black Bnei Akiva pin",
    "afik.webp": "Shachbag Afik shield pin with a panther",
    "mega.webp": "Mega pin with a Star of David, heart and wing",
    "kaveh-ariel.webp": "Kaveh Ariel wing pin with a panda",
    "nirit.webp": "Nirit wing pin",
    "wings-a.webp": "Silver wing pin with the letter A",
    "shrulik.webp": "Srulik character pin",
    "shrulikim.webp": "Srulik pins",
    "eshkol-or-rehovot.webp": "Eshkol ORT Rehovot pin",
    "ordim-hadar.webp": "Custom round pin with a lion",
    "green-mask.webp": "Custom green masked character pin"
  };

  // Overseas work first, then the rest in the usual order.
  const first = ["houston.webp", "montreal.webp"];
  S.gallery = [
    ...first.map((f) => S.gallery.find((g) => g.img === f)),
    ...S.gallery.filter((g) => !first.includes(g.img))
  ].map((g) => ({ ...g, alt: alts[g.img] || "Bnei Akiva chapter pin" }));
})();
