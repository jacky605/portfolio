import './About.css';
import { useLang } from '../LanguageContext';

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section className="about" id="about">
      <div className="about-bg">
        <div className="about-grid-bg" />
        <div className="about-glow" />
        <div className="about-particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="about-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-avatar-frame">
              <div className="about-avatar">
                <img src="/portfolio/programmer-icon.png" alt="Kwok Wang Man" className="about-avatar-img" />
              </div>
            </div>
            <div className="about-contact-card">
              <div className="about-contact-name">Kwok Wang Man <span className="about-contact-name-accent">Jacky</span></div>
              <div className="about-contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13.333 2.667H2.666c-.733 0-1.333.6-1.333 1.333v8c0 .733.6 1.333 1.333 1.333h10.667c.733 0 1.333-.6 1.333-1.333V4c0-.733-.6-1.333-1.333-1.333z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13.333 4L8 8.667 2.666 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                kwokwangman@gmail.com
              </div>
              <div className="about-contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1.333C5.054 1.333 2.667 3.72 2.667 6.667c0 3.666 5.333 8 5.333 8s5.334-4.334 5.334-8C13.334 3.72 10.946 1.333 8 1.333z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8" cy="6.667" r="2" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                {a.location}
              </div>
              <div className="about-contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14.667 11.4v1.067c0 .373-.08.733-.24 1.066-.16.334-.4.614-.72.84a2.93 2.93 0 01-1.12.46c-.427.08-.867.08-1.307.02a11.16 11.16 0 01-3.52-1.373 10.98 10.98 0 01-3.28-3.28 11.16 11.16 0 01-1.373-3.52A2.87 2.87 0 012.72 3.96c.226-.32.506-.56.84-.72.333-.16.693-.24 1.066-.24H5.7c.467 0 .853.333.92.787.08.56.227 1.107.44 1.627.2.427.2.88 0 1.307l-.44.933c.347.733.827 1.4 1.427 1.987l.933-.44c.427-.2.88-.2 1.307 0 .52.213 1.067.36 1.627.44.467.08.787.453.787.92z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {a.school}
              </div>
            </div>
          </div>
          <div className="about-content">
            <span className="section-label">{a.label}</span>
            <h2 className="section-title">
              {a.titlePrefix}<span className="gradient-text">{a.titleHighlight}</span>{a.titleSuffix || ''}
            </h2>
            <p className="about-text">{a.text1}</p>
            <p className="about-text">{a.text2}</p>
            <p className="about-subtitle">As a <span className="gradient-text">vibe Coder</span></p>
            <p className="about-text about-vibe">I am also a Vibe Coder who enjoys using AI Agents, and intensively use AI agentic tools for both frontend and backend coding. My primary AI agent tools include:</p>
            <ul className="about-vibe-list">
              <li><strong>Open Code</strong> — Used only for testing new models, which is to understand token consumption and model performance across various dimensions.</li>
              <li><strong>Claude Code</strong> — My main agentic tool for coding tasks with primarily DeepSeek V4Pro and Grok 4.5 models.</li>
            </ul>
            <div className="about-stats">
              {a.stats.map((s) => (
                <div key={s.label} className="about-stat">
                  <span className="about-stat-value gradient-text">{s.value}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>{t.hero.scroll}</span>
        <svg width="14" height="20" viewBox="0 0 14 20" fill="none">
          <rect x="1" y="1" width="12" height="18" rx="6" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="7" cy="7" r="2" fill="currentColor" className="scroll-dot"/>
        </svg>
      </div>
    </section>
  );
}
