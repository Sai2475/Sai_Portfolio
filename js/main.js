/**
 * Sai Sukumar — Portfolio Application Logic
 * Dynamic hydration, interactive filters, search, clipboard actions, navigation, and micro-interactions.
 */

import { PORTFOLIO_DATA } from './data.js';

// SVG Icons
const ICONS = {
  externalLink: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  github: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  checkCircle: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  arrowUpRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`,
  check: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  bookOpen: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  clock: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  code: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  brain: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"></path></svg>`,
  layers: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
  sparkles: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  cloud: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`
};

document.addEventListener('DOMContentLoaded', () => {
  renderProfile();
  renderAboutSection();
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
  initPortraitTilt();
});

// Render Profile & Hero Content
function renderProfile() {
  const { profile } = PORTFOLIO_DATA;
  
  document.title = `${profile.shortName} — AI/ML Engineer & Deep Learning Researcher`;

  const statusContainer = document.getElementById('hero-status-container');
  if (statusContainer) {
    statusContainer.innerHTML = `
      <div class="status-badge">
        <span class="status-pulse"></span>
        <span>${profile.careerStatus.status}</span>
      </div>
    `;
  }

  const heroBio = document.getElementById('hero-bio');
  if (heroBio) {
    heroBio.textContent = profile.subheadline;
  }

  const portraitImg = document.getElementById('hero-portrait-img');
  if (portraitImg) {
    portraitImg.src = profile.assets.portrait;
    portraitImg.alt = `Portrait of ${profile.fullName}`;
    portraitImg.onerror = () => {
      portraitImg.src = 'public/' + profile.assets.portrait;
    };
  }

  const resumeBtns = document.querySelectorAll('.btn-resume-link');
  resumeBtns.forEach(btn => {
    btn.href = profile.assets.resumePdf;
  });
}

// Render Complete About Section & Focus Areas
function renderAboutSection() {
  const { about } = PORTFOLIO_DATA;
  
  const aboutTextContainer = document.getElementById('about-text-content');
  if (aboutTextContainer) {
    aboutTextContainer.innerHTML = `
      <p class="lead">${about.lead}</p>
      ${about.paragraphs.map(p => `<p>${p}</p>`).join('')}
      
      <div class="about-mission-card">
        ${about.mission}
      </div>

      <div style="margin-top: 1.75rem;">
        <a href="#contact" class="btn btn-outline-amber">
          <span>Discuss AI Collaborations</span>
          ${ICONS.arrowUpRight}
        </a>
      </div>
    `;
  }

  const pillarsContainer = document.getElementById('about-pillars');
  if (pillarsContainer) {
    pillarsContainer.innerHTML = about.pillars.map((pillar) => `
      <div class="pillar-card">
        <span class="pillar-watermark">${pillar.number}</span>
        <div class="mono-label" style="margin-bottom: 0.35rem;">Focus Area ${pillar.number}</div>
        <h3 class="pillar-title">${pillar.title}</h3>
        <p class="pillar-desc">${pillar.desc}</p>
      </div>
    `).join('');
  }
}

// Render Projects (EstatePulse -> DataWhiz -> GridScan)
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
          <span class="status-pulse" style="width:6px;height:6px;"></span>
        </div>
        <div class="schematic-flow">
          ${project.pipeline.map((p, pIdx, arr) => `
            <div class="flow-step">
              <span class="flow-step-num">${p.step}</span>
              <span class="flow-step-text">${p.label}</span>
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
    <article class="research-card ${pub.isUnderReview ? 'research-card-featured' : ''}">
      <div>
        <div class="research-header">
          <div class="research-badge-strip">
            <span class="${pub.isUnderReview ? 'under-review-badge' : 'ieee-badge'}">${pub.badge}</span>
            <span class="research-accuracy">${pub.accuracy}</span>
          </div>
          <span class="mono-meta">${pub.venue} · ${pub.date}</span>
        </div>

        <h3 class="research-title">${pub.title}</h3>
        ${pub.authors ? `<div class="mono-meta" style="margin-bottom: 0.85rem; color: var(--text-secondary);"><span style="color:var(--accent-amber); font-weight:600;">Authors:</span> ${pub.authors}</div>` : ''}

        <div class="research-arch-box">
          <div class="arch-label">Model Architecture</div>
          <div class="arch-value">${pub.architecture}</div>
          <div class="arch-label" style="margin-top: 0.5rem;">Benchmark Dataset</div>
          <div class="arch-value" style="color: var(--text-secondary);">${pub.dataset}</div>
        </div>

        <p class="research-abstract">${pub.abstract}</p>

        <div class="research-contributions">
          <div class="mono-label" style="margin-bottom: 0.6rem; font-size: 0.72rem;">Key Architectural Contributions</div>
          <ul>
            ${pub.keyContributions.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="research-footer">
        <span class="mono-meta">${pub.isUnderReview ? 'Clinical XAI & Dual-Track Feature Fusion' : 'Peer-Reviewed IEEE Conference'}</span>
        ${pub.ieeeUrl ? `
          <a href="${pub.ieeeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-amber btn-sm">
            <span>Read on IEEE Xplore</span>
            ${ICONS.arrowUpRight}
          </a>
        ` : `
          <span class="manuscript-status-tag">
            ${ICONS.clock}
            <span>Under Review / BTXRD Benchmark</span>
          </span>
        `}
      </div>
    </article>
  `).join('');
}

// Render Skills Matrix with Icons & Visual Depth
function renderSkills(query = '') {
  const { skills } = PORTFOLIO_DATA;
  const container = document.getElementById('skills-container');
  if (!container) return;

  container.innerHTML = skills.categories.map(cat => {
    const filteredItems = query 
      ? cat.items.filter(item => item.toLowerCase().includes(query.toLowerCase()))
      : cat.items;

    if (query && filteredItems.length === 0) return '';

    const iconSvg = ICONS[cat.icon] || ICONS.code;

    return `
      <div class="skill-category-card">
        <div class="skill-category-header">
          <div class="skill-category-icon">${iconSvg}</div>
          <h3 class="skill-category-name">${cat.name}</h3>
        </div>
        <div class="skill-items-list">
          ${filteredItems.map(item => `
            <span class="skill-pill">
              ${item}
            </span>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// Render Experience & Leadership
function renderExperience() {
  const { experience } = PORTFOLIO_DATA;
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = experience.map(exp => `
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-header">
        <h3 class="timeline-role">${exp.role}</h3>
        <span class="timeline-period">${exp.period}</span>
      </div>
      <div class="timeline-company">
        <span style="color: var(--text-primary); font-weight:600;">${exp.company}</span>
        <span class="mono-meta">· ${exp.location}</span>
      </div>
      <p class="timeline-desc">${exp.description}</p>
      <div class="timeline-skills">
        ${exp.skills.map(s => `<span class="tech-tag" style="font-size:0.75rem;">${s}</span>`).join('')}
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
      <div class="mono-label" style="margin-bottom:0.4rem;">Active Direction</div>
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

// Interactive 3D Tilt on Portrait
function initPortraitTilt() {
  const frame = document.querySelector('.portrait-frame-wrapper');
  if (!frame) return;

  frame.addEventListener('mousemove', (e) => {
    const rect = frame.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    const inner = frame.querySelector('.portrait-frame');
    if (inner) {
      inner.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }
  });

  frame.addEventListener('mouseleave', () => {
    const inner = frame.querySelector('.portrait-frame');
    if (inner) {
      inner.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    }
  });
}

// Sticky Header & Navigation Spy
function initNavigation() {
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navLinksContainer = document.querySelector('.nav-links');

  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navLinksContainer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    if (scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

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
