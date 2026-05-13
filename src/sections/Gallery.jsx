import './Gallery.css';

const BASE = import.meta.env.BASE_URL;
const photos = [
  { src: `${BASE}images/team.jpg`, alt: 'Jackmillan Football Academy squad on the pitch', wide: true },
  { src: `${BASE}images/about.jpg`, alt: 'Training session in Accra' },
  { src: `${BASE}images/a.jpg`, alt: 'Team talk on the pitch', wide: true },
  { src: `${BASE}images/b.jpg`, alt: 'Training session with coach' },
  { src: `${BASE}images/c.jpg`, alt: 'Academy squad photo' },
  { src: `${BASE}images/player1.png`, alt: 'Player profile' },
  { src: `${BASE}images/player2.png`, alt: 'Player profile' },
  { src: `${BASE}images/player3.png`, alt: 'Player profile' },
  { src: `${BASE}images/player4.png`, alt: 'Player profile' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <p className="section-label">From the Ground Up</p>
          <h2 className="section-title">
            Life at <span>Jackmillan Football Academy</span>
          </h2>
          <p className="section-subtitle">
            Real players, real stories — moments from our pitches in Accra to the
            training grounds of Europe.
          </p>
        </div>

        <div className="gallery-grid">
          {photos.map((p) => (
            <div key={p.src} className={`gallery-item ${p.wide ? 'wide' : ''}`}>
              <img src={p.src} alt={p.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>{p.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
