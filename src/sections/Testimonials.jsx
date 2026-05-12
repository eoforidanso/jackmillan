import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Kofi Agyemang',
    role: 'Midfielder · Now at FC Midtjylland, Denmark',
    img: '/images/player1.png',
    flag: '🇩🇰',
    quote:
      'JackMillan changed my life. I was playing in the Accra Metropolitan League with no clear path forward. Within six months of joining their programme, I had signed a two-year contract in Denmark. They handled everything — my visa, my housing, even my first training kit. I cannot thank them enough.',
    year: '2024',
  },
  {
    name: 'Samuel Nkrumah',
    role: 'Striker · Now at Górnik Zabrze, Poland',
    img: '/images/player2.png',
    flag: '🇵🇱',
    quote:
      'As a family we were worried about our son travelling so far at 18. JackMillan sat with us, explained every step, and gave us a dedicated welfare officer who checked in every week. The transparency and care they showed was beyond what we expected from an agency.',
    year: '2024',
    fromParent: true,
    parentName: 'Kweku Nkrumah (Father)',
  },
  {
    name: 'Abena Mensah',
    role: 'Coach · Elite Stars Academy, Accra',
    img: '/images/player3.png',
    flag: '🏫',
    quote:
      'We have partnered with JackMillan to place five of our academy graduates in European clubs over two years. Their network is genuine, their process is ethical, and most importantly — they actually deliver. Any academy serious about player development should be working with them.',
    year: '2023',
    isCoach: true,
  },
  {
    name: 'Eric Darko',
    role: 'Winger · Now at Vejle BK, Denmark',
    img: '/images/player4.png',
    flag: '🇩🇰',
    quote:
      'I had tried other agencies before JackMillan and had bad experiences — promises with no follow-through. JackMillan was completely different. Real contracts, real clubs, real support. I am now in my second season in the Danish Superliga and I owe that to this team.',
    year: '2025',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));
  const t = testimonials[active];

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

        <div className="testi-stage">
          <div className="testi-quote-icon"><Quote size={40} /></div>

          <div className="testi-card">
            <img src={t.img} alt={t.name} className="testi-avatar" loading="lazy" />
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
              <img src={t2.img} alt={t2.name} />
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
