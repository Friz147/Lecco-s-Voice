/* LECCO'S VOICE — script.js
   ASSETS · CONFIG · I18N · CATEGORIES · PLACES · MapEngine
   UI/RENDER · OVERLAYS · EVENTS · INIT */

/* ---------- 0. ASSETS ---------- */
const ASSETS = {
  mappa: "images/mappafinal1.png",
  icons: {
    carrot:    "images/icons/carrot.png",
    cow:       "images/icons/cow.png",
    fish:      "images/icons/fish.png",
    croissant: "images/icons/croissant.png",
    cutlery:   "images/icons/posateIcon.png"
  },
  logo:   "images/icons/Logo.png",
  hero:   "images/SfondoHero.png",
  photo1: "images/photo1.png",
  photo2: "images/photo2.png"
};

/* ---------- 1. CONFIG ---------- */
const CONFIG = {
  LECCO:      { lat: 45.8566, lng: 9.3965 },
  BOUNDS:     { north: 45.89989, south: 45.83559, west: 9.35981, east: 9.44159 },
  IMG_ASPECT: 475 / 556,
  ZOOM_MIN:   1,
  ZOOM_MAX:   2.6,
  ZOOM_STEP:  0.45
};

/* ---------- 2. I18N ---------- */
const I18N = {
  it: {
    'nav.map':'Map', 'nav.info':'Info',
    'hero.sub':'Un progetto che porta i produttori locali e tutti i piatti tipici della provincia di Lecco da te',
    'map.question':'Cosa vuoi mangiare oggi?',
    'trust.title':'Ci affidiamo solo a produttori locali.',
    'trust.text':'Per garantire la qualità del tuo viaggio gastronomico nelle terre lecchesi.',
    'trust.cta':'Scopri di più',
    'info.title':'Chi siamo',
    'info.p1':'Siamo studenti di Interaction Design del Politecnico di Milano e abbiamo sviluppato questo progetto per il corso di Sustainable Interaction Design Studio.',
    'info.p2':'Questo progetto mira a promuovere consapevolezza sull\u2019identità gastronomica della provincia di Lecco.',
    'contact.title':'Contattaci',
    'contact.sub':'Hai una domanda o una proposta? Scrivici, ti risponderemo al più presto.',
    'contact.name':'Il tuo nome','contact.namePh':'es. Marco da Milano',
    'contact.email':'Email','contact.emailPh':'la-tua@email.it',
    'contact.msg':'Messaggio','contact.msgPh':'Scrivi qui il tuo messaggio...',
    'contact.send':'Invia il messaggio',
    'add.title':'La tua voce conta',
    'add.sub':'Hai scoperto un produttore locale non ancora presente sulla mappa? Aiutaci a rendere la tua esperienza e quella degli altri più autentica.',
    'add.name':'Nome del posto','add.namePh':'es. Trattoria da Mario',
    'add.cat':'Categoria',
    'add.addr':'Indirizzo','add.addrPh':'es. Via Vittorio Veneto, 36',
    'add.photo':'Foto (opzionale)','add.photoCta':'Carica una foto del posto',
    'add.send':'Consiglia questo posto',
    'rev.title':'La tua voce conta',
    'rev.sub':'Hai visitato un ristorante o scoperto un produttore locale? Condividi la tua esperienza con i prossimi visitatori di Lecco.',
    'rev.name':'Il tuo nome','rev.namePh':'es. Marco da Milano',
    'rev.rating':'Valutazione',
    'rev.liked':'Cosa ti è piaciuto','rev.likedPh':'Il punto di forza del posto, la cosa che ti ha colpito positivamente...',
    'rev.improve':'Cosa miglioreresti','rev.improvePh':'Un consiglio costruttivo, qualcosa che potrebbe essere migliorato...',
    'rev.owner':'Nota privata per il titolare (opzionale)','rev.ownerPh':'Solo il titolare potrà leggere questo messaggio...',
    'rev.ownerNote':'Nota privata inviata al titolare',
    'rev.photo':'Foto (opzionale)','rev.photoCta':'Carica una foto del posto',
    'rev.send':'Pubblica la tua recensione',
    'iw.address':'Indirizzo','iw.hours':'Orari','iw.community':'Ricordi della community',
    'iw.addComment':'Aggiungi un commento','iw.addedAgo':'Aggiunto {n} giorni fa','iw.daysAgo':'{n} giorni fa',
    'toast.added':'Grazie! Il posto è stato inviato per la revisione.',
    'toast.review':'Grazie! La tua recensione è stata pubblicata.',
    'toast.comment':'Commento aggiunto!',
    'toast.contact':'Messaggio inviato! Ti risponderemo presto.',
    'cat.agricoltori':'Agricoltori','cat.macellai':'Macellai','cat.pescivendoli':'Pescivendoli',
    'cat.panifici':'Panifici','cat.ristoratori':'Ristoratori'
  },
  en: {
    'nav.map':'Map', 'nav.info':'Info',
    'hero.sub':'A project that brings local producers and all the traditional dishes of the Lecco province to you',
    'map.question':'What do you want to eat today?',
    'trust.title':'We only rely on local producers.',
    'trust.text':'To guarantee the quality of your gastronomic journey through the Lecco lands.',
    'trust.cta':'Find out more',
    'info.title':'About us',
    'info.p1':'We are Interaction Design students at Politecnico di Milano and we developed this project for the Sustainable Interaction Design Studio course.',
    'info.p2':'This project aims to raise awareness about the gastronomic identity of the Lecco province.',
    'contact.title':'Contact us',
    'contact.sub':'Got a question or a proposal? Write to us, we\u2019ll reply as soon as possible.',
    'contact.name':'Your name','contact.namePh':'e.g. Marco from Milan',
    'contact.email':'Email','contact.emailPh':'your@email.com',
    'contact.msg':'Message','contact.msgPh':'Write your message here...',
    'contact.send':'Send message',
    'add.title':'Your voice matters',
    'add.sub':'Did you discover a local producer not yet on the map? Help us make your experience and everyone else\u2019s more authentic.',
    'add.name':'Place name','add.namePh':'e.g. Trattoria da Mario',
    'add.cat':'Category',
    'add.addr':'Address','add.addrPh':'e.g. Via Vittorio Veneto, 36',
    'add.photo':'Photo (optional)','add.photoCta':'Upload a photo of the place',
    'add.send':'Recommend this place',
    'rev.title':'Your voice matters',
    'rev.sub':'Have you visited a restaurant or discovered a local producer? Share your experience with the next visitors of Lecco.',
    'rev.name':'Your name','rev.namePh':'e.g. Marco from Milan',
    'rev.rating':'Rating',
    'rev.liked':'What you liked','rev.likedPh':'The strong point of the place, what struck you positively...',
    'rev.improve':'What you would improve','rev.improvePh':'A constructive tip, something that could be improved...',
    'rev.owner':'Private note for the owner (optional)','rev.ownerPh':'Only the owner will be able to read this message...',
    'rev.ownerNote':'Private note sent to the owner',
    'rev.photo':'Photo (optional)','rev.photoCta':'Upload a photo of the place',
    'rev.send':'Publish your review',
    'iw.address':'Address','iw.hours':'Hours','iw.community':'Community memories',
    'iw.addComment':'Add a comment','iw.addedAgo':'Added {n} days ago','iw.daysAgo':'{n} days ago',
    'toast.added':'Thanks! The place has been submitted for review.',
    'toast.review':'Thanks! Your review has been published.',
    'toast.comment':'Comment added!',
    'toast.contact':'Message sent! We\u2019ll get back to you soon.',
    'cat.agricoltori':'Farmers','cat.macellai':'Butchers','cat.pescivendoli':'Fishmongers',
    'cat.panifici':'Bakeries','cat.ristoratori':'Restaurants'
  }
};
let LANG = 'it';
const t = (key, vars) => {
  let s = I18N[LANG]?.[key] ?? key;
  if (vars) for (const k in vars) s = s.replaceAll('{'+k+'}', vars[k]);
  return s;
};

/* ---------- 3. CATEGORIES ---------- */
const catIcon = name => `<span class="cat-ic" style="--ic:url('${ASSETS.icons[name]}')"></span>`;
const CATEGORIES = {
  agricoltori:  { raw:'#2f6b3f', icon:'carrot'    },
  macellai:     { raw:'#6e3a26', icon:'cow'       },
  pescivendoli: { raw:'#3a7fc0', icon:'fish'      },
  panifici:     { raw:'#df8030', icon:'croissant' },
  ristoratori:  { raw:'#be3a2c', icon:'cutlery'   }
};
const CAT_ORDER = Object.keys(CATEGORIES);

/* ---------- 4. PLACES ---------- */
let PLACES = [
  {
    id:1, category:'ristoratori', name:'Herba Monstrum',
    lat:45.84559354410131, lng:9.394576437718067, image:null,
    description:{
      it:'La nostra esperienza nasce dall\u2019amore per le Birre, quelle con la B maiuscola e con la A di artigianali. Birre originali, vive, non pastorizzate. Birre in cui le materie prime sono trattate con cura e non sminuite dai processi della grande industria. Dopo circa 10 anni di homebrewing.',
      en:'Our experience is born from a love for Beers—those with a capital B and an A for Artigianali (Craft). Original, living, unpasteurized beers. Beers in which raw materials are treated with care and not diminished by large-scale industrial processes. This follows about 10 years of homebrewing.'},
    address:'Piazza San Michele, 35A',
    hours:{it:'Mar–Dom 11:00–23:00', en:'Tue–Sat 11:00–23:00'},
    addedAgo:5, rating:19,
    comments:[
      { author:'Jenny K.', ago:5,
        text:{
          it:{ pos:'',
               neg:'' },
          en:{ pos:'',
               neg:'' }
        }
      }
    ]
  },
  {
    id:2, category:'ristoratori', name:'Fillet Osteria',
    lat:45.860214174615024, lng:9.39786682607271, image:null,
    description:{it:'Nel cuore di Lecco, Filet è il luogo dove i sapori si trasformano in storie da raccontare. Dal bancone della salumeria ai tavoli della nostra osteria, ogni tua visita diventa un percorso coinvolgente attraverso profumi, consistenze e gusti.',
                 en:'In the heart of Lecco, Filet is where flavors transform into stories worth telling. From our deli counter to the tables of our osteria, every visit becomes an immersive journey through aromas, textures, and tastes.'},
    address:'Corso Giacomo Matteotti, 71, 23900 Lecco LC',
    hours:{it:'Mar-Dom 11:30–14:30 / 19:00–23:00', en:'Tue-Sat 11:30–14:30 / 19:00–23:00'},
    addedAgo:12, rating:8,
    comments:[
      { author:'Luca R.', ago:10,
        text:{
          it:{ pos:'',
               neg:'' },
          en:{ pos:'',
               neg:'' }
        }
      }
    ]
  },
  {
    id:3, category:'pescivendoli', name:'Da Ceko Il Pescatore',
    lat:45.84403722665931, lng:9.399037695388786, image:null,
    description:{it:'Cucina tradizionale lariana con vista sul lago: pesce di lago e piatti tipici.',
                 en:'Traditional Larian cuisine with a lake view: lake fish and typical dishes.'},
    address:'Piazza Era 8, 23900 Lecco (LC)',
    hours:{it:'Gio 10:30–22:30  Dom 10:30–14:30', en:'Thu 10:30–22:30 Sat 10:30–14:30'},
    addedAgo:3, rating:24,
    comments:[
      { author:'Sara M.', ago:3,
        text:{
          it:{ pos:'',
               neg:'' },
          en:{ pos:'',
               neg:'' }
        }
      }
    ]
  },
  {
    id:4, category:'ristoratori', name:'Taverna ai Poggi',
    lat:45.85966786273042, lng:9.411567354908135, image:null,
    description:{it:'ristorante e pizzeria con cucina italiana tradizionale e terrazza panoramica.',
                 en:'Traditional Italian restaurant and pizzeria with a panoramic terrace.'},
    address:'Via ai Poggi 14/20, 23900 Lecco (LC)',
    hours:{it:'Mar–Sab 8:00–12:30', en:'Tue–Sat 8:00–12:30'},
    addedAgo:8, rating:15,
    comments:[
      { author:'Giovanni P.', ago:7,
        text:{
          it:{ pos:'',
               neg:'' },
          en:{ pos:'',
               neg:'' }
        }
      }
    ]
  },
  {
    id:5, category:'agricoltori', name:'Il Fruttorto Di Fumagalli Marco E C. Snc',
    lat:45.85422732090137, lng:9.394485627920242, image:null,
    description:{it:'negozio di frutta e verdura con prodotti agricoli locali e stagionali.',
                 en:'Fruit and vegetable shop offering local and seasonal agricultural produce.'},
    address:'Via Marco d\u2019Oggiono 6, 23900 Lecco (LC)',
    hours:{it:'Lun–Sab 6:30–19:00', en:'Mon–Sat 6:30–19:00'},
    addedAgo:20, rating:11,
    comments:[
      { author:'Elena T.', ago:18,
        text:{
          it:{ pos:'',
               neg:'' },
          en:{ pos:'',
               neg:'' }
        }
      }
    ]
  },
  {
    id:6, category:'macellai', name:'Colombo Carni Di Colombo Walter',
    lat:45.85488627429565, lng:9.391058341414105, image:null,
    description:{it:'macelleria tradizionale specializzata in carni selezionate.',
                 en:'Traditional butcher shop specializing in selected high-quality meats.'},
    address:'Via Don Antonio Mascari 74, 23900 Lecco (LC)',
    hours:{it:'Lun–Sab 7:00–13:00 / 16:00–19:00', en:'Mon–Sat 7:00–13:00 / 16:00–19:00'},
    addedAgo:15, rating:6,
    comments:[
      { author:'Marco V.', ago:14,
        text:{
          it:{ pos:'',
               neg:'' },
          en:{ pos:'',
               neg:'' }
        }
      }
    ]
  },
  {
    id:7, category:'panifici', name:'Ronchetti Giovanni & C.(S.N.C.)',
    lat:45.81613836402201, lng:9.377249283209123, image:null,
    description:{it:'panificio e pasticceria artigianale storica di Galbiate.',
                 en:'Historic artisan bakery and pastry shop.'},
    address:'Piazza Alessandro Manzoni 11, 23851 Galbiate (LC)',
    hours:{it:'Mer e Sab 9:00–18:00', en:'Wed & Sat 9:00–18:00'},
    addedAgo:6, rating:13,
    comments:[
      { author:'Anna B.', ago:5,
        text:{
          it:{ pos:'',
               neg:'' },
          en:{ pos:'',
               neg:'' }
        }
      }
    ]
  },
  {
    id:8, category:'macellai', name:'Nuova LeccoLatte s.c.a.',
    lat:45.88556761246046, lng:9.418803373058465, image:null,
    description:{it:'latteria e shop di prodotti caseari locali, formaggi, yogurt e prodotti tipici.',
                 en:'Dairy shop selling local cheeses, yogurt, and regional dairy products.'},
    address:'Via Provinciale 83, 23868 Ballabio (LC)',
    hours:{it:'Lun–Mar 09:30–15:30 Mer-Dom 9:30–18:00', en:'Mon–Tue 09:30–15:30 Wed–Sun 9:30–18:00'},
    addedAgo:6, rating:13,
    comments:[
      { author:'Anna B.', ago:5,
        text:{
          it:{ pos:'Miglior formaggi della zona, freschi e saporiti.',
               neg:'Non aperto nel pomeriggio.' },
          en:{ pos:'Best cheeses in the area, fresh and tasty.',
               neg:'Not open in the afternoon' }
        }
      }
    ]
  }
];

/* ---------- helpers ---------- */
const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* ---------- 5. MapEngine ---------- */
const MapEngine = (() => {
  let pinClickCb = () => {};
  let activeFilter = new Set(CAT_ORDER);
  const pinLayer   = $('#pinLayer');
  const stage      = $('#mapStage');
  const frame      = $('#mapFrame');
  const mapOverlay = $('#mapOverlay');

  /* proietta lat/lng -> % sulla porzione visibile (compensa object-fit:cover) */
  function project(lat, lng){
    const b = CONFIG.BOUNDS;
    const imgX = (lng - b.west)  / (b.east - b.west);
    const imgY = (b.north - lat) / (b.north - b.south);
    const fw = frame.clientWidth  || 360;
    const fh = frame.clientHeight || 432;
    const frameAR = fw / fh;
    const imgAR   = CONFIG.IMG_ASPECT;
    let x, y;
    if (imgAR > frameAR) {
      const visFrac = frameAR / imgAR;
      const cropFrac = (1 - visFrac) / 2;
      x = (imgX - cropFrac) / visFrac;
      y = imgY;
    } else {
      const visFrac = imgAR / frameAR;
      const cropFrac = (1 - visFrac) / 2;
      x = imgX;
      y = (imgY - cropFrac) / visFrac;
    }
    return {
      x: Math.max(1, Math.min(99, x * 100)),
      y: Math.max(1, Math.min(99, y * 100))
    };
  }

  const pinSVG = cat => {
    const c = CATEGORIES[cat];
    return `<svg viewBox="0 0 34 44" xmlns="http://www.w3.org/2000/svg"><path d="M17 43C17 43 32 27 32 16A15 15 0 1 0 2 16C2 27 17 43 17 43Z" fill="${c.raw}"/><image href="${ASSETS.icons[c.icon]}" x="9" y="8" width="16" height="16"/></svg>`;
  };

  function buildPins(){
    pinLayer.innerHTML = '';
    PLACES.forEach(p => {
      const pos = project(p.lat, p.lng);
      const el = document.createElement('div');
      el.className = 'pin';
      el.style.left = pos.x + '%';
      el.style.top  = pos.y + '%';
      el.style.pointerEvents = 'auto';
      el.dataset.cat = p.category;
      el.dataset.id  = p.id;
      el.innerHTML = pinSVG(p.category);
      el.addEventListener('click', e => { e.stopPropagation(); pinClickCb(p); });
      pinLayer.appendChild(el);
    });
    applyFilterDOM();
    applyTransform();   // riapplica lo scale corrente ai pin appena creati
  }
  function applyFilterDOM(){
    pinLayer.querySelectorAll('.pin').forEach(el =>
      el.classList.toggle('dim', !activeFilter.has(el.dataset.cat)));
  }

  /* zoom + pan state */
  let scale = 1, panX = 0, panY = 0;
  let singleTouch = null;

  function clampPan(){
    const maxX = (scale - 1) * frame.clientWidth  / 2;
    const maxY = (scale - 1) * frame.clientHeight / 2;
    panX = Math.max(-maxX, Math.min(maxX, panX));
    panY = Math.max(-maxY, Math.min(maxY, panY));
  }

  function applyTransform(){
    clampPan();
    stage.style.transform = `translate(${panX}px,${panY}px) scale(${scale})`;
    mapOverlay.classList.toggle('pass-through', scale > 1);
    const ps = 1 / scale;
    pinLayer.querySelectorAll('.pin').forEach(el => {
      el.style.transform = `translate(-50%,-100%) scale(${ps})`;
    });
  }

  /* overlay click → forward to pin underneath (so pins stay tappable at scale=1) */
  mapOverlay.addEventListener('click', e => {
    mapOverlay.style.pointerEvents = 'none';
    const hit = document.elementFromPoint(e.clientX, e.clientY);
    mapOverlay.style.pointerEvents = '';
    hit?.closest('.pin')?.click();
  });

  function setZoom(next, cx, cy){
    const prev = scale;
    scale = Math.max(CONFIG.ZOOM_MIN, Math.min(CONFIG.ZOOM_MAX, next));
    if (scale === 1){ panX = 0; panY = 0; }
    else if (cx !== undefined){
      const r = scale / prev;
      panX = cx - r * (cx - panX);
      panY = cy - r * (cy - panY);
    }
    applyTransform();
  }

  /* pinch midpoint relative to frame center */
  function midpoint(a, b){
    const r = frame.getBoundingClientRect();
    return {
      x: (a.clientX + b.clientX) / 2 - r.left - frame.clientWidth  / 2,
      y: (a.clientY + b.clientY) / 2 - r.top  - frame.clientHeight / 2
    };
  }

  /* mouse drag (only when zoomed) */
  let drag = null;
  frame.addEventListener('pointerdown', e => {
    if (e.pointerType === 'touch' || scale <= 1) return;
    drag = { x:e.clientX, y:e.clientY, px:panX, py:panY };
    stage.classList.add('dragging');
  });
  window.addEventListener('pointermove', e => {
    if (!drag) return;
    panX = drag.px + (e.clientX - drag.x);
    panY = drag.py + (e.clientY - drag.y);
    applyTransform();
  });
  window.addEventListener('pointerup', () => {
    if (drag){ drag = null; stage.classList.remove('dragging'); }
  });

  /* touch: pinch zoom + 1-finger pan when zoomed */
  const touches = new Map();
  let pinchStart = null;

  frame.addEventListener('touchstart', e => {
    for (const t of e.changedTouches) touches.set(t.identifier, t);
    if (touches.size === 2){
      e.preventDefault();
      singleTouch = null;
      const [a,b] = [...touches.values()];
      const m = midpoint(a, b);
      pinchStart = {
        dist: Math.hypot(a.clientX-b.clientX, a.clientY-b.clientY),
        scale, cx: m.x, cy: m.y, px: panX, py: panY
      };
    } else if (touches.size === 1 && scale > 1){
      const [t0] = [...touches.values()];
      singleTouch = { x: t0.clientX, y: t0.clientY, px: panX, py: panY };
    }
  }, {passive:false});

  frame.addEventListener('touchmove', e => {
    for (const t of e.changedTouches) touches.set(t.identifier, t);
    if (pinchStart && touches.size >= 2){
      e.preventDefault();
      const [a,b] = [...touches.values()];
      const dist = Math.hypot(a.clientX-b.clientX, a.clientY-b.clientY);
      scale = Math.max(CONFIG.ZOOM_MIN, Math.min(CONFIG.ZOOM_MAX, pinchStart.scale * (dist / pinchStart.dist)));
      const m = midpoint(a, b);
      panX = pinchStart.px + (m.x - pinchStart.cx);
      panY = pinchStart.py + (m.y - pinchStart.cy);
      if (scale <= 1){ panX = 0; panY = 0; }
      applyTransform();
    } else if (singleTouch && touches.size === 1 && scale > 1){
      const [t0] = [...touches.values()];
      const dx = t0.clientX - singleTouch.x;
      const dy = t0.clientY - singleTouch.y;
      if (Math.hypot(dx, dy) > 6){
        e.preventDefault();
        panX = singleTouch.px + dx;
        panY = singleTouch.py + dy;
        stage.classList.add('dragging');
        applyTransform();
      }
    }
  }, {passive:false});

  function endTouch(e){
    for (const t of e.changedTouches) touches.delete(t.identifier);
    if (touches.size < 2) pinchStart = null;
    if (touches.size === 0){
      singleTouch = null;
      stage.classList.remove('dragging');
    }
  }
  frame.addEventListener('touchend', endTouch);
  frame.addEventListener('touchcancel', endTouch);

  /* mouse-wheel / trackpad-pinch zoom */
  frame.addEventListener('wheel', e => {
    e.preventDefault();
    const rect = frame.getBoundingClientRect();
    const cx = e.clientX - rect.left - rect.width  / 2;
    const cy = e.clientY - rect.top  - rect.height / 2;
    const factor = e.ctrlKey ? e.deltaY * -0.01 : e.deltaY * -0.005;
    setZoom(scale * (1 + factor), cx, cy);
  }, {passive:false});

  return {
    init(){ $('#mapImg').src = ASSETS.mappa; buildPins(); },
    onPinClick(cb){ pinClickCb = cb; },
    setFilter(catsSet){ activeFilter = catsSet; applyFilterDOM(); },
    refresh(){ buildPins(); },
    zoom(delta){ setZoom(scale + delta * CONFIG.ZOOM_STEP); }
  };
})();

/* ---------- 6. UI / RENDER ---------- */
function applyI18n(){
  $$('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
  $$('[data-i18n-ph]').forEach(el => el.placeholder = t(el.dataset.i18nPh));
  document.documentElement.lang = LANG;
  $$('#langToggle span[data-lang]').forEach(s =>
    s.classList.toggle('on', s.dataset.lang === LANG));
  renderRail(); renderLegend(); renderCatSelect();
}

function loadAssets(){
  $('#heroBg').style.backgroundImage = `url("${ASSETS.hero}")`;
  $$('.infoPhoto').forEach(img =>
    img.src = img.dataset.photo === '1' ? ASSETS.photo1 : ASSETS.photo2);
}

let FILTER = new Set(CAT_ORDER);   // tutte attive = nessun filtro
function renderRail(){
  const list = $('#railList');
  list.innerHTML = CAT_ORDER.map(cat =>
    `<button class="rail-btn ${FILTER.has(cat)?'on':''}" data-cat="${cat}" aria-label="${t('cat.'+cat)}">${catIcon(CATEGORIES[cat].icon)}</button>`
  ).join('');
  list.querySelectorAll('.rail-btn').forEach(btn => {
    btn.onclick = () => toggleFilter(btn.dataset.cat);
  });
}
function toggleFilter(cat){
  if (FILTER.size === CAT_ORDER.length)      FILTER = new Set([cat]);
  else if (FILTER.has(cat)){
    FILTER.delete(cat);
    if (FILTER.size === 0) FILTER = new Set(CAT_ORDER);
  } else FILTER.add(cat);
  renderRail();
  MapEngine.setFilter(FILTER);
}

function renderLegend(){
  $('#legend').innerHTML = CAT_ORDER.map(cat =>
    `<div class="legend-item"><span class="legend-ic" style="color:${CATEGORIES[cat].raw}">${catIcon(CATEGORIES[cat].icon)}</span><span>${t('cat.'+cat)}</span></div>`
  ).join('');
}

function renderCatSelect(){
  const sel = $('#apCat');
  const cur = sel.value;
  sel.innerHTML = CAT_ORDER.map(cat =>
    `<option value="${cat}">${t('cat.'+cat)}</option>`).join('');
  if (cur) sel.value = cur;
}

/* ---------- INFO WINDOW (sheet) ---------- */
let currentPlace = null;
function commentHTML(c){
  const ci  = c.author.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();
  const txt = c.text[LANG];
  const ownerBadge = c.ownerNote
    ? `<p class="c-owner-badge">${t('rev.ownerNote')}</p>`
    : '';
  return `<div class="comment"><div class="iw-av">${ci}</div><div class="c-body"><div class="c-head"><span class="c-name">${c.author}</span><span class="c-ago">${t('iw.daysAgo',{n:c.ago})}</span></div>${txt.pos ? `<p class="c-review c-pos"><span class="c-emoji">🙂</span> ${txt.pos}</p>` : ''}${txt.neg ? `<p class="c-review c-neg"><span class="c-emoji">😕</span> ${txt.neg}</p>` : ''}${ownerBadge}</div></div>`;
}

function openInfoWindow(place){
  currentPlace = place;
  const cat = CATEGORIES[place.category];
  const comments = place.comments.length
    ? place.comments.map(commentHTML).join('')
    : `<div class="iw-empty">—</div>`;
  const body = $('#infoBody');
  body.innerHTML = `<div class="iw-hero" style="background:${cat.raw}"><div class="iw-ic">${catIcon(cat.icon)}</div><span class="iw-badge">${t('cat.'+place.category)}</span></div><div class="iw-name">${place.name}</div><div class="iw-desc">${place.description[LANG]}</div><div class="iw-meta"><div class="iw-row"><span class="k">${t('iw.address')}:</span><span>${place.address}</span></div><div class="iw-row"><span class="k">${t('iw.hours')}:</span><span>${place.hours[LANG]}</span></div></div><div class="iw-attrib"><div class="ag">${t('iw.addedAgo',{n:place.addedAgo})}</div><div class="iw-rating">♥ ${place.rating}</div></div><div class="iw-section-t">${t('iw.community')}</div><div id="commentList">${comments}</div><div class="add-comment"><input type="text" id="quickComment" placeholder="${t('iw.addComment')}"><button id="quickCommentBtn" aria-label="add">+</button></div>`;
  body.style.background = 'var(--cream)';

  $('#quickCommentBtn').onclick = () => {
    const quick = $('#quickComment').value.trim();
    if (quick){
      place.comments.push({author: LANG==='it'?'Tu':'You', ago:0,
        text:{it:{pos:quick,neg:''},en:{pos:quick,neg:''}}});
      openInfoWindow(place);
      openSheet('sheetInfo');
      showToast(t('toast.comment'));
    } else openSheet('sheetReview');
  };
  $('#quickComment').addEventListener('keydown', e => {
    if (e.key === 'Enter') $('#quickCommentBtn').click();
  });

  openSheet('sheetInfo');
}

/* ---------- 7. OVERLAY / SHEET CONTROL ---------- */
const scrim = $('#scrim');
let openSheetId = null;
function openSheet(id){
  if (openSheetId && openSheetId !== id) $('#'+openSheetId).classList.remove('show');
  $('#'+id).classList.add('show');
  scrim.classList.add('show');
  openSheetId = id;
}
function closeSheet(){
  if (openSheetId) $('#'+openSheetId).classList.remove('show');
  scrim.classList.remove('show');
  openSheetId = null;
}
scrim.addEventListener('click', closeSheet);
$$('[data-close]').forEach(b => b.addEventListener('click', closeSheet));

let toastTimer = null;
function showToast(msg){
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

/* ---------- 8. EVENTS ---------- */
function gotoPage(page){
  $$('.nav button').forEach(b => b.classList.toggle('active', b.dataset.page === page));
  $$('.page').forEach(p => p.classList.remove('active'));
  $('#page-' + page).classList.add('active');
  $('#scroll').scrollTop = 0;
}
$$('.nav button').forEach(btn => btn.onclick = () => gotoPage(btn.dataset.page));
$('#trustCta')?.addEventListener('click', () => gotoPage('info'));

$('#langToggle').onclick = () => {
  LANG = (LANG === 'it') ? 'en' : 'it';
  applyI18n();
  if (currentPlace && openSheetId === 'sheetInfo') openInfoWindow(currentPlace);
};

$('#railAdd').onclick   = () => openSheet('sheetAdd');
$('#zoomIn').onclick    = () => MapEngine.zoom(1);
$('#zoomOut').onclick   = () => MapEngine.zoom(-1);
MapEngine.onPinClick(openInfoWindow);

/* star rating */
let rvRating = 0;
function renderStars(){
  $('#rvStars').innerHTML = [1,2,3,4,5].map(n =>
    `<button data-n="${n}" class="${n<=rvRating?'on':''}">★</button>`).join('');
  $$('#rvStars button').forEach(b => b.onclick = () => { rvRating = +b.dataset.n; renderStars(); });
}
renderStars();

/* submit: add place */
$('#apSend').onclick = () => {
  const name = $('#apName').value.trim();
  const cat  = $('#apCat').value;
  const addr = $('#apAddr').value.trim();
  if (!name || !addr){ showToast(LANG==='it'?'Compila nome e indirizzo':'Fill in name and address'); return; }
  PLACES.push({
    id: Date.now(), category: cat, name,
    lat: CONFIG.LECCO.lat + (Math.random()-.5)*0.012,
    lng: CONFIG.LECCO.lng + (Math.random()-.5)*0.018,
    image: null,
    description: {it:'Nuovo posto consigliato dalla community.', en:'New place recommended by the community.'},
    address: addr, hours:{it:'Da confermare',en:'To be confirmed'},
    addedAgo: 0, rating: 0, comments: []
  });
  MapEngine.refresh();
  MapEngine.setFilter(FILTER);
  $('#apName').value = ''; $('#apAddr').value = '';
  closeSheet();
  showToast(t('toast.added'));
};

/* submit: review */
$('#rvSend').onclick = () => {
  const name    = $('#rvName').value.trim() || (LANG==='it'?'Anonimo':'Anonymous');
  const liked   = $('#rvLiked').value.trim();
  const improve = $('#rvImprove').value.trim();
  const owner   = $('#rvOwner').value.trim();
  if (!liked && !improve){ showToast(LANG==='it'?'Scrivi una recensione':'Write a review'); return; }
  if (currentPlace){
    currentPlace.comments.push({
      author:name, ago:0,
      ownerNote: owner || null,  // stored but never shown in the public comment list
      text:{ it:{pos:liked,neg:improve}, en:{pos:liked,neg:improve} },
      
    });
    if (rvRating) currentPlace.rating += rvRating;
    openInfoWindow(currentPlace);
  }
  $('#rvName').value=''; $('#rvLiked').value=''; $('#rvImprove').value=''; $('#rvOwner').value=''; rvRating=0; renderStars();
  showToast(t('toast.review'));
};

/* submit: contact */
$('#ctSend').onclick = () => {
  const name  = $('#ctName').value.trim();
  const email = $('#ctEmail').value.trim();
  const msg   = $('#ctMsg').value.trim();
  if (!name || !email || !msg){ showToast(LANG==='it'?'Compila tutti i campi':'Fill in all fields'); return; }
  $('#ctName').value=''; $('#ctEmail').value=''; $('#ctMsg').value='';
  showToast(t('toast.contact'));
};

/* ---------- 9. INIT ---------- */
(function init(){
  loadAssets();
  applyI18n();
  MapEngine.init();
  MapEngine.setFilter(FILTER);

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => MapEngine.refresh(), 200);
  });
})();
