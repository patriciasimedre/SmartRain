# SmartRain - Sistem Automatizat de Colectare a Apei de Ploaie

## 📋 Descriere

SmartRain este un sistem automatizat, inteligent și sustenabil pentru colectarea, filtrarea și reglarea utilizării apei de ploaie, destinat mediului urban. Acest proiect de licență combină tehnologia IoT, algoritmii de control automat și inteligența artificială pentru a crea o soluție ecologică și eficientă.

## 🎯 Caracteristici Principale

### Site Web
- ✅ **5+ Pagini Web**: Acasă, Despre, Sistem, Monitorizare, Galerie, Contact
- ✅ **Fixed Navigation Bar**: Cu evidențierea butonului activ
- ✅ **Funcție de Căutare**: Funcțională în întregul site
- ✅ **Carusel de Imagini**: Pe pagina principală
- ✅ **Tabel de Componente**: Detalii complete despre hardware
- ✅ **Formular de Contact**: Cu validare completă (email, telefon, etc.)
- ✅ **Video Embedat**: YouTube videos în galerie
- ✅ **Rețele Sociale**: Iconițe pentru toate platformele majore
- ✅ **Text și Imagini**: Organizate conform nevoilor utilizatorului
- ✅ **Buton de Help**: Modal cu informații utile
- ✅ **Butoane UP/DOWN**: Scroll to top implementat
- ✅ **Responsive Design**: Adaptat pentru telefon, tabletă și desktop
- ✅ **Mod Light/Dark**: Personalizare fundal și text
- ✅ **Google Analytics**: Integrat

### Tehnologii

#### Frontend
- **HTML5**: Structura semantică
- **CSS3**: Design modern cu variabile CSS și animații
- **JavaScript**: Interactivitate și funcționalități dinamice
- **PHP**: Backend pentru procesarea formularelor

#### Biblioteci
- **Font Awesome**: Pentru iconițe
- **Chart.js**: Pentru grafice în dashboard
- **Google Fonts**: Tipografie

## 📁 Structura Proiectului

```
proiect/
├── index.php              # Pagina principală
├── despre.php             # Despre proiect
├── sistem.php             # Componente și funcționalități
├── monitorizare.php       # Dashboard cu date în timp real
├── galerie.php            # Imagini și video
├── contact.php            # Formular de contact
├── css/
│   └── style.css         # Toate stilurile site-ului
├── js/
│   ├── script.js         # Funcționalități generale
│   ├── dashboard.js      # Logica dashboard-ului
│   ├── gallery.js        # Funcționalități galerie
│   └── contact.js        # Validare formular contact
└── images/               # Imagini și media
    ├── hero1.jpg
    ├── hero2.jpg
    ├── hero3.jpg
    └── gallery/
        └── ...
```

## 🚀 Instalare

### Cerințe
- XAMPP sau alt server local (Apache + PHP)
- Browser modern (Chrome, Firefox, Safari, Edge)

### Pași de Instalare

1. **Clonează sau descarcă proiectul** în directorul htdocs al XAMPP:
   ```
   /Applications/XAMPP/xamppfiles/htdocs/ProiectLicenta/proiect/
   ```

2. **Pornește XAMPP**:
   - Pornește Apache
   - (Opțional) MySQL pentru funcționalități viitoare

3. **Accesează site-ul**:
   ```
   http://localhost/ProiectLicenta/proiect/
   ```

## 💻 Utilizare

### Navigare
- Utilizează meniul de navigare pentru a explora paginile
- Meniul este responsive și se adaptează pe mobile

### Căutare
- Click pe iconița de căutare din navbar
- Tastează pentru a găsi conținut relevant

### Tema
- Click pe iconița lună/soare pentru a comuta între modul light și dark
- Preferința este salvată în localStorage

### Dashboard
- Vezi date în timp real de la senzori
- Controlează componentele sistemului
- Monitorizează grafice și statistici

### Contact
- Completează formularul cu datele tale
- Toate câmpurile sunt validate automat
- Primești confirmare la trimitere

## 📱 Design Responsive

Site-ul este complet responsive și se adaptează la:
- **Desktop**: Layout complet cu toate funcționalitățile
- **Tablet**: Layout adaptat pentru ecrane medii
- **Mobile**: Meniu hamburger, layout pe o coloană

### Breakpoints
- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: ≤ 480px

## 🎨 Design Principles

Site-ul respectă următoarele principii de design:

### Principiile lui Nielsen
1. **Vizibilitatea statusului sistemului**: Feedback vizual pentru toate acțiunile
2. **Control și libertate**: Navigare ușoară, undo/redo acolo unde e necesar
3. **Consistență și standarde**: Design uniform pe toate paginile
4. **Prevenirea erorilor**: Validare în timp real a formularelor
5. **Flexibilitate și eficiență**: Shortcuts, căutare rapidă

### Principii de Design Vizual
- **Contrast**: Culori clare pentru elementele importante
- **Repetare**: Pattern-uri consistente
- **Aliniere**: Grid system coerent
- **Proximitate**: Grupare logică a elementelor

### Paletă de Culori

#### Light Mode
- **Primary**: #2563eb (Albastru)
- **Secondary**: #0ea5e9 (Cyan)
- **Text**: #1f2937 (Gri închis)
- **Background**: #ffffff (Alb)

#### Dark Mode
- **Primary**: #2563eb (Albastru)
- **Secondary**: #0ea5e9 (Cyan)
- **Text**: #f9fafb (Alb-gri)
- **Background**: #111827 (Gri foarte închis)

## 🔧 Funcționalități JavaScript

### Principale
- Carousel automat cu control manual
- Search în timp real
- Validare formular complexă
- Toggle switches pentru dashboard
- Filtrare galerie dinamică
- Modal pentru imagini
- FAQ accordion
- Smooth scroll
- Lazy loading pentru imagini

### Animații
- Fade-in la scroll
- Counter animat pentru statistici
- Tranziții smooth între stări
- Hover effects pe carduri

## 📊 Google Analytics

Site-ul include integrarea cu Google Analytics pentru:
- Tracking vizitatori
- Analiza comportamentului utilizatorilor
- Măsurarea conversiilor
- Optimizare SEO

**Notă**: Înlocuiește `G-XXXXXXXXXX` cu ID-ul tău real de Google Analytics.

## 🔐 Securitate

- Validare input pe client și server
- Protecție împotriva XSS (htmlspecialchars în PHP)
- Sanitizare date formular
- HTTPS recomandat pentru producție

## 📈 Performanță

### Optimizări
- Lazy loading pentru imagini și video
- CSS și JS minificat (pentru producție)
- Imagini optimizate
- Cache browser
- CDN pentru biblioteci externe

## 🐛 Debugging

Pentru a activa debugging:
1. Deschide Developer Tools (F12)
2. Verifică Console pentru erori JavaScript
3. Verifică Network pentru request-uri failed
4. Verifică responsive design în Device Mode

## 📝 To-Do / Îmbunătățiri Viitoare

- [ ] Conectare la bază de date MySQL
- [ ] Sistem de autentificare utilizatori
- [ ] API REST pentru date senzori
- [ ] Notificări push în timp real
- [ ] Export date în CSV/PDF
- [ ] Multi-language support
- [ ] PWA (Progressive Web App)

## 👨‍🎓 Autor

**Proiect de Licență**
An universitar: 2024-2025

## 📄 Licență

Acest proiect este dezvoltat pentru scopuri educaționale în cadrul lucrării de licență.

## 🙏 Mulțumiri

- Font Awesome pentru iconițe
- Chart.js pentru grafice
- Google pentru Analytics și Fonts
- Comunitatea open-source

## 📞 Contact

Pentru întrebări sau sugestii:
- Email: contact@smartrain.ro
- Tel: +40 123 456 789

---

**SmartRain** - Contribuind la un viitor sustenabil prin tehnologie inteligentă! 🌧️💧🌱
