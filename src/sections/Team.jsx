import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import './Team.css';

const BASE = import.meta.env.BASE_URL;
const team = [
  {
    name: 'Jack Millan',
    role: 'Founder & Head Scout',
    bio: 'Former GFA-licensed coach with 15 years in African football development. Built Jackmillan Football Academy from the ground up to give Ghana\'s players a genuine path to Europe.',
    img: `${BASE}images/about.jpg`,
    tags: ['FIFA Intermediary', 'UEFA B License'],
  },
  {
    name: 'Ama Owusu',
    role: 'Transfer Manager',
    bio: 'Specialist in international transfer regulations and FIFA TMS. Has successfully executed over 60 cross-border transfers with zero FIFA violations.',
    img: `${BASE}images/team.jpg`,
    tags: ['FIFA TMS Expert', 'Contract Law'],
  },
  {
    name: 'Kwabena Asante',
    role: 'Head of Player Welfare',
    bio: 'A former professional player who experienced the challenges of moving abroad first-hand. Now dedicated to ensuring every player settles confidently into their new club and country.',
    initials: 'KA',
    color: '#00c896',
    tags: ['Mental Health', 'Pastoral Care'],
  },
  {
    name: 'Efua Darko',
    role: 'European Partnerships Director',
    bio: 'Based partly in Amsterdam, Efua manages our relationships with partner clubs in the Netherlands, Belgium, Scandinavia, and the UK.',
    initials: 'ED',
    color: '#f5a623',
    tags: ['Club Relations', 'Europe-Based'],
  },
];

export default function Team() {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="team-header">
          <p className="section-label">The People Behind It</p>
          <h2 className="section-title">
            Meet the <span>Jackmillan Football Academy Team</span>
          </h2>
          <p className="section-subtitle">
            A dedicated group of football professionals, legal experts, and
            welfare officers — all committed to one mission: your career.
          </p>
        </div>

        <div className="team-grid">
          {team.map((m) => (
            <div key={m.name} className="team-card">
              <div className="team-img-wrap">
                {m.img ? (
                  <img src={m.img} alt={m.name} className="team-img" loading="lazy" />
                ) : (
                  <div
                    className="team-img team-initial-avatar"
                    style={{ background: `linear-gradient(135deg, ${m.color}18, ${m.color}35)` }}
                  >
                    <span style={{ color: m.color, fontSize: '2.2rem', fontWeight: 900, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-1px' }}>
                      {m.initials}
                    </span>
                  </div>
                )}
                <div className="team-socials">
                  <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={14} /></a>
                  <a href="#" aria-label="Twitter"><FaXTwitter size={14} /></a>
                </div>
              </div>
              <div className="team-body">
                <h3 className="team-name">{m.name}</h3>
                <p className="team-role">{m.role}</p>
                <p className="team-bio">{m.bio}</p>
                <div className="team-tags">
                  {m.tags.map((t) => (
                    <span key={t} className="team-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
