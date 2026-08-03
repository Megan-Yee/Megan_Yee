/* ─────────────────────────────────────────
   MEGAN YEE · script.js
   ───────────────────────────────────────── */

// ─── MONDRIAN BACKGROUND GENERATOR ───
// Inspired by Megan's own Mondrian art project!
(function generateMondrian() {
  const container = document.getElementById('mondrian-bg');
  if (!container) return;

  const colors = ['#D62828', '#1B4FCC', '#F5C800', '#0D0D0D', ''];
  const cells = 28;

  for (let i = 0; i < cells; i++) {
    const cell = document.createElement('div');
    cell.className = 'm-cell';

    const w = Math.random() * 18 + 6;
    const h = Math.random() * 18 + 6;
    const x = Math.random() * 92;
    const y = Math.random() * 92;
    const color = colors[Math.floor(Math.random() * colors.length)];

    cell.style.cssText = `
      width: ${w}%;
      height: ${h}%;
      left: ${x}%;
      top: ${y}%;
      background: ${color};
    `;
    container.appendChild(cell);
  }
})();

// ─── NAVBAR SCROLL EFFECT ───
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
})();

// ─── HAMBURGER MENU ───
(function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    links.classList.toggle('open');
  });

  // Close on nav link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      links.classList.remove('open');
    });
  });
})();

// ─── SCROLL REVEAL ───
(function initReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
})();

// ─── SMOOTH ACTIVE NAV HIGHLIGHT ───
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = 'var(--black)';
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(section => observer.observe(section));
})();
