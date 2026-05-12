import './Gallery.css';

const photos = [
  { src: '/images/team.jpg', alt: 'JackMillan Soccer Academy squad on the pitch', wide: true },
  { src: '/images/about.jpg', alt: 'Training session in Accra' },
  { src: '/images/player1.png', alt: 'Player profile' },
  { src: '/images/player2.png', alt: 'Player profile' },
  { src: '/images/player3.png', alt: 'Player profile' },
  { src: '/images/player4.png', alt: 'Player profile' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery-header">
          <p className="section-label">From the Ground Up</p>
          <h2 className="section-title">
            Life at <span>JackMillan Soccer Academy</span>
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
