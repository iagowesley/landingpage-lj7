/* Lição Jovem: landing page
   ---------------------------------------------------------------
   CONFIGURAÇÃO DOS PASSOS DO CELULAR
   Para trocar uma tela, mude só este array. A animação se adapta
   à quantidade de passos.

   img    arquivo dentro de SCREENS_DIR
   alt    descrição da tela (leitor de tela)
   title  título do passo
   text   frase curta do passo
   turn   como o celular chega neste passo:
            'spin'  gira no eixo Y e troca a tela quando fica de lado
            'slide' inclina pouco e a tela nova desliza dentro do display
          (o primeiro passo ignora: ele usa a entrada do hero)
   dir    lado do giro ou do deslize: 1 ou -1
   cards  cards flutuantes. x e y são frações da largura e da altura
          do celular a partir do centro dele; z é a profundidade em px.
          m: true mostra o card também no celular (mobile).
   --------------------------------------------------------------- */
const SCREENS_DIR = 'imgs/screens/webp/';

const STEPS = [
  {
    img: '01-inicio.webp',
    alt: 'Tela inicial do app: saudação, devocional de hoje concluído e a lição de domingo',
    title: 'Abriu, já sabe o que estudar',
    text: 'A tela inicial mostra o devocional e a lição do dia. Um toque e você começa a ler.',
    cards: [
      { type: 'streak', days: 12, x: 0.72, y: -0.2, z: 110, m: true },
    ],
  },
  {
    img: '02-licoes.webp',
    alt: 'Tela Lições disponíveis com a capa da lição do trimestre',
    title: 'A lição do trimestre inteira',
    text: 'Escolha a lição e deslize para os lados para ver as outras dos trimestres anteriores.',
    turn: 'spin', dir: 1,
    cards: [
      { type: 'note', icon: 'ph-books', title: '13 semanas', sub: 'em cada trimestre', x: -0.74, y: 0.24, z: 90, m: true },
    ],
  },
  {
    img: '03-semana.webp',
    alt: 'Lista dos dias da semana da lição, com sábado e domingo marcados como estudados',
    title: 'Uma semana, sete leituras',
    text: 'Do sábado à sexta, cada dia tem o seu tema. O que você já leu fica marcado.',
    turn: 'slide', dir: 1,
    cards: [
      { type: 'week', done: 2, x: 0.7, y: 0.18, z: 100, m: true },
    ],
  },
  {
    img: '04-dia.webp',
    alt: 'Estudo do dia com verso de memória e o resumo da lição',
    title: 'Lê do seu jeito',
    text: 'Verso para memorizar, resumo e o texto completo do dia. No meio da leitura, dá para grifar e anotar.',
    turn: 'slide', dir: 1,
    cards: [
      { type: 'mark', x: -0.82, y: 0.12, z: 120, m: true },
    ],
  },
  {
    img: '05-devocional.webp',
    alt: 'Devocional de hoje com o verso-tema 1 Tessalonicenses 5:8',
    title: 'Devocional antes de sair de casa',
    text: 'Um verso-tema e uma reflexão curta. No sábado, ainda tem o texto-chave da semana.',
    turn: 'spin', dir: -1,
    cards: [
      { type: 'story', verse: 'Sejamos sóbrios, e nos vistamos da couraça da fé e do amor.', ref: '1 Tessalonicenses 5:8', x: 0.74, y: 0.06, z: 130, m: true },
    ],
  },
  {
    img: '06-story.webp',
    alt: 'Tela de compartilhar versículo com a arte pronta e o botão do Instagram',
    title: 'Gostou do versículo? Manda pros stories',
    text: 'O app monta a arte com o versículo e abre o Instagram para você postar.',
    turn: 'slide', dir: 1,
    cards: [
      { type: 'note', icon: 'ph-instagram-logo', title: 'Pronto para os stories', sub: 'arte gerada pelo app', x: -0.76, y: -0.16, z: 100, m: true },
    ],
  },
  {
    img: '07-sequencia.webp',
    alt: 'Sua atividade: pontos de perseverança, sequência de dias e calendário do mês',
    title: 'Cada dia estudado conta',
    text: 'Estudou, ganhou 1 ponto de perseverança. O calendário mostra seus dias e a sequência atual.',
    turn: 'spin', dir: 1,
    cards: [
      { type: 'note', icon: 'ph-bell', title: 'Lembrete às 7h30', sub: 'no horário que você escolher', x: 0.7, y: -0.24, z: 110, m: true },
    ],
  },
  {
    img: '08-ranking.webp',
    alt: 'Ranking com as abas perseverança, quiz e geral e o aviso de brindes trimestrais',
    title: 'Ranking do trimestre',
    text: 'Três placares: perseverança, quiz e geral. Quem termina no topo ganha prêmio.',
    turn: 'spin', dir: -1,
    cards: [
      { type: 'podium', x: -0.72, y: -0.12, z: 120, m: true },
      { type: 'quiz', x: 0.72, y: 0.22, z: 80 },
    ],
  },
  {
    img: '09-comunidade.webp',
    alt: 'Comunidade com um post de reflexão, curtidas e comentários',
    title: 'A galera da lição',
    text: 'Poste uma reflexão, peça oração e responda os outros. É a conversa do sábado, durante a semana.',
    turn: 'slide', dir: 1,
    cards: [
      { type: 'likes', likes: 24, comments: 6, x: 0.66, y: -0.08, z: 120, m: true },
      { type: 'comment', name: 'Novo comentário', text: 'Esse verso me pegou hoje. Obrigado por postar.', x: -0.82, y: 0.26, z: 70 },
    ],
  },
  {
    img: '10-perfil.webp',
    alt: 'Perfil com atividade, anotações, lembrete de estudo e opção de doação',
    title: 'Seu canto no app',
    text: 'Suas anotações, o horário do lembrete e o PIX para quem quiser ajudar o app a continuar no ar.',
    turn: 'spin', dir: 1,
    cards: [
      { type: 'note', icon: 'ph-hand-heart', title: 'Doação via PIX', sub: 'qualquer valor ajuda', x: -0.78, y: 0.2, z: 100, m: true },
    ],
  },
];

/* Tempo de cada fase, em telas de rolagem (1 = 100vh).
   hold + move = rolagem por tela do app. */
const TIMING = { intro: 1, hold: 0.55, move: 0.45, outro: 0.7 };

/* Pose inicial do celular no hero: deitado e inclinado. */
const PHONE_START = { rx: 25, ry: -30, rz: 8, s: 0.8, x: 0.12, y: 0.04 };

/* Animações Lottie do app (opcional). Coloque fire.json, bolt.json e
   calendar.json nesta pasta e elas substituem os ícones automaticamente. */
const LOTTIE_DIR = 'imgs/lottie/';

/* --------------------------------------------------------------- */

(() => {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const range = (t, a, b) => clamp((t - a) / (b - a));
  const pad = (n) => String(n).padStart(2, '0');
  const ease = {
    io: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
    out: (t) => 1 - Math.pow(1 - t, 3),
    inSine: (t) => 1 - Math.cos((t * Math.PI) / 2),
    outSine: (t) => Math.sin((t * Math.PI) / 2),
  };
  const DEG = Math.PI / 180;

  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mqMobile = window.matchMedia('(max-width: 899px)');
  let isMobile = mqMobile.matches;

  const hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

  /* ---------- elementos ---------- */
  const tour = $('.tour');
  const hero = $('[data-hero]');
  const list = $('.steps__list');
  const meter = $('.meter');
  const meterNum = $('.meter__num');
  const meterFill = $('.meter__bar i');
  const phone = $('.phone');
  const face = $('.phone__face');
  const screen = $('.phone__screen');
  const glare = $('.phone__glare');
  const edgesBox = $('.phone__edges');
  const floor = $('.floor');
  const floatersBox = $('.floaters__origin');

  const N = STEPS.length;
  const PER = TIMING.hold + TIMING.move;
  const S = (i) => TIMING.intro + i * PER;
  const TOTAL = S(N - 1) + TIMING.hold + TIMING.outro;

  /* ---------- monta passos, telas e cards ---------- */
  $('.meter__total').textContent = pad(N);

  list.innerHTML = STEPS.map((s, i) => `
    <li class="step" data-i="${i}">
      <h3 class="step__title">${s.title}</h3>
      <p class="step__text">${s.text}</p>
    </li>`).join('');
  const stepEls = $$('.step', list);

  screen.insertAdjacentHTML('afterbegin', STEPS.map((s, i) => `
    <img class="scr${i === 0 ? ' is-on' : ''}" src="${SCREENS_DIR + s.img}" alt="${s.alt}"
      width="600" height="1301" decoding="async"${i === 0 ? ' fetchpriority="high"' : ''} />`).join(''));
  const scrEls = $$('.scr', screen);

  // pré-carrega e decodifica todas as telas antes de chegar nelas
  scrEls.forEach((img) => { if (img.decode) img.decode().catch(() => {}); });

  const cardHTML = (c) => {
    switch (c.type) {
      case 'streak':
        return `<span class="fire" data-lottie="fire"><i class="ph ph-fire"></i></span>
          <span><b>${c.days} dias seguidos</b><small>sequência de estudo</small></span>`;
      case 'note':
        return `<i class="ph ${c.icon}"></i><span><b>${c.title}</b><small>${c.sub}</small></span>`;
      case 'week': {
        const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
        return `<span><b>Esta semana</b><span class="fl-week">${days.map((d, k) =>
          `<span class="${k < c.done ? 'on' : ''}">${d}</span>`).join('')}</span></span>`;
      }
      case 'mark':
        return `<span class="fl-row"><i class="ph ph-highlighter"></i>Grifo salvo</span>
          <p>"Os profetas bíblicos frequentemente enfrentaram <mark>rejeição severa</mark> ao transmitir mensagens."</p>`;
      case 'story':
        return `<small>Devocional de hoje</small><p>"${c.verse}"</p><span>${c.ref}</span>
          <img src="imgs/logo_branca.png" alt="" width="26" height="14" />`;
      case 'podium':
        return `<span><b>Ranking geral</b></span>
          <span class="fl-pod"><div class="p2">2º</div><div class="p1">1º</div><div class="p3">3º</div></span>`;
      case 'quiz':
        return `<span class="fl-ring"><svg viewBox="0 0 44 44"><circle class="tr" cx="22" cy="22" r="18"/>
          <circle class="br" cx="22" cy="22" r="18"/></svg><span>18s</span></span>
          <span><b>9 de 10 acertos</b><small>quiz da semana</small></span>`;
      case 'likes':
        return `<span class="fl-stat"><i class="ph ph-heart heart"></i>${c.likes}</span>
          <span class="fl-stat"><i class="ph ph-chat-circle"></i>${c.comments}</span>`;
      case 'comment':
        return `<small>${c.name}</small><span>${c.text}</span>`;
      default:
        return '';
    }
  };

  const cards = [];
  STEPS.forEach((s, i) => (s.cards || []).forEach((c, j) => {
    const el = document.createElement('div');
    el.className = `fl fl--${c.type}`;
    el.innerHTML = cardHTML(c);
    floatersBox.appendChild(el);
    cards.push({ el, i, j, c });
  }));

  /* ---------- espessura do celular (bordas em 3D) ---------- */
  const dims = { W: 300, H: 620 };

  function buildEdges() {
    const W = phone.offsetWidth;
    const H = phone.offsetHeight;
    if (!W || !H) return;
    dims.W = W; dims.H = H;
    const R = parseFloat(getComputedStyle(face).borderTopLeftRadius) || W * 0.167;
    const T = Math.max(7, Math.round(W * 0.045));
    phone.style.setProperty('--t', `${T}px`);

    // contorno do retângulo arredondado, sentido horário (y para baixo)
    const n = isMobile ? 4 : 6;
    const cx = W / 2 - R;
    const cy = H / 2 - R;
    const pts = [];
    const corner = (ox, oy, a0) => {
      for (let k = 0; k <= n; k++) {
        const a = a0 + (k * Math.PI) / 2 / n;
        pts.push([ox + R * Math.cos(a), oy + R * Math.sin(a)]);
      }
    };
    corner(cx, -cy, -Math.PI / 2);
    corner(cx, cy, 0);
    corner(-cx, cy, Math.PI / 2);
    corner(-cx, -cy, Math.PI);

    const light = [-0.55, -0.83];
    let html = '';
    for (let k = 0; k < pts.length; k++) {
      const a = pts[k];
      const b = pts[(k + 1) % pts.length];
      const dx = b[0] - a[0];
      const dy = b[1] - a[1];
      const L = Math.hypot(dx, dy);
      if (L < 0.5) continue;
      const nx = dy / L;
      const ny = -dx / L;
      const lum = 0.5 + 0.5 * (nx * light[0] + ny * light[1]);
      const c = Math.round(lerp(48, 150, lum));
      const mid = `rgb(${c},${c + 6},${c + 3})`;
      const dark = `rgb(${Math.round(c * 0.45)},${Math.round(c * 0.5)},${Math.round(c * 0.48)})`;
      const ang = Math.atan2(dy, dx);
      html += `<div class="edge" style="width:${(L + 1).toFixed(2)}px;height:${T}px;` +
        `background:linear-gradient(${dark},${mid} 30%,${mid} 70%,${dark});` +
        `transform:translate3d(${((a[0] + b[0]) / 2).toFixed(2)}px,${((a[1] + b[1]) / 2).toFixed(2)}px,0) ` +
        `rotateZ(${ang.toFixed(4)}rad) rotateX(90deg) translate(-50%,-50%)"></div>`;
    }

    // botões laterais: [lado, centro y (fração da altura), comprimento]
    const btns = [[1, -0.2, 0.13], [-1, -0.27, 0.05], [-1, -0.17, 0.08], [-1, -0.06, 0.08]];
    const bw = Math.max(3, T * 0.5);
    btns.forEach(([side, y, len]) => {
      const h = H * len;
      html += `<div class="btn-side" style="width:${bw}px;height:${h.toFixed(1)}px;` +
        `transform:translate3d(${(side * (W / 2 + 1.6)).toFixed(1)}px,${(y * H).toFixed(1)}px,0) ` +
        `rotateY(90deg) translate(-50%,-50%)"></div>`;
    });
    edgesBox.innerHTML = html;
  }

  /* ---------- linha do tempo ---------- */
  function phaseAt(t) {
    if (t < TIMING.intro) return { kind: 'intro', i: 0, f: clamp(t / TIMING.intro) };
    const last = N - 1;
    if (t >= S(last)) {
      const l = t - S(last);
      if (l <= TIMING.hold) return { kind: 'hold', i: last, h: l / TIMING.hold };
      return { kind: 'outro', i: last, f: clamp((l - TIMING.hold) / TIMING.outro) };
    }
    const k = (t - TIMING.intro) / PER;
    const i = Math.floor(k);
    const l = (k - i) * PER;
    if (l <= TIMING.hold) return { kind: 'hold', i, h: l / TIMING.hold };
    return { kind: 'move', i, f: (l - TIMING.hold) / TIMING.move };
  }

  // pequeno balanço enquanto o passo está parado, alternando o lado
  const sway = (i) => (i % 2 ? 1 : -1) * (RM ? 0 : isMobile ? 3 : 4);

  // cache para escrever no DOM só quando muda
  const last = new WeakMap();
  const put = (el, prop, val) => {
    let m = last.get(el);
    if (!m) { m = {}; last.set(el, m); }
    if (m[prop] !== val) { m[prop] = val; el.style[prop] = val; }
  };
  const setOn = (el, on) => el.classList.toggle('is-on', on);

  function render(t) {
    const ph = phaseAt(t);
    const { W, H } = dims;
    const maxSpin = isMobile ? 60 : 90;

    const pose = { x: 0, y: 0, rx: 0, ry: 0, rz: 0, s: 1, o: 1 };
    // telas: a = atual, b = próxima
    let a = ph.i;
    let b = -1;
    let mode = 'single';
    let f = 0;
    let d = 1;

    if (ph.kind === 'intro') {
      const e = ease.io(ph.f);
      const st = RM ? { rx: 0, ry: 0, rz: 0, s: 0.94, x: 0, y: 0 } : PHONE_START;
      const end = { rx: 0, ry: -sway(0), rz: 0, s: 1, x: 0, y: 0 };
      pose.rx = lerp(st.rx, end.rx, e);
      pose.ry = lerp(st.ry, end.ry, e);
      pose.rz = lerp(st.rz, end.rz, e);
      pose.s = lerp(st.s, end.s, e);
      pose.x = lerp(st.x * W, 0, e) * (isMobile ? 0.3 : 1);
      pose.y = lerp(st.y * H, 0, e);
    } else if (ph.kind === 'hold') {
      pose.ry = lerp(-sway(ph.i), sway(ph.i), ph.h);
    } else if (ph.kind === 'move') {
      const next = STEPS[ph.i + 1];
      f = ph.f;
      d = next.dir || 1;
      const base = sway(ph.i);
      const bump = Math.sin(Math.PI * f);
      b = ph.i + 1;
      if (RM) {
        mode = 'fade';
        pose.ry = base;
      } else if (next.turn === 'slide') {
        mode = 'slide';
        pose.ry = base + d * (isMobile ? 10 : 15) * bump;
        pose.rx = 5 * bump;
      } else {
        // giro contínuo: 0 até 90 (some a tela), troca, -90 até 0
        const ang = f < 0.5 ? d * maxSpin * ease.inSine(f * 2) : -d * maxSpin * (1 - ease.outSine((f - 0.5) * 2));
        pose.ry = base + ang;
        pose.s = 1 - 0.06 * bump;
        pose.y = -12 * bump;
        mode = maxSpin >= 85 ? 'swap' : 'spinfade';
      }
    } else if (ph.kind === 'outro') {
      const e = ease.io(ph.f);
      d = STEPS[N - 1].dir || 1;
      if (RM) {
        pose.o = 1 - range(ph.f, 0.2, 0.8);
      } else {
        pose.ry = sway(N - 1) + d * 150 * e;
        pose.s = 1 - 0.4 * e;
        pose.y = -H * 1.1 * ease.inSine(ph.f);
        pose.o = 1 - range(ph.f, 0.5, 0.95);
      }
    }

    /* celular */
    put(phone, 'transform',
      `translate3d(${pose.x.toFixed(1)}px,${pose.y.toFixed(1)}px,0) scale(${pose.s.toFixed(4)}) ` +
      `rotateX(${pose.rx.toFixed(2)}deg) rotateY(${pose.ry.toFixed(2)}deg) rotateZ(${pose.rz.toFixed(2)}deg)`);
    put(phone, 'opacity', pose.o.toFixed(3));

    /* telas */
    const show = (k) => k === a || k === b;
    scrEls.forEach((el, k) => {
      let on = show(k);
      let tf = 'translate3d(0,0,0)';
      let op = '1';
      if (mode === 'single') {
        on = k === a;
      } else if (mode === 'swap') {
        on = k === (f < 0.5 ? a : b);
      } else if (mode === 'fade' || mode === 'spinfade') {
        const mix = mode === 'fade' ? range(f, 0.25, 0.75) : range(f, 0.4, 0.6);
        if (k === b) op = mix.toFixed(3);
        if (k === b && mix === 0) on = false;
        if (k === a && mix === 1) on = false;
      } else if (mode === 'slide') {
        const e = ease.io(f);
        if (k === b) tf = `translate3d(${((1 - e) * 100 * d).toFixed(2)}%,0,0)`;
        if (k === a) { tf = `translate3d(${(-30 * e * d).toFixed(2)}%,0,0)`; op = (1 - 0.45 * e).toFixed(3); }
        if (k === b && e === 0) on = false;
        if (k === a && e === 1) on = false;
      }
      setOn(el, on);
      if (on) { put(el, 'transform', tf); put(el, 'opacity', op); }
    });

    /* reflexo na tela acompanha o giro */
    const ryn = clamp(pose.ry / 90, -1.2, 1.2);
    put(glare, 'transform', `translate3d(${(-ryn * 38).toFixed(2)}%,0,0)`);
    put(glare, 'opacity', (0.45 + Math.abs(ryn) * 0.55 + Math.abs(pose.rx) / 50).toFixed(3));

    /* sombra no chão: estica e enfraquece quando inclina, afina quando gira */
    const tilt = clamp(Math.abs(pose.rx) / 25);
    const side = Math.abs(Math.cos(pose.ry * DEG));
    const lift = clamp(-pose.y / (H * 0.5));
    const sx = (0.5 + 0.5 * side) * (1 + 0.55 * tilt) * pose.s;
    const fy = (H / 2) * pose.s + pose.y * 0.15 + 14;
    put(floor, 'transform', `translate3d(${(pose.x * 0.6).toFixed(1)}px,${fy.toFixed(1)}px,0) scale(${sx.toFixed(3)},${(1 + 0.3 * tilt).toFixed(3)})`);
    put(floor, 'opacity', ((0.9 - 0.45 * tilt) * pose.o * (1 - lift)).toFixed(3));

    /* hero sai, textos dos passos entram e saem */
    const hOut = range(t, 0, TIMING.intro * 0.45);
    put(hero, 'opacity', (1 - hOut).toFixed(3));
    put(hero, 'transform', `translate3d(0,${(-40 * hOut).toFixed(1)}px,0)`);
    hero.style.visibility = hOut >= 1 ? 'hidden' : 'visible';

    stepEls.forEach((el, i) => {
      const inA = i === 0 ? TIMING.intro * 0.55 : S(i) - TIMING.move * 0.45;
      const inB = i === 0 ? TIMING.intro : S(i);
      const outA = S(i) + TIMING.hold;
      const outB = outA + (i === N - 1 ? TIMING.outro * 0.3 : TIMING.move * 0.4);
      const ein = ease.out(range(t, inA, inB));
      const eout = range(t, outA, outB);
      const o = ein * (1 - eout);
      const y = RM ? 0 : (1 - ein) * 16 - eout * 16;
      put(el, 'opacity', o.toFixed(3));
      put(el, 'transform', `translate3d(0,${y.toFixed(1)}px,0)`);
      const hidden = o < 0.5 ? 'true' : 'false';
      if (el.getAttribute('aria-hidden') !== hidden) el.setAttribute('aria-hidden', hidden);
    });

    /* contador e barra */
    const cur = ph.kind === 'move' && ph.f > 0.5 ? ph.i + 1 : ph.i;
    if (meterNum.textContent !== pad(cur + 1)) meterNum.textContent = pad(cur + 1);
    const prog = clamp((t - TIMING.intro * 0.6) / (S(N - 1) - TIMING.intro * 0.6));
    put(meterFill, 'transform', isMobile ? `scaleX(${prog.toFixed(4)})` : `scaleY(${prog.toFixed(4)})`);
    const mo = range(t, TIMING.intro * 0.55, TIMING.intro) * (1 - range(t, S(N - 1) + TIMING.hold, S(N - 1) + TIMING.hold + TIMING.outro * 0.3));
    put(meter, 'opacity', mo.toFixed(3));

    /* cards flutuantes */
    const cs = isMobile ? 0.78 : 1;
    cards.forEach(({ el, i, j, c }) => {
      if (isMobile && !c.m) { put(el, 'opacity', '0'); return; }
      const st = i === 0 ? TIMING.intro * 0.6 : S(i) - TIMING.move * 0.4;
      const en = i === 0 ? TIMING.intro : S(i) + TIMING.hold * 0.1;
      const xs = S(i) + TIMING.hold * 0.85;
      const xe = S(i) + TIMING.hold + (i === N - 1 ? TIMING.outro * 0.3 : TIMING.move * 0.35);
      const lag = j * 0.07;
      const ein = ease.out(range(t, st + lag, en + lag));
      const eout = range(t, xs, xe);
      const o = ein * (1 - eout);
      if (o <= 0.001) { put(el, 'opacity', '0'); return; }
      const cx = isMobile ? clamp(c.x, -0.62, 0.62) : c.x;
      let x, y, z, s;
      if (RM) {
        x = cx * W; y = c.y * H; z = 0; s = cs;
      } else {
        const u = range(t, st, xe);
        const depth = isMobile ? c.z * 0.6 : c.z;
        // sai de trás da borda do celular e vem para a frente
        x = lerp(Math.sign(cx) * 0.3, cx, ein) * W;
        y = lerp(c.y * 0.5, c.y, ein) * H + (0.5 - u) * depth * 0.5 - eout * 24;
        z = lerp(-220, depth, ein) + eout * 30;
        s = lerp(0.7, 1, ein) * cs;
      }
      put(el, 'transform', `translate3d(${x.toFixed(1)}px,${y.toFixed(1)}px,${z.toFixed(1)}px) scale(${s.toFixed(3)}) translate(-50%,-50%)`);
      put(el, 'opacity', (RM ? o : Math.pow(ein, 1.6) * (1 - eout)).toFixed(3));
    });
  }

  /* ---------- rolagem ---------- */
  let lenis = null;
  let tourST = null;
  const proxy = { t: 0 };
  const unit = () => window.innerHeight * (isMobile ? 0.9 : 1);

  buildEdges();
  render(0);

  if (hasGsap) {
    const { gsap, ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    if (!RM && typeof window.Lenis !== 'undefined') {
      lenis = new window.Lenis({ lerp: 0.11, wheelMultiplier: 0.9 });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: tour,
        start: 'top top',
        end: () => `+=${Math.round(TOTAL * unit())}`,
        pin: true,
        scrub: RM ? true : 0.6,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });
    tl.to(proxy, { t: TOTAL, duration: TOTAL, ease: 'none', onUpdate: () => render(proxy.t) });
    tourST = tl.scrollTrigger;

    /* efeitos de rolagem das outras seções */
    if (!RM) {
      const once = (trigger, start = 'top 85%') => ({ trigger, start, once: true });

      // títulos: palavra por palavra, subindo de dentro de uma máscara
      $$('[data-split]').forEach((h) => {
        const words = h.textContent.trim().split(/\s+/);
        h.setAttribute('aria-label', words.join(' '));
        h.innerHTML = words.map((w) => `<span class="split-w" aria-hidden="true"><span>${w}</span></span>`).join(' ');
        gsap.from($$('.split-w > span', h), {
          yPercent: 115, duration: 0.8, ease: 'power3.out', stagger: 0.05,
          scrollTrigger: once(h, 'top 88%'),
        });
      });

      // textos de apoio: fade + 16px
      $$('[data-reveal]').forEach((el) => {
        gsap.from(el, { y: 16, autoAlpha: 0, duration: 0.55, ease: 'power2.out', delay: 0.15, scrollTrigger: once(el, 'top 88%') });
      });

      /* gamificação */
      const num = $('.g-streak__num');
      const counter = { v: 0 };
      gsap.timeline({ scrollTrigger: once('.g-streak', 'top 80%') })
        .from('.g-flame', { scale: 0.4, autoAlpha: 0, duration: 0.6, ease: 'back.out(2)' })
        .to(counter, {
          v: 12, duration: 1.1, ease: 'power2.out',
          onUpdate: () => { num.textContent = String(Math.round(counter.v)); },
        }, 0)
        .from('.g-streak h3, .g-streak__body p', { y: 16, autoAlpha: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08 }, 0.2)
        .from('.g-days li', { scale: 0.5, autoAlpha: 0, duration: 0.3, ease: 'back.out(2)', stagger: 0.035 }, 0.45);
      num.textContent = '0';

      gsap.timeline({ scrollTrigger: once('.g-quiz', 'top 80%') })
        .from('.g-ring', { scale: 0.85, autoAlpha: 0, duration: 0.6, ease: 'power3.out' })
        .from('.g-quiz h3', { y: 16, autoAlpha: 0, duration: 0.5, ease: 'power2.out' }, 0.15)
        .from('.g-facts > div', { x: -14, autoAlpha: 0, duration: 0.45, ease: 'power2.out', stagger: 0.1 }, 0.3);

      // o número grande desliza um pouco mais devagar que a página
      gsap.fromTo(num, { y: 30 }, { y: -30, ease: 'none', scrollTrigger: { trigger: '.g-streak', start: 'top bottom', end: 'bottom top', scrub: true } });

      gsap.timeline({ scrollTrigger: once('.g-podium', 'top 78%') })
        .from('.g-podium__text > *', { y: 16, autoAlpha: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08 })
        .from('.podium__col--2, .podium__col--1, .podium__col--3', { scaleY: 0, duration: 0.6, ease: 'power3.out', stagger: 0.12 }, 0.1)
        .from('.podium__col span', { autoAlpha: 0, y: 8, duration: 0.3, stagger: 0.12 }, 0.45)
        .from('.podium__trophy', { y: -60, rotation: -20, autoAlpha: 0, duration: 0.8, ease: 'bounce.out' }, 0.6);

      /* planos: cards sobem em velocidades diferentes */
      [['.plan--free', 50], ['.plan--pro', 110]].forEach(([sel, dist]) => {
        gsap.fromTo(sel, { y: dist }, { y: 0, ease: 'none', scrollTrigger: { trigger: '.plans__grid', start: 'top bottom', end: 'center 60%', scrub: true } });
        gsap.from(sel, { autoAlpha: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: once('.plans__grid', 'top 80%') });
      });
      $$('.plan').forEach((card) => {
        gsap.from($$('.plan__list li', card), { x: -10, autoAlpha: 0, duration: 0.4, ease: 'power2.out', stagger: 0.07, delay: 0.25, scrollTrigger: once(card, 'top 80%') });
      });

      /* dúvidas: perguntas entram em sequência */
      gsap.from('.faq details', { y: 18, autoAlpha: 0, duration: 0.5, ease: 'power2.out', stagger: 0.07, scrollTrigger: once('.faq__list', 'top 82%') });

      /* CTA: bloco cresce ao entrar e a ilustração flutua com a rolagem */
      gsap.fromTo('.cta__box', { scale: 0.92, y: 40 }, { scale: 1, y: 0, ease: 'none', scrollTrigger: { trigger: '.cta', start: 'top bottom', end: 'top 45%', scrub: true } });
      gsap.fromTo('.cta__art', { y: 70, rotation: 12 }, { y: -30, rotation: 2, ease: 'none', scrollTrigger: { trigger: '.cta', start: 'top bottom', end: 'bottom top', scrub: true } });
      gsap.from('.cta__copy p, .cta__copy .store', { y: 16, autoAlpha: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08, delay: 0.2, scrollTrigger: once('.cta__box', 'top 75%') });

      /* rodapé */
      gsap.from('.footer__grid > *', { y: 16, autoAlpha: 0, duration: 0.5, ease: 'power2.out', stagger: 0.07, scrollTrigger: once('.footer', 'top 92%') });
    }

    /* acordeão das dúvidas com abertura e fechamento suaves */
    let refreshTimer;
    const refreshSoon = () => { clearTimeout(refreshTimer); refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 150); };
    $$('.faq details').forEach((d) => {
      const summary = $('summary', d);
      const panel = $('.faq__a', d);
      if (!summary || !panel || RM) return;
      summary.addEventListener('click', (e) => {
        e.preventDefault();
        gsap.killTweensOf([panel, panel.firstElementChild]);
        const opening = !d.open || d.classList.contains('is-closing');
        if (opening) {
          // se estava fechando, continua de onde parou
          const from = d.classList.contains('is-closing') ? panel.offsetHeight : 0;
          d.classList.remove('is-closing');
          d.open = true;
          gsap.fromTo(panel, { height: from },
            { height: 'auto', duration: 0.45, ease: 'power3.out', onComplete: () => { panel.style.height = ''; refreshSoon(); } });
          gsap.fromTo(panel.firstElementChild, { autoAlpha: 0, y: -8 }, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power2.out', delay: 0.05 });
        } else {
          d.classList.add('is-closing');
          gsap.to(panel.firstElementChild, { autoAlpha: 0, duration: 0.2 });
          gsap.fromTo(panel, { height: panel.offsetHeight }, {
            height: 0, duration: 0.35, ease: 'power3.inOut',
            onComplete: () => { d.open = false; d.classList.remove('is-closing'); panel.style.height = ''; refreshSoon(); },
          });
        }
      });
    });

    /* anel do quiz: 30 segundos correndo com a rolagem */
    const bar = $('.g-ring__bar');
    const secs = $('.g-ring__secs b');
    if (bar && secs) {
      const C = 2 * Math.PI * 52;
      const setRing = (p) => {
        bar.style.strokeDashoffset = (C * p).toFixed(2);
        secs.textContent = String(Math.max(0, Math.ceil(30 * (1 - p))));
      };
      if (RM) setRing(0.4);
      else {
        ScrollTrigger.create({
          trigger: '.g-quiz', start: 'top 85%', end: 'bottom 25%', scrub: true,
          onUpdate: (self) => setRing(self.progress * 0.9),
        });
      }
    }

    window.addEventListener('load', () => ScrollTrigger.refresh());
  } else {
    // sem GSAP (CDN fora do ar): mostra o hero e o primeiro passo parados
    hero.style.opacity = '1';
  }

  /* ---------- redimensionar ---------- */
  let rz;
  const onResize = () => {
    clearTimeout(rz);
    rz = setTimeout(() => {
      isMobile = mqMobile.matches;
      buildEdges();
      render(proxy.t);
    }, 120);
  };
  window.addEventListener('resize', onResize);
  if ('ResizeObserver' in window) new ResizeObserver(onResize).observe(face);

  /* ---------- links internos ---------- */
  const navH = () => $('#topbar').offsetHeight;
  const goTo = (top) => {
    if (lenis) lenis.scrollTo(top, { duration: 1.4 });
    else window.scrollTo({ top, behavior: RM ? 'auto' : 'smooth' });
  };
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      let top = null;
      if (id === '#topo') top = 0;
      else if (id === '#funcoes' && tourST) top = tourST.start + TIMING.intro * unit() + 2;
      else {
        const el = document.querySelector(id);
        if (el) top = el.getBoundingClientRect().top + window.scrollY - navH();
      }
      if (top === null) return;
      e.preventDefault();
      closeMenu();
      goTo(top);
      history.replaceState(null, '', id);
    });
  });

  /* ---------- topo e menu ---------- */
  const topbar = $('#topbar');
  const onScroll = () => topbar.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const menuBtn = $('.menu-btn');
  const topnav = $('#topnav');
  function closeMenu() {
    topnav.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
  menuBtn.addEventListener('click', () => {
    const open = !topnav.classList.contains('is-open');
    topnav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    if (open) topnav.querySelector('a').focus();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && topnav.classList.contains('is-open')) { closeMenu(); menuBtn.focus(); }
  });

  /* ---------- PIX: copiar chave ---------- */
  $$('.pix').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const label = $('.pix__label', btn);
      try {
        await navigator.clipboard.writeText(btn.dataset.pix);
        label.textContent = 'Copiado';
      } catch (err) {
        label.textContent = 'Copie acima';
      }
      setTimeout(() => { label.textContent = 'Copiar'; }, 2200);
    });
  });

  /* ---------- Lottie (opcional) ---------- */
  const lottieEls = $$('[data-lottie]');
  if (lottieEls.length && !RM && location.protocol !== 'file:') {
    const names = [...new Set(lottieEls.map((el) => el.dataset.lottie))];
    Promise.all(names.map((n) => fetch(`${LOTTIE_DIR}${n}.json`)
      .then((r) => (r.ok ? r.json() : null)).catch(() => null)))
      .then((data) => {
        const found = {};
        names.forEach((n, k) => { if (data[k]) found[n] = data[k]; });
        if (!Object.keys(found).length) return;
        const sc = document.createElement('script');
        sc.src = 'https://cdn.jsdelivr.net/npm/lottie-web@5.12.2/build/player/lottie_light.min.js';
        sc.onload = () => lottieEls.forEach((el) => {
          const anim = found[el.dataset.lottie];
          if (!anim) return;
          el.classList.add('has-lottie');
          el.querySelector('i')?.remove();
          window.lottie.loadAnimation({ container: el, renderer: 'svg', loop: true, autoplay: true, animationData: anim });
        });
        document.head.appendChild(sc);
      });
  }
})();
