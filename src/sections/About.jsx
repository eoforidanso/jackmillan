import { CheckCircle } from 'lucide-react';
import './About.css';

const highlights = [
  'Licensed FIFA intermediary agents',
  'Deep network with European club scouts',
  'Legal & visa support for every player',
  'Performance analytics & video scouting',
  'Post-transfer welfare & mentoring',
  'Ghanaian Football Association accredited',
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-image-wrap">
          <img
            src="/images/about.jpg"
            alt="Soccer training in Accra"
            className="about-img"
            loading="lazy"
          />
          <div className="about-badge">
            <span className="badge-num">7+</span>
            <span className="badge-text">Years of<br/>Excellence</span>
          </div>
        </div>

        <div className="about-content">
          <p className="section-label">About JackMillan Soccer Academy</p>
          <h2 className="section-title">
            Accra&apos;s Most Trusted<br /><span>Football Agency</span>
          </h2>
          <p className="section-subtitle">
            Founded in 2018, JackMillan Soccer Academy was born from a passion to unlock
            the immense footballing talent in Ghana and West Africa, providing structured
            pathways to professional leagues across Europe and overseas.
          </p>
          <p className="about-body">
            We work directly with players, families, and football academies to ensure
            every transfer is ethical, transparent, and in the best interest of the player.
            From initial scouting through to contract negotiation and settlement abroad,
            we stand beside our athletes every step of the way.
          </p>
          <ul className="about-list">
            {highlights.map((h) => (
              <li key={h} className="about-list-item">
                <CheckCircle size={18} className="check-icon" />
                {h}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary">Work With Us</a>
        </div>
      </div>
    </section>
  );
}
