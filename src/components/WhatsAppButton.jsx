import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/233240000000"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
      <span className="wa-tooltip">Chat with us</span>
    </a>
  );
}
