// === Intersection Observer — scroll animations ===
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.animate-in').forEach((el) => observer.observe(el));

// === Skill bars — fill on scroll ===
const barObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        fill.style.width = fill.dataset.width + '%';
        barObserver.unobserve(fill);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.skill-card__fill').forEach((el) => barObserver.observe(el));

// === Counter animation ===
const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        let current = 0;
        const step = Math.max(1, Math.floor(target / 20));
        const interval = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          el.textContent = current;
        }, 40);
        countObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('[data-count]').forEach((el) => countObserver.observe(el));

// === Mobile nav toggle ===
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  links.classList.toggle('open');
  // Animate hamburger to X
  toggle.classList.toggle('active');
});

links.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.classList.remove('active');
  });
});

// === Nav scroll behavior ===
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 50);
  lastScroll = y;
}, { passive: true });

// === Smooth anchor scroll (fallback) ===
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
