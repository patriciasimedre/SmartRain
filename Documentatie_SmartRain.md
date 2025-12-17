# Documentație Site Web - SmartRain
## Proiect Interfețe Utilizator

---

**Student:** Simedre Patricia  
**An universitar:** 2024-2025  
**Facultatea:** Automatică și Calculatoare  
**Universitatea:** Politehnica Timișoara

---

## 1. Descrierea Tematicii Alese și Argumentarea Alegerii

### Tematica: SmartRain - Sistem IoT de Colectare Apă Pluvială

**SmartRain** este un sistem inteligent de management al apei pluviale, conceput pentru optimizarea consumului de apă în mediul urban prin colectarea, filtrarea și redistribuirea automată a apei de ploaie.

### Argumentarea Alegerii

Am ales această tematică din următoarele considerente:

1. **Relevanță actuală**: Schimbările climatice și seceta fac gestionarea resurselor de apă esențială
2. **Inovație tehnologică**: Combinarea IoT cu sustenabilitatea mediului
3. **Impact practic**: Soluție reală pentru reducerea consumului de apă potabilă
4. **Complexitate tehnică**: Permite demonstrarea cunoștințelor despre sisteme embedded, senzori și automatizare
5. **Potențial educativ**: Site-ul oferă informații valoroase despre tehnologie verde

---

## 2. Descrierea Site-ului prin Prisma Principiilor de Design

### 2.1 Tehnologii Utilizate

- **HTML5**: Structură semantică a paginilor
- **CSS3**: Stilizare modernă cu variabile CSS, flexbox, grid, animații
- **JavaScript (Vanilla ES6)**: Interactivitate (carousel, search, tema dark/light, validare formulare)
- **PHP 7.4+**: Backend pentru procesarea formularului de contact
- **JSON**: Stocare date mesaje contact
- **Font Awesome 6.4.0**: Iconografie
- **Google Analytics 4**: Monitorizare trafic (ID: G-YFC992KBTC)
- **Google Maps API**: Integrare hartă locație

**Nu s-a folosit niciun template** - site-ul este creat integral de la zero.

---

### 2.2 Principiile lui Nielsen (10 Heuristics) - Implementare

#### 1. **Visibility of System Status**
✅ **Implementat:**
- Navbar cu highlighting pe pagina activă (clasa `.active`)
- Loader animat la încărcarea paginilor
- Mesaje de feedback la submit formular (success/error)
- Progress visual în carousel (indicatori puncte)
- Contor caractere în textarea formular (live counter)

#### 2. **Match Between System and Real World**
✅ **Implementat:**
- Limbaj în limba română, natural și familiar
- Iconografie intuitivă (Font Awesome): ☁️ pentru ploaie, 📊 pentru monitorizare, 📧 pentru contact
- Metafore vizuale: picături de apă pentru sistem pluvial
- Termeni tehnici explicați în context

#### 3. **User Control and Freedom**
✅ **Implementat:**
- Buton "Scroll to Top" pentru navigare rapidă
- Posibilitate de închidere a overlay-ului de search (buton X)
- Toggle tema dark/light reversibil
- Carousel navigabil manual (săgeți) sau automat
- Resetare formular după submit

#### 4. **Consistency and Standards**
✅ **Implementat:**
- Header și footer identice pe toate paginile
- Stil uniform de butoane și carduri
- Spațiere consistentă (utilizare variabile CSS)
- Iconografie uniformă (aceeași bibliotecă Font Awesome)
- Structură de pagină predictibilă

#### 5. **Error Prevention**
✅ **Implementat:**
- Validare în timp real a formularului (blur events)
- Mesaje de eroare clare și specifice
- Input type corect (email, tel) pentru tastatură mobilă optimizată
- Câmpuri obligatorii marcate cu `required`
- Limită de caractere vizibilă pentru textarea

#### 6. **Recognition Rather Than Recall**
✅ **Implementat:**
- Navbar vizibilă permanent (fixed position)
- Breadcrumbs vizuale prin highlighting
- Iconuri descriptive lângă text
- Placeholder-uri în câmpurile formularului
- Tooltip-uri pe butoane hover

#### 7. **Flexibility and Efficiency of Use**
✅ **Implementat:**
- Shortcut-uri keyboard (Enter în search)
- Search global cross-pages
- Navigare rapidă prin scroll-to-top
- Tema dark pentru utilizare nocturnă
- Responsive design pentru multiple dispozitive

#### 8. **Aesthetic and Minimalist Design**
✅ **Implementat:**
- Design curat, spații albe generoase
- Paletă de culori limitată și coerentă
- Conținut prioritizat: titluri clare, paragrafe scurte
- Imagini cu scop informativ, nu decorativ
- Eliminarea elementelor redundante

#### 9. **Help Users Recognize, Diagnose and Recover from Errors**
✅ **Implementat:**
- Mesaje de eroare în limba română, clare
- Evidențiere vizuală câmp invalid (border roșu)
- Sugestii de corectare (ex: "Email-ul este invalid")
- Scroll automat la primul câmp cu eroare
- Pagină 404 personalizată cu linkuri de navigare

#### 10. **Help and Documentation**
✅ **Implementat:**
- Buton help flotant pe toate paginile (?)
- Secțiune FAQ pe pagina de contact
- Descrieri detaliate pe pagina "Despre"
- Informații de contact ușor accesibile
- README.md cu instrucțiuni tehnice

---

### 2.3 Principii de Proiectare Vizuală Implementate

#### **Contrast**
- Text alb pe fundal închis (dark mode): ratio 15:1
- Text închis pe fundal deschis (light mode): ratio 12:1
- Butoane cu culori contrastante (albastru #3b82f6 pe fundal alb)
- Hover effects pentru evidențiere interactivitate

#### **Repetition**
- Grid layout repetat pentru carduri (despre, sistem, galerie)
- Stil consistent de sectiuni (padding, margin, border-radius)
- Pattern de culori: albastru primary, verde success, roșu error
- Iconografie Font Awesome pe toate paginile

#### **Alignment**
- Centrat pe axa verticală pentru titluri principale
- Grid alignment pentru carduri (3 coloane desktop, 1 mobil)
- Text aliniat stânga pentru paragrafele lungi
- Navbar items distribuite uniform (space-between)

#### **Proximity**
- Grupare logică: formular contact separat de info contact
- Spațiere între secțiuni: 4rem (64px)
- Carduri grupate în grid-uri tematice
- Footer grupat pe 3 coloane: despre, linkuri, contact

#### **Color Theory**
- **Primary**: Albastru #3b82f6 (încredere, tehnologie)
- **Secondary**: Cyan #06b6d4 (apă, freshness)
- **Success**: Verde #10b981 (eco, natură)
- **Warning**: Portocaliu #f59e0b (atenție)
- **Error**: Roșu #ef4444 (erori, stop)
- **Neutral**: Gri #6b7280 (text secundar)

**Paleta Dark Mode**: Inversare cu menținerea contrastului
- Background: #0f172a (dark blue)
- Text: #f1f5f9 (off-white)

#### **Typography**
- Font principal: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI)
- Ierarhie clară: H1 (2.5rem) → H2 (2rem) → H3 (1.5rem) → p (1rem)
- Line-height: 1.6 pentru lizibilitate
- Letter-spacing ajustat pentru titluri mari

#### **White Space**
- Padding consistent: 2rem pentru containere
- Margin între secțiuni: 4rem
- Gap în grid-uri: 2rem
- Spațiu respiratoriu în carduri: padding 1.5rem

---

## 3. Structura Site-ului - Descrierea Paginilor

### 3.1 Pagina de Acasă (`index.php`)

**Funcționalitate:**
- Prezentare generală a sistemului SmartRain
- Hero section cu call-to-action
- Carousel cu 3 slide-uri despre beneficii
- Secțiune caracteristici (6 carduri)
- Video demonstrativ YouTube (responsive embed)
- Secțiune statistici (4 metrici)

**Elemente interactive:**
- Carousel automat (5s interval) + control manual
- Video player YouTube
- Butoane CTA hover effects
- Scroll animations pentru carduri

---

### 3.2 Pagina Despre (`despre.php`)

**Funcționalitate:**
- Prezentare detaliată concept SmartRain
- Misiune și viziune
- Avantaje ecologice și economice (grid 3 col)
- Obiective pe termen scurt/lung (listă)
- Impact și dezvoltare viitoare

**Elemente interactive:**
- Carduri hover cu shadow effects
- Iconuri animate la scroll
- Secțiune collapse/expand pentru obiective

---

### 3.3 Pagina Sistem (`sistem.php`)

**Funcționalitate:**
- Arhitectură tehnică a sistemului
- Componente hardware (tabel cu 10 elemente)
- Algoritmi de control (PI Control, Fuzzy Logic)
- Flux de operare (6 pași)
- Capabilități AI/ML (6 features)
- Specificații tehnice (4 categorii)

**Elemente interactive:**
- Tabel sortabil/filtrable (componente)
- Diagrame flow interactive
- Hover effects pe carduri algoritmi

---

### 3.4 Pagina Monitorizare (`monitorizare.php`)

**Funcționalitate:**
- Dashboard simulat cu metrici în timp real
- Grafice și vizualizări de date
- Parametri monitorizați (nivel apă, umiditate, temperatură)
- Alerte și notificări
- Istoric consumuri

**Elemente interactive:**
- Cards cu date dinamice (actualizate)
- Progress bars pentru nivele
- Color-coded alerts (roșu/galben/verde)
- Toggle pentru filtre date

---

### 3.5 Pagina Galerie (`galerie.php`)

**Funcționalitate:**
- Galerie foto cu imagini sistem (grid responsiv)
- Filtre categorii (Hardware, Software, Instalare)
- Lightbox pentru vizualizare mărită
- Search în galerie

**Elemente interactive:**
- Grid masonry layout (coloane variabile)
- Filtre click (active state)
- Modal lightbox pentru zoom imagini
- Lazy loading pentru performance

---

### 3.6 Pagina Contact (`contact.php`)

**Funcționalitate:**
- Formular contact complet validat
- Informații de contact (adresă, telefon, email, program)
- Hartă Google Maps integrată (Timișoara)
- Secțiune FAQ (5 întrebări frecvente)
- Social media links

**Elemente interactive:**
- Validare în timp real (JS + PHP)
- Character counter pentru textarea
- Accordion FAQ (expand/collapse)
- Google Maps iframe interactiv
- Auto-hide alerts după 5s

**Stocare date:**
- Mesaje salvate în `contact_messages.json`
- Format: `{date, name, email, phone, subject, message}`

---

## 4. Responsive Design - Adaptări pentru Mobil

### 4.1 Breakpoints Utilizate

```css
/* Mobile First Approach */
@media (max-width: 768px) { /* Tablets și mobile */ }
@media (max-width: 480px) { /* Mobile phones */ }
```

### 4.2 Elemente Adaptate

#### **Navbar**
- **Desktop**: Meniu orizontal, toate elementele vizibile
- **Mobile**: Hamburger menu (3 linii), drawer lateral slide-in
- **Transformare**: `display: flex` → `display: none` + toggle menu

#### **Grid Layouts**
- **Desktop**: `grid-template-columns: repeat(3, 1fr)` (3 coloane)
- **Tablet**: `grid-template-columns: repeat(2, 1fr)` (2 coloane)
- **Mobile**: `grid-template-columns: 1fr` (1 coloană stack)

#### **Typography**
- **Desktop**: H1 = 2.5rem (40px)
- **Mobile**: H1 = 1.75rem (28px)
- Reducere proporțională pentru toate heading-urile

#### **Carousel**
- **Desktop**: Slide width 100%, săgeți laterale vizibile
- **Mobile**: Swipe gestures, săgeți mai mici, text condensat

#### **Tabel (Sistem)**
- **Desktop**: Tabel clasic cu 4 coloane
- **Mobile**: Transformare în carduri stack, o linie pe rând

#### **Footer**
- **Desktop**: 3 coloane (despre, linkuri, contact)
- **Mobile**: 1 coloană stack, centrat

#### **Images**
- **Desktop**: Width fixă (400px)
- **Mobile**: Width 100%, height auto (fluid images)

#### **Forms**
- **Desktop**: Label-uri left-aligned, inputs width 50%
- **Mobile**: Full-width inputs, label-uri above

#### **Video Embed**
- **Desktop**: 16:9 ratio, width 800px
- **Mobile**: Responsive container, width 100%

#### **Map**
- **Desktop**: Height 450px
- **Mobile**: Height 300px, touch gestures enabled

#### **Buttons**
- **Desktop**: Padding 1rem 2rem, font-size 1rem
- **Mobile**: Padding 0.75rem 1.5rem, font-size 0.9rem, touch-friendly (min 44px height)

---

## 5. Funcționalități Speciale Implementate

### 5.1 Search Global
- Overlay full-screen cu input
- Căutare cross-pages prin JavaScript
- Highlight rezultate găsite
- ESC pentru închidere

### 5.2 Dark/Light Mode
- Toggle salvat în `localStorage`
- Tranziție smooth (0.3s)
- Iconografie adaptată (🌙/☀️)
- CSS variables pentru culori dinamice

### 5.3 Scroll to Top
- Buton flotant bottom-right
- Apare după scroll > 300px
- Smooth scroll animation

### 5.4 Help Button
- Buton flotant bottom-left (?)
- Click → modal cu ghid utilizare
- Disponibil pe toate paginile

### 5.5 Form Validation
- **Frontend**: JavaScript real-time (blur/input events)
- **Backend**: PHP sanitization și validare
- Mesaje eroare specifice în română
- Auto-scroll la primul câmp invalid

### 5.6 Google Analytics
- Tracking pageviews, events, user behavior
- Real-time monitoring disponibil
- Configurare G-YFC992KBTC

---

## 6. Structura Fișierelor

```
proiect/
├── index.php              # Pagina principală
├── despre.php             # Despre proiect
├── sistem.php             # Arhitectură tehnică
├── monitorizare.php       # Dashboard monitorizare
├── galerie.php            # Galerie foto
├── contact.php            # Formular contact
├── 404.php                # Pagina eroare
├── verificare.php         # Validare cerințe
├── contact_messages.json  # Date formular (auto-generated)
├── css/
│   ├── style.css          # Stiluri principale (2366 linii)
│   └── sistem.css         # (Deprecated - integrat în style.css)
├── js/
│   ├── script.js          # JavaScript principal
│   ├── contact.js         # Validare formular (279 linii)
│   ├── gallery.js         # Galerie interactivă
│   └── dashboard.js       # Dashboard monitorizare
├── images/
│   ├── gallery/           # Poze galerie
│   └── PLACEHOLDER.txt
└── .htaccess              # URL rewriting, security
```

---

## 7. Concluzii

Site-ul **SmartRain** respectă integral toate principiile moderne de design al interfețelor utilizator, oferind o experiență fluidă, accesibilă și estetică. Implementarea principiilor lui Nielsen asigură usability excelent, iar design-ul responsive garantează funcționalitate pe orice dispozitiv.

Tehnologiile folosite (HTML5, CSS3, JavaScript, PHP) sunt utilizate eficient pentru a crea un site web performant, securizat și ușor de întreținut.

---

**Data finalizării:** 20 noiembrie 2025  
**Versiune:** 1.0  
**Contact:** patrysimedre1@gmail.com
