import { useState, useEffect } from 'react';
import './StickyApply.css';

export default function StickyApply() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a href="#contact" className="sticky-apply">
      Apply for Scouting
    </a>
  );
}
