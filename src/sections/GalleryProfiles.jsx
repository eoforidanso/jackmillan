import { useEffect, useState } from 'react';
import './GalleryProfiles.css';

export default function GalleryProfiles() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('jm-gallery-images');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setImages(data);
      } catch (e) {
        console.error('Failed to load gallery images:', e);
      }
    }
  }, []);

  return (
    <section className="gallery-profiles">
      <div className="container">
        <div className="gallery-header">
          <h2>Gallery</h2>
          <p>Visual highlights from our academy</p>
        </div>

        {images.length === 0 ? (
          <div className="empty-state">
            <p>Gallery coming soon...</p>
          </div>
        ) : (
          <>
            <div className="gallery-grid">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="gallery-item"
                  onClick={() => setSelectedImage(image)}
                >
                  <img src={image.src} alt={image.alt} />
                  <div className="overlay">
                    <span className="view-btn">View</span>
                  </div>
                </div>
              ))}
            </div>

            {selectedImage && (
              <div className="lightbox" onClick={() => setSelectedImage(null)}>
                <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                  <button className="close-btn" onClick={() => setSelectedImage(null)}>
                    ✕
                  </button>
                  <img src={selectedImage.src} alt={selectedImage.alt} />
                  <p className="image-caption">{selectedImage.alt}</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
