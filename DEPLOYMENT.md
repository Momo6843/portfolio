# 🚀 Guide de Déploiement

## Options de déploiement du Portfolio

### **Option 1 : GitHub Pages (Gratuit & Rapide)**

#### Étapes :
1. **Créer un repo GitHub**
   ```bash
   # Sur GitHub.com, créer un nouveau repository
   # Nommez-le : portfolio
   ```

2. **Cloner et pousser vos fichiers**
   ```bash
   git clone https://github.com/votreusername/portfolio.git
   cd portfolio
   
   # Copier vos fichiers (index.html, style.css, script.js, etc.)
   
   git add .
   git commit -m "Initial portfolio commit"
   git push origin main
   ```

3. **Activer GitHub Pages**
   - Aller sur Settings → Pages
   - Sélectionner "main" branch
   - Cliquer Save
   - ✅ Votre site est en ligne sur : `https://votreusername.github.io/portfolio`

---

### **Option 2 : Netlify (Très simple)**

#### Étapes :
1. **Aller sur [netlify.com](https://netlify.com)**

2. **Drag & drop votre dossier**
   - Cliquer "New site from Git"
   - Sélectionner votre repo GitHub
   - Netlify déploie automatiquement
   - ✅ URL généré : `https://votreportfolio.netlify.app`

#### Avantages :
- Déploiement automatique à chaque push
- HTTPS gratuit
- Custom domain possible
- Analytics inclus

---

### **Option 3 : Vercel (Optimisé Performance)**

#### Étapes :
1. **Aller sur [vercel.com](https://vercel.com)**

2. **Importer depuis GitHub**
   - Cliquer "Import Project"
   - Sélectionner votre repo
   - Vercel configure automatiquement
   - ✅ Site live en quelques secondes

#### Avantages :
- Optimisation automatique
- CDN global
- Edge caching
- Analytics temps réel

---

### **Option 4 : Hébergement Web Standard (Paid)**

#### Providers populaires :
- **OVH** / **1&1** / **Hostinger**

#### Étapes :
1. **Acheter un plan d'hébergement**

2. **Uploader via FTP**
   ```bash
   # Utiliser FileZilla ou un client FTP
   # Connecter avec vos credentials
   # Drag & drop les fichiers dans /public_html
   ```

3. **Accéder via votre domaine**
   - ✅ `https://votredomaine.com`

---

### **Option 5 : Hébergement Personnalisé (Serveur Local/VPS)**

#### Avec Python (Développement)
```bash
cd portfolio
python -m http.server 8000
# Accès : http://localhost:8000
```

#### Avec Node.js
```bash
npm install -g http-server
http-server
# Accès : http://localhost:8080
```

#### Sur VPS (Production)
```bash
# Utiliser Nginx/Apache
# Configuration exemple Nginx :

server {
    listen 80;
    server_name votredomaine.com;
    root /var/www/portfolio;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 🔧 Configuration avant Déploiement

### **1. Vérifier tous les liens**
- [ ] Navigation interne fonctionne
- [ ] Liens externes valides
- [ ] Formulaire contact configuré
- [ ] Images chargent correctement

### **2. SEO Optimization**
```html
<!-- À ajouter dans <head> -->
<meta name="description" content="Portfolio de Mamoudou Wone – Data & IA">
<meta name="keywords" content="Data Science, Machine Learning, IA">
<meta name="author" content="Mamoudou Wone">
<meta property="og:title" content="Portfolio – Mamoudou Wone">
<meta property="og:description" content="Portfolio professionnel Data & IA">
<meta property="og:image" content="screenshot.png">
```

### **3. Performance Checklist**
- [ ] CSS minifiés
- [ ] JS minifiés
- [ ] Images optimisées
- [ ] Pas de console errors
- [ ] Lighthouse score > 90

### **4. Mobile Testing**
```bash
# Tester sur chrome DevTools
# Ctrl+Shift+I → Toggle device toolbar
```

---

## 📊 Comparaison Options de Déploiement

| Critère | GitHub Pages | Netlify | Vercel | OVH | VPS |
|---------|-------------|---------|--------|-----|-----|
| **Coût** | Gratuit | Gratuit | Gratuit | Payant | Payant |
| **Facilité** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐ |
| **Performance** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **HTTPS** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Custom Domain** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Deploy Auto** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **CDN Global** | ✅ | ✅ | ✅ | Partiel | Non |

---

## 🎯 Recommandation

**Pour débuter** : **Netlify** (gratuit, facile, rapide)
- Drag & drop ou Git integration
- Déploiement automatique
- HTTPS gratuit
- Custom domain possible

**Pour production** : **Vercel** (optimisé)
- Performance maximale
- Global CDN
- Scaling automatique

**Pour portfolio** : **GitHub Pages** (classique)
- Gratuit à vie
- Intégration Git native
- Simple et efficace

---

## 📝 Checklist Déploiement Final

- [ ] Tous les liens fonctionnent
- [ ] Responsive sur mobile
- [ ] Images chargent vite
- [ ] Pas d'erreurs console
- [ ] Meta tags SEO OK
- [ ] Formulaire configuré
- [ ] Domaine custom (optionnel)
- [ ] SSL/HTTPS actif
- [ ] Analytics configuré
- [ ] Sitemap.xml créé

---

## 🆘 Troubleshooting

### **Images ne chargent pas**
```css
/* Ajouter paths relatives */
background-image: url('./images/bg.jpg'); /* Pas url('/images/bg.jpg') */
```

### **Styles ne s'appliquent pas**
```html
<!-- Vérifier l'ordre des fichiers -->
<link rel="stylesheet" href="./style.css"> <!-- Avant script.js -->
<script src="./script.js"></script>
```

### **Navigation ne fonctionne pas**
```javascript
// Vérifier que smooth scroll est actif
document.querySelectorAll('a[href^="#"]').length > 0
```

---

## 📊 Monitoring Post-Déploiement

### **Google Analytics**
```html
<!-- Ajouter dans <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### **Outils de monitoring**
- Google Search Console
- Lighthouse CI
- Uptime Robot
- StatusPage

---

**Bon déploiement ! 🚀**
