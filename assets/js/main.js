lucide.createIcons();

// ========================================
// ANIMATIONS AU SCROLL
// ========================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-in').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// ========================================
// EFFET TYPING SUR LE TITRE
// ========================================
const headerTitle = document.querySelector('.cv-header h1');
const originalText = headerTitle.textContent;
let charIndex = 0;

function typeWriter() {
  if (charIndex === 0) {
    headerTitle.textContent = '';
  }
  if (charIndex < originalText.length) {
    headerTitle.textContent += originalText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener('load', () => {
  setTimeout(typeWriter, 500);
});

// ========================================
// MODAL POUR DÉTAILS EXPÉRIENCE
// ========================================
const modal = document.getElementById('experienceModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

const experienceDetails = {
  'HOP': {
    title: 'Tech Lead – Applications RH | HOP',
    period: 'Nov. 2023 - Aujourd\'hui',
    company: 'Mission via Néo-Soft Groupe | Nantes',
    details: `
          <h3 style="color: #37474f; margin-bottom: 15px;">Contexte</h3>
          <p style="margin-bottom: 20px; line-height: 1.7; color: #546e7a;">
            Responsable technique des applications RH, j'assure la conception d'APIs pour le Data Hub et l'encadrement 
            des développements batch. Mon rôle inclut également la mise en place de flux automatisés et des pratiques 
            DevOps pour fiabiliser et accélérer les mises en production.
          </p>
          <h3 style="color: #37474f; margin-bottom: 15px;">Réalisations détaillées</h3>
          <ul style="line-height: 1.8; color: #546e7a;">
            <li>Conception et livraison d'APIs performantes avec Java 21 et Spring Boot pour le Data Hub</li>
            <li>Encadrement d'un CDS sur le développement de batchs (Java 21, Spring Batch) : création de tickets Jira, revue de code et validation</li>
            <li>Mise en place et supervision des flux avec JS7, optimisant la planification et la fiabilité</li>
            <li>Utilisation de l'API du Job Scheduler 7 (JS7) via Ansible et un pipeline GitLab pour automatiser l'installation</li>
            <li>Réduction des mises en production de plus d'une journée à seulement quelques minutes (gain estimé >99%)</li>
            <li>Réalisation de tâches DevOps : pipelines GitLab CI, intégration avec Vault et Ansible</li>
            <li>Réduction du temps de déploiement de 40%</li>
            <li>Intervention sur serveurs Linux en recette pour diagnostiquer et corriger des incidents critiques</li>
          </ul>
          <h3 style="color: #37474f; margin: 20px 0 15px;">Technologies</h3>
          <p style="color: #546e7a;">Java 21, Spring Boot, Spring Batch, JS7, GitLab CI, Vault, Ansible, Docker, Linux, Jira</p>
        `
  },
  'ASP': {
    title: 'Développeur Back-End | ASP',
    period: 'Mai 2023 - Oct. 2023',
    company: 'Mission via Néo-Soft Groupe | Nantes',
    details: `
          <h3 style="color: #37474f; margin-bottom: 15px;">Contexte</h3>
          <p style="margin-bottom: 20px; line-height: 1.7; color: #546e7a;">
            Intégré à l'équipe Data Lake, j'ai conçu un batch de secours pour pallier les dysfonctionnements du CDC 
            et développé une API de gestion du stockage objet (AWS) afin de faciliter les interactions entre les équipes 
            et l'infrastructure.
          </p>
          <h3 style="color: #37474f; margin-bottom: 15px;">Réalisations détaillées</h3>
          <ul style="line-height: 1.8; color: #546e7a;">
            <li>Conçu et développé un batch multi-thread (Spring Batch, Java 11) pour l'initialisation de tables et la simulation de flux CDC</li>
            <li>Réduction du temps de traitement de 50%</li>
            <li>Développé une API Spring Boot (Java 17) fournissant une surcouche au système de stockage objet AWS de l'ASP</li>
            <li>Gestion des buckets, objets, métadonnées et génération de tokens</li>
            <li>API utilisée par plus de 5 équipes</li>
            <li>Configuré et adapté les livrables selon les environnements, assurant un déploiement sans erreur</li>
            <li>Implémenté des tests unitaires et d'intégration (JUnit, Mockito) avec une couverture supérieure à 85%</li>
            <li>Administré des bases Oracle Cloud 12c et PostgreSQL</li>
            <li>Rédigé des documentations techniques et utilisateurs</li>
          </ul>
          <h3 style="color: #37474f; margin: 20px 0 15px;">Technologies</h3>
          <p style="color: #546e7a;">Java 11/17, Spring Boot, Spring Batch, AWS S3, SQL, Oracle Cloud 12c, PostgreSQL, Maven, Git, IntelliJ IDEA, DBeaver, Confluence, Jira</p>
        `
  },
  'LS2N': {
    title: 'Ingénieur de Recherche | LS2N - Polytech\' Nantes',
    period: 'Nov. 2011 - Déc. 2017',
    company: 'Équipe IPI (Image, Perception, Interaction) | Nantes',
    details: `
          <h3 style="color: #37474f; margin-bottom: 15px;">Contexte</h3>
          <p style="margin-bottom: 20px; line-height: 1.7; color: #546e7a;">
            Au sein de l\'équipe IPI, j\'ai travaillé sur des projets de recherche liés à la qualité d\'image et de vidéo.
            Mes travaux ont porté sur la conception de systèmes de caméras innovants et l\'évaluation de la qualité
            perçue par les utilisateurs, en collaboration avec des partenaires industriels et académiques.
          </p>
          <h3 style="color: #37474f; margin-bottom: 15px;">Réalisations détaillées</h3>
          <ul style="line-height: 1.8; color: #546e7a;">
            <li>Conception et évaluation de caméras 360° et plénoptiques.</li>
            <li>Réalisation de tests de qualité subjective pour des projets comme Netflix, UltraHD-4U, et ITEA2 JEDI (médaille d\'or 2012).</li>
            <li>Co-auteur de 4 articles scientifiques sur la qualité vidéo et l\'évaluation subjective.</li>
          </ul>
          <h3 style="color: #37474f; margin: 20px 0 15px;">Technologies</h3>
          <p style="color: #546e7a;">Matlab, C++, Python, Évaluation subjective, Qualité d\'image et vidéo</p>
        `
  }
};

// Ajouter des listeners sur les items d'expérience
document.querySelectorAll('.experience-item').forEach(item => {
  const key = item.dataset.experienceKey;

  // Appliquer les styles et effets pour tous les items cliquables
  if (key && experienceDetails[key]) {
    item.style.cursor = 'pointer';
    item.style.transition = 'all 0.3s ease';

    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = 'rgba(102, 126, 234, 0.05)';
      item.style.marginLeft = '10px';
    });

    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = 'transparent';
      item.style.marginLeft = '0';
    });

    item.addEventListener('click', () => {
      const data = experienceDetails[key];
      let modalHTML = `
        <h2 style="color: #37474f; margin-bottom: 10px; font-size: 1.5rem;">${data.title}</h2>
        <p style="color: #78909c; font-style: italic; margin-bottom: 5px; font-size: 0.9rem;">${data.period}</p>
        <p style="color: #78909c; margin-bottom: 25px; font-size: 0.9rem;">${data.company}</p>
        ${data.details}
      `;

      if (key === 'LS2N') {
        const publicationsTemplate = document.getElementById('publications-template');
        if (publicationsTemplate) {
          modalHTML += publicationsTemplate.innerHTML;
        }
      }

      modalContent.innerHTML = modalHTML;
      modal.style.display = 'flex';
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  }
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  modal.classList.remove('is-open');
  document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modal.classList.remove('is-open');
    document.body.style.overflow = 'auto';
  }
});

// ========================================
// EFFETS HOVER SUR LES BADGES TECH
// ========================================
document.querySelectorAll('.cv-right-column [style*="grid"]').forEach(grid => {
  grid.querySelectorAll('div[style*="padding: 8px"]').forEach(badge => {
    badge.style.transition = 'all 0.3s ease';
    
    // Hover visuel
    badge.addEventListener('mouseenter', function(e) {
      this.style.transform = 'translateY(-5px) scale(1.05)';
      this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
      this.style.background = 'rgba(255,255,255,0.2)';
      
      // Tooltip hors flux si le badge possède data-tooltip
      const text = this.getAttribute('data-tooltip');
      if (text) {
        // Crée la box
        const box = document.createElement('div');
        box.className = 'tooltip-box';
        box.textContent = text;
        tooltipLayer.appendChild(box);
        
        // flèche
        const arrow = document.createElement('div');
        arrow.className = 'tooltip-arrow';
        tooltipLayer.appendChild(arrow);

        // Calcul position près du badge (côté droit)
        const rect = this.getBoundingClientRect();
        const margin = 10;
        const left = Math.min(window.innerWidth - box.offsetWidth - 12, rect.right - box.offsetWidth + rect.width);
        const top = Math.max(12, rect.top - box.offsetHeight - margin);
        box.style.position = 'fixed';
        box.style.left = `${Math.max(12, left)}px`;
        box.style.top = `${top}px`;
        
        // position de la flèche
        arrow.style.left = `${rect.right - 18}px`;
        arrow.style.top = `${top + box.offsetHeight - 1}px`;
        
        requestAnimationFrame(() => box.classList.add('show'));
        
        // stocker refs pour mouseleave
        this._tooltipRefs = { box, arrow };
      }
    });
    
    badge.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = 'none';
      this.style.background = 'rgba(255,255,255,0.1)';
      
      if (this._tooltipRefs) {
        const { box, arrow } = this._tooltipRefs;
        if (box) { box.classList.remove('show'); setTimeout(() => box.remove(), 150); }
        if (arrow) { setTimeout(() => arrow.remove(), 150); }
        this._tooltipRefs = null;
      }
    });
  });
});

// ========================================
// LIENS ACTIFS DANS CONTACT
// ========================================
const contactItems = document.querySelectorAll('.contact-item');
contactItems.forEach(item => {
  const text = item.textContent.trim();
  
  if (text.includes('@')) {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      window.location.href = `mailto:${text.split('\n')[0].trim()}`;
    });
  } else if (text.includes('linkedin')) {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      window.open('https://' + text.split('\n')[0].trim(), '_blank');
    });
  } else if (text.includes('github')) {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      window.open('https://' + text.split('\n')[0].trim(), '_blank');
    });
  } else if (text.match(/\d{2}/)) {
    item.style.cursor = 'pointer';
    item.addEventListener('click', () => {
      const phone = text.replace(/\s/g, '');
      window.location.href = `tel:${phone}`;
    });
  }
});

// ========================================
// BOUTON TÉLÉCHARGER PDF
// ========================================
const downloadBtn = document.getElementById('downloadPDF');
    
// Init layer tooltip pour éviter qu'elle soit coupée par le viewport
const tooltipLayer = document.createElement('div');
tooltipLayer.className = 'tooltip-layer';
document.body.appendChild(tooltipLayer);
    
downloadBtn.addEventListener('mouseenter', function() {
  this.style.transform = 'scale(1.1) rotate(10deg)';
  this.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.6)';
});
    
downloadBtn.addEventListener('mouseleave', function() {
  this.style.transform = 'scale(1) rotate(0deg)';
  this.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
});

downloadBtn.addEventListener('click', function() {
  // Animation de click
  this.style.transform = 'scale(0.95)';
  setTimeout(() => {
    this.style.transform = 'scale(1)';
  }, 200);

  // Préparer pour l'impression
  const pdfButton = document.getElementById('downloadPDF');
  const modal = document.getElementById('experienceModal');
  
  // Cacher les éléments non imprimables
  pdfButton.style.display = 'none';
  modal.style.display = 'none';
  
  // Ajouter classe pour l'impression
  document.body.classList.add('printing');
  
  // Notification (temporaire et masquée à l'impression)
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.setAttribute('aria-live', 'polite');
  notification.style.cssText = 'position: fixed; top: 20px; right: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px 16px; border-radius: 8px; box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4); z-index: 9999; font-size: 12px; font-weight: 500;';
  notification.textContent = 'Ouverture de la boîte d\'impression...';
  document.body.appendChild(notification);

  // Petit délai pour que les styles s'appliquent
  setTimeout(() => {
    // Ouvrir la boîte de dialogue d'impression
    window.print();
    
    // Après impression, restaurer l'interface
    setTimeout(() => {
      pdfButton.style.display = 'flex';
      document.body.classList.remove('printing');
      
      notification.textContent = '✓ Vous pouvez maintenant sauvegarder en PDF';
      notification.style.background = 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';
      
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
      }, 3000);
    }, 500);
  }, 100);
});

// ========================================
// SMOOTH SCROLL
// ========================================
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

// ========================================
// EFFET PARALLAX SUR LE HEADER
// ========================================
window.addEventListener('scroll', () => {
  const header = document.querySelector('.cv-header');
  const scrolled = window.pageYOffset;
  header.style.transform = `translateY(${scrolled * 0.5}px)`;
  header.style.opacity = 1 - (scrolled / 300);
});

// ========================================
// COMPTEUR ANIMÉ POUR LES ANNÉES D'EXPÉRIENCE
// ========================================
function animateCounter(element, target, duration) {
  let current = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current);
  }, 16);
}

// Observer pour déclencher le compteur
const profileSection = document.querySelector('.cv-right-column .section-spacing');
const profileObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      // Animation du compteur si nécessaire
    }
  });
}, { threshold: 0.5 });

if (profileSection) {
  profileObserver.observe(profileSection);
}

// Recréer les icônes après les modifications DOM
setTimeout(() => {
  lucide.createIcons();
}, 100);


