import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="section-label">Accra, Ghana · Est. 2018</p>
        <h1 className="hero-title">
          Your Bridge from<br />
          <span>Africa to Europe</span>
        </h1>
        <p className="hero-sub">
          Jackmillan Football Academy is Accra&apos;s premier football scouting academy — identifying,
          developing, and transferring elite Ghanaian talent to professional clubs
          in Europe and beyond.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Get Scouted Today</a>
          <a href="#services" className="btn-outline">Our Services</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">120+</span>
            <span className="stat-label">Players Placed</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">18</span>
            <span className="stat-label">European Clubs</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">12</span>
            <span className="stat-label">Countries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
