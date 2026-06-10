import { useEffect, useState } from 'react';
import './Gallery.css';

const BASE = import.meta.env.BASE_URL;
const defaultPhotos = [
  { src: `${BASE}images/team.jpg`, alt: 'Jackmillan Football Academy squad on the pitch', wide: true },
  { src: `${BASE}images/hero.png`, alt: 'Academy player in action', wide: false },
  { src: `${BASE}images/a.jpg`, alt: 'Team talk on the pitch', wide: true },
  { src: `${BASE}images/about.jpg`, alt: 'Training session in Accra' },
  { src: `${BASE}images/b.jpg`, alt: 'Training session with coach' },
  { src: `${BASE}images/c.jpg`, alt: 'Academy squad photo' },
  { src: `${BASE}images/player1.png`, alt: 'Player in action' },
  { src: `${BASE}images/player2.png`, alt: 'Player profile' },
  { src: `${BASE}images/player3.png`, alt: 'Player profile' },
  { src: `${BASE}images/player4.png`, alt: 'Player profile' },
  { src: `${BASE}images/gabriel-atsu.jpeg`, alt: 'Gabriel Atsu – RB/AM, Jackmillan FC' },
  { src: `${BASE}images/mensah-king-joseph.jpeg`, alt: 'Mensah King Joseph – LW/LB, Jack Milan FC' },
  { src: `${BASE}images/player5.jpeg`, alt: 'Academy player in training drill' },
  { src: `${BASE}images/player6.jpeg`, alt: 'Academy player in match day kit' },
  { src: `${BASE}images/player7.jpeg`, alt: 'Academy player portrait' },
];

export default function Gallery() {
  const [photos, setPhotos] = useState(defaultPhotos);

  useEffect(() => {
    // Load admin-uploaded images from localStorage
    const stored = localStorage.getItem('jm-gallery-images');
    if (stored) {
      try {
        const adminImages = JSON.parse(stored);
        // Add admin images to the beginning
        setPhotos([...adminImages, ...defaultPhotos]);
      } catch (e) {
        console.error('Failed to load admin images:', e);
      }
    }
  }, []);

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
