import './Hero.css';

const BASE = import.meta.env.BASE_URL;

export default function Hero() {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url('${BASE}images/hero.png')` }}>
      <div className="hero-overlay" />
      <div className="hero-grid-bg" />

      <div className="container hero-inner">

        {/* ── Left Column ── */}
        <div className="hero-left">
          <div className="hero-live-badge">
            <span className="live-dot" />
            <span>Live Scouting · Season 2025/26</span>
          </div>

          <h1 className="hero-title">
            Where Elite African{' '}<br />
            Talent Meets{' '}<br />
            <span>European Football</span>
          </h1>

          <p className="hero-sub">
            Accra&apos;s most trusted FIFA-licensed scouting academy. We identify,
            develop, and place Ghana&apos;s finest footballers into professional clubs
            across Europe — with a proven 95% placement success rate.
          </p>

          <div className="hero-credentials">
            <span className="cred-pill">🏅 FIFA Licensed Intermediary</span>
            <span className="cred-pill">⚽ UEFA B License</span>
            <span className="cred-pill">🇬🇭 GFA Certified</span>
          </div>

          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Apply for Scouting</a>
            <a href="#players" className="btn-outline">View Our Placements</a>
          </div>
        </div>

        {/* ── Right Column: Scouting Intelligence Card ── */}
        <div className="hero-right">
          <div className="scout-card">
            <div className="scout-card-header">
              <div className="scout-card-title">
                <span className="scout-dot" />
                <span>Scouting Intelligence</span>
              </div>
              <span className="scout-card-season">2025 / 26</span>
            </div>

            <div className="scout-stats-grid">
              <div className="scout-stat">
                <span className="scout-num">120<sup>+</sup></span>
                <span className="scout-lbl">Players Placed</span>
              </div>
              <div className="scout-stat">
                <span className="scout-num">18</span>
                <span className="scout-lbl">Partner Clubs</span>
              </div>
              <div className="scout-stat">
                <span className="scout-num">95<sup>%</sup></span>
                <span className="scout-lbl">Success Rate</span>
              </div>
              <div className="scout-stat">
                <span className="scout-num">12</span>
                <span className="scout-lbl">Countries</span>
              </div>
            </div>

            <div className="scout-divider" />

            <div className="scout-active-row">
              <span className="active-pulse" />
              <span className="active-text">32 players currently active in European trials</span>
            </div>

            <div className="scout-destinations">
              <span className="dest-label">Active Destinations</span>
              <div className="dest-flags">
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

            <a href="#contact" className="scout-cta">
              Book a Scouting Session
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
