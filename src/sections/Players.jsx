import { useEffect, useState } from 'react';
import './Players.css';

const BASE = import.meta.env.BASE_URL;

const defaultPlayers = [
  {
    name: 'Kwame Asante',
    position: 'Striker',
    age: 21,
    destination: 'FC Brondby, Denmark',
    flag: '🇩🇰',
    img: `${BASE}images/player1.png`,
  },
  {
    name: 'Emmanuel Boateng',
    position: 'Central Midfielder',
    age: 19,
    destination: 'Sporting B, Portugal',
    flag: '🇵🇹',
    img: `${BASE}images/player2.png`,
  },
  {
    name: 'Daniel Ofori',
    position: 'Left Back',
    age: 23,
    destination: 'Wisła Kraków, Poland',
    flag: '🇵🇱',
    img: `${BASE}images/player3.png`,
  },
  {
    name: 'Isaac Mensah',
    position: 'Goalkeeper',
    age: 20,
    destination: 'SK Slavia Prague, Czech Republic',
    flag: '🇨🇿',
    img: `${BASE}images/player4.png`,
  },
  {
    name: 'Gabriel Atsu',
    position: 'Right Back / Attacking Mid',
    age: null,
    destination: 'Seeking European Move',
    flag: '🇬🇭',
    img: `${BASE}images/gabriel-atsu.jpeg`,
  },
  {
    name: 'Mensah King Joseph',
    position: 'Left Winger / Left Back',
    age: 17,
    destination: 'Seeking European Move',
    flag: '🇬🇭',
    img: `${BASE}images/mensah-king-joseph.jpeg`,
  },
];

const destinations = [
  { country: 'England', clubs: 12, flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { country: 'Germany', clubs: 8, flag: '🇩🇪' },
  { country: 'Portugal', clubs: 10, flag: '🇵🇹' },
  { country: 'Sweden', clubs: 6, flag: '🇸🇪' },
  { country: 'Denmark', clubs: 7, flag: '🇩🇰' },
  { country: 'Belgium', clubs: 5, flag: '🇧🇪' },
  { country: 'Netherlands', clubs: 9, flag: '🇳🇱' },
  { country: 'Saudi Arabia', clubs: 4, flag: '🇸🇦' },
];

export default function Players() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('jm-players');
    if (stored) {
      try {
        setPlayers(JSON.parse(stored));
      } catch (e) {
        setPlayers(defaultPlayers);
      }
    } else {
      setPlayers(defaultPlayers);
    }
  }, []);

  return (
    <section id="players" className="players">
      <div className="container">
        <div className="players-header">
          <p className="section-label">Success Stories</p>
          <h2 className="section-title">
            Players We&apos;ve <span>Transferred</span>
          </h2>
          <p className="section-subtitle">
            A snapshot of recent placements — from the streets of Accra to professional
            football on the world stage.
          </p>
        </div>

        <div className="players-grid">
          {players.map((p) => (
            <div key={p.name} className="player-card">
              <div className="player-img-wrap">
                <img src={p.img} alt={p.name} className="player-img" loading="lazy" />
              </div>
              <div className="player-info">
                {p.age && <p className="player-age">Age {p.age}</p>}
                <p className="player-dest">
                  {p.flag} {p.destination}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="destinations">
          <h3 className="destinations-title">Our Active Club Destinations</h3>
          <div className="destinations-grid">
            {destinations.map((d) => (
              <div key={d.country} className="dest-item">
                <span className="dest-flag">{d.flag}</span>
                <span className="dest-country">{d.country}</span>
                <span className="dest-clubs">{d.clubs} clubs</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
