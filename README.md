# Gilbert d'Orano — Artist Portfolio

A responsive multi-page artist portfolio built with HTML, CSS, and vanilla JavaScript.

## Preview
Open `index.html` directly in a browser, or serve the folder with any static web server.

Example:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Structure
- `index.html` — home page (hero)
- `work.html` — ausgewählte Werke mit Lightbox
- `gemaeldekatalog.html` — anklickbarer Gemäldekatalog; wiederholbare Artikelstruktur für eine spätere Python-Generierung
- `about.html` — Künstlerbiografie / Statement
- `notes.html` — Ateliernotiz
- `contact.html` — Kontaktdaten
- `impressum.html` — legally required imprint (German law)
- `datenschutzerklaerung.html` — privacy policy / GDPR notice (German law)
- `css/styles.css` — design system and responsive layout
- `js/main.js` — mobile navigation and artwork lightbox
- `assets/*.svg` — original abstract placeholder artwork

## Customize
- Replace the placeholder biography, studio note, artwork titles, media, dates, and contact email across the pages listed above.
- Replace SVG files in `assets/` with actual artwork. Keep the filenames or update the image paths.
- Colors and typography can be changed through CSS custom properties at the top of `css/styles.css`.

## Legal pages
`impressum.html` and `datenschutzerklaerung.html` contain standard German-law boilerplate (§ 5 TMG, § 18 MStV, DSGVO) with bracketed placeholders like `[Vollständiger Name]`. These **must** be filled in with the real operator's name, address, and contact details before the site goes live — an incomplete Impressum/Datenschutzerklärung is itself a legal violation in Germany. Have the final text checked by a lawyer if the site is used commercially.

## Notes
The current biography, artwork details, studio quote, and email are intentionally presented as placeholders rather than invented facts about the artist.
