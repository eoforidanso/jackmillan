import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';

const FORMSPREE_URL = 'https://formspree.io/f/jackmillan2018@gmail.com';
const positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Winger', 'Striker'];

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Full name is required';
  if (!form.age || form.age < 14 || form.age > 35) errors.age = 'Enter age between 14–35';
  if (!form.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address';
  }
  if (!form.position) errors.position = 'Please select your position';
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', position: '', age: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSending(true);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `New player application: ${form.name}` }),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', position: '', age: '', message: '' });
      } else {
        setServerError('Something went wrong. Please try WhatsApp or email us directly.');
      }
    } catch {
      setServerError('Network error. Please check your connection and try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        {/* Left info */}
        <div className="contact-info">
          <p className="section-label" style={{ color: 'var(--gold)' }}>Get In Touch</p>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            Start Your <span style={{ color: 'var(--gold)' }}>Journey Today</span>
          </h2>
          <p className="contact-sub">
            Whether you&apos;re a player, parent, or academy director — reach out and
            let&apos;s explore the possibilities together.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="detail-icon"><MapPin size={20} /></div>
              <div>
                <p className="detail-label">Office</p>
                <p className="detail-value">McCartney Hills, Accra, Ghana</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="detail-icon"><Phone size={20} /></div>
              <div>
                <p className="detail-label">Phone</p>
                <p className="detail-value">0233 244 649 017 / 0233 532 678 22</p>
              </div>
            </div>
            <div className="contact-detail">
              <div className="detail-icon"><Mail size={20} /></div>
              <div>
                <p className="detail-label">Email</p>
                <p className="detail-value">jackmillan2018@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-leagues">
            <p className="leagues-label">We scout for leagues in:</p>
            <div className="leagues-list">
              {['Premier League', 'Bundesliga', 'Eredivisie', 'Primeira Liga', 'Allsvenskan', 'Belgian Pro League'].map(l => (
                <span key={l} className="league-tag">{l}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="contact-form-wrap">
          {submitted ? (
            <div className="form-success">
              <span className="success-icon">✓</span>
              <h3>Application Received!</h3>
              <p>Thank you for reaching out. Our scouting team will review your profile and contact you within 3–5 business days.</p>
              <button className="btn-primary" onClick={() => setSubmitted(false)}>Submit Another</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h3 className="form-title">Player Application</h3>
              <div className="form-row">
                <div className={`form-group${errors.name ? ' has-error' : ''}`}>
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" placeholder="Kwame Asante" value={form.name} onChange={handleChange} />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
                <div className={`form-group${errors.age ? ' has-error' : ''}`}>
                  <label htmlFor="age">Age *</label>
                  <input id="age" name="age" type="number" placeholder="21" min="14" max="35" value={form.age} onChange={handleChange} />
                  {errors.age && <span className="field-error">{errors.age}</span>}
                </div>
              </div>
              <div className="form-row">
                <div className={`form-group${errors.email ? ' has-error' : ''}`}>
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+233 24 000 0000" value={form.phone} onChange={handleChange} />
                </div>
              </div>
              <div className={`form-group${errors.position ? ' has-error' : ''}`}>
                <label htmlFor="position">Playing Position *</label>
                <select id="position" name="position" value={form.position} onChange={handleChange}>
                  <option value="">Select position…</option>
                  {positions.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
                {errors.position && <span className="field-error">{errors.position}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="message">Tell Us About Yourself / Video Link</label>
                <textarea id="message" name="message" rows={4} placeholder="Your club history, achievements, and a link to your highlight video…" value={form.message} onChange={handleChange} />
              </div>
              {serverError && <p className="server-error">{serverError}</p>}
              <button type="submit" className="btn-primary form-submit" disabled={sending}>
                <Send size={16} />
                {sending ? 'Sending…' : 'Send Application'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
