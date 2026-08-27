import { useState, useEffect } from 'react';
import { useLang } from '../LanguageContext';
import './Navbar.css';

const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'projects', href: '#projects' },
  { key: 'skills', href: '#skills' },
  { key: 'contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a href="#" className="navbar-logo" onClick={closeMenu}>
          <span className="gradient-text">Portfolio</span>
        </a>
        <button
          className={`navbar-burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar-link" onClick={closeMenu}>
              {t.nav[link.key]}
            </a>
          ))}
          <button className="lang-switch" onClick={toggleLang}>
            {lang === 'en' ? '中' : 'EN'}
          </button>
          <a href="#contact" className="btn-primary navbar-cta" onClick={closeMenu}>
            {t.nav.getInTouch}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
