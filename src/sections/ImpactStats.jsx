import { useEffect, useRef, useState } from 'react';
import './ImpactStats.css';

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

const stats = [
  { value: 120, suffix: '+', label: 'Players Transferred', sub: 'to clubs across 12 countries' },
  { value: 18,  suffix: '',  label: 'Partner Clubs', sub: 'active relationships in Europe' },
  { value: 7,   suffix: '+', label: 'Years of Operation', sub: 'based in Accra, Ghana since 2018' },
  { value: 95,  suffix: '%', label: 'Contract Success Rate', sub: 'deals completed without dispute' },
  { value: 35,  suffix: '+', label: 'Partner Academies', sub: 'across Ghana and West Africa' },
  { value: 4,   suffix: '',  label: 'Continents Reached', sub: 'Europe, Asia, Americas & Gulf' },
];

function StatItem({ value, suffix, label, sub, start }) {
  const count = useCountUp(value, 1800, start);
  return (
    <div className="impact-stat">
      <div className="impact-num">
        {count}{suffix}
      </div>
      <div className="impact-label">{label}</div>
      <div className="impact-sub">{sub}</div>
    </div>
  );
}

const BASE = import.meta.env.BASE_URL;

export default function ImpactStats() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" className="impact" ref={ref} style={{ backgroundImage: `url('${BASE}images/hero-bg.jpg')` }}>
      <div className="impact-overlay" />
      <div className="container impact-inner">
        <p className="section-label" style={{ textAlign: 'center' }}>Our Impact</p>
        <h2 className="section-title impact-title">
          Numbers That <span>Speak for Themselves</span>
        </h2>
        <div className="impact-grid">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} start={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
