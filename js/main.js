/**
 * Sai Sukumar — Portfolio Application Logic
 * Dynamic hydration, interactive filters, search, clipboard actions, and navigation.
 */

import { PORTFOLIO_DATA } from './data.js';

// SVG Icon Helper for crisp, self-contained SVG rendering
const ICONS = {
  externalLink: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  github: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  mail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  copy: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  download: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
  checkCircle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  bookOpen: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  sparkles: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  arrowUpRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`,
  arrowUp: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  award: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`
};

document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderPillars();
  renderProjects();
  renderPublications();
  renderSkills();
  renderExperience();
  renderCertifications();
  renderExploring();
  renderContact();
  initNavigation();
  initProjectFilters();
  initSkillsSearch();
  initEmailCopy();
  initContactForm();
});

// Render Profile & Hero Content
function renderProfile() {
  const { profile } = PORTFOLIO_DATA;
  
  // Document title
  document.title = `${profile.shortName} — AI/ML Engineer & Deep Learning Researcher`;

  // Status Badge
  const statusContainer = document.getElementById('hero-status-container');
  if (statusContainer) {
    statusContainer.innerHTML = `
      <div class="status-badge">
        <span class="status-pulse"></span>
        <span>${profile.careerStatus.status}</span>
      </div>
    `;
  }

  // Hero Headline & Bio
  const heroBio = document.getElementById('hero-bio');
  if (heroBio) {
    heroBio.textContent = profile.subheadline;
  }

  // Portrait Setup
  const portraitImg = document.getElementById('hero-portrait-img');
  if (portraitImg) {
    portraitImg.src = profile.assets.portrait;
    portraitImg.alt = `Portrait of ${profile.fullName}`;
    portraitImg.onerror = () => {
      // Graceful fallback if relative asset directory differs
      portraitImg.src = 'public/' + profile.assets.portrait;
    };
  }

  // Resume Links
  const resumeBtns = document.querySelectorAll('.btn-resume-link');
  resumeBtns.forEach(btn => {
    btn.href = profile.assets.resumePdf;
  });
}

// Render "What I Care About" Pillars
function renderPillars() {
  const { about } = PORTFOLIO_DATA;
  const container = document.getElementById('about-pillars');
  if (!container) return;

  container.innerHTML = about.pillars.map((pillar, idx) => `
    <div class="pillar-card">
      <div class="mono-label" style="margin-bottom: 0.4rem;">0${idx + 1} // FOCUS AREA</div>
      <h3 class="pillar-title">${pillar.title}</h3>
      <p class="pillar-desc">${pillar.desc}</p>
    </div>
  `).join('');
}

// Render Projects
function renderProjects(filter = 'all') {
  const { projects } = PORTFOLIO_DATA;
  const container = document.getElementById('projects-container');
  if (!container) return;

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  container.innerHTML = filtered.map(project => `
    <article class="project-card" data-category="${project.category}">
      <div class="project-info">
        <div class="project-meta-top">
          <span class="project-category-badge">${project.category}</span>
          <span class="project-date">${project.date}</span>
        </div>

        <h3 class="project-title">${project.title}</h3>
        <p class="project-subtitle">${project.subtitle}</p>
        <p class="project-summary">${project.summary}</p>

        <div class="project-highlights">
          ${project.highlights.map(hl => `
            <div class="highlight-item">
              ${ICONS.checkCircle}
              <span>${hl}</span>
            </div>
          `).join('')}
        </div>

        <div class="project-tech-tags">
          ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="project-actions">
          ${project.liveUrl ? `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <span>View Live Demo</span>
              ${ICONS.arrowUpRight}
            </a>
          ` : ''}
          ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              ${ICONS.github}
              <span>Source Code</span>
            </a>
          ` : ''}
        </div>
      </div>

      <div class="project-schematic">
        <div class="schematic-header">
          <span>Architecture Flow</span>
          <span class="status-pulse" style="width:5px;height:5px;"></span>
        </div>
        <div class="schematic-flow">
          ${(project.pipeline || [
            { step: "01", label: "Input Ingestion & Chunking" },
            { step: "02", label: "Embeddings & Vector Indexing" },
            { step: "03", label: "LLM Reasoning & Output Validation" }
          ]).map((p, pIdx, arr) => `
            <div class="flow-step">
              <span class="flow-step-num">${p.step}</span>
              <span>${p.label}</span>
            </div>
            ${pIdx < arr.length - 1 ? '<div class="flow-arrow">↓</div>' : ''}
          `).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

// Render Research & Publications
function renderPublications() {
  const { publications } = PORTFOLIO_DATA;
  const container = document.getElementById('publications-container');
  if (!container) return;

  container.innerHTML = publications.map(pub => `
    <article class="research-card">
      <div>
        <div class="research-header">
          <div class="research-badge-strip">
            <span class="ieee-badge">${pub.badge}</span>
            <span class="research-accuracy">${pub.accuracy}</span>
          </div>
          <span class="mono-meta">${pub.venue} · ${pub.date}</span>
        </div>

        <h3 class="research-title">${pub.title}</h3>

        <div class="research-arch-box">
          <div class="arch-label">Model Architecture</div>
          <div class="arch-value">${pub.architecture}</div>
          <div class="arch-label" style="margin-top: 0.5rem;">Benchmark Dataset</div>
          <div class="arch-value" style="color: var(--text-secondary);">${pub.dataset}</div>
        </div>

        <p class="research-abstract">${pub.abstract}</p>

        <div class="research-contributions">
          <div class="mono-label" style="margin-bottom: 0.6rem; font-size: 0.7rem;">Key Architectural Novelties</div>
          <ul>
            ${pub.keyContributions.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="research-footer">
        <span class="mono-meta">Verified Research Output</span>
        <a href="${pub.ieeeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-amber btn-sm">
          <span>Read on IEEE Xplore</span>
          ${ICONS.arrowUpRight}
        </a>
      </div>
    </article>
  `).join('');
}

// Render Skills Matrix
function renderSkills(query = '') {
  const { skills } = PORTFOLIO_DATA;
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = skills.categories.map(cat => {
    const filteredItems = query 
      ? cat.items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
      : cat.items;

    if (query && filteredItems.length === 0) return '';

    return `
      <div class="skill-category-card">
        <h3 class="skill-category-name">
          <span>${cat.name}</span>
          <span class="mono-meta" style="font-size:0.7rem;">${filteredItems.length} TOOLS</span>
        </h3>
        <div class="skill-items-list">
          ${filteredItems.map(item => `
            <span class="skill-pill ${item.highlight ? 'highlight' : ''}">
              ${item.name}
            </span>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// Render Experience Timeline
function renderExperience() {
  const { experience } = PORTFOLIO_DATA;
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = experience.map(exp => `
    <div class="timeline-item ${exp.isOffer ? 'offer-item' : ''}">
      <div class="timeline-marker"></div>
      <div class="timeline-header">
        <h3 class="timeline-role">${exp.role}</h3>
        <span class="timeline-period">${exp.period}</span>
      </div>
      <div class="timeline-company">
        <span style="color: var(--text-primary); font-weight:600;">${exp.company}</span>
        <span class="mono-meta">· ${exp.location}</span>
        ${exp.isOffer ? '<span class="status-badge" style="margin:0; padding:0.15rem 0.6rem; font-size:0.68rem;">Offer Received</span>' : ''}
      </div>
      <p class="timeline-desc">${exp.description}</p>
      <div class="timeline-skills">
        ${exp.skills.map(s => `<span class="tech-tag" style="font-size:0.7rem;">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// Render Certifications
function renderCertifications() {
  const { certifications } = PORTFOLIO_DATA;
  const container = document.getElementById('certifications-container');
  if (!container) return;

  container.innerHTML = certifications.map(cert => `
    <div class="cert-card">
      <div>
        <div class="cert-issuer">${cert.issuer}</div>
        <h4 class="cert-title">${cert.title}</h4>
      </div>
      <div class="cert-date">${cert.date}</div>
    </div>
  `).join('');
}

// Render Currently Exploring
function renderExploring() {
  const { currentlyExploring } = PORTFOLIO_DATA;
  const container = document.getElementById('exploring-container');
  if (!container) return;

  container.innerHTML = currentlyExploring.map(item => `
    <div class="exploring-card">
      <div class="mono-label" style="margin-bottom:0.4rem;">RESEARCH DIRECTION</div>
      <h4 class="exploring-topic">${item.topic}</h4>
      <p class="exploring-desc">${item.desc}</p>
    </div>
  `).join('');
}

// Render Contact
function renderContact() {
  const { profile } = PORTFOLIO_DATA;
  const emailDisplay = document.getElementById('contact-email-text');
  if (emailDisplay) {
    emailDisplay.textContent = profile.contact.email;
  }

  const linkedinLink = document.getElementById('contact-linkedin-link');
  if (linkedinLink) {
    linkedinLink.href = profile.contact.linkedin;
  }

  const githubLink = document.getElementById('contact-github-link');
  if (githubLink) {
    githubLink.href = profile.contact.github;
  }
}

// Interactive Project Filter Buttons
function initProjectFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      renderProjects(filter);
    });
  });
}

// Interactive Skill Search
function initSkillsSearch() {
  const input = document.getElementById('skills-search-input');
  if (!input) return;

  input.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    renderSkills(val);
  });
}

// 1-Click Copy Email Action with Toast Feedback
function initEmailCopy() {
  const copyBtn = document.getElementById('btn-copy-email');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const email = PORTFOLIO_DATA.profile.contact.email;
    try {
      await navigator.clipboard.writeText(email);
      showToast(`Copied ${email} to clipboard!`);
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `${ICONS.check} <span>Copied!</span>`;
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2000);
    } catch {
      // Fallback
      showToast(`Email: ${email}`);
    }
  });
}

// Quick Message Form Handling
function initContactForm() {
  const form = document.getElementById('contact-quick-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const subject = document.getElementById('form-subject').value.trim() || `Portfolio Inquiry from ${name}`;
    const message = document.getElementById('form-message').value.trim();

    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Sai,\n\n${message}\n\nFrom: ${name} (${email})`)}`;
    
    showToast('Opening your email client...');
    window.location.href = mailtoUrl;
    form.reset();
  });
}

// Toast Notice Helper
function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `${ICONS.checkCircle} <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Sticky Header & Navigation Spy
function initNavigation() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navLinksContainer = document.querySelector('.nav-links');

  // Mobile menu toggle
  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinksContainer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll Listener
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    // Header background toggle
    if (scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Active Section Spy
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (currentId && link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}
