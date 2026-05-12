import { useState, useEffect } from 'react';
import './CookieBanner.css';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('jm_cookie_consent')) {
      const t = setTimeout(() => setVisible(true), 2600);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('jm_cookie_consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('jm_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-content">
        <p className="cookie-text">
          <strong>We use cookies</strong> to improve your experience and analyse site traffic.
          By using this site you agree to our use of cookies in accordance with our{' '}
          <a href="#privacy" onClick={decline}>Privacy Policy</a>.
        </p>
        <div className="cookie-actions">
          <button className="cookie-decline" onClick={decline}>Decline</button>
          <button className="cookie-accept" onClick={accept}>Accept All</button>
        </div>
      </div>
    </div>
  );
}
