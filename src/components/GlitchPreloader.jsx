import { useState, useEffect } from 'react';
import './GlitchPreloader.css';

const CHARS = '!<>-_\\/[]{}—=+*^?#$@%';

const LINES = [
  'Error 404:',
  'Conventional',
  'Developer Not Found.',
];

export default function GlitchPreloader({ onComplete }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState([]);
  const [currentText, setCurrentText] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (lineIndex < LINES.length) {
      let iteration = 0;
      const targetText = LINES[lineIndex];
      setIsGlitching(true);

      const interval = setInterval(() => {
        const scrambled = targetText
          .split('')
          .map((char, idx) => {
            if (char === ' ') return ' ';
            if (idx < iteration) return targetText[idx];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('');

        setCurrentText(scrambled);

        if (iteration >= targetText.length) {
          clearInterval(interval);
          setIsGlitching(false);
          setCompletedLines((prev) => [...prev, targetText]);
          setCurrentText('');
          setTimeout(() => setLineIndex((prev) => prev + 1), 300);
        }
        iteration += 1;
      }, 25);

      return () => clearInterval(interval);
    } else {
      const exitTimer = setTimeout(() => setExiting(true), 800);
      const removeTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1600);
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [lineIndex, onComplete]);

  return (
    <div className={`glitch-preloader ${exiting ? 'exiting' : ''}`}>
      <div className="glitch-lines">
        {completedLines.map((text, idx) => (
          <div key={idx} className="glitch-line-completed">
            {text}
          </div>
        ))}

        {lineIndex < LINES.length && (
          <div className="glitch-line-active">
            <span
              className={`glitch-text ${isGlitching ? 'glitching' : ''}`}
              data-text={currentText}
            >
              {currentText}
            </span>
            <span className="glitch-cursor" />
          </div>
        )}

        {lineIndex >= LINES.length && !exiting && (
          <div className="glitch-line-active">
            <span className="glitch-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}
