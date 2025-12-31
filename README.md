# MIMINATRIPU - Oficiální webová stránka

Moderní, responsivní webová stránka kapely MIMINATRIPU postavená čistě na HTML, CSS a JavaScript.

## 📋 Obsah

- **Úvodní sekce** — logo, název kapely, sociální média
- **Hudba** — přehrávač skladeb s preview
- **Countdown** — odpočet do nového singlu
- **O nás** — informace o kapele a jejím vzniku
- **Členové** — profily jednotlivých členů kapely
- **Kontakt** — formulář a přímé kontakty

## 📱 Responsivnost

Stránka je plně responsivní a optimalizovaná pro:
- 📱 Mobilní zařízení (320px+)
- 📱 Tablety (768px+)
- 💻 Desktopy (1024px+)

## 🚀 Nasazení

### Požadavky
- Webhosting s podporou PHP (pro kontaktní formulář)
- HTTPS certifikát (doporučeno)
- Vlastní doména

### Kroky k nasazení

1. **Nahrát soubory na hosting** přes FTP/SFTP
2. **Nastavit HTTPS** u poskytovatele hostingu
3. **Ověřit si Google Search Console** — přidat web
4. **Nastavit Google Analytics** (volitelné)
5. **Testovat** na všech zařízeních

### Konfigurační soubory

- `robots.txt` — instruuje vyhledávače jak skenovat web
- `sitemap.xml` — mapa webu pro SEO
- `.htaccess` — server optimization + bezpečnost (Apache)

## 📝 Poznámky

### Kontaktní formulář
Formulář je připojen na **Formspree** (https://formspree.io).
- E-maily se posílají na `miminatripu@gmail.com`
- Žádná backend databáze není potřebná
- Upravit ID formuláře: změňte `action="https://formspree.io/f/myzyrwpk"`

### Countdown
Aktualizovat cílové datum v `index.html`:
```javascript
const countDownDate = new Date(2026, 1, 15, 0, 0, 0).getTime();
```

### Sociální média
Aktualizovat linky na sociální sítě v `index.html`:
- Spotify, Instagram, YouTube, Facebook

## ✨ Funkce

✅ Plná responsivnost
✅ SEO optimalizace (meta tagy, Open Graph)
✅ Přístupnost (ARIA, focus stavy)
✅ Animace a efekty
✅ Přehrávač hudby
✅ Countdown timer
✅ Kontaktní formulář
✅ Mobilní menu

## 🔒 Bezpečnost

- HTTPS required
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Ochrana před přístupem k citlivým souborům

## 📊 SEO

- Metadata: title, description, keywords
- Open Graph tagy pro sociální sítě
- robots.txt a sitemap.xml
- Semantic HTML5
- Fast loading times s GZIP compression

## 📞 Podpora

Máte otázky? Kontaktujte kapelu:
- 📧 E-mail: miminatripu@gmail.com
- 📷 Instagram: @miminatripu

---

**Vytvořeno:** Leden 2026
**Poslední aktualizace:** 1. ledna 2026
