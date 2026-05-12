import { Users, Clock, Award, Globe, Zap, CheckCircle2 } from 'lucide-react';
import './Requirements.css';

const criteria = [
  {
    icon: <Users size={28} />,
    title: 'Age Range',
    value: '15 – 28',
    unit: 'years old',
    desc: 'We scout players from youth academies right through to semi-professional level.',
  },
  {
    icon: <Clock size={28} />,
    title: 'Training History',
    value: '2+',
    unit: 'years structured',
    desc: 'Minimum two years of consistent training with a registered club or academy.',
  },
  {
    icon: <Award size={28} />,
    title: 'Competition Level',
    value: 'League',
    unit: 'or higher',
    desc: 'Active participation in a recognised local, regional, or national league.',
  },
  {
    icon: <Globe size={28} />,
    title: 'Passport',
    value: 'Valid',
    unit: 'travel docs',
    desc: 'Valid Ghanaian passport or in the process of obtaining one. We assist if needed.',
  },
];

const positions = ['Goalkeeper', 'Centre-Back', 'Full-Back', 'Defensive Mid', 'Box-to-Box Mid', 'Attacking Mid', 'Winger', 'Striker'];

const qualities = [
  'Technical ability and ball control',
  'Tactical understanding of the game',
  'Physical fitness and athleticism',
  'Mental resilience and coachability',
  'Team communication and leadership',
  'Hunger to compete at a higher level',
];

export default function Requirements() {
  return (
    <section id="requirements" className="req">
      <div className="container">
        <div className="req-header">
          <p className="section-label">Eligibility Criteria</p>
          <h2 className="section-title">
            Do You Have <span>What It Takes?</span>
          </h2>
          <p className="section-subtitle">
            We scout talent across all positions. Here&apos;s what we look for
            when selecting players for our transfer programme.
          </p>
        </div>

        <div className="req-cards">
          {criteria.map((c) => (
            <div key={c.title} className="req-card">
              <div className="req-icon">{c.icon}</div>
              <div className="req-value">{c.value} <span>{c.unit}</span></div>
              <h3 className="req-title">{c.title}</h3>
              <p className="req-desc">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="req-bottom">
          <div className="req-positions">
            <h3>Positions We Scout</h3>
            <div className="positions-grid">
              {positions.map((p) => (
                <span key={p} className="position-chip">{p}</span>
              ))}
            </div>
          </div>

          <div className="req-qualities">
            <h3>Key Qualities We Assess</h3>
            <ul className="qualities-list">
              {qualities.map((q) => (
                <li key={q}>
                  <CheckCircle2 size={17} className="q-icon" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="req-cta-banner">
          <div className="req-cta-text">
            <Zap size={22} />
            <p>Not sure if you qualify? <strong>Apply anyway</strong> — our scouts review every application personally.</p>
          </div>
          <a href="#contact" className="btn-primary">Apply for Scouting</a>
        </div>
      </div>
    </section>
  );
}
