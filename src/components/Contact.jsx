import './Contact.css';
import { useLang } from '../LanguageContext';

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section className="contact" id="contact">
      <div className="contact-bg">
        <div className="contact-glow" />
      </div>
      <div className="contact-body">
        <div className="container contact-inner">
          <span className="section-label">{c.label}</span>
          <h2 className="contact-title">
            {c.titleLine1}<span className="gradient-text">{c.titleHighlight}</span>{c.titleLine2}{c.titleLine3}
          </h2>
          <p className="contact-description">{c.desc}</p>
          <a href={`mailto:${c.email}`} className="contact-email">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.666 3.333H3.333c-.916 0-1.666.75-1.666 1.667v10c0 .917.75 1.667 1.666 1.667h13.333c.917 0 1.667-.75 1.667-1.667V5c0-.917-.75-1.667-1.667-1.667z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.666 5L10 10.833 3.333 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {c.email}
          </a>
          <div className="contact-links">
            <a href="#" className="contact-link">
              {c.github}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3.5 10.5L10.5 3.5M10.5 3.5H4.667M10.5 3.5V9.333" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="contact-link">
              {c.linkedin}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3.5 10.5L10.5 3.5M10.5 3.5H4.667M10.5 3.5V9.333" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container contact-footer">
        <span>{c.copyright}</span>
        <span>{c.tagline}</span>
      </div>
    </section>
  );
}
