import './Hero.css';

const BASE = import.meta.env.BASE_URL;

export default function Hero() {
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
          Where Elite African<br />
          Talent Meets<br />
          <span>European Football</span>
        </h1>

        <p className="hero-sub">
          Accra&apos;s most trusted FIFA-licensed scouting academy. We identify,
          develop, and place Ghana&apos;s finest footballers into professional clubs
          across Europe — with a proven 95% placement success rate.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Apply for Scouting</a>
          <a href="#players" className="btn-outline">View Our Placements</a>
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
              <span className="strip-num">120<sup>+</sup></span>
              <span className="strip-lbl">Players Placed</span>
            </div>
            <div className="strip-sep" />
            <div className="strip-stat">
              <span className="strip-num">95<sup>%</sup></span>
              <span className="strip-lbl">Success Rate</span>
            </div>
            <div className="strip-sep" />
            <div className="strip-stat">
              <span className="strip-num">18</span>
              <span className="strip-lbl">Partner Clubs</span>
            </div>
            <div className="strip-sep" />
            <div className="strip-stat">
              <span className="strip-num">12</span>
              <span className="strip-lbl">Countries</span>
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
