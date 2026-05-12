import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    q: 'Is JackMillan Soccer Academy licensed and legitimate?',
    a: 'Yes. JackMillan Soccer Academy operates as a FIFA-licensed intermediary agency, registered with the Ghana Football Association (GFA). All our agents hold valid intermediary licences and we comply fully with FIFA\'s regulations on intermediary activity. We can provide our licence documentation upon request.',
  },
  {
    q: 'How much does it cost to apply for scouting?',
    a: 'Applying for scouting and going through our initial evaluation is completely free. We do not charge players or their families for assessment. Our agency fees are only applied upon a successful transfer, and these are transparently agreed in writing before any contract is signed.',
  },
  {
    q: 'What age range do you accept?',
    a: 'We scout players between 15 and 28 years old. For players under 18, we require a parent or legal guardian to be involved in every step of the process, and all transfers of minors strictly comply with FIFA\'s regulations on international transfers of players under 18.',
  },
  {
    q: 'How long does the transfer process take?',
    a: 'It varies depending on the player\'s profile, the target clubs, and the transfer window. On average, from initial acceptance into our programme to a signed contract abroad takes between 3 and 9 months. Visa and work permit processing can add additional time depending on the destination country.',
  },
  {
    q: 'Which countries and leagues do you transfer players to?',
    a: 'Our primary focus is Europe — particularly England, Germany, Portugal, the Netherlands, Belgium, Denmark, and Sweden. We also have active connections in the Gulf (Saudi Arabia, UAE), as well as emerging leagues in North America and Asia.',
  },
  {
    q: 'Do you help with visas, accommodation, and settling in?',
    a: 'Absolutely. Our relocation team handles the full administrative process including work permit applications, international player clearance (ITC), travel arrangements, and initial accommodation. We also assign a dedicated welfare officer to each player for their first season abroad.',
  },
  {
    q: 'Can academy directors or coaches refer players to you?',
    a: 'Yes — and we actively encourage this. We have formal partnership agreements with several academies across Ghana. If you represent an academy and would like to discuss a referral arrangement, please contact us directly via email or WhatsApp.',
  },
  {
    q: 'What happens if a transfer does not work out?',
    a: 'Player welfare is our priority above all else. If a trial or contract does not result in the desired outcome, our team works with the player to review the situation, replan, and explore alternative clubs. We do not abandon players if the first attempt does not succeed.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="faq">
      <div className="container faq-inner">
        <div className="faq-header">
          <p className="section-label">Got Questions?</p>
          <h2 className="section-title">
            Frequently Asked <span>Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know before taking the first step. Can&apos;t
            find the answer? Reach out — we&apos;re happy to talk.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? 'open' : ''}`}
            >
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{f.q}</span>
                <ChevronDown size={20} className="faq-chevron" />
              </button>
              <div className="faq-answer">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Still have questions?</p>
          <div className="faq-cta-btns">
            <a href="#contact" className="btn-primary">Contact Us</a>
            <a
              href="https://wa.me/233240000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline faq-wa"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
