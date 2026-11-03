(function () {
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const img = (f) => "/assets/img/" + f;
  // Traffic source (?src=ig / ?src=fb, or utm_source=instagram/facebook), remembered for the visit
  const SRC_KEY = "visit-src";
  const params = new URLSearchParams(location.search);
  const utm = (params.get("utm_source") || "").toLowerCase();
  let src = params.get("src") || (utm.startsWith("insta") ? "ig" : utm.startsWith("face") || utm === "fb" ? "fb" : "");
  try {
    if (src && S.sources[src]) sessionStorage.setItem(SRC_KEY, src);
    else src = sessionStorage.getItem(SRC_KEY) || "";
  } catch (e) {}
  const srcNote = S.sources[src] ? ` (הגעתי דרך ${S.sources[src]})` : "";
  const wa = (text) => `https://wa.me/${S.whatsapp}?text=${encodeURIComponent(text + srcNote)}`;

  // Tag the static WhatsApp links with the source too
  if (srcNote) {
    $$('a[href^="https://wa.me/"]').forEach((a) => {
      if (a.closest("[data-products]")) return;
      const u = new URL(a.href);
      u.searchParams.set("text", (u.searchParams.get("text") || "היי") + srcNote);
      a.href = u.toString();
    });
  }

  // Social buttons
  $$("[data-social]").forEach((a) => {
    const url = S.social[a.dataset.social];
    if (url) a.href = url; else a.remove();
  });

  // Year
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  // Mobile nav
  const toggle = $(".nav-toggle"), nav = $("#nav");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
    });
    $$("a", nav).forEach((a) => a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false"); nav.classList.remove("open");
    }));
  }

  // Products
  const prodWrap = $("[data-products]");
  if (prodWrap) {
    prodWrap.innerHTML = S.products.map((p, i) => `
      <article class="product card" id="pin-${p.id}">
        <div class="product-img"><img src="${img(p.img)}" alt="${p.name}" loading="lazy"></div>
        <h3>${p.name}</h3>
        <p class="price">₪${p.price}<small> לסיכה · כולל משלוח · מינימום ${p.min}</small></p>
        <div class="qty">
          <label for="q${i}">כמות</label>
          <input id="q${i}" type="number" min="${p.min}" step="1" value="${p.min}" inputmode="numeric">
        </div>
        <a class="btn btn-block" data-order="${i}" target="_blank" rel="noopener" href="#">הזמנה בוואטסאפ</a>
      </article>`).join("");
    $$("[data-order]", prodWrap).forEach((a) => {
      const p = S.products[+a.dataset.order];
      const input = a.parentElement.querySelector("input");
      const update = () => {
        const q = Math.max(p.min, parseInt(input.value, 10) || p.min);
        a.href = wa(`היי, אשמח להזמין מהמלאי ${q} יחידות של ${p.name} (₪${p.price} לסיכה, סה"כ ₪${q * p.price}).`);
      };
      input.addEventListener("input", update);
      input.addEventListener("change", () => { if ((+input.value || 0) < p.min) input.value = p.min; update(); });
      update();
    });
    // Deep link to a single pin (e.g. /?src=ig#pin-kaveh): scroll to it and highlight it
    const target = location.hash.startsWith("#pin-") && document.getElementById(location.hash.slice(1));
    if (target) {
      target.classList.add("spotlight");
      requestAnimationFrame(() => target.scrollIntoView({ block: "center" }));
    }
  }

  // Gallery + filters + lightbox
  const gal = $("[data-gallery]");
  if (gal) {
    gal.innerHTML = S.gallery.map((g) => `
      <button class="g-item" data-cat="${g.cat}" aria-label="הגדלה: ${g.alt}">
        <img src="${img(g.img)}" alt="${g.alt}" loading="lazy">
      </button>`).join("");
    $$(".chip").forEach((c) => c.addEventListener("click", () => {
      $$(".chip").forEach((x) => { x.classList.toggle("active", x === c); x.setAttribute("aria-selected", String(x === c)); });
      const f = c.dataset.filter;
      $$(".g-item", gal).forEach((it) => (it.hidden = f !== "all" && it.dataset.cat !== f));
    }));
    const lb = $(".lightbox"), lbImg = $("img", lb);
    const close = () => (lb.hidden = true);
    gal.addEventListener("click", (e) => {
      const b = e.target.closest(".g-item"); if (!b) return;
      const i = $("img", b); lbImg.src = i.src; lbImg.alt = i.alt; lb.hidden = false; $(".lb-close", lb).focus();
    });
    lb.addEventListener("click", (e) => { if (e.target !== lbImg) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }

  // Price table + calculator
  const tbody = $("[data-prices]");
  if (tbody) {
    tbody.innerHTML = S.prices.map((r) => `<tr><td><span dir="ltr">${r.to ? `${r.from}–${r.to}` : `${r.from - 1}+`}</span></td><td>₪${r.price}</td></tr>`).join("");
    const qty = $("#qty"), out = $("#calc-out");
    const calc = () => {
      const q = parseInt(qty.value, 10);
      const row = S.prices.find((r) => q >= r.from && (r.to === null || q <= r.to));
      $$("tr", tbody).forEach((tr, i) => tr.classList.toggle("on", S.prices[i] === row));
      out.innerHTML = !q || q < S.prices[0].from
        ? `מינימום ${S.prices[0].from} סיכות`
        : `<strong>₪${(q * row.price).toLocaleString("he-IL")}</strong> סה"כ · ₪${row.price} לסיכה`;
    };
    qty.addEventListener("input", calc); calc();
  }

  // Reveal on scroll
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    $$(".section-head, .card, .steps li, .tribe-row figure, .faq details").forEach((el) => { el.classList.add("reveal"); io.observe(el); });
  }
})();
