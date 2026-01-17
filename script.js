// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Effets souris personnalisés
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  // Effet de glow subtil
  document.querySelectorAll('.experience-card').forEach(card => {
    const rect = card.getBoundingClientRect();
    const cardX = rect.left + rect.width / 2;
    const cardY = rect.top + rect.height / 2;
    
    const dist = Math.sqrt(
      Math.pow(e.clientX - cardX, 2) + 
      Math.pow(e.clientY - cardY, 2)
    );
    
    if (dist < 300) {
      const intensity = 1 - (dist / 300);
      card.style.setProperty('--glow-intensity', intensity);
    }
  });
});

// Tooltip pour les features
document.querySelectorAll('.feature').forEach(feature => {
  feature.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-2px) scale(1.05)';
  });
  feature.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Filtrage projets avec animation
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projects.forEach(project => {
      const shouldShow = filter === "all" || project.classList.contains(filter);
      
      if (shouldShow) {
        project.style.display = "block";
        setTimeout(() => {
          project.style.opacity = "1";
          project.style.transform = "translateY(0) scale(1)";
        }, 10);
      } else {
        project.style.opacity = "0";
        project.style.transform = "translateY(20px) scale(0.95)";
        setTimeout(() => {
          project.style.display = "none";
        }, 300);
      }
    });
  });
});

// Animation des projets à l'apparition
projects.forEach((project, index) => {
  project.style.opacity = "1";
  project.style.transform = "translateY(0) scale(1)";
  project.style.transition = "opacity 0.3s ease, transform 0.3s ease";
});

// Ancien code supprimé - remplacé par EmailJS ci-dessous

// Animation au scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".timeline-item, .project, .skills-grid ul").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// Navigation active state avec animation
let currentSection = "";

window.addEventListener("scroll", () => {
  let current = "";
  
  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 250) {
      current = section.getAttribute("id");
    }
  });
  
  if (current !== currentSection) {
    currentSection = current;
    
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.style.color = "#ccc";
      if (link.getAttribute("href").slice(1) === current) {
        link.style.color = "#00d4ff";
        link.style.textShadow = "0 0 10px rgba(0, 212, 255, 0.5)";
      } else {
        link.style.textShadow = "none";
      }
    });
  }
});

// Ajouter animations CSS dynamiques
const style = document.createElement('style');
style.textContent = `
  @keyframes popIn {
    0% { transform: scale(0.8); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
  .feature {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
`;
document.head.appendChild(style);
// Gestion du formulaire de contact avec EmailJS
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = '❌ Veuillez remplir tous les champs';
      formStatus.style.color = '#ff6b6b';
      return;
    }

    formStatus.textContent = '📧 Envoi en cours...';
    formStatus.style.color = '#00d4ff';

    try {
      // Envoyer via EmailJS
      const response = await emailjs.send(
        'service_portfolio',
        'portfolio_contact',
        {
         
          from_name: name,
          from_email: email,
          message: message,
          reply_to: email
        }
      );

      if (response.status === 200) {
        formStatus.textContent = '✅ Message envoyé avec succès!';
        formStatus.style.color = '#00d4ff';
        contactForm.reset();
        setTimeout(() => {
          formStatus.textContent = '';
        }, 3000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      
      // Fallback: mailto automatique
      const mailtoLink = `mailto:mamoudou.wone@etu.ec-lyon.fr?subject=Contact Portfolio - ${encodeURIComponent(name)}&body=${encodeURIComponent('Nom: ' + name + '\n\nEmail: ' + email + '\n\nMessage: ' + message)}`;
      
      formStatus.innerHTML = `
        ⚠️ EmailJS non configuré.<br><br>
        <strong>Alternatives:</strong><br>
        1. <a href="${mailtoLink}" style="color: #00d4ff; text-decoration: underline; font-weight: bold;">Envoyer via email</a><br><br>
        2. Contactez directement:<br>
        📧 <a href="mailto:mamoudou.wone@etu.ec-lyon.fr" style="color: #00d4ff;">mamoudou.wone@etu.ec-lyon.fr</a><br>
        📱 <a href="tel:+33602768123" style="color: #00d4ff;">+33 6 02 76 81 23</a>
      `;
      formStatus.style.color = '#ffa500';
    }
  });
}