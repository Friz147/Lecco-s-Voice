# Lecco's Voice 

A mobile-first web app that maps local food producers, butchers, fishmongers, bakeries, and restaurants across the province of Lecco (Italy). Built as a university project for the **Sustainable Interaction Design Studio** course at Politecnico di Milano.

---

## What it does

Lecco's Voice lets residents and visitors discover the gastronomic identity of the Lecco area through an illustrated interactive map. Users can explore local producers by category, read community reviews, add new places, and leave their own feedback.

**Core features:**

- **Interactive illustrated map** of the Lecco province with colour-coded pins by category
- **Category filters** — Farmers, Butchers, Fishmongers, Bakeries, Restaurants
- **Place detail sheets** — address, hours, description, community ratings and reviews
- **Add a place** — suggest a producer not yet on the map
- **Leave a review** — share what you liked and what could be improved
- **Bilingual UI** — full Italian / English toggle
- **Mobile-first** — designed for phones (320–430 px), scales gracefully to wider screens

---

## Project structure

```
/
├── index.html      # App shell and all page markup
├── style.css       # Design tokens, layout, components
├── script.js       # Config, i18n, place data, MapEngine, UI logic
└── images/
    ├── mappafinal1.png       # Illustrated map of Lecco province
    ├── SfondoHero.png        # Hero background
    ├── photo1.png            # Info page photos
    ├── photo2.png
    └── icons/
        ├── Logo.png
        ├── carrot.png        # Farmers icon
        ├── cow.png           # Butchers icon
        ├── fish.png          # Fishmongers icon
        ├── croissant.png     # Bakeries icon
        └── posateIcon.png    # Restaurants icon
```

The code is intentionally **single-stack** (plain HTML + CSS + JS, no build tools, no framework, no map API). This makes it easy to host statically and to swap in a real backend later.

---

## How the code is organised

`script.js` is divided into numbered sections so the architecture is easy to follow:

| Section | What it contains |
|---------|-----------------|
| `ASSETS` | File paths for images and icons |
| `CONFIG` | Map bounding box (lat/lng), zoom limits, image aspect ratio |
| `I18N` | All UI strings in Italian and English |
| `CATEGORIES` | Category definitions — colour, icon, display key |
| `PLACES` | The place data array — **replace this with a `fetch()` to your backend** |
| `MapEngine` | Self-contained IIFE: renders pins on the illustrated map, handles pinch-to-zoom, pan, and the scroll-safe overlay |
| `UI / RENDER` | `applyI18n`, rail filter, legend, info window HTML |
| `EVENTS` | Navigation, language toggle, form submissions |
| `INIT` | Bootstraps everything |

---

## Map interaction (mobile)

The map uses a **scroll-safe overlay** pattern so it never blocks page scrolling:

- **1 finger** anywhere on the map → page scrolls normally
- **2 fingers** → pinch-to-zoom and pan the map
- **1 finger when zoomed in** → pans the map
- **Tap a pin** → opens the place detail sheet

No external map library or API key is required. Pins are projected from lat/lng coordinates onto the illustrated image using the bounding box in `CONFIG.BOUNDS`.

---

## Replacing the place data

All places live in the `PLACES` array in `script.js`. Each entry follows this shape:

```js
{
  id: 1,
  category: 'ristoratori',      // agricoltori | macellai | pescivendoli | panifici | ristoratori
  name: 'Example Place',
  lat: 45.856,
  lng: 9.397,
  image: null,                  // reserved for a photo URL
  description: { it: '...', en: '...' },
  address: 'Via Example 1, Lecco',
  hours: { it: 'Lun–Sab 9:00–18:00', en: 'Mon–Sat 9:00–18:00' },
  addedAgo: 3,                  // days since added
  rating: 12,
  comments: [
    {
      author: 'Name',
      ago: 2,
      text: {
        it: { pos: '...', neg: '...' },
        en: { pos: '...', neg: '...' }
      }
    }
  ]
}
```

To connect a backend, replace the `PLACES` array initialisation with a `fetch()` call and call `MapEngine.refresh()` once the data resolves.

---

## Running locally

No build step required. Just serve the files from any static server, for example:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Then open `http://localhost:8080` in your browser. On desktop you can simulate the mobile layout with browser DevTools device emulation.

---

## Adding a new language

1. Add a new key block to `I18N` in `script.js` (copy the `en` block as a template).
2. Add a `<span data-lang="xx">XX</span>` to the language toggle in `index.html`.
3. Update the toggle logic in the `#langToggle` click handler.

---

## Customising the map area

Update `CONFIG.BOUNDS` in `script.js` to match your new illustrated map's geographic coverage:

```js
BOUNDS: { north: 45.89989, south: 45.83559, west: 9.35981, east: 9.44159 }
```

Also update `CONFIG.IMG_ASPECT` to match the width/height ratio of your map image.

---

## Credits

Developed by students of the **Interaction Design** programme at **Politecnico di Milano** for the Sustainable Interaction Design Studio course.

Font: [Fraunces](https://fonts.google.com/specimen/Fraunces) via Google Fonts.
