# SmartRain - Ghid Rapid de Pornire

## 🚀 Start Rapid

### 1. Verifică că XAMPP este pornit
- Deschide XAMPP Control Panel
- Start Apache (pentru PHP)

### 2. Accesează site-ul
Deschide browser-ul și mergi la:
```
http://localhost/ProiectLicenta/proiect/
```

### 3. Adaugă Imagini
- Deschide fișierul `IMAGINI-NECESARE.html` în browser pentru lista completă
- Descarcă imagini de pe Unsplash/Pexels
- Plasează-le în directorul `images/` și `images/gallery/`

## 📋 Checklist Funcționalități

### ✅ Cerințe Îndeplinite

- [x] **Minim 5 pagini web**: Acasă, Despre, Sistem, Monitorizare, Galerie, Contact (6 pagini)
- [x] **Fixed Navigation Bar**: Cu evidențiere buton activ
- [x] **Funcție de căutare**: Funcțională în tot site-ul
- [x] **Carusel de imagini**: Pe homepage cu 3 slides
- [x] **Tabel de componente**: În pagina Sistem
- [x] **Formular de contact**: Cu validare completă
- [x] **Video**: YouTube embedat în Galerie
- [x] **Rețele sociale**: Iconițe în footer și Contact
- [x] **Text și imagini**: Structurate pe nevoi
- [x] **Buton de help**: Modal cu informații
- [x] **Buton UP/DOWN**: Scroll to top
- [x] **Responsive**: Desktop, tablet, mobile
- [x] **Light/Dark mode**: Personalizare fundal și text
- [x] **Google Analytics**: Integrat (necesită ID propriu)

## 🎨 Personalizare

### Schimbă Culorile
Editează fișierul `css/style.css` la linia 6-20 (variabilele CSS):
```css
:root {
    --primary-color: #2563eb;  /* Schimbă cu culoarea ta */
    --secondary-color: #0ea5e9;
    /* ... */
}
```

### Adaugă Google Analytics ID
În toate fișierele .php, găsește:
```html
gtag('config', 'G-XXXXXXXXXX');
```
Înlocuiește `G-XXXXXXXXXX` cu ID-ul tău real de Analytics.

### Modifică Textele
- **Acasă**: `index.php`
- **Despre**: `despre.php`
- **Sistem**: `sistem.php`
- **Monitorizare**: `monitorizare.php`
- **Galerie**: `galerie.php`
- **Contact**: `contact.php`

## 🐛 Probleme Comune

### Site-ul nu se încarcă
- Verifică că Apache este pornit în XAMPP
- Verifică că path-ul este corect: `/ProiectLicenta/proiect/`

### Imaginile nu apar
- Verifică că ai adăugat imagini în `images/` și `images/gallery/`
- Vezi `IMAGINI-NECESARE.html` pentru lista completă

### Formularul nu funcționează
- Verifică că Apache este pornit (PHP trebuie să fie activ)
- Verifică că toate câmpurile sunt completate corect

### Stilurile arată ciudat
- Asigură-te că fișierul `css/style.css` există
- Verifică console-ul browserului (F12) pentru erori

## 📱 Testare Responsive

### Chrome DevTools
1. Apasă F12
2. Click pe iconița de telefon (Toggle Device Toolbar)
3. Testează pe diferite dimensiuni:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

## 📊 Pentru Documentație

### Screenshot-uri necesare
1. Homepage (desktop și mobile)
2. Pagina Despre (desktop și mobile)
3. Pagina Sistem cu tabel (desktop și mobile)
4. Dashboard Monitorizare (desktop și mobile)
5. Galerie (desktop și mobile)
6. Formular Contact (desktop și mobile)

### Elemente de evidențiat în documentație
- Principiile Nielsen respectate (vizibilitate, control, consistență, etc.)
- Principii design vizual (contrast, repetare, aliniere, proximitate)
- Paleta de culori (light și dark mode)
- Adaptarea la dispozitive mobile
- Tehnologii folosite (PHP, HTML, CSS, JavaScript)

## 🔧 Îmbunătățiri Opționale

### Conectare la Bază de Date
1. Creează o bază de date MySQL în phpMyAdmin
2. Creează tabel pentru mesaje contact
3. Modifică `contact.php` pentru a salva în baza de date

### Adaugă mai multe video-uri
Editează `galerie.php` și adaugă mai multe `.video-card`

### Optimizare Imagini
Folosește tools online:
- TinyPNG.com
- Squoosh.app
- ImageOptim

## 📞 Suport

Dacă întâmpini probleme:
1. Verifică console-ul browserului (F12)
2. Verifică error log-ul Apache în XAMPP
3. Asigură-te că toate fișierele sunt la locul potrivit

---

**Mult succes cu proiectul de licență! 🎓**
