import './TrustBar.css';

const partners = [
  { name: 'Ghana FA', abbr: 'GFA' },
  { name: 'Premier League', abbr: 'EPL' },
  { name: 'Bundesliga', abbr: 'BL' },
  { name: 'Eredivisie', abbr: 'ERE' },
  { name: 'Primeira Liga', abbr: 'PL' },
  { name: 'Allsvenskan', abbr: 'SWE' },
  { name: 'Belgian Pro League', abbr: 'BEL' },
  { name: 'FIFA Licensed', abbr: 'FIFA' },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container trust-inner">
        <span className="trust-label">Trusted By &amp; Registered With</span>
        <div className="trust-scroll">
          <div className="trust-track">
            {[...partners, ...partners].map((p, i) => (
              <div key={`${p.abbr}-${i}`} className="trust-item">
                <span className="trust-abbr">{p.abbr}</span>
                <span className="trust-name">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
