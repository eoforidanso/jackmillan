import { useEffect, useState } from 'react';
import './Preloader.css';

export default function Preloader() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 1800);
    const t2 = setTimeout(() => setGone(true), 2350);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (gone) return null;

  return (
    <div className={`preloader${hiding ? ' hiding' : ''}`} aria-hidden="true">
      <div className="preloader-inner">
        <img src={import.meta.env.BASE_URL + 'images/logo.png'} alt="Jackmillan Football Academy" className="preloader-logo" />
        <p className="preloader-name">Jack<span>Millan</span></p>
        <p className="preloader-academy">Football Academy</p>
        <div className="preloader-bar">
          <div className="preloader-fill" />
        </div>
        <p className="preloader-tagline">Accra · Est. 2018</p>
      </div>
    </div>
  );
}
