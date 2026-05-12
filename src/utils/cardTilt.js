/**
 * Subtle 3D card tilt on mousemove.
 * Applies to cards matching TILT_SELECTORS.
 */
const TILT_SELECTORS = [
  '.service-card',
  '.team-card',
  '.player-card',
  '.req-card',
  '.impact-stat',
  '.faq-item',
];

export function initCardTilt() {
  const cards = document.querySelectorAll(TILT_SELECTORS.join(', '));

  const handlers = [];

  cards.forEach((card) => {
    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const rotateX = dy * -6;
      const rotateY = dx * 6;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      card.style.transition = 'transform 0.1s ease';
    };

    const onLeave = () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.4s ease';
    };

    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
    handlers.push({ card, onMove, onLeave });
  });

  return () => {
    handlers.forEach(({ card, onMove, onLeave }) => {
      card.removeEventListener('mousemove', onMove);
      card.removeEventListener('mouseleave', onLeave);
    });
  };
}
