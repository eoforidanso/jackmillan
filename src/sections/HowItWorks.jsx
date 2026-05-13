import './HowItWorks.css';

const steps = [
  {
    num: '01',
    title: 'Player Submission',
    desc: 'Players or academies submit a profile including highlight videos, stats, and physical data through our website or partner scouts.',
  },
  {
    num: '02',
    title: 'Evaluation & Assessment',
    desc: 'Our scouting panel reviews submissions and invites selected players for live trials and physical assessments in Accra.',
  },
  {
    num: '03',
    title: 'Club Matching',
    desc: 'We match each player to suitable clubs in Europe and overseas based on playing style, age, position, and development stage.',
  },
  {
    num: '04',
    title: 'Transfer Execution',
    desc: 'Contracts are negotiated, legal clearances obtained, and travel arranged. The player departs with full support.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="hiw">
      <div className="container">
        <div className="hiw-header">
          <p className="section-label">The Process</p>
          <h2 className="section-title">
            How We <span>Make It Happen</span>
          </h2>
          <p className="section-subtitle">
            A clear, ethical, and structured process from first contact to professional debut.
          </p>
        </div>

        <div className="hiw-steps">
          {steps.map((s, i) => (
            <div key={s.num} className="hiw-step">
              <div className="hiw-step-num">{s.num}</div>
              <h3 className="hiw-step-title">{s.title}</h3>
              <p className="hiw-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="hiw-cta">
          <p>Ready to start your journey?</p>
          <a href="#contact" className="btn-primary">Apply Now</a>
        </div>
      </div>
    </section>
  );
}
