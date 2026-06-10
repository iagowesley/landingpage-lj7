/* ═══════════════════════════════════════════
   LJ7 — interações: Lenis + GSAP ScrollTrigger
   ═══════════════════════════════════════════ */
(() => {
  "use strict";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  document.documentElement.classList.add("js");
  gsap.registerPlugin(ScrollTrigger);

  /* ── smooth scroll (Lenis) ── */
  let lenis = null;
  if (!reduced) {
    lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  const scrollTo = (target) => {
    if (lenis) lenis.scrollTo(target, { offset: -70, duration: 1.4 });
    else document.querySelector(target)?.scrollIntoView({ block: "start" });
  };

  /* ── âncoras suaves ── */
  document.querySelectorAll("[data-scrollto]").forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      e.preventDefault();
      closeMenu();
      scrollTo(href);
    });
  });

  /* ── nav: encolhe ao rolar + barra de progresso ── */
  const nav = document.getElementById("nav");
  ScrollTrigger.create({
    start: 8,
    onUpdate: () => {},
    onToggle: (self) => nav.classList.toggle("scrolled", self.isActive),
  });
  gsap.to(".scroll-progress", {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { start: 0, end: "max", scrub: 0.4 },
  });

  /* ── menu mobile ── */
  const burger = document.getElementById("navBurger");
  const menu = document.getElementById("mobileMenu");
  const closeMenu = () => {
    burger.classList.remove("open");
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-hidden", "true");
    if (lenis) lenis.start();
  };
  burger.addEventListener("click", () => {
    const open = !menu.classList.contains("open");
    burger.classList.toggle("open", open);
    menu.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-hidden", String(!open));
    if (lenis) open ? lenis.stop() : lenis.start();
  });

  /* ── título do hero: reveal palavra a palavra ── */
  const title = document.getElementById("heroTitle");
  title.querySelectorAll(".hl").forEach((line) => {
    const frag = document.createDocumentFragment();
    [...line.childNodes].forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent.split(/\s+/).filter(Boolean).forEach((word) => {
          const w = el("span", "w");
          const wi = el("span", "wi");
          wi.textContent = word;
          w.appendChild(wi);
          frag.appendChild(w);
          frag.appendChild(document.createTextNode(" "));
        });
      } else {
        const w = el("span", "w");
        const wi = el("span", "wi");
        wi.appendChild(node.cloneNode(true));
        w.appendChild(wi);
        frag.appendChild(w);
        frag.appendChild(document.createTextNode(" "));
      }
    });
    line.textContent = "";
    line.appendChild(frag);
  });

  function el(tag, cls) {
    const n = document.createElement(tag);
    n.className = cls;
    return n;
  }

  /* ── partículas do hero ── */
  if (!reduced) {
    const box = document.getElementById("particles");
    for (let i = 0; i < 26; i++) {
      const p = document.createElement("span");
      const size = 2 + Math.random() * 3.5;
      p.style.cssText = `
        left:${Math.random() * 100}%;
        width:${size}px;height:${size}px;
        --po:${0.15 + Math.random() * 0.5};
        animation-duration:${9 + Math.random() * 12}s;
        animation-delay:-${Math.random() * 18}s;
      `;
      box.appendChild(p);
    }
  }

  /* ── intro do hero ── */
  if (!reduced) {
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .from(".nav-inner", { y: -24, opacity: 0, duration: 0.7 })
      .from('[data-intro="badge"]', { scale: 0.6, opacity: 0, duration: 0.5, ease: "back.out(2.2)" }, 0.15)
      .from(".hero-title .wi", { yPercent: 115, duration: 0.85, stagger: 0.07 }, 0.3)
      .from('[data-intro="fade"]', { y: 28, opacity: 0, duration: 0.7, stagger: 0.12 }, 0.75)
      .from('[data-intro="phone"]', { y: 60, opacity: 0, scale: 0.92, duration: 1 }, 0.55)
      .from(".chip", { scale: 0, opacity: 0, duration: 0.6, stagger: 0.12, ease: "back.out(2.5)" }, 1.05)
      .from(".scroll-hint", { opacity: 0, duration: 0.6 }, 1.3);
  }

  /* ── parallax de mouse (hero) ── */
  if (!reduced && hasHover) {
    const layers = [...document.querySelectorAll("[data-depth]")].map((node) => ({
      x: gsap.quickTo(node, "x", { duration: 0.8, ease: "power3.out" }),
      y: gsap.quickTo(node, "y", { duration: 0.8, ease: "power3.out" }),
      depth: parseFloat(node.dataset.depth),
    }));
    document.querySelector(".hero").addEventListener("pointermove", (e) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      layers.forEach((l) => {
        l.x(-nx * l.depth);
        l.y(-ny * l.depth);
      });
    });

    /* glow que segue o cursor na página toda */
    document.body.classList.add("has-cursor");
    const glowX = gsap.quickTo(".cursor-glow", "x", { duration: 0.6, ease: "power3.out" });
    const glowY = gsap.quickTo(".cursor-glow", "y", { duration: 0.6, ease: "power3.out" });
    window.addEventListener("pointermove", (e) => {
      glowX(e.clientX);
      glowY(e.clientY);
    });
  }

  /* ── parallax de scroll: blobs e mockup ── */
  if (!reduced) {
    document.querySelectorAll("[data-speed]").forEach((node) => {
      gsap.to(node, {
        yPercent: parseFloat(node.dataset.speed),
        ease: "none",
        scrollTrigger: {
          trigger: node.closest("section, .hero") || node,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    });

    gsap.to(".phone-wrap", {
      y: 90,
      rotate: 4,
      ease: "none",
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 0.5 },
    });

    /* números gigantes da timeline em parallax (só desktop — no mobile sobrepõe os cards) */
    gsap.matchMedia().add("(min-width: 961px)", () => {
      document.querySelectorAll("[data-num]").forEach((num) => {
        gsap.fromTo(num, { y: 60 }, {
          y: -60,
          ease: "none",
          scrollTrigger: { trigger: num, start: "top bottom", end: "bottom top", scrub: 0.8 },
        });
      });
    });
  }

  /* ── reveals genéricos ── */
  if (!reduced) {
    document.querySelectorAll("[data-reveal]").forEach((node) => {
      gsap.fromTo(node, { y: 44, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: node, start: "top 82%" },
      });
    });
    document.querySelectorAll("[data-reveal-group]").forEach((group) => {
      gsap.fromTo(group.children, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.85, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: group, start: "top 80%" },
      });
    });
  } else {
    document.querySelectorAll("[data-reveal], [data-reveal-group] > *")
      .forEach((n) => (n.style.opacity = 1));
  }

  /* ── linha da timeline se desenha no scroll ── */
  gsap.to("#tlProgress", {
    scaleY: 1,
    ease: "none",
    scrollTrigger: {
      trigger: "#timeline",
      start: "top 70%",
      end: "bottom 55%",
      scrub: reduced ? false : 0.5,
    },
  });

  /* ── tilt 3D + glow nos cards ── */
  if (!reduced && hasHover) {
    document.querySelectorAll("[data-tilt]").forEach((card) => {
      const rx = gsap.quickTo(card, "rotationX", { duration: 0.5, ease: "power2.out" });
      const ry = gsap.quickTo(card, "rotationY", { duration: 0.5, ease: "power2.out" });
      gsap.set(card, { transformPerspective: 900 });
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        rx((0.5 - py) * 10);
        ry((px - 0.5) * 12);
        card.style.setProperty("--mx", `${px * 100}%`);
        card.style.setProperty("--my", `${py * 100}%`);
      });
      card.addEventListener("pointerleave", () => {
        rx(0);
        ry(0);
      });
    });
  }

  /* ── contadores animados ── */
  document.querySelectorAll("[data-count]").forEach((node) => {
    const target = parseInt(node.dataset.count, 10);
    const fmt = new Intl.NumberFormat("pt-BR");
    if (reduced) {
      node.textContent = fmt.format(target);
      return;
    }
    const state = { v: 0 };
    ScrollTrigger.create({
      trigger: node,
      start: "top 85%",
      once: true,
      onEnter: () =>
        gsap.to(state, {
          v: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => (node.textContent = fmt.format(Math.round(state.v))),
        }),
    });
  });
})();
