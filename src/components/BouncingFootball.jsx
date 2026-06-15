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
      <svg className="football-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Soccer ball base */}
        <circle cx="50" cy="50" r="47" fill="white" stroke="#ccc" strokeWidth="1" />

        {/* Center pentagon */}
        <polygon points="50,30 63,40 58,55 42,55 37,40" fill="#111" />

        {/* Top pentagon */}
        <polygon points="50,3 58,12 54,22 46,22 42,12" fill="#111" />

        {/* Top-right pentagon */}
        <polygon points="75,15 82,26 76,36 65,33 63,22" fill="#111" />

        {/* Bottom-right pentagon */}
        <polygon points="82,60 80,72 68,76 62,65 68,55" fill="#111" />

        {/* Bottom pentagon */}
        <polygon points="50,97 40,88 43,76 57,76 60,88" fill="#111" />

        {/* Bottom-left pentagon */}
        <polygon points="18,60 32,55 38,65 32,76 20,72" fill="#111" />

        {/* Top-left pentagon */}
        <polygon points="25,15 37,22 35,33 24,36 18,26" fill="#111" />

        {/* Shine */}
        <ellipse cx="38" cy="32" rx="12" ry="7" fill="white" opacity="0.35" />
      </svg>
    </div>
  );
}
