// Intersection Observer — animate elements on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.animate-in, .skill-card, .project-card').forEach((el) => {
  el.classList.add('animate-in');
  observer.observe(el);
});

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
  links.classList.toggle('open');
});

// Close mobile nav on link click
links.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', () => links.classList.remove('open'));
});

// Shrink nav on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.padding = window.scrollY > 50 ? '10px 32px' : '16px 32px';
});
