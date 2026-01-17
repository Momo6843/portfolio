// Configuration et Personnalisation du Portfolio
// Modifiez ces valeurs pour adapter le portfolio à vos besoins

const CONFIG = {
  // Informations personnelles
  OWNER: {
    name: "Mamoudou Wone",
    title: "Étudiant ingénieur – Data & Intelligence Artificielle",
    description: "Je conçois des solutions data et intelligence artificielle robustes, mesurables et prêtes à être déployées",
    email: "email@example.com"
  },

  // Couleurs (à synchroniser avec style.css)
  COLORS: {
    primary: "#6c63ff",
    secondary: "#00d4ff",
    darkBg: "#0b0f1a",
    textLight: "#eaeaf0",
    textMuted: "#b0b5cc"
  },

  // Animations
  ANIMATIONS: {
    transitionFast: "0.2s ease",
    transitionNormal: "0.3s ease",
    transitionSlow: "0.6s ease"
  },

  // Filtres de projets
  FILTERS: {
    all: "Tous",
    web: "Développement Web",
    data: "Data & Machine Learning",
    ai: "IA Avancée"
  },

  // Navigation
  NAV_LINKS: [
    { text: "À propos", href: "#about" },
    { text: "Expériences", href: "#experience" },
    { text: "Projets", href: "#projects" },
    { text: "Compétences", href: "#skills" },
    { text: "Contact", href: "#contact" }
  ],

  // Réseaux sociaux
  SOCIAL: [
    { name: "GitHub", url: "https://github.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Email", url: "mailto:email@example.com" }
  ],

  // Messages de validation
  MESSAGES: {
    formSuccess: "✓ Message prêt à être envoyé!",
    formError: "✗ Veuillez remplir tous les champs",
    formErrorColor: "#ff6b6b"
  },

  // Configurations avancées
  ADVANCED: {
    smoothScroll: true,
    parallax: true,
    mouseTracking: true,
    intersectionObserver: true,
    analyticsEnabled: false
  }
};

// Fonction pour charger la configuration
function loadConfig() {
  console.log("📋 Configuration chargée");
  console.log(CONFIG);
  return CONFIG;
}

// Fonction pour mettre à jour les couleurs dynamiquement
function updateTheme(colors) {
  const root = document.documentElement;
  Object.keys(colors).forEach(key => {
    root.style.setProperty(`--${key}`, colors[key]);
  });
}

// Fonction pour valider la configuration
function validateConfig() {
  const required = ['name', 'email'];
  const checks = required.map(field => {
    const valid = CONFIG.OWNER[field] && CONFIG.OWNER[field].trim() !== '';
    console.log(`✓ ${field}: ${valid ? '✅' : '❌'}`);
    return valid;
  });
  return checks.every(c => c);
}

// Mode sombre/clair (à développer)
function toggleTheme() {
  const isDark = document.body.classList.toggle('light-theme');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// Initialiser la configuration au chargement
document.addEventListener('DOMContentLoaded', () => {
  loadConfig();
  validateConfig();
});

// Export pour utilisation en modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
