import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PlayerProfiles.css';

export default function PlayerProfiles() {
  const { id } = useParams();
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('jm-players');
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setPlayers(data);
        if (id) {
          const player = data.find(p => p.id === parseInt(id));
          setSelectedPlayer(player);
        }
      } catch (e) {
        console.error('Failed to load players:', e);
      }
    }
  }, [id]);

  return (
    <section className="player-profiles">
      <div className="container">
        {selectedPlayer ? (
          <div className="profile-detail">
            <Link to="/players" className="back-link">← Back to Players</Link>

            <div className="profile-header">
              {selectedPlayer.img && (
                <div className="profile-image">
                  <img src={selectedPlayer.img} alt={selectedPlayer.name} />
                </div>
              )}
              <div className="profile-info">
                <h1>{selectedPlayer.name}</h1>
                <p className="position">{selectedPlayer.position}</p>
                {selectedPlayer.age && (
                  <p className="age">Age {selectedPlayer.age}</p>
                )}
                <p className="destination">
                  {selectedPlayer.flag} {selectedPlayer.destination}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="profiles-header">
              <h2>Player Profiles</h2>
              <p>Learn more about our talented players</p>
            </div>

            {players.length === 0 ? (
              <div className="empty-state">
                <p>No players yet.</p>
              </div>
            ) : (
              <div className="profiles-grid">
                {players.map((player) => (
                  <Link
                    key={player.id}
                    to={`/players/${player.id}`}
                    className="profile-card"
                  >
                    {player.img && (
                      <div className="card-image">
                        <img src={player.img} alt={player.name} />
                      </div>
                    )}
                    <div className="card-content">
                      <h3>{player.name}</h3>
                      <p className="position">{player.position}</p>
                      <p className="destination">
                        {player.flag} {player.destination}
                      </p>
                      {player.age && (
                        <p className="age">Age {player.age}</p>
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
