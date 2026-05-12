import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const socials = [
  { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
  { icon: <FaInstagram />, href: '#', label: 'Instagram' },
  { icon: <FaTwitter />, href: '#', label: 'Twitter/X' },
  { icon: <FaYoutube />, href: '#', label: 'YouTube' },
  { icon: <FaWhatsapp />, href: '#', label: 'WhatsApp' },
];

const links = {
  Company: ['About Us', 'Our Team', 'Success Stories', 'Careers'],
  Services: ['Player Scouting', 'Transfer Negotiation', 'Legal & Visa', 'Player Welfare'],
  Destinations: ['England', 'Germany', 'Portugal', 'Netherlands', 'Scandinavia'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <img src="/images/logo.png" alt="JackMillan Soccer Academy" className="footer-logo-img" />
            Jack<span className="gold">Millan</span> Soccer Academy
          </a>
          <p className="footer-tagline">
            Connecting Africa&apos;s finest football talent with professional clubs
            across Europe and the world. Based in Accra, Ghana.
          </p>
          <div className="footer-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="social-btn">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {Object.entries(links).map(([heading, items]) => (
          <div key={heading} className="footer-col">
            <h4 className="footer-heading">{heading}</h4>
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="footer-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} JackMillan Soccer Academy. All rights reserved.</p>
          <p className="footer-legal">
            Licensed FIFA Intermediary · Accra, Ghana · <a href="#">Privacy Policy</a> · <a href="#">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
