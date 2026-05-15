const ASSETS = {
  // Percorso della mappa di Lecco che hai appena creato
  mappa: "images/mappafinal1.png", 
  
  // Icone dei luoghi (se le hai salvate come file .png o .jpg)
  icons: {
    carrot: "images/icons/carrot.png",
    cow:    "images/icons/cow.png",
    fish:   "images/icons/fish.png",
    croissant: "images/icons/croissant.png",
    cutlery:   "images/icons/posateIcon.png"
  },
  
  // Logo e sfondo
  logo: "images/icons/Logo.png",
  hero: "images/SfondoHero.png",
  photo1: "images/photo1.png",
  photo2: "images/photo2.png",
};
// Create an image element
const img = new Image();
img.src = ASSETS.mappa;
document.body.appendChild(img);

// Or in HTML
const element = document.createElement('img');
element.src = ASSETS.mappa;
element.alt = 'Lecco Map';
document.body.appendChild(element);
/* ====================================================================
   1. CONFIG const CONFIG = {
  // ...
  BOUNDS: { 
    north: 45.89989, 
    south: 45.83559, 
    west: 9.35981, 
    east: 9.44159 
  },
  IMG_ASPECT: 475 / 556, // Rapporto 0.85 (Mappa verticale)
  // ...
   ==================================================================== */
const CONFIG = {
  LECCO: { lat: 45.8566, lng: 9.3965 },
  // bounding box della mappa grafica (provincia / area di Lecco):
  // serve a proiettare lat/lng dei luoghi sulla mappa illustrata.
  BOUNDS: { north:  45.89989, south: 45.83559, west: 9.35981, east: 9.44159 },
  IMG_ASPECT: 475 / 556,   // aspect ratio dell'immagine mappa (larghezza/altezza)
  ZOOM_MIN: 1, ZOOM_MAX: 2.6, ZOOM_STEP: 0.45
};

/* ====================================================================
   2. I18N — tutte le stringhe UI
   ==================================================================== */
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
  let s = (I18N[LANG] && I18N[LANG][key]) || key;
  if (vars) Object.keys(vars).forEach(k => s = s.replace('{'+k+'}', vars[k]));
  return s;
};

/* ====================================================================
   3. CATEGORIES — colori + icone SVG (carota, mucca, pesce, croissant, posate)
   ==================================================================== */
/* icone categoria — PNG forniti (bianchi su trasparente), in ASSETS.icons.
   catIcon(name) restituisce uno <span> ricolorabile (CSS mask). Per cambiare
   le icone basta sostituire i PNG in ASSETS.icons. */
function catIcon(name){
  return `<span class="cat-ic" style="--ic:url('${ASSETS.icons[name]}')"></span>`;
}
const CATEGORIES = {
  agricoltori:  { color:'var(--c-agricoltori)',  raw:'#2f6b3f', icon:'carrot'    },
  macellai:     { color:'var(--c-macellai)',     raw:'#6e3a26', icon:'cow'       },
  pescivendoli: { color:'var(--c-pescivendoli)', raw:'#3a7fc0', icon:'fish'      },
  panifici:     { color:'var(--c-panifici)',     raw:'#df8030', icon:'croissant' },
  ristoratori:  { color:'var(--c-ristoratori)',  raw:'#be3a2c', icon:'cutlery'   }
};
const CAT_ORDER = ['agricoltori','macellai','pescivendoli','panifici','ristoratori'];

/* ====================================================================
   4. PLACES — DATI  ← SOSTITUISCI con i tuoi dati o una fetch() al backend
   --------------------------------------------------------------------
   Struttura di un luogo:
   { id, category, name, lat, lng, image, description{it,en},
     address, hours{it,en}, addedAgo, rating,
     comments:[ { author, ago, text:{ it:{pos,neg}, en:{pos,neg} } } ] }
   ==================================================================== */
let PLACES = [
  {
    id:1, category:'ristoratori', name:'Herba Monstrum',
    lat:45.84559354410131, lng:9.394576437718067, image:null, /*45.84559354410131 9.394576437718067*/
    description:{
      it:'La nostra esperienza nasce dall\u2019amore per le Birre, quelle con la B maiuscola e con la A di artigianali. Birre originali, vive, non pastorizzate. Birre in cui le materie prime sono trattate con cura e non sminuite dai processi della grande industria. Dopo circa 10 anni di homebrewing.',
      en:'Our experience is born from a love for Beers—those with a capital B and an A for Artigianali (Craft). Original, living, unpasteurized beers. Beers in which raw materials are treated with care and not diminished by large-scale industrial processes. This follows about 10 years of homebrewing.'},
    address:'Piazza San Michele, 35A',
    hours:{it:'Mar–Dom 11:00–23:00', en:'Tue–Sat 11:00–23:00'},
    addedAgo:5, rating:19,
    comments:[
      { author:'Jenny K.', ago:5,
        text:{
          it:{ pos:'Molto vivace, ho trovato ogni tipo di prodotto locale. Freschissimo!',
               neg:'I venditori non parlavano inglese, ma ci siamo capiti lo stesso.' },
          en:{ pos:'Very bustling, I could find every kind of local product! So fresh!',
               neg:'The vendors didn\'t speak English, but we found a way to be understood.' }
        }
      }
    ]
  },
  {
    id:2, category:'ristoratori', name:'Fillet Osteria',
    lat:45.860214174615024, lng:9.39786682607271, image:null, /*45.860214174615024, 9.39786682607271*/
    description:{it:'Nel cuore di Lecco, Filet è il luogo dove i sapori si trasformano in storie da raccontare. Dal bancone della salumeria ai tavoli della nostra osteria, ogni tua visita diventa un percorso coinvolgente attraverso profumi, consistenze e gusti.',
                 en:'In the heart of Lecco, Filet is where flavors transform into stories worth telling. From our deli counter to the tables of our osteria, every visit becomes an immersive journey through aromas, textures, and tastes.'},
    address:'Corso Giacomo Matteotti, 71, 23900 Lecco LC',
    hours:{it:'Mar-Dom 11:30–14:30 / 19:00–23:00', en:'Tue-Sat 11:30–14:30 / 19:00–23:00'},
    addedAgo:12, rating:8,
    comments:[
      { author:'Luca R.', ago:10,
        text:{
          it:{ pos:'Carne eccellente, si sente la qualità. Il salame di capra è unico.',
               neg:'Prezzi un po\' alti rispetto alla media, ma la qualità giustifica.' },
          en:{ pos:'Excellent meat, you can taste the quality. The goat salami is unique.',
               neg:'Prices a bit higher than average, but quality justifies it.' }
        }
      }
    ]
  },
  {
    id:3, category:'pescivendoli', name:'Da Ceko Il Pescatore',
    lat:45.84403722665931, lng:9.399037695388786, image:null, /*45.84403722665931, 9.399037695388786*/
    description:{it:'Cucina tradizionale lariana con vista sul lago: pesce di lago e piatti tipici.',
                 en:'Traditional Larian cuisine with a lake view: lake fish and typical dishes.'},
    address:'Piazza Era 8, 23900 Lecco (LC)',
    hours:{it:'Gio 10:30–22:30  Dom 10:30–14:30', en:'Thu 10:30–22:30 Sat 10:30–14:30'},
    addedAgo:3, rating:24,
    comments:[
      { author:'Sara M.', ago:3,
        text:{
          it:{ pos:'Vista stupenda e risotto con pesce persico perfetto. Atmosfera autentica.',
               neg:'Attesa un po\' lunga nel weekend, meglio prenotare.' },
          en:{ pos:'Stunning view and perfect perch risotto. Authentic atmosphere.',
               neg:'Quite a wait on weekends, better to book ahead.' }
        }
      }
    ]
  },
  {
    id:4, category:'ristoratori', name:'Taverna ai Poggi',
    lat:45.85966786273042, lng:9.411567354908135, image:null, /*45.85966786273042, 9.411567354908135*/
    description:{it:'ristorante e pizzeria con cucina italiana tradizionale e terrazza panoramica.',
                 en:'Traditional Italian restaurant and pizzeria with a panoramic terrace.'},
    address:'Via ai Poggi 14/20, 23900 Lecco (LC)',
    hours:{it:'Mar–Sab 8:00–12:30', en:'Tue–Sat 8:00–12:30'},
    addedAgo:8, rating:15,
    comments:[
      { author:'Giovanni P.', ago:7,
        text:{
          it:{ pos:'Pesce freschissimo, il miglior lavarello che abbia mai mangiato.',
               neg:'Orari di apertura limitati, bisogna andarci presto la mattina.' },
          en:{ pos:'Incredibly fresh fish, the best whitefish I\'ve ever had.',
               neg:'Limited opening hours, you need to go early in the morning.' }
        }
      }
    ]
  },
  {
    id:5, category:'agricoltori', name:'Il Fruttorto Di Fumagalli Marco E C. Snc',
    lat:45.85422732090137, lng:9.394485627920242, image:null, /*45.85422732090137, 9.394485627920242*/
    description:{it:'negozio di frutta e verdura con prodotti agricoli locali e stagionali.',
                 en:'Fruit and vegetable shop offering local and seasonal agricultural produce.'},
    address:'Via Marco d’Oggiono 6, 23900 Lecco (LC)',
    hours:{it:'Lun–Sab 6:30–19:00', en:'Mon–Sat 6:30–19:00'},
    addedAgo:20, rating:11,
    comments:[
      { author:'Elena T.', ago:18,
        text:{
          it:{ pos:'Il pane di segale è spettacolare, crosta croccante e mollica morbida.',
               neg:'Pochi posti a sedere, è più un forno da asporto.' },
          en:{ pos:'The rye bread is spectacular, crispy crust and soft crumb.',
               neg:'Very few seats, it\'s more of a takeaway bakery.' }
        }
      }
    ]
  },
  {
    id:6, category:'macellai', name:'Colombo Carni Di Colombo Walter',
    lat:45.85488627429565, lng: 9.391058341414105, image:null, /*45.85488627429565, 9.391058341414105*/
    description:{it:'macelleria tradizionale specializzata in carni selezionate.',
                 en:'Traditional butcher shop specializing in selected high-quality meats.'},
    address:'Via Don Antonio Mascari 74, 23900 Lecco (LC)',
    hours:{it:'Lun–Sab 7:00–13:00 / 16:00–19:00', en:'Mon–Sat 7:00–13:00 / 16:00–19:00'},
    addedAgo:15, rating:6,
    comments:[
      { author:'Marco V.', ago:14,
        text:{
          it:{ pos:'I biscotti di meliga sono incredibili, ricetta tradizionale perfetta.',
               neg:'Chiude presto il pomeriggio, non sempre facile passarci.' },
          en:{ pos:'The meliga biscuits are incredible, perfect traditional recipe.',
               neg:'Closes early in the afternoon, not always easy to catch it.' }
        }
      }
    ]
  },
  {
    id:7, category:'panifici', name:'Ronchetti Giovanni & C.(S.N.C.)',
    lat:45.81613836402201, lng:9.377249283209123, image:null, /*45.81613836402201, 9.377249283209123*/
    description:{it:'panificio e pasticceria artigianale storica di Galbiate.',
                 en:'Historic artisan bakery and pastry shop.'},
    address:'Piazza Alessandro Manzoni 11, 23851 Galbiate (LC)',
    hours:{it:'Mer e Sab 9:00–18:00', en:'Wed & Sat 9:00–18:00'},
    addedAgo:6, rating:13,
    comments:[
      { author:'Anna B.', ago:5,
        text:{
          it:{ pos:'Verdure saporitissime, si vede che sono coltivate con cura. Prezzi onesti.',
               neg:'Aperto solo due giorni a settimana, bisogna organizzarsi.' },
          en:{ pos:'Very flavorful vegetables, you can tell they\'re grown with care. Fair prices.',
               neg:'Only open two days a week, you need to plan ahead.' }
        }
      }
    ]
  },
  {
    id:8, category:'macellai', name:'Nuova LeccoLatte s.c.a.',
    lat:45.88556761246046, lng:9.418803373058465, image:null, /*45.88556761246046, 9.418803373058465, remember those coordinates are sliglitly wrong, else it won't fit in the map*/
    description:{it:'latteria e shop di prodotti caseari locali, formaggi, yogurt e prodotti tipici.',
                 en:'Dairy shop selling local cheeses, yogurt, and regional dairy products.'},
    address:'Via Provinciale 83, 23868 Ballabio (LC)',
    hours:{it:'Lun–Mar 09:30–15:30 Mer-Dom 9:30–18:00', en:'Mon–Tue 09:30–15:30 Wed–Sun 9:30–18:00'},
    addedAgo:6, rating:13,
    comments:[
      { author:'Anna B.', ago:5,
        text:{
          it:{ pos:'Verdure saporitissime, si vede che sono coltivate con cura. Prezzi onesti.',
               neg:'Aperto solo due giorni a settimana, bisogna organizzarsi.' },
          en:{ pos:'Very flavorful vegetables, you can tell they\'re grown with care. Fair prices.',
               neg:'Only open two days a week, you need to plan ahead.' }
        }
      }
    ]
  }
];

/* ====================================================================
   5. MapEngine — astrazione mappa
   --------------------------------------------------------------------
   Espone: init(), refresh(), setFilter(cats), onPinClick(cb),
           zoom(delta). Mappa grafica illustrata, nessuna libreria esterna.
   ==================================================================== */
const MapEngine = (() => {
  let pinClickCb = () => {};
  let activeFilter = new Set(CAT_ORDER);
  const pinLayer = document.getElementById('pinLayer');
  const stage    = document.getElementById('mapStage');
  const frame    = document.getElementById('mapFrame');

  /* --- proietta lat/lng -> % dentro la mappa visibile ---
     Tiene conto del crop di object-fit:cover. L'immagine è più larga
     del riquadro, quindi i bordi sinistro/destro vengono tagliati.
     Questa funzione compensa lo scarto automaticamente. */
  function project(lat, lng){
    const b = CONFIG.BOUNDS;

    // 1. posizione come frazione dell'immagine INTERA (0–1)
    const imgX = (lng - b.west)  / (b.east - b.west);
    const imgY = (b.north - lat) / (b.north - b.south);

    // 2. calcola quanto object-fit:cover taglia
    const fw = frame.clientWidth  || 360;
    const fh = frame.clientHeight || 432;
    const frameAR = fw / fh;
    const imgAR   = CONFIG.IMG_ASPECT;

    let x, y;
    if (imgAR > frameAR) {
      // immagine più larga del riquadro → i lati vengono tagliati
      const visFrac  = frameAR / imgAR;         // frazione visibile della larghezza
      const cropFrac = (1 - visFrac) / 2;       // taglio per lato
      x = (imgX - cropFrac) / visFrac;          // rimappa nel range visibile
      y = imgY;
    } else {
      // immagine più alta del riquadro → top/bottom tagliati
      const visFrac  = imgAR / frameAR;
      const cropFrac = (1 - visFrac) / 2;
      x = imgX;
      y = (imgY - cropFrac) / visFrac;
    }

    return {
      x: Math.max(1, Math.min(99, x * 100)),
      y: Math.max(1, Math.min(99, y * 100))
    };
  }

  /* --- SVG del pin (goccia + icona categoria) --- */
  function pinSVG(cat){
    const c = CATEGORIES[cat];
    // goccia colorata + icona PNG bianca (ASSETS.icons) centrata
    return `<svg viewBox="0 0 34 44" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 43C17 43 32 27 32 16A15 15 0 1 0 2 16C2 27 17 43 17 43Z" fill="${c.raw}"/>
      <image href="${ASSETS.icons[c.icon]}" x="9" y="8" width="16" height="16"/>
    </svg>`;
  }


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
  }
  function applyFilterDOM(){
    pinLayer.querySelectorAll('.pin').forEach(el =>
      el.classList.toggle('dim', !activeFilter.has(el.dataset.cat)));
  }

  /* --- zoom + pan + PINCH-TO-ZOOM sulla mappa --- */
  let scale = 1, panX = 0, panY = 0;

  function clampPan(){
    const maxX = (scale - 1) * frame.clientWidth  / 2;
    const maxY = (scale - 1) * frame.clientHeight / 2;
    panX = Math.max(-maxX, Math.min(maxX, panX));
    panY = Math.max(-maxY, Math.min(maxY, panY));
  }

  function applyTransform(){
    clampPan();
    stage.style.transform = `translate(${panX}px,${panY}px) scale(${scale})`;
    // pin si rimpiccioliscono proporzionalmente allo zoom
    const ps = 1 / scale;
    pinLayer.querySelectorAll('.pin').forEach(el => {
      el.style.transform = `translate(-50%,-100%) scale(${ps})`;
    });
  }

  function setZoom(next, cx, cy){
    const prev = scale;
    scale = Math.max(CONFIG.ZOOM_MIN, Math.min(CONFIG.ZOOM_MAX, next));
    if (scale === 1){ panX = 0; panY = 0; }
    else if (cx !== undefined){
      // zoom verso il punto del pinch / scroll
      const r = scale / prev;
      panX = cx - r * (cx - panX);
      panY = cy - r * (cy - panY);
    }
    applyTransform();
  }

  /* --- 1-finger drag (pan) --- */
  let drag = null;
  frame.addEventListener('pointerdown', e => {
    if (e.pointerType === 'touch' && touches.size > 0) return; // gestito da touch
    if (scale <= 1) return;
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

  /* --- pinch-to-zoom (2 dita / trackpad) --- */
  const touches = new Map();
  let pinchStart = null;

  frame.addEventListener('touchstart', e => {
    for (const t of e.changedTouches) touches.set(t.identifier, t);
    if (touches.size === 2){
      e.preventDefault();
      const [a,b] = [...touches.values()];
      pinchStart = {
        dist: Math.hypot(a.clientX-b.clientX, a.clientY-b.clientY),
        scale: scale,
        cx: (a.clientX+b.clientX)/2 - frame.getBoundingClientRect().left - frame.clientWidth/2,
        cy: (a.clientY+b.clientY)/2 - frame.getBoundingClientRect().top  - frame.clientHeight/2,
        px: panX, py: panY
      };
    }
  }, {passive:false});

  frame.addEventListener('touchmove', e => {
    for (const t of e.changedTouches) touches.set(t.identifier, t);
    if (pinchStart && touches.size >= 2){
      e.preventDefault();
      const [a,b] = [...touches.values()];
      const dist = Math.hypot(a.clientX-b.clientX, a.clientY-b.clientY);
      const r = dist / pinchStart.dist;
      const next = Math.max(CONFIG.ZOOM_MIN, Math.min(CONFIG.ZOOM_MAX, pinchStart.scale * r));
      scale = next;
      // pan segue il centro delle dita
      const cx = (a.clientX+b.clientX)/2 - frame.getBoundingClientRect().left - frame.clientWidth/2;
      const cy = (a.clientY+b.clientY)/2 - frame.getBoundingClientRect().top  - frame.clientHeight/2;
      panX = pinchStart.px + (cx - pinchStart.cx);
      panY = pinchStart.py + (cy - pinchStart.cy);
      if (scale <= 1){ panX=0; panY=0; }
      applyTransform();
    }
  }, {passive:false});

  frame.addEventListener('touchend', e => {
    for (const t of e.changedTouches) touches.delete(t.identifier);
    if (touches.size < 2) pinchStart = null;
  });
  frame.addEventListener('touchcancel', e => {
    for (const t of e.changedTouches) touches.delete(t.identifier);
    pinchStart = null;
  });

  /* --- mouse wheel / trackpad zoom --- */
  frame.addEventListener('wheel', e => {
    e.preventDefault();
    const rect = frame.getBoundingClientRect();
    const cx = e.clientX - rect.left - rect.width/2;
    const cy = e.clientY - rect.top  - rect.height/2;
    // trackpad pinch sends small deltaY with ctrlKey; scroll wheel sends larger
    const factor = e.ctrlKey ? e.deltaY * -0.01 : e.deltaY * -0.005;
    setZoom(scale * (1 + factor), cx, cy);
  }, {passive:false});

  return {
    init(){
      document.getElementById('mapImg').src = ASSETS.mappa;
      buildPins();
    },
    onPinClick(cb){ pinClickCb = cb; },
    setFilter(catsSet){ activeFilter = catsSet; applyFilterDOM(); },
    refresh(){ buildPins(); },
    zoom(delta){ setZoom(scale + delta * CONFIG.ZOOM_STEP); }
  };
})();

/* ====================================================================
   6. UI / RENDER
   ==================================================================== */
const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

/* --- applica le traduzioni a tutto il DOM --- */
function applyI18n(){
  $$('[data-i18n]').forEach(el => el.textContent = t(el.dataset.i18n));
  $$('[data-i18n-ph]').forEach(el => el.placeholder = t(el.dataset.i18nPh));
  document.documentElement.lang = LANG;
  // toggle lingua visivo
  $$('#langToggle span[data-lang]').forEach(s =>
    s.classList.toggle('on', s.dataset.lang === LANG));
  renderRail(); renderLegend(); renderCatSelect();
}

/* --- carica le immagini (logo, hero, foto) da ASSETS --- */
function loadAssets(){
  $('#heroBg').style.backgroundImage = `url("${ASSETS.hero}")`;
  // logo: lasciato vuoto — inserire qui il src quando pronto
  // $('#brandLogo').src = ASSETS.logo;
  // $$('.footLogo').forEach(img => img.src = ASSETS.logo);
  $$('.infoPhoto').forEach(img =>
    img.src = img.dataset.photo === '1' ? ASSETS.photo1 : ASSETS.photo2);
}

/* --- filter rail (icone verticali) --- */
let FILTER = new Set(CAT_ORDER);   // tutte attive = nessun filtro
function renderRail(){
  const list = $('#railList');
  list.innerHTML = CAT_ORDER.map(cat =>
    `<button class="rail-btn ${FILTER.has(cat)?'on':''}" data-cat="${cat}"
       aria-label="${t('cat.'+cat)}">${catIcon(CATEGORIES[cat].icon)}</button>`
  ).join('');
  list.querySelectorAll('.rail-btn').forEach(btn => {
    btn.onclick = () => toggleFilter(btn.dataset.cat);
  });
}
function toggleFilter(cat){
  // se sono tutte attive e clicco una -> mostro solo quella
  if (FILTER.size === CAT_ORDER.length){
    FILTER = new Set([cat]);
  } else if (FILTER.has(cat)){
    FILTER.delete(cat);
    if (FILTER.size === 0) FILTER = new Set(CAT_ORDER); // niente selezione = tutte
  } else {
    FILTER.add(cat);
  }
  renderRail();
  MapEngine.setFilter(FILTER);
}

/* --- legend sotto la mappa --- */
function renderLegend(){
  $('#legend').innerHTML = CAT_ORDER.map(cat =>
    `<div class="legend-item">
       <span class="legend-ic" style="color:${CATEGORIES[cat].raw}">${catIcon(CATEGORIES[cat].icon)}</span>
       <span>${t('cat.'+cat)}</span>
     </div>`
  ).join('');
}

/* --- select categoria nel form "aggiungi posto" --- */
function renderCatSelect(){
  const sel = $('#apCat');
  const cur = sel.value;
  sel.innerHTML = CAT_ORDER.map(cat =>
    `<option value="${cat}">${t('cat.'+cat)}</option>`).join('');
  if (cur) sel.value = cur;
}

/* --- INFO WINDOW (sheet) per un luogo --- */
let currentPlace = null;
function openInfoWindow(place){
  currentPlace = place;
  const cat = CATEGORIES[place.category];

  const commentsHTML = place.comments.length
    ? place.comments.map(c => {
        const ci = c.author.split(' ').map(w=>w[0]).slice(0,2).join('').toUpperCase();
        const txt = c.text[LANG];
        return `<div class="comment">
          <div class="iw-av">${ci}</div>
          <div class="c-body">
            <div class="c-head">
              <span class="c-name">${c.author}</span>
              <span class="c-ago">${t('iw.daysAgo',{n:c.ago})}</span>
            </div>
            ${txt.pos ? `<p class="c-review c-pos"><span class="c-emoji">🙂</span> ${txt.pos}</p>` : ''}
            ${txt.neg ? `<p class="c-review c-neg"><span class="c-emoji">😕</span> ${txt.neg}</p>` : ''}
          </div></div>`;
      }).join('')
    : `<div style="font-size:13px;color:var(--ink-soft);padding:10px 0">—</div>`;

  $('#infoBody').innerHTML = `
    <div class="iw-hero" style="background:${cat.raw}">
      <div class="iw-ic">${catIcon(cat.icon)}</div>
      <span class="iw-badge">${t('cat.'+place.category)}</span>
    </div>
    <div class="iw-name">${place.name}</div>
    <div class="iw-desc">${place.description[LANG]}</div>
    <div class="iw-meta">
      <div class="iw-row"><span class="k">${t('iw.address')}:</span><span>${place.address}</span></div>
      <div class="iw-row"><span class="k">${t('iw.hours')}:</span><span>${place.hours[LANG]}</span></div>
    </div>
    <div class="iw-attrib">
      <div class="ag">${t('iw.addedAgo',{n:place.addedAgo})}</div>
      <div class="iw-rating">♥ ${place.rating}</div>
    </div>
    <div class="iw-section-t">${t('iw.community')}</div>
    <div id="commentList">${commentsHTML}</div>
    <div class="add-comment">
      <input type="text" id="quickComment" placeholder="${t('iw.addComment')}">
      <button id="quickCommentBtn" aria-label="add">+</button>
    </div>
  `;
  // colora la zona dietro l'hero
  $('#infoBody').style.setProperty('background', 'var(--cream)');

  // azione "+" del commento -> apre il form recensione completo
  $('#quickCommentBtn').onclick = () => {
    const quick = $('#quickComment').value.trim();
    if (quick){
      // commento veloce inline
      place.comments.push({author: LANG==='it'?'Tu':'You', ago:0,
        text:{it:{pos:quick,neg:''},en:{pos:quick,neg:''}}});
      openInfoWindow(place);                 // re-render
      openSheet('sheetInfo');
      showToast(t('toast.comment'));
    } else {
      // niente testo -> form recensione completo
      openSheet('sheetReview');
    }
  };
  $('#quickComment').addEventListener('keydown', e => {
    if (e.key === 'Enter') $('#quickCommentBtn').click();
  });

  openSheet('sheetInfo');
}

/* ====================================================================
   7. OVERLAY / SHEET CONTROL
   ==================================================================== */
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

/* toast */
let toastTimer = null;
function showToast(msg){
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
}

/* ====================================================================
   8. EVENTS
   ==================================================================== */
/* --- navigazione pagine --- */
$$('.nav button').forEach(btn => {
  btn.onclick = () => {
    $$('.nav button').forEach(b => b.classList.toggle('active', b === btn));
    $$('.page').forEach(p => p.classList.remove('active'));
    $('#page-' + btn.dataset.page).classList.add('active');
    $('#scroll').scrollTop = 0;
  };
});

$('#trustCta')?.addEventListener('click', () => {
  $$('.nav button').forEach(b => b.classList.toggle('active', b.dataset.page === 'info'));
  $$('.page').forEach(p => p.classList.remove('active'));
  $('#page-info').classList.add('active');
  $('#scroll').scrollTop = 0;
});

/* --- toggle lingua --- */
$('#langToggle').onclick = () => {
  LANG = (LANG === 'it') ? 'en' : 'it';
  applyI18n();
  if (currentPlace && openSheetId === 'sheetInfo') openInfoWindow(currentPlace);
};

/* --- rail "+" -> form aggiungi posto --- */
$('#railAdd').onclick = () => openSheet('sheetAdd');

/* --- zoom --- */
$('#zoomIn').onclick  = () => MapEngine.zoom(1);
$('#zoomOut').onclick = () => MapEngine.zoom(-1);

/* --- pin click --- */
MapEngine.onPinClick(openInfoWindow);

/* --- star rating nel form recensione --- */
let rvRating = 0;
function renderStars(){
  $('#rvStars').innerHTML = [1,2,3,4,5].map(n =>
    `<button data-n="${n}" class="${n<=rvRating?'on':''}">★</button>`).join('');
  $$('#rvStars button').forEach(b => b.onclick = () => {
    rvRating = +b.dataset.n; renderStars();
  });
}
renderStars();

/* --- submit: aggiungi posto --- */
$('#apSend').onclick = () => {
  const name = $('#apName').value.trim();
  const cat  = $('#apCat').value;
  const addr = $('#apAddr').value.trim();
  if (!name || !addr){ showToast(LANG==='it'?'Compila nome e indirizzo':'Fill in name and address'); return; }
  // nuovo luogo (posizionato vicino al centro; un backend farebbe il geocoding)
  const np = {
    id: Date.now(), category:cat, name,
    lat: CONFIG.LECCO.lat + (Math.random()-.5)*0.012,
    lng: CONFIG.LECCO.lng + (Math.random()-.5)*0.018,
    image:null,
    description:{it:'Nuovo posto consigliato dalla community.',
                 en:'New place recommended by the community.'},
    address:addr, hours:{it:'Da confermare',en:'To be confirmed'},
    addedAgo:0, rating:0, comments:[]
  };
  PLACES.push(np);
  MapEngine.refresh();
  MapEngine.setFilter(FILTER);
  $('#apName').value = ''; $('#apAddr').value = '';
  closeSheet();
  showToast(t('toast.added'));
};

/* --- submit: recensione --- */
$('#rvSend').onclick = () => {
  const name = $('#rvName').value.trim() || (LANG==='it'?'Anonimo':'Anonymous');
  const liked = $('#rvLiked').value.trim();
  const improve = $('#rvImprove').value.trim();
  if (!liked && !improve){ showToast(LANG==='it'?'Scrivi una recensione':'Write a review'); return; }
  if (currentPlace){
    currentPlace.comments.push({
      author:name, ago:0,
      text:{ it:{pos:liked,neg:improve}, en:{pos:liked,neg:improve} }
    });
    if (rvRating) currentPlace.rating += rvRating;
    openInfoWindow(currentPlace);
  }
  $('#rvName').value=''; $('#rvLiked').value=''; $('#rvImprove').value=''; rvRating=0; renderStars();
  showToast(t('toast.review'));
};

/* --- submit: contatti --- */
$('#ctSend').onclick = () => {
  const name = $('#ctName').value.trim();
  const email = $('#ctEmail').value.trim();
  const msg = $('#ctMsg').value.trim();
  if (!name || !email || !msg){ showToast(LANG==='it'?'Compila tutti i campi':'Fill in all fields'); return; }
  $('#ctName').value=''; $('#ctEmail').value=''; $('#ctMsg').value='';
  showToast(t('toast.contact'));
};

/* ====================================================================
   9. INIT
   ==================================================================== */
function init(){
  loadAssets();
  applyI18n();          // -> renderRail + renderLegend + renderCatSelect
  MapEngine.init();     // -> disegna mappa SVG + pin
  MapEngine.setFilter(FILTER);

  // ricalcola posizione pin se la finestra cambia dimensione (ruota telefono, ecc.)
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => MapEngine.refresh(), 200);
  });
}
init();