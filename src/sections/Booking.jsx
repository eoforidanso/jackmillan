import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import './Booking.css';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    sessionType: 'consultation',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this to your backend or email service
    console.log('Booking submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        sessionType: 'consultation',
        message: '',
      });
    }, 3000);
  };

  return (
    <section id="booking" className="booking">
      <div className="container booking-inner">
        <div className="booking-header">
          <p className="section-label">Schedule Your Session</p>
          <h2 className="section-title">
            Book a <span>Consultation</span>
          </h2>
          <p className="section-subtitle">
            Ready to take the next step in your football journey? Schedule a personalized session with our team.
          </p>
        </div>

        <div className="booking-content">
          {/* Left: Benefits */}
          <div className="booking-benefits">
            <h3>What to Expect</h3>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">💬</div>
                <div>
                  <h4>1-on-1 Consultation</h4>
                  <p>Personalized assessment of your skills and goals</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📋</div>
                <div>
                  <h4>Career Roadmap</h4>
                  <p>Customized path to professional football</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🌍</div>
                <div>
                  <h4>Global Opportunities</h4>
                  <p>Access to European club partnerships</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">⏱️</div>
                <div>
                  <h4>30-Minute Session</h4>
                  <p>Quick but comprehensive overview</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="booking-form-wrapper">
            {submitted && (
              <div className="success-message">
                ✅ Booking request submitted! We'll contact you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit} className="booking-form">
              {/* Name */}
              <div className="form-group">
                <label htmlFor="name">
                  <User size={16} />
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">
                  <Mail size={16} />
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              {/* Phone */}
              <div className="form-group">
                <label htmlFor="phone">
                  <Phone size={16} />
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>

              {/* Session Type */}
              <div className="form-group">
                <label htmlFor="sessionType">Session Type</label>
                <select
                  id="sessionType"
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleChange}
                >
                  <option value="consultation">Initial Consultation</option>
                  <option value="evaluation">Skills Evaluation</option>
                  <option value="mentoring">Mentoring Session</option>
                  <option value="planning">Career Planning</option>
                </select>
              </div>

              {/* Date */}
              <div className="form-group">
                <label htmlFor="date">
                  <Calendar size={16} />
                  Preferred Date
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Time */}
              <div className="form-group">
                <label htmlFor="time">
                  <Clock size={16} />
                  Preferred Time
                </label>
                <input
                  id="time"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message */}
              <div className="form-group form-group-full">
                <label htmlFor="message">
                  <MessageSquare size={16} />
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals and experience..."
                  rows="4"
                />
              </div>

              <button type="submit" className="booking-submit">
                <Calendar size={18} />
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
