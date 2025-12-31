# 📋 NASAZOVACÍ CHECKLIST

Tímto dokumentem si ověřte, že je stránka připravena k zveřejnění.

## ✅ KRITICKÉ POLOŽKY

- [x] YouTube odkaz opravený (bez neplatného znaku)
- [x] Countdown aktualizován na správné datum
- [x] SEO meta tagy přidány (title, description, keywords)
- [x] Open Graph tagy pro sociální sítě
- [x] Preloader CSS implementován
- [x] Kontaktní formulář přidán (Formspree)
- [x] rel="noopener noreferrer" na všechny externí linky
- [x] Focus stavy pro accessibility
- [x] robots.txt vytvořen
- [x] sitemap.xml vytvořen
- [x] GDPR zásady ochrany údajů (privacy-policy.html)

## 🚀 PŘED NASAZENÍM NA SERVER

### Domainuje a hosting
- [ ] Zakupte doménu (doporučuji: ceska-doména.cz)
- [ ] Zvolte hosting s PHP podporou (minimálně 1 GB prostoru)
- [ ] Zajistěte SSL/HTTPS certifikát
- [ ] Nastavte MX záznamy pro e-mail na vlastní doméně

### Konfigurační soubory
- [ ] `.htaccess` je nahrán (pokud je Apache)
- [ ] Upravte `robots.txt` — změňte domain na vaši doménu
- [ ] Upravte `sitemap.xml` — změňte domain na vaši doménu

### Kontaktní formulář (Formspree)
- [ ] Přihlaste se na https://formspree.io
- [ ] Vytvořte nový formulář
- [ ] Zkopírujte ID formuláře
- [ ] Nahraďte v `index.html` řádek:
```html
<form class="kontakt-form" action="https://formspree.io/f/VAŠE_ID" method="POST">
```

### E-mail notifikace
- [ ] Zajistěte, aby e-maily z formuláře šly na správný e-mail
- [ ] Otestujte formulář před zveřejněním

## 📊 SEO KONTROLA

- [ ] Máte Title tag (< 60 znaků)
- [ ] Máte Meta description (< 160 znaků)
- [ ] Máte keywords
- [ ] Logo je optimalizováno (< 100 KB)
- [ ] Všechny obrázky mají alt text
- [ ] Weby jsou pod HTTPS

### Google Search Console
- [ ] Zaregistrujte web v Google Search Console
- [ ] Nahrajte sitemap.xml
- [ ] Ověřte vlastnictví domény

### Google Analytics (volitelné)
- [ ] Vytvořte Google Analytics účet
- [ ] Přidejte GA tracking code do `<head>`
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🔒 BEZPEČNOST

- [ ] HTTPS/SSL aktivován
- [ ] Všechny externí linky mají `rel="noopener noreferrer"`
- [ ] `.htaccess` je nahrán a aktivní
- [ ] Soubory `.env` nebo `.config` nejsou dostupné
- [ ] robots.txt brání přístupu k citlivým složkám

## ⚡ PERFORMANCE

- [ ] Všechny obrázky jsou optimalizované
- [ ] CSS a JS jsou minifikované (volitelné, ale doporučeno)
- [ ] GZIP compression je aktivní (.htaccess)
- [ ] Browser caching je nastaveno (.htaccess)

## 📱 TESTOVÁNÍ

### Desktop (Chrome, Firefox, Safari, Edge)
- [ ] Stránka se načítá správně
- [ ] Všechny linky fungují
- [ ] Hudba se přehrává
- [ ] Kontaktní formulář funguje
- [ ] Countdown je správný

### Mobil (iPhone, Android)
- [ ] Hamburger menu funguje
- [ ] Text je čitelný
- [ ] Formulář je snadný na zadávání
- [ ] Ikony sociálních médií fungují
- [ ] Žádné overflow ani scroll problémy

### Accessibility
- [ ] Tab navigace funguje
- [ ] Focus viditelný na všech prvcích
- [ ] Screen reader kompatibilita (testovat s NVDA/JAWS)
- [ ] Barvy mají dostatečný kontrast

### Speed test
- [ ] Google PageSpeed Insights: 80+/100
- [ ] GTmetrix: dobrý score
- [ ] Lighthouse: nejméně 80 bodů

## 🎯 POSLEDNÍ KONTROLY

- [ ] Všechny texty jsou bez chyb (Czech grammar check)
- [ ] Všechny telefonní čísla/e-maily jsou správné
- [ ] Sociální média linky jsou správné
- [ ] Copyright rok je správný (2025)
- [ ] Countdown datum je správné (Únor 2026)

## 📤 NASAZENÍ

1. Komprimujte všechny soubory do ZIP
2. Nahrajte na FTP/SFTP server
3. Nastavte práva přístupu (644 pro soubory, 755 pro složky)
4. Testujte v produkci
5. Nastavte SSL certifikát

## 🎉 ZVEŘEJNĚNÍ

Jakmile všechno funguje:
- [ ] Sdělte prátelům a rodině
- [ ] Postem na sociálních médiích
- [ ] Zašlete do hudebních databází (Last.fm, Discogs, atd.)
- [ ] Zvažte placené reklamy na Google/Facebook

---

**HOTOVO!** 🎵 Vaše webová stránka je připravena k veřejnosti.

Máte otázky? Kontaktujte kapelu: miminatripu@gmail.com
