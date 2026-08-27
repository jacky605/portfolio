import './Hero.css';
import { useLang } from '../LanguageContext';

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-particles">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className="hero-particle"
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
      <div className="container hero-content">
        <div className="hero-badge">{t.hero.badge}</div>
        <h1 className="hero-title">
          Hello,
          <br />
          <span className="gradient-text">I am Jacky</span>
        </h1>
        <p className="hero-description">{t.hero.desc}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            {t.hero.viewProjects}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3.75 9H14.25M14.25 9L10.5 5.25M14.25 9L10.5 12.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn-outline">
            {t.hero.contactMe}
          </a>
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
