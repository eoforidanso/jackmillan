/**
 * Scroll-reveal utility using IntersectionObserver.
 * Targets known card/element class names and animates them in
 * as they enter the viewport. Cards within the same parent are staggered.
 */

const STAGGER_SELECTORS = [
  '.impact-stat',
  '.service-card',
  '.req-card',
  '.step',
  '.player-card',
  '.dest-item',
  '.team-card',
  '.mini-selector',
  '.gallery-item',
  '.faq-item',
  '.contact-detail',
  '.league-tag',
  '.trust-item',
  '.about-list-item',
];

const SINGLE_SELECTORS = [
  '.about-grid',
  '.about-content',
  '.about-mission',
  '.testimonial-main',
  '.contact-form-wrap',
  '.contact-leagues',
  '.hero-stats',
  '.services-header',
  '.section-header',
  '.about-image-wrap',
];

export function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sr-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
  );

  // Staggered: group by parent so delay resets per section
  STAGGER_SELECTORS.forEach((sel) => {
    const groups = new Map();
    document.querySelectorAll(sel).forEach((el) => {
      const key = el.parentElement;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(el);
    });
    groups.forEach((els) => {
      els.forEach((el, i) => {
        el.classList.add('sr-hidden');
        el.style.transitionDelay = `${i * 0.08}s`;
        observer.observe(el);
      });
    });
  });

  // Single elements (no stagger)
  SINGLE_SELECTORS.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      el.classList.add('sr-hidden');
      observer.observe(el);
    });
  });

  return () => observer.disconnect();
}
