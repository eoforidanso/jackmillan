import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import './ExecutiveProfiles.css';

export default function ExecutiveProfiles() {
  const { id } = useParams();
  const [executives, setExecutives] = useState([]);
  const [selectedExecutive, setSelectedExecutive] = useState(null);

  useEffect(() => {
    getDocs(collection(db, 'executives'))
      .then((snap) => {
        const data = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setExecutives(data);
        if (id) setSelectedExecutive(data.find(e => e.id === id) || null);
      })
      .catch(() => {});
  }, [id]);

  return (
    <section className="executive-profiles">
      <div className="container">
        {selectedExecutive ? (
          <div className="profile-detail">
            <Link to="/executives" className="back-link">← Back to Executives</Link>

            <div className="profile-header">
              {selectedExecutive.img && (
                <div className="profile-image">
                  <img src={selectedExecutive.img} alt={selectedExecutive.name} />
                </div>
              )}
              <div className="profile-info">
                <h1>{selectedExecutive.name}</h1>
                <p className="role">{selectedExecutive.role}</p>
                <p className="bio">{selectedExecutive.bio}</p>
                {selectedExecutive.tags && selectedExecutive.tags.length > 0 && (
                  <div className="tags">
                    {selectedExecutive.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="profiles-header">
              <h2>Executive Team</h2>
              <p>Meet the experts leading Jackmillan Football Academy</p>
            </div>

            {executives.length === 0 ? (
              <div className="empty-state">
                <p>No executives yet.</p>
              </div>
            ) : (
              <div className="profiles-grid">
                {executives.map((exec) => (
                  <Link
                    key={exec.id}
                    to={`/executives/${exec.id}`}
                    className="profile-card"
                  >
                    {exec.img && (
                      <div className="card-image">
                        <img src={exec.img} alt={exec.name} />
                      </div>
                    )}
                    <div className="card-content">
                      <h3>{exec.name}</h3>
                      <p className="role">{exec.role}</p>
                      <p className="bio">{exec.bio}</p>
                      {exec.tags && exec.tags.length > 0 && (
                        <div className="tags">
                          {exec.tags.slice(0, 2).map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
