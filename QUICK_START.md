# 🚀 Quick Start Guide

## Bienvenue sur votre Portfolio ! 👋

Ce guide vous aide à démarrer rapidement avec votre nouveau portfolio professionnel.

---

## ⚡ 5 Minutes pour Démarrer

### **Étape 1 : Ouvrir le Portfolio**
```bash
# Option A : Double-click sur index.html
open index.html

# Option B : Serveur local (recommandé)
python -m http.server 8000
# Ouvrir : http://localhost:8000
```

### **Étape 2 : Personnaliser les infos**
Éditer `index.html` :
- Ligne 9 : Votre titre
- Ligne 15 : Votre description
- Ligne 18 : Lien CV
- Ligne 35+ : À propos

### **Étape 3 : Changer les couleurs**
Éditer `style.css` :
```css
/* Chercher et remplacer */
#6c63ff  → votre bleu
#00d4ff  → votre cyan
#0b0f1a  → votre noir
```

### **Étape 4 : Ajouter vos projets**
Dans `index.html`, section `#projects` :
```html
<div class="project web">
  <div class="project-icon">🎨</div>
  <h4>Titre projet</h4>
  <p>Description...</p>
  <!-- ... -->
</div>
```

### **Étape 5 : Déployer**
- ✅ [Netlify](https://netlify.com) (Drag & drop)
- ✅ [GitHub Pages](https://pages.github.com) (Push to main)
- ✅ [Vercel](https://vercel.com) (Import from Git)

---

## 📁 Structure des fichiers

```
portfolio/
├── index.html              ← Page principale 📄
├── project-details.html    ← Détails projets
├── style.css              ← Styles & animations 🎨
├── script.js              ← Interactions 🔧
├── config.js              ← Configuration
├── variables.css          ← Variables CSS
├── README.md              ← Documentation
├── DEPLOYMENT.md          ← Guide déploiement
└── QUICK_START.md         ← Ce fichier
```

---

## 🎨 Personnalisation Rapide

### **Changer le logo**
```html
<!-- Ligne 33 : index.html -->
<span class="logo">MW</span>  ← Remplacer par vos initiales
```

### **Changer la photo/avatar**
```css
/* À ajouter dans style.css */
.hero::before {
  background: url('votre-image.jpg') no-repeat center;
  background-size: cover;
}
```

### **Ajouter des liens externes**
```html
<!-- Dans .contact-links -->
<a href="https://github.com/votreprofile">GitHub</a>
<a href="https://linkedin.com/in/votreprofil">LinkedIn</a>
```

---

## ✨ Astuces d'utilisation

### **Ajouter une nouvelle section**
```html
<section id="votre-section" class="section container">
  <h3>Votre titre</h3>
  <!-- Votre contenu -->
</section>

<!-- Ajouter le lien dans nav -->
<li><a href="#votre-section">Votre section</a></li>
```

### **Modifier les animations**
```css
/* Chercher @keyframes dans style.css */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
/* Ajuster translateY(30px) pour plus/moins d'animation */
```

### **Ajouter un effet hover**
```css
.mon-element:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
}
```

---

## 🔍 Test & Debug

### **Vérifier la console**
```javascript
// Ouvrir DevTools : F12 ou Ctrl+Shift+I
// Onglet Console
// Chercher les erreurs en rouge
```

### **Tester la responsivité**
```
F12 → Toggle device toolbar → Choisir device
Ou : Ctrl+Shift+M
```

### **Valider le HTML**
```
Aller sur : https://validator.w3.org/
Coller votre HTML
```

---

## 📊 Checklist Personnalisation

- [ ] Nom et titre mis à jour
- [ ] Description personnalisée
- [ ] Photo/avatar ajoutée
- [ ] Couleurs changeées
- [ ] Expériences mises à jour
- [ ] Projets ajoutés
- [ ] Compétences listées
- [ ] Email contact correct
- [ ] Liens réseaux sociaux
- [ ] CV lié/téléchargeable

---

## 🚀 Déploiement Rapide

### **Netlify (30 secondes)**
1. Aller sur [netlify.com](https://netlify.com)
2. Drag & drop votre dossier `portfolio`
3. ✅ Site live !

### **GitHub Pages (2 minutes)**
```bash
git init
git add .
git commit -m "Portfolio"
git remote add origin https://github.com/votreusername/portfolio.git
git push -u origin main

# Aller sur Settings → Pages → main branch → Save
```

### **Vercel (1 minute)**
1. Connecter votre GitHub
2. Import project
3. ✅ Deployed !

---

## 💡 Conseils Pro

1. **Performance** : Compresser les images avant upload
2. **SEO** : Remplir les meta tags (ogTitle, ogDescription)
3. **Mobile** : Tester sur phone/tablet
4. **Backup** : Sauvegarder localement + Git
5. **Analytics** : Ajouter Google Analytics
6. **Monitoring** : Uptime Robot pour vérifier disponibilité

---

## 🆘 Aide & Support

### **Le site ne charge pas**
- Vérifier internet
- Vider cache (Ctrl+Shift+Delete)
- Essayer incognito
- Checker console (F12)

### **Styles ne s'appliquent pas**
- Vérifier chemin fichier CSS
- Pas d'erreur 404 (F12 → Network)
- Forcer refresh (Ctrl+F5)

### **Navigation ne fonctionne pas**
- Vérifier les `href="#section"`
- Sections ont un `id="section"` ?
- JS enable dans navigateur ?

### **Formulaire n'envoie rien**
- C'est normal ! Le formulaire affiche juste un message
- Pour l'email réel : intégrer Formspree/Netlify Forms

---

## 📚 Ressources Utiles

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS Tricks](https://css-tricks.com)
- [Web.dev](https://web.dev)
- [Can I Use](https://caniuse.com)

---

## 🎯 Prochaines étapes

1. ✅ Personnaliser le contenu
2. ✅ Ajouter vos projets réels
3. ✅ Tester sur mobile
4. ✅ Déployer en ligne
5. ✅ Partager votre URL
6. ✅ Suivre les stats (Analytics)

---

**Besoin d'aide ? Consultez [README.md](README.md) pour plus de détails !**

---

**Bon courage ! 🚀✨**
