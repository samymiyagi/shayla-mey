/* ═══════════════════════════════════════════════════════════════
   ROMANTIC COLLAGE WEBSITE — script.js
   ▸ Edit CONFIG below to personalize everything
════════════════════════════════════════════════════════════════ */

/* ─── CONFIGURATION OBJECT ──────────────────────────────────── */
const CONFIG = {

  /* ── Names ── */
  yourName:      "Me",         // Sender name (appears in letter signature)
  theirName:     "You",        // Recipient name

  /* ── Hero ── */
  heroBig:       "My Baby",
  heroScript:    "Shaylaa.",
  heroEyebrow:   "— Happiest Birthday, My Shiela —",
  heroSubtitle:  "Ever since you, my days gradually became more brighter and warm",
  /* ── Music ── */
  musicTitle:    "Our Song",
  musicURL: "loveis.mp3",           // ← Replace with your mp3/audio URL

  /* ── Collage photos (54) ──
     Replace url: "" with your image paths e.g. "photos/img1.jpg"
     caption and rotation are optional to customize per photo.
  ── */
  photos: [
    { url: "1.jpg", caption: "us \u2665",        rotation: -4 },
    { url: "2.jpg", caption: "always",           rotation:  5 },
    { url: "3.jpg", caption: "my fav",           rotation: -2 },
    { url: "4.jpg", caption: "Swimming",          rotation:  7 },
    { url: "5.jpg", caption: "Family",         rotation: -6 },
    { url: "6.jpg", caption: "forever",          rotation:  3 },
    { url: "7.jpg", caption: "Cookies",      rotation: -5 },
    { url: "8.jpg", caption: "First Appeareance",          rotation:  4 },
    { url: "9.jpg", caption: "Battle of the Bands \u2665",     rotation: -3 },
    { url: "10.jpg", caption: "Fav pose",         rotation:  6 },
    { url: "11.jpg", caption: "HAHA",             rotation: -4 },
    { url: "12.jpg", caption: "Mio",         rotation:  2 },
    { url: "13.jpg", caption: "my whole heart",   rotation: -7 },
    { url: "14.jpg", caption: "Iron Lung Movie",         rotation:  5 },
    { url: "15.jpg", caption: "Solo yung School",         rotation: -3 },
    { url: "16.jpg", caption: "laspag",        rotation:  4 },
    { url: "17.jpg", caption: "L",      rotation: -5 },
    { url: "18.jpg", caption: "O",       rotation:  3 },
    { url: "19.jpg", caption: "V",          rotation: -2 },
    { url: "20.jpg", caption: "E",    rotation:  6 },
    { url: "21.jpg", caption: "Feb 14",       rotation: -4 },
    { url: "22.jpg", caption: "ganda mo po",  rotation:  3 },
    { url: "23.jpg", caption: "bleh",        rotation: -6 },
    { url: "24.jpg", caption: "First Moviee",      rotation:  5 },
    { url: "25.jpg", caption: "Remember asking me",    rotation: -3 },
    { url: "26.jpg", caption: "kung bagay sayun yung polo \u2665",  rotation:  4 },
    { url: "27.jpg", caption: "French Baker",        rotation: -5 },
    { url: "28.jpg", caption: "And our Dubai Chewy Choc",        rotation:  2 },
    { url: "29.jpg", caption: "Love you po \u2665",     rotation: -4 },
    { url: "30.jpg", caption: "cherished",        rotation:  6 },
    { url: "31.jpg", caption: "Kabisado",          rotation: -3 },
    { url: "32.jpg", caption: "So prettyy",           rotation:  5 },
    { url: "33.jpg", caption: "Banana Breadd!",      rotation: -2 },
    { url: "34.jpg", caption: "I miss You",   rotation:  4 },
    { url: "35.jpg", caption: "Having you this close",       rotation: -6 },
    { url: "36.jpg", caption: "Taking care of you",          rotation:  3 },
    { url: "37.jpg", caption: "Nasarapan ka here",    rotation: -4 },
    { url: "38.jpg", caption: "Katakawan Natin",         rotation:  5 },
    { url: "39.jpg", caption: "di na ulit natin binili",         rotation: -3 },
    { url: "40.jpg", caption: "yummers",         rotation:  4 },
    { url: "41.jpg", caption: "I miss cooking for you",        rotation: -5 },
    { url: "42.jpg", caption: "The best with tayloy Swift",              rotation:  2 },
    { url: "43.jpg", caption: "Si Marian nag pic HAHA",    rotation: -4 },
    { url: "44.jpg", caption: "Im so down bad",           rotation:  6 },
    { url: "45.jpg", caption: "Nahiya pa e",       rotation: -3 },
    { url: "46.jpg", caption: "Naksss",             rotation:  5 },
    { url: "47.jpg", caption: "Happyyy yan sha",           rotation: -2 },
    { url: "48.jpg", caption: "Favv",          rotation:  4 },
    { url: "49.jpg", caption: "First dish to you po",       rotation: -6 },
    { url: "50.jpg", caption: "so ethereal",             rotation:  3 },
    { url: "51.jpg", caption: "cuteee",           rotation: -4 },
    { url: "52.jpg", caption: "Our rocks! tas isang tiles",           rotation:  5 },
   
  ],

  /* ── Videos (4) ──
     Replace url: "" with your video paths e.g. "videos/vid1.mp4"
  ── */
  videos: [
    { url: "v1.MOV", caption: "Your so fasttt \u2665" },
    { url: "v2.MOV", caption: "I love you babbyy"           },
    { url: "v3.MOV", caption: "Talo kaa"         },
    { url: "v4(1).MOV", caption: "How many takes?"            },
    { url: "v5.MOV", caption: "Passenger Prince?"            },
    { url: "v6.MOV", caption: "Before Defense \u2665" },
    { url: "v7.MOV", caption: "Healthy Living"           },
    { url: "v9.MOV", caption: "Allen yung humpss"            },
   
  ],

  /* ── Love Notes ── */
  loveNotes: [
    { icon: "🌸", text: "You make ordinary days feel magical.",   sub: "every single one" },
    { icon: "📱", text: "My favorite notification.",              sub: "always you" },
    { icon: "🏡", text: "My favorite place is next to you.",      sub: "home" },
    { icon: "☀️", text: "You're the reason I smile first thing.", sub: "every morning" },
    { icon: "🌙", text: "My last thought before I sleep.",        sub: "always" },
    { icon: "✨", text: "You make me feel like I'm enough.",      sub: "thank you" },
  ],

  /* ── Timeline ── */
  timeline: [
    { date: "Day 1",       title: "First Message",          desc: "Those nervous words that started everything." },
    { date: "Shortly after", title: "First Date",            desc: "Time stopped and I didn't want it back." },
    { date: "A memory",    title: "First Picture Together", desc: "I still look at it when I need to smile." },
    { date: "An adventure", title: "Our First Adventure",  desc: "The world felt bigger and better with you." },
    { date: "Right now",   title: "Today",                  desc: "Still the best chapter I've ever lived." },
  ],

  /* ── Reasons I Love You ── */
  reasons: [
    { icon: "😊", title: "Your Smile",    desc: "It lights up every room and every corner of my heart." },
    { icon: "💛", title: "Your Kindness", desc: "The gentle way you care for every living thing." },
    { icon: "😂", title: "Your Laugh",    desc: "The most beautiful sound I know." },
    { icon: "❤️", title: "Your Heart",    desc: "Bigger and warmer than you'll ever believe." },
    { icon: "🌟", title: "Being You",     desc: "Every bit of you — the whole magnificent you." },
  ],

  /* ── Memory Wall ──
     type: "photo" | "quote" | "note"
  ── */
  memories: [
    { type: "photo",  url: "k.jpg", caption: "Happy Birthdayy \u2665",  rotation: -3 },
    { type: "quote",  text: '\u201cI love you po even on the hard days.\u201d', attr: "— always" },
    { type: "note",   text: "I want to live my whole existence beside you po" },
    { type: "photo",  url: "s.jpg", caption: "Sammyy",          rotation:  4 },
    { type: "quote",  text: '\u201cAmidst all the fireworks, arts, and literature. I would still only stare and Admire you\u201d', attr: "— Sammy" },
    { type: "photo",  url: "k1.jpg", caption: "Fireworkss",    rotation: -5 },
    { type: "note",   text: "I fell in love with you harder when you mention your insecurities, I found them genuinely beautiful" },
    { type: "quote",  text: '\u201cThank you for choosing me amidst my imperfections Shiela\u201d', attr: "— Sammy" },
    { type: "photo",  url: "s1.jpg", caption: "Mwuaaa \u2665",              rotation:  2 },
  ],

  /* ── Love Letter ── */
  letterParagraphs: [
    "Today is your birthday! Happy birthday po my baby Shielaa, you are now Twenteen! I am so proud of you po, proud of our small wins and improvement to our relationship and to your accomplishments po that you have achieved and will achieve in the future.",
    "Now that I have you by my side, let's work together and grow our relationship and our individual selves. I love you and I love writing and expressing myself through letters such as this that I have written.",
    "I love you more than my literary skill can write. I will love you more on your bad days, and I love you the most when you are laughing and having fun with me. May our journey be guided by God and may our choices ultimately lead to his plans.",
    "I will always without fail and hesitation choose you on every version of you. I love you in every universe, in every shape and in every form. I fell for you harder every time you mention your small insecurities because I found them genuinely beautiful.",
    "I love you so much, in every timeline and in every life. I hope that our souls will be entangled the same way that it is now.",
  ],
  letterSignatureLabel: "Yours, completely and always,",
  letterSignatureName:  "your baby boy ♡",

  /* ── Final Section ── */
  finalHeadline: "Out of all the people\nin the whole world,",
  finalSubline:  "I'm grateful to have been picked by you.\nI Love you.",
  sigFrom:       "With all my hypothalamus,",
  sigName:       "— Sammy ♡",
};

/* ═══════════════════════════════════════════════════════════════
   LOADING SCREEN
════════════════════════════════════════════════════════════════ */
function dismissLoader() {
  const loader = document.getElementById('loading-screen');
  if (!loader) return;
  loader.style.transition = 'none';
  loader.style.opacity = '0';
  loader.style.visibility = 'hidden';
  loader.style.pointerEvents = 'none';
  loader.style.display = 'none';
}

// Always dismiss loader first, then try to init everything
setTimeout(() => {
  dismissLoader();
  try { initAll(); } catch(e) { console.error('initAll error:', e); }
}, 800);

// Absolute last-resort fallback
setTimeout(dismissLoader, 2000);

function initAll() {
  try { applyConfig(); }       catch(e) { console.warn('applyConfig:', e); }
  try { buildCollage(); }      catch(e) { console.warn('buildCollage:', e); }
  try { buildVideos(); }       catch(e) { console.warn('buildVideos:', e); }
  try { buildNotes(); }        catch(e) { console.warn('buildNotes:', e); }
  try { buildTimeline(); }     catch(e) { console.warn('buildTimeline:', e); }
  try { buildReasons(); }      catch(e) { console.warn('buildReasons:', e); }
  try { buildMemoryWall(); }   catch(e) { console.warn('buildMemoryWall:', e); }
  try { buildLetter(); }       catch(e) { console.warn('buildLetter:', e); }
  try { buildFinalSection(); } catch(e) { console.warn('buildFinalSection:', e); }
  try { initRevealObserver(); }catch(e) { console.warn('initRevealObserver:', e); }
  try { initCursor(); }        catch(e) { console.warn('initCursor:', e); }
  try { initPetals(); }        catch(e) { console.warn('initPetals:', e); }
  try { initMusicPlayer(); }   catch(e) { console.warn('initMusicPlayer:', e); }
  try { initHoverHearts(); }   catch(e) { console.warn('initHoverHearts:', e); }
  try { initFinalHearts(); }   catch(e) { console.warn('initFinalHearts:', e); }
  try { initTiltEffect(); }    catch(e) { console.warn('initTiltEffect:', e); }
  try { initParallax(); }      catch(e) { console.warn('initParallax:', e); }
}


/* ═══════════════════════════════════════════════════════════════
   APPLY CONFIG TO STATIC ELEMENTS
════════════════════════════════════════════════════════════════ */
function applyConfig() {
  setText('hero-eyebrow',     CONFIG.heroEyebrow);
  setText('hero-title-big',   CONFIG.heroBig);
  setText('hero-title-script',CONFIG.heroScript);
  setText('hero-subtitle',    CONFIG.heroSubtitle);
  setText('music-title',      CONFIG.musicTitle);
  setText('final-headline',   CONFIG.finalHeadline.replace(/\n/g,'<br>'), true);
  setText('final-subline',    CONFIG.finalSubline.replace(/\n/g,'<br>'), true);
  setText('sig-from',         CONFIG.sigFrom);
  setText('sig-name-from',    CONFIG.sigName);

  const audioEl = document.getElementById('audio-player');
  if (CONFIG.musicURL) {
    audioEl.querySelector('source').src = CONFIG.musicURL;
    audioEl.load();
  }
}

function setText(id, val, html = false) {
  const el = document.getElementById(id);
  if (!el) return;
  if (html) el.innerHTML = val;
  else el.textContent = val;
}


/* ═══════════════════════════════════════════════════════════════
   BUILD SECTIONS FROM CONFIG
════════════════════════════════════════════════════════════════ */

/* ── Collage ── */
function buildCollage() {
  const grid = document.getElementById('collage-grid');
  if (!grid) return;
  grid.innerHTML = '';

  CONFIG.photos.forEach((photo, i) => {
    const wrap = document.createElement('div');
    wrap.className = 'collage-item reveal-up';
    wrap.style.transitionDelay = `${i * 0.08}s`;

    const pol = document.createElement('div');
    pol.className = 'polaroid';
    pol.style.transform = `rotate(${photo.rotation || 0}deg)`;
    pol.setAttribute('data-tilt', '');

    const img = document.createElement('div');
    img.className = 'polaroid-img';

    if (photo.url) {
      const imgEl = document.createElement('img');
      imgEl.src = photo.url;
      imgEl.alt = photo.caption || '';
      imgEl.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
      img.appendChild(imgEl);
    } else {
      img.classList.add('placeholder-img', `ph-${(i % 8) + 1}`);
    }

    const cap = document.createElement('p');
    cap.className = 'polaroid-caption';
    cap.textContent = photo.caption || '';

    pol.appendChild(img);
    pol.appendChild(cap);
    wrap.appendChild(pol);
    grid.appendChild(wrap);
  });
}

/* ── Videos ── */
function buildVideos() {
  const grid = document.getElementById('video-grid');
  if (!grid) return;
  grid.innerHTML = '';

  CONFIG.videos.forEach((vid, i) => {
    const card = document.createElement('div');
    card.className = 'video-card reveal-up';
    card.style.transitionDelay = `${i * 0.1}s`;

    if (vid.url) {
      const video = document.createElement('video');
      video.src = vid.url;
      video.controls = true;
      video.preload = 'metadata';
      video.playsInline = true;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      if (i === 3) {
  video.style.objectPosition = '50% 35%';  // x% y% — lower the second number to go higher
}
if (i === 1) {
  video.style.objectPosition = '50% 35%';  // x% y% — lower the second number to go higher
}
      card.appendChild(video);
    } else {
      const ph = document.createElement('div');
      ph.className = 'video-placeholder';
      ph.textContent = '▶';
      card.appendChild(ph);
    }

    const cap = document.createElement('p');
    cap.className = 'video-caption';
    cap.textContent = vid.caption || '';
    card.appendChild(cap);

    grid.appendChild(card);
  });
}

/* ── Notes ── */
function buildNotes() {
  const grid = document.getElementById('notes-grid');
  if (!grid) return;
  grid.innerHTML = '';

  CONFIG.loveNotes.forEach((note, i) => {
    const card = document.createElement('div');
    card.className = 'note-card reveal-up';
    card.style.transitionDelay = `${i * 0.07}s`;

    card.innerHTML = `
      <span class="note-icon">${note.icon || '♡'}</span>
      <p class="note-text">${escHTML(note.text)}</p>
      ${note.sub ? `<p class="note-sub">${escHTML(note.sub)}</p>` : ''}
    `;
    grid.appendChild(card);
  });
}

/* ── Timeline ── */
function buildTimeline() {
  const container = document.getElementById('timeline-items');
  if (!container) return;
  container.innerHTML = '';

  CONFIG.timeline.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'timeline-item';

    const content = document.createElement('div');
    content.className = 'timeline-content';
    content.innerHTML = `
      <p class="timeline-date">${escHTML(item.date)}</p>
      <p class="timeline-event-title">${escHTML(item.title)}</p>
      <p class="timeline-event-desc">${escHTML(item.desc)}</p>
    `;

    const dot = document.createElement('div');
    dot.className = 'timeline-dot';

    const empty = document.createElement('div');
    empty.className = 'timeline-empty';

    row.appendChild(content);
    row.appendChild(dot);
    row.appendChild(empty);
    container.appendChild(row);
  });
}

/* ── Reasons ── */
function buildReasons() {
  const grid = document.getElementById('reasons-grid');
  if (!grid) return;
  grid.innerHTML = '';

  CONFIG.reasons.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'reason-card reveal-up';
    card.style.transitionDelay = `${i * 0.1}s`;

    card.innerHTML = `
      <span class="reason-icon">${r.icon || '♡'}</span>
      <p class="reason-title">${escHTML(r.title)}</p>
      <p class="reason-desc">${escHTML(r.desc)}</p>
    `;
    grid.appendChild(card);
  });
}

/* ── Memory Wall ── */
function buildMemoryWall() {
  const grid = document.getElementById('masonry-grid');
  if (!grid) return;
  grid.innerHTML = '';

  CONFIG.memories.forEach((mem, i) => {
    const card = document.createElement('div');
    card.className = `memory-card type-${mem.type} reveal-up`;
    card.style.transitionDelay = `${i * 0.06}s`;

    if (mem.type === 'photo') {
      const pol = document.createElement('div');
      pol.className = 'polaroid';
      pol.style.transform = `rotate(${mem.rotation || 0}deg)`;

      const img = document.createElement('div');
      img.className = 'polaroid-img';
      if (mem.url) {
        const imgEl = document.createElement('img');
        imgEl.src = mem.url;
        imgEl.alt = mem.caption || '';
        imgEl.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
        img.appendChild(imgEl);
      } else {
        img.classList.add('placeholder-img', `ph-${(i % 8) + 1}`);
      }

      const cap = document.createElement('p');
      cap.className = 'polaroid-caption';
      cap.textContent = mem.caption || '';

      pol.appendChild(img);
      pol.appendChild(cap);
      card.appendChild(pol);

    } else if (mem.type === 'quote') {
      card.innerHTML = `
        <p class="memory-quote-text">${escHTML(mem.text)}</p>
        ${mem.attr ? `<p class="memory-quote-attr">${escHTML(mem.attr)}</p>` : ''}
      `;
    } else if (mem.type === 'note') {
      card.innerHTML = `<p class="memory-note-text">${escHTML(mem.text)}</p>`;
    }

    grid.appendChild(card);
  });
}

/* ── Love Letter ── */
function buildLetter() {
  const body = document.getElementById('letter-body');
  const sig  = document.getElementById('letter-sig');
  if (!body || !sig) return;

  body.innerHTML = CONFIG.letterParagraphs
    .map(p => `<p>${escHTML(p)}</p>`)
    .join('');

  sig.innerHTML = `
    <p class="letter-sig-label">${escHTML(CONFIG.letterSignatureLabel)}</p>
    <p class="letter-sig-name">${escHTML(CONFIG.letterSignatureName)}</p>
  `;
}

/* ── Final Section ── */
function buildFinalSection() {
  // Already applied via applyConfig
}


/* ═══════════════════════════════════════════════════════════════
   SCROLL REVEAL OBSERVER
════════════════════════════════════════════════════════════════ */
function initRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal-up, .timeline-item').forEach(el => {
    observer.observe(el);
  });
}


/* ═══════════════════════════════════════════════════════════════
   CUSTOM CURSOR
════════════════════════════════════════════════════════════════ */
function initCursor() {
  const cursor    = document.getElementById('cursor');
  const cursorDot = document.getElementById('cursor-dot');
  if (!cursor || !cursorDot) return;

  let mx = 0, my = 0;
  let cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursorDot.style.left = mx + 'px';
    cursorDot.style.top  = my + 'px';
  });

  function lerp(a, b, t) { return a + (b - a) * t; }

  function animateCursor() {
    cx = lerp(cx, mx, 0.12);
    cy = lerp(cy, my, 0.12);
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Cursor expand on interactive elements
  document.querySelectorAll('a, button, .polaroid, .note-card, .reason-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width  = '52px';
      cursor.style.height = '52px';
      cursor.style.borderColor = 'var(--olive)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width  = '36px';
      cursor.style.height = '36px';
      cursor.style.borderColor = 'var(--pink)';
    });
  });
}


/* ═══════════════════════════════════════════════════════════════
   FALLING PETALS
════════════════════════════════════════════════════════════════ */
function initPetals() {
  const canvas = document.getElementById('petal-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const petals = [];
  const PETAL_COUNT = 22;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COLORS = [
    'rgba(232,163,177,0.55)',
    'rgba(248,243,234,0.6)',
    'rgba(107,122,79,0.35)',
    'rgba(232,163,177,0.3)',
    'rgba(233,223,201,0.55)',
  ];

  class Petal {
    constructor() { this.reset(true); }

    reset(initial = false) {
      this.x    = Math.random() * canvas.width;
      this.y    = initial ? Math.random() * canvas.height : -20;
      this.size = 5 + Math.random() * 7;
      this.vx   = (Math.random() - 0.5) * 0.6;
      this.vy   = 0.4 + Math.random() * 0.8;
      this.rot  = Math.random() * Math.PI * 2;
      this.rvel = (Math.random() - 0.5) * 0.04;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.alpha = 0.3 + Math.random() * 0.5;
      this.sway  = Math.random() * Math.PI * 2;
      this.swayAmt = 0.3 + Math.random() * 0.5;
      this.swaySpd = 0.01 + Math.random() * 0.02;
    }

    update() {
      this.sway += this.swaySpd;
      this.x   += this.vx + Math.sin(this.sway) * this.swayAmt;
      this.y   += this.vy;
      this.rot += this.rvel;
      if (this.y > canvas.height + 30) this.reset();
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      // Simple petal shape
      ctx.ellipse(0, 0, this.size * 0.6, this.size, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < PETAL_COUNT; i++) {
    petals.push(new Petal());
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    petals.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();

  // Speed up on scroll
  window.addEventListener('scroll', () => {
    petals.forEach(p => { p.vy = 1.2 + Math.random() * 1.5; });
    setTimeout(() => { petals.forEach(p => { p.vy = 0.4 + Math.random() * 0.8; }); }, 600);
  });
}


/* ═══════════════════════════════════════════════════════════════
   MUSIC PLAYER
════════════════════════════════════════════════════════════════ */
function initMusicPlayer() {
  const btn      = document.getElementById('music-btn');
  const player   = document.getElementById('music-player');
  const closeBtn = document.getElementById('music-close');
  const playBtn  = document.getElementById('play-pause-btn');
  const audio    = document.getElementById('audio-player');
  const barFill  = document.getElementById('music-bar-fill');
  const timeEl   = document.getElementById('music-time');

  if (!btn || !player) return;

  const playlist = ["loveis.mp3", "pretty.mp3", "anything.mp3", "bewithyou.mp3"];
  let currentTrack = 0;

  function loadTrack(idx) {
    currentTrack = idx;
    audio.src = playlist[idx];
    audio.play().catch(() => {});
    playBtn.textContent = '⏸';
    document.getElementById('music-title').textContent = playlist[idx].replace('.mp3', '');
    document.querySelectorAll('.playlist-item').forEach((item, i) => {
      item.classList.toggle('active', i === idx);
    });
  }

  // Toggle open
  btn.addEventListener('click', e => {
    if (e.target === closeBtn || closeBtn.contains(e.target)) return;
    if (!e.target.classList.contains('play-pause') && !e.target.classList.contains('playlist-item')) {
      player.classList.toggle('open');
    }
  });

  closeBtn.addEventListener('click', e => {
    e.stopPropagation();
    player.classList.remove('open');
  });

  // Play / pause
  playBtn.addEventListener('click', e => {
    e.stopPropagation();
    if (audio.paused) {
      audio.play().catch(() => {});
      playBtn.textContent = '⏸';
    } else {
      audio.pause();
      playBtn.textContent = '▶';
    }
  });

  audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    barFill.style.width = pct + '%';
    timeEl.textContent = formatTime(audio.currentTime);
  });

  audio.addEventListener('ended', () => {
    loadTrack((currentTrack + 1) % playlist.length);
  });

  // Playlist item clicks
  document.querySelectorAll('.playlist-item').forEach((item, idx) => {
    item.addEventListener('click', e => {
      e.stopPropagation();
      loadTrack(idx);
    });
  });

  // Autoplay on first interaction
  window.addEventListener('click', function startAudio() {
    loadTrack(0);
    window.removeEventListener('click', startAudio);
  }, { once: true });

  audio.addEventListener('play', () => {
    document.querySelector('.music-icon').style.animation = 'music-pulse 1.4s ease-in-out infinite';
  });
  audio.addEventListener('pause', () => {
    document.querySelector('.music-icon').style.animation = '';
  });
}

function formatTime(s) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
}


/* ═══════════════════════════════════════════════════════════════
   HOVER HEART BURSTS
════════════════════════════════════════════════════════════════ */
function initHoverHearts() {
  const targets = document.querySelectorAll('.reason-card, .note-card, .final-heart');

  targets.forEach(el => {
    el.addEventListener('mouseenter', e => {
      spawnHeart(e.clientX, e.clientY);
    });
    el.addEventListener('click', e => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          spawnHeart(
            e.clientX + (Math.random() - 0.5) * 40,
            e.clientY + (Math.random() - 0.5) * 40
          );
        }, i * 80);
      }
    });
  });
}

function spawnHeart(x, y) {
  const h = document.createElement('div');
  h.className = 'heart-burst';
  h.textContent = ['♥','♡','❤','💕','💗'][Math.floor(Math.random() * 5)];
  h.style.left = x + 'px';
  h.style.top  = y + 'px';
  h.style.color = Math.random() > 0.5 ? 'var(--pink)' : 'var(--olive)';
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 1000);
}


/* ═══════════════════════════════════════════════════════════════
   FINAL SECTION — FLOATING HEARTS LOOP
════════════════════════════════════════════════════════════════ */
function initFinalHearts() {
  const container = document.getElementById('final-hearts');
  if (!container) return;

  function spawnFinalHeart() {
    const h = document.createElement('div');
    h.className = 'floating-heart';
    h.textContent = ['♥','♡','❤','❧'][Math.floor(Math.random() * 4)];
    h.style.left   = (5 + Math.random() * 90) + '%';
    h.style.bottom = '0';
    h.style.animationDuration = (6 + Math.random() * 6) + 's';
    h.style.animationDelay    = (Math.random() * 3) + 's';
    h.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
    h.style.color = Math.random() > 0.5 ? 'var(--pink-light)' : 'rgba(107,122,79,0.3)';
    container.appendChild(h);
    setTimeout(() => h.remove(), 12000);
  }

  // Check if final section is visible before spawning
  const finalObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const iv = setInterval(spawnFinalHeart, 800);
        setTimeout(() => clearInterval(iv), 30000);
        finalObs.disconnect();
      }
    });
  }, { threshold: 0.3 });

  const finalSec = document.getElementById('final');
  if (finalSec) finalObs.observe(finalSec);
}


/* ═══════════════════════════════════════════════════════════════
   3D TILT EFFECT ON POLAROIDS
════════════════════════════════════════════════════════════════ */
function initTiltEffect() {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect   = card.getBoundingClientRect();
      const cx     = rect.left + rect.width  / 2;
      const cy     = rect.top  + rect.height / 2;
      const dx     = (e.clientX - cx) / (rect.width  / 2);
      const dy     = (e.clientY - cy) / (rect.height / 2);
      const tiltX  = dy * -8;
      const tiltY  = dx *  8;
      card.style.transform = `perspective(600px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      const baseRot = card.dataset.baseRot || '0';
      card.style.transform = `rotate(${baseRot}deg)`;
      card.style.transition = 'transform 0.5s cubic-bezier(0.22,1,0.36,1)';
    });
  });

  // Store base rotations
  document.querySelectorAll('.polaroid[style*="rotate"]').forEach(p => {
    const match = p.style.transform.match(/rotate\(([^)]+)\)/);
    if (match) p.dataset.baseRot = match[1].replace('deg','');
  });
}


/* ═══════════════════════════════════════════════════════════════
   GENTLE PARALLAX
════════════════════════════════════════════════════════════════ */
function initParallax() {
  const floaters = document.querySelectorAll('.hero-deco, .hero-flower, .collage-deco-text');

  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    floaters.forEach((el, i) => {
      const speed = 0.04 + (i % 4) * 0.02;
      el.style.transform = `translateY(${sy * speed}px)`;
    });
  }, { passive: true });
}


/* ═══════════════════════════════════════════════════════════════
   UTILITY
════════════════════════════════════════════════════════════════ */
function escHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}
