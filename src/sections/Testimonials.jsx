import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const BASE = import.meta.env.BASE_URL;
const testimonials = [
  {
    name: 'Kofi Agyemang',
    initials: 'KA',
    color: '#00c896',
    role: 'Midfielder · Now at FC Midtjylland, Denmark',
    flag: '🇩🇰',
    quote:
      'JackMillan changed my life. I was playing in the Accra Metropolitan League with no clear path forward. Within six months of joining their programme, I had signed a two-year contract in Denmark. They handled everything — my visa, my housing, even my first training kit. I cannot thank them enough.',
    year: '2024',
  },
  {
    name: 'Samuel Nkrumah',
    initials: 'SN',
    color: '#f5a623',
    role: 'Striker · Now at Górnik Zabrze, Poland',
    flag: '🇵🇱',
    quote:
      'As a family we were worried about our son travelling so far at 18. JackMillan sat with us, explained every step, and gave us a dedicated welfare officer who checked in every week. The transparency and care they showed was beyond what we expected from an agency.',
    year: '2024',
    fromParent: true,
    parentName: 'Kweku Nkrumah (Father)',
    parentInitials: 'KN',
  },
  {
    name: 'Abena Mensah',
    initials: 'AM',
    color: '#7c6ff7',
    role: 'Coach · Elite Stars Academy, Accra',
    flag: '🏫',
    quote:
      'We have partnered with JackMillan to place five of our academy graduates in European clubs over two years. Their network is genuine, their process is ethical, and most importantly — they actually deliver. Any academy serious about player development should be working with them.',
    year: '2023',
    isCoach: true,
  },
  {
    name: 'Eric Darko',
    initials: 'ED',
    color: '#00c896',
    role: 'Winger · Now at Vejle BK, Denmark',
    flag: '🇩🇰',
    quote:
      'I had tried other agencies before JackMillan and had bad experiences — promises with no follow-through. JackMillan was completely different. Real contracts, real clubs, real support. I am now in my second season in the Danish Superliga and I owe that to this team.',
    year: '2025',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const stageRef = useRef(null);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));
  const t = testimonials[active];

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    if (touchStart !== null) {
      const distance = touchStart - e.changedTouches[0].clientX;
      if (Math.abs(distance) > 50) {
        if (distance > 0) {
          next(); // Swiped left → next
        } else {
          prev(); // Swiped right → previous
        }
      }
    }
    setTouchStart(null);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testi-header">
          <p className="section-label">Player Stories</p>
          <h2 className="section-title">
            Straight from <span>Their Mouths</span>
          </h2>
          <p className="section-subtitle">
            Hear from the players, families, and coaches who have experienced
            the JackMillan difference first-hand.
          </p>
        </div>

        <div className="testi-stage" ref={stageRef} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="testi-quote-icon"><Quote size={40} /></div>

          <div className="testi-card" role="region" aria-label="Testimonial">
            <div
              className="testi-avatar"
              style={{ background: `linear-gradient(135deg, ${t.color}22, ${t.color}44)`, border: `2px solid ${t.color}88` }}
              aria-label={t.name}
            >
              <span className="testi-initials" style={{ color: t.color }}>
                {t.fromParent ? t.parentInitials : t.initials}
              </span>
            </div>
            <div className="testi-body">
              <p className="testi-text">&ldquo;{t.quote}&rdquo;</p>
              <div className="testi-meta">
                <div>
                  <p className="testi-name">{t.fromParent ? t.parentName : t.name} {t.flag}</p>
                  <p className="testi-role">{t.role}</p>
                </div>
                <span className="testi-year">{t.year}</span>
              </div>
            </div>
          </div>

          <div className="testi-controls">
            <button className="testi-btn" onClick={prev} aria-label="Previous">
              <ChevronLeft size={22} />
            </button>
            <div className="testi-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === active ? 'active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>
            <button className="testi-btn" onClick={next} aria-label="Next">
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Compact grid of all */}
        <div className="testi-mini-grid">
          {testimonials.map((t2, i) => (
            <button
              key={t2.name}
              className={`testi-mini ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <div
                className="testi-mini-avatar"
                style={{ background: `linear-gradient(135deg, ${t2.color}22, ${t2.color}44)`, border: `1.5px solid ${t2.color}88` }}
              >
                <span style={{ color: t2.color, fontSize: '0.72rem', fontWeight: 800 }}>
                  {t2.fromParent ? t2.parentInitials : t2.initials}
                </span>
              </div>
              <div>
                <p>{t2.fromParent ? t2.parentName : t2.name}</p>
                <span>{t2.flag} {t2.year}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
