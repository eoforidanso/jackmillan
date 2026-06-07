import { useEffect } from 'react';
import './Hero.css';

const BASE = import.meta.env.BASE_URL;

export default function Hero() {

  // Count-up animation for stat numbers
  useEffect(() => {
    const nums = document.querySelectorAll('.strip-num[data-target]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.innerHTML.match(/<sup>(.*?)<\/sup>/)?.[1] || '';
        let start = 0;
        const duration = 1400;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
          start = Math.min(start + step, target);
          el.innerHTML = `${start}<sup>${suffix}</sup>`;
          if (start >= target) clearInterval(timer);
        }, 16);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach(n => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero" style={{ backgroundImage: `url('${BASE}images/player1.png')` }}>
      <div className="hero-overlay" />
      <div className="hero-grid-bg" />
      <div className="hero-text-scrim" />

      {/* ── LAYER 1: Focal Content ── */}
      <div className="hero-focal">
        <div className="hero-live-badge">
          <span className="live-dot" />
          <span>Live Scouting · Season 2025/26</span>
        </div>

        <h1 className="hero-title">
          Africa&apos;s Finest.<br />
          <span>Europe&apos;s Next Stars.</span>
        </h1>

        <p className="hero-sub">
          Ghana&apos;s only FIFA-licensed scouting academy with verified placements
          in professional clubs across 12 European nations.
          No shortcuts. No false promises. Just results.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary btn-glass">Apply for Scouting</a>
          <a href="#players" className="btn-outline btn-glass-outline">View Our Placements</a>
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
        </div>
      </div>

      {/* ── LAYER 2: Credibility Strip ── */}
      <div className="hero-strip">
        <div className="container strip-inner">

          <div className="strip-stats">
            <div className="strip-stat">
              <span className="strip-icon">🎓</span>
              <span className="strip-num" data-target="120">0<sup>+</sup></span>
              <span className="strip-lbl">Graduates Placed</span>
              <span className="strip-verify">verified</span>
            </div>
            <div className="strip-sep" />
            <div className="strip-stat">
              <span className="strip-icon">✅</span>
              <span className="strip-num" data-target="95">0<sup>%</sup></span>
              <span className="strip-lbl">Success Rate</span>
              <span className="strip-verify">across Europe</span>
            </div>
            <div className="strip-sep" />
            <div className="strip-stat">
              <span className="strip-icon">🏅</span>
              <span className="strip-num">UEFA B</span>
              <span className="strip-lbl">Coaching Staff</span>
              <span className="strip-verify">licensed</span>
            </div>
            <div className="strip-sep" />
            <div className="strip-stat">
              <span className="strip-icon">🇬🇭</span>
              <span className="strip-num">GFA</span>
              <span className="strip-lbl">Certified</span>
              <span className="strip-verify">national compliance</span>
            </div>
          </div>

          <div className="strip-right">
            <div className="strip-badges">
              <span className="cred-pill">🏅 FIFA Licensed</span>
              <span className="cred-pill">⚽ UEFA B License</span>
              <span className="cred-pill">🇬🇭 GFA Certified</span>
            </div>
            <div className="strip-active">
              <span className="active-pulse" />
              <span>32 active in European trials</span>
            </div>
            <div className="strip-flags">
              <span title="England">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
              <span title="Germany">🇩🇪</span>
              <span title="Portugal">🇵🇹</span>
              <span title="Netherlands">🇳🇱</span>
              <span title="Sweden">🇸🇪</span>
              <span title="Denmark">🇩🇰</span>
              <span title="Belgium">🇧🇪</span>
              <span title="Poland">🇵🇱</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
