# 🎯 Portfolio – Mamoudou Wone
## Data Science & IA Engineer

**Portfolio interactif showcase professionnel** avec design époustouflant et 14+ projets réels.

---

## 📋 Table des Matières

1. **[Stages & Expériences](#-stages--expériences)**
2. **[Projets](#-projets)**
   - Machine Learning (7)
   - Développement Web (3)
   - IA Avancée (4)
3. **[Design & Technologie](#-design--technologie)**
4. **[Installation & Utilisation](#-installation--utilisation)**

---

## 🏆 Stages & Expériences

### 1. **D&A Technologies** (3 mois, 2025)
- **Rôle** : Développeur Data/IA
- **Localisation** : Maroc
- **Missions** :
  - Conception d'un système de génération de dashboards à partir de prompts textuels
  - Développement d'une pipeline d'extraction et transformation JSON
  - Mise en place d'un processus automatisé pour dashboards interactifs
- **Résultat** : Système automatisé générant dashboards complexes en quelques secondes

### 2. **KEYMYSTERY** – Consultant Innovation (4 mois, 2025)
- **Rôle** : Consultant Innovation
- **Localisation** : Maroc
- **Missions** :
  - Prospection et acquisition de nouveaux clients
  - Création et structuration d'une base de données optimisée
  - Développement d'outils analytiques pour l'aide à la décision
- **Résultat** : +40% du portefeuille clients et dashboards décisionnels

### 3. **AutoHall** (2 mois, 2024)
- **Rôle** : Développeur Web
- **Localisation** : Maroc
- **Missions** :
  - Conception et développement d'une plateforme web interactive
  - Digitalisation du processus d'affectation de compte
  - Gestion agile avec sprints
- **Résultat** : Plateforme déployée, délais réduits de 60%

---

## 🚀 Projets

### **Data & Machine Learning** (7 projets)

#### 🔍 Détection de Fraude
- **Description** : Classification supervisée sur données fortement déséquilibrées
- **Algorithmes** : Random Forest, XGBoost, SVM, KNN
- **Techniques** : ACP, SMOTE, Tomek Links, rééquilibrage
- **Stack** : Python, Scikit-learn, Imbalanced-learn

#### 📊 Analyse PCA – Décathlon
- **Description** : Analyse multivariée pour profils de performance
- **Techniques** : PCA, clustering, segmentation
- **Stack** : Python, Pandas, Matplotlib

#### 📞 Prédiction Churn Client
- **Description** : Modélisation du churn télécommunications
- **Techniques** : EDA, gestion déséquilibre, interprétabilité
- **Stack** : Python, XGBoost, SHAP

#### ✉️ Détection de Spam
- **Description** : Classification textuels (spam/non-spam)
- **Techniques** : NLP, TF-IDF, Word2Vec
- **Stack** : Python, NLTK, Scikit-learn

#### 🕷️ Web Scraping
- **Description** : Collecte automatisée de données web
- **Techniques** : Parsing HTML/CSS, structuration données
- **Stack** : Python, BeautifulSoup, Selenium

#### 📉 Optimisation & Descente de Gradient
- **Description** : Implémentation de méthodes d'optimisation
- **Techniques** : SGD, analyse convergence, tuning
- **Stack** : Python, NumPy, Matplotlib

#### 🔄 Analyse Traces Copilote – Infologic
- **Description** : Traitement automatique de traces d'utilisation du logiciel Copilote (secteur agro-alimentaire)
- **Objectif** : Identifier patterns d'usage, insights clients, optimisation produit
- **Analyses** : Usage patterns, user segmentation, feature adoption, churn prediction, anomalies
- **Composants** : ETL pipeline, feature engineering, clustering, anomaly detection
- **Livrables** : Dashboards KPIs, rapports insights, recommandations produit, modèles prédictifs
- **Stack** : Python, Spark/Pandas, PostgreSQL, ML models (KMeans, Isolation Forest)

---

### **Développement Web** (3 projets)

#### 🏠 EasyRent
- **Description** : Plateforme de location (chercheurs ↔ bailleurs)
- **Fonctionnalités** : Matching, gestion annonces, dashboard
- **Stack** : React, Node.js, MongoDB

#### 🍔 Restaurant App
- **Description** : Application SaaS complète
- **Fonctionnalités** : 
  - Admin : gestion catalogue produits
  - Caissier : prise commandes, facturation auto
- **Stack** : Next.js, TypeScript, Prisma

#### 🎯 Quiz Generator
- **Description** : PDF → Quizz interactif avec LLM
- **Fonctionnalités** : Extraction, structuration, génération quiz
- **Stack** : LangChain, OpenAI, React

---

### **IA Avancée** (4 projets)

#### 💰 Finance ChatBot – RAG Assistant
**Assistant IA pour analyse documentaire**
- **Architecture** : FastAPI + Streamlit + ChromaDB
- **Fonctionnalités** :
  - Upload & indexation PDF
  - Recherche sémantique vectorielle
  - Chat RAG intelligent avec sources
  - Filtrage par tags et pages
  - Dashboard analytique
- **Stack** : Python, RAG, Vector DB, PostgreSQL
- **[📄 Détails complets](project-details.html)**

#### 🧠 Image Classifier – MobileNetV2
**Classification d'images en temps réel**
- **Architecture** : Streamlit multi-pages avec dashboard admin
- **Fonctionnalités** :
  - Upload d'images ou webcam
  - Inférence temps réel (MobileNetV2)
  - Dashboard admin sécurisé
  - Système de feedback et correction
  - Analytics & confusion patterns
- **Stack** : Streamlit, TensorFlow, MobileNetV2, ImageNet
- **[📄 Détails complets](project-details.html)**

#### 📋 Moteur de Recherche Sémantique – Articles
**Système de recommandation basé sur NLP**
- **Architecture** : Pipeline embeddings → similarité → ranking
- **Problème** : Classer ~30 articles (5 positifs + 25 négatifs) selon proximité sémantique
- **Approche** :
  - Embeddings textuels (Word2Vec/FastText/Transformers)
  - Calcul similarité cosinus
  - Ranking & optimisation
  - Gestion déséquilibre classe (5 vs 25)
- **Métriques** : MRR, NDCG, Precision@5, AUC
- **Stack** : Python, NLP, Embeddings, SciPy
- **[📄 Détails complets](project-details.html)**

#### 🎬 Generator_Vid – Texte to Vidéo
- **Description** : Pipeline complète texte → vidéo automatique
- **Flux** :
  1. LLM génère histoire
  2. Récupération images Pixabay
  3. Génération audio
  4. Montage vidéo automatique
- **Stack** : Python, OpenAI, FFmpeg, API Pixabay

---

## 🎨 Design & Technologie

### **Frontend Design**
- ✨ Dégradés modernes (bleu → cyan)
- 🎭 Animations fluides (fade-in, float, pulse)
- 🌟 Effets micro-interactions (hover, scroll)
- 📱 Responsive design (mobile-first)
- 🎯 Icons emoji personnalisées

### **Stack Frontend**
```
HTML5 + CSS3 (Custom)
├── Gradients & animations
├── Glassmorphism & backdrop-filter
├── Flexbox & CSS Grid
└── Keyframe animations

JavaScript (Vanilla)
├── Smooth scroll
├── Filter animations
├── Intersection Observer
├── Event listeners
└── Dynamic styling
```

### **Fonctionnalités Interactives**
- ✅ Filtrage projets par catégorie
- ✅ Smooth scroll vers sections
- ✅ Navigation active au scroll
- ✅ Tooltips et hover effects
- ✅ Validation formulaire
- ✅ Animations au scroll

---

## 📦 Installation & Utilisation

### **Prérequis**
- Navigateur moderne (Chrome, Firefox, Safari, Edge)
- Pas de dépendances externes !

### **Installation locale**

1. **Cloner/télécharger le projet**
```bash
cd portfolio
```

2. **Lancer un serveur local**
```bash
# Python 3
python -m http.server 8000

# Puis ouvrir : http://localhost:8000
```

3. **Ou ouvrir directement**
```bash
# Double-click sur index.html
```

### **Structure des fichiers**
```
portfolio/
├── index.html              # Page principale
├── project-details.html    # Pages détails projets
├── style.css              # Styles (932 lignes)
├── script.js              # Interactions (180+ lignes)
└── README.md              # Ce fichier
```

---

## 🔧 Personnalisation

### **Modifier les informations**
- `index.html` : Contenu principal
- `style.css` : Couleurs, fonts, animations
- `script.js` : Interactions dynamiques

### **Changer les couleurs**
Chercher et remplacer les couleurs principales :
- `#6c63ff` : Bleu primaire
- `#00d4ff` : Cyan accentué
- `#0b0f1a` : Noir foncé

### **Ajouter un nouveau projet**
```html
<div class="project web"> <!-- Changer la catégorie -->
  <div class="project-icon">🎨</div>
  <h4>Nom du projet</h4>
  <p>Description...</p>
  <div class="features-list">
    <span class="feature">✨ Feature 1</span>
    <span class="feature">🚀 Feature 2</span>
  </div>
  <ul class="tech-list">
    <li>Tech 1</li>
    <li>Tech 2</li>
  </ul>
  <span>Catégories</span>
  <div class="links">
    <a href="#">Code</a>
    <a href="#">Démo</a>
  </div>
</div>
```

---

## 📊 Statistiques

| Catégorie | Nombre |
|-----------|--------|
| **Projets ML/Data** | 6 |
| **Projets Web** | 3 |
| **Projets IA Avancée** | 4 |
| **Total** | 12+ |
| **Stages** | 3 |
| **Lignes CSS** | 932 |
| **Lignes JS** | 180+ |

---

## 🎯 Points forts

✅ **Design personnalisé** : Pas de template générique  
✅ **Animations sophistiquées** : Micro-interactions élégantes  
✅ **Projets réels & détaillés** : Documentation complète  
✅ **Performance** : Zéro dépendances externes  
✅ **Responsive** : Mobile-first design  
✅ **SEO-friendly** : Structure sémantique  
✅ **Accessible** : WCAG compliant  

---

## 📞 Contact

- **Email** : [email@example.com](mailto:email@example.com)
- **GitHub** : [github.com/mamoudou](https://github.com)
- **LinkedIn** : [linkedin.com/in/mamoudou](https://linkedin.com)

---

## 📄 Licence

© 2026 – Mamoudou Wone. Tous droits réservés.

---

**Créé avec ❤️ et design époustouflant** ✨
