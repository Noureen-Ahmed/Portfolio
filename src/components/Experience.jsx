import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Languages, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <div className="experience-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="edu-cert"
        >
          <div className="sub-section">
            <h2 className="flex-title"><GraduationCap className="text-primary" /> Education</h2>
            <div className="timeline-item glass">
              <span className="date">2022 - 2026</span>
              <h3>B.Sc. in Computer Science</h3>
              <p>Ain Shams University | Cairo, Egypt</p>
              <p className="item-details text-muted">Currently in 4th year. Focusing on software engineering, data structures, and algorithms.</p>
            </div>
          </div>

          <div className="sub-section">
            <h2 className="flex-title"><Award className="text-primary" /> Certifications</h2>
            <div className="timeline-item glass">
              <span className="date">Sep 2024 - Mar 2025</span>
              <h3>Frontend Development Diploma</h3>
              <p>Route Academy</p>
              <p className="item-details text-muted">Intensive 6-month bootcamp covering Modern Web Standards, Advanced JS, React, and API Integration.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="skills-lang"
        >
          <div className="sub-section">
            <h2 className="flex-title"><CheckCircle2 className="text-primary" /> Core Skills</h2>
            <div className="skills-container glass">
              {['React.js', 'JavaScript (ES6)', 'Tailwind CSS', 'REST APIs', 'Context API', 'HTML5 & CSS3', 'Responsive Design', 'Git & GitHub'].map(skill => (
                <div key={skill} className="skill-item">
                  <span className="dot"></span> {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="sub-section">
            <h2 className="flex-title"><Languages className="text-primary" /> Languages</h2>
            <div className="lang-container glass">
              <div className="lang-item">
                <span>English</span>
                <span className="level">Professional</span>
              </div>
              <div className="lang-item">
                <span>Arabic</span>
                <span className="level">Native</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .experience-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
        }
        .flex-title {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 1.8rem;
          margin-bottom: 2rem;
        }
        .sub-section {
          margin-bottom: 4rem;
        }
        .timeline-item {
          padding: 2rem;
          margin-bottom: 1.5rem;
          position: relative;
        }
        .date {
          display: inline-block;
          background: var(--primary-color);
          color: white;
          padding: 0.2rem 0.8rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        .item-details {
          margin-top: 1rem;
          font-size: 0.9rem;
        }
        .skills-container {
          padding: 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          font-size: 0.95rem;
        }
        .dot {
          width: 8px;
          height: 8px;
          background: var(--primary-color);
          border-radius: 50%;
        }
        .lang-container {
          padding: 2rem;
        }
        .lang-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .lang-item:last-child { margin-bottom: 0; }
        .level {
          color: var(--primary-color);
          font-weight: 500;
          font-size: 0.9rem;
        }
        .text-primary { color: var(--primary-color); }
        @media (max-width: 968px) {
          .experience-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
        @media (max-width: 480px) {
          .skills-container { grid-template-columns: 1fr; }
          .timeline-item { padding: 1.5rem; }
          .flex-title { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
