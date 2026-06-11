import { useEffect, useState } from 'react';
import './BouncingFootball.css';

export default function BouncingFootball() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide football after 2.5 seconds (when preloader disappears)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bouncing-football-container">
      <svg className="football-svg" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        {/* Football shape */}
        <ellipse cx="50" cy="30" rx="45" ry="28" fill="#fff" />

        {/* Shading/depth */}
        <ellipse cx="50" cy="28" rx="43" ry="26" fill="#f0f0f0" opacity="0.8" />

        {/* Leather texture lines */}
        <line x1="50" y1="5" x2="50" y2="55" stroke="#999" strokeWidth="1" opacity="0.5" />
        <line x1="35" y1="10" x2="65" y2="10" stroke="#ccc" strokeWidth="0.5" opacity="0.4" />
        <line x1="33" y1="20" x2="67" y2="20" stroke="#ccc" strokeWidth="0.5" opacity="0.4" />
        <line x1="33" y1="30" x2="67" y2="30" stroke="#ccc" strokeWidth="0.5" opacity="0.4" />
        <line x1="33" y1="40" x2="67" y2="40" stroke="#ccc" strokeWidth="0.5" opacity="0.4" />
        <line x1="35" y1="50" x2="65" y2="50" stroke="#ccc" strokeWidth="0.5" opacity="0.4" />

        {/* Laces */}
        <circle cx="50" cy="15" r="2" fill="#333" opacity="0.6" />
        <circle cx="50" cy="25" r="2" fill="#333" opacity="0.6" />
        <circle cx="50" cy="35" r="2" fill="#333" opacity="0.6" />
        <circle cx="50" cy="45" r="2" fill="#333" opacity="0.6" />

        {/* Shine/highlight */}
        <ellipse cx="35" cy="20" rx="15" ry="8" fill="#fff" opacity="0.4" />
      </svg>
    </div>
  );
}
