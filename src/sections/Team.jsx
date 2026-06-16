import { useEffect, useState } from 'react';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import './Team.css';

const AVATAR_COLORS = [
  '#1a4fff', '#e63946', '#2a9d8f', '#e76f51',
  '#457b9d', '#8338ec', '#fb5607', '#06d6a0',
];

function getAvatarProps(name = '') {
  const words = name.trim().split(' ');
  const initials = words.length >= 2
    ? words[0][0] + words[words.length - 1][0]
    : (words[0]?.[0] || '?');
  const color = AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
  return { initials: initials.toUpperCase(), color };
}

export default function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, 'executives'), (snap) => {
      setTeam(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return unsub;
  }, []);

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

        {team.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--text-muted, #888)', marginTop: '2rem' }}>
            Team profiles coming soon.
          </p>
        )}

        <div className="team-grid">
          {team.map((m) => {
            const { initials, color } = getAvatarProps(m.name);
            return (
            <div key={m.name} className="team-card">
              <div className="team-img-wrap">
                {m.img ? (
                  <img src={m.img} alt={m.name} className="team-img" loading="lazy" />
                ) : (
                  <div
                    className="team-img team-initial-avatar"
                    style={{ background: `linear-gradient(135deg, ${color}22, ${color}44)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <span style={{ color, fontSize: '2.2rem', fontWeight: 900, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-1px' }}>
                      {initials}
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
          );})}
        </div>
      </div>
    </section>
  );
}
