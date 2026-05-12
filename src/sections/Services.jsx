import { Search, FileText, Plane, Home, TrendingUp, Shield } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Search size={32} />,
    title: 'Player Scouting',
    desc: 'We identify raw and developed talent through our network of scouts across Ghana, spanning amateur leagues, academies, and community pitches.',
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Performance Development',
    desc: 'Video analysis, tactical coaching, and fitness conditioning programmes to prepare players for the demands of European football.',
  },
  {
    icon: <FileText size={32} />,
    title: 'Transfer Negotiation',
    desc: 'Our licensed agents negotiate contracts with European clubs ensuring fair terms, transparent fees, and protected player rights.',
  },
  {
    icon: <Shield size={32} />,
    title: 'Legal & Visa Support',
    desc: 'Full administrative guidance — from work permits and international clearance to registration with national and FIFA databases.',
  },
  {
    icon: <Plane size={32} />,
    title: 'Relocation Assistance',
    desc: 'We handle travel logistics, housing arrangements, language support, and cultural integration for players and families.',
  },
  {
    icon: <Home size={32} />,
    title: 'Post-Transfer Welfare',
    desc: 'Regular check-ins, mental health support, and a dedicated welfare officer for every player throughout their first season abroad.',
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">
            End-to-End <span>Transfer Services</span>
          </h2>
          <p className="section-subtitle">
            From the pitches of Accra to the stadiums of Europe — we manage every step
            of the journey so players can focus on what they do best.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
