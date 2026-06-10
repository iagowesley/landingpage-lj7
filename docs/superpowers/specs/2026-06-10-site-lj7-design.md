# Site de apresentação LJ7 — Design

**Data:** 2026-06-10 · **Status:** aprovado pelo usuário

## Objetivo
Site one-page de apresentação do app LJ7 (Lição Jovem 7) — Escola Sabatina gamificada para jovens adventistas. Substitui o site atual em lj7.netlify.app. Deve ser moderno, com alta interatividade, parallax de qualidade e tema dark premium com verde vibrante.

## Direção visual (aprovada: "Dark premium")
- Fundo: verde-escuro quase preto `#0a1410`; verde principal `#2fd66f` com glow neon.
- Glassmorphism nos cards, grain sutil global, manchas de luz (blobs) em parallax.
- Tipografia: Unbounded (display) + Instrument Sans (corpo), via Google Fonts.

## Stack
Site estático: `index.html`, `css/style.css`, `js/main.js`, `imgs/` (assets reaproveitados do site atual). CDN: GSAP + ScrollTrigger, Lenis (smooth scroll). Deploy Netlify.

## Seções
1. **Nav** fixa de vidro, encolhe ao rolar; menu mobile.
2. **Hero**: badge "🎉 Novo App 2026", título "A lição de forma divertida e interativa" com reveal palavra a palavra, partículas, parallax de mouse e scroll, mockup flutuante com chips gamificados ("+10 pts", "🔥 7 dias", "🏆 #1"), botões Google Play (link real: `https://play.google.com/store/apps/details?id=com.licaojovem.app`) e App Store ("Em breve", desabilitado).
3. **Marquee** infinito: RESUMOS ✦ QUIZ ✦ RANKING ✦ CONQUISTAS ✦ 100% GRÁTIS.
4. **Recursos** (✨ Tudo em um só app): 4 cards de vidro com tilt 3D e glow seguindo o cursor — Resumos diários, Quiz interativo, Ranking, Conquistas.
5. **Como funciona** (🚀 Simples e divertido): timeline vertical com linha que se desenha no scroll, 3 passos com números gigantes em parallax.
6. **Comunidade** (🤝 Junte-se a milhares de jovens): contadores animados — 📖 1.200+ lições, 📲 1.000+ downloads, 🌟 850+ jovens.
7. **CTA**: "Pronto para começar? Baixe o LJ7 agora — é 100% gratuito." + botões.
8. **Footer**: logo, "© 2025 Lição Jovem 7. Feito com ❤️ para jovens adventistas.", Instagram @licaojovem7, Política de Privacidade (`/privacy`).

## Acessibilidade/qualidade
Respeitar `prefers-reduced-motion`; alt em todas as imagens; contraste AA nos textos; responsivo mobile-first; SEO básico (title, description, OG tags).
