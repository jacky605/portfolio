import './Projects.css';
import { useLang } from '../LanguageContext';

const colors = ['#00d4ff', '#7b61ff', '#ff6b9d'];

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <span className="section-label">{p.label}</span>
          <h2 className="section-title">
            {p.titlePrefix}<span className="gradient-text">{p.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{p.subtitle}</p>
        </div>
        <div className="projects-grid">
          {p.cards.map((card, i) => (
            <article key={i} className="project-card">
              <div className="project-card-visual" style={{ '--accent': colors[i] }}>
                <div className="project-card-pattern">
                  {Array.from({ length: 8 }).map((_, j) => (
                    <span key={j} className="project-pattern-line" style={{ '--i': j }} />
                  ))}
                </div>
                <div className="project-card-overlay">
                  <span className="project-card-number">0{i + 1}</span>
                </div>
              </div>
              <div className="project-card-body">
                <span className="project-card-role">{card.role}</span>
                <h3 className="project-card-title">{card.title}</h3>
                <p className="project-card-description">{card.desc}</p>
                <div className="project-card-tags">
                  {card.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
